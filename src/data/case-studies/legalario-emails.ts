import type { CaseStudyContent, ContentImage } from "./types";
import { legalarioEmailsImages, requireImage } from "~/lib/image-map";

const img = (filename: string) => requireImage(legalarioEmailsImages, filename);

// ———— Hero ————
const heroImage: ContentImage = {
  kind: "image",
  image: img("legalario-first-email.webp"),
  alt: "Legalario redesigned transactional email opened on an iPhone — Mexican SMB signer previewing the list of documents to sign with the multilingual notification template, the NPS-saving customer-success rewrite that replaced the legacy one-size-fits-all mail across LATAM",
};

// ———— Challenge ————
const challengeImage: ContentImage = {
  kind: "image",
  image: img("Legalario-ElectronicSignature-Emails2.webp"),
  alt: "Legalario signing-invitation email preview on a phone — the redesigned e-signature request template with contract title, sender context, legal-validity copy and Firmar documento CTA, the first touchpoint between the Mexican SMB sender and the LATAM signer",
};

// ———— Adventure ————
const identifyProblemsImage: ContentImage = {
  kind: "image",
  image: img("legalario-identify-problems-emails-2048x379.webp"),
  alt: "Three pillars we aligned on — Customer Success & NPS, Legal validity & Multilingual, Sign a document",
};
const legacyImage: ContentImage = {
  kind: "image",
  image: img("legalario-emails-legacy-2048x968.webp"),
  alt: "Legacy Legalario emails — dated BBVA-branded verification code email and two phones with outdated invitation designs",
};
const designSystemImage: ContentImage = {
  kind: "image",
  image: img("legalario-improving-design-system-email-2048x1070.webp"),
  alt: "Design System iterations — help blocks, verification code email, AT&T email, and two-step signing instructions",
};

const topChallengeDesktop: ContentImage = {
  kind: "image",
  image: img("legalario-email-top-challenge-2048x745.webp"),
  alt: "Three redesigned emails — invitation, verification code, and signed confirmation — shown on phones with orange, green and blue backgrounds",
};
const topChallengeMobile01: ContentImage = {
  kind: "image",
  image: img("legalario-email-top-challenge-01.webp"),
  alt: "Signing invitation email on a phone over an orange background",
};
const topChallengeMobile02: ContentImage = {
  kind: "image",
  image: img("legalario-email-top-challenge-02.webp"),
  alt: "Verification code email on a phone over a green background",
};
const topChallengeMobile03: ContentImage = {
  kind: "image",
  image: img("legalario-email-top-challenge-03.webp"),
  alt: "Signed-documents confirmation email on a phone over a blue background",
};

const resultMomentImage: ContentImage = {
  kind: "image",
  image: img("legalario-email-result-2048x916.webp"),
  alt: "Hands holding a phone showing the signed-documents confirmation email in the final Legalario design",
};

// ———— Worth ————
const massSigningImage: ContentImage = {
  kind: "image",
  image: img("legalario-emails-mass-Signing-of-documents-2048x1275.webp"),
  alt: "Mass signing of documents — first version on a pink background vs. last version on a mint background",
};
const documentsRequiredImage: ContentImage = {
  kind: "image",
  image: img("legalario-emails-documents-required-2048x871.webp"),
  alt: "Explanation of documents required for signing — phone showing identification options and signing method preferences",
};
const recurringSignersImage: ContentImage = {
  kind: "image",
  image: img("legalario-email-recurring-signers-2048x871.webp"),
  alt: "Mass signing of documents for recurring signers — a phone listing several pending contracts with a single sign-all action",
};

