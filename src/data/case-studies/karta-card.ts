import type { CaseStudyContent, ContentImage } from "./types";
import { kartaCardImages, kartaImages, requireImage } from "~/lib/image-map";

const card = (filename: string) => requireImage(kartaCardImages, filename);
const karta = (filename: string) => requireImage(kartaImages, filename);

// ———— Hero ————
const heroImage: ContentImage = {
  kind: "image",
  image: card("karta-globalCreditCard-adventure-2048x770.webp"),
  mobileImage: card("karta-globalCreditCard-adventure-mobile-618x1024.webp"),
  alt: "Karta AI metal credit card — angled view of the 17g recycled-steel card with AI-inspired line pattern and VISA Infinite mark",
};

// ———— Challenge ————
const challengeImage: ContentImage = {
  kind: "image",
  image: card("Karta-GlobalCreditCard-2.webp"),
  mobileImage: card("Karta-GlobalCreditCard-2-768x510.webp"),
  alt: "Karta metal credit card — top-down view of the matte black front face with Visa Infinite mark",
};

// ———— Top-3 challenges supporting imagery ————
const challengesComposite: ContentImage = {
  kind: "image",
  image: card("Karta-problems-2048x837.webp"),
  alt: "Karta travel-ready moments — snowboarder, giraffe encounter, aurora, sand dunes, Arc de Triomphe, Cappadocia balloons",
};
const challengeProblem01: ContentImage = {
  kind: "image",
  image: card("karta-problem-01.webp"),
  alt: "Snowboarder carving through fresh powder — a travel moment worth showing off",
};
const challengeProblem02: ContentImage = {
  kind: "image",
  image: card("karta-problem-02.webp"),
  alt: "Child meeting a giraffe at a wildlife park — a memorable family trip",
};
const challengeProblem03: ContentImage = {
  kind: "image",
  image: card("karta-problem-03.webp"),
  alt: "Dancer under a burst of sparks — an extraordinary experience Karta helps create",
};

// ———— Insights ————
const insightsDesktop: ContentImage = {
  kind: "image",
  image: card("Karta-Insights.webp"),
  alt: "Conversations with users in 5 countries — metal card perception and no-annual-fee insights",
};
const insightsMobile01: ContentImage = {
  kind: "image",
  image: card("Karta-Insights-01-768x976.webp"),
  alt: "User experience insight — 8 out of 10 users associate metal cards with more benefits",
};
const insightsMobile02: ContentImage = {
  kind: "image",
  image: card("Karta-Insights-02-768x976.webp"),
  alt: "User experience insight — 10 out of 10 users perceive a card with no annual fee will not meet their needs",
};

// ———— Manifiesto ————
const manifiestoImage: ContentImage = {
  kind: "image",
  image: card("karta-capadocia-741x1024.webp"),
  alt: "Karta Manifiesto — couple watching hot-air balloons rise over Cappadocia at sunrise",
};

// ———— Early versions ————
const firstCardsDesktop: ContentImage = {
  kind: "image",
  image: card("karta-firstCards-01-2048x711.webp"),
  alt: "Early Karta card design proposals — purple with green diamond, and green with subtle pattern",
};
const firstCardsMobile: ContentImage = {
  kind: "image",
  image: card("karta-firstCards-01-mobile-737x1024.webp"),
  alt: "Early Karta card design proposals stacked for mobile — purple and green iterations",
};
const firstCard02Desktop: ContentImage = {
  kind: "image",
  image: card("karta-firstCard-02-2048x816.webp"),
  alt: "Karta Ai.fred technology prototype — dark green metal card with generative line pattern",
};
const firstCard02Mobile: ContentImage = {
  kind: "image",
  image: card("karta-firstCard-02-mobile-760x1024.webp"),
  alt: "Karta Ai.fred prototype in portrait — generative line pattern on dark green",
};

// ———— WhatsApp conversations ————
const whatsappImage: ContentImage = {
  kind: "image",
  image: card("karta-talk-via-whatsApp-2048x890.webp"),
  alt: "15 early adopters who helped accelerate the Karta card design — captured while texting on WhatsApp",
};

