// Home FAQ copy (EN / ES) — also emitted as FAQPage JSON-LD.
import type { Lang } from "~/i18n";

export type HomeFaq = {
  eyebrow: string;
  title: string;
  items: readonly { q: string; a: string }[];
};

export const homeFaq: Record<Lang, HomeFaq> = {
  en: {
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
  es: {
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
};
