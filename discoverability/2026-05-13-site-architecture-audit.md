# BayShine Site Architecture Audit
**Date:** 2026-05-13
**Auditor:** Site Architecture Specialist
**Scope:** Post-neighborhood-cluster integration — nav, footer, hub/ZIP cross-linking, booking paths

---

## 1. Current Architecture Map

```
/ (homepage)
├── /standing-detail              [headline conversion — nav position 1]
├── /full-detail                  [service — nav position 2]
├── /exterior-detail              [service — nav position 3]
├── /ceramic-coating              [service — nav position 4]
├── /recon                        [service — nav position 5]
├── /fleet                        [B2B — nav position 6]
├── /land-o-lakes                 [neighborhood hub — nav position 7 ADDED]
│   ├── /land-o-lakes/bexley
│   ├── /land-o-lakes/connerton
│   ├── /land-o-lakes/lake-padgett-estates
│   ├── /land-o-lakes/wilderness-lake-preserve
│   └── /land-o-lakes/lakeshore-ranch
├── /about
├── /blog                         [Field Notes]
├── /field-guide                  [technical reference]
├── /service-area                 [geographic hub]
│   └── /service-area/[zip]       [9 high-priority ZIP pages]
├── /apartments
├── /quote
├── /contact                      [primary booking destination]
├── /tools
└── /404
```

