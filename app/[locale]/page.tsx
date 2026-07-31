import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ContactLinks } from "@/components/ContactLinks";
import { contactConfig } from "@/data/contacts";
import { siteConfig } from "@/data/site";

const copy = {
  en: { title: "Atelier Sweet Home", text: "Old houses, roofs, outdoor kitchens and canopies with attention to structure, materials and detail.", action: "Choose the task that brought you here. Each direction opens as a separate page with real photographs, a clear first step and information about the specific service.", write: "Contact us", start: "How to begin", startTitle: "The first step is to show the property", startText: "Send photographs of the house, roof or site for an outdoor kitchen. From the photographs we can understand the task and decide whether a call or inspection is the right next step." },
  ge: { title: "Atelier Sweet Home", text: "ძველი სახლები, სახურავები, საზაფხულო სამზარეულოები და ფარდულები — ყურადღებით კონსტრუქციაზე, მასალებსა და დეტალებზე.", action: "აირჩიეთ ის ამოცანა, რომლისთვისაც მოგვმართეთ. თითოეულ მიმართულებას აქვს ცალკე გვერდი რეალური ფოტოებით, გასაგები პირველი ნაბიჯითა და კონკრეტული მომსახურების აღწერით.", write: "დაგვიკავშირდით", start: "როგორ დავიწყოთ", startTitle: "პირველი ნაბიჯი — გვაჩვენეთ ობიექტი", startText: "გამოგვიგზავნეთ სახლის, სახურავის ან საზაფხულო სამზარეულოს ადგილის ფოტოები. ფოტოებით შევაფასებთ ამოცანის ხასიათს და განვსაზღვრავთ, საჭიროა საუბარი თუ დათვალიერება." }
} as const;

const directions = {
  en: [
    { title: "Old house reconstruction", text: "We assess the house as a whole: roof, walls, timber, layout, warmth, water and electricity. We preserve its character and prepare it for modern life.", href: "reconstruction" },
    { title: "Outdoor kitchens and canopies", text: "We create a place in the yard: canopy, lighting, work zone, metalwork, tile, sink, storage and a table for people.", href: "summer-kitchen" },
    { title: "Roofs", text: "We assess the rafter system, supports, battens, leaks and the existing roof covering.", href: "roof" }
  ],
  ge: [
    { title: "ძველი სახლის რეკონსტრუქცია", text: "სახლს მთლიანობაში ვაფასებთ: სახურავს, კედლებს, ხის კონსტრუქციებს, დაგეგმარებას, გათბობას, წყალსა და ელექტროობას. ვინარჩუნებთ მის ხასიათს და ვამზადებთ თანამედროვე ცხოვრებისთვის.", href: "reconstruction" },
    { title: "საზაფხულო სამზარეულოები და ფარდულები", text: "ეზოში ვქმნით სრულფასოვან ადგილს: ფარდული, განათება, სამუშაო ზონა, ლითონი, ფილა, ნიჟარა, სათავსო და მაგიდა.", href: "summer-kitchen" },
    { title: "სახურავები", text: "ვაფასებთ კოჭების სისტემას, საყრდენებს, ლატებს, ჟონვასა და არსებულ სახურავის საფარს.", href: "roof" }
  ]
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
  return <><Header locale={locale} activePath="/" contacts={contactConfig} content={{ brand: "Atelier Sweet Home", writeLabel: c.write }} /><main><section className="home-station"><div className="home-intro"><p className="eyebrow">Tbilisi · Kakheti · Georgia</p><h1>{c.title}</h1><p className="hero-phrase">{c.text}</p><p className="hero-text">{c.action}</p></div><div className="home-direction-grid">{directions[locale].map((direction, index) => <Link className="home-direction" href={`/${locale}/${direction.href}`} key={direction.href}><figure><Image src={images[index]} alt={direction.title} width={980} height={760} priority={index === 0} sizes="(max-width: 900px) 50vw, 100vw" /></figure><span>{direction.title}</span><p>{direction.text}</p></Link>)}</div></section><section className="section home-note-section" id="contact-form"><div className="section-heading compact"><p className="eyebrow">{c.start}</p><h2>{c.startTitle}</h2><p>{c.startText}</p></div><ContactLinks contacts={contactConfig} /></section></main><footer className="site-footer"><div><strong>Atelier Sweet Home</strong><span>{c.text}</span><span>Tbilisi · Kakheti · Georgia</span></div><div className="footer-meta"><span>RU / EN / GE</span><span>© 2026 Atelier Sweet Home</span></div></footer></>;
}
