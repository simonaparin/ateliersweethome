import type { Metadata } from "next";
import { ReconstructionV8Page } from "@/components/ReconstructionV8Page";
import { reconstructionV8 } from "@/content/reconstruction-v8";
import { siteConfig } from "@/data/site";

const copy = reconstructionV8.ru;

export const metadata: Metadata = {
  title: copy.seo.title,
  description: copy.seo.description,
  alternates: {
    canonical: copy.route,
    languages: { ru: "/reconstruction", en: "/en/reconstruction", ka: "/ge/reconstruction" }
  },
  openGraph: {
    title: copy.seo.ogTitle,
    description: copy.seo.ogDescription,
    url: copy.route,
    siteName: siteConfig.name,
    locale: "ru_GE",
    type: "website",
    images: [{
      url: "/images/reconstruction/hero/house-t-restored-clean.png",
      width: 1320,
      height: 980,
      alt: copy.hero.images[0].alt
    }]
  }
};

export default function ReconstructionPage() {
  return <ReconstructionV8Page copy={copy} />;
}
