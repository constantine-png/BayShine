export const prerender = false;

import type { APIRoute } from 'astro';
import { z } from 'zod';
import { Resend } from 'resend';
import { processLead, renderLeadEmail, leadResponse } from '@/lib/leads';

const EmailSchema = z.object({
  email: z.email('Valid email required'),
  source: z.string().optional(),
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

  const result = EmailSchema.safeParse(raw);
  if (!result.success) {
    const msg = result.error.issues[0]?.message ?? 'Validation failed';
    return new Response(JSON.stringify({ error: msg }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { email, source } = result.data;
  const src = source ?? 'unknown';

  // Resend audience contact creation is best-effort — separate from lead pipeline
  const resendKey = import.meta.env.RESEND_API_KEY as string | undefined;
  const audienceId = import.meta.env.RESEND_AUDIENCE_ID as string | undefined;
  if (resendKey && audienceId) {
    new Resend(resendKey).contacts
      .create({ email, audienceId, unsubscribed: false })
      .catch(err => console.error('[email-capture] audience add failed:', err));
  }

  const html = renderLeadEmail({
    heading: `Email capture: ${src}`,
    rows: [
      ['Email', email],
      ['Source', src],
    ],
  });

  const delivery = await processLead(
    {
      source: 'email-capture',
      email,
      extra: { sourceLabel: src },
    },
    `EMAIL CAPTURE: ${src}: ${email}`,
    html,
  );

  return leadResponse(delivery);
};
