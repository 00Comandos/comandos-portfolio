// Per-language copy layered on top of `home-before-after.ts` (which holds
// the EN captions, images and alts). Keyed by case-study slug.
// `tags` are the service lines shown on each case in the home "Selected
// work" section.

import type { Lang } from "~/i18n";

type CaseCopy = {
  tags: readonly string[];
  duringCaption?: string;
  nowCaption?: string;
};

export const homeWorkCopy: Record<Lang, Record<string, CaseCopy>> = {
  en: {
    "stori-inversion-plus": { tags: ["Product Design", "Growth"] },
    "truora-report": { tags: ["UX Research", "Product Design"] },
    "karta-card": { tags: ["Product Design", "Brand"] },
    "legalario-e-signature": { tags: ["UX Research", "Product Design"] },
    "mipos-kiosk": { tags: ["Product Design", "Growth"] },
    "stadio-apple-watch": { tags: ["MVP", "Product Design"] },
    "mipos-dark-kitchen": { tags: ["Product Design", "SaaS"] },
    "yaydoo-design-system": { tags: ["Design System"] },
    rebajatuscuentas: { tags: ["Product Design", "Growth"] },
  },
  es: {
    "stori-inversion-plus": {
      tags: ["Product Design", "Growth"],
      duringCaption:
        "Un flujo de ahorro que los usuarios abrían y abandonaban a mitad del onboarding.",
      nowCaption:
        "Inversión guiada a plazo fijo. +477% de activación en 90 días.",
    },
    "truora-report": {
      tags: ["UX Research", "Product Design"],
      duringCaption:
        "Reporte legacy en bruto. 8 minutos de lectura. Nadie entendía el score de confianza.",
      nowCaption:
        "Un solo score de un vistazo. 50% más rápido. 85% de satisfacción en equipos de HR en LATAM.",
    },
    "karta-card": {
      tags: ["Product Design", "Brand"],
      duringCaption:
        "Tarjeta genérica de la industria. Banda magnética simple. Ninguna señal premium.",
      nowCaption:
        "Visa Infinite negra de 17 gramos. 1,000 clientes en los primeros 12 meses.",
    },
    "legalario-e-signature": {
      tags: ["UX Research", "Product Design"],
      duringCaption:
        "Abandono a mitad del flujo. Firma dibujada con el dedo en un rectángulo diminuto.",
      nowCaption:
        "99% de completion rate. Identidad biométrica certificada por iBeta de punta a punta.",
    },
    "mipos-kiosk": {
      tags: ["Product Design", "Growth"],
      duringCaption:
        "Tabs moradas de Android. Listas planas de precios. Kioscos que nadie usaba.",
      nowCaption:
        "Kiosco de Chili's nativo en ROKU. +155% de conversión. Cualquier dispositivo touch.",
    },
    "stadio-apple-watch": {
      tags: ["MVP", "Product Design"],
      duringCaption:
        "Primeros bocetos de una app social de running para Apple Watch.",
      nowCaption:
        "MVP lanzado en 4 semanas. +30% de recomendación boca a boca. 45% de retención.",
    },
    "mipos-dark-kitchen": {
      tags: ["Product Design", "SaaS"],
      duringCaption:
        "Diez tablets de apps de delivery clavadas en una pared de madera.",
      nowCaption:
        "Un dashboard unificado. 99% de integración. +400% de productividad.",
    },
    "yaydoo-design-system": {
      tags: ["Design System"],
      duringCaption: "Ocho logos inconsistentes en siete productos.",
      nowCaption:
        "Grill Design System. +40% de productividad del equipo. Adquisición por Paystand.",
    },
    rebajatuscuentas: {
      tags: ["Product Design", "Growth"],
      duringCaption:
        "Un comparador hipotecario de 2018 atorado en un solo país.",
      nowCaption:
        "Rediseño UX completo. +300% de crecimiento. Perú → Colombia + México.",
    },
  },
};

/** Headline numbers for the home Impact band — all sourced from the case studies. */
export const homeImpact: Record<
  Lang,
  readonly { value: string; label: string; brand: string; slug: string }[]
> = {
  en: [
    { value: "+477%", label: "activation in 90 days", brand: "Stori", slug: "stori-inversion-plus" },
    { value: "+155%", label: "kiosk conversion", brand: "mipOS", slug: "mipos-kiosk" },
    { value: "99%", label: "e-signature completion", brand: "Legalario", slug: "legalario-e-signature" },
    { value: "+300%", label: "growth across 3 countries", brand: "RebajaTusCuentas", slug: "rebajatuscuentas" },
  ],
  es: [
    { value: "+477%", label: "de activación en 90 días", brand: "Stori", slug: "stori-inversion-plus" },
    { value: "+155%", label: "de conversión en kiosco", brand: "mipOS", slug: "mipos-kiosk" },
    { value: "99%", label: "de firmas completadas", brand: "Legalario", slug: "legalario-e-signature" },
    { value: "+300%", label: "de crecimiento en 3 países", brand: "RebajaTusCuentas", slug: "rebajatuscuentas" },
  ],
};
