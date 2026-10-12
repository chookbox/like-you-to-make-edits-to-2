# Product Comparison — raw UXfolio content

Captured 2026-08-10 from https://uxfol.io/home/portfolios/mark-pachucki/p/039df4b4
Verbatim. Do not edit — this is the source of truth for the migration.

---

**Subtitle (case study page):** Allowing customers to easily compare complex products on McMaster-Carr.com.
**Subtitle (home page card):** Allowing customers to easily compare complex products on McMaster.com.

## What is McMaster-Carr?

An historic icon in the industrial supply sector, McMaster-Carr has been in business for over 120 years and offers ~800,000 products that help manufacturers, engineers, and students innovate.

While many know McMaster for their hefty yellow print catalog, most of their business now comes via their website and mobile app. With over 400,000 visits per day, McMaster.com is heavily used by a range of customers searching for complex & technical items. Every design decision, no matter how small, has a massive impact.

## How did this project start?

We all know that comparison is a key behavior for customers before making a final decision to purchase. However, without a dedicated comparison experience, McMaster customers were forced to use their own workarounds (or enrichments) to compare products.

By digging through McMaster's customer feedback history and querying a Graph database that records user interactions, I discovered that customers often scroll back & forth across the product tables, open individual products in separate browser tabs, or even add items to their cart to compare products. While these methods can work, there's a lot of friction and those enrichments aren't very efficient.

At the direction of my manager, I set out to design a comparison experience that would alleviate customer pain from these workarounds and give them more confidence in their product selections. One principle I kept in mind is that McMaster customers are very resistant to change and it is important to align designs to existing customer behavior where possible.

## Setting up the foundation.

Before jumping into designs, I created a project plan to give myself structure and set expectations for the leadership team. I laid out activities that followed the double diamond design process along with time estimates for each to hold myself accountable.

Then I began diving into the problem space, conducting initial quantitative research about customer behavior, and gathering 3rd party inspiration.

*[image caption] Snippet of the design plan in Notion*
*[image caption] A few mid-fidelity options I didn't move forward with*

## The ideation phase.

Based on the data I gathered, I realized that our site was blocking the popular 'CTRL+Click' shortcut to open links in new tabs which is a primary way that customers compare products. I immediately reached out to the engineering team to enable this functionality for a quick-win while I ideated on more robust solutions.

To help me diverge early on, I created several low-fidelity sketches along a spectrum that ranged from minimal, light-weight solutions to ideas that were more similar to traditional e-commerce comparison experiences.

After iterating on those concepts further and sharing mid-fidelity mockups with my manager and the design team, I decided to move forward with two ideas on opposite ends of the spectrum:

- Pinned Rows
- Compare Product Details

## Time to put my designs to the test.

After building interactive prototypes of each design option using Figma, I organized a research study where I sought to learn more about our customers' behaviors & motivations as well as test how effective each concept was at meeting user needs.

I set up research sessions with 5 current customers who had previously contacted us about wanting to more easily compare on McMaster.com. In those interviews, I asked them a series of discovery questions about themselves and how they use the site today then had them complete tasks using each prototype I created.

I used research best practices to ensure the test was unbiased (swapping the order in which prototype was shown to particpants for example) and followed up with a survey to record quantitative data which supported the qualitative insights.

*[image caption] This is participant #2, Bob, who is a Senior Designer at ClearSign Technologies. I learned that he actually prints off pages from the site to compare details side by side on his desk.*

*[figure] 183 / 120*

*[image caption] Research Synthesis (yellow stickies indicate key learnings)*

## Key findings from my research.

- Participants usually only compare when looking at unfamiliar products & mainly compare similar products within the same category.
- 4 out of 5 participants preferred the Pinned Rows concepts because of its "lightweight" nature and it didn't require them to navigate somewhere else.
- The same 4 participants suggested that both concepts could be combined for the best of both worlds.

## Refining designs based on findings.

Based on those insights above, I refined the design concepts in the following ways:

- Combined both approaches into a unified prototype. If further comparison is needed after pinning products, there's a link that sends them to the Compare Product Details page.
- Visual adjustments based on discoverability issues uncovered in testing. For example, animating the Pinned Items header when it appears and giving it more visual emphasis to make it more noticeable.
- Considered how this experience could work alongside other upcoming features on the site such as Collections, a way for customers to save products for later.

*[image caption] Updated design that features a link to compare the products' details and save them to a Collection*
*[image caption] Snippet of the review board*

## Reviewing design recommendations with leadership.

Using Miro, I presented my work to the leadership team which includes VPs from design, engineering, & product management to make the case for why a comparison experience would be valuable for McMaster customers.

I used the following structure to give them an overview of the project and gather their feedback:

- Background & context (problem statement, evidence, & project scope).
- Overview of both design concepts overlaid with customer feedback from research.
- The latest design iterations following research & how the experience can fit in the broader ecosystem of features.

Following the successful review, the leadership team added this project to the roadmap which will be piloted on the website to test its success before releasing to the broader customer base.

## Quote

> "I think in this [design review] meeting and your meeting with Amy and I, you have demonstrated that communicating your design decisions and your process are strengths of yours, which is fantastic!"
> — Patrice Payne, Director of Design

## Reflecting on this project.

This was my first opportunity to lead a design project from end to end at McMaster-Carr. I enjoyed the methodical nature of the process, which ranged from researching the opportunity space, framing the problem, designing a broad array of solutions, testing those ideas with customers, reviewing with stakeholders, then refining those designs.

My favorite part of this project was conducting the research study with real customers. It was enlightening to speak with our customers for the first time, learn about their motivations, and have them test my prototypes to show that we truly care about their experience and are actively working to improve our site. It was nice to bring some of the junior designers into those research sessions so they could learn more about the project and get experience with research interviews as well.

If I got the chance to start this project all over again, I would have:

- Diverged more early on so I could work from a broader set of ideas.
- Pushed on the boundaries of the scope and thought less about technical feasibility.
- Been more proactive with reaching out to other members of the organization to learn more about the business and our customers.

---

## Derived metadata

- Company: McMaster-Carr
- Role: User Experience Designer — first end-to-end project lead there
- Team: manager, design team, engineering team, junior designers (in research), VPs of design/engineering/product
- Research: 5 customers, prototypes in Figma, follow-up survey
- Tools: Figma, Miro, Notion
- Outcome: **added to the roadmap for pilot** — note this shipped as a validated recommendation, not a launched feature. No post-launch metrics exist; state this honestly rather than implying a launch.