export const legalarioEmails: CaseStudyContent = {
  slug: "legalario-emails",
  kicker: "Legal Tech / Fraud — SaaS",
  brandLogo: {
    kind: "public",
    src: "/images/logo-legalario.png",
    alt: "Legalario",
    height: 32,
  },
  hero: {
    image: heroImage,
    intro:
      "The first impression of a digital product influences 70% of the likelihood that the user will use your product.\n\nWe serve a wide range of users—from fast food chain waiters to investors who use Legalario—so invitations to sign are not always understood or trigger the main JTBD: signing documents.",
  },
  challenge: {
    heading:
      "Universal notification: no technical jargon and easy to understand for any user.",
    body:
      "As a general rule, any document signed with Legalario is legally valid. However, this essential rule is not clear to users who sign agreements through Legalario. It is also unclear how to start signing a document, as the current emails look like spam.",
    ctaLabel: "I want to grow as Legalario",
    results: [
      "+31% revenue (combining with Electronic Signature redesign).",
      "+12% signed documents.",
      "+9% increase in Customer Love.",
    ],
    team: [
      { label: "2 developers" },
      { label: "1 product designer", badge: "by Comandos" },
      { label: "1 Customer Experience" },
    ],
    image: challengeImage,
  },
  adventure: {
    heading: "Defining top 3 challenges identified.",
    blocks: [
      {
        kind: "responsive-media",
        desktop: topChallengeDesktop,
        mobile: [topChallengeMobile01, topChallengeMobile02, topChallengeMobile03],
      },
      {
        kind: "heading",
        heading:
          "Our notifications must be as clear and understandable as the service they already use.",
      },
      { kind: "spacer", size: "md" },
      { kind: "image", image: identifyProblemsImage },
      { kind: "spacer", size: "md" },
      {
        kind: "checklist",
        items: [
          {
            label: "Customer Success & NPS:",
            body:
              "We work collaboratively between the Sales and Customer Success teams to understand how to optimize notifications and document signing invitations.",
          },
          {
            label: "Legal Validity & Multilingual:",
            body: "42% of users requested multilingual notifications.",
          },
          {
            label: "Sign a document:",
            body:
              "68% of users did not understand how to start signing a document.",
          },
        ],
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Seeing the mountain" },
      {
        kind: "heading",
        heading: "We understand that the current design needs to be updated.",
        body:
          "We analyze the current experience end-to-end and see the need to redesign it from scratch. At the same time, development reports technical debt and unsupported use cases that we must address.",
      },
      { kind: "image", image: legacyImage },
      { kind: "divider" },
      {
        kind: "heading",
        heading:
          "We improved the usability and components of the Design System to enable rapid testing.",
        body:
          "We leverage AB testing with short sprints to iterate quickly and improve conversion.",
      },
      { kind: "image", image: designSystemImage },
      { kind: "divider" },
      { kind: "chip", icon: "making-top", label: "Making top" },
      {
        kind: "heading",
        heading: "A GREAT result in a very short time",
        body:
          "Together with Engineering, we improved all notifications so that the Jobs To Be Done were clearer for our customers and users.",
      },
      { kind: "image", image: resultMomentImage },
    ],
  },
  worth: {
    blocks: [
      {
        kind: "checklist",
        items: [
          {
            label: "AB Testing with 50% of the customers:",
            body:
              "This wasn't just an email redesign; it was a broader experiment that included backend services changes.",
          },
          {
            label: "-37% support tickets:",
            body:
              "When a signing alert arrived, users didn't understand the next steps and were hesitant to begin.",
          },
          {
            label: "+6% referrals:",
            body:
              "Brand awareness for Legalario improved, resulting in more new leads.",
          },
        ],
      },
      { kind: "divider" },
      {
        kind: "intro",
        heading: "We cover new use cases",
        body:
          "The restructuring allowed us to identify frequent use cases in certain user segments that were not covered.",
      },
      { kind: "divider", variant: "line" },
      { kind: "big-heading", heading: "Mass signing of documents" },
      { kind: "image", image: massSigningImage },
      { kind: "divider" },
      {
        kind: "intro",
        label: "New",
        heading: "Explanation of documents required for signing",
      },
      { kind: "image", image: documentsRequiredImage },
      { kind: "text", text: "Enabled for each customer based on their account settings." },
      { kind: "divider" },
      {
        kind: "intro",
        label: "New",
        heading: "Mass signing of documents for recurring signers",
      },
      { kind: "image", image: recurringSignersImage },
      {
        kind: "text",
        text:
          "Recurring signers no longer have to sign each file separately: they now see a list of pending files and can sign them one by one or all at once.",
      },
    ],
  },
  result: {
    heading: "We made great progress in two sprints",
    stats: [
      {
        value: "+31%",
        label: "revenue",
        caption: "In conjunction with the Electronic Signature project.",
        icon: { kind: "illustration", scene: "launch", alt: "Revenue growth" },
      },
      {
        value: "+12%",
        label: "signed documents",
        caption:
          "By supporting three languages, our customers expanded their use of the platform.",
        icon: {
          kind: "illustration",
          scene: "signed-growth",
          alt: "Signed documents growth",
        },
      },
      {
        value: "+9%",
        label: "Customer Love",
        caption:
          "The whole new process is incredibly easier for anyone to complete.",
        icon: { kind: "illustration", scene: "love", alt: "Customer Love" },
      },
    ],
  },
};
