// Sends a quote estimate directly to the customer via SMS when they request it.
export const prerender = false;

import type { APIRoute } from 'astro';
import { z } from 'zod';

const QuoteSMSSchema = z.object({
  phone: z.string().min(7, 'Valid phone required'),
  vehicle: z.string().min(2, 'Vehicle required'),
  service: z.string().min(1, 'Service required'),
  condition: z.string().min(1, 'Condition required'),
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

  const result = QuoteSMSSchema.safeParse(raw);
  if (!result.success) {
    const msg = result.error.issues[0]?.message ?? 'Validation failed';
    return new Response(JSON.stringify({ error: msg }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { phone, vehicle, service, condition, estimate } = result.data;

  const sid = import.meta.env.TWILIO_ACCOUNT_SID;
  const token = import.meta.env.TWILIO_AUTH_TOKEN;
  const from = import.meta.env.TWILIO_FROM_NUMBER;

  if (!sid || !token || !from) {
    // No Twilio configured — return 200 so the client can still show the SMS link fallback
    return new Response(JSON.stringify({ ok: true, fallback: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const body = [
    `Bay Shine quote estimate`,
    `Vehicle: ${vehicle}`,
    `Service: ${service}`,
    `Condition: ${condition}`,
    `Estimate: ${estimate}`,
    `Book: bayshine.net/contact`,
  ].join('\n');

  // Normalize phone number — strip non-digits and prepend +1 if US
  const digits = phone.replace(/\D/g, '');
  const toNumber = digits.startsWith('1') ? `+${digits}` : `+1${digits}`;

  const auth = Buffer.from(`${sid}:${token}`).toString('base64');

  try {
    const res = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ To: toNumber, From: from, Body: body }),
      }
    );

    if (!res.ok) {
      console.error('Quote SMS failed:', await res.text());
      return new Response(JSON.stringify({ ok: false, error: 'SMS delivery failed' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (err) {
    console.error('Quote SMS error:', err);
    return new Response(JSON.stringify({ ok: false, error: 'SMS error' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
