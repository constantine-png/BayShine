# Atrium content site — deployment notes

## What this is

The Atrium brand hub. Single static HTML file at the root of atrium.{{tld}}. Pulls together all 6 Atrium catalog products (Schema Pack v1.5, llms.txt Pack, Bundle, GEO Playbook v0.5, AI Citation Audit, GEO Setup) into a single landing page. Plus a Cited Weekly newsletter signup form and cross-reference to Forge.

## Why ship this

Until this exists, the Atrium catalog scatters across:

- Gumroad pages (Schema Pack v1.5, llms.txt Pack, Bundle, GEO Playbook)
- Vercel-deployed sales pages (AI Citation Audit, GEO Setup)
- Beehiiv (Cited Weekly newsletter)

A buyer who hears about Atrium via word-of-mouth, podcast mention, or affiliate link has no obvious place to land. The brand hub fixes this: atrium.{{tld}} shows the catalog overview, links to each product's destination, and captures newsletter signups.

## Deployment

```bash
# In the same Vercel project as the GEO Setup and AI Citation Audit sales pages:
cp index.html public/index.html
vercel deploy --prod
```

Or alternatively as a fresh project at the atrium.{{tld}} root.

### Placeholders to replace

Search for these strings before deploy:

- `{{GUMROAD_SCHEMA_PACK_URL}}` — Schema Pack v1.5 Gumroad product URL
- `{{GUMROAD_LLMSTXT_PACK_URL}}` — llms.txt Pack Gumroad product URL
- `{{GUMROAD_BUNDLE_URL}}` — Bundle SKU Gumroad URL
- `{{GUMROAD_PLAYBOOK_URL}}` — GEO Playbook Gumroad URL
- `{{AUDIT_SALES_PAGE_URL}}` — AI Citation Audit sales page URL (likely `/audit` or `/ai-citation-audit`)
- `{{GEO_SETUP_SALES_PAGE_URL}}` — GEO Setup sales page URL (likely `/geo-setup`)
- `{{BEEHIIV_SIGNUP_URL}}` — Beehiiv form action URL for Cited Weekly signup
- `{{ATRIUM_DOMAIN}}` — the actual Atrium domain (appears in footer email + meta description)
- `https://forge.example` — Forge's actual URL (appears twice: agency section + footer)

## SEO setup

Before deploy, add these to the `<head>` of the HTML:

```html
<link rel="canonical" href="https://{{ATRIUM_DOMAIN}}/">
<meta property="og:title" content="Atrium — AI search visibility for local service businesses">
<meta property="og:description" content="Atrium ships info products and productized services...">
<meta property="og:type" content="website">
<meta property="og:url" content="https://{{ATRIUM_DOMAIN}}/">
<meta name="twitter:card" content="summary_large_image">
```

Also add JSON-LD schema for Atrium itself (we eat our own dog food):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Atrium",
  "url": "https://{{ATRIUM_DOMAIN}}/",
  "founder": {
    "@type": "Person",
    "name": "Constantine"
  },
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://forge.example"
  ]
}
</script>
```

Plus llms.txt at root (use the llms.txt Pack template for "SaaS/info product company"; adapt by hand).

## What the page does NOT do

- It does not handle Stripe Checkout directly. Each product's CTA links to the appropriate destination (Gumroad page or sales page).
- It does not have its own SaaS dashboard. Atrium's customer dashboard (if any) lives in the per-product checkout flow on Gumroad.
- It does not have user authentication. The site is public/anonymous; signed-in customer area is at the Gumroad/Stripe portal.
- It does not have a blog. The blog (when it exists) lives at /blog as a separate route. For now, content lives in Cited Weekly newsletter.

## Voice notes

The page is in Atrium's voice:

- No em-dashes anywhere in the visible copy.
- No exclamation marks.
- "We" is the brand voice; Constantine is named in the footer (the constitutional permission for legal-signatory attribution) but not in the body marketing copy.
- Each product has a tier label ("Info product," "Productized service," "Bundle") to set expectations.
- The compare-block section ("Where to start") gives buyers a decision tree without marketing tone.

## Tracking after deploy

- Daily visitors via your analytics tool (Plausible, Fathom, or Vercel Analytics).
- Per-product click-through rate to the destination (Gumroad page click-through, sales page click-through).
- Newsletter signup conversion rate.
- Bounce rate and time-on-page (for content optimization signals).

## What this enables

- A single bookmark for buyers who want to remember Atrium.
- A single URL for affiliates to link to (instead of having to remember 6 separate Gumroad URLs).
- A single landing for cross-references from Forge.
- A single home for SEO content over time (when the blog and case studies expand).

## Future expansions (post-deploy)

When time permits, the page should expand to include:

- A "Case studies" section linking to anonymized customer engagements (with consent).
- A "Verticals served" page with deeper content per vertical.
- A "Pricing" comparison page combining Atrium + Forge product matrix.
- A "FAQ" section synthesizing the SUPPORT/FAQ-master.md highlights.
- An "About" page with Constantine's background and the two-network architecture explanation.

Each expansion can be a separate Vercel route. The current single index.html is the V1 hub.
