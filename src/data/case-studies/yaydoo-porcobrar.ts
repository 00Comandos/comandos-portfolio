import type { CaseStudyContent, ContentImage } from "./types";
import { yaydooPorCobrarImages, requireImage } from "~/lib/image-map";

const img = (filename: string) => requireImage(yaydooPorCobrarImages, filename);

// ———— Hero ————
const heroImage: ContentImage = {
  kind: "image",
  image: img("Yaydoo-Vendorplace-comandos-project.png"),
  alt: "Yaydoo Vendorplace dashboard showing porCobrar inside the redesigned ecosystem — business overview with Por pagar, Por cobrar receivables, sales and tax charts unified in a single B2B canvas",
};

// ———— Challenge ————
const challengeImage: ContentImage = {
  kind: "image",
  image: img("comandos-yaydoo-porCobrar-mainpicture.png"),
  alt: "Yaydoo porCobrar financial-logbook dashboard on a MacBook — accounts receivable, invoice pipeline and cash-flow charts used by a Mexican SMB finance team",
};

// ———— Adventure ————
const understandingImage: ContentImage = {
  kind: "image",
  image: img("yaydoo-vendorplace-2021-before-comandos.png"),
  alt: "Yaydoo Vendorplace dashboard in 2021 before the redesign — business overview with accounts payable, receivables and taxes inside the broader Yaydoo ecosystem that porCobrar lived in",
  caption:
    "The Yaydoo Vendorplace ecosystem in 2021 — the Mexican B2B SMB receivables, payables and tax context porCobrar was inheriting before the Comandos redesign turned it into a standalone cash-collection product.",
};

const userPersonaImage: ContentImage = {
  kind: "image",
  image: img("Yaydoo-porCobrar-UserPersona-comandos-project.png"),
  alt: "Yaydoo porCobrar Proto-Persona — Emilio Jiménez, 33-year-old restaurant owner in Mexico City, with needs, behaviours, frustrations, attitudes and motivations mapped across a single canvas",
  caption:
    "Emilio Jiménez — the small-business owner Proto-Persona built after two weeks of client and user research.",
};

const task01Image: ContentImage = {
  kind: "image",
  image: img("Yaydoo-porCobrar-01-comandos-studio-task.png"),
  alt: "Yaydoo porCobrar create-invoice flow — selecting a client, entering invoicing data and payment conditions with the trial-upgrade banner visible at the top",
};
const task02Image: ContentImage = {
  kind: "image",
  image: img("Yaydoo-porCobrar-02-comandos-project-invoice.png"),
  alt: "Yaydoo porCobrar invoice detail — Factura #225 with pending balance, payment history, contract link and ISR / IVA breakdown for Sterling Cooper S.A. de C.V.",
};
const task03Image: ContentImage = {
  kind: "image",
  image: img("Yaydoo-porCobrar-03-comandos-studio-productLedGrowth.png"),
  alt: "Yaydoo porCobrar product-led growth onboarding — ¡Hola, José Luis! welcome screen with six guided tasks to reach the Aha moment on the first session",
  caption:
    "Six guided tasks surface porCobrar's Aha moment on the first session — the backbone of the product-led growth loop.",
};

const report01Image: ContentImage = {
  kind: "image",
  image: img("Yaydoo-porCobrar-report01-comandos-studio-resultOfUsability-test.png"),
  alt: "Yaydoo porCobrar usability-test report — Portal de clientes mission 2: 80% direct success, 0% indirect, 20% rebote and a 31.6-second average completion time across four users",
  caption:
    "Mission-2 usability test — 80% direct success on the invoice-registration task.",
};
const report02Image: ContentImage = {
  kind: "image",
  image: img("Yaydoo-porCobrar-report02-comandos-studio-resultOfTesting.png"),
  alt: "Yaydoo porCobrar usability testing — Subir comprobante de forma manual bar chart showing time-to-complete against the number of errors per attempt",
};
const report03Image: ContentImage = {
  kind: "image",
  image: img("Yaydoo-porCobrar-report03-comandos-studio-resultOftesting.png"),
  alt: "Yaydoo porCobrar satisfaction ratings — Del 1 al 5 ease-of-use bar chart with a 3.8 average across five rating buckets",
};

// ———— Worth ————
const mobileImage: ContentImage = {
  kind: "image",
  image: img("Yaydoo-porcobrar-mobile.png"),
  alt: "Yaydoo porCobrar on mobile — 100% responsive redesign on three phones showing revolutionised onboarding, invoice inbox and invoice-send confirmation",
  caption:
    "The redesigned porCobrar on mobile — 100% responsive, from onboarding to invoice send in three screens.",
};

