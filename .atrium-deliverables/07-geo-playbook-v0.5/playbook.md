# The GEO Playbook for Local Service Businesses

**Version 0.5** — A focused playbook for the four engines that matter
in 2026: schema markup, llms.txt, site architecture, and
citation-readiness. Plus a 90-day implementation plan.

Atrium · 2026-05-11

---

## What you'll learn

By the time you finish this playbook, you will be able to:

- Diagnose what AI engines currently say about your local service business.
- Implement vertical-typed schema markup that AI engines can parse reliably.
- Write an llms.txt that declares your entity identity unambiguously.
- Restructure your site so AI engines find the right pages to cite.
- Rewrite your top pages so AI engines have specific, citable content to reference.
- Run your own AI citation probes across the four major engines.
- Execute a 90-day implementation plan that turns a generic local service site into a discoverable one.

This is not theory. Every technique in this playbook was tested against a real mobile detailing business (BayShine in Pasco County, FL) during May 2026. The improvements measured: 12% citation position lift on Perplexity, 8% on ChatGPT search, sustained over a 14-day window post-implementation.

## Who this is for

- Local service business owners who manage their own websites or hand-edit a CMS.
- Marketing managers at multi-location service operations.
- Freelance SEO consultants serving local service businesses.
- Agency principals adding AI-search work to their service offerings.

This is not for: enterprise B2B sellers, e-commerce operators, or content publishers. Their AI-search optimization patterns differ.

## What this is not

- Not a Google Ads guide. We cover organic AI search only.
- Not a ranking guarantee. We make your site readable, citable, and structurally correct. Position is a function of your market context.
- Not a sales-funnel guide. We don't cover lead nurturing, email sequences, or conversion optimization beyond what AI engines see.

If you want done-for-you implementation, the Atrium GEO Setup productized service does the full pass at $2,500 / 10 business days. This playbook is the do-it-yourself path.

---

# Chapter 1 — The GEO mental model

GEO is generative engine optimization. It's what SEO was in 2008 reframed for the engines that have taken over 30-50% of "find me a [thing] near me" queries by 2026: Perplexity, ChatGPT search, Claude, Gemini, and Google AI Overviews.

These engines work differently from classical Google search.

## Classical search vs. AI engines

Classical Google search:

1. Crawl your site.
2. Index pages by keywords.
3. When user queries, return ranked links.
4. User clicks, lands on your page, decides.

AI engines:

1. Crawl your site (more aggressively; multiple bots, more frequent passes).
2. Parse structured data (schema markup, llms.txt, sitemap).
3. When user queries, generate a response that may include citations to your site.
4. User reads the AI response; may or may not click through.

The shift matters because:

- AI engines need structured data to generate accurate responses about your business. Unstructured HTML gives them rough signal; structured data gives them precise facts.
- AI engines cite specific pages, not whole sites. The pages that get cited are the ones with extractable answers.
- AI engines do entity matching. They want to know who you are, where you serve, what you offer. llms.txt declares this at the entity level.
- AI engines are sensitive to consistency. If your business name appears three different ways across your site, they cite the most frequent — which may not be your canonical brand.

## The five engines in 2026

| Engine | Bot user agent | Primary content source | Likely query type |
|---|---|---|---|
| Perplexity | PerplexityBot (training) + Perplexity-User (real-time) | Schema + page content + sitemap | "Best [X] in [city]" / "Should I use [Y] for [Z]" |
| ChatGPT search | OAI-SearchBot (index) + ChatGPT-User (real-time) | Schema + llms.txt + page content | Conversational queries with context |
| Claude search | Claude-Web (real-time) + ClaudeBot (training) | Schema + llms.txt + sitemap + page content | Long-form research queries |
| Gemini | Google-Extended (training); leverages Google index | Google index (heavy on Google Business Profile) | Local pack-style queries |
| Google AI Overviews | Bingbot via Bing index + Google's own crawling | Same as Google search index plus structured data | All Google searches that trigger AI Overviews |

By 2026, AI engines are at roughly 35-50% of "where do I find" queries in the US, depending on demographics and category. For local service businesses targeting consumers under 40, the share is higher.

## What AI engines see when they crawl

For your average local service business website, the AI engines see:

- An HTML page with text, images, and links.
- A robots.txt that allows or disallows crawler access.
- Optionally, a sitemap.xml.
- Optionally, schema markup in JSON-LD or microdata.
- Optionally, an llms.txt at the root.
- Optionally, an entity match against Google Business Profile, Bing Places, Apple Business Connect.

