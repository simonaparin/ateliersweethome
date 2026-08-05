/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ContactLinks } from "@/components/ContactLinks";
import { Header } from "@/components/Header";
import { InquiryForm } from "@/components/InquiryForm";
import { LocalizedServiceLayout } from "@/components/LocalizedServiceLayout";
import { ProfessionalApproach } from "@/components/ProfessionalApproach";
import { RemoteCollaboration, RemoteKitchenCase } from "@/components/RemoteCollaboration";
import { contactConfig } from "@/data/contacts";
import { professionalApproach } from "@/data/professionalApproach";
import { remoteCollaboration, remoteKitchenCase } from "@/data/remoteCollaboration";
import { siteConfig } from "@/data/site";
import enReconstruction from "@/content/en/reconstruction.json";
import geReconstruction from "@/content/ka/reconstruction.json";
import enRoof from "@/content/en/roof.json";
import geRoof from "@/content/ge/roof.json";
import enKitchen from "@/content/en/summer-kitchen.json";
import geKitchen from "@/content/ge/summer-kitchen.json";
import { full as enFull } from "@/content/en/full";
import { full as geFull } from "@/content/ge/full";
import { reconstructionAdditions } from "@/content/ge/reconstruction.additions";
import ruReconstruction from "@/content/ru/reconstruction.json";
import ruRoof from "@/content/ru/roof.draft.json";
import ruKitchen from "@/content/ru/summer-kitchen.draft.json";

const pages = { en: { reconstruction: enReconstruction, roof: enRoof, "summer-kitchen": enKitchen }, ge: { reconstruction: geReconstruction, roof: geRoof, "summer-kitchen": geKitchen } } as const;
type Locale = keyof typeof pages;
type Service = keyof typeof pages.en;

const compactDescriptions = {
  en: {
    roof: "Roof repair and replacement for old private homes in Georgia: we inspect rafters and covering, plan the work and agree the first step from photos or a visit.",
    "summer-kitchen": "Outdoor kitchens and canopies in Georgia: a practical project for a private home, including the base, structure, utilities, lighting and a comfortable work and dining area."
  },
  ge: {
    roof: "ძველი კერძო სახლების სახურავის შეკეთება და შეცვლა საქართველოში: ვაფასებთ კოჭებსა და საფარს, ვგეგმავთ სამუშაოს და ვაზუსტებთ პირველ ნაბიჯს ფოტოებით ან დათვალიერებით.",
    "summer-kitchen": "საზაფხულო სამზარეულოები და ფარდულები საქართველოში: კერძო სახლისთვის ვაწყობთ საფუძველს, კონსტრუქციას, კომუნიკაციებს, განათებასა და მოსახერხებელ სამუშაო და სასადილო ზონას."
  }
} as const;

const kitchenHero = {
  en: {
    title: "Outdoor kitchens and canopies for private homes in Georgia",
    mainPhrase: "An outdoor kitchen is a canopy, work zone and utilities brought together into one place.",
    text: "We plan the kitchen location, canopy structure and materials around the house, site and the client's wishes. We calculate snow load, build the base and connect water, drainage, electricity and lighting. Below is a real project: the client sent ChatGPT references, and we agreed the project and built the idea on site."
  },
  ge: {
    title: "საზაფხულო სამზარეულოები და ფარდულები კერძო სახლებისთვის საქართველოში",
    mainPhrase: "საზაფხულო სამზარეულო არის ფარდული, სამუშაო ზონა და კომუნიკაციები, რომლებიც ერთიან სივრცედაა შეკრებილი.",
    text: "სამზარეულოს ადგილს, ფარდულის კონსტრუქციასა და მასალებს სახლის, ნაკვეთისა და დამკვეთის სურვილების მიხედვით ვგეგმავთ. ვითვლით თოვლის დატვირთვას, ვაკეთებთ საფუძველს და მოგვყავს წყალი, კანალიზაცია, ელექტროობა და განათება. ქვემოთ რეალური პროექტია: დამკვეთმა ChatGPT-ის რეფერენსები გამოგვიგზავნა, ჩვენ კი პროექტი შევათანხმეთ და იდეა ნაკვეთზე განვახორციელეთ."
  }
} as const;

