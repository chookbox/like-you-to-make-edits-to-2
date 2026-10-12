/**
 * The "Other Work" projects, migrated verbatim from the UXfolio page.
 *
 * These are deliberately NOT in the `work` content collection. That collection
 * enforces a case study arc — reframe, outcome, reflection — and these are short
 * structured entries with a role, a timeline and a result. Forcing them through
 * that template would either pad them out or weaken the schema for everything
 * else. A typed list is the honest shape.
 *
 * `company` is derived from each project's title and subject matter; it isn't
 * stated as a separate field in the original.
 */

export interface OtherWorkProject {
  title: string;
  company: string;
  timeline: string;
  summary: string;
  role: string;
  result: string;
  /** Imported in the page so Astro can optimize it; filename only here. */
  image: string;
  imageAlt: string;
  /**
   * Put the image in its own narrow column beside the text instead of below it.
   * For tall portrait artifacts — a guidelines document, a component spec —
   * where cropping to a wide band would hide most of the page.
   */
  imageAside?: boolean;
}

export const OTHER_WORK_PROJECTS: OtherWorkProject[] = [
  {
    title: "Chart Guidelines",
    imageAside: true,
    company: "Delivery Hero",
    timeline: "3 months",
    summary:
      "I led the reporting workstream within the design team where we crafted how reporting pages and dashboards at Delivery Hero should be designed. One key deliverable from our workstream was Chart Guidelines that provide a framework for data visualization.",
    role: "As the leader of this workstream of 5 designers, I created an outline and structure for these guidelines for the other members to help me fill out. I began by collecting all the current charts across our restaurant portal and created basic guidelines for when to use each type and the specs of how they should look. After we published our guidelines, I worked alongside engineers to apply these guidelines to our global chart library.",
    result:
      "An interactive Figma prototype that anyone at the company can easily access and learn about which chart is best for their use case, how it should look, and its interactions.",
    image: "chart-guidelines.png",
    imageAlt:
      "A Chart Guidelines document showing bar chart variants, each paired with notes on when to use it and how it should look.",
  },
  {
    title: "Star Rating Component",
    imageAside: true,
    company: "Delivery Hero",
    timeline: "2 months",
    summary:
      "In 2024, a design team at Delivery Hero set out to create a new design system to unite all of its products around the world and raise the bar on their design language. As part of this effort, they recruited designers from around the company to help build this system.",
    role: "I was a contributor to the new design system and it was my responsibility to create and launch a Star Rating component for users on Delivery Hero's apps so they can rate restaurants and their other experiences on the app. I researched benchmarks, collected use cases, and created detailed specs for this component including animations.",
    result:
      "A dev-ready Star Rating component for any team at the company to implement quickly and easily. I also wrote detailed documentation so designers know when to use which variants of the component for their use cases.",
    image: "star-rating.png",
    imageAlt:
      "A component anatomy page for the Star Rating component, documenting its basics, sizes and the variants of rating and rating-tag components.",
  },
  {
    title: "Design Handbook",
    company: "McMaster-Carr",
    timeline: "3 months",
    summary:
      "Despite having an excellent, design-centric culture, McMaster had never formally published design standards until recently. In order to design more effectively, it's essential to have a shared understanding of your users and their needs as well as the objectives of the company.",
    role: "Worked alongside the design leadership team to outline and create the structure of the handbook. I personally created the design process and principles pages which outline the design process at McMaster and describe the design principles of the organization along with examples that embody those principles.",
    result:
      "A handbook that establishes process, brand, and design principles that compel designers to create solutions that delight, while providing the guardrails to ensure that designs work together to create a unified and recognizable experience.",
    image: "design-handbook.png",
    imageAlt:
      "A design principle page headed \"support experts and novices alike\", with the principle explained and annotated product examples beneath.",
  },
  {
    title: "Customer Journey Map of Lexio",
    company: "Narrative Science",
    timeline: "2 months",
    summary:
      "Bits & pieces of Lexio's customer journey only existed in people's heads and there was no single source of truth for us to collaborate on & improve. In early 2020, I set out to fix that.",
    role: "Organized various meetings across departments (Sales, Marketing, Operations, Client Service) to gather input on the Lexio Journey as it existed currently and then worked with the design team to organize the content of the map in a logical way. I then built out this digital map in Sketch, presented it to the various teams for review & feedback, and finalized the map with an accurate representation of what customers are thinking & feeling along the journey. I shared this map with the engineering teams to get everyone aligned on the current process and gathered feedback.",
    result:
      "A holistic view of the entire Lexio user journey that enabled all of us to zoom out and see which areas needed the most improvement. This allowed us to focus on the most impactful aspects and we set out to improve this journey in a variety of ways, from product messaging to data setup.",
    image: "journey-map.png",
    imageAlt:
      "The Lexio customer journey map as a wide swim-lane chart, with phases across the top and an emotion curve running through the middle.",
  },
  {
    title: "Quill Tableau Extension",
    company: "Narrative Science",
    timeline: "1 month",
    summary:
      "Quill is one of Narrative Science's older products. It's an extension that integrates into many of the most popular BI tools and brings data storytelling directly to existing dashboards. The Tableau version needed a redesign to comply with their new standards.",
    role: "Performed a heuristic evaluation of the current tool and identified key areas of improvement. I then redesigned each area of the extension in accordance with Tableau's latest extension standards while also improving the overall experience of the product. Lastly, I gathered stakeholder feedback on the new experience, made some final tweaks, and worked with engineers to build out the update.",
    result:
      "A dramatically improved experience of Narrative Science's most popular product which boosted sales and increased user engagement.",
    image: "quill.png",
    imageAlt:
      "A Tableau dashboard with the Quill extension panel open beside profitability charts and a measure selector.",
  },
  {
    title: "Flash",
    company: "Nielsen",
    timeline: "6 months",
    summary:
      "This system facilitates the on-boarding process (scheduling meetings, building orders, signing contracts etc.) for new clients.",
    role: "Designed a system that replaces the manual sales workflow and increases new client sales & leads.",
    result:
      "80% improvement in lead retention, increased revenue, and an improved workflow process for the sales team.",
    image: "nielsen-flash.jpeg",
    imageAlt:
      "A scheduling screen offering available time slots to book a call with a Nielsen representative.",
  },
  {
    title: "Music Connect",
    imageAside: true,
    company: "Nielsen",
    timeline: "2 weeks",
    summary:
      "This product displays a wide variety of music data (sales, streaming, social shares, radio plays, etc.) in an intuitive way for users to gain key insights from the music industry.",
    role: "Quickly built a prototype to be presented to Nielsen leadership in order to convince them to build Music Connect in-house as opposed to going with a 3rd party vendor.",
    result:
      "The Music Connect prototype was demoed to senior leadership with great success. Nielsen decided to build the product in-house and Music Connect is now a highly successful product.",
    image: "music-connect.jpeg",
    imageAlt:
      "The Music Connect interface showing an artist profile alongside sales, streaming, airplay and social metrics.",
  },
  {
    title: "Insight Studio Landing Page",
    company: "Nielsen",
    timeline: "2 months",
    summary:
      "Insight Studio is one of the most popular apps on Nielsen's data platform. The landing page needed a redesign based on user feedback and engagement metrics.",
    role: "Redesigned the landing page from the ground up taking inspiration from other popular business tools.",
    result:
      "A captivating experience that provides a great first impression along with easy ways for users to access their favorite reports & dashboards or create new ones. This led to better user engagement and higher feedback scores.",
    image: "insight-studio.png",
    imageAlt:
      "The Insight Studio landing page, with a Get Started with a Template row above a grid of all reports and dashboards.",
  },
  {
    title: "Platform Usage Tracking",
    company: "Nielsen",
    timeline: "1 month",
    summary:
      "With Nielsen's latest platform going live, their leadership team needed a way to keep tabs on its overall usage and measure how successful the launch was.",
    role: "Designed a simple, yet powerful dashboard that gives an overview of key usage data for the platform.",
    result:
      "An executive summary for Nielsen's leadership team to check frequently and stay up to date on the latest metrics which allowed them to take action where needed.",
    image: "usage-tracking.png",
    imageAlt:
      "An executive summary dashboard with panels for users, apps, reports, stories, sessions and notifications.",
  },
  {
    title: "API Guide",
    company: "Nielsen",
    timeline: "6 months",
    summary:
      "This application guides a user through the process of building an API that provides Nielsen data in real-time.",
    role: "Designed a guided experience that makes it easy for clients to build a Nielsen API to get the data they need.",
    result:
      "APIs that tap directly into Nielsen data are naturally complex. This streamlined experience empowers clients to create their own APIs that deliver data directly to their own BI tools.",
    image: "api-guide.png",
    imageAlt:
      "A guided API builder headed Select products for your API call, with a product tree on the left and the current selection on the right.",
  },
];
