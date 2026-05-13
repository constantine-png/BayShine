# PC export guide — full project rebuild

You said: "want to export to my pc to work on this more holistically."

This guide is the single document to read on your PC before doing anything. It covers (1) what exists across three repositories, (2) the exact commands to rebuild Atrium and Forge as separate GitHub repos on your machine, (3) the holistic reading order that makes the entire architecture legible, and (4) what to do once everything is in place.

## What exists across three repositories

All of this work lives in three repos. Two are local-only (Atrium, Forge) and one is on GitHub (BayShine). The local repos travel through BayShine via the courier pattern (tarballs in `.atrium-bootstrap/` and `.atrium-deliverables/FORGE-BOOTSTRAP/`).

### BayShine — already on GitHub

- URL: `github.com/constantine-png/BayShine`.
- Branch with everything: `claude/ai-business-sustainability-V1V2M`.
- Contents: the original BayShine codebase plus `.atrium-deliverables/` (the courier directory) plus `.atrium-bootstrap/` (the original Atrium founding tarball).
- This is the only repo you can directly clone today.

### Atrium — local-only, 18 commits

- Latest commit: `c542152` (Journal 020: Honest audit of operator coverage, human-in-loop, ROI).
- Content: 20 journal entries, 23 descendant agents, 8 catalog products plus brand hub, full operational infrastructure (constitution, identity, harness ladder, harness state tracker, three audit documents, money levers playbook, Pattern Rollup, Auditor criteria, coordination with Forge, working memory files, etc.).
- Tarball: `.atrium-bootstrap/atrium-current.tar.gz` (781 KB; SHA-256 in `.atrium-bootstrap/atrium-current.tar.gz.sha256`).
- The older `atrium.tar.gz` in the same directory is the FOUNDING-ONLY snapshot (3 commits). Use `atrium-current.tar.gz` instead.

### Forge — local-only, 8 commits

- Latest commit: `6d1bcc1` (Journal 007: enterprise-engagement-builder).
- Content: 7 journal entries, 6 descendant agents, full spine (constitution, CHARGE, harness ladder, inheritance documentation, coordination doc, auditor criteria, harness state).
- Tarball: `.atrium-deliverables/FORGE-BOOTSTRAP/forge-current.tar.gz` (126 KB; SHA-256 in adjacent file).
- Versioned predecessors (`forge.tar.gz` through `forge-v8.tar.gz`) document progressive states; only `forge-current.tar.gz` matters for the rebuild.

## Step-by-step rebuild on your PC

### 1. Clone BayShine and switch to the branch with everything

```bash
mkdir -p ~/code && cd ~/code
git clone https://github.com/constantine-png/BayShine.git
cd BayShine
git checkout claude/ai-business-sustainability-V1V2M
```

You now have BayShine on your machine, including both bootstrap tarballs.

### 2. Verify and extract Atrium

```bash
cd .atrium-bootstrap
sha256sum -c atrium-current.tar.gz.sha256
# Expected: atrium-current.tar.gz: OK

cd ../..   # back to ~/code
tar -xzf BayShine/.atrium-bootstrap/atrium-current.tar.gz
# Creates ~/code/Atrium/ with full git history (18 commits)

cd Atrium
git log --oneline | head -5
# Expected first line: c542152 Journal 020: Honest audit of operator coverage, human-in-loop, ROI
```

If the SHA-256 check fails or the top commit is not `c542152`, the tarball didn't carry cleanly — re-clone BayShine and try again.

### 3. Verify and extract Forge

```bash
cd ~/code   # outside Atrium
tar -xzf BayShine/.atrium-deliverables/FORGE-BOOTSTRAP/forge-current.tar.gz
# Creates ~/code/Forge/

cd Forge
git log --oneline | head -3
# Expected first line: 6d1bcc1 Journal 007: enterprise-engagement-builder authored
```

You now have all three projects as siblings: `~/code/Atrium/`, `~/code/Forge/`, `~/code/BayShine/`.

### 4. Create GitHub repos for Atrium and Forge

