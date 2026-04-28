// Blog draft preview system. Set/clear the preview cookie via token.
// Usage: GET /api/preview?token=<PREVIEW_TOKEN>&slug=<post-slug>
// Clearing: GET /api/preview?clear=1
export const prerender = false;

import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');
  const slug = url.searchParams.get('slug');
  const clear = url.searchParams.get('clear');

  if (clear) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/blog',
        'Set-Cookie': 'bayshine-preview=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax',
      },
    });
  }

  const expected = import.meta.env.PREVIEW_TOKEN;
  if (!expected || token !== expected) {
    return new Response('Unauthorized', { status: 401 });
  }

  const destination = slug ? `/blog/${slug}` : '/blog';

  return new Response(null, {
    status: 302,
    headers: {
      Location: destination,
      'Set-Cookie': `bayshine-preview=1; Path=/; Max-Age=3600; HttpOnly; SameSite=Lax`,
    },
  });
};
