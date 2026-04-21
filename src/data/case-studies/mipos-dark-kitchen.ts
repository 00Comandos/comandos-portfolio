import type { CaseStudyContent, ContentImage } from "./types";
import { miposDarkKitchenImages, requireImage } from "~/lib/image-map";

const img = (filename: string) =>
  requireImage(miposDarkKitchenImages, filename);

// ———— Hero ————
const heroImage: ContentImage = {
  kind: "image",
  image: img("comandos-mipOS-DarkKitchen.png"),
  alt: "mipOS Dark Kitchen management SaaS on laptop — Menú General, Menú Uber Eats and Menú Rappi columns with categorías, productos, modificadores and per-country delivery-app toggles (Uber Eats, Glovo, Rappi, Didi Food) for Mexican, Asian and Peruvian virtual brands unified on one device",
};

// ———— Challenge ————
const challengeImage: ContentImage = {
  kind: "image",
  image: img("mipos-darkkitchen-comandos-project.png"),
  alt: "mipOS Dark Kitchen Ordenes dashboard — 99% order-integration counter with live Uber Eats, Didi Food, Rappi and iFood incoming orders, Rechazar / Aceptar actions and Lista para entrega status on a single screen",
};

// ———— Adventure ————
const tabletsWallImage: ContentImage = {
  kind: "image",
  image: img("mipOS-DarkKitchen-2019-comandos-project.png"),
  alt: "mipOS Dark Kitchen field research (2019) — 10+ delivery-app tablets for Uber Eats, Didi Food, Rappi and iFood pinned to a wooden wall and wired chaotically, the operational pain mipOS set out to replace with a single screen",
  caption:
    "The Dark Kitchen tablet wall — the operational pain mipOS was built to replace with a single screen.",
};

const userJourneyImage: ContentImage = {
  kind: "image",
  image: img("mipOS-DarkKitchen-UserJourney-comados-studio.png"),
  alt: "mipOS Dark Kitchen treasure-map user journey — six-stage loop of Register, Delivery App's, Menu, Receive orders, Order status and Delivery used to scope the MVP around the Dark Kitchen operator flow",
};

const comisariatoImage: ContentImage = {
  kind: "image",
  image: img("mipOS-DarkKitchen-Comisariato-comandos-studio-comisariato.png"),
  alt: "mipOS Dark Kitchen comisariato field research — hair-netted kitchen staff handling fresh produce in yellow and red crates inside a walk-in cooler, informing the inventory-replenishment insights that shaped the product",
};

const detailFoodImage: ContentImage = {
  kind: "image",
  image: img("mipOS-DarkKitchen-detailFood-comandos-project.png"),
  alt: "mipOS Dark Kitchen order-detail ticket — Didi Food E2691 with 7 items (Signature Club House, McTrío Mediano BBQ Crispy Onion, Paquete 8 Para dos, 4x3 McFlurrys de Oreo, Paquete especial 4 hamburguesas + 2 papas), total $1,519.00 and a Progreso del pedido timeline from Pedido aceptado to Entrega de la orden",
  caption:
    "The order-detail ticket — a clean summary for both a Dark Kitchen manager and a day-to-day kitchen operator.",
};

const ordersOverviewImage: ContentImage = {
  kind: "image",
  image: img("mipos-darkkitchen-orders-comandos-project.png"),
  alt: "mipOS Dark Kitchen unified Ordenes queue — live rows from Uber Eats, Didi Food, Rappi and iFood with 39-second and 34-second countdown badges, brand (Tizoncito, Paz Azul, Sliders), ID, customer name and Lista para entrega / Aceptar / Rechazar actions across 30+ virtual brands",
  caption:
    "Transparency as a single-word north star — every delivery app and every virtual brand in one queue.",
};

// ———— Worth ————
const menuImage: ContentImage = {
  kind: "image",
  image: img("mipOS-DarkKitchen-Menu-comandos-project.png"),
  alt: "mipOS Dark Kitchen menu and brand configurator — Menú General, Menú Uber Eats and Menú Rappi side-by-side with per-brand categorías, horarios, 27 productos, 14 modificadores and integraciones por país toggles (Uber Eats, Glovo, Rappi, Didi Food) so a virtual brand like HotDogs Don Pepito ships a distinct menu per delivery app",
  caption:
    "The menu and brand configurator — every Delivery App menu activated or deactivated for every virtual brand from a single device.",
};

const registerImage: ContentImage = {
  kind: "image",
  image: img("mipOS-DarkKitchen-Register-comandos-project.png"),
  alt: "mipOS Dark Kitchen onboarding — Regístrate screen to select and integrate Uber Eats, Rappi, Didi Food, iFood, Pedidos Ya, Glovo and Justo delivery apps with per-app activation timeframe, the transparency lever that lifted retention to 70%",
  caption:
    "Optimised registration flow — a Dark Kitchen goes live on its first Delivery Apps in under 2 days.",
};

