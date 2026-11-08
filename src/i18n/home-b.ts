// Copy for the home "B" variant (/home-b/): audience paths + FAQ.
// Kept apart from ui.ts until the variant is chosen.
import type { Lang } from "~/i18n";

export type HomePath = {
  label: string;
  title: string;
  body: string;
  points: readonly string[];
  cta: string;
  /** Contact form project types to preselect (values of PROJECT_TYPES). */
  types: readonly string[];
  /** `/contact/?type=` fallback when the inline form isn't on the page. */
  preset: string;
};

export type HomeB = {
  paths: { eyebrow: string; title: string; sub: string; items: readonly HomePath[] };
  faq: { eyebrow: string; title: string; items: readonly { q: string; a: string }[] };
};

export const homeB: Record<Lang, HomeB> = {
  en: {
    paths: {
      eyebrow: "Start here",
      title: "Where is your product today?",
      sub: "Two very different starting points — pick yours and the brief starts half-written.",
      items: [
        {
          label: "Founders",
          title: "We're launching",
          body: "Validate the idea, design the MVP and ship a first release your users trust from day one.",
          points: ["Research & validation", "MVP or pilot", "Product strategy"],
          cta: "Start with a launch plan",
          types: ["MVP / Pilot", "Product Strategy"],
          preset: "launch",
        },
        {
          label: "Products at scale",
          title: "It works — but it's stuck",
          body: "Find what's blocking growth in a live product, fix the UX at scale and prove it with experiments.",
          points: ["UX audit & research", "Redesign at scale", "Growth & experimentation"],
          cta: "Start with a diagnostic",
          types: ["UX Research", "Full Product Redesign", "Growth / Experimentation"],
          preset: "scale",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Before we talk",
      items: [
        {
          q: "How does an engagement start?",
          a: "With a 30-minute discovery call — no pitch deck needed. If there's a fit, we run a short diagnostic (data, UX audit, user interviews) and send a scoped proposal with phases, timeline and fee.",
        },
        {
          q: "How much does it cost?",
          a: "It depends on scope and stage. Work runs as a fixed-scope project, a monthly retainer, or fractional or full-time design leadership. You get a clear quote after the discovery call — never an hourly meter.",
        },
        {
          q: "How fast will we see results?",
          a: "First findings land within the first weeks of the diagnostic. Karta's metal card went from brief to launch in 45 days; Stori's Inversión+ lifted activation 477% in 90 days.",
        },
        {
          q: "Do you work with startups or established companies?",
          a: "Both. Founders going from first fit to launch, and companies with products used by millions that need fixing or growing — Stori, Karta, Truora, Legalario and Yaydoo among them.",
        },
        {
          q: "Can you work with our in-house team?",
          a: "Yes. We plug into your product and engineering team, or lead design as a fractional or full-time Head of Design — and leave a design system and rituals so the team keeps going on its own.",
        },
        {
          q: "Where are you based? Which languages?",
          a: "Mexico City, working worldwide and remote-first. Everything runs in English or Spanish, and we reply within one business day.",
        },
      ],
    },
  },
  es: {
    paths: {
      eyebrow: "Empieza aquí",
      title: "¿Dónde está tu producto hoy?",
      sub: "Dos puntos de partida muy distintos — elige el tuyo y el brief queda medio escrito.",
      items: [
        {
          label: "Founders",
          title: "Estamos lanzando",
          body: "Valida la idea, diseña el MVP y lanza una primera versión en la que tus usuarios confíen desde el día uno.",
          points: ["Research y validación", "MVP o piloto", "Estrategia de producto"],
          cta: "Empezar con un plan de lanzamiento",
          types: ["MVP / Pilot", "Product Strategy"],
          preset: "launch",
        },
        {
          label: "Productos a escala",
          title: "Funciona — pero está atorado",
          body: "Encuentra qué frena el crecimiento de un producto en vivo, arregla la UX a escala y pruébalo con experimentos.",
          points: ["UX audit y research", "Rediseño a escala", "Growth y experimentación"],
          cta: "Empezar con un diagnóstico",
          types: ["UX Research", "Full Product Redesign", "Growth / Experimentation"],
          preset: "scale",
        },
      ],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Antes de hablar",
      items: [
        {
          q: "¿Cómo empieza un proyecto?",
          a: "Con una llamada de discovery de 30 minutos — sin pitch deck. Si hay fit, hacemos un diagnóstico corto (datos, UX audit, entrevistas con usuarios) y te enviamos una propuesta con fases, tiempos y costo.",
        },
        {
          q: "¿Cuánto cuesta?",
          a: "Depende del alcance y la etapa. Trabajamos por proyecto con alcance definido, con un retainer mensual, o como liderazgo de diseño fraccional o full-time. Recibes una cotización clara después de la llamada — nunca por hora.",
        },
        {
          q: "¿Qué tan rápido veremos resultados?",
          a: "Los primeros hallazgos llegan en las primeras semanas del diagnóstico. La tarjeta metálica de Karta pasó del brief al lanzamiento en 45 días; Inversión+ de Stori subió la activación 477% en 90 días.",
        },
        {
          q: "¿Trabajan con startups o con empresas establecidas?",
          a: "Con ambas. Founders que van del primer fit al lanzamiento, y empresas con productos que usan millones de personas y necesitan arreglarse o crecer — entre ellas Stori, Karta, Truora, Legalario y Yaydoo.",
        },
        {
          q: "¿Pueden trabajar con nuestro equipo interno?",
          a: "Sí. Nos sumamos a tu equipo de producto e ingeniería, o lideramos diseño como Head of Design fraccional o full-time — y dejamos un design system y rituales para que el equipo siga solo.",
        },
        {
          q: "¿Dónde están? ¿En qué idiomas trabajan?",
          a: "En Ciudad de México, trabajando con todo el mundo y en remoto. Todo funciona en inglés o español, y respondemos en máximo un día hábil.",
        },
      ],
    },
  },
};
