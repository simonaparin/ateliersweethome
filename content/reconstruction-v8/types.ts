import type { ReconstructionFormCopy } from "@/components/InquiryForm";

export type ReconstructionLocale = "ru" | "en" | "ge";

export type ReconstructionPageCopy = {
  locale: ReconstructionLocale;
  technicalLocale: "ru" | "en" | "ka";
  route: "/reconstruction" | "/en/reconstruction" | "/ge/reconstruction";
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    serviceName: string;
    serviceType: string;
    areaServed: string[];
    availableLanguage: string;
  };
  header: { writeLabel: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    stepsAria: string;
    steps: { label: string; text: string }[];
    collageAria: string;
    images: { alt: string; caption?: string }[];
  };
  inspection: {
    eyebrow: string;
    title: string;
    intro: string;
    result: string;
    price: string;
    priceText: string;
    cta: string;
    ctaText: string;
    checklistEyebrow: string;
    checklist: string[];
  };
  character: { eyebrow: string; title: string; paragraphs: string[]; imageAlts: string[] };
  future: { eyebrow: string; title: string; intro: string; cards: { title: string; text: string }[] };
  scale: { eyebrow: string; title: string; cards: { title: string; text: string }[] };
  scope: { eyebrow: string; title: string; items: { title: string; text: string }[] };
  cost: { eyebrow: string; title: string; paragraphs: string[] };
  geography: { eyebrow: string; title: string; paragraphs: string[] };
  project: { eyebrow: string; title: string; paragraphs: string[]; images: { alt: string; caption: string }[] };
  hands: { eyebrow: string; title: string; paragraphs: string[] };
  process: { eyebrow: string; title: string; steps: { title: string; text: string }[] };
  faq: { eyebrow: string; title: string; items: { question: string; answer: string }[] };
  contact: {
    title: string;
    text: string;
    directAria: string;
    phoneLabel: string;
    emailLabel: string;
    form: ReconstructionFormCopy;
  };
  footer: { line: string; regions: string; copyright: string };
};
