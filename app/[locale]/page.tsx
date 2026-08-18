import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { HomePageLayout } from "@/components/HomePageLayout";
import { siteConfig } from "@/data/site";

type Locale = "en" | "ge";

const metadataByLocale: Record<Locale, { title: string; description: string; locale: string }> = {
  en: { title: "Atelier Sweet Home | Working with old houses in Georgia", description: "Inspection, renovation, new roofs, outdoor kitchens and canopies for old private houses. Tbilisi, Kakheti and across Georgia.", locale: "en_GE" },
  ge: { title: "Atelier Sweet Home | ძველი სახლები საქართველოში", description: "ტექნიკური დათვალიერება, რეკონსტრუქცია, ახალი სახურავი, საზაფხულო სამზარეულოები და ფარდულები ძველი კერძო სახლებისთვის. თბილისი, კახეთი, მთელი საქართველო.", locale: "ka_GE" }
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
