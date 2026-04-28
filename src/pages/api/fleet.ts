export const prerender = false;

import type { APIRoute } from 'astro';
import { z } from 'zod';
import { Resend } from 'resend';

const BUSINESS_PHONE = '+18133245522';

const FleetSchema = z.object({
  company: z.string().min(1, 'Company name required'),
  dmName: z.string().min(1, 'Contact name required'),
  dmPhone: z.string().min(7, 'Valid phone required'),
  fleetSize: z.string().optional(),
  service: z.string().optional(),
  frequency: z.string().optional(),
  notes: z.string().optional(),
});

async function sendSMS(body: string): Promise<void> {
  const sid = import.meta.env.TWILIO_ACCOUNT_SID;
  const token = import.meta.env.TWILIO_AUTH_TOKEN;
  const from = import.meta.env.TWILIO_FROM_NUMBER;
  const to = import.meta.env.TWILIO_TO_NUMBER ?? BUSINESS_PHONE;

  if (!sid || !token || !from) return;

  const auth = Buffer.from(`${sid}:${token}`).toString('base64');
  await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ To: to, From: from, Body: body }),
    }
  );
}

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

  const { company, dmName, dmPhone, fleetSize, service, frequency, notes } = result.data;

  const smsBody = [
    `FLEET INQUIRY — ${company}`,
    `Contact: ${dmName}`,
    `Phone: ${dmPhone}`,
    `Fleet size: ${fleetSize ?? 'not specified'}`,
    `Service: ${service ?? 'not specified'}`,
    `Frequency: ${frequency ?? 'not specified'}`,
    notes ? `Notes: ${notes}` : null,
  ].filter(Boolean).join('\n');

  const emailHtml = `
    <h2 style="font-family:sans-serif;color:#0F1B2D;margin-bottom:16px;">Bay Shine Fleet Inquiry</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:480px;">
      <tr><td style="padding:6px 0;color:#7A8294;width:140px;">Company</td><td style="padding:6px 0;color:#0F1B2D;font-weight:600;">${company}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Contact</td><td style="padding:6px 0;color:#0F1B2D;font-weight:600;">${dmName}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Phone</td><td style="padding:6px 0;color:#0F1B2D;font-weight:600;">${dmPhone}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Fleet size</td><td style="padding:6px 0;color:#0F1B2D;">${fleetSize ?? '—'}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Service</td><td style="padding:6px 0;color:#0F1B2D;">${service ?? '—'}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Frequency</td><td style="padding:6px 0;color:#0F1B2D;">${frequency ?? '—'}</td></tr>
      ${notes ? `<tr><td style="padding:6px 0;color:#7A8294;">Notes</td><td style="padding:6px 0;color:#0F1B2D;">${notes}</td></tr>` : ''}
    </table>
  `;

  const resendKey = import.meta.env.RESEND_API_KEY;
  const contactEmail = import.meta.env.CONTACT_EMAIL;

  await Promise.allSettled([
    sendSMS(smsBody).catch(err => console.error('Fleet SMS failed:', err)),
    resendKey && contactEmail
      ? new Resend(resendKey).emails.send({
          from: 'Bay Shine <fleet@bayshine.net>',
          to: contactEmail,
          subject: `FLEET: ${company} — ${fleetSize ?? '?'} units`,
          html: emailHtml,
        }).catch(err => console.error('Fleet email failed:', err))
      : Promise.resolve(null),
  ]);

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