export const miposDarkKitchen: CaseStudyContent = {
  slug: "mipos-dark-kitchen",
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
      "From mipOS we discovered that there was a large unattended food sector. A restaurant dedicated to Dark Kitchen (hidden kitchens) can have, on average, +10 brands of different types of food (Mexican, Asian, Peruvian, etc.) that are activated or deactivated according to the seasonality of the day. However, each brand must have a tablet provided by each delivery app.",
  },
  challenge: {
    heading: "Revolutionizing Dark Kitchen management",
    body:
      "A restaurant with +30 virtual brands can have +90 tablets to manage its Dark Kitchen. Each tablet is associated to a Delivery app like Uber Eats, How to solve this problem by reducing 90 tablets to one?",
    ctaLabel: "I want to grow as mipOS",
    results: [
      "+400% productivity increase in Dark Kitchen management.",
      "+80% delivery of correct orders to diners.",
    ],
    team: [
      { label: "5 developers" },
      { label: "1 product designer", badge: "by Comandos" },
      { label: "1 User Research" },
    ],
    image: challengeImage,
  },
  adventure: {
    heading: "Where to start to provide value to users?",
    blocks: [
      { kind: "image", image: tabletsWallImage },
      {
        kind: "heading",
        heading: "Getting ready: Where are we? and What will we need?",
        body:
          "We visited +10 Dark Kitchens to get a first-hand look at their operation, how they organize their day-to-day operations and how they manage their kitchen from inventory management to delivering a ready dish to a delivery app.\n\n**We focused on increasing Dark Kitchen productivity and a user experience as easy as opening a piece of candy.**",
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Seeing the mountain" },
      {
        kind: "heading",
        heading: "What is the focus of this product?",
        body:
          "After analyzing the entire user journey and the huge productivity pain of the Dark Kitchen, **we focused our efforts on:**",
      },
      {
        kind: "checklist",
        items: [
          {
            label: "Productivity:",
            body:
              "Eliminate the management of 90 tablets and concentrate efforts on a single screen.",
          },
          {
            label: "Retention:",
            body:
              "What do concealed kitchens really need after having everything on a tablet?",
          },
        ],
      },
      { kind: "divider", variant: "line" },
      {
        kind: "step",
        step: "STEP 01",
        heading: "Defining an MVP to validate ideas",
        body:
          "First we went deep into the operation of a Dark Kitchen to think like a Dark Kitchen restaurant and from there we created a User Journey as a treasure map. With this defined we started to create low resolution prototypes to validate and iterate our ideas.",
      },
      {
        kind: "image-grid",
        columns: 2,
        images: [userJourneyImage, comisariatoImage],
      },
      {
        kind: "caption",
        text:
          "Understanding the life cycle of fresh food, how and when to replenish the warehouse as sales increase or are maintained were key insights for mipOS.",
      },
      { kind: "divider", variant: "line" },
      {
        kind: "step",
        step: "STEP 02",
        heading: "Several iterations with earlier adopters",
        body:
          "Starting with a low resolution prototype and many times doing Wizard of Oz to test ideas with early product enthusiasts got us moving quickly and in a matter of 2 weeks we had everything ready to make an engineered MVP.",
      },
      { kind: "image", image: detailFoodImage },
      { kind: "image", image: ordersOverviewImage },
    ],
  },
  worth: {
    blocks: [
      { kind: "divider" },
      { kind: "chip", icon: "making-top", label: "Making top" },
      {
        kind: "intro",
        heading: "A product that customers loved from the start",
        body:
          "After many usability tests and 13 general iterations, the result surprised even the most conservative: +400% productivity in one week, considering customers who gave up all tablets to use mipOS in their operation.",
      },
      { kind: "image", image: menuImage },
      {
        kind: "text",
        text:
          "We created a special menu and brand configurator. Imagine having \"HotDogs Don Pepito\" with a different menu for each Delivery Apps where you can activate and deactivate at your convenience. All from a single device.",
      },
      { kind: "image", image: registerImage },
      {
        kind: "text",
        text:
          "We optimize the registration flow to mipOS Dark Kitchen, maintaining transparency in the promise of value at all times.",
      },
    ],
  },
  result: {
    heading: "A product that revolutionized Dark Kitchen management",
    stats: [
      {
        value: "+400%",
        label: "productivity in one week",
        caption:
          "Dark Kitchens that gave up 90+ delivery-app tablets to run on mipOS saw a +400% productivity jump in a single week.",
        icon: {
          kind: "illustration",
          scene: "sprint",
          alt: "Productivity in one week",
        },
      },
      {
        value: "+80%",
        label: "correct orders delivered",
        caption:
          "Orders reached the right diner, right brand, right Delivery App — no cross-wires across 30+ virtual brands.",
        icon: {
          kind: "illustration",
          scene: "certified",
          alt: "Correct orders delivered",
        },
      },
      {
        value: "+70%",
        label: "retention after first setup",
        caption:
          "New operators stayed with mipOS after setting up their first Delivery Apps in under 2 days.",
        icon: {
          kind: "illustration",
          scene: "magnet",
          alt: "Retention after first Delivery Apps setup",
        },
      },
    ],
  },
};
