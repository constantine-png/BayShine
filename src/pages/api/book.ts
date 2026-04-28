export const prerender = false;

import type { APIRoute } from 'astro';
import { z } from 'zod';
import { Resend } from 'resend';

const BUSINESS_PHONE = '+18133245522';

const BookingSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(7, 'Valid phone required'),
  vehicle: z.string().min(2, 'Vehicle description required'),
  zip: z.string().regex(/^\d{5}$/, 'Five-digit zip required'),
  address: z.string().optional(),
  timing: z.string().optional(),
  notes: z.string().optional(),
  service: z.string().optional(),
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

  const result = BookingSchema.safeParse(raw);
  if (!result.success) {
    const msg = result.error.issues[0]?.message ?? 'Validation failed';
    return new Response(JSON.stringify({ error: msg }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, phone, vehicle, zip, address, timing, notes, service } = result.data;

  const smsLines = [
    'BAY SHINE BOOKING',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Vehicle: ${vehicle}`,
    `Zip: ${zip}`,
    service ? `Service: ${service}` : null,
    address ? `Address: ${address}` : null,
    timing ? `Timing: ${timing}` : null,
    notes ? `Notes: ${notes}` : null,
  ].filter(Boolean).join('\n');

  const emailHtml = `
    <h2 style="font-family:sans-serif;color:#0F1B2D;margin-bottom:16px;">Bay Shine Booking Request</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:480px;">
      <tr><td style="padding:6px 0;color:#7A8294;width:120px;">Name</td><td style="padding:6px 0;color:#0F1B2D;font-weight:600;">${name}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Phone</td><td style="padding:6px 0;color:#0F1B2D;font-weight:600;">${phone}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Vehicle</td><td style="padding:6px 0;color:#0F1B2D;">${vehicle}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Zip</td><td style="padding:6px 0;color:#0F1B2D;">${zip}</td></tr>
      ${service ? `<tr><td style="padding:6px 0;color:#7A8294;">Service</td><td style="padding:6px 0;color:#0F1B2D;">${service}</td></tr>` : ''}
      ${address ? `<tr><td style="padding:6px 0;color:#7A8294;">Address</td><td style="padding:6px 0;color:#0F1B2D;">${address}</td></tr>` : ''}
      ${timing ? `<tr><td style="padding:6px 0;color:#7A8294;">Timing</td><td style="padding:6px 0;color:#0F1B2D;">${timing}</td></tr>` : ''}
      ${notes ? `<tr><td style="padding:6px 0;color:#7A8294;">Notes</td><td style="padding:6px 0;color:#0F1B2D;">${notes}</td></tr>` : ''}
    </table>
  `;

  const resendKey = import.meta.env.RESEND_API_KEY;
  const contactEmail = import.meta.env.CONTACT_EMAIL;

  await Promise.allSettled([
    sendSMS(smsLines).catch(err => console.error('SMS failed:', err)),
    resendKey && contactEmail
      ? new Resend(resendKey).emails.send({
          from: 'Bay Shine <bookings@bayshine.net>',
          to: contactEmail,
          subject: `Booking — ${name} (${zip})`,
          html: emailHtml,
        }).catch(err => console.error('Email failed:', err))
      : Promise.resolve(null),
  ]);

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
