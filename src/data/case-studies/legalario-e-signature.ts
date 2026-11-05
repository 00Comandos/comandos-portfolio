import type { CaseStudyContent, ContentImage } from "./types";
import { legalarioImages, requireImage } from "~/lib/image-map";

const img = (filename: string) => requireImage(legalarioImages, filename);

// ———— Hero ————
const heroImage: ContentImage = {
  kind: "image",
  image: img("Legalario-ElectronicSignature-2.webp"),
  mobileImage: img("Legalario-ElectronicSignature-2-768x510.webp"),
  alt: "Legalario mobile e-signature success screen on iPhone — legally valid electronic signature captured end-to-end with biometric face scan, held in-hand by a Mexican SMB operator closing a contract outside the office, the redesigned LegalTech flow that replaced print-and-scan notarised paper across LATAM",
};

// ———— Adventure ————
const interviewsImage: ContentImage = {
  kind: "image",
  image: img("legalario-electronic-signature-interviews-2048x1025.webp"),
  alt: "Legalario user research — 25+ conversations with customers and users around electronic signing",
};

const legacyDesktop: ContentImage = {
  kind: "image",
  image: img("legalario-electronic-signature-legacy-2048x829.webp"),
  alt: "Legalario legacy experience — three phone screens showing the outdated signing flow",
};
const legacyMobile01: ContentImage = {
  kind: "image",
  image: img("legalario-electronic-signature-legacy-01-768x982.webp"),
  alt: "Legalario legacy flow — identity recognition in process screen",
};
const legacyMobile02: ContentImage = {
  kind: "image",
  image: img("legalario-electronic-signature-legacy-02-768x981.webp"),
  alt: "Legalario legacy e-signature flow — draw-your-signature step inside a cramped finger-stroke rectangle on mobile, the pre-redesign UX that confused Mexican SMB signers and leaked drop-off before the Comandos rebuild",
};
const legacyMobile03: ContentImage = {
  kind: "image",
  image: img("legalario-electronic-signature-legacy-03-768x981.webp"),
  alt: "Legalario legacy e-signature flow — contract preview rendered inside a zoomed-out browser frame on a phone, the low-confidence final review step Mexican signers had to accept before the new design moved it to a full-screen reader with biometric confirmation",
};

const v1Desktop: ContentImage = {
  kind: "image",
  image: img("legalario-electronic-signature-v1-2048x984.webp"),
  alt: "Legalario redesigned v1 — modern browser-first signing flow with biometric step",
};
const v1Mobile01: ContentImage = {
  kind: "image",
  image: img("legalario-electronic-signature-mobile-v1-768x697.webp"),
  alt: "Legalario redesigned v1 — contract preview and identity capture on mobile",
};
const v1Mobile02: ContentImage = {
  kind: "image",
  image: img("legalario-electronic-signature-mobile-v1-2-768x697.webp"),
  alt: "Legalario redesigned v1 — facial biometrics and handwritten signature on mobile",
};

const testingImage: ContentImage = {
  kind: "image",
  image: img("legalario-electronic-signature-testing-2048x1052.webp"),
  alt: "End-to-end testing — desktop identity picker and 30+ facial recognition models with fraud detection",
};

// ———— Worth: before/after compares (halves cut from the old composites) ————
type Img = Extract<ContentImage, { kind: "image" }>;
const signedBefore: Img = {
  kind: "image",
  image: img("legalario-signed-document-before-982x1100.webp"),
  alt: "Signed document, first version — legacy completion screen: an 'Importante' note and a grey '¡Tu proceso de firma está completo!' box above the document preview",
};
const signedAfter: Img = {
  kind: "image",
  image: img("legalario-signed-document-after-982x1100.webp"),
  alt: "Signed document, new version — green success banner 'Has firmado tus documentos correctamente', a Legalario product card and the signed contract below",
};
const biometricBefore: Img = {
  kind: "image",
  image: img("legalario-biometric-verification-before-982x1100.webp"),
  alt: "Biometric verification, first version — basic camera step with a stepper bar and a plain face oval over the live selfie",
};
const biometricAfter: Img = {
  kind: "image",
  image: img("legalario-biometric-verification-after-982x1100.webp"),
  alt: "Biometric verification, new version — guided face framing with an 'Ajusta tu cara aquí' prompt and a progress ring around the selfie oval",
};
const instructionsBefore: Img = {
  kind: "image",
  image: img("legalario-instructions-before-982x1100.webp"),
  alt: "Signing instructions, first version — dense text screen 'Información sobre la captura de la identificación' with three small rules for the ID photo",
};
const instructionsAfter: Img = {
  kind: "image",
  image: img("legalario-instructions-after-982x1100.webp"),
  alt: "Signing instructions, new version — illustrated identity capture: a photo of a person photographing their ID and the line 'Toma la foto del frente de tu identificación'",
};

