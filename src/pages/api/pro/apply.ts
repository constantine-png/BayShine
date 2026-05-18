export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const experienceLabels: Record<string, string> = {
  professional: 'Yes, professionally',
  hobby: 'Yes, on weekends or as a hobby',
  learning: 'Not yet, ready to learn',
};

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
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

  const name = (data.name ?? '').trim();
  const email = (data.email ?? '').trim();
  const location = (data.location ?? '').trim();
  const experience = (data.experience ?? '').trim();
  const notes = (data.notes ?? '').trim();

  if (!name || !email || !location || !experience || !notes) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (notes.length > 4000) {
    return new Response(JSON.stringify({ error: 'Notes too long' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const experienceLabel = experienceLabels[experience] ?? experience;

  const emailBody = `
    <div style="font-family:sans-serif;margin-bottom:24px;padding-bottom:16px;border-bottom:1px solid #e5e0d8;">
      <span style="font-family:Georgia,serif;font-size:20px;font-weight:700;color:#0F1B2D;letter-spacing:0.06em;">BAYSHINE</span>
      <span style="font-family:sans-serif;font-size:11px;color:#C9A961;margin-left:10px;text-transform:uppercase;letter-spacing:0.18em;font-weight:600;">Operators</span>
    </div>
    <h2 style="font-family:sans-serif;color:#0F1B2D;margin:0 0 8px 0;">First-wave operator application</h2>
    <p style="font-family:sans-serif;color:#7A8294;font-size:12px;margin:0 0 24px 0;">Submitted via pro.bayshine.net</p>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;">
      <tr><td style="padding:6px 0;color:#7A8294;width:140px;vertical-align:top;">Name</td><td style="padding:6px 0;color:#0F1B2D;font-weight:600;">${escapeHtml(name)}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;vertical-align:top;">Email</td><td style="padding:6px 0;color:#0F1B2D;font-weight:600;">${escapeHtml(email)}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;vertical-align:top;">Location</td><td style="padding:6px 0;color:#0F1B2D;">${escapeHtml(location)}</td></tr>
      <tr><td style="padding:6px 0;color:#7A8294;vertical-align:top;">Experience</td><td style="padding:6px 0;color:#0F1B2D;">${escapeHtml(experienceLabel)}</td></tr>
    </table>
    <div style="margin-top:24px;padding:16px;background:#f5f2ec;border-left:3px solid #C9A961;">
      <p style="font-family:sans-serif;font-size:11px;color:#7A8294;text-transform:uppercase;letter-spacing:0.12em;margin:0 0 8px 0;font-weight:600;">Why they want this</p>
      <p style="font-family:sans-serif;font-size:14px;color:#1A1410;margin:0;white-space:pre-wrap;line-height:1.55;">${escapeHtml(notes)}</p>
    </div>
    <p style="font-family:sans-serif;font-size:12px;color:#7A8294;margin-top:24px;">
      Reply directly to this email to respond to <span style="color:#0F1B2D;font-weight:600;">${escapeHtml(name)}</span>.
    </p>
  `;

  const resendKey = import.meta.env.RESEND_API_KEY;

  if (resendKey) {
    try {
      await new Resend(resendKey).emails.send({
        from: 'BayShine Operators <operators@bayshine.net>',
        to: 'constantine@bayshine.net',
        replyTo: email,
        subject: `BayShine Operators application: ${name} (${location})`,
        html: emailBody,
      });
    } catch (err) {
      console.error('Operator application email failed:', err);
      return new Response(JSON.stringify({ error: 'Email delivery failed' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } else {
    console.log('[no RESEND_API_KEY] would have sent operator application:', { name, email, location, experience });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
