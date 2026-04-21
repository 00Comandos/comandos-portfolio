import type { CaseStudyContent, ContentImage } from "./types";
import { miposKioskImages, requireImage } from "~/lib/image-map";

const img = (filename: string) => requireImage(miposKioskImages, filename);

// ———— Hero ————
const heroImage: ContentImage = {
  kind: "image",
  image: img("mipOS-Kiosko-Demo-comandos-project.png"),
  alt: "mipOS Kiosko MVP running on an off-the-shelf tablet mounted for a fast-food restaurant — Hamburguesa Gauchos 180gr, 1/4 and 125gr photographic menu with live $14,000 and $17,000 prices and a Pagar con RappiPay red footer, the pandemic-era self-order kiosk tested in the first pilots",
};

// ———— Challenge ————
const challengeImage: ContentImage = {
  kind: "image",
  image: img("comandos-mipOS-kiosko-mainpicture.png"),
  alt: "mipOS Kiosko self-order home screen for Chillis San Miguel — ¡Hey! ¿Qué necesitas? search bar with Para comer aquí / Para llevar toggles, live 20–15min delivery time and a Promociones burger hero card on a pandemic-era fast-food ordering kiosk",
};

// ———— Adventure ————
const blueprintImage: ContentImage = {
  kind: "image",
  image: img("mipOS-Kiosko-BluePrint-comandos-project.png"),
  alt: "mipOS Kiosko Service Blueprint (October 2020) — full customer journey across Tiempo, Puntos de contacto, Customer Journey, Línea de interacción, Prototype and backstage actions, mapping a self-order kiosk experience for fast-food restaurants under pandemic constraints",
  caption:
    "The mipOS Kiosko Service Blueprint — the full customer journey, mapped before we built a single screen.",
};

const paymentMethodsImage: ContentImage = {
  kind: "image",
  image: img("mipOS-Kiosko-payment-comandosStudio-payment.png"),
  alt: "mipOS Kiosko payment step on self-order kiosk — Método de Pago with Efectivo, Tarjeta de Crédito o Débito and Rappi, tuned for LATAM cash-heavy fast-food customers with a FinTech QR alliance layered on top",
};

const lineOfPeopleImage: ContentImage = {
  kind: "image",
  image: img("mipOS-Kiosko-LineOfPeople-comandos-project.png"),
  alt: "In-N-Out Burger customers queueing outside the restaurant during the pandemic — the exact friction mipOS Kiosko was designed to remove by shifting take-out ordering from the counter to a self-service screen",
};

const oldInterfaceImage: ContentImage = {
  kind: "image",
  image: img("mipOS-Kiosko-Old-comandos-studio.png"),
  alt: "Pre-MVP legacy kiosk interface for El café de Tere — Android purple top-bar with Menu 0–4 tabs and Bolón, Bolón Extra, Bolón Doble, Bolón Triple price list, the mipOS Kiosko starting point before the ROKU redesign",
};

const newDesignImage: ContentImage = {
  kind: "image",
  image: img("mipOS-Kiosko-NewDesign-comandos-project-674x1024.png"),
  alt: "mipOS Kiosko redesigned resting screen for Chili's on a ROKU-native self-order device — colourful floating burgers, fries, hotdogs, tacos, coffee and a Special Offer 50% badge around the Chili's logo, tuned for any touch device regardless of restaurant size",
};

// ———— Worth ————
const payWithCardImage: ContentImage = {
  kind: "image",
  image: img("mipOS-Kiosko-PayWithCard-comandos-projects.png"),
  alt: "mipOS Kiosko Pago con tarjetas prompt — dark self-order screen asking the customer to insert the card on the reader, with a yellow illustrated card terminal and mint Total: $280,08 call-out, bridging the gap between the Kiosko and the physical card reader",
  caption:
    "A resting screen with floating products, like early-2000s Windows screensavers — it pulled eyes off the queue and onto the Kiosko.",
};

const loadingCardImage: ContentImage = {
  kind: "image",
  image: img("mipOS-Kiosko-Loading-comandos-projects.png"),
  alt: "mipOS Kiosko Pago con tarjetas loading screen — animated illustration of a card entering a reader with Total: $280,08 displayed in green and Ingresa tu tarjeta en el lector instruction, a subtle moment of delight that reduces payment friction on cards and FinTech QR codes",
  caption:
    "Subtle animations at key payment moments — enough to cut the friction of cards and QR codes via RappyPay.",
};