// ———— Worth: capture sequences (frames cut from the old strips) ————
const passiveLifeFrames: { image: Img; label: string }[] = [
  {
    label: "Fit your face inside the silhouette",
    image: {
      kind: "image",
      image: img("legalario-passive-life-frame-1-434x947.webp"),
      alt: "Passive life detection, step 1 — selfie oval with the prompt 'Ajusta tu cara dentro de la silueta'",
    },
  },
  {
    label: "Hold this position",
    image: {
      kind: "image",
      image: img("legalario-passive-life-frame-2-434x947.webp"),
      alt: "Passive life detection, step 2 — selfie oval with the prompt 'Mantén esta posición' and the progress ring advancing",
    },
  },
  {
    label: "Move closer",
    image: {
      kind: "image",
      image: img("legalario-passive-life-frame-3-433x947.webp"),
      alt: "Passive life detection, step 3 — selfie oval with the prompt 'Acércate más'",
    },
  },
  {
    label: "Hold this position",
    image: {
      kind: "image",
      image: img("legalario-passive-life-frame-4-434x947.webp"),
      alt: "Passive life detection, step 4 — face closer to the camera, prompt 'Mantén esta posición'",
    },
  },
];
const textToSpeechFrames: { image: Img; label: string }[] = [
  {
    label: "Press the button and follow the instructions",
    image: {
      kind: "image",
      image: img("legalario-text-to-speech-frame-1-435x949.webp"),
      alt: "Proof of life with text-to-speech, step 1 — selfie oval with the prompt 'Presiona el botón y sigue las instrucciones' and a record button",
    },
  },
  {
    label: "Read the phrase aloud",
    image: {
      kind: "image",
      image: img("legalario-text-to-speech-frame-2-435x949.webp"),
      alt: "Proof of life with text-to-speech, step 2 — recording: 'Lee fuerte y claro' and the phrase 'Hola soy María Guzmán' with a 00:10 timer",
    },
  },
  {
    label: "Processing",
    image: {
      kind: "image",
      image: img("legalario-text-to-speech-frame-3-434x949.webp"),
      alt: "Proof of life with text-to-speech, step 3 — the same phrase on screen with a blue ring and a 'Procesando' button",
    },
  },
];

// ———— Result charts ————
const completionRateChart: ContentImage = {
  kind: "image",
  image: img("legalario-electronic-siganature-completion-rate.png"),
  alt: "Signing flow completion-rate line chart rising to 99% after the redesign",
};
const npsChart: ContentImage = {
  kind: "image",
  image: img("legalario-electronic-signature-nps.png"),
  alt: "Legalario NPS trend chart — steady +24% increase across six months",
};
const signedDocumentsChart: ContentImage = {
  kind: "image",
  image: img("legalario-result-document.png"),
  alt: "Signed-documents growth chart — +31% more documents signed after the redesign",
};
const biometricModelsImage: ContentImage = {
  kind: "image",
  image: img("legalario-new-biometric-models.webp"),
  alt: "Four new biometric models implemented — visualized as a grid of green dots with a portrait showing face-scan overlay",
};
const biometricDetailImage: ContentImage = {
  kind: "image",
  image: img("legalario-electronic-signature-biometric-2048x1025.webp"),
  alt: "Legalario biometric validation step — Mexican SMB signer's profile captured with face-mesh liveness recognition on her phone during an iBeta-certified identity check, the fraud-resistant biometric layer added around the redesigned electronic signature flow",
};
const ibetaImage: ContentImage = {
  kind: "image",
  image: img("legalario-ibeta.webp"),
  alt: "iBeta certification logo — third-party biometric conformance certification",
};

