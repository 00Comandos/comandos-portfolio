import type { CaseStudyContent, ContentImage } from "./types";
import { yaydooVendorplaceImages, requireImage } from "~/lib/image-map";

const img = (filename: string) => requireImage(yaydooVendorplaceImages, filename);

// ———— Hero ————
const heroImage: ContentImage = {
  kind: "image",
  image: img("Yaydoo-Vendorplace-comandos-project.png"),
  alt: "Yaydoo Vendorplace business overview — the redesigned canvas for Directors and Managers with Finance, Accounting, Payroll, Procurement and Sales unified into expense trends, por pagar / por cobrar tables and a taxes donut chart",
};

// ———— Challenge ————
const challengeImage: ContentImage = {
  kind: "image",
  image: img("comandos-yaydoo-vendorplace-mainpicture.png"),
  alt: "Yaydoo Vendorplace dashboard on a MacBook — the redesigned product-market-fit build showing accounts payable, receivables, sales and tax charts for Directors and Managers",
};

// ———— Adventure ————
const understandingImage: ContentImage = {
  kind: "image",
  image: img("yaydoo-vendorplace-2021-before-comandos.png"),
  alt: "Yaydoo Vendorplace dashboard in 2021 before the redesign — business overview with accounts payable, receivables and taxes inside the broader Yaydoo ecosystem Directors and Managers were inheriting",
  caption:
    "The Vendorplace dashboard in 2021 before the redesign — good information, little adoption.",
};

const userPersonaImage: ContentImage = {
  kind: "image",
  image: img("Yaydoo-Vendorplace-UserPersona-comandos-project.png"),
  alt: "Yaydoo Vendorplace Proto-Persona — Sahian Fernández, 30-year-old Director in Mexico, with needs, behaviours, concerns, attitudes and motivations mapped across a single canvas after two weeks of user interviews",
  caption:
    "Sahian Fernández — the Director Proto-Persona built after weeks of user interviews and coffee.",
};

const customerJourneyImage: ContentImage = {
  kind: "image",
  image: img("Yaydoo-Vendorplace-CustomerJourney-comandos-project.png"),
  alt: "Yaydoo Vendorplace user journey — end-to-end service blueprint from onboarding to invoice management, with highlighted friction moments and Aha-moment checkpoints across the Director flow",
  caption:
    "The fine-tuned user journey — each friction moment and Aha checkpoint mapped before we started iterating.",
};

const dashboardConfigImage: ContentImage = {
  kind: "image",
  image: img("Yaydoo-Vendorplace-Dashboard-comandos-project.png"),
  alt: "Yaydoo Vendorplace account-configuration screen — Cinco Ovnis S.A de C.V with mass invoice download, invoicing setup and Arcus payment method inside the redesigned admin area",
};

const experiment01Image: ContentImage = {
  kind: "image",
  image: img("Yaydoo-Vendorplace-ExperimentResult-01-comandos-project.png"),
  alt: "Yaydoo Vendorplace redesigned workspace — ¡Hey Antonia! dashboard with total por cobrar / por pagar, cuentas por cobrar and cuentas por pagar bar charts and freemium-upgrade banner",
};

const emailImage: ContentImage = {
  kind: "image",
  image: img("Yaydoo-Vendorplace-Email-comandos-project.png"),
  alt: "Yaydoo Vendorplace invitation email — ¡Felicidades! tu organización ha quedado registrada confirmation for Cinco Ovnis S.A de C.V with an invite-collaborators CTA and onboarding guidance",
};

const celebrationImage: ContentImage = {
  kind: "image",
  image: img("Yaydoo-Vendorplace-Celebration-comandos-project.png"),
  alt: "Yaydoo Vendorplace Aha moment — first-invoice celebration with confetti, copy-link share sheet, email-send form and Resumen de cobro card rewarding the Director on completion",
  caption:
    "The Aha moment — celebrated in-product every time a Director shipped their first invoice.",
};

const experiment02Image: ContentImage = {
  kind: "image",
  image: img("Yaydoo-Vendorplace-ExperimentResult-02-comandos-project.png"),
  alt: "Yaydoo Vendorplace usability-testing heatmaps — Prueba A vs Prueba B click flows on the movements table with the expected path annotated for the notas-de-venta filter task",
  caption:
    "Heatmap A/B usability test — tracking the expected path on the notas-de-venta filter task.",
};

// ———— Worth ————
const organizeImage: ContentImage = {
  kind: "image",
  image: img("Yaydoo-Vendorplace-Organize-comandos-project.png"),
  alt: "Yaydoo Vendorplace information architecture — the full redesigned product organized into 01 Registro, 02 Workspace, 03 Dashboard and 04 Dyno screens after 20 PMF iterations",
  caption:
    "The full Vendorplace IA after 20 iterations — Registro, Workspace, Dashboard and Dyno tied into one coherent flow.",
};

const mobileImage: ContentImage = {
  kind: "image",
  image: img("Yaydoo-Vendorplace-Mobile-comandos-project.png"),
  alt: "Yaydoo Vendorplace on mobile — 100% responsive redesign on three phones showing transaction-limit reminder, ¡Hey! resumen dashboard and Business-plan upgrade screen",
  caption:
    "The redesigned Vendorplace on mobile — 100% responsive, from freemium dashboard to Business upgrade in three screens.",
};

