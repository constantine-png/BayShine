# Forge content site — deployment notes

## What this is

The Forge brand hub. Single static HTML at the root of forge.{{tld}}. Shows the full Forge catalog (Schema Generator, Citation Watch, Schema Doctor Pro, Enterprise GEO Sprint, Enterprise GEO Program, Forge Weekly) plus the cross-network stack table that includes Atrium's complementary products.

## Forge's branding is intentionally different from Atrium's

- **Color:** Dark background (`--forge-ink: #0A0A0B`) with orange accent (`--forge-orange: #FF5630`). Compare to Atrium's light background with gold accent.
- **Typography:** Bolder type weights, larger headlines, em-dashes used (in the lede).
- **Layout:** Same grid-based catalog but with stronger contrast and color-coded tier labels.
- **Voice:** First-person possessive ("our patient sibling"), named operator visible, marketing-permissive within truth ("subscription-first AI search infrastructure" is a real positioning claim).

The visual difference between Atrium's site and Forge's site is the constitutional design choice made physical. A buyer comparing the two sites should see two distinct brands with two distinct value propositions, not one brand with two skins.

## Deployment

Same Vercel project as the other Forge sales pages (Schema Generator at `/generate`, Citation Watch waitlist at `/citation-watch`, Schema Doctor Pro waitlist at `/schema-doctor-pro`).

```bash
cp index.html public/index.html
vercel deploy --prod
```

URL becomes `https://forge.{{tld}}/`.

### Placeholders to replace

- `{{SUBSTACK_SIGNUP_URL}}` — Forge Weekly Substack form action URL.
- `{{FORGE_DOMAIN}}` — Forge's actual domain (appears in footer email).
- `https://atrium.example` — Atrium's actual URL (appears 3 times: stack table caption, pitch block, footer).

## SEO setup

Add to `<head>` before deploy:

```html
<link rel="canonical" href="https://{{FORGE_DOMAIN}}/">
<meta property="og:title" content="Forge — Subscription-first AI search infrastructure for operators">
<meta property="og:description" content="...">
<meta property="og:type" content="website">
<meta property="og:url" content="https://{{FORGE_DOMAIN}}/">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@{{forge-handle}}">
<meta name="twitter:creator" content="@{{constantine-handle}}">
```

Plus Organization schema (Forge eats its own dog food, same as Atrium does):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Forge",
  "url": "https://{{FORGE_DOMAIN}}/",
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
    "https://atrium.example",
    "https://linkedin.com/in/{{constantine-handle}}",
    "https://twitter.com/{{constantine-handle}}"
  ]
}
</script>
```

Plus llms.txt at root with Forge's positioning declared (different from Atrium's llms.txt content because the brand differs).

## Cross-references between sites

Atrium's site links to Forge in 2 places (agency section + footer). Forge's site links to Atrium in 3 places (pitch block, stack table caption, footer). The cross-linking is intentional and matches the coordination doc's framing: buyers self-select; the two networks acknowledge each other rather than pretending the other doesn't exist.

The cross-linking ALSO creates SEO value (each site is a backlink to the other) without being algorithmically gameable (the links are editorial, not template-based farm links).

## What this page enables

- A single bookmark for Forge buyers (separate from Atrium).
- A single URL for cold-outreach prospect references ("see forge.{{tld}} for our catalog").
- A single landing for podcast/conference mentions of Forge specifically.
- The stack table is a sales asset that Constantine can reference in LinkedIn posts or sales conversations ("here's how the two networks cover the full stack").

## Future expansions

- A `/case-studies` page when the first enterprise engagement is complete and consented to publication.
- A `/blog` route distinct from Forge Weekly for evergreen technical content.
- A `/api` page if Forge ever exposes a public API (likely Schema Doctor Pro at scale).
- A `/integrations` page covering CMS plugins, npm packages, and Zapier integrations as Schema Doctor Pro ships them.

Each is a separate route; the V1 hub stays simple.

## Voice gate

The page is in Forge's voice:

- Em-dashes used in the lede.
- First-person presence ("our patient sibling," "we bet").
- Constantine named in the footer.
- Marketing-permissive claims ("subscription-first AI search infrastructure" is a positioning claim backed by the product catalog).
- The pitch block argues for subscription compounding using real math from the product specs (the $1,400 + $1,300 MRR projection from 100 Citation Watch + 20 bundle upgrades is documented in Forge Weekly Issue 002 and the Schema Doctor Pro LISTING).

No invented metrics. No founder-cult language. No "we're the only..." hyperbole. Just direct positioning of the catalog within the two-network architecture.

## Atrium-Forge dynamic on the page

The stack table is the most operationally important element. It shows the buyer's path:

- **Buyer wants free first:** Schema Generator (Forge).
- **Buyer wants templates:** Schema Pack or llms.txt (Atrium).
- **Buyer wants methodology:** GEO Playbook (Atrium).
- **Buyer wants diagnostic:** AI Citation Audit (Atrium).
- **Buyer wants one-time implementation:** GEO Setup (Atrium).
- **Buyer wants continuous monitoring:** Citation Watch (Forge).
- **Buyer wants schema-as-code:** Schema Doctor Pro (Forge).
- **Buyer is mid-market:** Enterprise GEO Sprint (Forge).
- **Buyer is multi-location enterprise:** Enterprise GEO Program (Forge).

Forge's site emphasizes the recurring + enterprise rows; Atrium's site emphasizes the one-time + DIY rows. Both networks acknowledge the other's strength rather than competing for the same buyer profile.
