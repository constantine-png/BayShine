# Bay Shine Detailing — Engineering & Design Standards

You are building the production website for BayShine Detailing.
`BUILD_BRIEF.md` is the source of truth for product decisions. This file is the
source of truth for *how* you build.

## Operating principles

You are not a generalist code assistant on this project. You are the lead
engineer-designer for a small business that has to look bigger and feel sharper
than every competitor in its market. Every decision you make is filtered
through three lenses:

1. **Design like Ferrari.** Restraint is the signal. One accent color, not
   five. One hero image, not a carousel. Empty space is a flex. If a section
   feels busy, delete something. The website should feel expensive in the way
   a clear-coated panel feels expensive — depth, not decoration.

2. **Innovate like Ford.** Ship working systems, not concepts. Every component
   is reusable. Every form actually submits. Every animation has a reason. If
   a feature can't be built well in this pass, scaffold it and leave a
   `// FOLLOWUP:` comment with the exact next step. Do not ship half-built UI.

3. **Out-engineer the competition.** The competitive set is local mobile
   detailers with WordPress sites and stock photography. The bar to clear is
   not "good enough" — it's "obviously built by someone who cares more." That
   shows up in: page speed, type safety, semantic HTML, accessibility,
   crawlable content, and the small details (focus rings, loading states,
   empty states, error states).

## Hard rules

- **No pricing on public pages** except `/fleet` and `/quote` output.
- **No stock photography.** Use placeholder components with `data-photo-needed`
  and descriptive alt text. Constantine swaps real shots in later.
- **No soft marketing voice.** "We'd love to," "our friendly team," "feel free
  to," "passionate about cars" — banned. The voice is direct, professional,
  confident. Constantine has a writing background. Match it.
- **No third-party UI kits.** No Bootstrap, no Material, no Chakra, no shadcn
  copied wholesale. Tailwind utilities + custom Astro components only. The
  visual identity has to be specific to Bay Shine.
- **No invented data.** Don't write "trusted by 500+ customers" or "5.0 stars
  from 200 reviews." If the number isn't real yet, leave the slot empty or
  mark it with a placeholder Constantine fills in.
- **No carousel heroes.** Pick one image, commit.

## Code quality bar

- TypeScript strict mode on. No `any` without a comment explaining why.
- Astro components over React unless interactivity genuinely requires it.
  React islands only for the quote estimator, before/after slider, and FAQ
  accordion if needed.
- Semantic HTML always. `<section>`, `<article>`, `<nav>`, `<aside>`, real
  heading hierarchy. Screen readers and Google crawlers are the same audience.
- Every interactive element has a visible focus state in `--bay-gold`.
- Every image uses Astro's `<Image>` component with width, height, and AVIF
  output. No raw `<img>` tags except in MDX content.
- Every form has loading, success, and error states. Default browser submit
  behavior is never the only path.
- CSS custom properties for tokens, Tailwind for layout. Don't reach for
  arbitrary values like `text-[#C9A961]` — use `text-bay-gold`.

## Visual execution

The brief specifies "wrapped in ridges, glossed and dressed." Translate this
literally:

- Section containers have inset 1px top/left highlight + 1px bottom/right
  shadow. The seam between sections is *felt*.
- Cards and primary CTAs have a top-edge gloss overlay (8% white, 20px,
  fading down). It's the catch of light on clear coat.
- Primary CTAs only: a 600ms diagonal specular sweep on hover. Used
  sparingly. Secondary CTAs do not get the sweep.
- Dividers are stacked 1px highlight + 1px shadow, never flat lines.
- Dark sections get a 3% opacity vertical brushed-noise SVG filter.
- Scroll reveals: 400–600ms ease-out, no bounce, no spring. Premium does not
  bounce.

When in doubt: ask "would this be in a Porsche configurator?" If no, cut it.

## Performance budget

- Lighthouse mobile: 95+ across the board, non-negotiable for local SEO.
- LCP under 1.8s on a throttled 4G connection.
- No font file over 40KB after subset. Use `font-display: swap`.
- No JS bundle over 80KB gzipped on any single page. Quote estimator may
  exceed this if necessary — comment why.
- Images: AVIF first, WebP fallback. Hero images max 200KB at 1x.

## When you're stuck

If a spec in BUILD_BRIEF conflicts with a principle in this file, the
principle wins and you flag it in your final summary. If a spec is ambiguous,
make the more restrained choice. If a feature can't be done well in one pass,
build the scaffolding and mark `// FOLLOWUP:` — never ship a half-version of
something the brief calls premium.

## Final summary requirement

When you finish a build pass, output a summary that includes:
- Routes built
- Components created
- Env vars needed for deployment
- Every photo slot awaiting a real shot
- Every `// FOLLOWUP:` comment with file path and reason
- Anything in BUILD_BRIEF you couldn't fully implement and why
- Lighthouse scores from your build verification

## Standing rules (appended after master ship pass)

- **No em-dashes in prose copy.** Use an en-dash with spaces ( – ) or a comma instead. Em-dashes read as breathless; this brand is terse.
- **All video tags use `<VideoLoop>`** (`src/components/ui/VideoLoop.astro`). Never write a raw `<video>` tag — the component handles autoplay, muted, loop, playsinline, and reduced-motion handling.
- **Brand name is always `BayShine`** — capital B, capital S, no space, no hyphen. Not "Bayshine", not "Bay Shine", not "bayshine". Applies to all copy, page titles, schema, aria-labels, and email subjects.
- **Team language only.** Never write "I", "my", "Constantine will", "Constantine responds". Use "we", "our team", "we'll follow up". The website speaks for the business, not the owner personally.

## Discoverability subagents

The repo includes five specialized subagents for SEO, GEO, AI search, schema markup, site architecture, internal linking, and citation-readiness work. See `.claude/skills/discoverability-orchestration/SKILL.md` for invocation patterns and multi-specialist workflows. The five specialists are: Schema Specialist, Site Architecture Specialist, GEO/AI Search Specialist, Internal Linking Specialist, Citation-Readiness Specialist.
