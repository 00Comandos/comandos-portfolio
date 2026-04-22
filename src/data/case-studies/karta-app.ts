import type { CaseStudyContent, ContentImage } from "./types";
import { kartaImages, requireImage } from "~/lib/image-map";

const img = (filename: string) => requireImage(kartaImages, filename);

// ———— Composite (desktop) + mobile art-direction assets ————

const heroImage: ContentImage = {
  kind: "image",
  image: img("Karta-GlobalApp-Thumbnail-2.webp"),
  mobileImage: img("Karta-GlobalApp-Thumbnail-2-mobile-768x836.webp"),
  alt: "Karta premium credit card app hero on iPhone — live account balance, recent card charges, Karta Points rewards counter and quick-send money actions, rendered on the warm Karta brand backdrop the LATAM high-net-worth launch campaign used in Mexico and Brazil",
};

const challengeImage: ContentImage = {
  kind: "image",
  image: img("Karta-benefits-transparent.png"),
  mobileImage: img("Karta-benefits-mobile-transparent.png"),
  alt: "Karta premium lifestyle collage — the Karta metal card at Disney, a close-up on black, stacked with other world-class cards, and in its welcome box",
};

const challengesGridImage: ContentImage = {
  kind: "image",
  image: img("Karta-GlobalApp-Challenges-2048x1261.webp"),
  alt: "Karta premium benefits grid — Priority Pass Select, Additional cards, Karta Points, and Exclusive Events",
};

const interviewsImage: ContentImage = {
  kind: "image",
  image: img("Karta-GlobalApp-Interviews-2048x1026.webp"),
  mobileImage: img("Karta-GlobalApp-Interviews-mobile-768x969.webp"),
  alt: "Karta user research session — 20+ interview sessions with users across 5 countries",
};

const comparativeFeesImage: ContentImage = {
  kind: "image",
  image: img("Karta-ComparativeFees-Q12025-2048x1039.webp"),
  mobileImage: img("Karta-ComparativeFees-Q12025-mobile-768x672.webp"),
  alt: "Brazilian credit card market fees comparison Q1 2025 — Karta offers the lowest total commission rate",
};

const digitalCardImage: ContentImage = {
  kind: "image",
  image: img("karta-digitalCard-1-2048x954.webp"),
  alt: "Karta digital credit card flow — generating the card in the app, copying the virtual number, and adding it to Apple Pay",
};

const optimization01Image: ContentImage = {
  kind: "image",
  image: img("karta-optimization-01-768x589.webp"),
  alt: "Karta digital credit card used for a contactless tap-to-pay at a LATAM retail point-of-sale terminal — new customer completing their first NFC purchase within minutes of activating the virtual card in the Karta app, before the physical metal card ships",
};

const optimization02Image: ContentImage = {
  kind: "image",
  image: img("karta-optimization-02-768x589.webp"),
  alt: "Karta card used online for a food delivery order within the first 12 hours",
};

const payment01Image: ContentImage = {
  kind: "image",
  image: img("Karta-GlobalApp-Payment-01-768x845.webp"),
  alt: "Paying the Karta credit card bill — US bank account deposit details and routing",
};

const payment02Image: ContentImage = {
  kind: "image",
  image: img("Karta-GlobalApp-Payment-02-768x845.webp"),
  alt: "Paying the Karta credit card bill — choose between bank transfer, Pix, investments, or cryptocurrencies",
};

const additionalCardImage: ContentImage = {
  kind: "image",
  image: img("karta-globalApp-AdditionalCard-2048x890.webp"),
  mobileImage: img("karta-globalApp-AdditionalCard-mobile-768x683.webp"),
  alt: "Additional Karta metal and plastic cards for family members or collaborators, shown on a mustard sofa",
};

const europeTaxRefundImage: ContentImage = {
  kind: "image",
  image: img("Karta-GlobalApp-EuropeTaxRefund-2048x1127.webp"),
  alt: "Karta automated Europe VAT refund flow — detecting transactions and generating airport barcodes",
};

const aiConciergeImage: ContentImage = {
  kind: "image",
  image: img("Karta-AIConcierge-2048x1126.webp"),
  alt: "Karta AI Concierge on WhatsApp — helping with a hotel reservation and disputing a transaction",
};

// ———— Per-step mobile images used inside responsive-media blocks ————

const challenges01Mobile: ContentImage = {
  kind: "image",
  image: img("Karta-GlobalApp-Challenges-01.webp"),
  alt: "Karta Priority Pass Select benefit in a premium airport lounge",
};

const challenges02Mobile: ContentImage = {
  kind: "image",
  image: img("Karta-GlobalApp-Challenges-02.webp"),
  alt: "Karta exclusive perks — additional cards, Karta Points, and Exclusive Events",
};

const digitalCard01Mobile: ContentImage = {
  kind: "image",
  image: img("Karta-DigitalCard-01-733x1024.webp"),
  alt: "Karta digital card — Apple Pay activation in the iOS wallet",
};

