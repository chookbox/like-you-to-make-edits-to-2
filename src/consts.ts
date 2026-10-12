/**
 * Single source of truth for identity, contact and résumé data.
 *
 * Nothing in the site hardcodes these strings — the home page, about page,
 * footer and document metadata all read from here, so a change to a job title
 * or email propagates everywhere at once.
 */

/**
 * Which headline the index and case study pages lead with.
 *
 * `false` — use each project's own title, exactly as it reads on UXfolio today.
 * `true`  — use `impactHeadline`, which leads with the change the work produced.
 *
 * Currently false: the original titles are staying put until the copy pass. The
 * `impactHeadline` field remains required by the schema so the headlines are
 * written and kept current even while unused — flipping this one constant swaps
 * every headline on the site at once.
 */
export const USE_IMPACT_HEADLINES = false;

export const SITE = {
  name: "Mark Pachucki",
  role: "Staff Product Designer",
  company: "Delivery Hero",
  location: "Berlin, Germany",
  /** Update once the new site is deployed to its final domain. */
  url: "https://markpachucki.info",
  email: "pachook99@gmail.com",
  /**
   * The intro, verbatim from the current UXfolio home page.
   */
  intro: [
    "Hi there, welcome to my design portfolio.",
    "Below, you can find a few of my favorite projects that I've worked on over the past 10 years as a designer.",
  ],
  /**
   * Alternative openers, kept for easy A/B. The live copy above is warm but does
   * not say what you do; these lead with the work instead. Swap by moving one
   * into `intro` — nothing else needs to change.
   */
  introAlternates: [
    "I design data-dense product surfaces — AdTech, analytics, AI tooling — so that novices and experts can both move fast in them.",
    "I take the hardest screens in a product — the reporting page, the campaign builder, the configuration flow — and make them legible without making them shallow.",
  ],
  description:
    "Mark Pachucki is a Staff Product Designer with over 10 years of experience shaping data-rich AI tools, AdTech platforms and large-scale e-commerce.",
} as const;

/** Mirrors the ABOUT ME / RESUME / CONTACT buttons on the current UXfolio home page. */
export const PRIMARY_LINKS = [
  { label: "About me", href: "/about" },
  { label: "Résumé", href: "/resume.pdf" },
  { label: "Contact", href: `mailto:${SITE.email}` },
] as const;

export const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pachook/" },
  { label: "Instagram", href: "https://www.instagram.com/chookbox/" },
  { label: "Email", href: `mailto:${SITE.email}` },
  { label: "Résumé", href: "/resume.pdf" },
] as const;

/**
 * The "Other Work" card from the current portfolio. It isn't a case study — it has
 * no reframe or outcome — so it sits outside the `work` collection rather than
 * being forced through a template it doesn't fit.
 */
export const OTHER_WORK = {
  title: "Other Work",
  summary:
    "Here are a few smaller projects that I've led from a design perspective during my career.",
} as const;

/** Reverse-chronological. `current: true` renders the "now" marker. */
export const EXPERIENCE = [
  {
    company: "Delivery Hero",
    title: "Staff Product Designer",
    period: "2023 — Present",
    current: true,
    summary:
      "Designing the AdTech experience for restaurant owners worldwide — simplifying campaign creation and performance insights for novices and experts alike.",
    highlights: [
      "Redesigned the campaign creation flow, increasing conversion by 11% and adding €560K in monthly revenue",
      "Built an internal AI-powered copy assistant so product and design teams write brand-aligned copy faster and more consistently",
      'Led the "best-in-class reporting" initiative, defining reusable guidelines for clarity and consistency across all reporting pages',
    ],
  },
  {
    company: "McMaster-Carr",
    title: "User Experience Designer",
    period: "2021 — 2022",
    summary:
      "Designed for McMaster.com, a high-volume e-commerce site carrying 800,000+ industrial products.",
    highlights: [
      "Improved product comparison across deep, technical catalogues",
      "Reduced friction in key commerce flows including add-to-cart and checkout",
      "Simplified complex product families so they could be shopped without domain expertise",
    ],
  },
  {
    company: "Narrative Science",
    title: "Senior Product Designer",
    period: "2018 — 2021",
    summary:
      "Led design for Lexio, an AI product that turns data into written stories so non-analysts can make data-driven decisions.",
    highlights: [
      "Ran user research and usability testing end to end",
      "Mapped user flows, prototyped, and produced high-fidelity specs for engineering",
      "Built the product's comprehensive design system",
    ],
  },
  {
    company: "Nielsen",
    title: "Senior User Experience Architect",
    period: "2015 — 2017",
    summary:
      "UX designer across a suite of Nielsen products, creating a unified ecosystem for data integration.",
    highlights: [
      "User research, journey mapping and contextual inquiry",
      "Low- and high-fidelity wireframing",
      "Aligned design with product strategy across cross-functional teams",
    ],
  },
] as const;

export const EDUCATION = [
  {
    institution: "IDEO U",
    detail: "Advanced Design Thinking",
    period: "2016 — 2017",
  },
  {
    institution: "Interaction Design Foundation",
    detail: "Interaction Design",
    period: "—",
  },
  {
    institution: "Virginia Tech",
    detail: "Business Information Technology · Industrial Design",
    period: "2009 — 2013",
  },
] as const;

export const CAPABILITIES = [
  "User Research",
  "Information Architecture",
  "Interaction Design",
  "Visual Design",
  "Design Systems",
  "Prototyping",
  "AI Prompting",
  "UX Copywriting",
  "Figma",
  "CSS",
] as const;
