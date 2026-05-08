// Field Guide search endpoint.
// Validates the query, returns an empty result set.
// Does NOT persist the query — capture happens at /api/field-guide/capture when email is provided.
// FOLLOWUP: implement PostgreSQL full-text search (tsvector) or content collection filter
//           when scenarios are published. API contract is stable: { results, hasMore, empty }.

export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const q = (body as Record<string, unknown>)?.query;
  if (typeof q !== 'string' || q.trim().length < 2) {
    return new Response(JSON.stringify({ error: 'query must be at least 2 characters' }), {
      status: 422,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  if (q.length > 200) {
    return new Response(JSON.stringify({ error: 'query must be 200 characters or fewer' }), {
      status: 422,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(
    JSON.stringify({ results: [], hasMore: false, empty: true }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