const digitalCard02Mobile: ContentImage = {
  kind: "image",
  image: img("Karta-DigitalCard-02-731x1024.webp"),
  alt: "Karta digital card — copy the virtual card number directly from the Karta app",
};

const digitalCard03Mobile: ContentImage = {
  kind: "image",
  image: img("Karta-DigitalCard-03-733x1024.webp"),
  alt: "Karta digital card — ready for Apple Pay with balance and transactions visible",
};

const europeTaxRefund02Mobile: ContentImage = {
  kind: "image",
  image: img("Karta-GlobalApp-EuropeTaxRefund-02-768x845.webp"),
  alt: "Karta trip to Europe — transactions detected and grouped by country for VAT refund",
};

const europeTaxRefund01Mobile: ContentImage = {
  kind: "image",
  image: img("Karta-GlobalApp-EuropeTaxRefund-01-768x845.webp"),
  alt: "Karta Europe VAT refund — airport barcode ready to scan at the refund desk",
};

const conciergeFlightMobile: ContentImage = {
  kind: "image",
  image: img("Karta-Concierge-Flight-768x845.webp"),
  alt: "Karta AI Concierge over WhatsApp — assisting with a hotel reservation",
};

const conciergeTransactionsMobile: ContentImage = {
  kind: "image",
  image: img("Karta-Concierge-Transactions-768x845.webp"),
  alt: "Karta AI Concierge over WhatsApp — explaining a charge and confirming a payment",
};

// ———— Lifestyle closing grid ————

const usingCard01: ContentImage = {
  kind: "image",
  image: img("karta-using-credit-card-01-768x892.webp"),
  alt: "Karta premium metal credit card in hand during a travel moment abroad — the weighty black card the LATAM premium tier ships to every Karta customer as a status signal on trips, hotels and restaurants outside Mexico",
};
const usingCard02: ContentImage = {
  kind: "image",
  image: img("karta-using-credit-card-02-768x892.webp"),
  alt: "Karta black metal credit card photographed at a world-class travel destination — the premium card LATAM high-net-worth customers carry across Europe, the US and Asia for Priority Pass lounge access and no-FX-fee spending",
};
const usingCard03: ContentImage = {
  kind: "image",
  image: img("karta-using-credit-card-03-768x1020.webp"),
  alt: "Karta welcome kit — card box unboxing with accessories",
};
const usingCard04: ContentImage = {
  kind: "image",
  image: img("karta-using-credit-card-04-768x1020.webp"),
  alt: "Karta black metal credit card close-up on a neutral surface",
};

