# BayShine Architecture Update
**Date:** 2026-05-16
**Scope:** ZIP priority gaps, Zephyrhills cluster decision, service area hub completeness

---

## 1. ZIP Priority Analysis

### How pages are generated

`src/pages/service-area/[zip].astro` filters `SERVICE_AREA` to `priority === 'high'` only. Nine ZIPs currently produce dedicated pages:

| ZIP | City | Neighborhoods |
|---|---|---|
| 33556 | Odessa | Keystone, Eagles, Starkey Ranch |
| 33548 | Lutz | Cheval, Lake Fern |
| 33558 | Lutz | Steinbrenner, Van Dyke Farms |
| 33647 | New Tampa | Tampa Palms, Cory Lake Isles, Live Oak Preserve, Hunters Green |
| 33544 | Wesley Chapel | Seven Oaks, Wiregrass Ranch |
| 33543 | Wesley Chapel | Meadow Pointe, Saddlebrook |
| 34638 | Land O' Lakes | Bexley, Lakeshore Ranch, Suncoast Crossings |
| 34639 | Land O' Lakes | Lake Padgett Estates, Plantation Palms |
| 34637 | Land O' Lakes | Connerton, Wilderness Lake Preserve, Lakeshore Ranch |

### ZIPs in the data file with no dedicated page

| ZIP | City | Priority | Named Neighborhoods | Action |
|---|---|---|---|---|
| 33549 | Lutz | standard | None | Hold at standard |
| 33559 | Lutz / Wesley Chapel | standard | None | Hold at standard |
| 34655 | Trinity | standard | Trinity, Longleaf | Promote to high |
| 33576 | San Antonio | standard | None | Hold at standard |
| **33545** | **Wesley Chapel** | **standard** | **Epperson, Mirada** | **Promote to high** |
| 34610 | Spring Hill / Shady Hills | standard | None | Hold at standard |
| 33613 | Tampa | standard | University area, Lake Magdalene | Hold at standard |
| 33612 | Tampa | standard | Busch Gardens area, North Tampa | Hold at standard |
| 33618 | Tampa | standard | Carrollwood, Northdale | Hold at standard |
| 33625 | Tampa | standard | Citrus Park, Linebaugh | Hold at standard |
| 33606 | Tampa | standard | Hyde Park, Davis Islands | Hold at standard |
| 33607 | Tampa | standard | Westshore, Palma Ceia West | Hold at standard |
| 34654 | New Port Richey | edge | None | Hold at edge |
| 34669 | Hudson | edge | None | Hold at edge |
| 33574 | Crystal Springs | edge | None | Hold at edge |

### ZIPs referenced in the task brief but absent from serviceArea.ts entirely