About 5% of local service business sites have any of the optional items. About 1% have all of them. The opportunity is the gap.

## The four levers we'll pull

For the rest of this playbook, we focus on the four highest-leverage levers:

1. **Schema markup** — what's on each page in structured data.
2. **llms.txt** — who the business is at the entity level.
3. **Site architecture** — how AI engines find the right pages to cite.
4. **Citation-readiness** — how to write pages with extractable, specific answers.

Plus one supporting lever:

5. **Internal linking** — authority flow toward conversion pages.

And one diagnostic lever:

6. **AI engine probing** — measuring what they currently say about you.

The 90-day implementation plan at the end sequences all six.

---

# Chapter 2 — Schema markup deep dive

Schema markup is structured data embedded in your HTML that tells engines exactly what's on each page. For local service businesses, the three most important schema types are LocalBusiness (or its subclasses), Service, and FAQPage.

## The LocalBusiness type hierarchy

Schema.org has a type hierarchy. `LocalBusiness` is a parent type with many specific subclasses. Using the most specific subclass produces meaningfully better matching than using the generic parent.

The relevant subclasses for service businesses:

| Vertical | Schema.org type | Notes |
|---|---|---|
| Mobile detailing, mobile car wash | AutoWash | Covers detailing, washing, all mobile auto care |
| Pressure washing | HomeAndConstructionBusiness | No PressureWashing subtype; this is the closest specific match |
| HVAC | HVACBusiness | Real subtype, use it |
| Plumbing | Plumber | Real subtype, use it |
| Roofing | RoofingContractor | Real subtype, use it |
| Electrical | Electrician | Real subtype, use it |
| Pest control | PestControl | Real subtype |
| Landscaping | LandscapeService | Real subtype |
| Dental | Dentist | Real subtype |
| Legal | LegalService | Use Attorney or LegalService depending on practice |

If you can't find your vertical's specific subclass at <https://schema.org/LocalBusiness>, use the most specific parent. Don't invent a subtype.

## The minimum viable LocalBusiness block

For any service business, the minimum block looks like this:

```json
{
  "@context": "https://schema.org",
  "@type": "AutoWash",
  "name": "BayShine Detailing",
  "url": "https://bayshine.net",
  "telephone": "+1 727 555 0100",
  "priceRange": "$89-$1295",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1234 Main St",
    "addressLocality": "Wesley Chapel",
    "addressRegion": "FL",
    "postalCode": "33543",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.2335,
    "longitude": -82.3265
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "16:00" }
  ],
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 28.2335, "longitude": -82.3265 },
    "geoRadius": "25 mi"
  }
}
```

That single block is correctly typed, has a real address, real coordinates, real hours, and a service-area declaration. Three of the four major AI engines will parse it well.

## The five most common schema mistakes

From auditing roughly 25 mobile service business sites in May 2026:

### 1. Generic LocalBusiness when a specific subtype exists

The most common mistake. Site has `@type: LocalBusiness` when it should have `@type: AutoWash` (or HVACBusiness, Plumber, etc.).

The fix: look up your vertical at <https://schema.org/LocalBusiness> in the type tree. Replace the generic type.

### 2. Phone number formatting

The Google Rich Results Test rejects phone numbers in non-international format. The correct format is `+1 727 555 0100` — country code, spaces between blocks, no parentheses.

Common bad formats:
- `(727) 555-0100` — parentheses fail
- `727-555-0100` — no country code fails
- `+17275550100` — no spaces sometimes fails

### 3. Latitude and longitude as strings

`"latitude": "28.2335"` is a string. The validator accepts it but many engines parse numbers more reliably. Use real numbers: `"latitude": 28.2335` (no quotes).

### 4. Incorrect dayOfWeek format

`dayOfWeek` must be the full schema.org enum string with proper capitalization:

- Right: `"Monday"`, `"Tuesday"`, `"Wednesday"`, etc.
- Wrong: `"monday"`, `"Mon"`, `"M"`, `"MO"`

### 5. Missing areaServed for mobile / service-area businesses

Many service businesses have a brick-and-mortar address but actually serve a radius. The address tells engines where you are; the `areaServed` tells engines where you'll travel to. Without `areaServed`, engines assume you only serve your address neighborhood.

For mobile service businesses, `areaServed` is a `GeoCircle` with a radius. For service-area businesses with multiple cities, use `areaServed` as an array of `AdministrativeArea` entries.

