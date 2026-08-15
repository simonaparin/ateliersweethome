import type { HomeInspectionFormCopy } from "@/components/InquiryForm";

export type HomeInspectionLocale = "ru" | "en" | "ge";
type Card = { title: string; text: string };
/** altRepeat — подпись для второго появления той же фотографии на странице. */
type ImageCopy = { alt: string; caption: string; altRepeat?: string };

export type HomeInspectionCopy = {
  locale: HomeInspectionLocale;
  technicalLocale: "ru" | "en" | "ka";
  route: "/home-inspection" | "/en/home-inspection" | "/ge/home-inspection";
  seo: { title: string; description: string; ogTitle: string; ogDescription: string; serviceName: string; serviceType: string; areaServed: string[]; availableLanguage: string };
  header: { writeLabel: string };
  hero: { eyebrow: string; title: string; lead: string; body: string; price: string; priceQualifier: string; onsiteLabel: string; optionalPhotos: string; primaryCta: string; secondaryCta: string; collageAria: string };
  scenarios: { title: string; items: Card[] };
  onsite: { title: string; paragraphs: string[]; galleryAria: string };
  checklist: { title: string; items: Card[] };
  result: { title: string; intro: string; items: string[]; note: string; cta: string };
  remote: { title: string; paragraphs: string[] };
  process: { title: string; steps: Card[] };
  price: { title: string; amount: string; qualifier: string; paragraphs: string[] };
  afterPdf: { title: string; paragraphs: string[]; linksAria: string; links: { label: string; href: string }[] };
  character: { title: string; paragraphs: string[] };
  faq: { title: string; items: { question: string; answer: string }[] };
  contact: { title: string; paragraphs: string[]; directAria: string; phoneLabel: string; emailLabel: string; form: HomeInspectionFormCopy };
  images: { stone: ImageCopy; house: ImageCopy; roof: ImageCopy; rafters: ImageCopy; characterCaption: string };
  footer: { line: string; regions: string; copyright: string };
};