**ZIP priority breakdown (serviceArea.ts):**
- High (9): 34638, 34639, 34637 (Land O' Lakes), 33548, 33558, 33549-group (Lutz), 33556 (Odessa), 33544, 33543 (Wesley Chapel), 33647 (New Tampa)
- Standard (11): remaining Tampa, Lutz, Trinity, San Antonio, Wesley Chapel zips
- Edge (3): New Port Richey, Hudson, Crystal Springs

---

## 2. Hierarchy Issues

### Issue 1 — /land-o-lakes/ was not in navigation (FIXED)
**Severity: Critical.** The neighborhood hub and its five sub-pages were completely unreachable from the main nav. A user thinking "I need detailing in Land O' Lakes" had no visible path. The "Neighborhoods" link mentioned in the change brief was absent from both desktop and mobile nav. Fixed: "Neighborhoods" added to desktop nav at position 7 (after Fleet, before About), and to mobile nav drawer.

### Issue 2 — Footer had no Neighborhoods section (FIXED)
**Severity: High.** Footer is a crawler's site map. All six neighborhood pages were invisible to crawlers traversing footer links. Fixed: "Neighborhoods" column added with hub + all 5 sub-page links. Grid updated from 5 to 6 columns (2-col mobile, 3-col tablet, 6-col desktop).

### Issue 3 — Footer had a dead link to /lot-maintenance (FIXED)
**Severity: Medium.** /lot-maintenance does not exist as a page. The link would 404. Removed from Programs column in footer.

### Issue 4 — Footer Field Guide had duplicate links to /field-guide (FIXED)
**Severity: Low.** "Browse Scenarios", "Paint", and "Interior" all pointed to /field-guide — no differentiation, three links doing the same work. Collapsed to one: "Browse Scenarios" → /field-guide. If category pages exist in the future, restore the sub-links.

### Issue 5 — Desktop nav item count (addressed)
**Severity: Low.** Nine nav items is at the top of comfortable density for a desktop header. Gap reduced from gap-6 to gap-4 to keep all items on one line without wrapping at lg breakpoint. If a tenth item is ever added, the nav needs a dropdown or reorganization.

### Issue 6 — /service-area/ cross-link to /land-o-lakes/ (already existed)
**No action needed.** The service-area hub already contains a "Land O' Lakes neighborhoods" callout section (added in a prior pass). The cross-link is live and functional.

---

## 3. Service-to-Area Coverage

| Service | Service Area Hub | ZIP Pages | Neighborhood Pages |
|---|---|---|---|
| Full Detail | Linked in hero CTAs | Referenced in ZIP page body | Linked via hub |
| Exterior Detail | Linked in hero CTAs | Referenced in ZIP page body | Linked via hub |
| Standing Detail | Featured section with {highZips.length} priority ZIP cards | Central to ZIP page content | Callout section on /land-o-lakes/ hub |
| Ceramic Coating | Not explicitly called out on /service-area/ | Referenced in ZIP page body | Not called out on /land-o-lakes/ |
| Recon | Not explicitly called out on /service-area/ | Referenced in ZIP page body | Not called out |
| Fleet | Separate audience track — not on service-area | N/A | N/A |

**Gap:** /service-area/ currently organizes its priority ZIP cards under the heading "Standing Detail coverage." This is accurate — those are the Standing Detail zones — but it may cause users seeking one-time ceramic coating or full detail in Wesley Chapel to think those ZIPs are Standing Detail only. Consider relabeling the section heading "Priority service zones" and adding a sub-note that all services run in these areas.

---

## 4. Navigation Recommendations

### Desktop nav (post-fix)
```
Standing Detail | Full Detail | Exterior Detail | Ceramic | Recon | Fleet | Neighborhoods | About | Field Notes
```
- Position 1 for Standing Detail: correct. It is the headline conversion goal.
- Neighborhoods at position 7: correct. It follows the services (positions 1-6) and precedes brand/content (About, Field Notes).
- /contact reachable via "Book Now" CTA in header persistent across all pages — 1 click from anywhere.

### Mobile nav drawer (post-fix)
```
Standing Detail / Full Detail / Exterior Detail / Ceramic Coating / Heavy Recon /
Fleet Programs / Neighborhoods / Apartments / About / Field Notes / Get a Quote
```
- Neighborhoods added after Fleet, before Apartments. Logical grouping.

### Future consideration — Service dropdown
If a tenth nav item is needed, collapse the five service pages (Full Detail, Exterior Detail, Ceramic, Recon + Standing Detail) under a "Services" dropdown, keeping Standing Detail as the first item. Fleet stays separate as a B2B track. This gives headroom for future additions (Marine Detailing, etc.) without nav overflow.

---

## 5. URL Structure Issues

**No URL changes were made.** All existing slugs retained.

### Observation: /land-o-lakes/[neighborhood] vs /service-area/[zip]
These two page types serve different purposes and that distinction is architecturally sound:

- `/service-area/[zip]` — geographic SEO pages indexed by postal code. Designed for "mobile detailing 34638" searches. Content is service-availability focused.
- `/land-o-lakes/[neighborhood]` — community depth pages indexed by neighborhood name. Designed for "car detailing Bexley FL" searches. Content addresses neighborhood-specific conditions (HOA gates, canopy, well water, construction dust).

**The topical overlap risk is managed, not eliminated.** Both page types mention detailing in the same physical areas. The risk of cannibalization is low because the keyword targets are distinct (ZIP code vs neighborhood name), but both page types should avoid identical H1 phrasing. Current H1 patterns check out — ZIP pages use "{City} ({ZIP}) Mobile Auto Detailing" format and neighborhood pages use neighborhood name as the subject.

**One structural note:** The three Land O' Lakes ZIPs (34638, 34639, 34637) each have dedicated /service-area/ pages. The neighborhood pages live under /land-o-lakes/ rather than nested under the ZIP (e.g., not /service-area/34638/bexley). This is correct — nesting neighborhoods under ZIP codes adds URL depth and implies a hierarchy (ZIP owns neighborhood) that isn't semantically accurate. The current flat structure with cross-links is the right call.

---

## 6. Booking Path Analysis

| Starting point | Path to /contact | Clicks |
|---|---|---|
| Homepage | "Book Now" in hero | 1 |
| Homepage | "Book Now" persistent header CTA | 1 |
| Any page | "Book Now" in header | 1 |
| /standing-detail | CTA at bottom | 1 |
| /land-o-lakes/ | "Book a Service" hero CTA | 1 |
| /land-o-lakes/[neighborhood] | CTA on page (assumed — not audited) | 1-2 |
| /service-area/ | "Book Now" in hero | 1 |
| /service-area/[zip] | CTA on page | 1-2 |
| /blog/[post] | Header "Book Now" | 1 |
| /field-guide/[scenario] | Header "Book Now" | 1 |

**Result: /contact is reachable from any page in 1 click via the persistent header CTA. Requirement met.**

### Standing Detail reachability from homepage
- Nav position 1: 1 click. Requirement met.
- Homepage hero CTA: currently "Book Now" (→ /contact) and "Get a Quote" (→ /quote). Standing Detail is NOT a hero CTA. However, it is: (a) the first nav link, (b) featured in a prominent below-fold section with an inline link to /standing-detail, (c) linked from the CustomerTypeStack "Private Owners" panel body copy.
- Assessment: acceptable. Adding a third hero CTA specifically for Standing Detail would clutter the hero. The nav position 1 placement is the right signal.

### Neighborhood pages reachability in ≤3 clicks
- Homepage → Neighborhoods (nav) → /land-o-lakes/ → /land-o-lakes/bexley: 3 clicks. Requirement met (exactly 3).
- Homepage → nav "Neighborhoods" → /land-o-lakes/bexley (via hub grid): 2 + 1 = 3 clicks.
- Also reachable via footer Neighborhoods column in 1 click from footer (zero traversal hops once user scrolls).

---

## 7. Priority Fixes

| # | Fix | Severity | Status |
|---|---|---|---|
| 1 | Add "Neighborhoods" to desktop nav (gap-6 → gap-4, 9 items) | Critical | **Done** |
| 2 | Add "Neighborhoods" to mobile nav drawer | Critical | **Done** |
| 3 | Add Neighborhoods column to footer (hub + 5 sub-pages) | High | **Done** |
| 4 | Remove dead /lot-maintenance footer link | Medium | **Done** |
| 5 | Collapse duplicate Field Guide footer links to single entry | Low | **Done** |
| 6 | /service-area/ → /land-o-lakes/ cross-link | High | Already existed — no action |
| 7 | Relabel /service-area/ priority ZIP section heading from "Standing Detail coverage" to "Priority service zones" | Medium | **Open** — low risk, improves clarity for non-Standing-Detail seekers |
| 8 | Add Standing Detail CTA to /land-o-lakes/[neighborhood] pages if not present | Medium | **Open** — neighborhood pages not audited in detail in this pass |
| 9 | Nav dropdown for services when/if a 10th nav item is needed | Low | **Open** — not triggered yet |

### Open items for next pass

**Item 7** — Relabel the priority ZIP section heading on /service-area/index.astro. Current: "Standing Detail coverage." Proposed: "Priority service zones — Standing Detail and full-service coverage." Edit is safe (no URL change), improves page clarity for users seeking one-time services in those ZIPs.

**Item 8** — Audit each /land-o-lakes/[neighborhood] page to confirm it has: (a) a link to /standing-detail, (b) a link to /contact, (c) a mention of the relevant ZIP code for cross-cluster discoverability. These neighborhood pages were added in the 2026-05-08 cluster build and were not re-audited here.

**Item 9** — If /marine-detailing or a second B2B vertical (lot maintenance) is ever added as a nav item, implement a Services dropdown to prevent nav overflow. Scaffold design: "Services" trigger → flyout with Standing Detail featured at top, then Full Detail, Exterior Detail, Ceramic, Recon, Marine, Fleet as a separate B2B column.

---

## Files Modified

- `src/components/layout/Header.astro` — "Neighborhoods" added to desktop nav (gap-4) and mobile drawer
- `src/components/layout/Footer.astro` — Neighborhoods column added; /lot-maintenance removed; Field Guide de-duplicated; grid updated to 6-col

## Files Audited (no changes)

- `src/pages/index.astro`
- `src/pages/service-area/index.astro`
- `src/pages/land-o-lakes/index.astro`
- `src/data/serviceArea.ts`
