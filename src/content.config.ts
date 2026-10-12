import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * The case study contract.
 *
 * This schema is the enforcement mechanism for the portfolio, not just type
 * safety. Research on staff-level portfolios is consistent about what reviewers
 * look for and what candidates omit: an impact-first headline, an explicit
 * statement of what the designer personally owned, and a stated outcome. All
 * three are required fields here, with minimum lengths that make a hand-wave
 * ("everything", "led design") fail validation.
 *
 * The practical effect: a case study that would read as junior cannot build.
 */

const work = defineCollection({
  loader: glob({ base: "./src/content/work", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      /** Short project name — used in the index and nav, not as the page H1. */
      title: z.string().min(2).max(60),

      /**
       * The page H1. Must lead with the change produced, not the artefact.
       * Good: "Cut campaign setup abandonment by 11%".
       * Bad: "Campaign Creation Redesign".
       */
      impactHeadline: z.string().min(20).max(120),

      /** One sentence of context, shown under the headline and in the index. */
      summary: z.string().min(40).max(320),

      company: z.string().min(2),
      year: z.string().min(4),
      domain: z.string().min(2),

      /** Your title on the project. */
      role: z.string().min(2),

      /**
       * What you personally owned. Required and deliberately long-form:
       * unattributed work on a team project reads as no work at all.
       */
      ownership: z.string().min(40),

      /** Who else was involved. Credit collaborators by discipline or name. */
      team: z.string().min(3),

      duration: z.string().min(2),
      platform: z.array(z.string()).min(1),

      /**
       * Headline results. At least one is required. Where real figures are
       * confidential, use a direction or range and set `confidential: true`
       * rather than omitting the section.
       */
      outcome: z
        .array(
          z.object({
            value: z.string().min(1),
            label: z.string().min(3),
          }),
        )
        .min(1),

      /** Marks the study as containing figures cleared for public sharing. */
      confidential: z.boolean().default(false),

      /**
       * Gates the study behind a shared passphrase at request time. Use for work
       * that cannot be public but should be reviewable by a hiring manager.
       */
      gated: z.boolean().default(false),

      /**
       * Cover image, used as the thumbnail in the work index. `coverAlt` is
       * enforced below — a decorative-looking portfolio thumbnail is still the
       * only description of the work a screen reader user gets.
       */
      cover: image().optional(),
      coverAlt: z.string().min(20).optional(),

      /** Lower numbers sort first in the index. */
      order: z.number().int().default(99),

      /** `false` keeps the study in the repo but out of the index and sitemap. */
      published: z.boolean().default(true),
    })
    .superRefine((data, ctx) => {
      // A cover without alt text is an accessibility regression that would ship
      // silently, so it fails the build instead.
      if (data.cover && !data.coverAlt) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["coverAlt"],
          message:
            "coverAlt is required when cover is set — describe what the screen shows, not that it is a screenshot.",
        });
      }
    }),
});

export const collections = { work };
