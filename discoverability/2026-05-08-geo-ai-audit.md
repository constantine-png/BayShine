# BayShine GEO and AI Search Audit
**Date:** 2026-05-08
**Scope:** Full AI crawler access audit, llms.txt creation, entity markup review, citation-readiness assessment, local AI search gap analysis

---

## 1. AI Crawler Access Status

The original robots.txt contained a single wildcard rule (`User-agent: *`) permitting all crawlers with the only disallow being `/api/`. Technically this gave every AI crawler access, but it was implicit rather than explicit. Implicit access creates ambiguity: some AI system operators follow a conservative interpretation where unlisted bots check only the wildcard rule and may interpret silence as a signal to be more cautious about training data use.

The updated robots.txt makes access explicit for every tracked bot.

| Bot | User Agent | Original Status | Updated Status |
|---|---|---|---|
| OpenAI training | GPTBot | Implicit allow (wildcard) | Explicit allow |
| OpenAI search-time | ChatGPT-User | Implicit allow (wildcard) | Explicit allow |
| OpenAI search index | OAI-SearchBot | Implicit allow (wildcard) | Explicit allow |
| Anthropic training | ClaudeBot | Implicit allow (wildcard) | Explicit allow |
| Anthropic search-time | Claude-Web | Implicit allow (wildcard) | Explicit allow |
| Anthropic alternate | anthropic-ai | Implicit allow (wildcard) | Explicit allow |
| Perplexity training/index | PerplexityBot | Implicit allow (wildcard) | Explicit allow |
| Perplexity search-time | Perplexity-User | Implicit allow (wildcard) | Explicit allow |
| Google AI training | Google-Extended | Implicit allow (wildcard) | Explicit allow |
| Microsoft/ChatGPT Search | Bingbot | Implicit allow (wildcard) | Implicit allow (wildcard covers Bingbot; no change needed as Bingbot follows standard web crawl rules) |
| Common Crawl | CCBot | Implicit allow (wildcard) | Explicit allow |
| Apple Intelligence | Applebot-Extended | Implicit allow (wildcard) | Explicit allow |
| Meta AI training | Meta-ExternalAgent | Implicit allow (wildcard) | Explicit allow |

No bots were previously blocked. The change from implicit to explicit reduces ambiguity and signals active intent to allow AI training and retrieval.

**Action taken:** `public/robots.txt` updated with explicit allow directives for all 13 tracked AI bot user agents, `/api/` disallow preserved, sitemap reference preserved.

---

## 2. llms.txt Status

**Before:** File did not exist. No `public/llms.txt` was present in the repository.

**After:** File created at `public/llms.txt`, served at `https://bayshine.net/llms.txt`.

The file includes:
- Business identity block with geographic scope statement
- Complete ZIP code list from `serviceArea.ts` (24 ZIP codes across Pasco and Hillsborough counties)
- Service descriptions pulled from actual page content, not from memory
- Residential services: Exterior Detail, Full Detail, Ceramic Coating, Heavy Recon, Standing Detail
- Fleet and B2B services: Fleet Detailing, Apartment Community Programs, Lot Maintenance
- Service area narrative covering priority, standard, and edge coverage zones
- 15 blog posts selected for AI query relevance (Florida-specific, Pasco County-specific, service-category anchored)
- About section with operator identity, methodology summary, and business model description
- Citation preferences section specifying correct brand name formatting

**Excluded from llms.txt:**
- Draft blog posts (`ceramic-coating-florida-humidity.mdx` marked `draft: true`, `ceramic-coating-florida-sun.mdx` marked `draft: true`, `full-detail-interior-odor-elimination.mdx` marked `draft: true`)
- Redundant posts where two posts covered the same query (e.g., both `resident-detailing-program.mdx` and `resident-detailing-amenity-no-cost.mdx` exist; the latter was included as it is more specific and directly answers "how does the property program work at no cost")
- `how-to-prep-your-car-for-detailing.mdx` excluded; useful for users but lower AI query priority than the Florida-specific content
- `lot-managers-wash-quotes.mdx` excluded in favor of `fleet-per-unit-pricing-explained.mdx` which answers the more common AI query

**Next update trigger:** When standing-detail page URL changes, when a new service is added, or when pricing structure changes. Minimum quarterly review.

---

## 3. Entity Markup Coverage

Based on schema already present in the codebase (confirmed from `src/pages/index.astro` and `src/pages/standing-detail.astro`):

### BayShine as a LocalBusiness entity
- Present on homepage (`src/pages/index.astro`): `@type: ['LocalBusiness', 'AutoWash']`, `@id: 'https://bayshine.net/#business'`
- Name: `BayShine Detailing`
- Telephone: `+18133245522`
- URL: `https://bayshine.net`
- `areaServed` populated dynamically from `SERVICE_AREA` data, covering all city entries
- `openingHoursSpecification`: Monday through Saturday, 08:00 to 20:00
- `priceRange`: `$$`