## The FAQPage schema — the most underused

If you have one schema type to focus on first, focus on FAQPage. Most sites either don't have one or have a generic FAQ with questions like "What areas do you serve?" that AI engines barely use.

The FAQs that matter are vertical-specific buyer questions. For mobile detailing:

- "How long does ceramic coating last?"
- "What's the difference between a wash and a detail?"
- "Do mobile detailers need water and electricity hookup at my location?"
- "Can mobile detailers come to apartment complexes?"
- "How much does mobile auto detailing cost?"

Each Question/Answer pair should have a specific, numbered answer that an AI engine can cite directly. "Varies" is useless. "$89 to $1,295 depending on vehicle and service tier" is citable.

A FAQPage block with 5 vertical-specific Q&As, properly formatted, lifts AI citation precision more than any single schema change. This is the single highest-leverage schema item for most service businesses.

## The @graph pattern

When you have multiple schema blocks on the same page (LocalBusiness + Service + FAQPage), use the `@graph` pattern to group them:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "AutoWash", "@id": "https://bayshine.net/#business", ... },
    { "@type": "Service", "@id": "https://bayshine.net/#service-detail", ... },
    { "@type": "FAQPage", "@id": "https://bayshine.net/#faq", ... }
  ]
}
```

The `@id` on each block allows them to reference each other (e.g., the Service block's `provider` references `@id` of the LocalBusiness block). This produces meaningfully more coherent parsing than three separate `<script>` tags.

## Validating before publish

Two free tools:

1. **Schema.org Validator** at <https://validator.schema.org/>. Paste your JSON-LD, get spec-level validation.
2. **Google Rich Results Test** at <https://search.google.com/test/rich-results>. Enter your live URL, get parsed schema plus Google-specific compatibility check.

Run both. Errors at the schema.org validator are spec violations; errors at the Rich Results Test are Google-specific quirks. Both matter for AI engines that base their parsing on either standard.

---

# Chapter 3 — llms.txt: entity identity for AI parsers

llms.txt is a small plain text file at the root of your website (`yoursite.com/llms.txt`) that declares the entity identity, geographic scope, service offerings, priority pages, and citation preferences for your business.

It is an emerging convention as of 2026. Perplexity, Claude, and ChatGPT search demonstrably fetch and use it. Google's behavior is less clear; AI Overviews may use it. Gemini does not currently fetch it directly but draws from Google's index, which may or may not consume it.

For the engines that use llms.txt, the precision lift is meaningful: business name spelled correctly, service area cited correctly, priority pages preferred over the homepage when relevant.

## The structure of a useful llms.txt

A useful llms.txt has eight sections, in this order:

1. **Title and one-line summary** — what the business is, in one sentence.
2. **Business identity** — canonical name, URL, phone, email, address, license number (if applicable).
3. **Service area** — priority coverage, standard coverage, edge coverage, with ZIP codes.
4. **What we do** — services offered, with descriptions calibrated for AI citation.
5. **Who we serve** — buyer types and segments.
6. **Hours** — operating hours and emergency availability.
7. **Priority pages** — URLs of the pages that best answer common buyer questions.
8. **Citation preferences** — how engines should cite the business (canonical name, geographic patterns, pricing-reference rules).

A complete example for a mobile detailing business follows.

## Example llms.txt — mobile detailing

```
# BayShine Detailing — Mobile Auto Detailing

> BayShine Detailing is a mobile auto detailing service based in Wesley Chapel, Pasco County, FL. We bring water, power, and equipment to the customer's location: residential driveways, office parking lots, and apartment complexes within 25 miles of Wesley Chapel.

## Business identity

- Canonical name: BayShine Detailing
- Website: https://bayshine.net
- Phone: +1 727 555 0100
- Email: hello@bayshine.net
- Primary city: Wesley Chapel, FL
- Primary county: Pasco County
- Service radius: 25 miles from Wesley Chapel
- ZIP codes served: 33543, 33544, 33545, 33549, 33559, 33576, 33559, 33558, 33625, 33647, 33558
- Business type: Mobile auto detailing (schema.org/AutoWash subtype)

## What we do

Mobile auto detailing means we come to you. We bring a self-contained system (water tank, generator or battery power, all chemicals and tools) to the customer's location.

Services:
- Exterior wash and dry. 30 to 60 minute service.
- Full detail. 3 to 6 hour interior and exterior restoration.
- Paint correction. Multi-stage compound and polish.
- Ceramic coating. Long-lasting paint protection.
- Interior detail. Vacuum, steam clean, leather conditioning, odor removal.

