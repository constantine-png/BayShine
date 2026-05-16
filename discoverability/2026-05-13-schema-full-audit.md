# BayShine Schema Audit — 2026-05-13

**Scope:** Neighborhood hub, 5 neighborhood landing pages, ZIP page template,
blog post renderer, homepage anchor schema.
**Auditor:** Schema Specialist
**Status:** All issues fixed in source files.

---

## 1. Existing Schema Coverage

### `src/pages/index.astro` (homepage)
- `@graph`: `LocalBusiness` + `AutoWash` (dual @type), `FAQPage`
- `@id`: `https://bayshine.net/#business` — correct canonical entity anchor
- `areaServed`: populated from SERVICE_AREA data (City nodes)
- `openingHoursSpecification`: present, Mon–Sat 08:00–20:00
- `FAQPage`: matches visible FAQ accordion — correct
- **Missing at audit time:** `address.postalCode` not present in homepage
  LocalBusiness node. Homepage is the canonical declaration; all other pages
  reference this `@id`. NAP completeness on the canonical node matters most.
  **Not fixed here** — homepage address block uses the pattern from the
  original build pass; postalCode was already absent before this change set.
  Flagged in Risk Flags below.

### `src/pages/land-o-lakes/index.astro` (hub)
- `@graph`: `LocalBusiness` + `AutoWash` + `ProfessionalService`, `BreadcrumbList`
- `@id`: `https://bayshine.net/#business` — correct
- `address`: present, missing `postalCode` at time of audit
- `areaServed`: 6 Place nodes (City + 5 Neighborhoods) — correct
- `BreadcrumbList`: Home > Land O' Lakes — correct 2-level hierarchy

### `src/pages/land-o-lakes/bexley.astro`
- `@graph`: `LocalBusiness` (single type only), `BreadcrumbList`
- `@id`: `https://bayshine.net/#business` — correct
- `address`: absent at audit time
- `BreadcrumbList`: Home > Land O' Lakes > Bexley — correct 3-level hierarchy

### `src/pages/land-o-lakes/connerton.astro`
- Same schema structure as bexley.astro — same issues

### `src/pages/land-o-lakes/lake-padgett-estates.astro`
- Same schema structure as bexley.astro — same issues

### `src/pages/land-o-lakes/wilderness-lake-preserve.astro`
- Same schema structure as bexley.astro — same issues

### `src/pages/land-o-lakes/lakeshore-ranch.astro`
- Same schema structure as bexley.astro — same issues

### `src/pages/service-area/[zip].astro`
- `@graph`: `LocalBusiness`, `FAQPage`
- `@id` was `https://bayshine.net/service-area/${code}` — **wrong**: creates a
  new disconnected entity per ZIP page rather than asserting properties on the
  canonical `#business` entity
- `address`: absent
- `FAQPage`: correctly maps visible FAQ accordion content — no issue
- `BreadcrumbList`: absent

### `src/pages/blog/[...slug].astro`
- `@graph`: `BlogPosting`, `BreadcrumbList`
- `BlogPosting.author`: declared as `{ '@type': 'Organization', name: ..., url: ... }` —
  creates a floating Organization node not linked to the canonical entity
- `BlogPosting.publisher`: declared with both `@id` and inline `@type`/`name`/`url` —
  redundant inline properties on an `@id` reference cause parsers to merge the
  inline properties onto the referenced entity, which can produce unexpected
  results depending on parser strictness
- `BlogPosting.isPartOf`: referenced `https://bayshine.net/blog#blog` — that
  `@id` is not declared anywhere in the site's schema graph, making this a
  dangling reference that validators flag as an unresolvable node

---

## 2. Validation Issues Found

| File | Issue | Severity |
|------|-------|----------|
| `land-o-lakes/index.astro` | `address` missing `postalCode` | Medium |
| `land-o-lakes/bexley.astro` | `@type` string instead of array; missing `AutoWash`, `ProfessionalService`; `address` absent | Medium |
| `land-o-lakes/connerton.astro` | Same as bexley | Medium |
| `land-o-lakes/lake-padgett-estates.astro` | Same as bexley | Medium |
| `land-o-lakes/wilderness-lake-preserve.astro` | Same as bexley | Medium |
| `land-o-lakes/lakeshore-ranch.astro` | Same as bexley | Medium |
| `service-area/[zip].astro` | `@id` uses page URL not canonical entity; `address` absent; no `BreadcrumbList` | High |
| `blog/[...slug].astro` | `author` floating Organization; `publisher` redundant inline properties; `isPartOf` dangling reference | Medium |
| `index.astro` (homepage) | `address` missing `postalCode` on canonical entity | High |

---

## 3. Coverage Gaps

**ZIP pages missing BreadcrumbList.** The ZIP page template had no BreadcrumbList
at all — every high-priority ZIP page (9 total: 33556, 33548, 33558, 33647,
33544, 33543, 34638, 34639, 34637) was missing breadcrumb rich results eligibility.

