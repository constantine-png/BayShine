export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

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

  const emailBody = `
    <div style="font-family:sans-serif;margin-bottom:24px;padding-bottom:16px;border-bottom:1px solid #e5e0d8;">
      <span style="font-family:Georgia,serif;font-size:20px;font-weight:700;color:#0F1B2D;letter-spacing:0.06em;">BayShine</span>
      <span style="font-family:sans-serif;font-size:11px;color:#7A8294;margin-left:8px;text-transform:uppercase;letter-spacing:0.1em;">Detailing</span>
    </div>
    <h2 style="font-family:sans-serif;color:#0F1B2D;">Booking Request</h2>
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

  if (resendKey) {
    await new Resend(resendKey).emails.send({
      from: 'BayShine <hello@bayshine.net>',
      to: 'constantine@bayshine.net',
      subject: `BayShine Booking Request: ${name} (${zip})`,
      html: emailBody,
    }).catch(err => console.error('Contact form email failed:', err));
  } else {
    console.log('[no RESEND_API_KEY] would have sent to constantine@bayshine.net:', { name, phone, vehicle, zip });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
