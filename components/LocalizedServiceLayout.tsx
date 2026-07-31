/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { ContactLinks } from "@/components/ContactLinks";
import { Header } from "@/components/Header";
import { InquiryForm } from "@/components/InquiryForm";
import { ProfessionalApproach } from "@/components/ProfessionalApproach";
import { RemoteCollaboration, RemoteKitchenCase } from "@/components/RemoteCollaboration";
import { ProjectCases } from "@/components/ProjectCases";
import { contactConfig } from "@/data/contacts";
import { professionalApproach } from "@/data/professionalApproach";
import { remoteCollaboration, remoteKitchenCase } from "@/data/remoteCollaboration";
import { localizedReconstructionCases } from "@/data/projects";

function Block({ eyebrow, title, text, dark = false, children }: { eyebrow: string; title?: string; text?: string; dark?: boolean; children?: React.ReactNode }) {
  return <section className={`section ${dark ? "split-section dark-check-section" : ""}`}><div className="section-heading"><p className="eyebrow">{eyebrow}</p>{title ? <h2>{title}</h2> : null}{text ? <p>{text}</p> : null}</div>{children}</section>;
}

export function LocalizedServiceLayout({ locale, service, hero, heroImage, heroSideImages, page, images, check, checkTitle, checkText, situations, scope, workshop, start, faq, form, formContent, labels }: any) {
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
  const heroBlock = (className: string) => <section className={className}><div className="hero-copy"><p className="eyebrow">Tbilisi · Kakheti · Georgia</p><h1>{hero.title}</h1><p className="hero-phrase">{hero.mainPhrase}</p><p className="hero-text">{hero.text}</p><div className="hero-actions"><a className="primary-button" href="#contact-form">{hero.primaryCta}</a><a className="secondary-link" href="#work-start">{hero.secondaryCta ?? labels.start}</a></div></div>{service === "reconstruction" ? <div className="hero-photo-ledger"><figure className="hero-image hero-main-photo"><Image src={(heroImage ?? images[0]).src} alt={(heroImage ?? images[0]).alt ?? hero.title} width={1320} height={980} priority sizes="(max-width: 900px) 100vw, 48vw" /></figure><div className="hero-photo-stack">{heroSideImages.map((image: any) => <figure className="hero-image" key={image.src}><Image src={image.src} alt={image.alt} width={780} height={620} sizes="(max-width: 900px) 100vw, 22vw" /></figure>)}</div></div> : <figure className="hero-image hero-main-photo"><Image src={(heroImage ?? images[0]).src} alt={(heroImage ?? images[0]).alt ?? hero.title} width={1320} height={980} priority sizes="(max-width: 900px) 100vw, 48vw" /></figure>}</section>;
  const roofHeroBlock = <section className="roof-hero"><div className="roof-hero-copy"><p className="eyebrow">Tbilisi · Kakheti · Georgia</p><h1>{hero.title}</h1><p className="hero-phrase">{hero.mainPhrase}</p><p className="hero-text">{hero.text}</p><div className="hero-actions"><a className="primary-button" href="#contact-form">{hero.primaryCta}</a><a className="secondary-link" href="#roof-check">{hero.secondaryCta ?? labels.start}</a></div></div><div className="roof-proof-strip" aria-label="Roof before, process and after">{images.slice(0, 3).map((image: any, index: number) => <figure key={image.src}><span>{labels.before[index]}</span><Image src={image.src} alt={image.alt} width={960} height={1280} priority sizes="(max-width: 900px) 100vw, 33vw" />{image.caption ? <figcaption>{image.caption}</figcaption> : null}</figure>)}</div></section>;
  const kitchenHeroFacts = locale === "en" ? ["canopy", "work zone", "lighting", "metal", "tile"] : ["ფარდული", "სამუშაო ზონა", "განათება", "ლითონი", "ფილა"];
  const kitchenHeroBlock = <section className="summer-hero"><div className="summer-hero-copy"><p className="eyebrow">Tbilisi · Kakheti · Georgia</p><h1>{hero.title}</h1><p className="hero-phrase">{hero.mainPhrase}</p><p className="hero-text">{hero.text}</p><div className="hero-actions"><a className="primary-button" href="#contact-form">{hero.primaryCta}</a><a className="secondary-link" href="#site-check">{hero.secondaryCta ?? labels.start}</a></div></div><figure className="summer-hero-image"><Image src={(heroImage ?? images[0]).src} alt={(heroImage ?? images[0]).alt ?? hero.title} width={1280} height={960} priority sizes="100vw" /></figure><div className="summer-spec-strip" aria-label="Visible project elements">{kitchenHeroFacts.map((item) => <span key={item}>{item}</span>)}</div></section>;

  return <><Header locale={locale} activePath={`/${service}`} contacts={contactConfig} content={{ brand: "Atelier Sweet Home", writeLabel: locale === "en" ? "Contact us" : "დაგვიკავშირდით" }} /><main className="localized-page">
    {service === "reconstruction" ? <>
      {heroBlock("hero-section material-hero")}
      <Block eyebrow={labels.inspection} title={checkTitle} text={checkText} dark><ul className="check-list">{check.map((item: string) => <li key={item}>{item}</li>)}</ul>{page.inspection?.note ? <p className="note">{page.inspection.note}</p> : null}</Block>
      <Block eyebrow={labels.details} title={detailsTitle} text={detailsText}>{photos(images.slice(3, 8))}</Block>
      {page.modernLife ? <Block eyebrow={labels.modernLife} title={page.modernLife.title} text={page.modernLife.text}><ul className="scope-list">{page.modernLife.items.map((item: string) => <li key={item}>{item}</li>)}</ul></Block> : null}
      {situationsBlock}{scopeBlock}<ProfessionalApproach content={professionalApproach[localizedLocale].reconstruction} /><RemoteCollaboration content={remoteCollaboration[localizedLocale].reconstruction} /><ProjectCases eyebrow={locale === "en" ? "Evidence" : "დადასტურებული ფაქტები"} title={page.cases?.title} emptyText={page.cases?.emptyText} cases={localizedReconstructionCases[localizedLocale]} />
      <Block eyebrow={labels.workshop} title={workshop?.title} text={workshop?.text}><p>{workshop?.extra}</p></Block>
      <Block eyebrow={labels.start} title={page.start?.title}><ol className="steps-list" id="work-start">{start.map((item: string) => <li key={item}>{item}</li>)}</ol></Block>
      {faqBlock}{relatedBlock}{contactBlock}
    </> : null}
    {service === "roof" ? <>
      {roofHeroBlock}
      <section className="section roof-case-section"><div className="section-heading"><p className="eyebrow">{labels.realCase}</p><h2>{caseTitle}</h2><p>{caseText}</p></div><div className="roof-case-grid">{images.slice(0, 3).map((image: any) => <figure key={image.src}><Image src={image.src} alt={image.alt} width={960} height={1280} sizes="(max-width: 760px) 100vw, 33vw" />{image.caption ? <figcaption>{image.caption}</figcaption> : null}</figure>)}</div></section>
      {situationsBlock}<Block eyebrow={labels.inspection} title={checkTitle} text={checkText} dark><ul className="check-list">{check.map((item: string) => <li key={item}>{item}</li>)}</ul></Block>{scopeBlock}
      <ProfessionalApproach content={professionalApproach[localizedLocale].roof} /><RemoteCollaboration content={remoteCollaboration[localizedLocale].roof} />
      {faqBlock}{relatedBlock}{contactBlock}
    </> : null}
    {service === "summer-kitchen" ? <>
      {kitchenHeroBlock}<RemoteKitchenCase content={remoteKitchenCase[localizedLocale]} />
      <section className="section kitchen-gallery-section"><div className="section-heading"><p className="eyebrow">{labels.realCase}</p><h2>{caseTitle}</h2><p>{caseText}</p></div><div className="kitchen-gallery">{images.slice(1).map((image: any) => <figure key={image.src}><Image src={image.src} alt={image.alt} width={900} height={680} sizes="(max-width: 760px) 100vw, 50vw" />{image.caption ? <figcaption>{image.caption}</figcaption> : null}</figure>)}</div></section>
      {situationsBlock}<Block eyebrow={labels.inspection} title={checkTitle} text={checkText} dark><ul className="check-list">{check.map((item: string) => <li key={item}>{item}</li>)}</ul></Block>{scopeBlock}
      <ProfessionalApproach content={professionalApproach[localizedLocale]["summer-kitchen"]} />
      {page.price ? <Block eyebrow={labels.price} title={page.price.title} text={page.price.text} /> : null}
      <Block eyebrow={labels.start} title={page.start?.title}><ol className="steps-list" id="work-start">{start.map((item: string) => <li key={item}>{item}</li>)}</ol></Block>
      {faqBlock}{relatedBlock}{contactBlock}
    </> : null}
  </main><footer className="site-footer"><div><strong>Atelier Sweet Home</strong><span>{labels.footer}</span></div><div className="footer-meta"><span>RU / EN / GE</span><span>© Atelier Sweet Home</span></div></footer></>;
}
