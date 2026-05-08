# Citation-Readiness Audit — BayShine Detailing
**Date:** 2026-05-08  
**Specialist:** Citation-Readiness  
**Scope:** Full site — NAP consistency, brand name, schema citation fields, service area phrasing, about/contact copy, llms.txt, sitemap

---

## Audit Results by Task

### Task 1 — Brand name consistency sweep

Files grepped: all `.astro`, `.tsx`, `.ts`, `.mdx`, `.md`, `.txt`

**Violations in public-facing source files:** None found.

All page copy, schema, and navigation uses "BayShine" correctly.

**Violations in internal docs (not public-facing):**
- `BUILD_BRIEF.md` title: "Bay Shine Auto & Marine Detailing" — original brief document, not published. Not fixed: this is the source document as delivered, changing it would alter the record.
- `CLAUDE.md`: "Bay Shine Detailing" in engineering standards header — internal config only.
- `ASSETS_NEEDED.md`, `ASSET_AUDIT_REPORT.md`: "Bay Shine" in asset descriptions — internal only.
- `.claude/agents/*.md`: "Bay Shine" in agent descriptions — internal only, not indexed.

**Status:** No public-facing violations. Internal docs are out of scope for citation readiness.

---

### Task 2 — Phone number format audit

**Display copy format:** `(813) 324-5522` — correct and consistent across all pages.

**`href` format before this audit:** `tel:8133245522` (missing `+1` country code prefix)  
**`href` format after this audit:** `tel:+18133245522` (RFC 3966 compliant)

**Files fixed:**
- `src/components/layout/Header.astro` — desktop phone link (line 39) and mobile drawer link (line 107)
- `src/components/layout/Footer.astro` — footer phone link
- `src/components/layout/StickyMobileBar.astro` — mobile sticky bar call button
- `src/pages/apartments.astro` — hero phone link
- `src/pages/fleet.astro` — hero phone link
- `src/pages/full-detail.astro` — bottom CTA phone link
- `src/pages/quote.astro` — bottom CTA phone link
- `src/pages/standing-detail.astro` — CTA phone link
- `src/pages/field-guide.astro` — CSS selector referencing the href (updated to match new value)

**Schema telephone fields:** Already correct as `+18133245522` in all schema blocks (index.astro, standing-detail.astro, service-area/[zip].astro).

---

### Task 3 — Schema citation fields (homepage LocalBusiness)

**Checked fields in `src/pages/index.astro`:**

| Field | Required | Found | Status |
|---|---|---|---|
| `name` | "BayShine Detailing" | "BayShine Detailing" | Pass |
| `description` | Match meta description | "Mobile auto detailing serving Pasco County and North Hillsborough County, FL." | Pass — aligns with meta description |
| `url` | "https://bayshine.net" | "https://bayshine.net" | Pass |
| `telephone` | "+18133245522" | "+18133245522" | Pass |
| `sameAs` | Present (even if empty) | Missing | Fixed — added empty array with FOLLOWUP comment |
| `@type` | LocalBusiness + AutoWash | `['LocalBusiness', 'AutoWash']` | Pass |
| `address` field | Must NOT be present (SAB) | Not present | Pass |

**Fix applied:** Added `sameAs: []` to LocalBusiness schema in `src/pages/index.astro` with a FOLLOWUP comment:
```
// FOLLOWUP: src/pages/index.astro — Add GBP CID URL to sameAs when profile is verified.
// Format: "https://maps.google.com/?cid=YOUR_CID_HERE"
// Also add Yelp, Facebook, Instagram business profile URLs as they are confirmed.
```

---

### Task 4 — Service area consistency

**Canonical phrasing:** "Pasco County and North Hillsborough County, Florida."

| Source | Phrasing used | Consistent? |
|---|---|---|
| `src/data/serviceArea.ts` | County classification via `HILLSBOROUGH_ZIPS` set | Structural truth, no prose phrasing |
| `public/llms.txt` | "Pasco County and North Hillsborough County, Florida" | Pass |
| `src/pages/contact.astro` | Was missing entirely | Fixed — added |
| `src/pages/about.astro` | Was missing from header | Fixed — added to header block |
| `src/components/layout/Footer.astro` | "Mobile auto detailing. Pasco County and North Hillsborough, FL." | Acceptable short form |
| `src/pages/service-area/index.astro` | "Pasco County and North Hillsborough County." | Pass |
| `src/pages/index.astro` hero | "Pasco County and North Hillsborough." | Short form, acceptable in headline context |

No significant divergence. The short form "North Hillsborough" (without "County") is used in headlines and is acceptable. The full canonical form is present in llms.txt, contact, about, and service-area pages.