Open https://github.com/new in your browser. Create two empty private repositories:

- `constantine-png/Atrium` — empty, no README, no .gitignore (you'll push the existing repo).
- `constantine-png/Forge` — same.

### 5. Push each to its upstream

```bash
cd ~/code/Atrium
git remote add origin https://github.com/constantine-png/Atrium.git
git branch -M main
git push -u origin main

cd ~/code/Forge
git remote add origin https://github.com/constantine-png/Forge.git
git branch -M main
git push -u origin main
```

Both repos are now on GitHub with their full local histories.

### 6. Clean up the BayShine courier directories

After successful rebuild, remove the bootstrap and deliverables directories from BayShine so the courier pattern is decommissioned:

```bash
cd ~/code/BayShine
git rm -r .atrium-bootstrap .atrium-deliverables
git commit -m "Remove courier directories after successful export to Atrium and Forge repos"
git push
```

The deliverables themselves (the catalog products, the operational kits, the audit documents) now live in Atrium and Forge respectively. Specifically, the entire `.atrium-deliverables/` tree should be reorganized into:

- `Atrium/library/artifacts/info-products/schema-pack-v1/` etc. (all Atrium catalog products)
- `Atrium/library/artifacts/services/geo-setup/` etc.
- `Atrium/library/playbooks/*.md` (already authored)
- `Forge/library/artifacts/web-tools/schema-generator/` (Schema Generator HTML)
- `Forge/library/artifacts/subscription-products/citation-watch/` (Citation Watch waitlist)
- `Forge/library/artifacts/subscription-products/schema-doctor-pro/`
- `Forge/library/artifacts/newsletter/forge-weekly/`
- `Forge/library/artifacts/enterprise-engagements/sprint/` and `program/`

This migration can be a one-shot reorganization commit on PC. The current courier directory layout in BayShine doesn't need to be preserved post-migration.

## Holistic reading order

You said "work on this more holistically." Here's the order to read the architecture so it makes sense as a unified system.

### First — read the spine of both networks

These are the constitutional and structural documents. They are the basis of everything else.

1. **`Atrium/spine/constitution.md`** — Atrium's identity, values, voice, decision heuristics, refusal patterns. ~250 lines.
2. **`Atrium/spine/identity.md`** — the honest self-portrait. The defining characteristics from which Forge's inversion is derived.
3. **`Forge/spine/constitution.md`** — Forge's constitution: same five constitutional floors as Atrium, ten dimensions inverted.
4. **`Forge/spine/inheritance.md`** — how Forge derives from Atrium structurally while inverting in content.
5. **`Atrium/spine/coordination.md`** (mirror at `Forge/spine/coordination.md`) — the operational coordination layer between networks.
6. **`Atrium/spine/harness.md`** and **`Forge/spine/harness.md`** — the rung-by-rung autonomy ladder.

Estimated read time: 60-90 minutes total.

### Second — read the honest audit documents (Journal 020)

These three documents directly answer the questions you asked at the end of the session and bound the architecture's claims with measurable thresholds.

7. **`Atrium/spine/operator-coverage-audit.md`** — which operators exist, which are deferred, which are gaps. Honest 22% coverage at Rung 0 with trajectory to 80% by Rung 4.
8. **`Atrium/spine/human-in-the-loop.md`** — the 17 touchpoints at Rung 0 reducing to 4-5 at Rung 7+. Three floors (legal, constitutional, trust) that prevent full removal. The honest "no, you cannot be cut out entirely."
9. **`Atrium/spine/roi-evaluation.md`** — comparison against 8 alternative paths Journal 005 didn't consider. Three pivot triggers pre-armed at Days 30, 90, 180.

Estimated read time: 45-60 minutes total.

### Third — read the planning documents

10. **`Atrium/spine/PLAN.md`** — the original founding plan with the unlock ladder, archetype catalog, and full execution sequence.
11. **`Forge/spine/CHARGE.md`** — Forge's parallel plan with catalog, distribution, brand identity, descendants, harness ladder, coordination.

Estimated read time: 30-45 minutes total.

### Fourth — read the operational documents

12. **`BayShine/.atrium-deliverables/GO-LIVE-MASTER.md`** (after migration: `Atrium/library/playbooks/go-live-master.md` or equivalent) — the 14-day execution playbook synthesizing everything.
13. **`BayShine/.atrium-deliverables/FIRST-30-DAY-METRICS.md`** — weekly checkpoint metrics and failure thresholds.
14. **`Atrium/library/playbooks/money-levers.md`** — the seven direct revenue levers plus three combinations.

Estimated read time: 30-45 minutes total.

### Fifth — read the most recent journal entries

15. **`Atrium/spine/journal/2026-05-11-005-evidence-audit-and-priority-correction.md`** — the priority correction that demoted Audit-Tool Network and promoted Information Products and Productized Services.
16. **`Atrium/spine/journal/2026-05-11-010-forge-sibling-network.md`** — the founding of Forge as the sibling counterpart.
17. **`Atrium/spine/journal/2026-05-11-019-pacing-and-state-of-the-architecture.md`** — the pause-for-judgment journal that came before the audit.
18. **`Atrium/spine/journal/2026-05-11-020-honest-audit-operator-human-roi.md`** — the audit decision.

Plus all 20 Atrium journal entries and 7 Forge journal entries in date order if you want full chronology.

### Sixth — open the catalog and operational kits

19. **`Atrium/library/artifacts/info-products/`** (after migration) — the 4 Atrium info products (Schema Pack v1, Schema Pack v1.5, llms.txt Pack v1, Bundle, GEO Playbook v0.5).
20. **`Atrium/library/artifacts/services/`** (after migration) — the 2 Atrium productized services (AI Citation Audit, GEO Setup).
21. **`Forge/library/artifacts/`** (after migration) — the Forge catalog (Schema Generator, Citation Watch waitlist, Schema Doctor Pro waitlist, Enterprise GEO Sprint, Enterprise GEO Program, Forge Weekly).
22. **`Atrium/library/playbooks/`** — the seven Money Levers, the per-archetype playbooks for info-products / productized-services / newsletter.
23. **`Atrium/library/templates/`** — operator monthly summary + weekly catalog status templates.

Estimated total read time across all 23 surfaces: 4-6 hours for a thorough first pass. You can spread this across two or three sessions.

## What to do once everything is in place

After rebuild, the next actions are operational, not architectural.

### Execution path (per GO-LIVE-MASTER.md)

The 14-day calendar from setup through first launches:

- **Day 1 (~90 min):** Atrium and Forge domains registered; Stripe sub-accounts; Gumroad seller account; Beehiiv publication; Substack publication; Vercel projects created.
- **Day 2 (~60 min):** Sales pages deployed (Atrium GEO Setup, Atrium AI Citation Audit, Forge Schema Generator, Forge Citation Watch waitlist, Forge Schema Doctor Pro waitlist, both brand hubs, both enterprise sales pages).
- **Day 3 (~45 min):** Stripe Checkout configured for productized services.
- **Day 4 (~60 min):** Gumroad uploads (Schema Pack v1.5 at $39, llms.txt Pack at $9, Bundle at $45, GEO Playbook v0.5 at $79).
- **Day 5 (~45 min):** Beehiiv and Substack publications configured and Issue 001 queued for each.
- **Day 6-7 (~30 min):** Demand probe posted to IndieHackers and r/LocalSEO.
- **Day 8-12:** Monitor and respond using SUPPORT directory templates.
- **Day 13:** First product launch (Schema Pack v1.5 IndieHackers post).
- **Day 14:** Newsletters publish (Cited Weekly Issue 1 Tuesday morning, Forge Weekly Issue 1 Thursday morning).

Total active time: 8-12 hours over 14 calendar days.

### Validation gates (per roi-evaluation.md)

Three measurable pivot triggers monitor whether the architecture is the right bet:

- **Day 30 — Trigger A:** Atrium revenue under $250 AND Forge waitlist under 8 signups → pivot to consulting + side projects.
- **Day 90 — Trigger B:** Fewer than 500 qualified contacts across both networks → vertical pivot.
- **Day 180 — Trigger C:** More than 10 hours per week sustained on cross-network coordination → network consolidation.

Each trigger is a journal-gated evaluation under `founding` lineage. Non-evaluation at the corresponding date is a constitutional drift flag the Auditor catches.

### Starting next session

The next time you (or an instance of the founding agent) opens Atrium on your PC:

1. `cd ~/code/Atrium`
2. Read `spine/constitution.md`, the most recent 5 journal entries, `spine/operator-coverage-audit.md`, `spine/human-in-the-loop.md`, `spine/roi-evaluation.md`. (15-25 minutes for the cold-start sequence.)
3. Bootstrap a new working-memory file at `spine/working-memory/SESSION-<timestamp>.md` using the Stenographer's bootstrap pattern.
4. Read `library/harness-state.yml` for current rung.
5. Compare actual progress to projections; document deltas.
6. Continue work.

If real data is in (revenue, waitlist counts, post engagement), the session is execution-driven (responding to real signals). If real data is not in (nothing deployed yet), the session can continue scaffolding or wait for execution.

## What's NOT in this export

The export is the architecture and the staged artifacts. It does not include:

- Production credentials (Stripe API keys, Gumroad tokens, etc.). These live in your password manager.
- Real customer data. None exists yet at Rung 0.
- A working Claude Code agent. You install Claude Code separately and point it at `~/code/Atrium/` or `~/code/Forge/`.
- Visual brand assets (logos, photography, finalized color palettes). The current sales pages use CSS-only branding with placeholder image slots.
- Legal documents (Terms of Service, Privacy Policy templates). These get authored when you register the legal entities for Atrium and Forge.

These are all out-of-scope for the agent's authoring but in-scope for your PC-side work to complete.

## Honest reminder of architectural state

Per Journal 019 and Journal 020:

- The architecture is structurally complete at the founding-network layer for both Atrium and Forge.
- 22% of the originally-planned operators are authored at Rung 0; the rest are deferred per the harness ladder. The deferral logic is documented.
- The human-in-the-loop cannot be cut out entirely; the floor is approximately 4-5 touchpoints at Rung 7+ down from 17 at Rung 0.
- The "best ROI possible" claim is not proven a priori. Three pivot triggers turn the architecture from claim to measurable bet over the first 180 days.

You are not buying a finished business. You are receiving a structurally-complete architecture with measurable validation gates. The next 90-180 days produce the data that validates or invalidates the architecture as the right bet.

## If something doesn't make sense

The architecture has 20 Atrium journal entries and 7 Forge journal entries that record every meaningful decision. If you find something puzzling, the most likely answer lives in a journal entry — the entries are dated and titled descriptively. Specifically:

- "Why this catalog?" → Journal 005 (evidence audit).
- "Why two networks instead of one?" → Journal 010 (Forge founding).
- "Why these prices?" → Per-product LISTING.md notes inside each `library/artifacts/` directory.
- "Why these operators authored and not others?" → `spine/operator-coverage-audit.md`.
- "What is Constantine actually required to do?" → `spine/human-in-the-loop.md`.
- "Is this actually the best ROI?" → `spine/roi-evaluation.md`.
- "What ships first / next / last?" → `Atrium/spine/PLAN.md` original sequence; Journal 005 supersession notice for current priority order.
- "What do I do tomorrow morning?" → `GO-LIVE-MASTER.md` (will migrate from BayShine to Atrium on PC).

The architecture is self-documenting if you read the journal in date order. The audit documents in `spine/` are the highest-density entry points to the current state of the bet.

## Signature

This guide authored 2026-05-11 at end of the founding session. The session produced 27 journal entries (20 Atrium + 7 Forge), 35 descendant agents across both networks, 14 customer-facing products, full operational infrastructure, three honest audit documents, and three pre-armed pivot triggers.

The architecture is yours. The execution is whenever you're ready.
