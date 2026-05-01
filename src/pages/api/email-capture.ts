// FOLLOWUP: Add a real list provider (Resend Audiences, ConvertKit, etc.)
// Currently logs and sends notification only.
export const prerender = false;

import type { APIRoute } from 'astro';
import { z } from 'zod';
import { Resend } from 'resend';

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

  console.log(`Email capture [${source ?? 'unknown'}]: ${email}`);

  const resendKey = import.meta.env.RESEND_API_KEY;

  if (resendKey) {
    new Resend(resendKey).emails.send({
      from: 'BayShine <hello@bayshine.net>',
      to: 'constantine@bayshine.net',
      subject: `EMAIL CAPTURE: ${source ?? 'unknown'}: ${email}`,
      html: `<p style="font-family:sans-serif;color:#0F1B2D;">New email capture from <strong>${source ?? 'unknown'}</strong>:</p><p style="font-family:sans-serif;font-size:16px;"><strong>${email}</strong></p>`,
    }).catch(err => console.error('Notification failed:', err));
  } else {
    console.log('[no RESEND_API_KEY] would have sent to constantine@bayshine.net:', { email, source });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
