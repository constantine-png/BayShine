# Field Guide — Build Assumptions & Deferred Decisions

Generated: 2026-05-08

## Database setup required

The Field Guide query capture and category counts require a Neon (serverless Postgres) database.
Until DATABASE_URL is set in Vercel environment variables, the site degrades gracefully:
- Categories render from the seed constant in `src/lib/field-guide-db.ts`
- Published counts show as "—"
- Query + email captures fall back to a Resend notification email

**To activate:**
1. Create account at neon.tech (free tier is sufficient)
2. Create a new project, copy the connection string
3. Run `migrations/001_field_guide_init.sql` against the database
4. Add DATABASE_URL to Vercel project environment variables
5. Add ADMIN_PASSWORD to Vercel env vars (used for /field-guide/admin)

## Admin authentication

/field-guide/admin uses a SHA-256 hash of ADMIN_PASSWORD as the session token.
This is not production-grade auth — it's a first-party tool for one operator.
Upgrade to a proper session library (oslo, lucia, or @auth/astro) before sharing access with anyone else.

## Category counts

Category published_count is stored in the DB. It is NOT auto-incremented by a trigger.
When a scenario is published (set published = true), increment the count manually:
`UPDATE categories SET published_count = published_count + 1 WHERE slug = 'paint';`
The auto-increment trigger should be added to the migration when the scenario publish flow is built.

## Chapter 07

The original FieldGuideBook had chapters 01-06 and 08 — chapter 07 was never written.
The new Field Guide does not reference chapter numbers at all (correct decision — the guide's scope is now "unlimited scenarios" not "N chapters").
The old chapter content from FieldGuideBook.tsx is archived below in case any prose is useful.

[Paste the chapter body content from FieldGuideBook.tsx here if you want to reference it — the file is deleted.]

## Affiliate disclosure

The affiliate disclosure in the footer note on /field-guide reads "Commission disclosures are inline."
This is a placeholder. Before publishing scenarios with affiliate links:
1. Add FTC-compliant disclosure to each scenario page: "This guide contains affiliate links. BayShine earns a commission on qualifying purchases. We only list products used in our own work."
2. Add the disclosure to FieldGuideLayout's footer area
3. Add the disclosure to the per-scenario product card component (not yet built)

## IP hashing

Query captures hash the submitter's IP with SHA-256 and take the first 16 hex chars.
This is used for deduplication only — it is not reversible to the original IP.
Shared IPs (NAT, corporate networks, mobile carriers) will appear as the same hash.
This is acceptable for the dedup purpose; do not use it as a unique user identifier.

## UTM extraction

UTMs are extracted from the Referer header URL. This works for organic traffic with UTM parameters in the inbound URL. It does NOT capture UTMs set by JavaScript (window.location) on the current page after load — those would require a client-side pass-through, which is a future enhancement.

## Search implementation

/api/field-guide/search currently returns an empty result set always.
When scenarios are published, implement actual search:
- Option A: PostgreSQL full-text search (tsvector on title + problem + symptoms)
- Option B: Astro content collection filter (simpler, no DB dependency)
- The API contract is already defined: `{ results: ScenarioResult[], hasMore: boolean }`

## The /field-guide/pro route

/field-guide/pro returns 200 with plain text "Reserved." It is not indexed, not linked, and has no nav.
This route exists to claim the URL before the gated product is built.
Do not add it to the sitemap, the footer, or any nav component.

## FieldGuideBook.tsx

The FieldGuideBook island has been deleted. It was a React island with a flip-page animation showing chapter teasers and an email capture. The chapter prose it contained (chapters 01-06 and 08) was draft-quality writing from the build phase — it has NOT been published anywhere. If any of it is useful for future scenario content, retrieve it from git history: `git show HEAD~1:src/components/islands/FieldGuideBook.tsx`
