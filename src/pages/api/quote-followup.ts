export const prerender = false;

import type { APIRoute } from 'astro';
import { z } from 'zod';
import { Resend } from 'resend';

const CONTACT_EMAIL = 'constantpass@gmail.com';

const QuoteFollowupSchema = z.object({
  name: z.string().min(1, 'Name required'),
  phone: z.string().min(1, 'Phone required'),
  notes: z.string().optional(),
  vehicle: z.string().min(1, 'Vehicle required'),
  service: z.string().min(1, 'Service required'),
  condition: z.string().optional(),
  estimate: z.string().min(1, 'Estimate required'),
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

  const result = QuoteFollowupSchema.safeParse(raw);
  if (!result.success) {
    const msg = result.error.issues[0]?.message ?? 'Validation failed';
    return new Response(JSON.stringify({ error: msg }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, phone, notes, vehicle, service, condition, estimate } = result.data;

  const emailHtml = `
    <h2 style="font-family:sans-serif;color:#0F1B2D;margin-bottom:16px;">New Quote Lead</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:440px;">
      <tr><td style="padding:6px 0;color:#7A8294;width:110px;">Name</td><td style="padding:6px 0;color:#0F1B2D;font-weight:600;">${name}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Phone</td><td style="padding:6px 0;color:#0F1B2D;font-weight:600;">${phone}</td></tr>
      ${notes ? `<tr><td style="padding:6px 0;color:#7A8294;vertical-align:top;">Notes</td><td style="padding:6px 0;color:#0F1B2D;">${notes}</td></tr>` : ''}
      <tr><td style="padding:8px 0 4px;color:#7A8294;border-top:1px solid #e5e7eb;" colspan="2"></td></tr>
      <tr><td style="padding:4px 0;color:#7A8294;">Vehicle</td><td style="padding:4px 0;color:#0F1B2D;">${vehicle}</td></tr>
      <tr><td style="padding:4px 0;color:#7A8294;">Service</td><td style="padding:4px 0;color:#0F1B2D;">${service}</td></tr>
      ${condition ? `<tr><td style="padding:4px 0;color:#7A8294;">Condition</td><td style="padding:4px 0;color:#0F1B2D;">${condition}</td></tr>` : ''}
      <tr><td style="padding:4px 0;color:#7A8294;">Estimate</td><td style="padding:4px 0;color:#0F1B2D;font-weight:600;">${estimate}</td></tr>
    </table>
  `;

  const resendKey = import.meta.env.RESEND_API_KEY;

  if (resendKey) {
    await new Resend(resendKey).emails.send({
      from: 'BayShine <constantine@bayshine.net>',
      to: CONTACT_EMAIL,
      subject: `Quote lead: ${name} / ${service}`,
      html: emailHtml,
    }).catch(err => console.error('Quote followup email failed:', err));
  } else {
    console.log('Quote followup (no email configured):', { name, phone, vehicle, service, estimate });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
