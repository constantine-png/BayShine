// Shared lead handling — used by all booking/inquiry endpoints.
//
// Two channels run in parallel:
//   1. Database insert (Neon) — authoritative record, recoverable via /api/admin/leads
//   2. Resend email — operator notification, target turnaround under 2 hours
//
// If the DB write succeeds but email fails, the API still returns 200 — the lead
// is captured. The operator dashboard surfaces email-delivery failures so they
// can be retried or worked manually. If BOTH fail, we return 502 and the form
// shows an error asking the customer to call.
//
// The previous implementation returned 200 OK with no email when RESEND_API_KEY
// was unset — that swallowed every production lead for weeks. Never again.

import { Resend } from 'resend';
import { getDb } from './db';

export type LeadSource =
  | 'book'
  | 'fleet'
  | 'apartments'
  | 'quote'
  | 'email-capture';

export interface LeadPayload {
  source: LeadSource;
  name?: string;
  phone?: string;
  email?: string;
  vehicle?: string;
  zip?: string;
  address?: string;
  service?: string;
  notes?: string;
  // Anything not in the canonical columns (fleet size, tiers selected, estimate, etc.)
  extra?: Record<string, unknown>;
}

export interface DeliveryResult {
  recorded: boolean;
  emailed: boolean;
  emailError?: string;
  dbError?: string;
}

const FROM = 'BayShine <hello@bayshine.net>';

// Read env vars at runtime, not via `import.meta.env`. Astro/Vite inlines
// `import.meta.env.X` literally at build time — if Vercel's build runner
// didn't have a value set, the bundle ships with `undefined` baked in and
// later dashboard changes have no effect. `process.env` resolves per request.
function env(name: string): string | undefined {
  const v = process.env[name];
  return typeof v === 'string' && v.length > 0 ? v : undefined;
}

function contactEmail(): string {
  return env('CONTACT_EMAIL') ?? 'constantine@bayshine.net';
}

async function recordLead(payload: LeadPayload): Promise<{ ok: true } | { ok: false; error: string }> {
  const db = getDb();
  if (!db) {
    return { ok: false, error: 'DATABASE_URL not configured' };
  }
  try {
    await db`
      INSERT INTO leads (source, name, phone, email, vehicle, zip, address, service, notes, extra)
      VALUES (
        ${payload.source},
        ${payload.name ?? null},
        ${payload.phone ?? null},
        ${payload.email ?? null},
        ${payload.vehicle ?? null},
        ${payload.zip ?? null},
        ${payload.address ?? null},
        ${payload.service ?? null},
        ${payload.notes ?? null},
        ${JSON.stringify(payload.extra ?? {})}::jsonb
      )
    `;
    return { ok: true };
  } catch (err) {
    const msg = (err as Error).message ?? 'unknown DB error';
    // The leads table is added in migration 005. Until that's applied, the
    // table doesn't exist — we don't want that to look like a real error.
    // The console.log payload above is still the recoverable backup.
    if (/relation .*leads.* does not exist/i.test(msg)) {
      return { ok: false, error: 'leads table not yet migrated (run migrations/005_leads.sql)' };
    }
    console.error('[leads] DB insert failed:', msg, JSON.stringify(payload));
    return { ok: false, error: msg };
  }
}

async function sendEmail(subject: string, html: string): Promise<{ ok: true } | { ok: false; error: string }> {
  const key = env('RESEND_API_KEY');
  if (!key) {
    return { ok: false, error: 'RESEND_API_KEY not configured' };
  }
  try {
    const { error } = await new Resend(key).emails.send({
      from: FROM,
      to: contactEmail(),
      subject,
      html,
    });
    if (error) {
      const msg = error.message ?? 'resend returned error';
      console.error('[leads] Resend rejected send:', msg, error);
      return { ok: false, error: msg };
    }
    return { ok: true };
  } catch (err) {
    const msg = (err as Error).message ?? 'unknown send error';
    console.error('[leads] Resend send threw:', msg);
    return { ok: false, error: msg };
  }
}

