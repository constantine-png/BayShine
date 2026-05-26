// DB client for Neon serverless Postgres.
// Returns null when DATABASE_URL is not configured — all callers must handle this.
// Graceful degradation: categories serve from seed, captures fallback to Resend.
//
// Uses `process.env.DATABASE_URL` rather than `import.meta.env.DATABASE_URL`
// because Astro/Vite inlines `import.meta.env.X` at build time. If the build
// runner doesn't have the value, the bundle ships with `undefined` baked in
// and later dashboard changes have no effect.

import { neon } from '@neondatabase/serverless';

let _sql: ReturnType<typeof neon> | null = null;

export function getDb() {
  if (_sql) return _sql;
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  _sql = neon(url);
  return _sql;
}
