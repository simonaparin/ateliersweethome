import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrivacyPage, privacyMetadata } from "@/components/PrivacyPage";

export function generateStaticParams() { return [{ locale: "en" }, { locale: "ge" }]; }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === "en" || locale === "ge" ? privacyMetadata(locale) : {};
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ge") notFound();
  return <PrivacyPage locale={locale} />;
}