/**
 * Process a lead end-to-end: record in DB, notify by email. Always logs the
 * inbound payload so it can be recovered from runtime logs if both channels
 * fail. Returns flags the caller uses to decide response status.
 */
export async function processLead(
  payload: LeadPayload,
  subject: string,
  html: string,
): Promise<DeliveryResult> {
  // Belt: log always, so runtime logs are the ultimate backup
  console.log('[leads] received', JSON.stringify(payload));

  const [dbResult, emailResult] = await Promise.all([
    recordLead(payload),
    sendEmail(subject, html),
  ]);

  return {
    recorded: dbResult.ok,
    emailed: emailResult.ok,
    dbError: dbResult.ok ? undefined : dbResult.error,
    emailError: emailResult.ok ? undefined : emailResult.error,
  };
}

/**
 * Render a payload's key/value pairs as the standard branded HTML email used
 * across all booking endpoints. Each endpoint passes its own field labels in
 * `rows` so the email reflects what the customer actually answered.
 */
export function renderLeadEmail(opts: {
  heading: string;
  rows: Array<[label: string, value: string | undefined | null]>;
}): string {
  const filled = opts.rows.filter(([, v]) => v != null && String(v).trim() !== '');
  const lines = filled
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 0;color:#7A8294;width:140px;">${escapeHtml(label)}</td>` +
        `<td style="padding:6px 0;color:#0F1B2D;font-weight:500;">${escapeHtml(String(value))}</td></tr>`,
    )
    .join('');

  return `
    <div style="font-family:sans-serif;margin-bottom:24px;padding-bottom:16px;border-bottom:1px solid #e5e0d8;">
      <span style="font-family:Georgia,serif;font-size:20px;font-weight:700;color:#0F1B2D;letter-spacing:0.06em;">BayShine</span>
      <span style="font-family:sans-serif;font-size:11px;color:#7A8294;margin-left:8px;text-transform:uppercase;letter-spacing:0.1em;">Detailing</span>
    </div>
    <h2 style="font-family:sans-serif;color:#0F1B2D;margin-bottom:16px;">${escapeHtml(opts.heading)}</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:520px;">
      ${lines}
    </table>
    <p style="font-family:sans-serif;font-size:11px;color:#7A8294;margin-top:24px;">
      Recorded in lead database. Reply to customer within 2 hours.
    </p>
  `;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Translate a DeliveryResult into the HTTP response sent to the form.
 *
 * Always 200. Why not 5xx on failure? Cloudflare sits in front of bayshine.net
 * and replaces upstream 5xx responses with its own plain-text "error code: 502"
 * page — that would prevent the form from seeing our real error JSON. So we
 * return 200 with `ok: false` and a customer-facing `error` string; the client
 * scripts already key off `json.ok`, not the status code. Both channels failing
 * is logged at error level below so it still surfaces in monitoring.
 */
export function leadResponse(result: DeliveryResult): Response {
  const totalFailure = !result.recorded && !result.emailed;

  if (totalFailure) {
    console.error(
      '[leads] TOTAL FAILURE — both channels rejected',
      JSON.stringify({ dbError: result.dbError, emailError: result.emailError }),
    );
    return new Response(
      JSON.stringify({
        ok: false,
        error: 'Lead capture failed. Please call (813) 324-5522.',
        dbError: result.dbError,
        emailError: result.emailError,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  }

  // At least one channel landed. Include warnings so the operator dashboard
  // can flag partial deliveries.
  return new Response(
    JSON.stringify({
      ok: true,
      recorded: result.recorded,
      emailed: result.emailed,
      ...(result.dbError ? { dbWarning: result.dbError } : {}),
      ...(result.emailError ? { emailWarning: result.emailError } : {}),
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } },
  );
}
