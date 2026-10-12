# Ads Reporting Experience — raw UXfolio content

Captured 2026-08-10 from https://uxfol.io/home/portfolios/mark-pachucki/p/348e10ea
Verbatim. Do not edit — this is the source of truth for the migration.

---

**Subtitle:** Redesigning and enhancing the way restaurants understand their ad's performance and offering recommendations to improve it.

## Some background on Delivery Hero and the role of AdTech.

Delivery Hero is a global food delivery platform that owns 17+ different food delivery brands across 70+ countries. At this scale, they process over 11 million orders per day (127 orders per second 🤯) making it the top food delivery company in the world.

However, profit margins are pretty slim in the food delivery business and they must rely on other revenue sources, such as advertising, to boost profitability.

AdTech is the main driver behind the company's profitability thanks to an average monthly revenue of €700 million. Within AdTech, I am the lead designer of the most valuable product, Sponsored Listings, which restaurants can use to promote their business in the apps.

## What were the problems with the original ad reporting page?

When I joined in 2023, we had a basic page in place for restaurant owners to view the performance of their ad. This included metrics like the number of orders they received through their ad and how much their ad generated in sales.

However, I identified quite a few visual design issues to improve and through research, I uncovered several unmet needs:

- Restaurant owners with limited ad experience found the page intimidating
- Experienced advertisers wanted to see aggregated performance across multiple campaigns & restaurants
- Experienced advertisers were missing several key metrics, breakdowns, and visualizations

## Adding a new "Reporting Landing Page" to the plugin

### What was the key challenge here?

A common challenge for us on the design & product teams at Delivery Hero is creating a product that's intuitive for small restaurant owners with limited technical knowledge but that's also advanced enough for massive chains of restaurants with advanced marketeers.

To address this challenge in the reporting experience, I proposed that we update the information architecture of our system and create a new page that provides a high level overview of ad performance. This new landing page would then link to more detailed reports for advanced users.

### How did I design this new reporting landing page?

I decided to separate the 3 different ad types using a toggle at the top of the page. I initially explored combining them into a single page, but each ad type serves a different purpose and since each type is created separately, it made sense to maintain that mental model in reporting as well.

The first section is a recommendation system that we created to provide ways for users to improve their ads. These "smart actions" make it easy for users to keep their ads running and this is also a key way that Delivery Hero can increase revenue from ads.

Finally, I created a summary that uses natural language to tell restaurant owners how much money their ads are earning them for every euro that's spent. This is especially helpful for less experienced restaurant owners to easily understand if their ads are worth what they pay for them.

## A quick overview of how the recommendation system works and its impact.

The concept of giving users recommendations on how to improve their ad performance had been talked about for a while, but now this was our opportunity to make this dream a reality.

I worked with my PM to identify a collection of 5 recommendations that we could provide. We then worked with the engineering team to create a "recommendation algorithm" that would suggest only the most applicable recommendations depending on the ad performance and prioritize the most impactful ones first.

The "add more budget" recommendation has been particularly beneficial for both restaurants and Delivery Hero's AdTech revenue. Over 1.1 million euros were added by restaurants around the world through that card in Q4 2024 🚀.

## Then it was time to focus on the detailed reporting page for the experts.

This detailed page came with it's own hurdles. We had a list of desired metrics and analysis from our target user group, however, simply adding a dozen new metrics and 4 new features to the existing page wasn't going to work.

I needed to rethink the layout of the entire page and how the information should be properly grouped to keep the design clear while telling a complete story of the advertising performance.

To start, I categorized all of metrics into logical groups. Instead of just a flat list, I separated them into a few different sections to create a story:

**Campaign details** — I moved this section to the top to make it clear to users which campaign they are viewing and elevate the most common action (Edit) to the top of the page.

**Sales** — How did my ad affect my business?

**Visibility** — How many people saw my ad and how many clicked it?

**Customer insights** — What kind of customers did my ad bring me?

**Conversion** — How effective was my ad in giving me more orders?

**Performance by area** — How did my ad perform across the different neighborhoods I serve?

After I validated those groups with users and internal stakeholders, I worked adding some new features like:

- Custom time range
- Downloading the report
- Comparing performance to a previous period

## Quote

> "Great feedback on the new ad reporting details page - Talabat CEO is super happy and loves it. Well done!"
> — Katrin Abwerzger, Director of Product Design

---

## Derived metadata

- Team: PM, engineering team, internal stakeholders
- Role: lead designer, Sponsored Listings
- Headline outcome: €1.1M added by restaurants via the "add more budget" recommendation in Q4 2024
- No stated duration — NEEDS INPUT
