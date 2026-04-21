import type { CaseStudyContent, ContentImage } from "./types";
import { rebajatuscuentasImages, requireImage } from "~/lib/image-map";

const img = (filename: string) => requireImage(rebajatuscuentasImages, filename);

// ———— Hero ————
const heroImage: ContentImage = {
  kind: "image",
  image: img("rebajaTusCuentas-Comandos-project.png"),
  alt: "RebajaTusCuentas.com homepage — Paga menos intereses en tu hipoteca hero with free-advisor CTA, Scotiabank, Interbank, BBVA, BanBif, BCP and tfc logos powering the Peruvian mortgage comparison PropTech",
};

// ———— Challenge ————
const challengeImage: ContentImage = {
  kind: "image",
  image: img("rebajatuscuentas-dashboard-comandos-project.png"),
  alt: "RebajaTusCuentas Mis Solicitudes dashboard — Préstamos con Garantía Hipotecaria, Compra de Deuda Hipotecaria and Nuevo Crédito Hipotecario progress trackers with secure contact details for Martín's pre-qualified mortgage applications",
};

// ———— Adventure ————
const boardImage: ContentImage = {
  kind: "image",
  image: img("rebajaTusCuentas-board-comandos-project.png"),
  alt: "RebajaTusCuentas discovery wall — hundreds of pink, blue and green post-it notes mapping the Peruvian mortgage user-journey, pain points and data-algorithm feeds after city-by-city phone interviews",
  caption:
    "Hundreds of post-its on the wall — the raw user-research map after weeks of phone interviews across Peru.",
};

const old2018Image: ContentImage = {
  kind: "image",
  image: img("rebajaTusCuentas-2018-comandos-project.png"),
  alt: "RebajaTusCuentas 2018 legacy website — Te ayudamos a rebajar la cuota de tu credito hipotecario landing with full-name and DNI fields, orange Rebaja tu cuota CTA and city-skyline illustration",
};

const mortgageListImage: ContentImage = {
  kind: "image",
  image: img("rebajaTusCuentas-MortgageList-comandos-project.png"),
  alt: "RebajaTusCuentas redesigned pre-qualified credit offer — Tu oferta expira en 15 días countdown with savings strategy, currency, term in months and Scotiabank, Interbank and BCP quotes side-by-side",
};

const newDesignImage: ContentImage = {
  kind: "image",
  image: img("rebajaTusCuentas-NewDesign-comandos-project.png"),
  alt: "RebajaTusCuentas new brand illustration — young woman on a purple couch chatting on her phone, introducing the modern graphic line that paved the expansion to Peru, Mexico and Colombia",
  caption:
    "The new modern graphic line that paved RebajaTusCuentas' expansion to 3 countries across LATAM.",
};

const subirDocumentoImage: ContentImage = {
  kind: "image",
  image: img("RebajaTusCuentas-SubirDocumento-comandos-project.png"),
  alt: "RebajaTusCuentas mobile document-upload flow — ¡Hola Martín! Carga tus documentos with SUNAT verification timer, Tu DNI and DNI de tu cónyuge tasks, Declaración Jurada income verification and a Sube tu DNI sheet to pick from gallery, camera or computer",
  caption:
    "The restructured document-upload flow post pre-approval — each case handed to an account executive for follow-up.",
};

// ———— Worth ————
const registerImage: ContentImage = {
  kind: "image",
  image: img("RebajaTusCuentas-Register-comandos-project.png"),
  alt: "RebajaTusCuentas conversational registration bot — ¡Hola! Soy Nicolás onboarding with Nuevo Crédito Hipotecario, Compra de Deuda Hipotecaria and Préstamos con Garantía Hipotecaria product cards, SUNARP property lookup and personal-data steps",
  caption:
    "The automated registration bot — replaced a 40-question form and lifted conversion from 9% to 60%.",
};

const resultMortgageImage: ContentImage = {
  kind: "image",
  image: img("rebajatuscuentas-result-mortgage-comandosStudio.png"),
  alt: "RebajaTusCuentas pre-authorized mortgage result — 80-month Scotiabank and Interbank offers at 8% TEA with USD 605.31 monthly savings, savings-strategy sidebar and Trabajamos únicamente para ti, No para el banco trust banner",
  caption:
    "The redesigned pre-authorized mortgage result — transparent status, bank-neutral savings and a single upgrade CTA.",
};