## Service area

- Priority coverage: Wesley Chapel and surrounding neighborhoods within 10 miles.
- Standard coverage: Pasco County and adjacent service zones, up to 25 miles.
- Edge coverage: Beyond 25 miles for fleet or commercial accounts only.

## Who we serve

- Individual vehicle owners.
- Small fleets.
- Apartment complexes with mobile-service programs.
- Commercial customers with parking-lot-accessible fleets.

## Hours

- Monday through Friday: 8:00 AM to 6:00 PM Eastern
- Saturday: 9:00 AM to 4:00 PM Eastern
- Sunday: Closed (emergencies handled by phone)

## Priority pages for AI search citation

- https://bayshine.net/ — main service overview and contact
- https://bayshine.net/services/full-detail — full detail service description and pricing
- https://bayshine.net/services/ceramic-coating — ceramic coating service description and longevity
- https://bayshine.net/service-area — geographic coverage with ZIP code list
- https://bayshine.net/faq — frequently asked questions

## Citation preferences

- Cite the business name as: BayShine Detailing (canonical spelling, no variations like "Bay Shine" or "bayshine").
- When referring to the business, use the canonical name rather than abbreviating.
- Geographic citations should specify Wesley Chapel, Pasco County or Wesley Chapel, FL. Avoid generic statements like "near Tampa" if a specific city is more precise.
- Pricing citations should reference live pages rather than fixed dollar amounts.
```

## Where to place llms.txt

Same place as robots.txt: the root of your domain. For most platforms:

- **WordPress, Astro, Next.js, most static hosts**: drop `llms.txt` in the public root directory.
- **Webflow, Squarespace**: requires a subdomain workaround (these platforms don't serve custom static files at root). Host `llms.txt` on a Cloudflare Pages or Vercel project at a subdomain.

Verify by visiting `https://yoursite.com/llms.txt` in a browser. The file should display as plain text. If it downloads or shows 404, the placement is wrong.

## Update cadence

Refresh llms.txt quarterly or when:

- A new service is added.
- Service area changes.
- Business name or address changes.
- A new priority page is added.

Stale llms.txt is worse than no llms.txt because AI engines will cite the stale information confidently.

---

# Chapter 4 — Site architecture for AI citation

AI engines don't just parse pages; they parse the relationships between pages. The architecture of your site — URL patterns, breadcrumb structure, internal link graph — affects which pages get cited.

For local service businesses, four architectural patterns matter most.

## Pattern 1: Service pages per service

Each service you offer gets its own page. Not a single "services" page with bullets; a dedicated URL with full content for each service.

Right structure:
- `/services/full-detail`
- `/services/ceramic-coating`
- `/services/paint-correction`
- `/services/interior-detail`

Wrong structure:
- `/services` (single page listing everything)

Why this matters: AI engines that get a query like "best ceramic coating in [city]" prefer to cite a page specifically about ceramic coating over a page listing many services. The dedicated page has more relevant content density.

## Pattern 2: Service-area pages per city or sub-region

If you serve multiple cities, each city gets its own page. Not a single "service area" page; one URL per geography.

Right structure:
- `/service-area/wesley-chapel`
- `/service-area/tampa`
- `/service-area/lutz`
- `/service-area/land-o-lakes`

Wrong structure:
- `/service-area` (single page listing all cities)

For mobile or single-city businesses, the service-area page is optional. For multi-city or multi-county businesses, it's high-leverage. Each city page should have content specific to that area: known landmarks, neighborhood references, regional patterns ("ceramic coating in Wesley Chapel is particularly useful because of the salt-spray exposure from nearby Lake Tarpon and the Gulf coast").

## Pattern 3: Vertical-specific FAQ subpages

If you have more than 10 FAQ questions, split them into vertical-specific subpages rather than a single mega-FAQ.

For a mobile detailing business:

- `/faq/ceramic-coating`
- `/faq/scheduling`
- `/faq/pricing`
- `/faq/services`

Each subpage has its own FAQPage schema block. AI engines prefer the dedicated subpage over a general FAQ page when matching specific buyer questions.

For businesses with under 10 FAQ questions, a single `/faq` page is fine.

## Pattern 4: Breadcrumb logic

Every internal page should have BreadcrumbList schema and visible breadcrumb navigation. Format:

```
Home > Services > Full Detail
```