// ———— Making top ————
const finalCardDesktop: ContentImage = {
  kind: "image",
  image: card("karta-globalCreditCard-adventure-2048x770.webp"),
  alt: "Final Karta metal credit card — angled view of the black AI-inspired pattern with VISA mark",
};
const finalCardMobile: ContentImage = {
  kind: "image",
  image: card("karta-globalCreditCard-adventure-mobile-618x1024.webp"),
  alt: "Final Karta metal credit card in portrait — AI-inspired pattern on 17g of recycled steel",
};

// ———— Back of card before/after ————
const backV1: ContentImage = {
  kind: "image",
  image: card("Karta-Card-Back-v1-768x471.webp"),
  alt: "First version of the Karta card back — cluttered typography reduced legibility",
};
const backV2: ContentImage = {
  kind: "image",
  image: card("Karta-Card-Back-v2-768x470.webp"),
  alt: "Final version of the Karta card back — cleaner layout with a 24/7 WhatsApp Concierge number",
};

// ———— Result / lifestyle grid (reuse from karta-app) ————
const usingCard01: ContentImage = {
  kind: "image",
  image: karta("karta-using-credit-card-01-768x892.webp"),
  alt: "Karta metal card held up in a bright travel moment",
};
const usingCard02: ContentImage = {
  kind: "image",
  image: karta("karta-using-credit-card-02-768x892.webp"),
  alt: "Karta metal card photographed at a world-class destination",
};
const usingCard03: ContentImage = {
  kind: "image",
  image: karta("karta-using-credit-card-03-768x1020.webp"),
  alt: "Karta welcome kit — metal card resting on its signed presentation box",
};
const usingCard04: ContentImage = {
  kind: "image",
  image: karta("karta-using-credit-card-04-768x1020.webp"),
  alt: "Karta black metal card close-up on a neutral surface",
};