export const yaydooPorCobrar: CaseStudyContent = {
  slug: "yaydoo-porcobrar",
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
      "Yaydoo porCobrar is a product that had been on the market for 2 years at the time we went into action. Improving its user experience and making more companies want to use it as their financial logbook was a big challenge considering that we had 3 months to have tangible results.",
  },
  challenge: {
    heading: "Restructuring a great product",
    body:
      "Yaydoo forCharge was the company's first product-market-fit product and restructuring it was an imperative need. But how to improve the user experience without affecting the existing users who were already accustomed to using it? was our first concern.",
    ctaLabel: "I want to grow as Yaydoo",
    results: [
      "+20% weekly registrations.",
      "+15M USD transacted in first quarter of its upgrade.",
      "+33% retention once Freemium ends.",
    ],
    team: [
      { label: "6 developers" },
      { label: "1 UX/UI designer" },
      { label: "1 Product Designer", badge: "by Comandos" },
      { label: "1 User Research" },
    ],
    image: challengeImage,
  },
  adventure: {
    heading: "Understanding Yaydoo porCobrar",
    blocks: [
      { kind: "image", image: understandingImage },
      {
        kind: "heading",
        heading: "Getting ready: Where are we? and What will we need?",
        body:
          "Yaydoo forCharge had a big problem: all the teams involved in its development did not collaborate effectively with each other. In addition to the lack of a clear user-persona and service blueprint, it made all the efforts to grow the product like plowing through the sea. All this context occurs at a time when Yaydoo raises its Series A of USD 20M and Yaydoo's workforce grew +140% in less than 7 months — we knew we had to act quickly to grow conversion, usability of porCobrar and above all user retention.",
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Seeing the mountain" },
      {
        kind: "heading",
        heading: "Where to start?",
        body:
          "The weather towards the finish looked tricky, but we put on our climbing gear and focused on 3 key opportunities:",
      },
      {
        kind: "checklist",
        items: [
          {
            label: "Product Adoption:",
            body:
              "Start by mapping all errors and bugs that were reported by users.",
          },
          {
            label: "Retention:",
            body:
              "What are the necessary jobs-to-be-done? What was the first aha! moment?",
          },
          {
            label: "Usability:",
            body:
              "How much could we improve user usability so that the end user would dare to try another Yaydoo product?",
          },
        ],
      },
      { kind: "divider", variant: "line" },
      {
        kind: "step",
        step: "STEP 01",
        heading: "Define a proto-persona + user journey",
        body:
          "We defined a North Star Metric and clear work processes that allowed us to align Product, Engineering, Marketing and Customer Experience to define the obvious: what real problem are we solving? Who? Are we aware of the user journey and jobs-to-be-done?",
      },
      { kind: "image", image: userPersonaImage },
      { kind: "divider", variant: "line" },
      {
        kind: "step",
        step: "STEP 02",
        heading: "Constant experimentation and iteration",
        body:
          "Working as a SEAL Elite team, we started creating experiments and a lot of user research. Many of the experiments did not come to fruition but left us with invaluable user insights; with a Design System in place and increasingly anti-fragile, we became truly Agile.",
      },
      {
        kind: "intro",
        text:
          "Our focus: to take the key points of the user-journey and make them super transparent in the information to be managed and super easy to use.",
      },
      { kind: "image", image: task01Image },
      { kind: "image", image: task02Image },
      { kind: "image", image: task03Image },
      {
        kind: "intro",
        text:
          "This was the result of 10+ experiments and tests with users. We created a habit of taking one day a week to talk to users. This also helped us to restructure our whole pricing scheme after interesting findings.",
      },
      {
        kind: "intro",
        text:
          "Metrics can mislead you if you don't know how to approach them or focus on vanity metrics. Some of our key metrics are measured by tasks we needed the user to do to discover the Aha moment in less than 30 days. Here is a random example from the extensive iteration process of this product.",
      },
      { kind: "image", image: report01Image },
      { kind: "image", image: report02Image },
      { kind: "image", image: report03Image },
    ],
  },
  worth: {
    blocks: [
      { kind: "divider" },
      { kind: "chip", icon: "making-top", label: "Making top" },
      {
        kind: "intro",
        heading: "A great result in a very short time",
        body:
          "It took us about 6 months to build the product, but within the first 3 months we could already see the first changes — after 15 iterations we were able to improve the Product-Market-Fit. Although it took several weeks of iterations and experimentation, we managed to increase retention by 33%.",
      },
      { kind: "image", image: mobileImage },
    ],
  },
  result: {
    heading: "A restructured product that earned its growth",
    stats: [
      {
        value: "+40%",
        label: "new user registrations",
        caption: "In the first 30 days after the porCobrar redesign shipped.",
        icon: {
          kind: "illustration",
          scene: "launch",
          alt: "New user registrations",
        },
      },
      {
        value: "+15M",
        label: "USD transacted",
        caption: "In the first quarter after the porCobrar upgrade.",
        icon: { kind: "illustration", scene: "rise", alt: "Transaction volume" },
      },
      {
        value: "45%",
        label: "retention in free plan",
        caption: "Users kept using porCobrar after their freemium window ended.",
        icon: {
          kind: "illustration",
          scene: "retention",
          alt: "Retention in free plan",
        },
      },
    ],
  },
};
