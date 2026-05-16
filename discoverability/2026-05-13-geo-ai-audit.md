# BayShine GEO/AI Search Audit
**Date:** 2026-05-13
**Scope:** AI crawler access, llms.txt update, entity coverage, citation-readiness
**Auditor:** GEO/AI Search Specialist

---

## 1. AI Crawler Access Status

File audited: `public/robots.txt`

| Bot | User-Agent | Status | Notes |
|-----|-----------|--------|-------|
| GPTBot | `GPTBot` | Explicitly allowed | Correct |
| ChatGPT-User | `ChatGPT-User` | Explicitly allowed | Correct |
| OAI-SearchBot | `OAI-SearchBot` | Explicitly allowed | Correct |
| ClaudeBot | `ClaudeBot` | Explicitly allowed | Correct |
| Claude-Web | `Claude-Web` | Explicitly allowed | Present as bonus coverage |
| anthropic-ai | `anthropic-ai` | Explicitly allowed | Present as bonus coverage |
| PerplexityBot | `PerplexityBot` | Explicitly allowed | Correct |
| Perplexity-User | `Perplexity-User` | Explicitly allowed | Present as bonus coverage |
| Google-Extended | `Google-Extended` | Explicitly allowed | Correct |
| CCBot | `CCBot` | Explicitly allowed | Correct |
| Applebot-Extended | `Applebot-Extended` | Explicitly allowed | Correct |
| Meta-ExternalAgent | `Meta-ExternalAgent` | Explicitly allowed | Correct |
| **Bingbot** | **`Bingbot`** | **NOT LISTED** | **Flag -- see below** |

**Flag: Bingbot not explicitly listed.**
Bingbot feeds the Bing index, which is the primary data source for ChatGPT Search
(when Bing-backed). It is covered by the `User-agent: *` wildcard allow at the
top of the file, so it is not blocked. However, explicit listing signals intentional
access, not just a wildcard catch. Recommend adding it explicitly.

**Recommended addition to robots.txt:**
```
User-agent: Bingbot
Allow: /
```

No AI crawlers are blocked. The wildcard `Allow: /` at the top means all bots not
explicitly listed still have full access. The gap is intent-signaling, not access.

---

## 2. llms.txt Status

**Previous file:** Generated 2026-05-08, 15 blog posts, no neighborhood pages.

**This update (2026-05-13):**

Changes made:

- **Entity description updated:** Primary geographic anchor changed from "Pasco
  County" to "Land O' Lakes, FL 34638" throughout the header, About section, and
  Citation Preferences. Land O' Lakes is BayShine's base of operations and the
  highest-value local search cluster.

- **Service area section restructured:** Added a dedicated "Land O' Lakes and
  surrounding communities" section with individual entries for all six pages in
  the neighborhood cluster.

- **6 neighborhood pages added:**
  - `/land-o-lakes` (hub)
  - `/land-o-lakes/bexley`
  - `/land-o-lakes/connerton`
  - `/land-o-lakes/lake-padgett-estates`
  - `/land-o-lakes/wilderness-lake-preserve`
  - `/land-o-lakes/lakeshore-ranch`

- **6 new blog posts added** (published since last update or missing from prior file):
  - `/blog/mold-in-florida-vehicles` (pubDate 2026-05-12)
  - `/blog/ceramic-coating-maintenance-guide` (pubDate 2026-05-11)
  - `/blog/new-car-ceramic-coating-case` (pubDate 2026-05-10)
  - `/blog/mobile-detailing-vs-detail-shop` (pubDate 2026-05-09)
  - `/blog/exterior-protection-florida` (pubDate 2026-05-01)
  - `/blog/full-detail-overview` (pubDate 2026-05-01)
  - `/blog/lot-managers-wash-quotes` (pubDate 2026-04-03)

- **Standing Detail entry updated:** Expanded description to surface the
  headline conversion value (locked rate, priority slot, 6-week cycle, no
  contract) at the top of key resources, not buried in the services section.

- **Em-dashes replaced throughout:** All `--` patterns used as en-dash
  equivalents per BayShine voice rules.

