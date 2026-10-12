/**
 * Structural check for case study bodies.
 *
 * The Zod schema in src/content.config.ts validates frontmatter but never sees
 * the body, so the narrative arc itself is checked here and wired into
 * `prebuild`. Every published case study must contain each required section.
 *
 * `Reframe` is the section that matters most and the one most portfolios skip.
 * Stating the problem and stating the solution is senior work; showing that you
 * redefined the problem is the staff-level signal, so it is not optional.
 */

import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const WORK_DIR = path.join(process.cwd(), "src", "content", "work");

/** Each section is matched by any of its keywords, so wording stays flexible. */
const REQUIRED_SECTIONS = [
  { name: "Context", keywords: ["context", "situation", "problem", "background"] },
  { name: "Reframe", keywords: ["reframe", "reframing", "insight", "bet"] },
  { name: "Process", keywords: ["process", "research", "approach", "explorations"] },
  { name: "Craft", keywords: ["craft", "design", "solution", "interface", "system"] },
  { name: "Outcome", keywords: ["outcome", "impact", "results", "shipped"] },
  { name: "Reflection", keywords: ["reflection", "learned", "retrospect", "next time"] },
];

/**
 * The site uses American spelling. These are forms that are never correct in
 * American English, so they indicate drift rather than a deliberate choice.
 *
 * This warns rather than fails. Case study bodies carry verbatim quotes from
 * research participants and colleagues, and a build that refused to compile
 * because of how someone else spelled a word would be wrong. Structural gaps
 * fail the build; style drift gets flagged for a human to judge.
 *
 * Note "towards" is deliberately absent — it is valid American English and is
 * Mark's own usage in the source material.
 */
const BRITISH_FORMS =
  /\b\w*(?:isation|isations|colour|behaviour|favourite|neighbourhood|labelled|labelling|programme|analyse|analysing|organis(?:e|ed|ing)|prioritis|categoris|standardis|synthesis(?:e|ed)|emphasis(?:e|ed|ing)|customis|generalis|harmonis|summaris|recognis|optimis)\w*\b/gi;

async function warnOnBritishSpelling() {
  const roots = ["src/content/work", "src/components", "src/pages", "src/layouts"];
  const hits = [];
  for (const root of roots) {
    let entries;
    try {
      entries = await readdir(path.join(process.cwd(), root));
    } catch {
      continue;
    }
    for (const file of entries.filter((f) => /\.(mdx?|astro)$/.test(f))) {
      const raw = await readFile(path.join(process.cwd(), root, file), "utf8");
      raw.split("\n").forEach((line, i) => {
        for (const m of line.matchAll(BRITISH_FORMS)) {
          hits.push(`${root}/${file}:${i + 1}  ${m[0]}`);
        }
      });
    }
  }
  if (hits.length > 0) {
    console.warn(
      `\n  check-content: ${hits.length} British spelling(s) found — this site uses American spelling.`,
    );
    for (const h of hits) console.warn(`    ${h}`);
    console.warn("  Not failing the build; verbatim quotes may legitimately differ.\n");
  }
}

await warnOnBritishSpelling();

let files;
try {
  files = (await readdir(WORK_DIR)).filter((f) => /\.mdx?$/.test(f));
} catch {
  console.log("check-content: no src/content/work directory yet — skipping.");
  process.exit(0);
}

if (files.length === 0) {
  console.log("check-content: no case studies found — skipping.");
  process.exit(0);
}

const failures = [];

for (const file of files) {
  const raw = await readFile(path.join(WORK_DIR, file), "utf8");

  // Skip unpublished drafts — they are intentionally incomplete.
  if (/^published:\s*false\s*$/m.test(raw)) continue;

  const headings = [...raw.matchAll(/^##\s+(.+)$/gm)].map((m) =>
    m[1].toLowerCase(),
  );

  const missing = REQUIRED_SECTIONS.filter(
    ({ keywords }) =>
      !headings.some((h) => keywords.some((k) => h.includes(k))),
  ).map(({ name }) => name);

  if (missing.length > 0) failures.push({ file, missing });
}

if (failures.length > 0) {
  console.error("\n  Case study structure check failed.\n");
  for (const { file, missing } of failures) {
    console.error(`  ${file}`);
    console.error(`    missing section(s): ${missing.join(", ")}`);
  }
  console.error(
    "\n  Add an `## ` heading for each missing section, or set `published: false`\n" +
      "  in frontmatter to keep the draft out of the build.\n",
  );
  process.exit(1);
}

console.log(
  `check-content: ${files.length} case stud${files.length === 1 ? "y" : "ies"} passed the structure check.`,
);
