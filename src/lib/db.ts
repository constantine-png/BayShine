// DB client for Neon serverless Postgres.
// Returns null when DATABASE_URL is not configured — all callers must handle this.
// Graceful degradation: categories serve from seed, captures fallback to Resend.

import { neon } from '@neondatabase/serverless';

let _sql: ReturnType<typeof neon> | null = null;

export function getDb() {
  if (_sql) return _sql;
  const url = import.meta.env.DATABASE_URL;
  if (!url) return null;
  _sql = neon(url);
  return _sql;
}
