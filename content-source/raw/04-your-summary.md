# Your Summary — raw UXfolio content

Captured 2026-08-10 from https://uxfol.io/home/portfolios/mark-pachucki/p/036a078f
Verbatim. Do not edit — this is the source of truth for the migration.

⚠️ TWO DISCREPANCIES TO RESOLVE — see bottom of file.

---

**Subtitle:** Creating the homepage of Narrative Science's flagship artificial intelligence product, Lexio.

## Some background on Lexio.

Lexio is the flagship product of Narrative Science (NS) which was acquired by Tableau in November 2021.

Similar other products from NS, it's designed to empower anyone to understand the key insights within complicated data sets by simply reading stories that are written using artificial intelligence.

Unlike their other products (which sit on top of BI Tools), Lexio is a Software as a Service (SaaS) offering that people can access from any computer, tablet, or mobile device.

Lexio turns data into interactive stories, written in plain English, making analytics easy & accessible for anyone. It's a revolutionary new way of using data that's shaking up the traditional analytics industry.

## So why did we decide to create Your Summary in the first place?

After launching Lexio in early 2020, I teamed up with one of our other designers & conducted a research study to see how new users were liking the product so far. One common theme we heard was that Lexio was "overwhelming" & users were "unsure of where to start".

This was understandable since Lexio didn't have a true "homepage" to give users a reliable foundation & valuable information upfront to start from. There was simply a page with links to detailed Stories, so users had to dive in & out of different Stories to get the insights they needed for their day.

When I asked these users what information Lexio should provide right when they sign in to make them feel confident & prepared for their day, their responses boiled down to 2 key themes:

- "I want to see how my most important metrics are doing & how they're tracking towards their goals".
- "I want to see any outliers or trends in my data that I may not know about so I can take action on them."

So I set out to design a solution that focused on those themes.

## Initial Concepts & Ideas.

I began by sketching out a few different ideas of how we could display someone's favorite metrics along story content that describes important outliers & trends that Lexio's AI discovers.

After I presented these sketches to our design team, the product manager, & collected feedback, I honed in on 3 different approaches which I turned into low-fidelity wireframes to test with our users.

## What did we find through research?

After testing the low-fidelity options out with users, we uncovered a few key insights that would inform the next iteration of the design:

- The "sweet spot" for the number of metrics to show is 3. Most users truly cared about 3 KPIs or fewer & this helps prevent the "overwhelming" feeling we set out to solve.
- Users liked seeing underlying trends in their data below, separated by good news vs. bad news. Further, they expressed interest in being able to toggle between the good & the bad.
- The terms "bright spots" & "red flags" resonated with them & reflected the way they communicate about trends with their teams.
- Users desired to see the "why" behind the numbers.
- Bullet points made the content easier to scan & consume.
- Users asked for a visual way to see recent performance and how their metrics are tracking towards goal.

## Refining the design based on research findings & follow up with users.

Now it was time to make improvements to the design & take it to the next level. I took the following actions:

- Added "driver" content to tell the "why" behind the numbers in the form of bullet points.
- Created an affordance for customizing the "Pinned Metrics".
- Added visual indicators for historical trend & performance to goal.
- Created a selector to filter down insights by "bright spots" & "red flags".
- Increased the visual fidelity of the UI.
- Ran the designs by a few of the same users plus some new folks to validate the changes & learn where we still needed to make minor tweaks.

## Bringing the page to life through visual design & brand elements.

Since this page would be Lexio's first impression for new users, it was paramount to nail the visual design & make it a differentiated experience from other business tools.

In order to accomplish this, I did the following:

- Worked with our illustrator to get hand-drawn icons for each section.
- Updated the spark lines with a "hand-drawn" look to reinforce Lexio's brand.
- Used illustrations to indicate the valence of "bright spots" & "red flags" in a visual way.
- Improved the visual hierarchy of the typography to make sure the right content was emphasized.
- Created a mobile version so that users can read all the same information while on the go.

## Then it was time for implementation.

I paired with one of our senior front-end engineers to build out the experience complete with all of the interactions. To work effectively, I provided him with the following details as we worked together:

- Sizing & spacing specs
- Data visualization behaviors & states
- Interaction details like the Pinned Metrics customization modal, hover states, & tooltips
- Edge cases & empty states

## Your Summary is now live! 🚀 Let's see some stats.

- **6 Months** — Start to finish
- **12** — Users interviewed
- **213** — Sketch screens
- **+50%** — Active users
- **+15%** — User actions

## Quote

> "I'm blown away by this summary page. I spend 30 minutes every morning with data and I can get a lot of value out of that, and I want other people to do the same, but they're just... eh. I think this summary will be a game changer for them."
> — Tristan Handy, CEO & Founder of Fishtown Analytics

## Reflecting on this project.

The biggest challenge was providing a lot of valuable content up front while keeping the page clean & concise to prevent the "overwhelming" feeling users had in the first place. I overcame this challenge by:

- Identifying the content that's most important to users through multiple rounds of research.
- Arranging the content on the page in order of importance & relevance to the user.
- Applying visual design best practices to create an elegant layout that helps users focus on what matters most to them.

Looking back, one thing I would have done differently is bring engineers into the design process earlier. By inviting them to the user research sessions, they would have gotten more background & insight behind my design decisions. That direct experience would have prevented some churn that happened when I presented the new designs.

I now bring engineers along with me in my design process which has helped us move faster while improving the overall design of Lexio since we have a larger pool of ideas.

---

## Derived metadata

- Company: Narrative Science
- Role: Senior Product Designer
- Team: another designer, a product manager, an illustrator, a senior front-end engineer
- Duration: 6 months
- Tools: Sketch

## ✅ Discrepancies — both resolved 2026-08-10

See `../DECISIONS.md` for the full record.

1. **Year → 2020.** Mark originally said 2019, but this page's own copy (*"After launching
   Lexio in early 2020..."*) places it later. Now dated 2020, same as Follow-Up Stories.

2. **Acquirer → Salesforce.** This page said "acquired by Tableau in November 2021"; the
   Follow-Up Stories page said Salesforce. Standardised on **Salesforce** across both case
   studies. Apply this when migrating the body copy — the verbatim text above still says
   Tableau, because this file is the untouched capture.