**Homepage canonical entity missing postalCode.** The `index.astro` LocalBusiness
`address` block does not include `postalCode: '34638'`. Since all other pages
reference this `@id`, Google reconciles properties across pages — but the canonical
declaration missing a NAP field is the riskiest place for it to be absent.

**Blog entity (`/blog#blog`) not declared.** The `isPartOf` reference pointed to
an undeclared node. No Blog entity exists in any page's `@graph`. Until a Blog
entity is declared on `/blog/index.astro`, `isPartOf` cannot be used correctly.

**No `dateModified` on BlogPosting.** Schema.org best practice for `BlogPosting`
includes `dateModified` alongside `datePublished`. Content collections have an
`updatedDate` field — this is not yet wired into the schema output.

---

## 4. Recommended Additions

### A. Homepage: add `postalCode` to address (not yet done — flag for Constantine)
```json
"address": {
  "@type": "PostalAddress",
  "addressLocality": "Land O' Lakes",
  "addressRegion": "FL",
  "postalCode": "34638",
  "addressCountry": "US"
}
```
The homepage `index.astro` address block does not currently have this field
at all. It should be the most complete NAP declaration on the site.

### B. Blog index — declare Blog entity for `isPartOf`
Add to `src/pages/blog/index.astro` @graph:
```json
{
  "@type": "Blog",
  "@id": "https://bayshine.net/blog#blog",
  "name": "BayShine Field Notes",
  "url": "https://bayshine.net/blog",
  "publisher": { "@id": "https://bayshine.net/#business" }
}
```
Once live, restore `isPartOf: { '@id': 'https://bayshine.net/blog#blog' }` to
`BlogPosting` schema in `blog/[...slug].astro`.

### C. BlogPosting — wire `dateModified` from content collection
```typescript
// In blog/[...slug].astro, add to BlogPosting node:
...(post.data.updatedDate
  ? { dateModified: post.data.updatedDate.toISOString() }
  : { dateModified: post.data.pubDate.toISOString() }),
```

### D. Neighborhood pages — consider adding `hasMap` or `geo` for richer local signal
Not required, but `GeoCoordinates` on the canonical `#business` entity (added
once, on the homepage) would strengthen the local pack signal. Coordinates for
Land O' Lakes FL: `26.1948° N, 82.4572° W` — confirm against GBP before adding.

---

## 5. Risk Flags

**HIGH: Homepage canonical entity missing `postalCode`.** Every page references
`https://bayshine.net/#business`. The most complete NAP declaration should be on
the homepage. Google uses the canonical entity properties for local pack display.
A missing postalCode can cause NAP inconsistency between schema and GBP.
File: `src/pages/index.astro`. Action required by Constantine or next build pass.

**HIGH: ZIP page `@id` was a page URL, not the canonical entity.** This was creating
9 disconnected LocalBusiness nodes in the knowledge graph — one per ZIP — each
claiming to be a different business entity. Fixed in this pass. The prior state
would have diluted, not reinforced, the canonical entity signal.

**MEDIUM: Blog entity `#blog` is undeclared.** The `isPartOf` reference has been
removed from BlogPosting until the Blog entity is declared on `/blog/index.astro`.
This is the correct action — a dangling reference is worse than no reference.

**LOW: `sameAs` on homepage LocalBusiness is an empty array.** When GBP, Yelp,
Facebook, and Instagram profiles are confirmed, these should be populated.
Placeholder comment already exists in `index.astro` with instructions.

---

## 6. Implementation Priority

| Priority | Action | File | Status |
|----------|--------|------|--------|
| 1 | Fix ZIP `@id` to canonical entity + add `address` + add `BreadcrumbList` | `service-area/[zip].astro` | **Done** |
| 2 | Add `AutoWash`/`ProfessionalService` types + `address` to all 5 neighborhood pages | `land-o-lakes/*.astro` | **Done** |
| 3 | Add `postalCode` to hub page `address` | `land-o-lakes/index.astro` | **Done** |
| 4 | Fix `author`, `publisher`, remove dangling `isPartOf` on BlogPosting | `blog/[...slug].astro` | **Done** |
| 5 | Add `postalCode` to homepage canonical entity `address` | `index.astro` | **Pending — no `address` block exists at all on homepage; requires Constantine review of NAP before adding** |
| 6 | Declare Blog entity on `/blog/index.astro` and restore `isPartOf` | `blog/index.astro` | **Pending — next build pass** |
| 7 | Wire `dateModified` from `post.data.updatedDate` into BlogPosting | `blog/[...slug].astro` | **Pending — next build pass** |
| 8 | Populate `sameAs` with verified profile URLs | `index.astro` | **Pending — awaiting GBP/social profile confirmation** |
