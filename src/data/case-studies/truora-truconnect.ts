import type { CaseStudyContent, ContentImage } from "./types";
import { truoraTruConnectImages, requireImage } from "~/lib/image-map";

const img = (filename: string) => requireImage(truoraTruConnectImages, filename);

// ———— Hero ————
const heroImage: ContentImage = {
  kind: "image",
  image: img("truora-truConnect.png"),
  alt: "Truora TruConnect metrics dashboard — total conversations, conversion funnel and effectiveness charts on a green frame",
};

// ———— Challenge ————
const challengeImage: ContentImage = {
  kind: "image",
  image: img("comandos-truora-truconnecttu-primer-proyecto.png"),
  alt: "Your first project — the TruConnect canvas showing a conversation flow with simple blocks, multiple answers, user verification and finish nodes",
};

// ———— Adventure ————
const whereWeStandImage: ContentImage = {
  kind: "image",
  image: img("Why-truConnect.png"),
  alt: "Conversion funnel — 100% sessions → 14.55% complete onboarding → 9% reactivated users, with direct sessions, users leaving, users completing and reactivation legend",
};
const uxProcess01Image: ContentImage = {
  kind: "image",
  image: img("truConnect-UX-process-01.png"),
  alt: "First UX experiments — early chatbot conversation frames alongside a branching flow diagram with multiple answers and city-of-residence question",
};
const uxProcess02Image: ContentImage = {
  kind: "image",
  image: img("truConnect-UX-process-02.png"),
  alt: "Information-architecture experiment — Resumen conversaciones bar chart next to an Efectividad de la conversación flow with conversion percentages",
};
const componentsImage: ContentImage = {
  kind: "image",
  image: img("TruConnect-Components.png"),
  alt: "Expanded TruConnect dashboard — metrics, conversations overview, schedule chart and validated-results breakdown, with Simulate and Deploy actions",
};

// ———— Worth ————
const resultMainImage: ContentImage = {
  kind: "image",
  image: img("Spotfinder-Main1.png"),
  alt: "Final MVP screen — TruConnect ready for pilots with the main dashboard and controls in production",
};

export const truoraTruConnect: CaseStudyContent = {
  slug: "truora-truconnect",
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
      "Truora TruConnect is a tool that, integrated with the most used messaging chat in the world (WhatsApp), allows you to create conversations with chatbots for the processes you want.\n\nCreating automated onboardings, reactivating users and improving the entire acquisition funnel by including biometric verification services is no longer impossible.",
  },
  challenge: {
    heading: "Expedite a new product",
    body:
      "We are using more and more instant communication and emails are lagging behind, making onboarding processes more difficult. How can Truora help to solve this problem?",
    ctaLabel: "I want to grow as Truora",
    results: [
      "MVP of a new product in less than 3 months.",
      "+20 successful pilots.",
      "+30% user reactivation.",
    ],
    team: [
      { label: "4 developers" },
      { label: "1 product designer", badge: "by Comandos" },
      { label: "2 Customer Experience" },
    ],
    image: challengeImage,
  },
  adventure: {
    heading: "Where do we stand?",
    blocks: [
      { kind: "image", image: whereWeStandImage },
      {
        kind: "heading",
        heading: "Getting ready: Where are we? and What will we need?",
        body:
          "We have observed that many transportation companies have an abrupt drop of clients in their onboarding processes in their services, taking into account that their new users must send additional information that many times they do not have at hand and they forget to provide it. Considering that on average 15% of users complete this type of process, we knew that we had to focus on optimizing the conversion and the quality of the conversation they were having with the Company Customers.",
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Seeing the mountain" },
      {
        kind: "heading",
        heading: "Discovering opportunities for impact",
        body:
          "After hitting the neurons, we identified 3 opportunities that help us make a positive impact.",
      },
      {
        kind: "checklist",
        items: [
          {
            label: "Conversation habits of users:",
            body: "Where do they spend their time talking?",
          },
          {
            label: "Leads acquisition:",
            body:
              "Do Growth teams know of reliable lead tracking tools for chat conversations?",
          },
          {
            label: "Social Selling:",
            body:
              "Does the adoption of this new product generate enough confidence and could it be a competitive advantage for Growth teams?",
          },
        ],
      },
      { kind: "divider", variant: "line" },
      {
        kind: "heading",
        heading: "Experiment 01: How are conversations created?",
        body:
          "We quickly realized that this was a key point. Creating and diagramming conversations with potential users or prospects was a fundamental part, we created several versions and tested their usability with Growth professionals.",
      },
      {
        kind: "image-grid",
        columns: 2,
        images: [uxProcess01Image, uxProcess02Image],
      },
      {
        kind: "caption",
        text:
          "First approaches from UX to understand the mental model of users and to be able to establish a pattern in which any person, regardless of their academic background, could create and modify conversations.",
      },
      { kind: "divider", variant: "line" },
      {
        kind: "heading",
        heading: "Experiment 02: What information is relevant and how to measure it?",
        body:
          "We refer to the user of this product. How to present the information? What information is relevant?",
      },
      { kind: "image", image: componentsImage },
      {
        kind: "intro",
        text:
          "Understanding users' habits and routines was key to always displaying the necessary information. Everything revolved around always having at hand which part of the conversation the prospects were falling into in order to act quickly.",
      },
    ],
  },
  worth: {
    blocks: [
      { kind: "chip", icon: "making-top", label: "Making top" },
      {
        kind: "intro",
        heading: "The result was awesome",
        body:
          "After 2 months and 2 weeks, we had the new MVP ready to test with 20 pilots. It required 3 iterations that allowed us to deliver and validate a product that quickly reached its own Product-Market-Fit.",
      },
      { kind: "image", image: resultMainImage },
      {
        kind: "checklist",
        items: [
          { label: "+20 pilots in less than 3 weeks." },
          {
            label: "Leads acquisition:",
            body:
              "In existing customer conversations, during the pilots we managed to reactivate +30% of the conversations and successfully complete them.",
          },
          {
            label: "Social Selling:",
            body:
              "We generated the necessary empowerment in the clients that the result was incredible. Truora implemented a similar strategy with Hubspot.",
          },
        ],
      },
    ],
  },
  result: {
    heading: "Truora TruConnect reached Product-Market-Fit in under 3 months",
    stats: [
      {
        value: "<3 months",
        label: "to ship the MVP",
        caption: "From concept to a product validated with real customers.",
        icon: { kind: "illustration", scene: "progress", alt: "MVP shipped" },
      },
      {
        value: "+20",
        label: "successful pilots",
        caption: "Rolled out across Truora's existing customer base.",
        icon: { kind: "illustration", scene: "multiply", alt: "Successful pilots" },
      },
      {
        value: "+30%",
        label: "user reactivation",
        caption:
          "Conversations reactivated and completed during the pilot phase.",
        icon: { kind: "illustration", scene: "reactivate", alt: "User reactivation" },
      },
    ],
  },
};
