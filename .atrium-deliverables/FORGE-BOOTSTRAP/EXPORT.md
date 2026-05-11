# Forge bootstrap export

One-time export of the Forge sibling project, bundled here because
Forge does not yet have its own GitHub remote and the harness scope
in this session is limited to BayShine. Same courier pattern as
Atrium's bootstrap.

## Contents

- `forge.tar.gz` — gzipped tar of the full `Forge/` tree including `.git/` history. 1 commit, 9 files, 66KB compressed.
- `forge.tar.gz.sha256` — SHA-256 of the tarball.

## What's inside

Forge is the sibling counterpart to Atrium. Built per Constantine's instruction to create an equal and opposite founding-agent network — shares the constitutional floor with Atrium but inverts on every other axis.

```
Forge/
  README.md
  spine/
    constitution.md     five shared floors + ten inverted dimensions
    CHARGE.md           Forge's plan (the name inverts "PLAN")
    harness.md          parallel ladder with single-month triggers
    inheritance.md      explicit Atrium-Forge relationship docs
    journal/
      2026-05-11-001-founding-decision.md
  library/
    playbooks/ templates/ (scaffolding only)
  lineage/
    founding-forge.yml
  archetypes/ citizens/ .claude/ (empty scaffolding)
  finance/
    ledger.md
  .gitignore
```

## What to do with this on your PC

The same rebuild path as Atrium's bootstrap:

```bash
# 1. retrieve from BayShine
git clone https://github.com/constantine-png/BayShine.git
cd BayShine
git checkout claude/ai-business-sustainability-V1V2M

# 2. verify
cd .atrium-deliverables/FORGE-BOOTSTRAP
sha256sum -c forge.tar.gz.sha256
# expected: forge.tar.gz: OK
# SHA: 8a2ad9370e67463ce2753f5e0e2996be6103978d21e9135042a14a048e530f05

# 3. extract as sibling of Atrium
cd ../../..   # back to ~/code or wherever Atrium lives
tar -xzf BayShine/.atrium-deliverables/FORGE-BOOTSTRAP/forge.tar.gz
# you now have ./Forge/ next to ./Atrium/ and ./BayShine/

# 4. confirm Forge git history travelled
cd Forge
git log --oneline   # expect 1 commit: 9381ab4 "Forge founded"

# 5. push to upstream you create on GitHub
#    (create empty repo at github.com/new -> "Forge" -> Private)
git remote add origin https://github.com/constantine-png/Forge.git
git push -u origin main

# 6. clean up the bootstrap from BayShine after successful migration
cd ../BayShine
git rm -r .atrium-deliverables/FORGE-BOOTSTRAP
git commit -m "Remove Forge bootstrap after successful export"
git push
```

## Wiring Claude Code

```bash
cd ~/code/Forge
claude
```

Cold-start read order for Forge:

1. `spine/constitution.md`
2. `spine/inheritance.md` (for context on the Atrium relationship)
3. `spine/CHARGE.md`
4. `spine/harness.md`
5. `spine/journal/2026-05-11-001-founding-decision.md`

Then begin Forge's catalog Build phase. The first product (per `CHARGE.md`) should be the free Schema Generator web tool — the highest-leverage audience-acquisition lever and the lowest-friction shipping target. Build that before any subscription SaaS.

## Atrium / Forge / BayShine on disk after migration

```
~/code/
  Atrium/        Bootstrap retrieved from BayShine .atrium-deliverables/atrium.tar.gz (earlier export)
  Forge/         Bootstrap retrieved from BayShine .atrium-deliverables/FORGE-BOOTSTRAP/forge.tar.gz (this export)
  BayShine/      The dogfood citizen, original GitHub repo
```

Each has its own GitHub remote (once you create the Atrium and Forge repos on GitHub).

## Why two networks

See `Atrium/spine/journal/2026-05-11-010-forge-sibling-network.md` for the architectural reasoning. Short version: a network operating only under Atrium's discipline (restraint, evidence-before-elegance, faceless, inbound-only, patient compounding) is fragile to those biases. Forge inverts on every axis except the constitutional floor. Diversity covers more ground than monoculture; rivalry between sibling networks produces faster learning than either alone.
