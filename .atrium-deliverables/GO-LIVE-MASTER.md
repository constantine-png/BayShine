# GO-LIVE master playbook

The single execution playbook for turning the artifacts in this directory into actual revenue. Reads in 15 minutes; executes over 7-14 calendar days.

If this is your first time looking at the deliverables directory, read this file first. The other files (LAUNCH-SEQUENCE.md, the per-product LISTING.md files, the SUPPORT directory) are the depth references; this is the operational summary.

## What exists right now

Two networks, eight revenue surfaces on disk, ready to ship:

### Atrium (patient / faceless / inbound / one-time products)

| # | Path | Product | Price | Where it sells |
|---|---|---|---|---|
| 01 | `01-demand-probe/` | Demand probe posts | $0 | IndieHackers + r/LocalSEO |
| 02 | `02-schema-pack-v1/` | Schema Pack v1 (6 verticals) | $29 | Gumroad |
| 03 | `03-geo-setup-service/` | GEO Setup productized service | $2,500 | Stripe Checkout via sales page |
| 04 | `04-cited-weekly-001/` | Cited Weekly Issue 001 | Free + future paid | Beehiiv |
| 05 | `05-ai-citation-audit/` | AI Citation Audit | $499 | Stripe Checkout |
| 06 | `06-llms-txt-pack-v1/` | llms.txt Pack v1 (6 verticals) | $9 / Bundle $35 | Gumroad |
| 07 | `07-geo-playbook-v0.5/` | GEO Playbook v0.5 (8 chapters + 3 appendices) | $79 | Gumroad |

### Forge (aggressive / named / outbound-permissive / subscription-flagship)

| # | Path | Product | Price | Where it goes |
|---|---|---|---|---|
| F1 | `FORGE-PRODUCTS/01-schema-generator/` | Schema Generator web tool | Free | Vercel/Cloudflare Pages |
| F2 | `FORGE-PRODUCTS/02-citation-watch/` | Citation Watch (waitlist) | $19/mo standard / $14/mo founding-100 | Vercel + Substack waitlist |
| F3 | `FORGE-PRODUCTS/03-forge-weekly-001/` | Forge Weekly Issue 1 | Free + $5/mo founding / $9/mo std | Substack |
| F4 | `FORGE-PRODUCTS/04-schema-doctor-pro/` | Schema Doctor Pro (waitlist) | $99/mo / $79/mo founding-50 | Vercel + Substack waitlist |

## Day-by-day execution (the 14-day target)

### Day 1 — Setup (90 min total)

**Atrium domain registration (15 min).** Buy `atrium.{{tld}}` or your preferred Atrium domain at Namecheap, Porkbun, or Cloudflare Registrar. Point at Vercel.

**Forge domain registration (15 min).** Buy `forge.{{tld}}`. Different domain or subdomain pattern from Atrium. Point at Vercel.

**Stripe sub-accounts (20 min).** In your existing Stripe entity, create two sub-accounts: one for Atrium, one for Forge. Enable Stripe Tax. Generate API keys; store in a password manager.

**Gumroad seller account (15 min).** Sign up if not already. Verify email. Enable affiliate program at 30% in seller settings.

**Beehiiv account for Cited Weekly (10 min).** Sign up. Create publication "Cited Weekly." Don't publish anything yet.

**Substack account for Forge Weekly (10 min).** Sign up under Constantine's name (named-operator brand per Forge constitution). Create publication "Forge Weekly." Set paid tier to $9/mo standard, $5/mo for first 100 founding members.

**Vercel project (5 min).** Sign up if not already. Create two projects: `atrium-sales` and `forge-products`.

### Day 2 — Deploy sales pages (60 min)

**Atrium GEO Setup sales page.** Take `03-geo-setup-service/sales-page.html`. Replace `{{STRIPE_CHECKOUT_LINK}}` with the Stripe Checkout link you'll create in Day 3. Replace `{{ATRIUM_DOMAIN}}` with your Atrium domain. Drop in `atrium-sales` Vercel project as `geo-setup.html` or under `/geo-setup`. Deploy.

**Atrium AI Citation Audit sales page.** Take `05-ai-citation-audit/sales-page.html`. Same placeholder replacement. Deploy as `/audit`.

**Forge Schema Generator.** Take `FORGE-PRODUCTS/01-schema-generator/schema-generator.html`. Replace `https://forge.example/citation-watch` placeholder with your real Forge domain Citation Watch URL. Replace `https://atrium.example` with your Atrium domain. Deploy to Forge Vercel project as `/generate` or root.