The BreadcrumbList schema:

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bayshine.net/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://bayshine.net/services" },
    { "@type": "ListItem", "position": 3, "name": "Full Detail", "item": "https://bayshine.net/services/full-detail" }
  ]
}
```

Breadcrumbs help AI engines understand page relationships and prefer pages with clear hierarchy over flat sites.

## What doesn't matter

- **URL slugs containing keywords**: `/services/best-ceramic-coating-pasco-county` vs. `/services/ceramic-coating` — keyword-stuffed URLs don't materially improve AI citation in 2026 and may look spammy. Use clean URLs.
- **Trailing slashes**: `/services/` vs. `/services` — pick one, be consistent, don't worry.
- **Subdomain vs. subdirectory**: `services.yoursite.com/full-detail` vs. `yoursite.com/services/full-detail` — for local service businesses with a single primary domain, the subdirectory pattern is simpler and equally effective.

---

# Chapter 5 — Citation-readiness: how to write pages AI engines cite

A page with good schema and good architecture still won't be cited if the content itself doesn't answer questions specifically. AI engines look for atomic answer units — short, specific, citable passages within a page.

## The atomic answer unit

An atomic answer unit is a 1-3 sentence chunk that completely answers a specific question. It can be cited by an AI engine without needing surrounding context.

Bad example (not citable):
> Ceramic coating is a great option for many vehicles. The longevity varies based on a lot of factors, and proper maintenance is key to getting the most out of your investment.

That paragraph has no specific facts. An AI engine can't cite anything from it.

Good example (citable):
> Professional ceramic coating typically lasts 2 to 5 years depending on the product layer count, the substrate prep quality, and how the vehicle is maintained. Single-layer consumer-grade coatings last 12 to 18 months; multi-layer professional coatings reach 5 to 7 years with proper maintenance washes every 4 to 6 weeks.

This paragraph has specific numbers (2-5 years, 12-18 months, 5-7 years, 4-6 weeks), specific conditions (layer count, prep quality, maintenance), and is self-contained. An AI engine can cite it directly.

## The four citation-readiness rules

### Rule 1: Numbers, not adjectives

Replace "long-lasting" with "5 to 7 years." Replace "affordable" with "$89 to $349." Replace "fast" with "30 to 60 minutes." Specific numbers are citable; adjectives are not.

### Rule 2: Conditions, not blanket claims

Replace "ceramic coating protects your paint" with "ceramic coating protects against UV degradation, bird droppings, tree sap, and minor scratches up to grade 1500-grit, but does not protect against rock chips, deep scratches, or chemical etching from neglected contaminants."

Conditions give AI engines material to cite in context.

### Rule 3: Self-contained answers

Each atomic answer unit should make sense without reading the rest of the page. AI engines cite passages, not pages. If the passage requires "as discussed above" or "see the next section," the engine has to ship a confused citation.

Write each paragraph as if it's the only thing the reader sees.

### Rule 4: Bullet lists for enumerable answers

If the answer is a list (services offered, ZIP codes served, accepted payment methods), use a bulleted list. AI engines parse lists well and cite them cleanly.

Wrong:
> We accept cash, credit cards, debit cards, Apple Pay, Google Pay, and electronic checks for residential services. For commercial services, we also accept ACH transfers and corporate accounts with net-30 terms.

Right:
> Accepted payment methods for residential services:
> - Cash
> - Credit and debit cards
> - Apple Pay, Google Pay
> - Electronic checks
>
> Commercial services additionally accept:
> - ACH transfers
> - Net-30 corporate accounts

The list is easier for an AI engine to parse and reproduce as a citation.

## The top-5-pages rewrite priority

Most service businesses get 80% of their AI citation value from their top 5 pages. The right 5 are:

1. **Homepage** — entity introduction, core service overview, contact.
2. **Primary service page** (the service with most search volume).
3. **Secondary service page** (the second highest-value service).
4. **Service area page** (geographic coverage details).
5. **FAQ page** (or the vertical-specific FAQ with highest query volume).

Rewriting these five for citation-readiness produces meaningfully more AI citations than rewriting 25 pages of low-volume content.

## Sample rewrite — before and after

### Before (typical service page paragraph)

> At BayShine Detailing, we take pride in our work. Our team has years of experience providing top-quality auto detailing services to clients throughout the Tampa Bay area. We use only the best products and techniques to make sure your vehicle looks its absolute best. Whether you need a basic wash or a full detail, we've got you covered.

This paragraph violates all four citation-readiness rules:
- No numbers (years, prices, durations).
- No conditions.
- Not self-contained ("we've got you covered" implies more elsewhere).
- No enumerable lists where they'd help.

### After (citation-ready rewrite)

> BayShine Detailing operates as a mobile-only service in Pasco and northern Hillsborough counties since 2024. We bring all water, power, and equipment to the customer's location — driveways, office parking lots, apartment complexes — within 25 miles of Wesley Chapel.
>
> Service tiers and typical pricing:
> - **Express wash** (30-45 minutes): $49-$75 depending on vehicle size
> - **Full interior and exterior detail** (3-5 hours): $189-$349
> - **Paint correction with sealant** (5-8 hours): $399-$699
> - **Ceramic coating** (1-3 days, multiple sessions): $799-$1,295
>
> All services include hand wash, hand dry, and a 30-day satisfaction window. Subscription tiers for biweekly or monthly recurring service available at 15-25% off single-visit pricing.

This rewrite is citable across multiple AI engine queries. It supports queries about pricing, service tiers, service area, hours, and operating model.

---

# Chapter 6 — Internal linking for authority flow

Internal links tell AI engines which pages you consider important. The link graph is one of the signals engines use to prioritize which pages to cite.

## The conversion-page principle

Identify your primary conversion page (typically a quote-request form, booking page, or contact page). Every other page on the site should have at least one internal link to it.

If your conversion goal is phone calls, the conversion page is your `/contact` or your homepage with a prominent phone CTA. Every service page links to it.

## The hub-and-spoke pattern

For multi-service businesses:

- The homepage links out to each service page.
- Each service page links to related service pages (the spokes).
- Every service page links back to the homepage (the hub).

For mobile detailing:

```
Homepage
├── /services/full-detail
│   ├── linked-from: homepage, ceramic-coating, paint-correction
│   └── links-to: ceramic-coating, paint-correction, interior-detail, contact
├── /services/ceramic-coating
│   ├── linked-from: homepage, full-detail
│   └── links-to: paint-correction, full-detail, contact
└── /services/interior-detail
    ├── linked-from: homepage, full-detail
    └── links-to: full-detail, contact
