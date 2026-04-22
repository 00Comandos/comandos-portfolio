import type { CaseStudyContent, ContentImage } from "./types";
import { truoraReportImages, requireImage } from "~/lib/image-map";

const img = (filename: string) => requireImage(truoraReportImages, filename);

// ———— Hero ————
const heroImage: ContentImage = {
  kind: "image",
  image: img("truora-background-check-report.webp"),
  alt: "Truora Background Check Report hero — a Colombian hiring manager greeting a candidate with a people-consultation card overlay showing a clean People Consultation score, the LATAM identity-verification report HR, banks and gig platforms use to approve new hires across Mexico, Colombia and Brazil",
};

// ———— Challenge ————
const challengeImage: ContentImage = {
  kind: "image",
  image: img("Truora-reading-background-check-report.webp"),
  alt: "Hands holding a laptop showing the redesigned Truora background check report with categories and scores",
};

// ———— Adventure ————
const problemsImage: ContentImage = {
  kind: "image",
  image: img("truora-problems-bgc-2048x853.webp"),
  alt: "The three problems identified on the current report — BGC reporting not clear (8/10 clients), technical data difficult to interpret (8/10 clients), 8 min+ reading time (6/10 clients)",
};

const opportunitiesImage: ContentImage = {
  kind: "image",
  image: img("truora-backgroundCheck-current-problem.webp"),
  alt: "Truora legacy Background Check Report opened in-browser next to a Camilo Villafaña customer quote — the raw, technical report layout LATAM HR analysts struggled to interpret before the Comandos redesign, with an 8-minute read time that drove the rewrite of the whole deliverable",
};

const firstIterationImage: ContentImage = {
  kind: "image",
  image: img("truora-backgorundCheck-firs-Iteration.webp"),
  alt: "Truora Background Check Report confidence-score iterations — three design explorations of the single headline metric (Confidence level → High confidence) with the renewed LATAM report sample below, the at-a-glance HR summary that replaced raw technical data in the redesign",
};

const interviewImage: ContentImage = {
  kind: "image",
  image: img("Truora-interview.webp"),
  alt: "Product team in a brick-walled room running workshops, with a floating badge showing +8k interviews, usability testing and production experiments",
};

const redesignMainImage: ContentImage = {
  kind: "image",
  image: img("Truora-background-checks-redesign-ReportChecks-2048x944.webp"),
  alt: "Complete redesigned Truora report — cover page with profile info and the checks detail screen with colour-coded categories",
};
const redesign01Image: ContentImage = {
  kind: "image",
  image: img("Truora-BGC-ReportChecks-redesign01-2048x768.webp"),
  alt: "Redesign highlights — identidad personal, criminal and legal rows, a woman reading the report at a café, and the consulted databases QR panel",
};
const redesign02Image: ContentImage = {
  kind: "image",
  image: img("Truora-BGC-ReportChecks-redesign02-2048x618.webp"),
  alt: "Detail view of the redesigned consulta card with global score, confidence gauge and colour-coded category rows",
};

const heatmapImage: ContentImage = {
  kind: "image",
  image: img("truora-headmap-backgroundCheck-report-2048x1492.webp"),
  alt: "Two usability heatmaps of the redesigned report side by side — 92.7% of users read the entire document",
  caption: "92.7% of users read the entire document.",
};

// ———— Worth ————
const beforeAfterImage: ContentImage = {
  kind: "image",
  image: img("Truora-backgroundCheck-BeforeAndAfter-2048x1280.webp"),
  alt: "Before-and-after of the Truora report — original version on the left in lavender, redesigned version on the right in mint green",
};

