/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { ContactLinks } from "@/components/ContactLinks";
import { Header } from "@/components/Header";
import { InquiryForm } from "@/components/InquiryForm";
import { ProfessionalApproach } from "@/components/ProfessionalApproach";
import { RemoteCollaboration, RemoteKitchenCase } from "@/components/RemoteCollaboration";
import { contactConfig } from "@/data/contacts";
import { professionalApproach } from "@/data/professionalApproach";
import { remoteCollaboration, remoteKitchenCase } from "@/data/remoteCollaboration";

function Block({ eyebrow, title, text, dark = false, children }: { eyebrow: string; title?: string; text?: string; dark?: boolean; children?: React.ReactNode }) {
  return <section className={`section ${dark ? "split-section dark-check-section" : ""}`}><div className="section-heading"><p className="eyebrow">{eyebrow}</p>{title ? <h2>{title}</h2> : null}{text ? <p>{text}</p> : null}</div>{children}</section>;
}

export function LocalizedServiceLayout({ locale, service, hero, page, images, check, checkTitle, checkText, situations, scope, workshop, start, faq, form, formContent, labels }: any) {
  const localizedLocale = locale as "en" | "ge";
  const related = locale === "en"
    ? service === "reconstruction" ? [["Roofs", "roof"], ["Outdoor kitchens and canopies", "summer-kitchen"]] : service === "roof" ? [["Old house reconstruction", "reconstruction"], ["Outdoor kitchens and canopies", "summer-kitchen"]] : [["Old house reconstruction", "reconstruction"], ["Roofs", "roof"]]
    : service === "reconstruction" ? [["სახურავები", "roof"], ["საზაფხულო სამზარეულოები და ფარდულები", "summer-kitchen"]] : service === "roof" ? [["ძველი სახლის რეკონსტრუქცია", "reconstruction"], ["საზაფხულო სამზარეულოები და ფარდულები", "summer-kitchen"]] : [["ძველი სახლის რეკონსტრუქცია", "reconstruction"], ["სახურავები", "roof"]];
  const caseTitle = page.case?.title ?? page.caseTitle ?? page.realObject?.title;
  const caseText = page.case?.text ?? page.caseText ?? page.realObject?.text;
  const detailsTitle = page.details?.title ?? page.realPhotos?.title ?? caseTitle;
  const detailsText = page.details?.text ?? page.realPhotos?.text ?? caseText;
  const photos = (list: any[]) => <div className="real-photo-grid">{list.map((image) => <figure key={image.src}><Image src={image.src} alt={`${hero.title}: ${labels.details}`} width={900} height={680} sizes="(max-width: 760px) 100vw, 33vw" /></figure>)}</div>;
  const situationsBlock = <Block eyebrow={labels.situations} title={page.situations?.title ?? labels.whenToContact}><div className="situation-grid">{situations.map((item: any) => <article className="situation-item" key={typeof item === "string" ? item : item.title}><h3>{typeof item === "string" ? item : item.title}</h3>{typeof item === "object" ? <p>{item.text}</p> : null}</article>)}</div></Block>;
  const scopeBlock = <Block eyebrow={labels.scope} title={page.scope?.title ?? page.scopeTitle} text={page.scope?.text}><ul className="scope-list">{scope.map((item: string) => <li key={item}>{item}</li>)}</ul></Block>;
  const faqBlock = <Block eyebrow="FAQ" title={page.faq?.title ?? labels.faq}><div className="faq-list">{faq.map((item: any) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></Block>;
  const relatedBlock = <Block eyebrow={labels.related} title={labels.related} text={labels.relatedText}><div className="direction-list">{related.map(([label, href]) => <a className="direction-row" href={`/${locale}/${href}`} key={href}><span>{label}</span></a>)}</div></Block>;
  const contactBlock = <section className="section contact-section"><div className="contact-copy"><p className="eyebrow">{labels.contact}</p><h2>{form.title}</h2><p>{form.text}</p><ContactLinks contacts={contactConfig} /></div><InquiryForm content={formContent} /></section>;
  const heroBlock = (className: string) => <section className={className}><div className="hero-copy"><p className="eyebrow">Tbilisi · Kakheti · Georgia</p><h1>{hero.title}</h1><p className="hero-phrase">{hero.mainPhrase}</p><p className="hero-text">{hero.text}</p><div className="hero-actions"><a className="primary-button" href="#contact-form">{hero.primaryCta}</a><a className="secondary-link" href="#work-start">{hero.secondaryCta ?? labels.start}</a></div></div><figure className="hero-image hero-main-photo"><Image src={images[0].src} alt={hero.title} width={1320} height={980} priority sizes="(max-width: 900px) 100vw, 48vw" /></figure></section>;

  return <><Header locale={locale} activePath={`/${service}`} contacts={contactConfig} content={{ brand: "Atelier Sweet Home", writeLabel: locale === "en" ? "Write to us" : "მოგვწერეთ" }} /><main className="localized-page">
    {service === "reconstruction" ? <>
      {heroBlock("hero-section material-hero")}
      <Block eyebrow={labels.inspection} title={checkTitle} text={checkText} dark><ul className="check-list">{check.map((item: string) => <li key={item}>{item}</li>)}</ul>{page.inspection?.note ? <p className="note">{page.inspection.note}</p> : null}</Block>
      <Block eyebrow={labels.details} title={detailsTitle} text={detailsText}>{photos(images.slice(3, 8))}</Block>
      {page.modernLife ? <Block eyebrow={labels.modernLife} title={page.modernLife.title} text={page.modernLife.text}><ul className="scope-list">{page.modernLife.items.map((item: string) => <li key={item}>{item}</li>)}</ul></Block> : null}
      {situationsBlock}{scopeBlock}<ProfessionalApproach content={professionalApproach[localizedLocale].reconstruction} /><RemoteCollaboration content={remoteCollaboration[localizedLocale].reconstruction} />
      <Block eyebrow={labels.workshop} title={workshop?.title} text={workshop?.text}><p>{workshop?.extra}</p></Block>
      <Block eyebrow={labels.start} title={page.start?.title}><ol className="steps-list" id="work-start">{start.map((item: string) => <li key={item}>{item}</li>)}</ol></Block>
      {faqBlock}{relatedBlock}{contactBlock}
    </> : null}
    {service === "roof" ? <>
      {heroBlock("roof-hero")}
      <Block eyebrow={labels.realCase} title={caseTitle} text={caseText}>{photos(images.slice(0, 3))}</Block>
      {situationsBlock}<Block eyebrow={labels.inspection} title={checkTitle} text={checkText} dark><ul className="check-list">{check.map((item: string) => <li key={item}>{item}</li>)}</ul></Block>{scopeBlock}
      <ProfessionalApproach content={professionalApproach[localizedLocale].roof} /><RemoteCollaboration content={remoteCollaboration[localizedLocale].roof} />
      {faqBlock}{relatedBlock}{contactBlock}
    </> : null}
    {service === "summer-kitchen" ? <>
      {heroBlock("summer-hero")}<RemoteKitchenCase content={remoteKitchenCase[localizedLocale]} />
      <Block eyebrow={labels.realCase} title={caseTitle} text={caseText}>{photos(images.slice(0, 3))}</Block>
      {situationsBlock}<Block eyebrow={labels.inspection} title={checkTitle} text={checkText} dark><ul className="check-list">{check.map((item: string) => <li key={item}>{item}</li>)}</ul></Block>{scopeBlock}
      <ProfessionalApproach content={professionalApproach[localizedLocale]["summer-kitchen"]} />
      <Block eyebrow={labels.workshop} title={workshop?.title} text={workshop?.text}><p>{workshop?.extra}</p></Block>
      <Block eyebrow={labels.start} title={page.start?.title}><ol className="steps-list" id="work-start">{start.map((item: string) => <li key={item}>{item}</li>)}</ol></Block>
      {faqBlock}{relatedBlock}{contactBlock}
    </> : null}
  </main><footer className="site-footer"><div><strong>Atelier Sweet Home</strong><span>{labels.footer}</span></div><div className="footer-meta"><span>RU / EN / GE</span><span>© Atelier Sweet Home</span></div></footer></>;
}
