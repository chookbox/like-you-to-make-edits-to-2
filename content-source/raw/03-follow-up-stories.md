# Follow-Up Stories — raw UXfolio content

Captured 2026-08-10 from https://uxfol.io/home/portfolios/mark-pachucki/p/0365dd60
Verbatim. Do not edit — this is the source of truth for the migration.

---

**Subtitle:** Building an AI-powered analytics experience for people to explore their data through language.

## An overview of Narrative Science and my role there.

Narrative Science (NS) was a pioneering AI company that transformed complex data into clear, human-readable narratives (stories). Its core technology, natural language generation (NLG), powered products that helped non-analysts understand business insights instantly without dashboards or manual analysis. The company was acquired by Salesforce in 2021 and is now part of Tableau's AI & analytics platform.

I joined as the 102nd employee and our small design team of 3 consisted of myself (Senior Designer), a Director, and a Junior Designer.

The company was very "engineering-led" since it was founded by some of the leading AI engineers at the time in 2010. As a design team, we often co-created with our engineering colleagues.

## Some background on Lexio.

Lexio was the flagship product of Narrative Science. Basically the company's "big bet" to replace complicated dashboards of data.

Similar other products from NS, it was designed to empower anyone to understand the key insights within complicated data sets by simply reading stories that are written using artificial intelligence.

Unlike their other products (which sat on top of BI Tools), Lexio was a SaaS offering that people could access from any computer, tablet, or mobile device.

Lexio turned data into interactive stories, written in plain English, making analytics easy & accessible for anyone. It was a revolutionary new way of using data that shook up the traditional analytics industry.

*[image caption] The original "story" experience*

## What was the problem with the original "story" experience?

While the current stories in Lexio were pretty captivating and a big achievement for the company, we still felt like something was missing.

On the right side was an area for users to "explore" and functioned pretty similar to a dashboard experience that we were trying to replace with Lexio. Users still had to know what questions to ask and then use dropdowns to look at different breakdowns and comparisons.

This worked pretty well for more analytical users but this product was built for non-data savvy folks like executives. How would they know what selections to make? How can we make stories richer and more intelligent for them?

## Follow-Up Stories began as a strategic initiative.

We needed to reinforce Lexio's core intellectual property (IP) as an intelligent data storytelling product.

We set out to accomplish this by:

- Allowing Lexio to recommend other Stories based on what the user is reading.
- Giving users a way to dig deeper and read more about something Lexio wrote.
- Establishing a "trail of record" based on what the user is reading so that Lexio's recommendations get smarter.

The key value this system would provide is empowering & guiding all people to explore and understand their data, not just analysts who know what kinds of questions to ask.

The main design challenge here is balancing intelligent automation with user trust and control.

## How did I start my design process?

The Follow-Up Stories engine had actually been in the works for a couple of months before I began on the user experience. Our engineering team was busy working on the underlying capabilities that would allow Lexio to support our vision for the future.

Before I began sketching out ideas, I needed to get a deep understanding of what this complex system would be capable of. I did this by teaming up with our Chief Scientist and working with him daily to establish a framework that we could all understand, not just our engineers.

This took the form of a visual "map" to illustrate how certain Stories & their components (measures, timeframes, etc.) could lead to others. This aligned all stakeholders from product to engineering and reach a common understanding. Before this was created, our teams were talking in circles about how the system should work.

## Sketching how Follow-Up Stories could come to life.

Once we had established the conceptual model and agreed upon how the system would work 'under the hood', it was time for me to begin sketching out possibilities of how it could appear for Lexio users.

I explored several interaction models & directions including:

- Serving up recommended stories in a modal vs. sidebar
- Showing Story titles only vs. preview content
- Keeping track of a user's "trail" via breadcrumbs vs. tabs
- How might users share stories with other and collaborate?

## Exploring UI options through mid-fidelity mockups.

After sketching out a variety of options on the whiteboard, I aligned on an approach that uses the right-side area to surface recommended Stories & leverages a tab system up top to help the users navigate between their Stories.

I then brought that concept into Sketch and began working through UI options using real Story content in mid-fidelity. This was a very fast iterative process and I was usually moving through several layouts per day resulting in hundreds of screens by the end of the project.