export const miposKiosk: CaseStudyContent = {
  slug: "mipos-kiosk",
  kicker: "Food and Delivery — SaaS",
  brandLogo: {
    kind: "public",
    src: "/images/mipos-logo.svg",
    alt: "mipOS",
    height: 44,
  },
  hero: {
    image: heroImage,
    intro:
      "mipOS Kiosko is a solution for restaurants that have a high frequency of customers ordering takeaway food and ordering it from the establishment. Kisoko allows you to take the order and pay in one go.",
  },
  challenge: {
    heading: "A revolutionary product for its time",
    body:
      "Fast food restaurants with a high frequency of customers in which, in the midst of a pandemic, they are seeking to cater to the delivery or take-out order segment. How to do it in the midst of a pandemic? Will users be able to order what they want without feeling neglected?",
    ctaLabel: "I want to grow as mipOS",
    results: [
      "+155% user acquisition.",
      "+30% time saved on take-away orders.",
    ],
    team: [
      { label: "4 developers" },
      { label: "1 product designer", badge: "by Comandos" },
      { label: "1 Customer Experience" },
      { label: "1 User Research" },
    ],
    image: challengeImage,
  },
  adventure: {
    heading: "Understanding a new type of user",
    blocks: [
      { kind: "image", image: blueprintImage },
      {
        kind: "heading",
        heading: "Getting ready: Where are we? and What will we need?",
        body:
          "Taking the pandemic as the main context of the whole experience, we started mapping everything we needed through a Service Blueprint. We quickly became aware of some user scenarios: Mothers with children who had to take orders while caring for restless children, seniors who felt that their order was not being taken correctly. We were already seeing several key user-persons in this experience.\n\nWith only 6 weeks to get the MVP ready to run the pilots, **we focused on creating a super user-friendly product, adoption and retention of mipOS Kiosko.**",
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Seeing the mountain" },
      {
        kind: "heading",
        heading: "Where shall we start this adventure?",
        body:
          "With very little time but curiosity for this product, **we focused on 3 key opportunities:**",
      },
      {
        kind: "checklist",
        items: [
          {
            label: "Product Adoption:",
            body: "Will people feel that the attention is not warm?",
          },
          {
            label: "Retention:",
            body:
              "What must happen for people to prefer to order on a screen and not wait in line?",
          },
          {
            label: "Refer:",
            body:
              "Being a new product for non-human care, will users recommend it rather than queue?",
          },
        ],
      },
      { kind: "divider", variant: "line" },
      {
        kind: "step",
        step: "STEP 01",
        heading: "Defining an ambitious North Star Metric",
        body:
          "Our **North Star Metric** was simple: **Volume of orders placed from a Kiosk that were delivered in less than 5 minutes.** And why did we decide to handle it this way? Through user research we realized that we needed to offer a sense of advantage versus customers standing in line.",
      },
      {
        kind: "image-grid",
        columns: 2,
        images: [paymentMethodsImage, lineOfPeopleImage],
      },
      {
        kind: "caption",
        text:
          "We took into account that the bulk of payments were made in cash but we considered alliances with FinTech to give the product an extra push in its first phase of adoption.",
      },
      { kind: "divider", variant: "line" },
      {
        kind: "step",
        step: "STEP 02",
        heading: "Under what technology?",
        body:
          "**We opted for a native ROKU development** to support any kind of screens and make this product the most friendly for restaurants of any size.\n\n**Our focus:** A product that can be used by any touch device so that restaurants of any size could adopt it.",
      },
      {
        kind: "image-grid",
        columns: 2,
        images: [oldInterfaceImage, newDesignImage],
      },
      {
        kind: "caption",
        text:
          "A before and after of mipOS Kiosk — from the first legacy interface to the ROKU-native Chili's Kiosko tuned for any touch device.",
      },
    ],
  },
  worth: {
    blocks: [
      { kind: "divider" },
      { kind: "chip", icon: "making-top", label: "Making top" },
      {
        kind: "intro",
        heading: "The result surprised us all",
        body:
          "After 6 weeks we had 4 pilots in the following two weeks. The result exceeded our expectations, 47% of customers paid with RappiPay. Although cash payment was still high, it was already a cultural challenge in Mexico.",
      },
      { kind: "image", image: loadingCardImage },
      { kind: "image", image: payWithCardImage },
    ],
  },
  result: {
    heading: "A self-order Kiosk that pulled customers out of the line",
    stats: [
      {
        value: "ROKU",
        label: "card readers + FinTech QR",
        caption:
          "A product developed on ROKU — integrated with card readers and with FinTech QR codes from day one.",
        icon: {
          kind: "illustration",
          scene: "tap-pay",
          alt: "A product developed at ROKU — integrated with card readers and FinTech QR codes",
        },
      },
      {
        value: "+30%",
        label: "leads acquisition",
        caption:
          "Leads acquisition — we improved the delivery time of take-out orders by 30%.",
        icon: {
          kind: "illustration",
          scene: "sprint",
          alt: "Leads acquisition — +30% faster take-out delivery",
        },
      },
      {
        value: "+55%",
        label: "Social Selling",
        caption:
          "Social Selling — +55% of users preferred to reorder from mipOS Kiosko over queueing at the counter.",
        icon: {
          kind: "illustration",
          scene: "refer",
          alt: "Social Selling — +55% of users preferred to reorder from mipOS Kiosko",
        },
      },
    ],
  },
};
