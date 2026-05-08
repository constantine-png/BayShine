// Field Guide search — PostgreSQL full-text search via tsvector GIN index.
// Falls back to empty results when DATABASE_URL is not set.
export const prerender = false;

import type { APIRoute } from 'astro';
import { getDb } from '@/lib/db';

export interface ScenarioResult {
  slug: string;
  title: string;
  problem: string;
  synopsis: string;
  category_name: string;
  severity: 'quick-fix' | 'moderate' | 'advanced';
}

export const POST: APIRoute = async ({ request }) => {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }

  const q = (body as Record<string, unknown>)?.query;
  if (typeof q !== 'string' || q.trim().length < 2) {
    return json({ error: 'query must be at least 2 characters' }, 422);
  }
  if (q.length > 200) {
    return json({ error: 'query must be 200 characters or fewer' }, 422);
  }

  const query = q.trim();
  const sql = getDb();

  if (!sql) {
    return json({ results: [], hasMore: false, empty: true });
  }

  try {
    const rows = await sql`
      SELECT
        s.slug,
        s.title,
        s.problem,
        s.synopsis,
        c.name   AS category_name,
        s.severity
      FROM scenarios s
      JOIN categories c ON c.id = s.category_id
      WHERE s.published = true
        AND s.tier = 'public'
        AND s.search_vector @@ plainto_tsquery('english', ${query})
      ORDER BY ts_rank(s.search_vector, plainto_tsquery('english', ${query})) DESC
      LIMIT 8
    ` as ScenarioResult[];

    return json({
      results: rows,
      hasMore: false,
      empty: rows.length === 0,
    });
  } catch (err) {
    console.error('[search] query failed:', err);
    return json({ results: [], hasMore: false, empty: true });
  }
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
