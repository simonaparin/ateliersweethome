import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomeInspectionV9Page } from "@/components/HomeInspectionV9Page";
import { homeInspectionV9 } from "@/content/home-inspection-v9";
import { siteConfig } from "@/data/site";

type Locale = "en" | "ge";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ge" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ge") return {};
  const copy = homeInspectionV9[locale];
  return {
    title: copy.seo.title,
    description: copy.seo.description,
    alternates: { canonical: copy.route, languages: { ru: "/home-inspection", en: "/en/home-inspection", ka: "/ge/home-inspection" } },
    openGraph: { title: copy.seo.ogTitle, description: copy.seo.ogDescription, url: copy.route, siteName: siteConfig.name, locale: locale === "en" ? "en_GE" : "ka_GE", type: "website", images: [{ url: "/images/reconstruction/hero/old-house-stone-facade.jpg", width: 1320, height: 980, alt: copy.images.stone.alt }] }
  };
}

export default async function LocalizedHomeInspectionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ge") notFound();
  return <HomeInspectionV9Page copy={homeInspectionV9[locale as Locale]} />;
}