export const truoraReport: CaseStudyContent = {
  slug: "truora-report",
  kicker: "Fraud — SaaS",
  brandLogo: {
    kind: "public",
    src: "/images/Truora-Logo.svg",
    alt: "Truora",
    height: 32,
  },
  hero: {
    image: heroImage,
    intro:
      "Truora's background validation report, like others in the market, was difficult for non-technical users to understand.",
  },
  challenge: {
    heading: "Improving an existing product",
    body:
      "Properly defining the problem was tricky. We focused on the following question: How can a PDF report have an impact on the business?",
    ctaLabel: "I want to grow as Truora",
    results: [
      "-50% less reading time.",
      "+85% more satisfaction.",
      "+30% more efficiency (comprehension of information).",
      "92.7% of users read the entire document.",
    ],
    team: [
      { label: "2 developers" },
      { label: "2 product designer", badge: "by Comandos" },
      { label: "2 Customer Experience" },
    ],
    image: challengeImage,
  },
  adventure: {
    heading: "Defining top 3 challenges identified from the current report",
    blocks: [
      { kind: "image", image: problemsImage },
      {
        kind: "heading",
        heading: "Getting ready: Where are we? and What will we need?",
      },
      {
        kind: "checklist",
        items: [
          {
            label: "Super simplified reporting:",
            body:
              "Reducing the complexity of the report and making it more accessible in its interpretation will improve clients' decision making.",
          },
          {
            label: "Continuous monitoring:",
            body:
              "It is important to make clear the databases consulted and available during the verification process.",
          },
          {
            label: "Key facts:",
            body:
              "What is the real priority for users? We must prioritize it in the reading and facilitate its interpretation.",
          },
        ],
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Seeing the mountain" },
      {
        kind: "heading",
        heading: "Discovering opportunities for impact",
        body:
          "After hitting the neurons, we identified 3 opportunities that help us make a positive impact.",
      },
      { kind: "spacer", size: "md" },
      { kind: "image", image: opportunitiesImage },
      { kind: "spacer", size: "md" },
      {
        kind: "checklist",
        items: [
          {
            label: "Numbers of pages:",
            body:
              "A \"clean\" Background Check resulted in eight pages without useful content. This led users to underestimate the report due to a lack of meaningful information.",
          },
          {
            label: "Value proposition of the report:",
            body:
              "These reports legally support recruitment processes and legal procedures; therefore, they must be accurate and concise, facilitating analysis and decision-making.",
          },
          {
            label: "Clear scores:",
            body:
              "100% of users from different countries did not understand the scores in the current reports.",
          },
        ],
      },
      { kind: "divider", variant: "line" },
      {
        kind: "heading",
        heading: "We start iterating the confidence score",
        body: "We began with a focus on making low-effort, high-impact corrections.",
      },
      { kind: "image", image: firstIterationImage },
      { kind: "intro", text: "In the first week-long iteration, we achieved the following:" },
      {
        kind: "checklist",
        items: [
          {
            label: "15% less pages:",
            body:
              "We improved the information architecture, but we still needed to improve clarity.",
          },
          {
            label: "7% score improvement:",
            body: "Users mention that the new score is more understandable.",
          },
        ],
      },
      { kind: "divider" },
      {
        kind: "heading",
        heading:
          "During the process, combining surveys, A/B testing and short experiments in production, we interacted with more than 8,000 users.",
      },
      { kind: "image", image: interviewImage },
      { kind: "divider" },
      {
        kind: "heading",
        heading: "We understood that small corrections did not generate big results",
        body:
          "We opted for a total redesign, transforming the experience from the ground up. It meant redoing many things from scratch. We had 30 days to make a big impact, and we only had three weeks left.",
      },
      { kind: "image", image: redesignMainImage },
      { kind: "divider" },
      { kind: "chip", icon: "making-top", label: "Making top" },
      {
        kind: "heading",
        heading: "We take all the insights and create something unique.",
      },
      { kind: "image", image: redesign01Image },
      { kind: "image", image: redesign02Image },
      {
        kind: "checklist",
        items: [
          {
            label: "69% less pages:",
            body:
              "We simplified the structure of the report, eliminating unnecessary technical information to improve clarity and understanding.",
          },
          {
            label: "100% component redesign:",
            body:
              "Intuitive graphics and visual labels highlight key information instantly.",
          },
          {
            label: "147% more effective:",
            body:
              "Users can make informed decisions more quickly and accurately.",
          },
        ],
      },
      { kind: "divider", variant: "line" },
      {
        kind: "heading",
        heading: "More than 8k users put our design to the test",
      },
      { kind: "image", image: heatmapImage },
    ],
  },
  worth: {
    blocks: [
      { kind: "big-heading", heading: "A great result in less than 30 days" },
      { kind: "image", image: beforeAfterImage },
    ],
  },
  result: {
    heading: "Results? More intuitive and effective report",
    stats: [
      {
        value: "-50%",
        label: "less reading time",
        caption: "Users understand the report in half the time.",
        icon: {
          kind: "illustration",
          scene: "progress",
          alt: "Less reading time",
        },
      },
      {
        value: "+85%",
        label: "more satisfaction",
        caption: "Better perceived clarity and ease of use.",
        icon: {
          kind: "illustration",
          scene: "love",
          alt: "More satisfaction",
        },
      },
      {
        value: "+99%",
        label: "optimized accuracy",
        caption: "More accurate validations with prioritized information.",
        icon: {
          kind: "illustration",
          scene: "certified",
          alt: "Optimized accuracy",
        },
      },
    ],
  },
};