**Posts intentionally excluded:**
- `ceramic-coating-florida-humidity` -- draft: true, not published
- `full-detail-interior-odor-elimination` -- draft: true, not published
- `recon-value-overview` -- published but overlaps heavily with `recon-math` and
  `what-full-detail-covers`; omitted to keep llms.txt curated, not a sitemap
- `resident-detailing-program` -- published but overlaps with `resident-detailing-amenity-no-cost`; omitted
- `how-to-prep-your-car-for-detailing` -- customer logistics content, low citation value for AI queries

**Final URL count:** 21 blog posts + 6 neighborhood pages + 6 key resources +
3 fleet/B2B pages = 36 total curated URLs. Within the 30-50 target range.

---

## 3. Entity Markup Coverage

### BayShine business entity

- **Homepage schema:** `LocalBusiness` + `AutoWash` with `@id: https://bayshine.net/#business`.
  Uses `areaServed` array of City nodes. `sameAs` array is empty pending GBP CID
  verification. Address not specified on the homepage schema -- only `addressLocality`
  is declared on the `/land-o-lakes` hub.

- **Land O' Lakes hub schema:** `LocalBusiness` + `AutoWash` + `ProfessionalService`
  with full `PostalAddress` including `addressLocality: Land O' Lakes` and
  `addressRegion: FL`. This is the strongest entity anchor in the current markup.

- **Neighborhood pages:** Each uses `LocalBusiness` with `areaServed` pointing to
  the specific neighborhood as a `containsPlace` within the city. Breadcrumb schema
  present on all five neighborhood pages. Structure is correct.

- **Standing Detail service page:** Uses `Service` schema with `provider` referencing
  the `LocalBusiness`. `areaServed` points to the State of Florida rather than the
  specific county. This is intentionally broad for the service page but loses the
  Pasco/Land O' Lakes signal.

**Gap:** The homepage `LocalBusiness` schema has no `address` field. Land O' Lakes
should be the declared `addressLocality` on the primary entity anchor, not just on
the hub page. The entity at `https://bayshine.net/#business` and the entity on the
hub page should be structurally identical. Recommend aligning them.

**Gap:** `sameAs` is empty on the homepage entity. Once GBP is verified, the CID
URL must be added here. This is a high-impact omission for local AI citation --
AI systems cross-reference entity identity against known business profiles.

### Operator entity

No Person schema for Constantine on any page. This is acceptable for a
service business site. The About page has biographical content but no structured
markup. Low priority unless targeting "best mobile detailer in Pasco County
personally owned" query patterns.

---

## 4. Citation-Readiness Assessment

Pages scored on: geographic specificity, answer-unit density, entity clarity,
passage retrieval likelihood. Scale: 1-5.

| Page | Score | Notes |
|------|-------|-------|
| `/blog/water-spots-florida-well-water` | 5 | County-specific, mineral-specific, problem-solution structure. Highly citable for "hard water spots Pasco County" queries. |
| `/blog/lovebug-season` | 5 | Florida-specific seasonal threat, clear 24-48 hour window, geographic call-outs throughout. Ideal structure for AI passage retrieval. |
| `/blog/mold-in-florida-vehicles` | 5 | Humidity context precise (70%+ for months), ozone/steam/extraction process clearly stated, Pasco County named. Strong citation candidate. |
| `/standing-detail` | 4 | Well-structured program description. The locked-rate and 6-week cycle are clear. Geographic specificity could be stronger -- Pasco County appears but Land O' Lakes does not. |
| `/land-o-lakes/bexley` | 4 | Specific contamination threats named (brake dust, construction particulate, pollen). SR-54 geographic anchor. Could add more internal link signals. |
| `/blog/ceramic-coating-florida` | 4 | Strong climate argument. UV and humidity named. Pasco County mentioned. Loses a point because the passage structure is less tight than the water spots article. |
| `/blog/six-week-rhythm` | 4 | Clean cost argument. Could name Land O' Lakes or Pasco County more explicitly in the body -- the geographic signal is light. |
| `/land-o-lakes` (hub) | 3 | Good neighborhood overview, but the hub page body is structurally thin compared to the neighborhood detail pages. Works as navigation, less useful as a citation source. |
| `/fleet` | 3 | Fleet content is accurate but geographic specificity is lighter than residential pages. "Pasco County" appears but no specific community callouts. |
| `/about` | 3 | Biographical and methodology content. Not a strong citation source for local queries. Useful for entity reinforcement only. |

