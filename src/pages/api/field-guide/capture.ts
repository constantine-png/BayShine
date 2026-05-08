// Field Guide query capture endpoint.
// Accepts { query, email } — validates with Zod, hashes the IP, extracts UTMs from Referer.
// Persists to DB via insertQuery(); falls back to Resend notification when DATABASE_URL is unset.

export const prerender = false;

import type { APIRoute } from 'astro';
import { z } from 'zod';
import { insertQuery } from '@/lib/field-guide-db';

const CaptureSchema = z.object({
  query: z.string().min(1).max(500),
  email: z.string().email(),
});

async function hashIp(ip: string): Promise<string> {
  const hashBuf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip));
  return Array.from(new Uint8Array(hashBuf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
    .slice(0, 16);
}

export const POST: APIRoute = async ({ request }) => {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const parsed = CaptureSchema.safeParse(body);
  if (!parsed.success) {
    return new Response(
      JSON.stringify({ error: 'Validation failed', issues: parsed.error.issues }),
      { status: 422, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const { query, email } = parsed.data;

  // Hash IP for deduplication — not reversible, not a unique user identifier
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
  const ipHash = await hashIp(ip);

  // Extract UTMs from Referer header
  const referer = request.headers.get('referer');
  let utmSource: string | null = null;
  let utmMedium: string | null = null;
  let utmCampaign: string | null = null;
  if (referer) {
    try {
      const refUrl = new URL(referer);
      utmSource = refUrl.searchParams.get('utm_source');
      utmMedium = refUrl.searchParams.get('utm_medium');
      utmCampaign = refUrl.searchParams.get('utm_campaign');
    } catch {
      // Malformed Referer — ignore
    }
  }

  await insertQuery({
    query_text: query,
    email,
    ip_hash: ipHash,
    referrer: referer,
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
  });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