export const kartaCard: CaseStudyContent = {
  slug: "karta-card",
  kicker: "FinTech — SaaS",
  brandLogo: {
    kind: "public",
    src: "/images/logo-karta.png",
    alt: "Karta",
    height: 30,
  },
  hero: {
    image: heroImage,
    intro:
      "People often have several cards, and at high spending levels, banks compete to attract them and build their loyalty.\n\nThe problem: outdated services and cards that no one shows off. Karta was created for this purpose: a modern card that understands its holder and becomes their favorite for traveling, creating memorable moments.",
  },
  challenge: {
    heading: "Credit cards have not adapted to modernity with AI.",
    body: "Traditional credit card providers offer a 20th-century service. It's time to have a credit card that truly understands the user.",
    ctaLabel: "I want to grow as Karta",
    results: [
      "+1k customers in 12 months.",
      "2 additional cards per user.",
      "85% saving on transaction fees compared to competitors.",
    ],
    team: [
      { label: "1 developer" },
      { label: "1 product designer", badge: "by Comandos" },
      { label: "1 Founder at Karta" },
    ],
    image: challengeImage,
  },
  adventure: {
    heading: "Defining top 3 challenges identified.",
    blocks: [
      {
        kind: "responsive-media",
        desktop: challengesComposite,
        mobile: [challengeProblem01, challengeProblem02, challengeProblem03],
      },
      {
        kind: "heading",
        heading: "Conversations with users in 5 countries",
      },
      {
        kind: "responsive-media",
        desktop: insightsDesktop,
        mobile: [insightsMobile01, insightsMobile02],
      },
      {
        kind: "checklist",
        items: [
          {
            label: "Metallic card",
            body:
              "As part of the premium perception. The card must be metallic, competing with Amex Centurion.",
          },
          {
            label: "Users perceive",
            body:
              "They typically have three credit cards. We need to time Karta's use perfectly and ensure the experience is remarkable.",
          },
        ],
      },
      { kind: "divider" },
      {
        kind: "prose-with-image",
        heading: "Karta Manifiesto",
        body:
          "Karta is the borderless credit card for global citizens and multicultural visionaries. Designed for those who see opportunities beyond geographical boundaries, Karta empowers you to build your financial future on the international stage.",
        image: manifiestoImage,
        imagePosition: "right",
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Seeing the mountain" },
      {
        kind: "heading",
        heading: "Early versions of the credit card",
        body:
          "Comandos did not participate in the initial proposal phase. We joined a few days later at the request of Karta's founders.",
      },
      {
        kind: "image",
        image: {
          kind: "image",
          image: card("karta-firstCards-01-2048x711.webp"),
          mobileImage: card("karta-firstCards-01-mobile-737x1024.webp"),
          alt: "Early Karta card design proposals — purple with green diamond, and green with subtle pattern",
        },
      },
      {
        kind: "image",
        image: {
          kind: "image",
          image: card("karta-firstCard-02-2048x816.webp"),
          mobileImage: card("karta-firstCard-02-mobile-760x1024.webp"),
          alt: "Karta Ai.fred technology prototype — dark green metal card with generative line pattern",
        },
      },
      { kind: "divider" },
      {
        kind: "heading",
        heading: "In a Matter of Days, we learned",
        body:
          "We leverage AB testing with short sprints to iterate quickly and improve conversion.",
      },
      {
        kind: "checklist",
        items: [
          {
            label: "4/5 users did not like the card",
            body:
              "It didn't inspire confidence. They felt an old but modernized vibe.",
          },
          {
            label: "5/5 users compared with Amex Centurion",
            body:
              "Comparing the designs, Amex was still beating us.",
          },
          {
            label: "3/5 users want to show off their card",
            body:
              "Not only do they use it to pay, but when they take out their card to pay, it speaks to their unique personality.",
          },
        ],
      },
      { kind: "divider" },
      {
        kind: "heading",
        heading: "Quick, Dynamic and Unique Conversations",
        body: "Quick conversations via WhatsApp helped us iterate quickly.",
      },
      { kind: "image", image: whatsappImage },
      { kind: "divider" },
      { kind: "chip", icon: "making-top", label: "Making top" },
      {
        kind: "heading",
        heading: "We decided to redesign everything",
        body:
          "Dynamism and progress are represented by lines to the right. What happens if we put this on a card?",
      },
      {
        kind: "image",
        image: {
          kind: "image",
          image: card("Karta-credit-card-perspective.webp"),
          alt: "Final Karta metal credit card — perspective shot showing the AI-inspired line pattern and 17g recycled-steel body",
        },
      },
      {
        kind: "caption",
        text:
          "Made from 17 grams of precision metal and 65% recycled steel, it offers a bold and elegant feel while demonstrating that true prestige leaves no footprint.",
      },
      {
        kind: "two-col-media",
        items: [
          {
            image: backV1,
            kicker: "Back of card",
            title: "First Version",
            detail:
              "Tests with physical cards revealed poor readability in key areas; 80% took time to locate contact information.",
          },
          {
            image: backV2,
            kicker: "Back of card",
            title: "Final Version",
          },
        ],
      },
    ],
  },
  worth: {
    blocks: [
      { kind: "divider" },
      {
        kind: "big-heading",
        heading: "Focused on people who have no limits or boundaries.",
      },
      {
        kind: "image-grid",
        columns: 2,
        images: [usingCard01, usingCard02, usingCard03, usingCard04],
      },
    ],
  },
  result: {
    heading: "Amazing results in 12 months",
    stats: [
      {
        value: "+1k",
        label: "Customers in 12 months",
        caption: "A HUGE success. Better than we expected.",
        icon: { kind: "illustration", scene: "audience", alt: "Growing customer base" },
      },
      {
        value: "2",
        label: "Additional cards per user",
        caption: "Savings on transaction fees compared to competitors.",
        icon: { kind: "illustration", scene: "multiply", alt: "Additional cards per user" },
      },
      {
        value: "85%",
        label: "Savings",
        caption: "The whole new process is incredibly easier for anyone to complete.",
        icon: { kind: "illustration", scene: "rise", alt: "Fee savings" },
      },
    ],
  },
};
