# Citation-Readiness Audit — 2026-05-13

**Scope:** Five strategically important pages audited and fixed in this session.
**Auditor:** Citation-Readiness Specialist

---

## 1. Overall Assessment

| Page | Pre-fix Score | Post-fix Score | Primary Issue |
|---|---|---|---|
| `standing-detail.astro` | Medium | High | Hero buried the definition; H2s were process labels not answer signals; areaServed was "State: Florida" not the actual counties |
| `ceramic-coating.astro` | Low | High | Title had no geo; no durability fact in hero; no Florida-specific section; cure time buried in a list without emphasis |
| `service-area/[zip].astro` (Land O' Lakes: 34638, 34639, 34637) | High | High (no changes needed) | Already strong: geo-explicit, FAQ-backed, local context paragraphs are citation-ready as written |
| `blog/ceramic-coating-florida.mdx` | Low | High | 260 words — violates 600-word minimum. Three H2s, all decent, but no content behind them. Not citable at length. |
| `blog/six-week-rhythm.mdx` | Low | High | 280 words — violates 600-word minimum. Good structure, too thin to be retrieved by AI engines at passage depth. |

The Land O' Lakes page (the zip template) was already citation-ready. The three Land O' Lakes zips (34638, 34639, 34637) have geographic-specific copy, explicit neighborhood naming, FAQ schema, and local context paragraphs that can stand alone as cited answers. No changes were made to the template or its content.

---

## 2. Heading Hierarchy Issues

### standing-detail.astro

**Before:**
- H2: "How it works." — process label, not an answer signal
- H2: "Program terms." — a container label, not citable
- H2: "Who this is for." — vague
- H2: "Why cadence matters in Florida." — decent signal, weak on geo specificity

**After:**
- H2: "How the Standing Detail program works." — names the service, signals the answer
- H2: "Standing Detail program terms." — names the service, still a container but now explicitly scoped
- H2: "Who the Standing Detail is for." — names the service
- H2: "Why a six-week cadence is the right interval for Pasco County vehicles." — specific to geography and interval, fully citable as a standalone query

### ceramic-coating.astro

**Before:**
- H2: "What ceramic does" — truncated, passive
- H2: "What it requires" — ambiguous antecedent

**After:**
- H2: "What ceramic coating does to your paint" — subject is named, object is named
- H2: "What ceramic coating requires before application" — fully explicit
- H2 (new): "Why ceramic coating performs differently in Pasco County and North Hillsborough." — geo-specific, directly answers the "ceramic coating Florida" query class

### ceramic-coating-florida.mdx

**Before:**
- H2: "What ceramic coating changes" — passive framing
- H2: "The prep requirement" — label, not a signal
- H2: "Hard water and mineral deposits" — good

**After (full rewrite):**
- H2: "What ceramic coating actually is" — defines the subject for passage retrieval
- H2: "The prep requirement is not optional" — states the fact as a conclusion, not a label
- H2: "Hard water and mineral deposits in Pasco County" — geo-explicit
- H2: "The lovebug factor" — Florida-specific, directly citable for seasonal queries
- H2: "What ceramic coating does not do" — expectation-managing, citable for "does ceramic prevent rock chips" queries
- H2: "Whether ceramic coating is the right call for your vehicle" — decision-framing, citable for qualification queries

### six-week-rhythm.mdx

**Before:**
- H2: "What the 6-week cadence prevents" — decent
- H2: "The actual time comparison" — good, specific

**After (expansion):**
- H2: "What the 6-week cadence prevents" — kept, strengthened with Florida-specific examples
- H2: "Why six weeks specifically, and not four or eight" — directly answers the interval question
- H2: "The actual time comparison" — kept
- H2: "What this means for vehicle owners in Pasco County and North Hillsborough" — geo-explicit, directly citable for local queries

---

## 3. Atomic Unit Analysis

### standing-detail.astro — Best atomic units (post-fix)

**Unit 1 — Program definition (hero paragraph):**
"A six-week recurring mobile detailing program for vehicle owners in Land O' Lakes, Pasco County, and North Hillsborough who want their vehicle held at a consistent standard without managing the scheduling themselves. The first visit resets the vehicle to a proper baseline. Every visit after runs shorter because the surface stays protected between appointments."
*Citable for: "what is a standing detail program," "how does recurring mobile detailing work," "mobile detailing subscription pasco county"*

**Unit 2 — Florida interval rationale:**
"Pasco County and North Hillsborough sit in one of the harsher paint environments in the country. UV index averages 10 to 11 during Florida summer, equivalent to equatorial climates. A polymer sealant that would hold for six months in a northern state degrades to the point of reduced effectiveness in six to eight weeks under direct Florida sun."
*Citable for: "how often should I detail my car in Florida," "why does wax not last in Florida"*

**Unit 3 — Program terms (as a list):**
The three-column Priority slot / Locked rate / Cancel anytime structure is citation-ready as-is. Each term + description pair is a standalone fact.
*Citable for: "does BayShine require a contract," "how does BayShine pricing work"*

### ceramic-coating.astro — Best atomic units (post-fix)

**Unit 1 — Hero paragraph:**
"A nano-ceramic layer chemically bonded to clear coat... Applied correctly over a decontaminated and corrected surface, ceramic coating lasts two to five years under Florida conditions, compared to four to eight weeks for a standard spray sealant."
*Citable for: "how long does ceramic coating last in Florida," "ceramic coating vs wax Florida"*

**Unit 2 — Florida UV section (new):**
"Florida's UV index averages 10 to 11 in summer... A standard polymer spray sealant degrades to reduced effectiveness in four to eight weeks under direct Pasco County sun. A correctly applied 9H ceramic coating lasts two to five years under the same conditions because it bonds chemically to the clear coat rather than sitting on top of it as a surface layer."
*Citable for: "ceramic coating Florida UV," "how long does ceramic coating last in Pasco County"*

**Unit 3 — Hard water paragraph (new):**
"Much of Pasco County relies on well water for irrigation. That water carries high concentrations of calcium and magnesium... A ceramic coating's hydrophobic surface causes water to bead and sheet off rather than sitting and evaporating, which significantly reduces mineral deposit contact time."
*Citable for: "ceramic coating hard water Florida," "well water spots on car pasco county"*

### ceramic-coating-florida.mdx — Best atomic units (post-fix)

**Unit 1 — Opening paragraph:**
"Standard spray sealants in Florida last between four and eight weeks under direct sun. The UV index in Pasco County during summer averages 10 to 11 – the same range as equatorial climates."
*Citable for: "how long does car wax last in Florida," "UV index Pasco County car paint"*

**Unit 2 — Prep requirement:**
"Ceramic coating does not correct defects – it preserves the surface it is applied to. Any swirl marks, water etching, or oxidation present at the time of application will be sealed under the coating... Paint correction before coating is not an upsell. It is the correct sequence."
*Citable for: "do I need paint correction before ceramic coating," "ceramic coating prep requirement"*

**Unit 3 — Lovebug section:**
"Lovebugs occur twice a year in Pasco County and North Hillsborough, in spring and fall. Their body chemistry is acidic... Left on unprotected paint for more than 48 hours, lovebug residue begins etching the clear coat."
*Citable for: "lovebug damage on car paint," "ceramic coating lovebugs Florida"*

### six-week-rhythm.mdx — Best atomic units (post-fix)

**Unit 1 — Opening passage:**
"Contamination on a vehicle does not accumulate linearly. In the first two weeks after a detail... At twelve weeks, the picture changes. Iron fallout has had time to bond more aggressively to the paint."
*Citable for: "how long can you go between car details," "does car contamination compound over time"*

**Unit 2 — Time comparison:**
"A well-maintained sedan on a six-week schedule in Pasco County requires roughly 90 to 120 minutes of maintenance work per visit. The same sedan neglected for six months before its first appointment requires four to six hours..."
*Citable for: "how long does a car detail take," "is recurring detailing worth it"*

**Unit 3 — Six-week interval explanation (new):**
"The six-week interval maps to two things: the outer limit of what a professional-grade polymer sealant reliably provides in a Florida climate, and the typical contamination accumulation rate for a vehicle driven regularly in Pasco County."
*Citable for: "how often should I detail my car," "what is the right detailing interval Florida"*

---

## 4. Source and Specificity Quality

### Pre-fix gaps identified and resolved

**"Florida" used where "Pasco County" or "North Hillsborough" was warranted:**
- standing-detail.astro hero: fixed — now explicitly names Land O' Lakes, Pasco County, North Hillsborough
- standing-detail.astro Florida section heading: fixed — now "Pasco County vehicles" not "Florida"
- standing-detail.astro Florida body: fixed — added Pasco County well water and lovebug context with specific county naming
- six-week-rhythm.mdx: fixed — new section names Pasco County, North Hillsborough, specific communities (Lake Padgett Estates, Bexley, Land O' Lakes, Wilderness Lake Preserve, Seven Oaks, Wesley Chapel)
- ceramic-coating-florida.mdx: fixed throughout — Pasco County and North Hillsborough named explicitly, Land O' Lakes and Wesley Chapel named as specific communities

**Service facts buried in paragraphs:**
- ceramic-coating.astro cure time: was a bullet among five bullets; now restated as "24 to 48 hours minimum — no exceptions" with additional emphasis
- ceramic-coating.astro longevity: was absent; now stated in hero as "two to five years under Florida conditions, compared to four to eight weeks for a standard spray sealant"
- six-week-rhythm.mdx interval rationale: was implied; now stated explicitly as a standalone H2 section with the reasoning spelled out

**Schema specificity:**
- standing-detail.astro `areaServed` was `{ '@type': 'State', name: 'Florida' }` — corrected to two `AdministrativeArea` entries: "Pasco County, Florida" and "North Hillsborough County, Florida"
- ceramic-coating.astro has no structured data schema at all — this is a gap not addressed in this pass (see Priority Order below)

---

## 5. Specific Restructuring Recommendations

### standing-detail.astro — changes made

The hero paragraph was the most important fix. It was a 3-sentence process description with no explicit geography and no definition. An AI engine asked "what is a standing detail program" would have had to infer the answer from the H1 + the paragraph together. The new paragraph states the definition, the geography, and the core mechanism in the first sentence.

The Florida section heading change was the second most important fix. "Why cadence matters in Florida" is a heading that could apply to any service on any detailing site. "Why a six-week cadence is the right interval for Pasco County vehicles" answers a specific question with specific information before the reader reaches the body copy.

### ceramic-coating.astro — changes made

The title tag was the most critical fix. "Ceramic Coating" with no geo is not a page title — it is a category label. The new title "Ceramic Coating in Pasco County, FL | BayShine Mobile Detailing" is the format that can appear in AI citations and search results for local queries.

The new Florida-specific section is the highest-value citation target on the page. The two-column "what it does / what it requires" structure was already good. The gap was that nothing on the page told an AI engine why ceramic coating is different in Florida than anywhere else. That section now exists.

### ceramic-coating-florida.mdx — full expansion

The original was 260 words across four sections. That is not a blog post — it is a stub. An AI engine looking for a citable answer about ceramic coating in Florida would find the right keywords but not enough passage depth to quote with confidence. The expansion brings the post to approximately 750 words, adds three new H2 sections (lovebug factor, what coating does not do, whether it is the right call), and makes each section independently citable.

The internal link to `/ceramic-coating` is preserved. The broken link to `/blog/hard-water-spots-tampa` (which does not exist) was removed in the expansion and replaced with the inline context about hard water.

### six-week-rhythm.mdx — full expansion

The original was 280 words. Same problem as the ceramic post — correct keywords, insufficient depth. The expansion brings the post to approximately 750 words, adds a dedicated "Why six weeks specifically" section that directly answers the interval question, and adds a Pasco County-specific section that gives the content local retrieval signals it was entirely missing.

---

## 6. Priority Order

**Changes implemented in this session (highest citation lift first):**

1. `ceramic-coating-florida.mdx` — Expanded from 260 to 750 words. Biggest lift per unit of change: the post now has passage depth that AI engines can extract from.

2. `six-week-rhythm.mdx` — Expanded from 280 to 750 words. Same rationale. Added the geo section that was entirely absent.

3. `ceramic-coating.astro` — Title tag corrected (geo-targeted), hero paragraph states the durability fact, new Florida section added. The page was citable in structure but missing the facts that make a citation defensible.

4. `standing-detail.astro` — Hero paragraph fixed, H2s sharpened, schema corrected, Florida section made geo-explicit. Already structured well; the fixes tightened the citation signals at the most-read entry points.

5. `service-area/[zip].astro` (Land O' Lakes entries) — No changes. Already citation-ready. The FAQ schema, neighborhood naming, and local context paragraphs are the model for how all location pages should be structured.

**Not addressed in this pass — follow-up needed:**

- `ceramic-coating.astro` has no structured data schema. A `Service` schema with `areaServed: Pasco County + North Hillsborough` and `serviceType: Ceramic Coating` should be added, matching the pattern used in `standing-detail.astro`.
- The broken internal link `/blog/hard-water-spots-tampa` that existed in the original `ceramic-coating-florida.mdx` was removed. That post should be written if the topic is editorially warranted — it was linked from a published post.
- `blog/six-week-rhythm.mdx` links to `/standing-detail` but `standing-detail.astro` does not link back to the blog post. Adding a `RelatedBlogBox` or inline link to this post from the Standing Detail page would close the internal link loop and reinforce the citation cluster.
