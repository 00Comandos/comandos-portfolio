import type { CaseStudyContent, ContentImage } from "./types";
import { miposRestaurantPosImages, requireImage } from "~/lib/image-map";

const img = (filename: string) =>
  requireImage(miposRestaurantPosImages, filename);

// ———— Hero ————
const heroImage: ContentImage = {
  kind: "image",
  image: img("mipOS-POS-darkversion.png"),
  alt: "mipOS Restaurant POS for waitstaff on tablet — dark-mode order-taking screen with Porky Belly Buns ticket, Adiciones / Acompañamiento / Tipo de Pan / Agregador Combos modifiers and LATAM dishes (Juguitos, Coca-Cola, Lomo Saltado, Ceviche Mediano) on a Peruvian fine-dining table",
};

// ———— Challenge ————
const challengeImage: ContentImage = {
  kind: "image",
  image: img("mipos-pos-restaurant-comandos-project.png"),
  alt: "mipOS Restaurant POS waitstaff order flow on tablet — Mesa 01 — Orden 0129 with 8 photographic menu categories (Desayunos, Entradas, Almuerzos, Bebidas, Vinos, Postres, Piqueo, Cervezas) and Orlando Espinoza waiter session clocked in",
};

// ———— Adventure ————
const whiteboardImage: ContentImage = {
  kind: "image",
  image: img("mipos-POS-structure-comandos-project.png"),
  alt: "mipOS Restaurant POS architecture whiteboard — Comandos product designer sketching the full user journey, key integrations (Uber Eats, Rappi, Didi Food), imperative restaurant needs and engineering constraints during early user research",
  caption:
    "A whiteboard, markers and the entire mipOS POS experience — mapped end-to-end before a single line of code.",
};

const tableControlImage: ContentImage = {
  kind: "image",
  image: img("mipOS-POS-TableControl-comandos-project.png"),
  alt: "mipOS Restaurant POS Table and Order Control module on tablet — Piso 1 floor plan with Mesa 11, 15, 12, 16, 13, 17, 14, 18 and B1–B4 bar seats, Selecciona las mesas bulk-merge sheet for very large groups",
};

const dashboardImage: ContentImage = {
  kind: "image",
  image: img("mipOS-POS-Dashboard-comandos-project.png"),
  alt: "mipOS Restaurant POS manager Dashboard hi-fi prototype — projected against a wall during stakeholder validation with sales-by-restaurant bar chart, $14,200 average ticket, Mejor día marker and delivery-channel breakdown (WhatsApp, MasterCard Crédito, Rappi)",
  caption:
    "The Table and Order Control module — validated as a hi-fi prototype that felt programmed before a single engineer touched it.",
};

const darkMenuImage: ContentImage = {
  kind: "image",
  image: img("mipOS-POS-menu-comandos-project.png"),
  alt: "mipOS Restaurant POS dark-mode waiter menu — Mesa 01 Orden 0129 with 8 photographic dish categories (Desayunos, Entradas, Almuerzos, Bebidas, Vinos, Postres, Piqueo, Cervezas) tuned for low-light dining rooms and right-handed waitstaff ergonomics, with Cancelar Orden and Enviar a Cocina footer actions",
  caption:
    "A before and after of the mipOS waiter menu — darker chrome, bigger tap targets, optimised for right-handed service.",
};

const offlineImage: ContentImage = {
  kind: "image",
  image: img("mipOS-POS-SpecialMoment-comandos-project.png"),
  alt: "mipOS Restaurant POS offline safety net — No tienes WiFi sheet on top of the floor plan inviting the waiter to Activar modo Off-Line and keep taking orders without losing tickets",
  caption:
    "A rare-moment flow — a waiter loses WiFi mid-service and mipOS offers an instant Off-Line mode.",
};

// ———— Worth ————
const salesReportImage: ContentImage = {
  kind: "image",
  image: img("mipOS-POS-SalesReport-comandos-project.png"),
  alt: "mipOS Restaurant POS Reportes de Ventas dashboard on tablet — Hoy, Ayer, Esta semana and Calendario tabs with $123,949 daily Ventas, Mejor día 902, per-day sales bar chart and Porky Crispy best-seller row (381 vendidas) in the Hamburguesas category",
};

const dishSettingImage: ContentImage = {
  kind: "image",
  image: img("mipOS-POS-setting-comandos-project.png"),
  alt: "mipOS Restaurant POS per-dish customiser — Porky Belly Buns modal with Generales vs Observaciones tabs and Término 1/2, Término 3/4, Término Cocida and Pan de la casa modifiers, saved with a mint Guardar CTA for the waiter",
  caption:
    "Every dish on the menu is fully customisable — Término 1/2 on your Porky Belly Buns, one tap away.",
};