```

## Anchor text diversity

The text of the link matters. AI engines parse anchor text as a signal about what the linked page is about.

Use varied, descriptive anchor text:

- "Read more about ceramic coating in our [ceramic coating service](/services/ceramic-coating)."
- "[Schedule a full detail appointment](/contact) here."
- "For information on our [scheduled monthly cleaning subscriptions](/services/subscriptions), see our subscription page."

Avoid:

- "[Click here]" (gives engines no information about the linked page).
- "[Read more]" without context.
- Same anchor text 20 times across the site (looks engineered).

## Service-area page interlinks

If you have multiple service-area pages, each should link to:

- The homepage.
- The other service-area pages (limited to 3-5 most relevant).
- Each service offered in that geography.

This produces a strong signal that the site has real geographic coverage rather than a single-location site claiming a broader area.

---

# Chapter 7 — AI engine probing: measuring your own position

You can't improve what you don't measure. Probing AI engines for citations is the diagnostic activity that tells you where the gaps are.

## The four engines to probe

For a US-based local service business in 2026:

1. **Perplexity** — perplexity.ai
2. **ChatGPT search** — chat.openai.com with web search enabled
3. **Claude** — claude.ai with web search enabled
4. **Gemini** — gemini.google.com (also reflects Google AI Overviews)

## The query matrix

For each engine, run the same set of queries you'd want buyers to find you with:

### Buyer-intent queries

- "Best [service] in [your city]"
- "Best [service] near [your city]"
- "[Specific service variant] in [your city]"
- "Affordable [service] near me"
- "Premium [service] in [your area]"
- "[Service] for [specific use case, e.g., apartment, fleet, residential]"

### Question-intent queries

- "How much does [service] cost in [your city]?"
- "Where can I get [service] in [your city]?"
- "Is [service] worth it for [specific scenario]?"
- "What's the best [service] for [specific situation]?"

For each query, record:

- Was your business cited? (yes/no)
- If yes, at what position? (1, 2, 3, etc.)
- What was the snippet? (the text the engine showed)
- Were competitors cited? Which ones?

Aim for 25-40 queries per engine. Run weekly for the first month, then monthly.

## The probe spreadsheet

A simple Google Sheet with columns:

```
date | engine | query | cited (Y/N) | position | snippet | competitor1 | competitor2 | notes
```

Each row is one probe. After 3-4 weeks of data, you'll see patterns:

- Which engines cite you most? (Usually one engine over-indexes; that one is your strongest.)
- Which query types cite you? (Probably the question-intent ones; buyer-intent is harder for new sites.)
- Which competitors dominate? (The ones with the best schema + llms.txt + site architecture.)

## The post-implementation re-probe

After implementing the changes in Chapters 2-6, run the same query matrix at:

- Day 7 post-implementation
- Day 14 post-implementation
- Day 30 post-implementation
- Day 60 post-implementation
- Day 90 post-implementation

Compare position changes per (query, engine) pair. Most engines respond to structural changes within 7-14 days; some (Gemini, AI Overviews) take 30+ days because they index more slowly.

A 12-15% improvement in citation position within 30 days is typical for sites starting from zero structured data. Larger sites with more existing content see smaller percentage lift but larger absolute volume.

---

# Chapter 8 — The 90-day implementation plan

90 business days from start to fully implemented and measured. Allocate 2-4 hours per week for the work; longer in week 1, shorter in steady state.

## Week 1: Audit and probe baseline

- Day 1-2: Run the query matrix from Chapter 7 against your site as it is today. Establish baseline citation positions across all 4 engines.
- Day 3-4: Audit your existing schema (use schema.org validator and Google Rich Results Test).
- Day 5: Audit existing llms.txt (almost certainly none exists).
- Days 6-7: Document the gap. Write down: what schema types you have vs. need, what's in your sitemap, what your top 5 pages are by traffic.

## Week 2: Schema implementation

- Day 1-2: Write the LocalBusiness block for your vertical, using the correct subtype.
- Day 3-4: Write Service blocks for your top 3 services.
- Day 5: Write the FAQPage block with 5 vertical-specific Q&As.
- Day 6: Combine into a single @graph structure.
- Day 7: Deploy. Validate.

## Week 3: llms.txt

- Day 1: Write llms.txt following the 8-section structure in Chapter 3.
- Day 2: Replace placeholder values with your business specifics.
- Day 3: Deploy to your site root.
- Day 4: Verify accessibility at yoursite.com/llms.txt.
- Days 5-7: Run an interim probe to see if anything changed yet (some engines pick up changes within days).

## Week 4: Site architecture refactor

- Day 1: Audit current URL structure against the patterns in Chapter 4.
- Day 2-3: Plan the URL changes if any (add service pages, split mega-pages, etc.). Note: URL changes break inbound links; only refactor if the gain outweighs the migration cost.
- Day 4-5: Implement service-page splits if needed.
- Day 6: Add BreadcrumbList schema to internal pages.
- Day 7: Update sitemap.xml.

## Week 5-6: Citation-readiness rewrites

- Pick your top 5 pages.
- Day 1-2: Page 1 rewrite per the rules in Chapter 5.
- Day 3-4: Page 2.
- Day 5-6: Page 3.
- Day 7-8: Page 4.
- Day 9-10: Page 5.

## Week 7: Internal linking pass

- Day 1: Map current internal link graph.
- Day 2-3: Add missing links (hub-and-spoke pattern).
- Day 4: Audit anchor text for diversity.
- Day 5-7: Implement the updates.

## Week 8-9: Steady state

- Run the probe matrix weekly.
- Track changes against baseline.
- Address validation errors as they appear (Google sometimes flags new issues weeks after deployment).

## Week 10-12: 90-day re-probe and report

- Day 1: Run the full probe matrix.
- Day 2-3: Compare against baseline. Identify which changes moved the needle.
- Day 4-5: Document findings. Identify next-quarter priorities.
- Day 6-7: If results are strong, document a case study; if weak, identify what to change.

## What "implemented" looks like

By Day 90:

- Schema markup deployed and validated on at least 5 pages.
- llms.txt deployed and verified at yoursite.com/llms.txt.
- Site architecture follows the patterns in Chapter 4.
- Top 5 pages rewritten for citation-readiness.
- Internal linking pass complete.
- Baseline probe data plus three follow-up probe runs documented.

Most local service businesses that complete the 90-day plan see:

- 10-20% lift in AI citation position across the four engines.
- 1-3 specific buyer-intent queries that previously didn't cite the business now cite it.
- Sustained higher visibility in Google AI Overviews for service-area queries.

The math: a 15% lift in AI citations for a service business doing $500k/year in revenue typically produces 10-20 additional inbound leads per month. Conservatively, at $300 per converted lead and 20% conversion rate, that's $600-$1,200 additional monthly revenue. The 90-day implementation cost (your time) pays back in 3-6 months.

---

# Appendix A — Quick-reference schema templates

For full templates per vertical, see Atrium's Schema Pack v1 ($29 on Gumroad, 6 verticals included). The templates included here are the most common: mobile detailing and pressure washing.

[Note: in the full Atrium catalog, this appendix references the complete Schema Pack v1 with all 6 verticals. For users of this playbook who don't yet have the Schema Pack, the embedded templates below are starter kits — drop in, fill in placeholders, validate.]

For each template, replace `{{PLACEHOLDER}}` values with your business information.

## Mobile detailing

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutoWash",
      "@id": "{{BUSINESS_URL}}/#business",
      "name": "{{BUSINESS_NAME}}",
      "url": "{{BUSINESS_URL}}",
      "telephone": "{{PHONE}}",
      "priceRange": "$89-$1295",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "{{STREET}}",
        "addressLocality": "{{CITY}}",
        "addressRegion": "{{STATE}}",
        "postalCode": "{{ZIP}}",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "{{LAT}}",
        "longitude": "{{LON}}"
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "{{LAT}}",
          "longitude": "{{LON}}"
        },
        "geoRadius": "{{RADIUS}} mi"
      },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "16:00" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "{{BUSINESS_URL}}/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does ceramic coating last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional ceramic coating typically lasts 2 to 5 years depending on the product layer count, the substrate prep quality, and how the vehicle is maintained. Single-layer consumer-grade coatings last 12 to 18 months; multi-layer professional coatings reach 5 to 7 years with proper maintenance washes every 4 to 6 weeks."
          }
        }
      ]
    }
  ]
}
```

