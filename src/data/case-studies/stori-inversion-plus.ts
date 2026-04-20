import type { CaseStudyContent } from "./types";

export const storiInversionPlus: CaseStudyContent = {
  slug: "stori-inversion-plus",
  kicker: "Fintech — SaaS",
  brandLogo: {
    kind: "public",
    src: "/images/logo-stori.png",
    alt: "Stori",
    height: 28,
  },
  hero: {
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
    image: {
      kind: "placeholder",
      label: "Stori product screen on green background",
      aspect: "4 / 3",
    },
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
      {
        kind: "image",
        image: {
          kind: "placeholder",
          label: "Team session — +40 interviews and usability tests",
          aspect: "16 / 9",
        },
      },
      { kind: "divider" },
      {
        kind: "step",
        step: "STEP 01",
        heading: "We created a first version to test with users",
        body: "During the design process, we focused on the key user needs, using the JTBD framework.",
        image: {
          kind: "placeholder",
          label: "Three phone mockups — first version prototypes",
          aspect: "16 / 9",
        },
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
        image: {
          kind: "placeholder",
          label: "Design system callout — upgraded components",
          aspect: "16 / 9",
        },
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Seeing the mountain" },
      {
        kind: "step",
        step: "STEP 02",
        heading: "We iterated again and launched the MVP version",
        body: "We deployed the MVP version with events in Amplitude, guaranteeing not only its launch, but also the measurement of conversion and impact.",
        image: {
          kind: "placeholder",
          label: "Four phone mockups — MVP flow",
          aspect: "16 / 9",
        },
      },
      { kind: "divider" },
      { kind: "chip", icon: "making-top", label: "Making top" },
    ],
  },
  worth: {
    blocks: [
      {
        kind: "intro",
        heading: "Iterations according to metrics: 477% conversion rate",
        body: "By quickly identifying the conversion problem and talking to users, we iterated the flow and improved 477% versus the first week of launch.",
      },
      {
        kind: "before-after",
        before: {
          kind: "placeholder",
          label: "Before — three phone screens",
          aspect: "4 / 3",
        },
        after: {
          kind: "placeholder",
          label: "After — three phone screens",
          aspect: "4 / 3",
        },
        impact: "↑477%",
      },
      {
        kind: "intro",
        label: "Customer Love",
        heading: "We improved confidence in Stori with 17%+ in our NPS.",
        body: "The impact on our users was greater than expected. Content creators talked about our significant improvements.",
      },
      {
        kind: "image",
        image: {
          kind: "placeholder",
          label: "Three YouTube thumbnails — social proof",
          aspect: "16 / 7",
        },
      },
      {
        kind: "intro",
        label: "Awesome Evolution",
        heading: "A great evolution with Stori Investment",
        body: "The user can enable a metal or plastic card. All additional cards have digital cards.",
      },
      {
        kind: "before-after",
        before: {
          kind: "placeholder",
          label: "First version — product screen on pink",
          aspect: "4 / 5",
        },
        after: {
          kind: "placeholder",
          label: "Last version — product screen on green",
          aspect: "4 / 5",
        },
        impact: "Evolved",
      },
    ],
  },
  result: {
    heading: "Amazing results in 12 months",
    stats: [
      {
        value: "477%+",
        label: "Activation explosion",
        caption: "In 3 months vs initial week.",
        icon: "globe",
      },
      {
        value: "318%+",
        label: "Average balance",
        caption: "From the initial week.",
        icon: "money",
      },
      {
        value: "-8%",
        label: "Churn",
        caption: "In the first week of Inversión+.",
        icon: "bell",
      },
    ],
  },
};
