# markpachucki — portfolio

Custom portfolio for Mark Pachucki, Staff Product Designer. Replaces the UXfolio-hosted
site at `markpachucki.info`.

Astro 7 · Tailwind 4 · MDX content collections · static output.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # runs the content structure check, then builds
npm run check    # content check + astro type check
```

## The point of the structure

The site enforces the case study shape rather than trusting the author to remember it.
Research on staff-level portfolios is consistent about what reviewers want and what
candidates leave out, so those things are required rather than encouraged:

**`src/content.config.ts`** — Zod schema on frontmatter. `impactHeadline`, `ownership`
and `outcome` are required, with minimum lengths that make a hand-wave fail.
`ownership: "Led design"` is 10 characters and will not build.

**`scripts/check-content.mjs`** — runs as `prebuild`. Every published case study must
contain `Context`, `Reframe`, `Process`, `Craft`, `Outcome` and `Reflection` headings.
Section names are keyword-matched so wording stays flexible.

`Reframe` is deliberately non-optional. Stating a problem and stating a solution is
senior work; showing that you *redefined* the problem is the staff-level signal, and it's
the section most portfolios skip.

Set `published: false` to keep a draft in the repo but out of the build, index and sitemap.

## Source material

`content-source/` holds the verbatim capture of the old UXfolio portfolio, taken while the
account was still accessible:

- `raw/01`–`07` — every case study and the Other Work page, exactly as written
- `raw/08-about-me.md` — the About page copy
- `DECISIONS.md` — every content decision made during migration, with reasoning

**Do not edit the `raw/` files.** They are the record of what the original said, and the only
remaining copy — the UXfolio trial has expired. Where the published copy diverges (typo fixes,
the Salesforce/Tableau standardisation), the change is logged in `DECISIONS.md` instead.

Developer Studio and the nine Other Work projects exist *only* here — neither is migrated yet.

## Content status

⚠️ **All five case studies are scaffolds, not finished work.** They were drafted from the
May 2025 résumé only. Every fact not on that résumé is marked inline as
`[NEEDS INPUT — …]`, including team composition, durations, research detail, and several
outcome figures.

Find everything outstanding:

```bash
grep -rn "NEEDS INPUT" src/content/work/
```

Nothing here should be published until those markers are resolved with real facts.

### Confidentiality

`campaign-creation.mdx` and `reporting-system.mdx` are marked `confidential: true` and
carry Delivery Hero figures (+11% conversion, €560K monthly revenue). Those numbers appear
on the résumé already, but confirm they're cleared for a public URL before deploying, and
sanitise any screenshots of internal tooling or vendor data. Set `gated: true` on a study
to flag it as passphrase-protected in the index.

## Structure

```
src/
├── content/work/*.mdx     # case studies — one file each
├── content.config.ts      # the case study contract
├── consts.ts              # identity, résumé, capabilities — single source of truth
├── styles/global.css      # tokens, semantic colour layer, prose styles
├── components/
│   ├── GridOverlay.astro  # the blueprint grid — real layout columns, not decoration
│   ├── WorkIndex.astro    # spec-table index, not a card grid
│   ├── SpecTable.astro    # metadata as a specification sheet
│   ├── ImpactStat.astro   # headline results, above the fold
│   ├── Figure.astro       # annotated images, CSS-counter numbering
│   └── Nav.astro / Footer.astro / ThemeToggle.astro
├── layouts/
│   ├── BaseLayout.astro   # head, grid, nav, footer, no-flash theme script
│   └── CaseStudyLayout.astro
└── pages/
    ├── index.astro
    ├── about.astro
    └── work/[...slug].astro
```

## Design system

Swiss / systems-led, expressed as constraints rather than preferences.

- **Type** — Geist Sans + Geist Mono, self-hosted, no external requests. Monospace is
  reserved for the "spec voice": metadata, labels, indices, table columns.
- **Scale** — fixed 1.25 ratio off a 16px base, in `@theme`. There are no arbitrary font
  sizes in the codebase; display steps are fluid via `clamp()`.
- **Grid** — 12 columns (4 on small screens) with a visible hairline overlay aligned to
  the real content grid and gutter.
- **Colour** — semantic CSS variables (`--paper`, `--ink`, `--accent`) registered with
  `@theme inline`, so `bg-paper` emits `var(--paper)` and light/dark flips with no `dark:`
  variants anywhere in the markup.
- **Theme** — follows `prefers-color-scheme`; `data-theme` on `<html>` overrides either
  way, applied pre-paint to avoid a flash.
- **Motion** — one easing curve (`--ease-standard`), 150–250ms, `prefers-reduced-motion`
  honoured globally.

## Before deploying

1. Resolve every `NEEDS INPUT` marker.
2. Confirm the confidentiality review above.
3. Update `site` in `astro.config.mjs` and `SITE.url` in `src/consts.ts` to the final domain.
4. Add per-page OG images.
