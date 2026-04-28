// Book Now form handler. Sends SMS to Constantine + email to inbox.
// Uses Twilio REST API directly (avoids heavy SDK bundle).
export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const BUSINESS_PHONE = '+18133245522';

async function sendSMS(body: string): Promise<boolean> {
  const sid = import.meta.env.TWILIO_ACCOUNT_SID;
  const token = import.meta.env.TWILIO_AUTH_TOKEN;
  const from = import.meta.env.TWILIO_FROM_NUMBER;
  const to = import.meta.env.TWILIO_TO_NUMBER ?? BUSINESS_PHONE;

  if (!sid || !token || !from) return false;

  const auth = Buffer.from(`${sid}:${token}`).toString('base64');

  const res = await fetch(
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

  return res.ok;
}

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, string>;

  try {
    data = await request.json() as Record<string, string>;
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, phone, vehicle, zip, address, timing, notes } = data;

  if (!name || !phone || !vehicle || !zip) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const smsBody = [
    `BAY SHINE BOOKING REQUEST`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Vehicle: ${vehicle}`,
    `Zip: ${zip}`,
    address ? `Address: ${address}` : null,
    timing ? `Timing: ${timing}` : null,
    notes ? `Notes: ${notes}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  const emailBody = `
    <h2 style="font-family:sans-serif;color:#0F1B2D;">Bay Shine Booking Request</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;">
      <tr><td style="padding:6px 0;color:#7A8294;width:120px;">Name</td><td style="padding:6px 0;color:#0F1B2D;font-weight:600;">${name}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Phone</td><td style="padding:6px 0;color:#0F1B2D;font-weight:600;">${phone}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Vehicle</td><td style="padding:6px 0;color:#0F1B2D;">${vehicle}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;">Zip</td><td style="padding:6px 0;color:#0F1B2D;">${zip}</td></tr>
      ${address ? `<tr><td style="padding:6px 0;color:#7A8294;">Address</td><td style="padding:6px 0;color:#0F1B2D;">${address}</td></tr>` : ''}
      ${timing ? `<tr><td style="padding:6px 0;color:#7A8294;">Timing</td><td style="padding:6px 0;color:#0F1B2D;">${timing}</td></tr>` : ''}
      ${notes ? `<tr><td style="padding:6px 0;color:#7A8294;">Notes</td><td style="padding:6px 0;color:#0F1B2D;">${notes}</td></tr>` : ''}
    </table>
  `;

  const resendKey = import.meta.env.RESEND_API_KEY;
  const contactEmail = import.meta.env.CONTACT_EMAIL;

  const results = await Promise.allSettled([
    sendSMS(smsBody),
    resendKey && contactEmail
      ? new Resend(resendKey).emails.send({
          from: 'Bay Shine <bookings@bayshine.net>',
          to: contactEmail,
          subject: `Booking Request — ${name} (${zip})`,
          html: emailBody,
        })
      : Promise.resolve(null),
  ]);

  // Return success even if notifications fail — log the issue but don't block the user.
  const smsOk = results[0].status === 'fulfilled';
  const emailOk = results[1].status === 'fulfilled';

  if (!smsOk && !emailOk) {
    console.error('Contact form: both SMS and email failed', results);
    // Still return 200 — avoid giving the user a false error when the submission itself worked.
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
