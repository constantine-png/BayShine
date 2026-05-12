# Forge Schema Generator — deployment notes

## What this is

The first Forge product. A free web tool that generates validated JSON-LD schema for local service businesses across 9 verticals. Single-file HTML+JavaScript, no backend, no signup required. Optional email gate that captures into Forge Weekly (Substack).

This is Forge's audience-acquisition lever. Per Forge's CHARGE.md, the free Schema Generator drives traffic that converts to Citation Watch ($19/mo subscription) via the embedded upsell modal at the bottom of the output panel.

## Where to deploy

`schema-generator.html` is a single static file. Deploy options:

### Option 1: Vercel (recommended)

```bash
# In a new project directory:
cp schema-generator.html index.html
vercel deploy --prod
```

Point DNS at `forge.{{forge-domain}}/generate` or `generate.{{forge-domain}}`.

### Option 2: Cloudflare Pages

Drag-and-drop deploy via Cloudflare Pages dashboard. Set as the entry point.

### Option 3: GitHub Pages

Push to a `gh-pages` branch in the Forge GitHub repo (once Forge has its own repo at Rung 1).

### Option 4: Cloudflare R2 / S3 static hosting

For the most basic case: serve the HTML file from any static-host bucket.

## Required placeholders to replace before deploy

Search the HTML for these strings and replace before going live:

- `https://forge.example/citation-watch` — replace with the actual Citation Watch subscription URL once that product is wired.
- `https://atrium.example` — replace with the actual Atrium domain in the footer cross-reference link.

## SEO and AI-search positioning

This tool itself should rank for queries like:

- "free JSON-LD generator for local business"
- "schema generator for mobile detailing / HVAC / plumbing / roofing"
- "local business schema markup generator"

Add the following to the page's `<head>` after deployment:

- Open Graph tags for shareability.
- Twitter Card tags.
- Canonical URL.
- A small `<script>` block of LocalBusiness schema for Forge itself (the tool is its own business).

(I don't include these in the v1 file because the placeholders depend on the production domain; add them at deploy time.)

## Email capture integration

The `captureEmail()` function in the HTML is currently a SKELETON (alerts the user). At Rung 2, wire it to Substack's API for Forge Weekly signups, or to a Beehiiv-equivalent if Forge chooses Beehiiv instead of Substack.

Suggested implementation at Rung 2:

```javascript
function captureEmail() {
  const email = document.getElementById('email').value;
  fetch('https://forge.example/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, source: 'schema-generator' })
  }).then(/* show success */);
}
```

The `/api/subscribe` endpoint forwards to Substack's API with the `source` field tracked for attribution.

## Citation Watch upsell modal

The upsell modal at the bottom of the right panel currently links to `https://forge.example/citation-watch`. This URL is the sales page for Citation Watch ($19/mo subscription). Citation Watch itself isn't built yet (it's in Forge's catalog plan but not shipped).

The upsell modal does its work even before Citation Watch ships: it captures intent. Buyers who click "See Citation Watch →" before the product exists either (a) hit a coming-soon page with email capture, or (b) get a redirect to a waitlist signup.

Suggested coming-soon page content (until Citation Watch ships):

```
Citation Watch — Coming Q3 2026

A continuous schema and AI-citation monitoring service for local service businesses.

- Connect your domain
- Weekly probes across Perplexity, ChatGPT search, Claude, Gemini
- Real-time alerts on citation drops
- Schema drift detection
- $19/mo, cancel anytime

We're building it now. Get the launch notification:

[email capture form]
```

## Tracking

After deploy, track:

- Daily / weekly unique visitors.
- % of visitors who click Generate JSON-LD.
- % of visitors who click Copy or Download.
- % of visitors who fill the email gate.
- % of email-gate signups who click through to the Citation Watch upsell.
- % of Citation Watch clicks who eventually subscribe.

These are the conversion-funnel metrics that govern Forge's growth.

Targets (based on similar free-tool products):

- Visitors → Generate click: 60-80%.
- Visitors → Copy/Download: 40-60%.
- Visitors → Email capture: 5-15%.
- Email-capture → Citation Watch click: 20-40%.
- Citation Watch click → subscribe: 1-5% (after Citation Watch ships).

A 1,000-visitor day at the upper end of these ranges produces 80 generations, 50 copies, 100 email captures, 30 Citation Watch clicks, and 1 Citation Watch subscription = $19/mo in MRR.

At 10,000 visitors/month on this tool alone (achievable through SEO + IndieHackers / r/SEO / Reddit / X share for any genuinely useful free tool), Citation Watch could be at 5-15 new subscriptions per month from this single funnel.

## Cross-promotion

The footer of the tool links to Atrium (the patient and faceless rival) as part of the dual-network architecture. This is intentional — Forge and Atrium serve different buyer types; cross-linking lets buyers self-select.

If Atrium is at `atrium.{{tld}}` and Forge is at `forge.{{tld}}`, the footer link maintains the architectural transparency Constantine asked for.

## Voice notes

The page voice is intentionally Forge's voice (per Forge's constitution, not Atrium's):

- Em-dashes used: yes, with intent (the lede paragraph).
- Exclamation marks: avoided here for SEO neutrality (no need for them in a tool interface).
- Marketing voice: present but disciplined (the lede "in 60 seconds" is a real claim — the tool generates immediately).
- Named operator: yes, Constantine named in the footer.
- Aggressive register: the upsell modal is more direct than Atrium would write ("Want this auto-deployed and continuously validated?" is a Forge sentence, not an Atrium one).

This is correct. The tool ships in Forge's voice because it is a Forge product.

## Launch sequence

Once deployed:

- **Day 1**: Show HN — "Show HN: Free schema generator for local service businesses." HN's audience appreciates clean tools.
- **Day 2**: r/SEO and r/LocalSEO mentions.
- **Day 3**: IndieHackers — "Shipped a free schema generator as the audience-acquisition lever for our subscription SaaS."
- **Day 4-7**: X / Twitter promotion plus tracking. Find which channels drive most volume.
- **Week 2+**: SEO and referral traffic compound. Update the tool as feedback comes in.

The tool is designed to compound on the audience side. The Citation Watch upsell is what monetizes the audience over time.

## What's not in this commit

- Citation Watch SaaS itself (Forge's $19/mo subscription). Targeted for next session (Forge's second product).
- Schema Doctor Pro SaaS ($99/mo). Targeted later in Forge's launch sequence.
- The Enterprise GEO Sprint and Program offerings. Higher-touch products; launched after audience exists.
- Forge's own first newsletter issue. Should follow within 7 days of the Schema Generator going live to start the audience-capture loop.

These ship in subsequent sessions per Forge's CHARGE.md priority order.
