// Admin login POST handler — lives in /api/ to bypass Astro's CSRF guard.
// Checks ADMIN_PASSWORD, sets httpOnly session cookie, redirects to admin page.
export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const adminPassword = import.meta.env.ADMIN_PASSWORD;

  let pw: string | null = null;
  try {
    const form = await request.formData();
    pw = form.get('password') as string | null;
  } catch {
    return redirect('/field-guide/admin?error=1');
  }

  if (!pw || !adminPassword || pw !== adminPassword) {
    return redirect('/field-guide/admin?error=1');
  }

  const keyBuf = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(adminPassword),
  );
  const token = Array.from(new Uint8Array(keyBuf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

  cookies.set('fg_admin', token, {
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });

  return redirect('/field-guide/admin');
};
