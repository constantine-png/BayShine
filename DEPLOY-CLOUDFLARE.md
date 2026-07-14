# Deploying on Cloudflare Pages

The site can build for either host. The adapter is chosen at build time in
`astro.config.mjs`:

- **Vercel** (default) — unchanged; nothing about the existing setup moves.
- **Cloudflare** — selected automatically on Cloudflare Pages (it sets
  `CF_PAGES=1`), or force it anywhere with `DEPLOY_TARGET=cloudflare`.

## One-time Cloudflare Pages setup

1. **Create the project:** Cloudflare Dashboard → Workers & Pages → Create →
   Pages → Connect to Git → pick `constantine-png/BayShine`.
2. **Build settings:**
   - Framework preset: **Astro**
   - Build command: **`pnpm build`** (auto-detects Cloudflare via `CF_PAGES`;
     or set it explicitly to `DEPLOY_TARGET=cloudflare pnpm build`)
   - Build output directory: **`dist`**
3. **Compatibility:** `wrangler.toml` already sets `nodejs_compat` and a
   compatibility date. That is what lets the existing `process.env.*` code read
   secrets at runtime.
4. **Environment variables / secrets** (Settings → Environment variables). Add
   whatever the API routes use, e.g.:
   - `DATABASE_URL` (Neon) — booking/lead storage
   - `RESEND_API_KEY` — email
   - any `FIELD_GUIDE_*`, `PRO_*`, `FEATURABLE_WIDGET_ID` values in use
   > Missing DB/email vars do not crash the site — `src/lib/db.ts` degrades
   > gracefully (captures fall back to Resend / seed data).
5. **Custom domain:** add `bayshine.net` under the Pages project once the first
   build is green.

## Known differences from Vercel (handle before full cutover)

- **OG images** (`src/pages/api/og.png.ts`) use `@vercel/og`. The build bundles
  fine, but runtime on Workers is unverified — test `/api/og.png` after the first
  deploy and swap to `workers-og` if it errors.
- **`pro.bayshine.net` rewrite** from `vercel.json` is host-based and is **not**
  reproduced in `public/_redirects` (Cloudflare `_redirects` can't match host).
  Recreate it as a Cloudflare Bulk Redirect / rule, or with Astro middleware,
  before pointing `pro.bayshine.net` at Pages. See `DEPLOY-PRO-SUBDOMAIN.md`.
- **Security headers + sitemap redirect** are preserved via `public/_headers`
  and `public/_redirects` (Vercel ignores these; Cloudflare applies them).

## Local build check

```sh
DEPLOY_TARGET=cloudflare pnpm build   # produces the Cloudflare worker in dist/
```