const ui = {
  en: {
    inspection: "Inspection", details: "Details", modernLife: "Life inside", situations: "Situations", decisions: "Decision logic", scope: "Scope of work", realCase: "Real project", workshop: "Working format", price: "Cost", start: "Getting started", faq: "Common questions", related: "Related directions", contact: "Contact", before: ["before", "process", "after"],
    roofCheck: "We assess the roof before proposing work", kitchenCheck: "We assess the site before proposing a solution", roofWorkshop: "A roof can be a separate task or the first step of a larger reconstruction.", kitchenWorkshop: "The site, base, utilities and daily use are considered together.", startSteps: ["Send photos and the location.", "Briefly describe the task.", "We review the material and ask clarifying questions.", "If the task is a fit, we arrange a call or an inspection."],
    relatedText: "If the task is wider, we can look at the house, roof and site together.", fields: ["Name", "Contact", "Property location", "What would you like to do?", "Preferred start date, optional", "Budget range, optional", "Photos, up to 10 files"], success: "Thank you. Your message has been received.", submitting: "Sending...", footer: "Old houses, roofs, outdoor kitchens and canopies in Georgia."
  },
  ge: {
    inspection: "დათვალიერება", details: "დეტალები", modernLife: "ცხოვრება სახლში", situations: "სიტუაციები", decisions: "გადაწყვეტის ლოგიკა", scope: "სამუშაოს შემადგენლობა", realCase: "რეალური ობიექტი", workshop: "სამუშაო ფორმატი", price: "ღირებულება", start: "დაწყება", faq: "ხშირი კითხვები", related: "დაკავშირებული მიმართულებები", contact: "კონტაქტი", before: ["მანამდე", "პროცესი", "შემდეგ"],
    roofCheck: "სამუშაოს შეთავაზებამდე ვაფასებთ სახურავს", kitchenCheck: "გადაწყვეტის შეთავაზებამდე ვაფასებთ ადგილს", roofWorkshop: "სახურავი შეიძლება იყოს ცალკე ამოცანა ან დიდი რეკონსტრუქციის პირველი ეტაპი.", kitchenWorkshop: "ადგილი, საფუძველი, კომუნიკაციები და ყოველდღიური გამოყენება ერთად განიხილება.", startSteps: ["გამოგვიგზავნეთ ფოტოები და ადგილმდებარეობა.", "მოკლედ აღწერეთ ამოცანა.", "ვათვალიერებთ მასალას და ვსვამთ დამაზუსტებელ კითხვებს.", "თუ ამოცანა შესაფერისია, ვთანხმდებით ზარზე ან დათვალიერებაზე."],
    relatedText: "თუ ამოცანა უფრო ფართოა, სახლს, სახურავსა და ეზოს ერთად განვიხილავთ.", fields: ["სახელი", "კონტაქტი", "ობიექტის ადგილმდებარეობა", "რის გაკეთება გსურთ?", "სასურველი დაწყების თარიღი, სურვილისამებრ", "ბიუჯეტის დიაპაზონი, სურვილისამებრ", "ფოტოები, მაქსიმუმ 10 ფაილი"], success: "გმადლობთ. შეტყობინება მიღებულია.", submitting: "იგზავნება...", footer: "ძველი სახლები, სახურავები, საზაფხულო სამზარეულოები და ფარდულები საქართველოში."
  }
} as const;

