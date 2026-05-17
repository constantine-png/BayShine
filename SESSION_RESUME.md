# Session Resume — 2026-05-16

## STOP — READ THIS FIRST

The user will say: "use dangerously-skip-permissions, diagnose automation issues on bayshine.net with Playwright, and run autonomous content loop continuously."

## Active Blocker: Vercel Build Failing RIGHT NOW

**Deployment in ERROR:** `dpl_DWdWEfDKVt9NdjqPovFFcpbVzwE5`
**Error:** `blog → convertible-top-care-florida` — `readTime: Required`

**Root cause:** 65 blog posts are missing `readTime` which is **required** (not optional) in the blog schema (`src/content/config.ts` line 10: `readTime: z.number().int().positive()`).

**Fix is ready — just needs to be applied and pushed.** Run this Python script:

```python
import glob, re

# Get all blog files missing readTime
files_missing = []
for f in sorted(glob.glob('src/content/blog/*.mdx')):
    with open(f, encoding='utf-8') as fh:
        content = fh.read()
    m = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if m and 'readTime' not in m.group(1):
        files_missing.append(f)

# Fix: insert readTime: 6 after pubDate line
for f in files_missing:
    with open(f, encoding='utf-8') as fh:
        content = fh.read()
    new_content = re.sub(r'(pubDate:[^\n]+\n)', r'\1readTime: 6\n', content, count=1)
    if new_content != content:
        with open(f, 'w', encoding='utf-8') as fh:
            fh.write(new_content)
        print(f'Fixed: {f}')
```

Then run: `node scripts/validate-content-schema.mjs` to confirm 0 errors.
Then: `git add -A && git commit -m "fix(content): add missing readTime to all blog posts" && git push origin main`

---

## Loop-13 Files Ready to Commit (pending above fix)

Copy from worktrees:
```bash
cp ".claude/worktrees/agent-a7562ff2a95308eaa/src/content/blog/detailing-after-hurricane-florida.mdx" "src/content/blog/"
cp ".claude/worktrees/agent-a7562ff2a95308eaa/src/content/blog/tinted-windows-care-florida.mdx" "src/content/blog/"
cp ".claude/worktrees/agent-a7562ff2a95308eaa/src/content/blog/detailing-before-road-trip.mdx" "src/content/blog/"
cp ".claude/worktrees/agent-a61f0762e93d0ce1c/src/content/fieldGuideScenarios/overspray-removal-technique.mdx" "src/content/fieldGuideScenarios/"
cp ".claude/worktrees/agent-a61f0762e93d0ce1c/src/content/fieldGuideScenarios/glass-coating-hydrophobic-application.mdx" "src/content/fieldGuideScenarios/"
```

These were already copied before the session ended — they may already be in `src/content/` — check with `git status` first.

---

## /go/ Affiliate Redirect Fix (separate task)

**Problem:** 63 product slugs are referenced in field guide articles but missing from the Neon `products` table — so every `/go/some-product` link falls back to `/field-guide` instead of Amazon.

**Migration written:** `migrations/004_missing_products.sql`

**To apply:**
```bash
DATABASE_URL=<your-neon-url> node scripts/run-migration.mjs migrations/004_missing_products.sql
```

Note: affiliate URLs use `tag=bayshine-20` as placeholder. Constantine should replace with his real Amazon Associates tag once set up.

---

## Schema Rules (agents keep getting these wrong — enforce strictly)

**Blog collection (`src/content/blog/*.mdx`):**
- `category`: ONLY `"Car Care"` | `"Fleet Tips"` | `"Local"`
- `serviceTopic`: ONLY `"full-detail"` | `"exterior-detail"` | `"ceramic-coating"` | `"recon"` | `"fleet"` | `"apartments"` | `"standing-detail"` | `"general"`
- `readTime`: **REQUIRED** number — agents keep omitting this
- `draft`: **REQUIRED** boolean

**Field Guide collection (`src/content/fieldGuideScenarios/*.mdx`):**
- `category`: ONLY `"paint"` | `"interior"` | `"glass"` | `"wheels"` | `"trim"` | `"coating"` | `"contamination"` | `"correction"` | `"tools"` | `"general"`
- `severity`: ONLY `"quick-fix"` | `"moderate"` | `"advanced"`
- `readTime`: required number
- `draft`: required boolean

**Validator:** `node scripts/validate-content-schema.mjs` — run before every commit.

---

## Playwright Findings

From live site audit (`https://bayshine.net`):
- All main pages return 200 (homepage, ceramic-coating, contact, blog, service-area, field-guide)
- Contact page: form with submit button found — working
- `/go/` redirects: falling through to `/field-guide` because products DB is empty (63 missing slugs)
- sitemap-index.xml: 200
- No JS errors on any page

---

## Content Loop State

Completed loops: 8, 9, 10, 11, 12 — all deployed.
Loop-13 in progress (files ready, pending readTime fix + commit).
Resume from loop-14 after fixing Vercel.

**Loop topic queue for resuming:**
Blog: wheel-well-cleaning, motorcycle-detailing-pasco-county, engine-bay-worth-it, cory-lake-isles, meadow-pointe, epperson-ranch, bexley-land-o-lakes, fleet-real-estate, how-detailing-protects-resale
Field guide: brake-fluid-stain-paint, door-jamb-cleaning-guide, coating-toppers-spray, engine-bay-safe-cleaning, interior-plastics-restore

---

## Daily Automation Status

- GitHub Actions workflow: `.github/workflows/daily-content.yml` — exists, runs at 7am ET
- Needs: `ANTHROPIC_API_KEY` secret in GitHub repo → Settings → Secrets → Actions
- Generation script: `scripts/generate-daily-content.mjs`
- Without the secret, the workflow fails silently

---

## Git State

Last successful deploy: loop-12 (`787b896`)
Current HEAD: `e48e0b1` (automation scripts commit — this is what triggered the failing build)
Vercel is deploying from `e48e0b1` → ERROR

The readTime fix needs to go on top of `e48e0b1`.