**Gap:** No `sameAs` links to Google Business Profile, Facebook, or other authoritative references. These strengthen entity disambiguation in AI knowledge graphs. When profiles are live, add them.

**Gap:** No `Person` schema for Constantine. For a single-operator business, the operator's identity strengthens entity clarity. A `Person` schema with `name`, `jobTitle`, and `worksFor` cross-referencing the `LocalBusiness` entity would improve disambiguation.

### Service-level schema
- `src/pages/standing-detail.astro` contains `@type: Service` schema with `name`, `description`, `provider`, and `areaServed`.
- Other service pages (exterior-detail, full-detail, ceramic-coating, recon) appear to use only the BaseLayout meta tags without page-level Service schema.

**Gap:** Service pages lack individual `Service` schema. Each should carry its own structured data identifying the service name, description, and provider. This is the highest-impact schema gap on the site.

### FAQPage schema
- Present on homepage, populated from `src/data/faq.ts`. Correct implementation.

### Service area entity coverage
- `areaServed` on the homepage schema covers all unique cities from `SERVICE_AREA`. This is correct.
- ZIP codes are not represented in schema. Schema.org's `PostalCode` type or `GeoCircle` could add specificity, but city-level coverage is acceptable for local AI context.

---

## 4. Citation-Readiness Assessment

Citation-readiness measures how well a page would be quoted or summarized by an AI system answering a relevant local query. Five criteria: geographic specificity, question-answer structure, concrete detail depth, entity clarity, and duplicate content risk.

### Homepage (https://bayshine.net)
**Score: 3.5 / 5**
- Geographic specificity: strong (county names in title and description, city names in structured data)
- Question-answer structure: weak (the FAQ section helps, but the hero and service sections are declarative, not responsive to specific queries)
- Concrete detail depth: moderate (service names are clear, but depth lives on individual service pages)
- Entity clarity: strong (LocalBusiness schema, correct brand name, phone number prominent)
- Duplicate content risk: low
- Primary gap: The homepage does not directly answer "what does mobile detailing cost in Pasco County" or "what is the difference between a full detail and a car wash." Those are the queries that drive AI citation. The FAQ may cover some of these; the structured content depth on service pages is where the real citation material lives.

### Exterior Detail (https://bayshine.net/exterior-detail)
**Score: 4 / 5**
- Geographic specificity: present (page description names both counties; body copy notes the Florida climate connection)
- Question-answer structure: the "What's included" section is a direct answer to "what does an exterior detail include"
- Concrete detail depth: strong (nine specific line items, methodology callout)
- Entity clarity: moderate (no Service schema, relies on page meta and body content)
- Duplicate content risk: low
- Primary gap: No Service schema. The page would be more citable if the structured list were accompanied by structured data AI crawlers can ingest without parsing HTML.

### Ceramic Coating (https://bayshine.net/ceramic-coating)
**Score: 4.5 / 5**
- Geographic specificity: county names in description; Florida-specific climate context in body copy
- Question-answer structure: "What ceramic does" and "What it requires" sections directly answer the most common ceramic coating AI queries
- Concrete detail depth: strong (benefits, requirements, cure time, honest "coat or don't coat" framing)
- Entity clarity: moderate (same Service schema gap as other pages)
- Duplicate content risk: low
- Best page on the site for AI citation on ceramic-specific queries.

### Fleet (https://bayshine.net/fleet)
**Score: 3 / 5**
- Geographic specificity: county names in description; lacks city-level specificity in body copy
- Question-answer structure: the "How it works" three-step section is structured but not query-responsive
- Concrete detail depth: moderate (services listed, process described, but pricing model is vague by design)
- Entity clarity: moderate
- Duplicate content risk: low
- Primary gap: The page does not directly answer "what does fleet detailing cost per vehicle in Pasco County" because pricing requires a quote. AI engines may skip the page for cost queries. A paragraph explaining the per-unit model and volume-based rate structure (without specific numbers) would improve citation likelihood for fleet-related queries.

### About (https://bayshine.net/about)
**Score: 4 / 5**
- Geographic specificity: strong (county names, mobile-only model, one-technician structure)
- Question-answer structure: section headers are answerable ("Who runs it and why," "The methodology")
- Concrete detail depth: very strong for methodology; the iron decontamination and clay bar sequence is described at a level that would let an AI system accurately summarize the approach
- Entity clarity: strong (operator implied, business model clear, but no Person schema)
- Duplicate content risk: low
- Best candidate for citation on "who is BayShine" and "what makes BayShine different from other detailers" queries.

---

## 5. Local AI Search Performance

### Queries BayShine should appear for

Based on content depth and geographic specificity, BayShine's current content positions it for:

