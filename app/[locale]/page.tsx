import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { contactConfig } from "@/data/contacts";

const copy = {
  en: { title: "Atelier Sweet Home", text: "Old houses, roofs, outdoor kitchens and canopies with attention to structure, materials and detail.", action: "Choose your task", write: "Write to us", links: [["Old house reconstruction", "reconstruction"], ["Roofs", "roof"], ["Outdoor kitchens and canopies", "summer-kitchen"]] },
  ge: { title: "Atelier Sweet Home", text: "ძველი სახლები, სახურავები, საზაფხულო სამზარეულოები და ფარდულები — ყურადღებით კონსტრუქციაზე, მასალებსა და დეტალებზე.", action: "აირჩიეთ თქვენი ამოცანა", write: "მოგვწერეთ", links: [["ძველი სახლის რეკონსტრუქცია", "reconstruction"], ["სახურავები", "roof"], ["საზაფხულო სამზარეულოები და ფარდულები", "summer-kitchen"]] }
} as const;
export function generateStaticParams() { return [{ locale: "en" }, { locale: "ge" }]; }
export async function generateMetadata({ params }: { params: Promise<{ locale: "en" | "ge" }> }): Promise<Metadata> { const { locale } = await params; const c = copy[locale]; return { title: `${c.title} | Georgia`, description: c.text, alternates: { canonical: `/${locale}`, languages: { ru: "/", en: "/en", ka: "/ge" } } }; }
export default async function LocalHome({ params }: { params: Promise<{ locale: "en" | "ge" }> }) { const { locale } = await params; const c = copy[locale]; if (!c) notFound(); return <><Header locale={locale} activePath="/" contacts={contactConfig} content={{ brand: "Atelier Sweet Home", writeLabel: c.write }} /><main><section className="section"><p className="eyebrow">Tbilisi · Kakheti · Georgia</p><h1>{c.title}</h1><p className="hero-phrase">{c.text}</p><h2>{c.action}</h2>{c.links.map(([label, href]) => <p key={href}><Link className="primary-button" href={`/${locale}/${href}`}>{label}</Link></p>)}</section></main></>; }