**Forge Citation Watch waitlist.** Take `FORGE-PRODUCTS/02-citation-watch/sales-page.html`. Same placeholder replacement. Deploy as `/citation-watch`.

**Forge Schema Doctor Pro waitlist.** Same pattern. Deploy as `/schema-doctor-pro`.

Each deploy is `vercel deploy --prod` from the corresponding directory. Vercel handles HTTPS automatically.

### Day 3 — Stripe Checkout configuration (45 min)

For each productized service (GEO Setup at $2,500 / AI Citation Audit at $499):

1. Stripe dashboard → Products → Add product. Name, description, price.
2. Enable Stripe Tax.
3. Create Checkout link. Set success URL to a thank-you page that triggers the intake-form email. Set cancel URL to the sales page itself.
4. Allow promotion codes: OFF.
5. Test mode: do a $0.50 test transaction to verify webhook fires. Refund immediately.
6. Live mode: copy the Checkout link.
7. Update the sales page HTML with the live Checkout link in place of `{{STRIPE_CHECKOUT_LINK}}`. Redeploy.

### Day 4 — Upload Gumroad info products (60 min)

For each Atrium info product (Schema Pack v1 / llms.txt Pack v1 / Bundle / GEO Playbook v0.5):

1. Zip the product directory contents (excluding LISTING.md and WELCOME-EMAIL.md):
   ```
   cd 02-schema-pack-v1 && zip -r ../schema-pack-v1.zip README.md INSTALL.md schemas/
   ```
2. Gumroad → Add product → Upload zip.
3. Set name, price, description per the LISTING.md.
4. Set custom URL slug.
5. Add cover image (placeholder OK; you can swap later).
6. Configure welcome email body from WELCOME-EMAIL.md.
7. Publish.
8. Test purchase the product to verify the welcome email + download flow.

Bundle SKU created last, referencing the Schema Pack + llms.txt Pack at $35 total.

### Day 5 — Beehiiv and Substack queue (45 min)