- **33540** (Zephyrhills) -- does not exist in the data file
- **33541** (Zephyrhills) -- does not exist in the data file
- **33542** (Zephyrhills) -- does not exist in the data file
- **33539** (Land O' Lakes alternate) -- does not exist in the data file; likely a lower-use ZIP and may not be worth adding unless confirmed coverage

### Promotion recommendations

**Promote to `high` immediately (ZIPs already in the data file):**

**33545 -- Wesley Chapel (Epperson, Mirada)**
This is the most urgent fix. The `[zip].astro` template already contains logic that checks `code === '33545'` to display a "Wesley Chapel neighborhood coverage" link, meaning the architecture already assumes this page exists. It does not. The ZIP is architecturally orphaned: the Wesley Chapel cluster hub references all three Wesley Chapel ZIPs (33543, 33544, 33545) in its copy, and the service area hub callout names all three. A user who arrives via the hub and looks for 33545 finds nothing. Epperson Ranch is one of the most search-active master-planned communities in Pasco County. This page needs to be built and ZIP_CONTENT added to `[zip].astro`.

**34655 -- Trinity (Trinity, Longleaf)**
Trinity is geographically distinct from all existing high-priority ZIPs -- far enough west to have independent search identity ("mobile detailing Trinity FL" is a real query with low competition). Named subdivisions Longleaf and Trinity are in the data already. Promoting to `high` and writing ZIP_CONTENT is a straightforward lift.

**Add to serviceArea.ts, then prioritize:**

**33540 -- Zephyrhills (add at `high`)**
The city's primary residential ZIP. Covers downtown Zephyrhills and established neighborhoods including Timber Oaks. Zephyrhills as a city has a strong independent search identity relative to Wesley Chapel or Land O' Lakes. Should have dedicated content when added.

**33541 -- Zephyrhills (add at `high`)**
The growth corridor ZIP along Eiland Blvd, covering newer developments including Silver Oaks. Distinct enough from 33540 to warrant a separate page given different contamination profile (newer construction = concrete dust and overspray, similar to the Bexley 34638 profile).

**33542 -- Zephyrhills (add at `standard`)**
Smaller footprint on the northeast edge of the city. Not enough named neighborhood density to justify a dedicated page at this time. Appears in the hub's full ZIP list for crawlability.

**Do not promote (Tampa standard ZIPs):**
33613, 33612, 33618, 33625, 33606, 33607. Dedicated pages for Tampa proper ZIPs would require content that BayShine cannot meaningfully differentiate from a generic detailing page. They dilute the Pasco/North Hillsborough positioning. Their presence in the hub's "Additional coverage" section is the correct treatment.

---

## 2. Zephyrhills Cluster Decision

**Recommendation: ZIP-level pages only. No hub + sub-page cluster at this time.**

### Why not a cluster

The Land O' Lakes and Wesley Chapel clusters are justified by a specific structural condition: named master-planned subdivisions with independent search behavior. A user searching "Bexley mobile detailing" is not necessarily searching the city name at all. The cluster architecture lets the site rank for subdivision-level queries while the hub captures city-level queries.

Zephyrhills does not meet this threshold. Its neighborhoods -- Timber Oaks, Silver Oaks, Lake Bernadette -- are older and more organically developed. They lack the brand-recognition of Bexley or Wiregrass Ranch. "Timber Oaks detailing Zephyrhills" does not produce meaningfully different search behavior than "Zephyrhills mobile detailing 33540." The neighborhood-level sub-pages would be thin by definition, and thin content risk at `/zephyrhills/[neighborhood]` is not justified by the search volume.

Zephyrhills also sits at the eastern edge of BayShine's territory. Building a full cluster architecture signals geographic depth that the operation's current route density may not support. Ranking prominently for Zephyrhills neighborhood queries before having consistent client concentration there creates a conversion expectation mismatch.

### What to build instead

1. Add 33540 and 33541 to `serviceArea.ts` at `high` priority. Write distinct ZIP_CONTENT for each, emphasizing Zephyrhills' specific detailing profile: lower construction-dust exposure than the Bexley corridor, more agricultural and organic fallout (proximity to strawberry farms and flatwoods), a higher proportion of long-term-owned vehicles that have never received professional decontamination, and well-water mineral deposit risk similar to Lake Padgett Estates.

2. Publish one Field Notes blog post targeting "mobile auto detailing Zephyrhills FL" as the primary keyword. The post links to both ZIP pages. This handles the informational layer without premature structure.

3. If BayShine's route density in Zephyrhills grows to the point where 3+ neighborhoods generate recurring clients, build `/zephyrhills/` at that time. The ZIP pages already in place become the sub-page targets naturally.

### If a cluster is built later

URL pattern: `/zephyrhills/` hub, `/zephyrhills/timber-oaks`, `/zephyrhills/silver-oaks`. The ZIP pages at `/service-area/33540` and `/service-area/33541` remain in place with 301 redirects from any old URLs if the structure changes.

---

## 3. Service Area Hub Gaps

File: `src/pages/service-area/index.astro`

The hub correctly:
- Displays a dynamic grid of all `high` priority ZIPs
- Has dedicated named callout sections for Land O' Lakes and Wesley Chapel
- Lists all standard and edge ZIPs in a county-split text grid for crawlability

**Gaps identified (do not edit the file based on this report -- for review only):**

### Gap 1: Trinity has no named callout
34655 has two named neighborhoods in the data file (Trinity, Longleaf) and enough geographic identity to warrant a mention. Currently it appears only as a plain text entry in the "Additional coverage" grid. Once promoted to `high`, it will appear in the priority card grid, but a named callout -- even a two-sentence paragraph -- would give it the same navigation clarity as Land O' Lakes and Wesley Chapel.

### Gap 2: Odessa has no named callout
33556 appears in the priority card grid but Odessa lacks the same named-section treatment as Land O' Lakes and Wesley Chapel. Keystone and Eagles are recognizable communities. A brief callout paragraph (not a full cluster section) with a link to `/service-area/33556` would improve scannability for users searching by city name.

### Gap 3: New Tampa has no named callout
Same issue as Odessa. 33647 is in the priority card grid, but Tampa Palms and Cory Lake Isles are recognizable enough that a named callout would help users self-identify. New Tampa is also administratively part of Tampa but is practically a Pasco-adjacent suburb in its daily traffic and lifestyle patterns -- worth distinguishing.

### Gap 4: Lutz spans three ZIPs with no consolidating callout
33548, 33558, and 33549 all carry "Lutz" as their city name. A user looking for detailing in Lutz sees it scattered across the priority grid (two cards) and the standard list (one entry) with no consolidating section. A brief "Lutz neighborhoods" callout -- similar to the Wesley Chapel treatment -- linking to both high-priority ZIP pages and noting the three-ZIP coverage would resolve navigational confusion.

### Gap 5: 33545 (Epperson/Mirada) is orphaned
The Wesley Chapel hub callout names all three Wesley Chapel ZIPs (33543, 33544, 33545), but 33545 has no dedicated page. The hub copy creates an expectation the site does not fulfill. This is the same issue noted in the ZIP priority section. Fix: promote 33545 to `high` and build the page.

### Gap 6: Zephyrhills is absent entirely
Once 33540 and 33541 are added to `serviceArea.ts`, they will appear in the Pasco County standard/edge list automatically. If promoted to `high`, they appear in the priority card grid. No structural change to the hub is needed; the dynamic rendering handles it.

---

## Priority Fix Order

1. **Promote 33545 to `high` and write ZIP_CONTENT** -- architecturally orphaned today; breaks the Wesley Chapel cluster narrative.
2. **Add 33540 and 33541 to serviceArea.ts at `high`; write ZIP_CONTENT** -- Zephyrhills is entirely invisible on the site.
3. **Promote 34655 to `high` and write ZIP_CONTENT** -- Trinity has neighborhoods and search identity; easiest lift.
4. **Add Lutz consolidating callout to service area hub** -- three-ZIP city with no named section creates user confusion.
5. **Add brief named callouts for Odessa and New Tampa to hub** -- secondary polish; the priority card grid handles discoverability but named callouts improve city-name scannability.
6. **Add 33542 to serviceArea.ts at `standard`** -- completeness, no dedicated page needed.
7. **Publish Zephyrhills Field Notes blog post** -- informational layer linking to ZIP pages; can be written once the pages exist.