Once I got the general interactions & flow worked out, I stitched together several screens via InVision and moved onto the first user research study.

## What did I find through research?

After hosting a few sessions with Lexio users to test out a basic flow of moving between Stories, I uncovered the following insights:

- Users liked the overall layout with the main Story on the left and Follow-Up Stories on the right.
- However, users were hesitant to click Read More because they weren't sure what would happen.
- The Tab System was not easily discoverable but once users noticed it, it was an intuitive pattern and reminded users of web browsers.
- Some Stories had too many clickable phrases which caused an overwhelming feeling.
- The various Story "types" (Track, Breakdown, Compare, & Drivers) were welcomed and their purpose understood.

## Adjusting the design based on research findings and refining the visual design.

I made the following updates following the research sessions:

- Provided an affordance for users to 'expand' Follow-Up Stories and preview the Story content before "exploring".
- Updated the tab design to increase visibility and provide descriptive labels.
- Consolidated the number of phrases that are underlined to clean up the interface and make it more readable.
- Added a more descriptive label (What to read next) above Follow-Up Stories to make it more apparent to users what that area is for.
- Worked with our illustrator to create updated Story Type icons that communicate their purpose and are cohesive with Lexio's brand.

## Another important insight: the need for transparency & trust.

While I was mainly testing the usability and value of the follow-up stories system, I uncovered a tangential insight from users. When they read certain phrases like "bookings (sales) are $65k", it's important for them to trust that number. The old experience didn't have a way for users to check the underlying data. I noticed that when these same users would use Lexio on production themselves, they would sometimes flip back to the original data source (ex. Salesforce) to double check what Lexio was writing.

That's when I thought of the concept of "inspecting" some areas of Lexio's stories. With a simple underline, I indicated to users when they could click a phrase to then see the actual numbers and data behind it using a modal, as shown below.

This quickly became one of the most common interactions in Lexio stories and helped give users more comfort, confidence, and trust in what the AI was writing.

## Then it was time for implementation.

When it came down to implementation, we operated on a dual-track. I was in constant contact with the engineering team as I was designing the experience so they were able to build in lock step as I progressed.

I clearly communicated which features were "more complete" than most so they knew where to focus their efforts and avoid reworking the UI later.

This methodology kept us constantly moving forward and the new Follow-Up Stories experience was launched within about a month of when I was "design complete".

## Now let's see some stats.

- **7 Months** — Start to finish
- **6** — Users interviewed
- **279** — Sketch screens
- **94%** — Increase in average session duration

## Quotes

> "I was in a state of awe when I used Follow-Up Stories for the first time."
> — Disprz, Lexio Client

> "If you work in Chicago tech as a designer, you know about Lexio. I love the design and my team hears about it from me often."
> — Nate Burgos, Design Community Manager @ The New Bauhaus

## Reflecting on this project.

Follow-Up Stories was easily the most daunting & arduous project I've ever worked on for a combination of reasons:

- It is powered by an incredibly complex AI system.
- There were very few direct comparisons in the market to lean on.
- Lots of back & forth between stakeholders on how the system should behave.
- The majority of the work occurred at the onset of the pandemic.

I overcame these challenges by teaming up with the engineering team behind the system to create a visual map everyone could comprehend, taking "micro-inspiration" from a variety of products & services, getting stakeholder alignment through design iteration, and scheduling frequent check-ins with the broader team to validate my approach & reach the end state.

## What would I do differently?

- I would push for the visual diagram of the system first before working on the low fidelity UI designs. We spent a lot of time in the beginning talking about how the system's logic works using just the designs when it would have been easier with a diagram since it was closer to the "truth".
- I would have liked to be involved earlier in the process with engineering, even if it was just me listening in. I felt like I had to play catch up very quickly since the teams had been discussing this system for some time before I started.

---

## Derived metadata

- Company: Narrative Science (acquired by Salesforce 2021)
- Role: Senior Designer; design team of 3 (Mark, a Director, a Junior Designer)
- Key collaborator: Chief Scientist; engineering team; an illustrator
- Duration: 7 months
- Tools: Sketch, InVision
- Outcome: 94% increase in average session duration; the "inspect" interaction became one of the most common in Lexio
