// DB client for Neon serverless Postgres.
// Returns null when DATABASE_URL is not configured — all callers must handle this.
// Graceful degradation: categories serve from seed, captures fallback to Resend.
//
// `process.env.DATABASE_URL` resolves at runtime (Vercel sets it on the lambda).
// Fall back to `import.meta.env.DATABASE_URL` so local `pnpm dev` works — Vite
// populates `import.meta.env` from .env files but not process.env.

import { neon } from '@neondatabase/serverless';

let _sql: ReturnType<typeof neon> | null = null;

export function getDb() {
  if (_sql) return _sql;
  const url =
    process.env.DATABASE_URL ||
    (import.meta.env.DATABASE_URL as string | undefined);
  if (!url) return null;
  _sql = neon(url);
  return _sql;
}
