import type { CaseStudyContent, ContentImage } from "./types";
import { storiImages, requireImage } from "~/lib/image-map";

const img = (filename: string) => requireImage(storiImages, filename);

// Phone-on-green (product screen) — hero
const heroImage: ContentImage = {
  kind: "image",
  image: img("stori-inverstion-easy-finance-1536x1020.webp"),
  mobileImage: img("stori-inverstion-easy-finance-mobile-768x836.webp"),
  alt: "Stori Inversión+ — product screen with time-locked savings",
};

// Phone-in-hand (real photo) — challenge
const challengeImage: ContentImage = {
  kind: "image",
  image: img("Stori-Inversion-App-1536x1020.webp"),
  mobileImage: img("Stori-Inversion-App-Mobile-768x836.webp"),
  alt: "Stori Inversión+ — app in-hand, real context",
};

const userInterviewImage: ContentImage = {
  kind: "image",
  image: img("stori-inversion-user-interview.webp"),
  mobileImage: img("stori-inversion-user-interview-mobile-768x969.webp"),
  alt: "+40 interviews and usability tests with users",
};

const firstVersionImage: ContentImage = {
  kind: "image",
  image: img("stori-inversion-first-version-1536x622.webp"),
  mobileImage: img("stori-inversion-first-version-onboarding-768x982.webp"),
  alt: "First version — three phone mockups tested with users (JTBD framework)",
};

const designSystemImage: ContentImage = {
  kind: "image",
  image: img("stori-inversion-Design-System-1536x984.webp"),
  mobileImage: img("stori-inversion-Design-System-mobile-733x1024.webp"),
  alt: "Design System — DeLorean components that did not support a critical JTBD",
};

const iteration02Image: ContentImage = {
  kind: "image",
  image: img("stori-inversion-iteration02-x-1536x843.webp"),
  mobileImage: img("stori-inversion-iteration02-mobile-567x1024.webp"),
  alt: "MVP iteration — four phone mockups of the new investment flow",
};

const deleteStepImage: ContentImage = {
  kind: "image",
  image: img("stori-inversion-delete-step-1536x1099.webp"),
  mobileImage: img("stori-inversion-delete-step-mobile-759x2048.webp"),
  alt: "Before and after — iterations that removed friction from the invest flow (+477%)",
};

const contentCreatorsImage: ContentImage = {
  kind: "image",
  image: img("stori-inversion-Content-Creators-1536x733.webp"),
  mobileImage: img("stori-inversion-Content-Creators-mobile-768x1445.webp"),
  alt: "YouTube content creators reacting to Stori Inversión+ improvements",
};

const beforeAfterEvolutionImage: ContentImage = {
  kind: "image",
  image: img("stori-inversion-beforeAfter-1536x957.webp"),
  mobileImage: img("stori-inversion-before-768x997.webp"),
  alt: "Before and after — Stori Investment evolution from first to last version",
};

export const storiInversionPlus: CaseStudyContent = {
  slug: "stori-inversion-plus",
  kicker: "Fintech — SaaS",
  brandLogo: {
    kind: "public",
    src: "/images/logo-stori.png",
    alt: "Stori",
    height: 44,
  },
  hero: {
    image: heroImage,
    intro:
      "Investment for everyone, grow your money without being an expert.\n\nInvestment for everyone — no expertise needed. Strengthen the value prop with simple, rewarding time-locked savings: longer terms, better rates, and clear early-exit rules. Considering that the Mexican segments of ABC offer frozen money starting at $100mxn (us$5).",
  },
  challenge: {
    heading: "In a context of falling interest rates",
    body: "By communicating in simple and straightforward language, users will quickly understand the financial terms of Fixed Term.",
    ctaLabel: "I want to grow as Stori",
    results: [
      "+477% Activation Explosion (in 3 months vs initial week).",
      "-8% Churn down.",
      "+318% Average Balance (from the initial week).",
    ],
    team: [
      { label: "7 developers" },
      { label: "2 product designers", badge: "by Comandos" },
      { label: "1 Product Lead" },
    ],
    image: challengeImage,
  },
  adventure: {
    heading: "Defining top 3 challenges identified by segment.",
    blocks: [
      {
        kind: "checklist",
        items: [
          {
            label: "NPS and Call Center",
            body: "Helped us identify concerns and frustrations like:",
            sub: [
              "“Yield is not attractive”",
              "“Deposit limit is not enough”",
              "“Transfer does not arrive quickly”",
            ],
          },
          {
            label: "Interviews with Users",
            body: "It revealed which were the pain points and their main doubts:",
            sub: [
              "“What if I need my money?”",
              "“Can I withdraw my money?”",
              "“What are the benefits of investing?”",
            ],
          },
          {
            label: "Increase Confidence",
            body: "Surveys revealed a lack of confidence in the entity:",
            sub: [
              "“What will happen to my money?”",
              "“Is Stori 100% secure?”",
              "“Is my money protected?”",
            ],
          },
        ],
      },
      { kind: "image", image: userInterviewImage, rounded: false },
      { kind: "divider" },
      {
        kind: "step",
        step: "STEP 01",
        heading: "We created a first version to test with users",
        body: "During the design process, we focused on the key user needs, using the JTBD framework.",
        image: firstVersionImage,
        tail: [
          { label: "First Insights" },
          { label: "10/10 users", body: "without understanding our value proposition." },
          { label: "2/10 users", body: "completed the Jobs To Be Done." },
          { label: "8/10 users", body: "were not willing to freeze money." },
        ],
      },
      { kind: "divider" },
      {
        kind: "callout",
        label: "Design System",
        heading:
          "The components of our Design System did not collaborate to improve usability and reliability of a critical JTBD.",
        image: designSystemImage,
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Seeing the mountain" },
      {
        kind: "step",
        step: "STEP 02",
        heading: "We iterated again and launched the MVP version",
        body: "We deployed the MVP version with events in Amplitude, guaranteeing not only its launch, but also the measurement of conversion and impact.",
        image: iteration02Image,
      },
    ],
  },
  worth: {
    blocks: [
      { kind: "divider" },
      { kind: "chip", icon: "making-top", label: "Making top" },
      {
        kind: "intro",
        heading: "Iterations according to metrics: 477% conversion rate",
        body: "By quickly identifying the conversion problem and talking to users, we iterated the flow and improved 477% versus the first week of launch.",
      },
      { kind: "image", image: deleteStepImage },
      { kind: "divider" },
      {
        kind: "intro",
        label: "Customer Love",
        heading: "We improved confidence in Stori with 17%+ in our NPS.",
        body: "The impact on our users was greater than expected. Content creators talked about our significant improvements.",
      },
      { kind: "image", image: contentCreatorsImage },
      { kind: "divider" },
      {
        kind: "intro",
        label: "Awesome Evolution",
        heading: "A great evolution with Stori Investment",
        body: "The user can enable a metal or plastic card. All additional cards have digital cards.",
      },
      { kind: "image", image: beforeAfterEvolutionImage },
    ],
  },
  result: {
    heading: "Amazing results in 12 months",
    stats: [
      {
        value: "477%+",
        label: "Activation explosion",
        caption: "In 3 months vs initial week.",
        icon: { kind: "illustration", scene: "launch", alt: "Activation explosion" },
      },
      {
        value: "318%+",
        label: "Average balance",
        caption: "From the initial week.",
        icon: { kind: "illustration", scene: "rise", alt: "Average balance growth" },
      },
      {
        value: "-8%",
        label: "Churn",
        caption: "In the first week of Inversión+.",
        icon: { kind: "illustration", scene: "retention", alt: "Churn reduction" },
      },
    ],
  },
};