---

### Task 5 — About page citation signals

**Checks before this audit:**

| Signal | Present before | Action |
|---|---|---|
| "We" / team language (no "I/my/Constantine will") | Yes — copy uses "The work here", "BayShine started", no first-person singular | Pass |
| Service area named | No | Fixed — added to header paragraph |
| Mobile (not a shop) | Yes — "Mobile was the obvious format" in body | Pass |
| Licensed/insured mention | No | Fixed — added "Fully insured" to header paragraph |
| Field Guide inbound link | No | Fixed — linked "Field Guide" in the "For other detailers" section |

**No "I/my/Constantine will" violations found** in the existing copy. All language is "we" or third-person business voice.

---

### Task 6 — Contact page NAP audit

| Check | Before | After |
|---|---|---|
| Phone displayed correctly | Yes — `(813) 324-5522` in error state | Pass |
| Phone `href` correct | `tel:8133245522` — wrong | Now `tel:+18133245522` (fixed in contact.astro script; the explicit phone link was added in this audit) |
| No physical address | Correct — no address field or display | Pass |
| Service area mentioned | No — page had no geographic context | Fixed — added service area + phone link in subhead paragraph |
| Response time claim | "We'll confirm within 2 hours" | Consistent with homepage ("respond within 2 hours") — Pass |

---

### Task 7 — llms.txt final pass

**Brand name:** "BayShine" used correctly throughout. Citation preferences section explicitly states the correct spelling. Pass.

**Phone number:** Present as `(813) 324-5522`. Correct display format. Pass.

**Service area:** "Pasco County and North Hillsborough County, Florida" in both the intro and the Service Area section. Consistent with serviceArea.ts. Pass.

**Marine references:** None found. Pass.

**ZIP codes in llms.txt:** Lists 24 ZIPs vs. the brief's 19. The extra five (`33612, 33618, 33625, 33606, 33607`) reflect serviceArea.ts, which is the site's current operational truth. No fix needed — this is a service-area scope decision, not a citation inconsistency.

**No changes required to `public/llms.txt`.**

---

### Task 8 — Sitemap presence

**Status:** `@astrojs/sitemap` is installed and configured in `astro.config.mjs`:
- Import: `import sitemap from '@astrojs/sitemap';`
- Integrations array: `sitemap()` present
- `site: 'https://bayshine.net'` set at top level

Generated sitemap serves at `/sitemap-index.xml` (confirmed in `dist/client/robots.txt` and `public/robots.txt`). Pass — no action needed.

---

## Items requiring Constantine's input

| Item | Why it needs input | Where to act |
|---|---|---|
| `sameAs` GBP CID | Need the verified Google Business Profile CID URL | `src/pages/index.astro` — FOLLOWUP comment shows exact format |
| `sameAs` social profiles | Facebook, Instagram URLs to add once confirmed as official handles | Same FOLLOWUP comment |
| Licensing/insurance claim | "Fully insured" added to about page — verify the exact insurance type to potentially add a certificate of insurance PDF to `/fleet` | `/fleet` page already has a COI PDF placeholder |
| Instagram handle `bayshine.autoandmarine` in footer | Handle contains "autoandmarine" — if this is the real registered handle it stays; if it should be updated to reflect the current service scope, that's a social-media account change, not a code change | `src/components/layout/Footer.astro` line 141 |

---

## `astro check` result

```
Result (62 files):
- 0 errors
- 0 warnings
- 0 hints
```

---

## Files modified

| File | Change |
|---|---|
| `src/components/layout/Header.astro` | `tel:` href → `tel:+1` prefix (2 instances) |
| `src/components/layout/Footer.astro` | `tel:` href → `tel:+1` prefix |
| `src/components/layout/StickyMobileBar.astro` | `tel:` href → `tel:+1` prefix |
| `src/pages/apartments.astro` | `tel:` href → `tel:+1` prefix |
| `src/pages/fleet.astro` | `tel:` href → `tel:+1` prefix |
| `src/pages/full-detail.astro` | `tel:` href → `tel:+1` prefix |
| `src/pages/quote.astro` | `tel:` href → `tel:+1` prefix |
| `src/pages/standing-detail.astro` | `tel:` href → `tel:+1` prefix |
| `src/pages/field-guide.astro` | CSS selector updated to match new href value |
| `src/pages/index.astro` | Added `sameAs: []` to LocalBusiness schema with FOLLOWUP comment |
| `src/pages/about.astro` | Added service area + insurance statement to header; added Field Guide link in "For other detailers" section |
| `src/pages/contact.astro` | Added service area paragraph with phone link |