**Top 3 content gaps by citation impact:**
1. No article on detailing Land O' Lakes specifically as a location -- "mobile
   detailer in Land O' Lakes FL" is the primary query the neighborhood cluster
   targets but no blog post supports it.
2. No article on marine detailing -- BayShine serves marine and the query
   "boat detailing Pasco County" has no corresponding content.
3. Standing Detail program lacks a geographic pass in its body copy -- Land O'
   Lakes should appear at least twice given it's the primary community.

---

## 5. Local AI Search Performance

**What BayShine should appear for based on current content inventory:**

| Query type | Content support | Confidence |
|------------|----------------|------------|
| "mobile detailer Land O' Lakes FL" | Hub + 5 neighborhood pages | Strong after indexing |
| "car detailing Bexley" | `/land-o-lakes/bexley` | Moderate -- new page |
| "hard water spots Pasco County" | `/blog/water-spots-florida-well-water` | Strong |
| "lovebug damage paint Florida" | `/blog/lovebug-season` | Strong |
| "ceramic coating Florida worth it" | `/blog/ceramic-coating-florida` | Strong |
| "mold removal car interior Florida" | `/blog/mold-in-florida-vehicles` | Strong -- recent publish |
| "mobile detailing vs detail shop" | `/blog/mobile-detailing-vs-detail-shop` | Moderate |
| "fleet detailing Pasco County" | `/fleet` + `/blog/fleet-per-unit-pricing-explained` | Moderate |
| "Standing Detail recurring detailing program" | `/standing-detail` + `/blog/six-week-rhythm` | Moderate -- branded, not yet widely known |
| "boat detailing Pasco County" | No content | Not present |
| "mobile detailer near me Wesley Chapel" | Service area page + ZIP data | Light |

**Observation:** The neighborhood cluster is strong for named-community queries
once indexed. The marine detailing gap is the most significant missing citation
target. The Standing Detail program has good page coverage but needs geographic
reinforcement in the body copy to appear in queries like "recurring car detailing
Land O' Lakes."

---

## 6. Recommended Changes (ranked by impact)

**1. Add Bingbot to robots.txt explicitly** (5-minute fix, high signal value)
File: `public/robots.txt`
Add after Applebot-Extended block:
```
User-agent: Bingbot
Allow: /
```

**2. Add `address` to homepage LocalBusiness schema** (medium effort, high entity-clarity impact)
File: `src/pages/index.astro`
The `@id: https://bayshine.net/#business` entity should declare:
```json
"address": {
  "@type": "PostalAddress",
  "addressLocality": "Land O' Lakes",
  "addressRegion": "FL",
  "postalCode": "34638",
  "addressCountry": "US"
}
```
This aligns the primary entity anchor with the hub page declaration.

**3. Add "Land O' Lakes" to Standing Detail body copy** (low effort, geography signal)
File: `src/pages/standing-detail.astro`
The program description should name Land O' Lakes and Pasco County explicitly
in the body. Currently it references the county in the schema and meta but not
in the readable copy. AI systems read the page, not just the schema.

**4. Publish a blog post targeting "mobile detailer Land O' Lakes FL"** (content creation)
There is no Field Notes article that uses Land O' Lakes as its primary geographic
anchor. The neighborhood pages serve navigation; a blog post serves citation.
Target keyword: "mobile detailing Land O' Lakes FL" -- 600-800 words, covers the
community context, well water mineral conditions, and proximity to the BayShine
base of operations.

**5. Publish a marine detailing article** (content creation, closes major gap)
"Boat detailing Pasco County" and "marine detailing Land O' Lakes" have no
content support. BayShine's marine service is listed but not explained. A 600-800
word Field Notes article covering Florida UV on gel coat, lake water mineral
deposits, and the mobile marine service model would open this query cluster.

**6. Add `sameAs` to homepage entity once GBP is verified** (deployment dependency)
File: `src/pages/index.astro`
The `sameAs: []` array is flagged in a FOLLOWUP comment. This is the highest-
impact single structured data addition for local AI citation. GBP CID, Facebook
Business, and Yelp profile URLs all belong here.
