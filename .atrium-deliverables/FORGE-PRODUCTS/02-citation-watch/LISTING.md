# Citation Watch — listing notes

## Deployment

Same pattern as Forge's Schema Generator. `sales-page.html` is a single static file. Deploy options:

### Recommended: Vercel at forge.{{tld}}/citation-watch

```bash
# In the same Forge Vercel project as the Schema Generator:
cp sales-page.html public/citation-watch/index.html
vercel deploy --prod
```

URL becomes `https://forge.{{tld}}/citation-watch`. This is the destination the Schema Generator's upsell modal already links to (after the `https://forge.example/citation-watch` placeholder is replaced).

### Required placeholders to replace before deploy

Search for these strings in `sales-page.html`:

- `https://atrium.example` — replace with the actual Atrium domain (appears 3 times: footer, comparison table, "Atrium" link in sibling network reference).
- `https://forge.example/generate` — replace with the actual Schema Generator URL.

## Status when deployed

The page is currently a **waitlist signup page**, not a checkout page. The waitlist mechanic is the right approach for Rung 0-1 because:

1. The actual subscription billing infrastructure isn't wired (Forge Rung 2 unlock).
2. Building the audience BEFORE the product launches is the right cadence — waitlists with founding-member pricing convert dramatically better than cold launches.
3. The waitlist creates urgency around the 100-founding-member cap without invented scarcity. The cap is real.

When the subscription infrastructure is wired (Rung 2), the waitlist signups receive the launch notification email with a checkout link priced at $14/mo founding-member rate.

## Email capture wiring

The `handleSignup()` function is currently a SKELETON. At Forge Rung 2:

```javascript
function handleSignup(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  fetch('https://forge.example/api/citation-watch-waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, source: 'sales-page' })
  }).then(response => response.json())
    .then(data => {
      document.getElementById('confirmation').style.display = 'block';
      // Optional: show "47 of 100 founding-member slots remaining" if API returns count
    });
}
```

The `/api/citation-watch-waitlist` endpoint:

1. Stores the email in a Citation Watch waitlist (separate from Forge Weekly general list, but cross-subscribable).
2. Adds the email to Forge Weekly's general list if `source: sales-page` and consent is implied via signup.
3. Returns the current waitlist count so the page can display "X of 100 founding-member slots remaining."
4. Triggers a welcome email confirming waitlist position and explaining founding-member pricing.

## Citation Watch product spec (for the eventual build)

This is what gets built at Forge Rung 2. Documented here so the spec is preserved between sessions.

### Core capabilities

1. **Domain connection.** Customer provides their domain + verification (DNS TXT record or HTML meta tag). One domain per subscription tier.
2. **Query matrix configuration.** Customer specifies 5-10 priority queries; system auto-generates 15-20 supplementary queries from vertical and geo (using the same patterns as the AI Citation Audit pipeline).
3. **Weekly probe job.** Runs Sunday night UTC. Probes the 25-40 queries against Perplexity, ChatGPT search, Claude, Gemini. Stores results in the customer-specific database.
4. **Dashboard.** Single-page customer dashboard showing: current position per (query, engine), week-over-week trend, top 5 movers (rising and falling), competitor comparison (if competitors are configured).
5. **Drop alerts.** Triggered when position falls >2 positions on any tracked query, or when a competitor newly appears in top 3 for a query the customer doesn't appear in.
6. **Schema and llms.txt drift detection.** Weekly snapshot, diff against prior. Alert on changes.
7. **Monthly remediation digest.** First Monday email summarizing the month + top fixes.

### Tech stack (when built)

- Frontend: Next.js (already in Forge's planned infrastructure).
- Backend: Vercel serverless functions + Neon Postgres.
- AI engine probing: shared `archetypes/shared/probe.ts` interface from Atrium, dual-voice calibrated for Forge engagements.
- Email delivery: Resend (shared with Atrium under separate sub-account).
- Subscription billing: Stripe Subscriptions, $19/mo standard, $14/mo for first 100 founding members.
- Authentication: magic link (email-only, no passwords).

### Cost basis

- Probe cost (Claude + GPT + Perplexity + Gemini at ~$0.30 per query): ~$10/mo per customer at 25 queries/week × 4 engines × 4 weeks = 400 probes/mo × $0.025 avg = $10/mo.
- Database + email + Vercel infrastructure: ~$2/mo per customer at scale.
- Margin at $19/mo: $7/mo per customer. At $14/mo founding-member rate: $2/mo per customer.

Founding-member pricing is the loss-leader: $2/mo margin is tight but the founding members are the case studies and the word-of-mouth engine. Standard-tier customers (post-founding-100) carry the margin.

### Customer success metrics

- Monthly churn target: <8% (industry standard for SMB SaaS).
- Net revenue retention target: 105%+ (some customers add competitor slots or upgrade to Schema Doctor Pro).
- NPS target: 50+ at 3 months.

## Launch sequence

When Citation Watch is built (target Q3 2026 or earlier under timeline compression):

1. **Week -2 (before launch):** Email the entire waitlist with "Launch in 2 weeks. Founding-member pricing locks in for first 100." Capture commitments.
2. **Week -1:** Forge Weekly issue dedicated to the launch story. Cross-promote.
3. **Launch day:** Public sales page replaces the waitlist page (same URL, different content). IndieHackers launch post. r/SEO + r/LocalSEO. Show HN.
4. **Week +1:** Track conversions, refunds, support load. First Operator monthly summary at Day 30.

## Cross-network coordination notes

Citation Watch's sales page references Atrium products in the comparison table. This is intentional per the coordination doc — Atrium and Forge cover complementary parts of the stack, and cross-linking helps buyers self-select.

The comparison table shows Atrium products as the one-time pre-Citation-Watch layer and Citation Watch as the recurring layer that completes the stack. Atrium's mirror sales pages may eventually link the other direction (a buyer of GEO Setup at $2,500 has natural reason to subscribe to Citation Watch for ongoing monitoring).

## Tracking targets (waitlist phase)

- Schema Generator → Citation Watch click-through: 20-40% per the Schema Generator's LISTING tracking notes.
- Citation Watch page → waitlist signup: 15-25% (high because the founding-member pricing creates real urgency).
- Net: every 100 Schema Generator visitors → 4-10 Citation Watch waitlist signups.

Under timeline compression and assuming 1,000 Schema Generator visitors/month, the waitlist could hit 100 founding-member cap in 2-3 months. That's the trigger for accelerating the actual product build.
