import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { HomePageLayout } from "@/components/HomePageLayout";
import { siteConfig } from "@/data/site";

type Locale = "en" | "ge";

const metadataByLocale: Record<Locale, { title: string; description: string; locale: string }> = {
  en: { title: "Atelier Sweet Home | Old house reconstruction in Georgia", description: "Old house reconstruction in Tbilisi, Kakheti and across Georgia: preliminary technical inspections, design, work organisation and completed homes.", locale: "en_GE" },
  ge: { title: "Atelier Sweet Home | ძველი სახლების რეკონსტრუქცია საქართველოში", description: "ძველი სახლების რეკონსტრუქცია თბილისში, კახეთსა და საქართველოს სხვა რეგიონებში: წინასწარი ტექნიკური დათვალიერება, პროექტი, სამუშაოების ორგანიზება და დასრულებული სახლი.", locale: "ka_GE" }
};

export function generateStaticParams() { return [{ locale: "en" }, { locale: "ge" }]; }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ge") return {};
  const copy = metadataByLocale[locale];
  return { title: copy.title, description: copy.description, alternates: { canonical: `/${locale}`, languages: { ru: "/", en: "/en", ka: "/ge" } }, openGraph: { title: copy.title, description: copy.description, url: `/${locale}`, siteName: siteConfig.name, locale: copy.locale, type: "website", images: [{ url: "/images/reconstruction/hero/house-t-restored-clean.png", width: 1280, height: 960, alt: "Atelier Sweet Home" }] } };
}

export default async function LocalHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ge") notFound();
  return <HomePageLayout locale={locale} />;
}