**Cited Weekly (Atrium, Beehiiv).** Compose Issue 001 from `04-cited-weekly-001/issue-draft.md`. Set send date Tuesday 09:00 Eastern of next week. Free tier sends to entire list; paid tier dark (not enough subscribers yet per Atrium's deferral rule).

**Forge Weekly (Forge, Substack).** Compose Issue 001 from `FORGE-PRODUCTS/03-forge-weekly-001/issue-draft.md`. Set send date Thursday 09:00 Eastern (different from Cited Weekly's Tuesday to avoid same-day cannibalization). Free tier sends; paid tier active from issue 1 with founding-member rate visible at checkout.

### Day 6 — Demand probe posts (30 min)

**IndieHackers post.** From `01-demand-probe/indiehackers-post.md`. Post to "Ideas and Validation" section. Best time: Tuesday 09:00 Eastern. Today is Day 6, so if today is Tuesday, post now. Otherwise wait until next Tuesday.

**r/LocalSEO post.** From `01-demand-probe/reddit-localseo-post.md`. Post 24 hours after the IndieHackers post (stagger so it doesn't look like spam-posting).

### Day 7-12 — Monitor and respond

- **Twice daily:** check IndieHackers comments, Reddit comments, Gumroad sales, Stripe events, Substack signups.
- **Use the SUPPORT directory** (`FAQ-master.md`, `RESPONSE-TEMPLATES.md`, `ESCALATION-RULES.md`) to handle incoming questions. The 4-tag escalation system tells you which questions need your personal signature.
- **Respond within 24 hours** for routine; within 4 hours for refunds; within 2 hours for angry/litigious.

### Day 13 — First launch from LAUNCH-SEQUENCE.md

Per `LAUNCH-SEQUENCE.md`, Day 7 in the master sequence is the first product launch after the demand probe lands. That's Day 13 in this calendar (Day 7 = demand probe + 6).

**Schema Pack v1 IndieHackers launch post.** From `02-schema-pack-v1/LAUNCH-POSTS.md`. Adapt the price (full $29 or beta-tier $14) per Day-6 demand-probe signal evaluation.

### Day 14 — Issue 1 publishes

Cited Weekly Issue 1 (Atrium) goes out Tuesday morning. Forge Weekly Issue 1 (Forge) goes out Thursday morning. The launches and the newsletter ride together to start the audience-capture loop.

## Beyond Day 14 — sustained operations

The Operators (operator-info-products, operator-productized-services, operator-newsletter for Atrium; operator-forge-products for Forge) take over the weekly cadence per their respective definitions:

- **Monday:** Atrium Operators review last week.
- **Tuesday:** Cited Weekly publishes.
- **Wednesday:** Forge Operator reviews + Forge Weekly drafted.
- **Thursday:** Forge Weekly publishes + Atrium Launch Specialist runs next scheduled launch from LAUNCH-SEQUENCE.md.
- **Friday:** Support backlog cleared. Constantine reviews escalations.
- **Monthly:** Operator summaries land per `library/templates/operator-monthly-summary.md`.

## Total time budget

| Day | Activity | Time |
|---|---|---|
| 1 | Setup accounts | 90 min |
| 2 | Deploy sales pages | 60 min |
| 3 | Stripe Checkout | 45 min |
| 4 | Gumroad uploads | 60 min |
| 5 | Newsletters queued | 45 min |
| 6 | Demand probe posts | 30 min |
| 7-12 | Monitor + respond | 30-60 min/day |
| 13 | First launch | 30 min |
| 14 | Issues publish | 0 min (automated send) |
| **Total active time** | | **~8-12 hours** |

After Day 14, sustained operations take 4-8 hours/week with most of the work in customer support, Cited Weekly + Forge Weekly drafting (2-3 hrs/week combined), and launch responses on launch days.

## What's NOT in this checklist

These items require subsequent work outside the Day 1-14 window:

- **Citation Watch product build** (Forge Rung 2). Waitlist captures intent; product ships after Stripe Subscriptions wired and customer dashboard built. Target: Q3 2026 or earlier under timeline compression.
- **Schema Doctor Pro product build.** Same as Citation Watch.
- **Enterprise GEO Sprint and Program for Forge.** Sales motion required; first prospect identification at Rung 2-3.
- **GEO Playbook v1.0 expansion** (Atrium, 24 verticals). Ships when v0.5 has buyer waitlist at 100.
- **Schema Pack v2 expansion** (Atrium, 24 verticals at $49). Same trigger.
- **Affiliate Recruiter outreach.** Rung 2-3 for Atrium.
- **Paid acquisition.** Rung 2 for Forge.

Each is documented in either the Atrium PLAN.md or Forge CHARGE.md.

## What to do if something breaks

| Symptom | Action |
|---|---|
| A sales page won't deploy | Check the placeholder replacements; verify HTML is valid; redeploy |
| Stripe Checkout link rejects | Verify product is in live mode (not test mode); verify Stripe Tax setup |
| Gumroad upload fails | File size limit is 16 GB; product slug must be unique |
| Beehiiv send fails | Verify domain authentication (DNS records); rendering preview before send |
| Customer asks something not in FAQ-master | Add the question to FAQ-master so future customers get the answer; respond per RESPONSE-TEMPLATES patterns |
| Refund request | Inside 7 days: auto-approve. Outside: per ESCALATION-RULES (Constantine sign) |
| Angry buyer | Per ESCALATION-RULES, escalate to Constantine within 2 hours; do not respond in-thread without drafting first |

## Coordination notes for two-network operation

Atrium and Forge share you (Constantine) as the operator. The coordination doc at `Atrium/spine/coordination.md` (and mirror in Forge) covers the operational specifics. The two highest-friction items:

**Voice consistency.** Atrium artifacts must stay in Atrium voice (terse, faceless, no em-dashes). Forge artifacts must stay in Forge voice (bolder, em-dashes welcome, you named publicly). The voice gate utility (`Atrium/archetypes/shared/resend.ts`) catches em-dash violations in Atrium customer-facing copy automatically once wired; until then, read each customer-facing post before posting.

**Time allocation.** Coordinate weekly cadence: Atrium gets Monday focus, Forge gets Wednesday focus, both newsletters publish on different days (Tuesday and Thursday). Quarterly review covers both networks jointly in one session.

## Where each artifact lives in the long term

After PC migration (the bootstrap tarballs in `.atrium-deliverables/atrium.tar.gz` and `FORGE-BOOTSTRAP/forge-v3.tar.gz` get extracted to your local machine), the canonical homes are:

- `Atrium/library/artifacts/info-products/schema-pack-v1/` etc.
- `Atrium/library/artifacts/services/geo-setup/` etc.
- `Forge/library/artifacts/web-tools/schema-generator/` etc.
- `Forge/library/artifacts/subscription-products/citation-watch/` etc.

The `.atrium-deliverables/` directory in BayShine is the courier; after migration, it can be removed in a cleanup commit.

## Signature

This master playbook authored 2026-05-11 by Atrium's founding agent. Updates to this file go through a journal entry (Atrium Journal under `founding` lineage) so the master stays in sync with reality.

The work is staged. The execution is yours.