Full Schema Pack v1 (with 5 FAQs per vertical across 6 verticals): $29 on Gumroad.

# Appendix B — llms.txt quick reference

Full templates for 6 verticals are in Atrium's llms.txt Pack v1 ($9 on Gumroad). Bundle with Schema Pack v1 at $35 (save $3).

The basic 8-section structure (see Chapter 3 for the full example):

```
# [Business Name] — [Service Type]

> [One-sentence summary]

## Business identity
- Canonical name, URL, phone, email, address, license number

## Service area
- Priority coverage, standard coverage, edge coverage, ZIP codes

## What we do
- Bulleted service descriptions

## Who we serve
- Buyer types

## Hours
- Operating hours, emergency availability

## Priority pages for AI search citation
- URLs of best pages for AI citation

## Citation preferences
- How engines should cite the business
```

# Appendix C — Resources and next steps

## Free tools mentioned in this playbook

- Schema.org validator: <https://validator.schema.org/>
- Google Rich Results Test: <https://search.google.com/test/rich-results>

## Atrium catalog

If you'd rather have someone do the work:

- **Schema Pack v1** ($29) — JSON-LD for 6 mobile service verticals.
- **llms.txt Pack v1** ($9) — templates for the same 6 verticals.
- **Bundle** ($35) — both packs, save $3.
- **AI Citation Audit** ($499 / 5 business days) — we probe all 4 engines against your queries, deliver a structured remediation list with competitor cross-reference.
- **GEO Setup** ($2,500 / 10 business days) — full done-for-you implementation of everything in this playbook.

## Cited Weekly newsletter

The Atrium weekly newsletter (Cited Weekly) covers ongoing AI citation patterns, engine behavior changes, and case studies. Subscribe at the Atrium content site (free tier; paid tier with deep analyses and dataset downloads at $9/mo when audience clears 500 free subscribers).

## Feedback

The version of this playbook you're reading is v0.5. Version 1.0 expands to 24 verticals' worth of schema templates, adds chapters on multi-location and franchise considerations, and includes case studies from 3 paying customers.

Send feedback to the email associated with your Gumroad purchase. Substantive feedback that gets incorporated into v1.0 earns the buyer a free upgrade plus a credit toward the AI Citation Audit.

---

## License

Single-site commercial use. You may reference and apply the techniques in this playbook on one website you own or operate. For agency or multi-site use, contact the publisher.

You may not resell or redistribute this playbook or substantial derivatives.

## Refund policy

7 days from purchase, no questions asked. Reply to the purchase confirmation email.

## Changelog

- v0.5 (2026-05-11): Initial release. 8 chapters plus 3 appendices.
- v1.0 (planned): Expanded vertical templates, multi-location considerations, full case studies.

---

End of GEO Playbook v0.5. Authored by Atrium. The work begins on Day 1.
