# Atrium bootstrap export

One-time export of the Atrium repository (the parent project of
BayShine), bundled here because the in-sandbox push to
`github.com/constantine-png/Atrium` is blocked by the Claude
Code harness's repository scope. This directory rides along on
BayShine's authorized push channel.

After the operator has retrieved this on their PC and pushed
Atrium to its own GitHub repo, this directory should be removed
in a follow-up commit.

## Contents

- `atrium.tar.gz` — gzipped tar of the full `Atrium/` tree,
  including `.git/` history. 3 commits, 73 files, 289KB.
- `atrium.tar.gz.sha256` — SHA-256 of the tarball for
  verification.

## What's inside the tarball

Atrium is the parent project that contains the spine of the
founding agent and the town of businesses that agent will spawn
and operate. BayShine is the first citizen of that town.

Top-level structure:

```
Atrium/
  README.md
  spine/
    constitution.md           the inherited identity of every descendant
    PLAN.md                   the operating plan, including the supersession notice from Journal 005
    journal/                  5 entries, append-only
    origins/                  BayShine CLAUDE.md and BUILD_BRIEF.md
  library/
    decisions.jsonl           every operational decision logged
    protocol/v1.md            the Spin-Up Protocol, versioned
    playbooks/                per-archetype playbooks
    artifacts/                published outputs
    patterns/                 distilled playbooks (Pattern Rollup auto-gens)
    citations/                AI-engine probe results
  lineage/                    20 descendant declarations
  finance/
    ledger.md                 revenue, costs, unlock-ladder state
  archetypes/                 10 archetypes, plus shared/ and cron/
    citation/                 Audit-Tool Network (demoted from flagship)
    network/                  Directory + Lead-Sale Network
    vault/                    Digital Product Vault (Gumroad/Polar)
    extensions/               Chrome/Edge Extension Factory
    newsletter/               Cited Weekly
    web-tools/                Single-purpose web utilities (Archetype 9)
    devtools/                 Paid npm / GitHub Actions / IDE extensions (Archetype 11)
    info-products/            Information Products (Archetype 12 - FLAGSHIP)
    productized-services/     Productized Services (Archetype 13 - FLAGSHIP)
    shared/                   TypeScript modules used by every archetype
    cron/                     Vercel Cron handlers
  citizens/
    bayshine.md               BayShine reference (the first citizen)
  .claude/
    agents/                   20 descendant agent definitions
    skills/                   orchestration skills
```

## What to do with this on your PC

See the verification, rebuild, and push steps in the chat
message that pointed you to this commit. The condensed
sequence is:

```
# 1. retrieve
git clone https://github.com/constantine-png/BayShine.git
cd BayShine
git checkout claude/ai-business-sustainability-V1V2M

# 2. verify
cd .atrium-bootstrap
sha256sum -c atrium.tar.gz.sha256

# 3. extract to a sibling directory
cd ../..
tar -xzf BayShine/.atrium-bootstrap/atrium.tar.gz
# you now have ./Atrium/ next to ./BayShine/

# 4. confirm the Atrium git history travelled with it
cd Atrium
git log --oneline   # expect 3 commits, head 46f5f54

# 5. push to the upstream you create on GitHub
#    (create the empty repo first at github.com/new -> name "Atrium" -> private)
git remote add origin https://github.com/constantine-png/Atrium.git
git push -u origin main

# 6. clean up the bootstrap artifact from BayShine
cd ../BayShine
git rm -r .atrium-bootstrap
git commit -m "Remove atrium bootstrap after successful export"
git push
```

After step 5, the founding agent's Atrium repo is live on GitHub
and the next Claude Code session opens `Atrium/` directly as the
working directory.
