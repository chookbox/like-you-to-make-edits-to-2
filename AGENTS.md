## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

---

## Project handoff (read this first)

Personal portfolio for Mark Pachucki, Staff Product Designer. Replaces a UXfolio site.
Astro 7 + Tailwind 4, MDX case studies, static output. Swiss/systems visual direction.
Private repo: `github.com/chookbox/portfolio`. This is **not** a Delivery Hero project.

### Commands

```
npm install
npm run dev        # http://localhost:4321
npm run build      # runs scripts/check-content.mjs first, then builds
npm run preview    # serve the production build
```

### Identity
Commits in this repo are authored `pachook99@gmail.com` (repo-local git config). Never rely on
a global git identity here.

### Rules that are enforced on purpose — do not relax them to make content pass
- `src/content.config.ts` (Zod): `impactHeadline`, `ownership`, `outcome` are required with
  minimum lengths; `coverAlt` is required whenever `cover` is set.
- `scripts/check-content.mjs` (runs as `prebuild`): every published case study must contain
  `## Context`, `## Reframe`, `## Process`, `## Craft`, `## Outcome`, `## Reflection`.
  It also *warns* (does not fail) on British spellings.

### Conventions
- **American spelling everywhere.** Past drift produced 29 British forms. "towards" is fine.
- Index tags are `domain · discipline`, exactly two, all five pairs distinct.
- Case study titles match the old UXfolio titles. `USE_IMPACT_HEADLINES` in `src/consts.ts`
  swaps every headline to the impact version in one place (currently `false`).
- Every figure must evidence a claim the text makes. No logos, no near-duplicates.
- Shared company background lives in `DeliveryHeroContext.astro` / `LexioContext.astro` so
  repeated paragraphs cannot drift. The acquirer is **Salesforce**, never Tableau.
- Participants in research photos stay unnamed in text.
- Design tokens live in `src/styles/global.css`. No arbitrary font sizes; 1.25 type scale.
- Images: Astro `<Image>`; lightbox via `LightboxRoot.astro` (native `<dialog>`, no close button).

### Source material
`content-source/` is the verbatim capture of the old UXfolio portfolio (the account is no
longer reliably accessible) plus ~70 source images. **Never edit `content-source/raw/`.**
Content decisions are logged in `content-source/DECISIONS.md`. Developer Studio and the Other
Work projects exist in full only there and in the repo data files.

### Current state
All pages migrated: home, About, Other Work (10 projects with images), five case studies
(24 figures). Developer Studio is `published: false` on purpose. Open Graph previews on every
page. Lighthouse 100 across all four categories (a score of 0 with 0 audits run is a failed
run, not a regression — re-run with the window in the foreground).

### Outstanding — blocks deploy, needs the author, not research
1. `## Reflection` for Ad Campaign Creation Flow and Ads Reporting Experience (both currently
   render bracketed placeholder text as body copy).
2. Duration for Ads Reporting Experience and Product Comparison.
3. A third outcome stat for Ads Reporting Experience (currently literal `[NEEDS INPUT]`).
4. Delivery Hero figures (+11% conversion, €560k/month, €1.1M Q4 2024, €700M AdTech) need the
   author's confirmation that they are cleared for a public URL.
`grep -rn "NEEDS INPUT" src/content/work/` lists every gap.

### Deploy
Not done yet and should not happen until the list above is clear. Output is plain static
HTML in `dist/`, deployable anywhere. Update `site` in `astro.config.mjs` and `SITE.url` in
`src/consts.ts` to the final domain first.