export function generateStaticParams() { return ["en", "ge"].flatMap((locale) => ["reconstruction", "roof", "summer-kitchen"].map((service) => ({ locale, service }))); }

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; service: Service }> }): Promise<Metadata> {
  const { locale, service } = await params;
  const page: any = pages[locale]?.[service];
  if (!page) return {};
  const title = page.seo?.title ?? page.title;
  const description = compactDescriptions[locale][service as "roof" | "summer-kitchen"] ?? page.seo?.description ?? page.text;
  const image = service === "reconstruction"
    ? "/images/reconstruction/hero/house-t-restored-clean.png"
    : service === "roof"
      ? "/images/roof/projects/roof-after-new-profiled-sheet.jpg"
      : "/images/summer-kitchen/projects/summer-kitchen-yard-wide-view.jpg";
  return { title, description, alternates: { canonical: `/${locale}/${service}`, languages: { ru: `/${service}`, en: `/en/${service}`, ka: `/ge/${service}` } }, openGraph: { title, description, url: `/${locale}/${service}`, siteName: siteConfig.name, locale: locale === "en" ? "en_GE" : "ka_GE", type: "website", images: [{ url: image, alt: title }] } };
}

function Section({ eyebrow, title, text, children, dark = false }: { eyebrow: string; title: string; text?: string; children?: React.ReactNode; dark?: boolean }) {
  return <section className={`section ${dark ? "split-section dark-check-section" : ""}`}><div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text ? <p>{text}</p> : null}</div>{children}</section>;
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default async function LocalizedService({ params }: { params: Promise<{ locale: Locale; service: Service }> }) {
  const { locale, service } = await params;
  const page: any = pages[locale]?.[service];
  if (!page) notFound();
  const t = ui[locale];
  const completeBase: any = (locale === "en" ? enFull : geFull)[service];
  const complete: any = locale === "ge" && service === "reconstruction" ? { ...completeBase, ...reconstructionAdditions } : completeBase;
  const source: any = service === "reconstruction" ? ruReconstruction : service === "roof" ? ruRoof : ruKitchen;
  const hero: any = service === "summer-kitchen"
    ? { ...kitchenHero[locale], primaryCta: page.cta }
    : page.hero ?? { title: page.title, mainPhrase: page.phrase, text: page.text, primaryCta: page.cta };
  const faqSource = complete.faq ?? page.faq;
  const faqRaw = Array.isArray(faqSource) ? faqSource : faqSource?.items ?? [];
  const faq = faqRaw.map((item: any) => Array.isArray(item) ? { question: item[0], answer: item[1] } : item);
  const form = page.form ?? { title: page.formTitle, text: page.formText, submit: page.cta };
  const fields = form.fields ?? t.fields;
  const formContent: any = { title: form.title, text: form.text, fields: { name: fields[0], contact: fields[1], location: fields[2], task: fields[3], start: fields[4], budget: fields[5], photos: fields[6] }, budgetHint: "", submit: form.submit, localMode: "", success: form.success ?? t.success, notSent: "" };
  const scope = Array.isArray(page.scope) ? page.scope : page.scope?.items ?? complete.scope ?? [];
  const situations = complete.situations ?? (Array.isArray(page.situations) ? page.situations : page.situations?.items ?? []);
  const check = complete.inspection?.items ?? complete.siteCheck?.items ?? page.inspection?.items ?? page.checkBeforeWork ?? page.siteCheck?.items ?? [];
  const checkTitle = complete.inspection?.title ?? complete.siteCheck?.title ?? page.inspection?.title ?? page.checkTitle ?? page.siteCheck?.title ?? (service === "roof" ? t.roofCheck : t.kitchenCheck);
  const checkText = complete.inspection?.text ?? complete.siteCheck?.text ?? complete.checkText ?? page.inspection?.text ?? page.checkText ?? page.siteCheck?.text;
  const start = complete.start?.steps ?? page.start?.steps ?? t.startSteps;
  const decisions = complete.decisions ?? page.decisions;
  const workshop = complete.workshop ?? page.workshop;
  const caseTitle = page.case?.title ?? page.caseTitle ?? page.realObject?.title ?? page.neededRealCase?.publicDraft;
  const caseText = page.case?.text ?? page.caseText ?? page.realObject?.text ?? page.neededRealCase?.publicDraft;
  const images = service === "reconstruction" ? source.realPhotos.images : service === "roof" ? source.currentPhotos.images : source.realObject.images;
  const structureLabels = { ...t, whenToContact: locale === "en" ? "When to contact us" : "როდის მოგვმართოთ" };
  const localizedPage = {
    ...page,
    ...complete,
    ...(locale === "ge" && service === "summer-kitchen" && !page.price ? {
      price: {
        title: "რაზეა დამოკიდებული ღირებულება",
        text: "ღირებულებაზე გავლენას ახდენს საფუძველი, ფარდული, ლითონის კონსტრუქცია, სახურავი, წყალი, ელექტროობა, მოპირკეთება, ფილა, მიკროცემენტი, ხის დეტალები და ობიექტამდე მისასვლელი. ამიტომ ჯერ ვათვალიერებთ ადგილს და ვარკვევთ, რა არის უკვე მზად და რა უნდა გაკეთდეს თავიდან."
      }
    } : {})
  };
  const title = page.seo?.title ?? page.title;
  const description = page.seo?.description ?? page.text;
  const pageUrl = `${siteConfig.siteUrl}/${locale}/${service}`;
  const organizationId = `${siteConfig.siteUrl}/#organization`;
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": organizationId,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    telephone: "+995555128231",
    email: "ai769598@gmail.com",
    areaServed: ["Tbilisi", "Kakheti", "Georgia"]
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    url: pageUrl,
    provider: { "@id": organizationId },
    areaServed: "Georgia",
    availableLanguage: locale === "en" ? "English" : "Georgian"
  };
  const faqSchema = faq.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item: { question: string; answer: string }) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  } : null;
  if (["reconstruction", "roof", "summer-kitchen"].includes(service)) {
    return <><JsonLd data={organizationSchema} /><JsonLd data={serviceSchema} />{faqSchema ? <JsonLd data={faqSchema} /> : null}<LocalizedServiceLayout locale={locale} service={service} hero={hero} heroImage={source.hero?.image} page={localizedPage} images={images} check={check} checkTitle={checkTitle} checkText={checkText} situations={situations} scope={scope} workshop={workshop} start={start} faq={faq} form={form} formContent={formContent} labels={structureLabels} /></>;
  }
  const related = locale === "en"
    ? service === "reconstruction" ? [["Roofs", "roof"], ["Outdoor kitchens and canopies", "summer-kitchen"]] : service === "roof" ? [["Old house reconstruction", "reconstruction"], ["Outdoor kitchens and canopies", "summer-kitchen"]] : [["Old house reconstruction", "reconstruction"], ["Roofs", "roof"]]
    : service === "reconstruction" ? [["სახურავები", "roof"], ["საზაფხულო სამზარეულოები და ფარდულები", "summer-kitchen"]] : service === "roof" ? [["ძველი სახლის რეკონსტრუქცია", "reconstruction"], ["საზაფხულო სამზარეულოები და ფარდულები", "summer-kitchen"]] : [["ძველი სახლის რეკონსტრუქცია", "reconstruction"], ["სახურავები", "roof"]];

  return <><Header locale={locale} activePath={`/${service}`} contacts={contactConfig} content={{ brand: "Atelier Sweet Home", writeLabel: locale === "en" ? "Contact us" : "დაგვიკავშირდით" }} />
    <main className="localized-page">
      <section className="hero-section material-hero"><div className="hero-copy"><p className="eyebrow">Tbilisi · Kakheti · Georgia</p><h1>{hero.title}</h1><p className="hero-phrase">{hero.mainPhrase}</p><p className="hero-text">{hero.text}</p><div className="hero-actions"><a className="primary-button" href="#contact-form">{hero.primaryCta}</a><a className="secondary-link" href="#work-start">{hero.secondaryCta ?? t.start}</a></div></div><figure className="hero-image hero-main-photo"><Image src={(source.hero?.image ?? images[0]).src} alt={hero.title} width={1320} height={980} priority sizes="(max-width: 900px) 100vw, 48vw" /></figure></section>
      {service === "summer-kitchen" ? <RemoteKitchenCase content={remoteKitchenCase[locale]} /> : null}
      <Section eyebrow={t.inspection} title={checkTitle} text={checkText} dark><ul className="check-list">{check.map((item: string) => <li key={item}>{item}</li>)}</ul>{page.inspection?.note ? <p className="note">{page.inspection.note}</p> : null}</Section>
      <Section eyebrow={t.details} title={page.details?.title ?? page.realPhotos?.title ?? caseTitle} text={page.details?.text ?? page.realPhotos?.text ?? caseText}><div className="real-photo-grid">{images.slice(service === "reconstruction" ? 3 : 0, service === "reconstruction" ? 8 : 3).map((image: any) => <figure key={image.src}><Image src={image.src} alt={`${hero.title}: ${t.details}`} width={900} height={680} sizes="(max-width: 760px) 100vw, 33vw" /></figure>)}</div></Section>
      {page.modernLife ? <Section eyebrow={t.modernLife} title={page.modernLife.title} text={page.modernLife.text}><ul className="scope-list">{page.modernLife.items.map((item: string) => <li key={item}>{item}</li>)}</ul></Section> : null}
      <Section eyebrow={t.situations} title={page.situations?.title ?? (locale === "en" ? "When to contact us" : "როდის მოგვმართოთ")}><div className="situation-grid">{situations.map((item: any) => <article className="situation-item" key={typeof item === "string" ? item : item.title}><h3>{typeof item === "string" ? item : item.title}</h3>{typeof item === "object" ? <p>{item.text}</p> : null}</article>)}</div></Section>
      {service === "reconstruction" ? <Section eyebrow={t.decisions} title={decisions.title}><ul className="scope-list">{decisions.items.map((item: string) => <li key={item}>{item}</li>)}</ul><p className="note">{decisions.note}</p></Section> : null}
      <Section eyebrow={t.scope} title={page.scope?.title ?? page.scopeTitle} text={page.scope?.text}><ul className="scope-list">{scope.map((item: string) => <li key={item}>{item}</li>)}</ul></Section>
      <ProfessionalApproach content={professionalApproach[locale][service]} />
      {service !== "summer-kitchen" ? <RemoteCollaboration content={remoteCollaboration[locale][service]} /> : null}
      <Section eyebrow={t.realCase} title={caseTitle} text={caseText} />
      <Section eyebrow={t.workshop} title={workshop?.title ?? (locale === "en" ? "The way we work" : "როგორ ვმუშაობთ")} text={workshop?.text ?? (service === "roof" ? t.roofWorkshop : service === "summer-kitchen" ? t.kitchenWorkshop : "")}><p>{workshop?.extra}</p></Section>
      <Section eyebrow={t.start} title={page.start?.title ?? complete.start?.title ?? (locale === "en" ? "The first step is to show us the property" : "პირველი ნაბიჯია ობიექტის ჩვენება")}><ol className="steps-list" id="work-start">{start.map((item: string) => <li key={item}>{item}</li>)}</ol></Section>
      <Section eyebrow="FAQ" title={page.faq?.title ?? t.faq}>{faq.length ? <div className="faq-list">{faq.map((item: any) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div> : null}</Section>
      <Section eyebrow={t.related} title={t.related} text={t.relatedText}><div className="direction-list">{related.map(([label, href]) => <a className="direction-row" href={`/${locale}/${href}`} key={href}><span>{label}</span></a>)}</div></Section>
      <section className="section contact-section"><div className="contact-copy"><p className="eyebrow">{t.contact}</p><h2>{form.title}</h2><p>{form.text}</p><ContactLinks contacts={contactConfig} /></div><InquiryForm content={formContent} locale={locale} /></section>
    </main><footer className="site-footer"><div><strong>Atelier Sweet Home</strong><span>{t.footer}</span></div><div className="footer-meta"><span>RU / EN / GE</span><span>© Atelier Sweet Home</span></div></footer></>;
}
