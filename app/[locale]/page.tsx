import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ContactLinks } from "@/components/ContactLinks";
import { contactConfig } from "@/data/contacts";
import { siteConfig } from "@/data/site";

const copy = {
  en: { title: "Atelier Sweet Home", text: "Old houses, roofs, outdoor kitchens and canopies with attention to structure, materials and detail.", action: "Choose your task", write: "Contact us", start: "How to begin", startTitle: "The first step is to show the property", startText: "Send photographs of the house, roof or site for an outdoor kitchen. From the photographs we can understand the task and decide whether a call or inspection is the right next step.", links: [["Old house reconstruction", "reconstruction"], ["Roofs", "roof"], ["Outdoor kitchens and canopies", "summer-kitchen"]] },
  ge: { title: "Atelier Sweet Home", text: "ძველი სახლები, სახურავები, საზაფხულო სამზარეულოები და ფარდულები — ყურადღებით კონსტრუქციაზე, მასალებსა და დეტალებზე.", action: "აირჩიეთ თქვენი ამოცანა", write: "დაგვიკავშირდით", start: "როგორ დავიწყოთ", startTitle: "პირველი ნაბიჯი — გვაჩვენეთ ობიექტი", startText: "გამოგვიგზავნეთ სახლის, სახურავის ან საზაფხულო სამზარეულოს ადგილის ფოტოები. ფოტოებით შევაფასებთ ამოცანის ხასიათს და განვსაზღვრავთ, საჭიროა საუბარი თუ დათვალიერება.", links: [["ძველი სახლის რეკონსტრუქცია", "reconstruction"], ["სახურავები", "roof"], ["საზაფხულო სამზარეულოები და ფარდულები", "summer-kitchen"]] }
} as const;
export function generateStaticParams() { return [{ locale: "en" }, { locale: "ge" }]; }
export async function generateMetadata({ params }: { params: Promise<{ locale: "en" | "ge" }> }): Promise<Metadata> {
  const { locale } = await params;
  const c = copy[locale];
  const title = locale === "en"
    ? "Atelier Sweet Home | Old houses, roofs and outdoor kitchens in Georgia"
    : "Atelier Sweet Home | ძველი სახლები, სახურავები და საზაფხულო სამზარეულოები საქართველოში";
  return {
    title,
    description: c.text,
    alternates: { canonical: `/${locale}`, languages: { ru: "/", en: "/en", ka: "/ge" } },
    openGraph: {
      title,
      description: c.text,
      url: `/${locale}`,
      siteName: siteConfig.name,
      locale: locale === "en" ? "en_GE" : "ka_GE",
      type: "website",
      images: [{ url: "/images/reconstruction/hero/house-t-restored-clean.png", width: 1280, height: 960, alt: c.title }]
    }
  };
}
export default async function LocalHome({ params }: { params: Promise<{ locale: "en" | "ge" }> }) {
  const { locale } = await params; const c = copy[locale]; if (!c) notFound();
  const images = ["/images/reconstruction/hero/old-house-stone-facade.jpg", "/images/roof/projects/roof-after-new-profiled-sheet.jpg", "/images/summer-kitchen/projects/summer-kitchen-yard-wide-view.jpg"];
  return <><Header locale={locale} activePath="/" contacts={contactConfig} content={{ brand: "Atelier Sweet Home", writeLabel: c.write }} /><main><section className="home-station"><div className="home-intro"><p className="eyebrow">Tbilisi · Kakheti · Georgia</p><h1>{c.title}</h1><p className="hero-phrase">{c.text}</p><p className="hero-text">{c.action}</p></div><div className="home-direction-grid">{c.links.map(([label, href], index) => <Link className="home-direction" href={`/${locale}/${href}`} key={href}><figure><Image src={images[index]} alt={label} width={980} height={760} priority={index === 0} sizes="(max-width: 900px) 100vw, 50vw" /></figure><span>{label}</span></Link>)}</div></section><section className="section home-note-section" id="contact-form"><div className="section-heading compact"><p className="eyebrow">{c.start}</p><h2>{c.startTitle}</h2><p>{c.startText}</p></div><ContactLinks contacts={contactConfig} /></section></main><footer className="site-footer"><div><strong>Atelier Sweet Home</strong><span>{c.text}</span><span>Tbilisi · Kakheti · Georgia</span></div><div className="footer-meta"><span>RU / EN / GE</span><span>© 2026 Atelier Sweet Home</span></div></footer></>;
}
