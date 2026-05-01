export const prerender = false;

import type { APIRoute } from 'astro';
import { z } from 'zod';
import { Resend } from 'resend';

const FleetSchema = z.object({
  company: z.string().min(1, 'Company name required'),
  dmName: z.string().min(1, 'Contact name required'),
  dmPhone: z.string().min(7, 'Valid phone required'),
  fleetSize: z.string().optional(),
  service: z.string().optional(),
  frequency: z.string().optional(),
  visitVolume: z.string().optional(),
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

  const result = FleetSchema.safeParse(raw);
  if (!result.success) {
    const msg = result.error.issues[0]?.message ?? 'Validation failed';
    return new Response(JSON.stringify({ error: msg }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { company, dmName, dmPhone, fleetSize, service, frequency, visitVolume, notes } = result.data;

  const emailHtml = `
    <h2 style="font-family:sans-serif;color:#0F1B2D;margin-bottom:16px;">BayShine Fleet Inquiry</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:480px;">
      <tr><td style="padding:6px 0;color:#7A8294;width:140px;">Company</td><td style="padding:6px 0;color:#0F1B2D;font-weight:600;">${company}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Contact</td><td style="padding:6px 0;color:#0F1B2D;font-weight:600;">${dmName}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Phone</td><td style="padding:6px 0;color:#0F1B2D;font-weight:600;">${dmPhone}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Fleet size</td><td style="padding:6px 0;color:#0F1B2D;">${fleetSize ?? 'not specified'}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Visit volume</td><td style="padding:6px 0;color:#0F1B2D;">${visitVolume ?? 'not specified'}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Service</td><td style="padding:6px 0;color:#0F1B2D;">${service ?? 'not specified'}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Frequency</td><td style="padding:6px 0;color:#0F1B2D;">${frequency ?? 'not specified'}</td></tr>
      ${notes ? `<tr><td style="padding:6px 0;color:#7A8294;">Notes</td><td style="padding:6px 0;color:#0F1B2D;">${notes}</td></tr>` : ''}
    </table>
  `;

  const resendKey = import.meta.env.RESEND_API_KEY;
  const contactEmail = import.meta.env.CONTACT_EMAIL;

  if (resendKey && contactEmail) {
    await new Resend(resendKey).emails.send({
      from: 'BayShine <constantine@bayshine.net>',
      to: contactEmail,
      subject: `BayShine Fleet: ${company} (${fleetSize ?? '?'} units)`,
      html: emailHtml,
    }).catch(err => console.error('Fleet email failed:', err));
  } else {
    console.log('Fleet inquiry (no email configured):', { company, dmName, dmPhone });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