- "mobile detailer in Wesley Chapel FL" or "mobile detailer Lutz FL" (strong geographic signal in schema and meta)
- "what does a full detail include" (full-detail.astro content answers this directly)
- "ceramic coating vs wax Florida" (ceramic-coating.astro + ceramic blog posts)
- "how long does ceramic coating last in Florida" (ceramic-coating.astro has partial answer; dedicated content would strengthen this)
- "iron decontamination explained" (iron-decontamination.mdx is well-positioned for this)
- "how often should I detail my car in Florida" (six-week-rhythm.mdx addresses this)
- "lovebug damage to car paint Florida" (lovebug-season.mdx and exterior-detail-spring-prep-pasco-county.mdx)
- "fleet detailing pricing per unit" (fleet-per-unit-pricing-explained.mdx)
- "how does an apartment detailing amenity work" (apartments.astro + resident-detailing-amenity-no-cost.mdx)

### Gaps between what BayShine should appear for and current content coverage

**"Best mobile detailer near me [city]"**
AI systems responding to this query need a confident business identity signal: reviews, a Google Business Profile, and a locally-anchored page for each target city. BayShine's schema covers cities but there are no city-specific landing pages. This is a GEO and local SEO gap simultaneously. City-specific pages for Wesley Chapel, Lutz, Land O' Lakes, and Odessa would be the highest-impact content addition.

**"How much does mobile detailing cost in Pasco County"**
The quote estimator exists but is JS-rendered. AI crawlers may not execute the estimator to retrieve price ranges. A static price range section on the quote page or service pages would improve citation for cost queries.

**"Best ceramic coating installer Tampa area"**
The site does not target Tampa directly. The service area extends to Tampa ZIPs (33606, 33607, 33612, 33613, 33618, 33625) but there is no Tampa-specific content. A blog post or landing page for "ceramic coating North Tampa" or "mobile ceramic coating Wesley Chapel" would capture this query class.

**"Marine detailing Pasco County"**
The business name and GBP category include "marine" but the boat-detailing page was deleted (`D src/pages/boat-detailing.astro` in git status). No marine content exists on the live site. AI systems have no basis to cite BayShine for marine queries. This is a content gap that directly undermines the brand name.

**"What is a Standing Detail program"**
The standing-detail page exists and has Service schema. This is the most differentiated product. The Field Guide and blog do not have a post specifically explaining how the 6-week cycle works from a client perspective. The six-week-rhythm.mdx approaches it but from a technical angle. A client-facing explainer post would improve citation for "what is a detailing subscription" or "detailing maintenance program Florida."

---

## 6. Recommended Changes (ranked by impact)

**1. Restore or rebuild the boat-detailing page.**
The business operates under "Auto and Marine Detailing." The marine page was deleted. Every AI query about marine or boat detailing in Pasco County currently has no BayShine content to cite. This is the largest citation gap relative to the brand's stated scope. Even a minimal page describing marine gel coat work and service area would recover this.

**2. Add city-specific landing pages for the four highest-priority markets.**
Wesley Chapel, Lutz, Land O' Lakes, and Odessa are the highest-volume ZIP codes in the service area. City-specific pages anchored to those names give AI engines a clear geographic entity match for "mobile detailer in [city]" queries. These pages can share a template but must contain locally specific content (neighborhood names, ZIP codes, nearby references) to avoid thin-content risk.

**3. Add Service schema to all service pages.**
Exterior Detail, Full Detail, Ceramic Coating, Recon, Lot Maintenance, and Apartments pages lack `@type: Service` structured data. This is the highest-impact technical schema gap. The standing-detail page already has this correct. The pattern is there; it needs to be applied to the remaining service pages.

**4. Add Person schema for Constantine.**
Single-operator service businesses benefit significantly from operator entity clarity in AI systems. A `Person` schema with `name: Constantine`, `jobTitle: Owner and Lead Technician`, and `worksFor` referencing the `LocalBusiness @id` strengthens the entity graph. Place this in BaseLayout or on the About page.

**5. Publish a client-facing Standing Detail explainer post.**
The existing six-week-rhythm.mdx is written from a technical angle. A post written directly for residential clients answering "what is a Standing Detail and how does it work" would capture AI queries from customers, not just detailers. High citation potential given the differentiation of the product.

**6. Add a static price range to service and quote pages.**
The quote estimator is JS-rendered. AI crawlers do not execute JavaScript. A static paragraph on the quote page or a pricing note on service pages (e.g., "Exterior details for sedans and SUVs typically range from $X to $Y depending on vehicle condition") would make cost data crawlable. This is the most common local service query AI engines receive and the most common gap in AI citation for local businesses.

**7. Add sameAs links to LocalBusiness schema.**
When the Google Business Profile URL and any other authoritative directory listings are live, add them as `sameAs` values in the LocalBusiness schema on the homepage. This is low effort and directly improves entity disambiguation in AI knowledge graphs.

**8. Add blog content targeting Tampa-area ceramic coating and detailing queries.**
The service area includes north Tampa ZIPs but there is no Tampa-specific content. One or two posts targeting "mobile ceramic coating North Tampa" or "exterior detail Carrollwood" would extend citation reach into the Hillsborough portion of the service area.

---

*Report produced by the BayShine GEO/AI Search Specialist. Next scheduled audit: 2026-08-08 (quarterly). Trigger immediate re-audit if service area changes, boat-detailing page is rebuilt, or city landing pages are published.*
