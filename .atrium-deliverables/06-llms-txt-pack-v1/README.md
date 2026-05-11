# llms.txt Template Pack v1 — Mobile Service Businesses

Six vertical-specific llms.txt templates designed to make Perplexity,
ChatGPT search, Claude, and Gemini cite your business when buyers ask
for recommendations in your area.

llms.txt is a small text file at the root of your website
(`https://yoursite.com/llms.txt`) that tells AI engines the entity
identity, key services, geographic scope, priority pages, and
citation preferences for your business. Think of it as a structured
elevator pitch written for AI parsers rather than for humans.

## Verticals included

- `templates/mobile-detailing-llms.txt`
- `templates/pressure-washing-llms.txt`
- `templates/mobile-car-wash-llms.txt`
- `templates/hvac-llms.txt`
- `templates/plumbing-llms.txt`
- `templates/roofing-llms.txt`

## What's in the box

| File | Purpose |
|---|---|
| `README.md` | This file. |
| `INSTALL.md` | How to deploy llms.txt for WordPress, Astro, Next.js, Webflow, Squarespace. |
| `templates/<vertical>-llms.txt` | One llms.txt template per vertical with `{{PLACEHOLDER}}` values to fill in. |

## How to use

1. Open the template for your vertical in `templates/`.
2. Replace every `{{PLACEHOLDER}}` value with your business information. Placeholders are listed at the top of each file.
3. Save the file as `llms.txt` (not `<vertical>-llms.txt`; rename on save).
4. Upload to the root of your website at `https://yoursite.com/llms.txt`. Same location as `robots.txt`.
5. Verify accessibility by visiting `https://yoursite.com/llms.txt` in a browser. The file should display as plain text.

## Why this matters

AI engines are increasingly fetching llms.txt during search-time
queries to confirm entity identity and find the right pages to cite.
A site with a well-formed llms.txt is more likely to be cited
correctly (your business name spelled right, the right geographic
scope, the right service descriptions) than a site relying only on
HTML scraping.

A site with NO llms.txt is parsed entirely from HTML, which is
slower and less precise. AI engines that prioritize llms.txt fall
back to HTML scraping in its absence, but the precision drops.

## What you get from a real llms.txt

Three things change when llms.txt is in place:

1. **Entity identity is unambiguous.** "BayShine" vs. "Bay Shine" vs. "bayshine" — your llms.txt declares the canonical form, and AI engines cite you accordingly. Without llms.txt, citations are based on what the engine sees most often in HTML, which can be inconsistent.

2. **Service-area scope is precise.** Your llms.txt declares the cities, counties, and ZIP codes you serve. AI engines match user queries like "best mobile detailer in Tampa" to your service area without inferring it from your address.

3. **Priority pages are surfaced.** Your llms.txt lists the URLs of the pages that best answer common buyer questions. AI engines cite from those pages preferentially over generic homepage content.

## License

Single-site commercial use. One website you own or operate. Multi-site agency license available on request.

## Pairs well with

**Schema Pack v1 ($29):** JSON-LD blocks for the same 6 verticals.
The two together form the complete on-page AI-search foundation:
schema for structured data, llms.txt for entity identity and citation
preferences.

**Bundle: Schema Pack + llms.txt Pack = $35** (save $3 versus
buying separately). See the seller listing for the bundle SKU.

## Support

Reply to the purchase confirmation email for support. Typical
response time 24 business hours.

## Changelog

- v1.0 (2026-05-11): initial release. 6 mobile service verticals.