export const kartaApp: CaseStudyContent = {
  slug: "karta-app",
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
      "The premium segment remains with traditional banks, using cards that have fallen behind.\n\nAlthough several fintech companies are approaching this segment, adoption remains low due to recurring questions.",
    bullets: [
      "Pay with investments.",
      "Operate without commission.",
      "Exclusive benefits like F1 or Insurances.",
      "Backed by Artificial Intelligence but with human sense.",
    ],
  },
  challenge: {
    heading: "Be Widely Accepted Among an Exclusive Audience",
    body: "WhatsApp surpasses banking apps in usage. What mix of flows and functions in each channel will drive adoption?",
    ctaLabel: "I want to grow as Karta",
    results: [
      "+1k customers in 12 months.",
      "94% Net Promoter Score.",
      "85% saving on transaction fees compared to competitors.",
    ],
    team: [
      { label: "4 developers" },
      { label: "1 product designer", badge: "by Comandos" },
      { label: "2 Founders at Karta" },
    ],
    image: challengeImage,
  },
  adventure: {
    heading: "Defining top 2 challenges identified.",
    blocks: [
      {
        kind: "responsive-media",
        desktop: challengesGridImage,
        mobile: [challenges01Mobile, challenges02Mobile],
      },
      { kind: "divider" },
      { kind: "image", image: interviewsImage },
      {
        kind: "heading",
        heading: "We Optimize Our Value Proposition",
        body:
          "Karta is a US-issued card, secured by the applicant's funds held in the US. Most primary users live in Latin America.",
      },
      {
        kind: "feature-grid",
        columns: 3,
        items: [
          {
            number: "1",
            label: "Business",
            title: "A card optimized for travel",
            body:
              "We will not compete for everyday use. We will be the best option when travelling, where users are willing to pay a little more for unforgettable memories when paying with Karta.",
          },
          {
            number: "2",
            label: "User Research",
            title: "An assistant that can do almost anything on WhatsApp",
            body:
              "80% of users have had an unpleasant experience when calling a call center and waiting for hours. Karta automates everything from transaction reviews to VAT refunds in Europe and more.",
            highlight: true,
          },
          {
            number: "3",
            label: "Product",
            title: "Ease of paying off credit card debt",
            body:
              "92% of users have liquidity in investment accounts (e.g. Webull or Interaudi), not just at their bank.",
          },
        ],
      },
      {
        kind: "checklist",
        items: [
          {
            label: "A Card Optimized for Travel",
            body:
              "We will not compete for everyday use. We will be the best option when travelling, where users are willing to pay a little more for unforgettable memories when paying with Karta.",
          },
          {
            label: "An Assistant that can do almost anything on WhatsApp",
            body:
              "80% of users have had an unpleasant experience when calling a call center and waiting for hours. Karta automates everything from transaction reviews to VAT refunds in Europe and more.",
          },
          {
            label: "Ease of paying off credit card debt",
            body:
              "92% of users have liquidity in investment accounts (e.g. Webull or Interaudi), not just at their bank.",
          },
        ],
      },
      { kind: "divider" },
      {
        kind: "callout",
        label: "Advantage",
        heading: "The Lowest Commission Rate in The Brazilian Market",
        image: comparativeFeesImage,
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Seeing the mountain" },
      {
        kind: "heading",
        heading: "Aha! moment in Less Than 1 Hour.",
        body:
          "To resolve the dilemma, we prioritized Apple Pay / Google Pay, as the card took ~1 week to be delivered.",
      },
      {
        kind: "responsive-media",
        desktop: digitalCardImage,
        mobile: [digitalCard01Mobile, digitalCard02Mobile, digitalCard03Mobile],
      },
      { kind: "divider" },
      {
        kind: "heading",
        heading: "We optimize to deliver value in the shortest possible time.",
        body:
          "We made it easier to make your first purchase, either online or using contactless payment.",
      },
      {
        kind: "two-col-media",
        items: [
          {
            image: optimization01Image,
            title: "100% of users use their digital card within 45 minutes",
            detail: "Users are using Karta beyond our expectations.",
          },
          {
            image: optimization02Image,
            title: "4 transactions during the first 12 hours",
            detail:
              "Both contactless payment in restaurants and online purchases.",
          },
        ],
      },
    ],
  },
  worth: {
    blocks: [
      { kind: "divider" },
      { kind: "chip", icon: "making-top", label: "Making top" },
      {
        kind: "intro",
        heading: "A Bank App For People Without Borders",
        body:
          "For high-net-worth clients, we raise the standard. The past is history; the future is Karta.",
      },
      { kind: "divider", variant: "line" },
      {
        kind: "intro",
        label: "Facilitate Payments",
        heading: "Up To 5 Ways to Pay your Credit Card Bill",
        body:
          "Payment methods: US bank account, Brazilian bank account, Pix, investments, and cryptocurrencies.",
      },
      {
        kind: "image-grid",
        columns: 2,
        images: [payment01Image, payment02Image],
      },
      {
        kind: "text",
        text:
          "Our concierge can also process the card payment. We just need to ask them to do so.",
      },
      { kind: "divider" },
      {
        kind: "intro",
        label: "Facilitate Fast Adoption",
        heading: "Additional Cards For Family Members Or Collaborators",
        body:
          "The user can enable a metal or plastic card. All additional cards have digital cards.",
      },
      { kind: "image", image: additionalCardImage },
      { kind: "divider" },
      {
        kind: "intro",
        label: "Facilitate Fast Adoption",
        heading: "We Automate Travel Tax Refunds to Europe",
        body:
          "Karta automatically detects transactions in Europe and guides users through the requirements necessary to obtain an automatic tax refund.",
      },
      {
        kind: "responsive-media",
        desktop: europeTaxRefundImage,
        mobile: [europeTaxRefund02Mobile, europeTaxRefund01Mobile],
      },
      {
        kind: "text",
        text: "Purchase invoices can also be uploaded via WhatsApp.",
      },
      { kind: "divider" },
      {
        kind: "intro",
        label: "An AI Concierge That Feels Like a Human",
        heading: "Help Buying a Flight or With Your Transactions.",
        body:
          "The Karta app is key, but WhatsApp support is essential for an exceptional experience.",
      },
      {
        kind: "responsive-media",
        desktop: aiConciergeImage,
        mobile: [conciergeFlightMobile, conciergeTransactionsMobile],
      },
      {
        kind: "checklist",
        heading: "Karta Concierge helps you with:",
        items: [
          { label: "Transaction disputes." },
          { label: "Your Priority Pass code." },
          { label: "Sending money to another Karta user." },
          { label: "Cut-off date and outstanding balance." },
          { label: "Among others." },
        ],
      },
      { kind: "divider" },
      {
        kind: "big-heading",
        heading: "Designed For People Who Don't Stop At Limits Or Borders.",
      },
      {
        kind: "image-grid",
        columns: 2,
        images: [usingCard02, usingCard01, usingCard03, usingCard04],
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
        icon: { kind: "illustration", scene: "launch", alt: "Customer growth" },
      },
      {
        value: "$900 USD",
        label: "Average transaction",
        caption: "Average transactions during that period.",
        icon: { kind: "illustration", scene: "rise", alt: "Transaction volume" },
      },
      {
        value: "85%",
        label: "Savings",
        caption: "Saving on transaction fees compared to competitors.",
        icon: { kind: "illustration", scene: "retention", alt: "Fee savings" },
      },
    ],
  },
};