export const miposRestaurantPos: CaseStudyContent = {
  slug: "mipos-restaurant-pos",
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
      "mipOS POS was born out of the need to solve two problems: fast order taking in restaurants and having a fast software that could run on any tablet. From mipOS POS waiters can clock in and out, take orders and also merge tables for very large groups.",
  },
  challenge: {
    heading: "Revolutionizing Restaurant Management",
    body:
      "Most of the solutions on the market at that time were based on Windows 98 making simple things like support a complicated task. How to offer a solution that can be used from a tablet? With an easy and modern look and feel?",
    ctaLabel: "I want to grow as mipOS",
    results: [
      "+70% conversion rate after Freemium.",
      "+67% increase in productivity when taking an order.",
    ],
    team: [
      { label: "5 developers" },
      { label: "1 product designer", badge: "by Comandos" },
      { label: "1 User Research" },
    ],
    image: challengeImage,
  },
  adventure: {
    heading: "Understanding a new type of user",
    blocks: [
      { kind: "image", image: whiteboardImage },
      {
        kind: "heading",
        heading: "Getting ready: Where are we? and What will we need?",
        body:
          "We took a whiteboard and lots of markers to organize the entire mipOS POS experience. It was key to identify key integrations, imperative restaurant needs and, above all, the engineering constraints to accomplish such an ambitious plan in just a few weeks.\n\n**We focused on acquisition, retention and portability.** Because it's a different user experience on an iPad than on an inexpensive tablet.",
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Seeing the mountain" },
      {
        kind: "heading",
        heading: "Where shall we start this adventure?",
        body:
          "We were competing with big brands that were very well positioned at the time, **we focused on 3 pillars:**",
      },
      {
        kind: "checklist",
        items: [
          {
            label: "Activation:",
            body: "How do we shorten restaurant activation times in mipOS?",
          },
          {
            label: "Retention:",
            body: "What do restaurants really need?",
          },
          {
            label: "Sales:",
            body:
              "Restaurants have key dishes they need to promote. How do you know which dish is the most profitable?",
          },
        ],
      },
      { kind: "divider", variant: "line" },
      {
        kind: "step",
        step: "STEP 01",
        heading: "The chicken or the egg?",
        body:
          "To start was to make prioritization decisions: **Do we develop the table and order control module, or something where the restaurant has visibility and control of what is going on?**\n\nTaking into account that the restaurant manager is the one who pays for mipOS but what would give us product adoption was the table and order control module. We decided to go for the latter and that the manager's module would be automated from a base that was filled manually in the first stage.",
      },
      {
        kind: "image-grid",
        columns: 2,
        images: [tableControlImage, dashboardImage],
      },
      { kind: "divider", variant: "line" },
      {
        kind: "step",
        step: "STEP 02",
        heading: "Context of mipOS POS according to usage",
        body:
          "In our research, we noticed two important findings: **Some restaurants had a somewhat dark ambience and a light design that caused eyestrain.** Also, waiters were mostly right-handed and, according to established industry patterns, their right hand caused the order summary to be hidden.",
      },
      { kind: "image", image: darkMenuImage },
      { kind: "image", image: offlineImage },
    ],
  },
  worth: {
    blocks: [
      { kind: "divider" },
      { kind: "chip", icon: "making-top", label: "Making top" },
      {
        kind: "intro",
        heading: "A great product in an underserved niche",
        body:
          "After a lot of usability testing, prototyping and rapid iterations we were very proud of what we delivered. We developed a sales reporting module for Restaurant Management and reduced up to 36% of errors when taking an order.",
      },
      {
        kind: "image-grid",
        columns: 2,
        images: [salesReportImage, dishSettingImage],
      },
      {
        kind: "text",
        text:
          "The entire menu is customizable according to the category of the dish. Do you prefer the meat of your Porky Belly Buns in Term 1/2?",
      },
    ],
  },
  result: {
    heading: "A tablet-native Restaurant POS restaurants stayed with after the free trial",
    stats: [
      {
        value: "70%",
        label: "retention after free trial",
        caption:
          "Restaurants kept mipOS after the 30-day free trial ended, choosing it over the Windows-98-era incumbents.",
        icon: {
          kind: "illustration",
          scene: "simmer",
          alt: "Retention after free trial — kept cooking on mipOS",
        },
      },
      {
        value: "+67%",
        label: "productivity in order taking",
        caption:
          "Waiters took orders noticeably faster on mipOS vs. the previous stack of legacy POS software.",
        icon: {
          kind: "illustration",
          scene: "sprint",
          alt: "Productivity in order taking",
        },
      },
      {
        value: "Any",
        label: "tablet",
        caption:
          "A product adapted to work on any tablet — from a flagship iPad down to an inexpensive Android device in a busy LATAM restaurant.",
        icon: {
          kind: "illustration",
          scene: "anydevice",
          alt: "A product adapted to work on any tablet",
        },
      },
    ],
  },
};
