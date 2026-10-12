# Migration decisions

Choices made while moving content from UXfolio to the new site. Recorded here so the
raw capture files stay untouched as the source of truth, and so the reasoning survives.

---

## 1. Your Summary is dated 2020 — resolved 2026-08-10

**Contradiction:** Mark first said 2019, but the case study copy reads *"After launching
Lexio in early 2020, I ... conducted a research study"* — and that study is what prompted
Your Summary.

**Decision:** 2020, matching Follow-Up Stories.

**Applied:** `year: "2020"` in `src/content/work/your-summary.mdx`.

**Consequence:** both Narrative Science case studies now sit in the same year. Index order
is unchanged and still mirrors the UXfolio order — Follow-Up Stories, then Your Summary.
If you ever want them to read chronologically, the `order` fields are 3 and 4.

## 2. Narrative Science was acquired by Salesforce — resolved 2026-08-10

**Contradiction:** the Follow-Up Stories page said *"acquired by Salesforce in 2021 and is
now part of Tableau's AI & analytics platform"*; the Your Summary page said *"acquired by
Tableau in November 2021"*. Salesforce owns Tableau, so neither was wrong, but the two
pages disagreed.

**Decision:** say **Salesforce** everywhere. Simpler, and consistent across both studies.

**To apply when migrating:** use "acquired by Salesforce in 2021" in both
`follow-up-stories.mdx` and `your-summary.mdx`. Drop the "now part of Tableau's AI &
analytics platform" clause unless it earns its place.

## 3. About page copy edits — 2026-08-10

Three corrections applied to `src/pages/about.astro`. The raw capture in
`raw/08-about-me.md` is left untouched and still shows the originals.

| Original | Published |
|---|---|
| all it's different forms | all **its** different forms |
| 2 megapixel digital camera | **2-megapixel** digital camera |
| Mt. Everest Basecamp | Mt. Everest **Base Camp** |

Only the first is a true error. The other two are conventional-spelling fixes — a
hyphenated compound modifier, and the standard two-word rendering of Base Camp.
Voice, capitalisation (Design as a proper field) and the ampersands were left alone.

The meta description also carried "2 megapixel" and was updated to match.

## 4. Campaign CTA copy corrected to "Launch my campaign" — 2026-08-11

The UXfolio case study said the primary button was elevated as **"Start Campaign"**. The
product screenshot on the same page clearly shows **"Launch my campaign"**. Mark confirmed
the real copy is "Launch my campaign", so the case study said one thing while its own
figure showed another.

**Applied:** `src/content/work/ad-campaign-creation-flow.mdx`, Craft section.

`raw/01-ad-campaign-creation-flow.md` still says "Start Campaign" — it is the untouched
record of what UXfolio said.

---

## Still open

- **Product Comparison outcome.** The work was validated and added to the roadmap for a
  pilot, not launched. Needs an honest non-metric outcome rather than an empty stat.
- **Ad Campaign Creation Flow reflection.** No reflection existed in the original; the
  section is currently `[NEEDS INPUT]`.
- **Ad Campaign Creation Flow reframe.** Drafted by Claude from Mark's own material and
  marked `[DRAFTED — confirm or rewrite]`. Not yet approved.
- **About page.** Still résumé-derived. Should be replaced with the personal copy in
  `raw/08-about-me.md`.
- **Developer Studio.** Hidden on UXfolio, mirrored as `published: false`. Worth revisiting.
