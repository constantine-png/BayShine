export const prerender = false;

import type { APIRoute } from 'astro';
import { z } from 'zod';
import { Resend } from 'resend';

const ApartmentsSchema = z.object({
  propertyName: z.string().min(1, 'Property name required'),
  pmName: z.string().min(1, 'Contact name required'),
  pmPhone: z.string().min(7, 'Valid phone required'),
  unitCount: z.string().optional(),
  residentInterest: z.string().optional(),
  tiers: z.union([z.string(), z.array(z.string())]).optional(),
  notes: z.string().optional(),
});

export const POST: APIRoute = async ({ request }) => {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const result = ApartmentsSchema.safeParse(raw);
  if (!result.success) {
    const msg = result.error.issues[0]?.message ?? 'Validation failed';
    return new Response(JSON.stringify({ error: msg }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { propertyName, pmName, pmPhone, unitCount, residentInterest, tiers, notes } = result.data;
  const tiersStr = Array.isArray(tiers) ? tiers.join(', ') : (tiers ?? 'not specified');

  const emailHtml = `
    <div style="font-family:sans-serif;margin-bottom:24px;padding-bottom:16px;border-bottom:1px solid #e5e0d8;">
      <span style="font-family:Georgia,serif;font-size:20px;font-weight:700;color:#0F1B2D;letter-spacing:0.06em;">BayShine</span>
      <span style="font-family:sans-serif;font-size:11px;color:#7A8294;margin-left:8px;text-transform:uppercase;letter-spacing:0.1em;">Detailing</span>
    </div>
    <h2 style="font-family:sans-serif;color:#0F1B2D;margin-bottom:16px;">Apartments Inquiry: ${propertyName}</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:480px;">
      <tr><td style="padding:6px 0;color:#7A8294;width:160px;">Property</td><td style="padding:6px 0;color:#0F1B2D;font-weight:600;">${propertyName}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Manager</td><td style="padding:6px 0;color:#0F1B2D;font-weight:600;">${pmName}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Phone</td><td style="padding:6px 0;color:#0F1B2D;">${pmPhone}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Units</td><td style="padding:6px 0;color:#0F1B2D;">${unitCount ?? 'not provided'}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Resident interest</td><td style="padding:6px 0;color:#0F1B2D;">${residentInterest ?? 'not provided'}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Service tiers</td><td style="padding:6px 0;color:#0F1B2D;">${tiersStr}</td></tr>
      ${notes ? `<tr><td style="padding:6px 0;color:#7A8294;">Notes</td><td style="padding:6px 0;color:#0F1B2D;">${notes}</td></tr>` : ''}
    </table>
  `;

  const resendKey = import.meta.env.RESEND_API_KEY;
  const contactEmail = import.meta.env.CONTACT_EMAIL;

  if (resendKey && contactEmail) {
    await new Resend(resendKey).emails.send({
      from: 'BayShine <constantine@bayshine.net>',
      to: contactEmail,
      subject: `BayShine Apartments Inquiry: ${propertyName}`,
      html: emailHtml,
    }).catch(err => console.error('Apartments email failed:', err));
  } else {
    console.log('Apartments inquiry (no email configured):', { propertyName, pmName, pmPhone, unitCount });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