export const rebajatuscuentas: CaseStudyContent = {
  slug: "rebajatuscuentas",
  kicker: "PropTech — Ecommerce",
  brandLogo: {
    kind: "public",
    src: "/images/rebajatuscuentas-logo.svg",
    alt: "RebajaTusCuentas.com",
    height: 32,
  },
  hero: {
    image: heroImage,
    intro:
      "RebajaTusCuentas was born out of the need to optimize payment times and installments on long-term mortgages. Taking into account that any debt can be renegotiated, we save up to 3 years of payments to our users. We also automated the pre-qualification of credit, reducing 3 months of processing to less than 1 minute.",
  },
  challenge: {
    heading: "Redesigning the mortgage market in Latam",
    body:
      "People are always looking for the best mortgage option to buy their first property, remodel it or buy another one. However, these procedures can take up to 3 months in a country where the banking penetration rate is very low. How can we help to solve this problem?",
    ctaLabel: "I want to grow as RebajaTusCuentas",
    results: [
      "+300% growth in 12 months",
      "+60% new registrations and credit ratings.",
    ],
    team: [
      { label: "3 developers" },
      { label: "1 product designer", badge: "by Comandos" },
      { label: "1 User Research" },
    ],
    image: challengeImage,
  },
  adventure: {
    heading: "Organizing our first user journey",
    blocks: [
      { kind: "image", image: boardImage },
      {
        kind: "heading",
        heading: "Getting ready: Where are we? and What will we need?",
        body:
          "We analyzed every aspect of a mortgage and its difficulties in acquiring it in an underbanked country like Peru. We started to conduct interviews with users in different cities in Peru and it was quite challenging, due to the low internet penetration at that time we had to do it the old fashioned way: traditional phone calls and many manual notes to start feeding our data algorithms. Our focus was on optimizing our solution to mobile devices with a very fast response rate in order not to lose the attention of our users.",
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Seeing the mountain" },
      {
        kind: "heading",
        heading: "Where do we start to provide value to our users?",
        body:
          "We landed everything on hundreds of post-it notes on a wall and defined our north:",
      },
      {
        kind: "checklist",
        items: [
          {
            label: "Value and security:",
            body:
              "Deliver the value of RebajaTusCuentas quickly while conveying the certainty that nothing is a fraud.",
          },
          {
            label: "Retention:",
            body:
              "While we could give pre-qualifications of credits in a minute, how do we get users to complete the document submission process?",
          },
        ],
      },
      { kind: "divider", variant: "line" },
      {
        kind: "step",
        step: "STEP 01",
        heading: "Defining a Product-Market-Fit niche",
        body:
          "We discovered an interesting niche: People who already had a loan with a bank and who could renegotiate the debt with another bank to obtain payment benefits. As a result, we saved time (in years) of payments.\n\nThese people were more willing to upload the necessary documentation to complete the user-journey of pre-qualification of credit. **This entire process is FREE to the end user.**",
      },
      {
        kind: "image-grid",
        columns: 2,
        images: [old2018Image, mortgageListImage],
      },
      {
        kind: "caption",
        text:
          "We completely redesigned the entire RebajaTusCuentas from scratch. On the left is the old user experience. On the right, an iterated version of the pre-qualified credit offer.",
      },
      { kind: "divider", variant: "line" },
      {
        kind: "step",
        step: "STEP 02",
        heading: "A communication for all segments",
        body:
          "We collaborated in the redesign of the communication style of RebajaTusCuentas, paving the way to expand the business model to 3 countries: Peru, Mexico and Colombia.",
      },
      { kind: "image", image: newDesignImage },
      { kind: "image", image: subirDocumentoImage },
    ],
  },
  worth: {
    blocks: [
      { kind: "divider" },
      { kind: "chip", icon: "making-top", label: "Making top" },
      {
        kind: "intro",
        heading: "A product with an amazing growth",
        body:
          "After 6 weeks of prototyping, user interviews and some experiments we were ready to go out with an MVP and evaluate at scale. +300% growth in 12 months was the biggest result.",
      },
      { kind: "image", image: registerImage },
      {
        kind: "text",
        text:
          "After 3 iterations and experimentation on the registration we achieved incredible results. From a 40-question form with a 9% conversion rate we went to an automated bot with a 60% conversion rate.",
      },
      { kind: "image", image: resultMortgageImage },
    ],
  },
  result: {
    heading: "A PropTech that redesigned mortgages across 3 LATAM countries",
    stats: [
      {
        value: "+300%",
        label: "growth in 12 months",
        caption:
          "The biggest result after 6 weeks of prototyping, user interviews and MVP experimentation.",
        icon: { kind: "illustration", scene: "rise", alt: "Growth in 12 months" },
      },
      {
        value: "+60%",
        label: "registrations & credit ratings",
        caption:
          "New registrations and credit ratings lifted after swapping a 40-question form for an automated bot (9% → 60% conversion).",
        icon: {
          kind: "illustration",
          scene: "launch",
          alt: "New registrations and credit ratings",
        },
      },
      {
        value: "+82%",
        label: "completed the process",
        caption:
          "Users who reached pre-approval completed the full process, including document upload.",
        icon: {
          kind: "illustration",
          scene: "summit",
          alt: "Users completed the process",
        },
      },
    ],
  },
};
