import type { Metadata } from "next";
import { HomeInspectionV9Page } from "@/components/HomeInspectionV9Page";
import { homeInspectionV9 } from "@/content/home-inspection-v9";
import { siteConfig } from "@/data/site";

const copy = homeInspectionV9.ru;

export const metadata: Metadata = {
  title: copy.seo.title,
  description: copy.seo.description,
  alternates: { canonical: copy.route, languages: { ru: "/home-inspection", en: "/en/home-inspection", ka: "/ge/home-inspection" } },
  openGraph: { title: copy.seo.ogTitle, description: copy.seo.ogDescription, url: copy.route, siteName: siteConfig.name, locale: "ru_GE", type: "website", images: [{ url: "/images/reconstruction/hero/old-house-stone-facade.jpg", width: 1320, height: 980, alt: copy.images.stone.alt }] }
};

export default function HomeInspectionPage() {
  return <HomeInspectionV9Page copy={copy} />;
}