export const yaydooVendorplace: CaseStudyContent = {
  slug: "yaydoo-vendorplace",
  kicker: "FinTech — SaaS",
  brandLogo: {
    kind: "public",
    src: "/images/yaydoo-logo.svg",
    alt: "Yaydoo",
    height: 44,
  },
  hero: {
    image: heroImage,
    intro:
      "Yaydoo Vendorplace is a product that was born in a Design Thinking session. Its objective was to complement the Yaydoo suite from a visualization for Directors and Managers. With a focus on strictly simple processes, we helped to grow a product almost from scratch.",
  },
  challenge: {
    heading: "A product with Product-Market-Fit",
    body:
      "In combination with another product of the Yaydoo suite, Vendorplace offers Directors and Managers a quick and detailed view of their day-to-day business. After the company validated the product's MVP, the picture was bleak: good information but little adoption.",
    ctaLabel: "I want to grow as Yaydoo",
    results: [
      "+40% weekly registrations.",
      "+200K USD transacted in the first quarter of its launching.",
      "+15% conversion rate from Freemium.",
    ],
    team: [
      { label: "6 developers" },
      { label: "2 UX/UI designer" },
      { label: "1 Product Designer", badge: "by Comandos" },
      { label: "1 Customer Experience" },
      { label: "1 User Research" },
    ],
    image: challengeImage,
  },
  adventure: {
    heading: "Understanding Yaydoo Vendorplace",
    blocks: [
      { kind: "image", image: understandingImage },
      {
        kind: "heading",
        heading: "Getting ready: Where are we? and What will we need?",
        body:
          "Yaydoo Vendorplace had two major problems: A brand uniformity with respect to the company to which it belonged and a usability not designed for mobile. Although the objective was to give visibility to high-level profiles, there was no proto-persona or previous user research, which hindered the adoption of the product. In a context where Yaydoo's workforce grew +140% in less than 7 months, we knew we had to act quickly to grow conversion, Vendorplace usability and product adoption.",
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Seeing the mountain" },
      {
        kind: "heading",
        heading: "Where to start?",
        body:
          "With a complicated outlook and little time to reverse the results, we focused on 3 key opportunities:",
      },
      {
        kind: "checklist",
        items: [
          {
            label: "Product Adoption:",
            body: "When does the \"Aha moment!\" occur?",
          },
          {
            label: "Retention:",
            body:
              "Registrations are important, but more important is how many of you stay using the product.",
          },
          {
            label: "Referral program:",
            body:
              "Being at a very early stage, we aim at a referral program to enhance the quality network effect.",
          },
        ],
      },
      { kind: "divider", variant: "line" },
      {
        kind: "step",
        step: "STEP 01",
        heading: "Define a proto-persona + User Journey",
        body:
          "Focusing on a North Star Metric, we got down to work. We aligned with Product, Marketing and Customer Experience to define the obvious: what real problem are we solving? Who? Are we aware of the user journey + jobs-to-be-done?",
      },
      { kind: "image", image: userPersonaImage },
      { kind: "image", image: customerJourneyImage },
      {
        kind: "caption",
        text:
          "It didn't happen overnight, it took several weeks of user interviews to properly outline the proto-persona and fine tune the user journey. After a lot of coffee and experimentation, this was the result.",
      },
      { kind: "divider", variant: "line" },
      {
        kind: "step",
        step: "STEP 02",
        heading: "Experimentation and iteration",
        body:
          "With a team trained to be resilient to failure, we started creating experiments and a lot of user research. Many of the experiments didn't turn out the way we wanted but we learned a lot, with a Design System in place and increasingly anti-fragile it made us truly Agile.",
      },
      { kind: "image", image: dashboardConfigImage },
      { kind: "image", image: emailImage },
      { kind: "image", image: celebrationImage },
      {
        kind: "caption",
        text:
          "We celebrated with our users every progress, both for each job-to-be-done and for their level of transaction within Yaydoo Vendorplace. What backed it all up? Regular One-on-Ones and eyes on metrics.",
      },
      {
        kind: "intro",
        text:
          "Metrics can mislead you if you don't know how to approach them or focus on vanity metrics. Some of our key metrics are measured by tasks we needed the user to do to discover the Aha moment in less than 30 days. Here is a random example from the extensive iteration process of this product.",
      },
      { kind: "image", image: experiment01Image },
      { kind: "image", image: experiment02Image },
    ],
  },
  worth: {
    blocks: [
      { kind: "divider" },
      { kind: "chip", icon: "making-top", label: "Making top" },
      {
        kind: "intro",
        heading: "A better than expected result",
        body:
          "It took us about 6 months to build the product, after 20 iterations we achieved Product-Market-Fit. Although it took several weeks of iterations and experimentation, we were able to increase product adoption by 38% and retention after Freemium by 15%.",
      },
      { kind: "image", image: organizeImage },
      { kind: "image", image: mobileImage },
    ],
  },
  result: {
    heading: "A product that doubled its user registrations",
    stats: [
      {
        value: "100%",
        label: "responsive Design Product",
        caption:
          "Vendorplace shipped fully responsive from day one — desktop, tablet and mobile on the same Design System.",
        icon: {
          kind: "illustration",
          scene: "unify",
          alt: "Responsive design product",
        },
      },
      {
        value: "+40%",
        label: "productivity",
        caption: "Sustained +40% weekly registrations for 8 weeks after launch.",
        icon: {
          kind: "illustration",
          scene: "streak",
          alt: "Productivity — weekly registrations",
        },
      },
      {
        value: "45%",
        label: "retention in free plan",
        caption:
          "+15% conversion rate from Freemium and 45% retention on the free plan after the freemium window ended.",
        icon: {
          kind: "illustration",
          scene: "orbit",
          alt: "Retention in free plan",
        },
      },
    ],
  },
};