export const legalarioESignature: CaseStudyContent = {
  slug: "legalario-e-signature",
  kicker: "LegalTech / Fraud — SaaS",
  brandLogo: {
    kind: "public",
    src: "/images/logo-legalario.png",
    alt: "Legalario",
    height: 32,
  },
  hero: {
    image: heroImage,
    intro:
      "Sign documents electronically with legal validity on any device. Our goal is to democratize legally valid electronic signatures: accessible to everyone, on any device.",
  },
  challenge: {
    heading: "Improving an existing product",
    body: "Properly defining the problem was tricky. We focused on the following question: How will we know that we are creating value? As a general rule, any document signed with Legalario is legally valid.",
    ctaLabel: "I want to grow as Legalario",
    results: [
      "99% completion rate.",
      "+24% in our NPS.",
      "4 new biometric models implemented.",
      "iBeta Certification.",
    ],
    team: [
      { label: "5 developers" },
      { label: "1 product designer", badge: "by Comandos" },
      { label: "1 Customer Experience" },
    ],
  },
  adventure: {
    heading:
      "Defining the top 3 challenges considering business and user experience",
    blocks: [
      { kind: "image", image: interviewsImage },
      {
        kind: "heading",
        heading: "After 25+ conversations with customers and users.",
      },
      {
        kind: "checklist",
        items: [
          {
            label: "Support low-end devices",
            body:
              "Currently, support is optimized for mid-range and high-end phones.",
          },
          {
            label: "Signing documents with low risk of fraud",
            body:
              "Implementing biometric models with AI-powered anti-fraud support.",
          },
          {
            label: "Anyone can understand",
            body: "how to sign a document without outside help.",
          },
        ],
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Seeing the mountain" },
      {
        kind: "heading",
        heading: "We identify problems by segment",
        body: "First, we analyze the entire current user experience.",
      },
      {
        kind: "responsive-media",
        desktop: legacyDesktop,
        mobile: [legacyMobile01, legacyMobile02, legacyMobile03],
      },
      { kind: "heading", heading: "Net Promoter Score" },
      {
        kind: "checklist",
        layout: "chart",
        items: [
          { label: "57% of users", body: "indicated that their low-end phones do not have support." },
          { label: "26% rate the document", body: "signing service with 3 stars." },
          { label: "10% of users", body: "do not understand how to start signing from the invitation email." },
        ],
      },
      { kind: "heading", heading: "Interview with users" },
      {
        kind: "checklist",
        layout: "quotes",
        items: [
          { label: "I don't feel comfortable signing any documents." },
          { label: "Is it legal", body: "to sign documents electronically?" },
          { label: "I have large-scale hiring processes.", body: "How can I protect myself against identity fraud?" },
        ],
      },
      { kind: "divider" },
      {
        kind: "heading",
        heading:
          "We redesigned everything FROM SCRATCH based on feedback from our users.",
        body:
          "We took the opportunity to define a more modern, browser-oriented technology stack and move away from legacy architectures.",
      },
      {
        kind: "responsive-media",
        desktop: v1Desktop,
        mobile: [v1Mobile01, v1Mobile02],
      },
      { kind: "divider" },
      {
        kind: "illustrated-heading",
        icon: "lucide:scan-face",
        still: true,
        heading: "Testing the entire product before the first deployment",
      },
      { kind: "image", image: testingImage },
      { kind: "image", image: {
          kind: "image",
          image: img("legalario-electronic-signature-biometric-2048x1025.webp"),
          alt: "Face-mesh biometric validation — profile view with face-scan overlay on a phone",
        }
      },
      { kind: "divider" },
      { kind: "chip", icon: "making-top", label: "Making top" },
      {
        kind: "heading",
        heading: "We take all the insights and create something unique.",
        body:
          "We support several complementary use cases with new biometric validations based on artificial intelligence.",
      },
    ],
  },
  worth: {
    blocks: [
      { kind: "big-heading", heading: "Signed Document" },
      { kind: "compare", before: signedBefore, after: signedAfter, label: "signed document" },
      { kind: "divider" },
      { kind: "big-heading", heading: "Biometric Verification" },
      { kind: "compare", before: biometricBefore, after: biometricAfter, label: "biometric verification" },
      { kind: "divider" },
      { kind: "big-heading", heading: "Instructions for signing documents" },
      { kind: "compare", before: instructionsBefore, after: instructionsAfter, label: "signing instructions" },
      { kind: "divider" },
      {
        kind: "intro",
        heading: "We implement Passive Life Detection.",
        body: "Only body movements are necessary.",
      },
      { kind: "capture-sequence", frames: passiveLifeFrames },
      { kind: "divider" },
      { kind: "big-heading", heading: "Proof of Life: Text to Speech" },
      { kind: "capture-sequence", frames: textToSpeechFrames },
      { kind: "text", text: "New service implemented." },
    ],
  },
  result: {
    heading: "We achieved in six months what seemed impossible.",
    stats: [
      {
        value: "99%",
        label: "completion rate",
        icon: {
          kind: "illustration",
          scene: "progress",
          alt: "Signing flow completion rate",
        },
      },
      {
        value: "+24%",
        label: "in our NPS",
        icon: { kind: "illustration", scene: "rise", alt: "NPS growth" },
      },
      {
        value: "+31%",
        label: "signed documents",
        icon: {
          kind: "illustration",
          scene: "documents",
          alt: "Signed documents growth",
        },
      },
    ],
    cards: [
      {
        heading: "4 new biometric models",
        body: "Implemented with AI-powered anti-fraud support.",
        scene: "biometric",
      },
      {
        heading: "iBeta certification",
        body: "To verify the authenticity of the person signing the document.",
        scene: "certified",
      },
    ],
  },
};
