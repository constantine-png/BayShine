export const prerender = false;

import type { APIRoute } from 'astro';

// Diagnostic endpoint — returns which expected env vars are present in the
// running lambda. Never returns values; only presence + length + 4-char
// prefix so we can detect typos/quote-wrapping. Auth-gated by ADMIN_PASSWORD
// query param so it's not openly readable.
export const GET: APIRoute = async ({ url }) => {
  const pw = url.searchParams.get('pw');
  const admin = process.env.ADMIN_PASSWORD;
  if (!admin || pw !== admin) {
    return new Response(JSON.stringify({ error: 'forbidden' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const tracked = [
    'RESEND_API_KEY',
    'CONTACT_EMAIL',
    'DATABASE_URL',
    'ADMIN_PASSWORD',
    'PREVIEW_TOKEN',
    'RESEND_AUDIENCE_ID',
  ];

  const summary = Object.fromEntries(
    tracked.map(name => {
      const v = process.env[name];
      return [
        name,
        {
          present: typeof v === 'string' && v.length > 0,
          length: typeof v === 'string' ? v.length : 0,
          prefix: typeof v === 'string' ? v.slice(0, 4) : null,
        },
      ];
    }),
  );

  const allNames = Object.keys(process.env)
    .filter(k => /resend|contact|database|admin|preview|audience/i.test(k))
    .sort();

  return new Response(
    JSON.stringify(
      {
        tracked: summary,
        matchingNamesInEnv: allNames,
        totalEnvVarCount: Object.keys(process.env).length,
        nodeVersion: process.version,
      },
      null,
      2,
    ),
    { status: 200, headers: { 'Content-Type': 'application/json' } },
  );
};
