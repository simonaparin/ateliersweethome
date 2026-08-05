import type { Metadata } from "next";
import { HomePageLayout } from "@/components/HomePageLayout";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Atelier Sweet Home | Реконструкция старых домов в Грузии",
  description: "Реконструкция старых домов в Тбилиси, Кахетии и других регионах Грузии: технический осмотр, проект, организация работ и готовый дом.",
  alternates: { canonical: "/", languages: { ru: "/", en: "/en", ka: "/ge" } },
  openGraph: { title: "Atelier Sweet Home | Реконструкция старых домов в Грузии", description: "Сохраняем старые дома и возвращаем их к жизни.", url: "/", siteName: siteConfig.name, locale: "ru_GE", type: "website", images: [{ url: "/images/reconstruction/hero/house-t-restored-clean.png", width: 1280, height: 960, alt: "Восстановленный дом Atelier Sweet Home" }] }
};

export default function RootPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    telephone: "+995555128231",
    email: "ai769598@gmail.com",
    areaServed: ["Tbilisi", "Kakheti", "Georgia"],
    availableLanguage: ["Russian", "English", "Georgian"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Реконструкция", url: `${siteConfig.siteUrl}/reconstruction` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Крыши", url: `${siteConfig.siteUrl}/roof` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Летние кухни", url: `${siteConfig.siteUrl}/summer-kitchen` } }
      ]
    }
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><HomePageLayout locale="ru" /></>;
}
