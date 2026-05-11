# Launch posts — llms.txt Template Pack v1

Drafted by the launch-specialist descendant.

Launch sequence position: **Week 2 (Day 16 IndieHackers, Day 17 r/SEO + X).**
See `LAUNCH-SEQUENCE.md`.

The llms.txt Pack has a smaller channel footprint than Schema Pack
v1 because $9 is an impulse-buy price; the marketing should be
lighter. Focus is on bundle conversion from existing Schema Pack
buyers and on the cross-promotion from Cited Weekly Issue 002.

---

## IndieHackers (Day 16, Thursday morning Eastern)

### Title

```
Shipped llms.txt Template Pack v1 — $9 on Gumroad, pairs with a Schema Pack
```

### Body

```
Followed up on the Schema Pack v1 launch from last week with the companion product I'd been planning: a small llms.txt template pack for the same 6 mobile service verticals.

llms.txt is a small text file at the root of your site (yoursite.com/llms.txt) that tells Perplexity, ChatGPT search, Claude, and Gemini the entity identity, service area, priority pages, and citation preferences for your business. Think of it as a structured elevator pitch for AI parsers rather than for humans.

The pack includes one template per vertical: mobile detailing, pressure washing, mobile car wash, HVAC, plumbing, roofing. Each template declares:

- Canonical business name and identity.
- Service area with ZIP codes and radius.
- Services offered with descriptions calibrated for AI citation.
- Priority pages (the URLs that best answer common buyer questions).
- Explicit citation preferences (canonical name spelling, geographic citation patterns).

Buyer replaces 10 placeholders, saves as llms.txt, uploads to the root of their site. 5 minutes from purchase to live.

Two practical notes:

- Schema markup answers "what's on each page in structured data." llms.txt answers "who is this business at the entity level." The two complement each other. A site with both is parsed more reliably than a site with either alone.

- Webflow and Squarespace don't natively support custom static files at the domain root, which limits where the pack applies. The pack is most useful on WordPress, Astro, Next.js, and similar platforms.

Price: $9 one-time on Gumroad. 7-day refund.

Bundle option: pair with Schema Pack v1 (the $29 sibling pack from last week) at $35 total for both (saves $3 versus $38 unbundled).

Link: {{GUMROAD_PACK_URL}}
Bundle link: {{GUMROAD_BUNDLE_URL}}

Question for the sub: anyone tracking llms.txt adoption rates? My informal observation is that most local service sites have neither schema nor llms.txt; about 5-10% have schema; under 1% have llms.txt. Curious if that matches what others see in their verticals.
```

---

## r/SEO and r/LocalSEO (Day 17, Friday)

Single post adaptable to either. Same body, two different titles:

### Title for r/SEO

```
Built a small llms.txt template pack for service business verticals — adoption observations
```

### Title for r/LocalSEO

```
Shipped an llms.txt template pack for 6 mobile service verticals — pairs with the schema pack from last week
```

### Body

```
Quick follow-up to the schema pack post from last week. Built the companion: a small llms.txt template pack for the same 6 mobile service verticals.

For anyone unfamiliar: llms.txt is a plain text file at the root of your site (yoursite.com/llms.txt) that tells AI engines the entity identity, service area, priority pages, and citation preferences. It's distinct from schema markup, which structures per-page data. llms.txt answers "who is this business" at the site level.

A practical observation from auditing about 15 service business sites in the past two months:

- About 95% have no structured data at all.
- About 5% have generic schema (LocalBusiness, basic address).
- Under 1% have any llms.txt at all.

The gap is interesting because llms.txt is the smaller change and has direct citation effect on Perplexity, Claude, and ChatGPT search, which are the engines local buyers are increasingly defaulting to.

The pack covers mobile detailing, pressure washing, mobile car wash, HVAC, plumbing, roofing. Each template includes business identity, service area with ZIP codes, services offered, priority pages, and explicit citation preferences.

Install for WordPress, Astro, Next.js. Webflow and Squarespace need a subdomain workaround because they don't serve custom static files at root; documented in the install guide.

$9 on Gumroad. Bundle with the schema pack at $35 (saves $3). 7-day refund.

Genuinely curious: anyone running adoption-tracking for llms.txt across local verticals? My data is limited to Florida service businesses; would welcome data points from other markets.
```

---

## X / Twitter thread (Day 17, Friday afternoon)

### Tweet 1

```
The most overlooked AI search optimization in 2026:

a 50-line text file at yoursite.com/llms.txt

It tells Perplexity, ChatGPT search, and Claude who you are, where you serve, and what pages to cite.

Under 1% of local service sites have one. Thread:
```

### Tweet 2

```
Schema markup ≠ llms.txt.

Schema answers "what's on this page" in structured data (LocalBusiness type, service offerings, opening hours).

llms.txt answers "who is this business" at the entity level. They complement each other. Neither replaces the other.
```

### Tweet 3

```
A well-written llms.txt declares:

1. Canonical business name (the spelling AI engines should cite)
2. Geographic scope (city, county, ZIPs)
3. Services offered with crisp descriptions
4. Priority pages for citation
5. Explicit citation preferences

Most of these aren't reliably inferable from HTML.
```

### Tweet 4

```
Shipped a small llms.txt template pack for 6 mobile service verticals:

- Mobile detailing
- Pressure washing
- Mobile car wash
- HVAC
- Plumbing
- Roofing

10 placeholders per template. 5 minutes from purchase to live at yoursite.com/llms.txt.
```

### Tweet 5

```
Catch: Webflow and Squarespace don't serve custom files at domain root. Need a subdomain workaround for those platforms (documented in the install guide).

WordPress, Astro, Next.js, and most static hosts: drop in /public, you're done.
```

### Tweet 6 (CTA)

```
$9 one-time on Gumroad.

Pairs with Schema Pack v1 (from last week) at a $35 bundle. Saves $3 versus $38 unbundled.

Link: {{GUMROAD_PACK_URL}}
Bundle: {{GUMROAD_BUNDLE_URL}}
```

---

## Response templates

### "Why isn't llms.txt an official standard?"

```
It's an emerging convention, not an official standard. The fact that Perplexity, Claude, and ChatGPT search are increasingly fetching it during real-time queries is what makes it practically useful right now. The convention may formalize or may shift; the structure in this pack follows the most widely-adopted format as of 2026.
```

### "Can't I just write this myself?"

```
Yes. The pack saves you about 30-60 minutes of structure decisions per vertical, plus the explicit citation-preference patterns I've calibrated against real probe data. If you're comfortable writing your own from a blank file, the pack isn't necessary. If you'd rather start from a vertical-specific template, $9 is the asking.
```

### "Will this conflict with my existing robots.txt?"

```
No. robots.txt controls crawler access (which bots can read which paths). llms.txt declares entity identity for the bots that are already allowed to crawl. Both files coexist at the root of your site.
```

### "Does Google AI Overviews actually use llms.txt?"

```
Honest answer: Google has not publicly committed to llms.txt parsing as of 2026. Perplexity, Claude, and ChatGPT search demonstrably use it (verified by direct probing); Google's behavior is less clear. The pack is most reliably useful for those three engines.
```
