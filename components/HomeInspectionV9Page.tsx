import Image from "next/image";
import { Header } from "@/components/Header";
import { InquiryForm } from "@/components/InquiryForm";
import type { HomeInspectionCopy } from "@/content/home-inspection-v9";
import { contactConfig } from "@/data/contacts";
import { siteConfig } from "@/data/site";
import type { FormContent } from "@/types/content";

const imageFiles = {
  stone: { src: "/images/reconstruction/hero/old-house-stone-facade.jpg", width: 1320, height: 980 },
  house: { src: "/images/reconstruction/projects/old-house-before-porch.jpg", width: 1280, height: 960 },
  roof: { src: "/images/roof/projects/roof-before-old-sheet-metal.jpg", width: 1280, height: 960 },
  rafters: { src: "/images/roof/projects/roof-rafter-system-process.jpg", width: 1280, height: 960 }
} as const;

function Paragraphs({ items }: { items: string[] }) {
  return <div className="home-inspection-body-copy">{items.map((item) => <p key={item}>{item}</p>)}</div>;
}

export function HomeInspectionV9Page({ copy }: { copy: HomeInspectionCopy }) {
  const pageUrl = `${siteConfig.siteUrl}${copy.route}`;
  const organizationId = `${siteConfig.siteUrl}/#organization`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "ProfessionalService", "@id": organizationId, name: siteConfig.name, url: siteConfig.siteUrl, telephone: "+995555128231", email: contactConfig.email, areaServed: copy.seo.areaServed, availableLanguage: copy.seo.availableLanguage },
      { "@type": "Service", name: copy.seo.serviceName, serviceType: copy.seo.serviceType, description: copy.seo.description, url: pageUrl, provider: { "@id": organizationId }, areaServed: copy.seo.areaServed, availableLanguage: copy.seo.availableLanguage },
      { "@type": "FAQPage", mainEntity: copy.faq.items.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }
    ]
  };
  const formContent: FormContent = {
    title: copy.contact.form.heading,
    text: "",
    fields: { name: "", contact: "", location: "", task: "", start: "", budget: "", photos: "" },
    budgetHint: "", submit: copy.contact.form.send, localMode: "", success: copy.contact.form.success, notSent: ""
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header locale={copy.locale} activePath="/home-inspection" contacts={contactConfig} content={{ brand: siteConfig.name, writeLabel: copy.header.writeLabel }} />
      <main id="top" className={`home-inspection-v9 home-inspection-v9--${copy.locale}`}>
        <section className="material-hero home-inspection-hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div>
              <p className="eyebrow">{copy.hero.eyebrow}</p>
              <h1 id="hero-title">{copy.hero.title}</h1>
              <p className="home-inspection-hero-intro">{copy.hero.lead}</p>
              <p className="hero-text">{copy.hero.body}</p>
              <div className="hero-actions"><a className="primary-button" href="#contact-form">{copy.hero.primaryCta}</a><a className="secondary-link" href="#checklist">{copy.hero.secondaryCta}</a></div>
            </div>
            <div className="home-inspection-hero-ledger">
              <div><strong>{copy.hero.price}</strong><span>{copy.hero.priceQualifier}</span></div>
              <div><strong>{copy.hero.onsiteLabel}</strong><span>{copy.hero.optionalPhotos}</span></div>
            </div>
          </div>
          <div className="home-inspection-hero-collage" aria-label={copy.hero.collageAria}>
            <figure className="home-inspection-photo home-inspection-photo--main"><Image src={imageFiles.stone.src} alt={copy.images.stone.alt} width={imageFiles.stone.width} height={imageFiles.stone.height} priority sizes="(max-width: 620px) 100vw, 48vw" /><figcaption>{copy.images.stone.caption}</figcaption></figure>
            <figure className="home-inspection-photo"><Image src={imageFiles.house.src} alt={copy.images.house.alt} width={imageFiles.house.width} height={imageFiles.house.height} sizes="(max-width: 620px) 50vw, 24vw" /><figcaption>{copy.images.house.caption}</figcaption></figure>
            <figure className="home-inspection-photo"><Image src={imageFiles.roof.src} alt={copy.images.roof.alt} width={imageFiles.roof.width} height={imageFiles.roof.height} sizes="(max-width: 620px) 50vw, 24vw" /><figcaption>{copy.images.roof.caption}</figcaption></figure>
          </div>
        </section>

        <section className="section" aria-labelledby="scenarios-title">
          <div className="section-heading"><h2 id="scenarios-title">{copy.scenarios.title}</h2></div>
          <div className="home-inspection-cards">{copy.scenarios.items.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </section>

        <section className="section home-inspection-split home-inspection-plaster" aria-labelledby="onsite-title">
          <div className="section-heading"><h2 id="onsite-title">{copy.onsite.title}</h2><Paragraphs items={copy.onsite.paragraphs} /></div>
          <div className="home-inspection-gallery" aria-label={copy.onsite.galleryAria}>
            <figure className="home-inspection-photo home-inspection-photo--wide"><Image src={imageFiles.rafters.src} alt={copy.images.rafters.alt} width={imageFiles.rafters.width} height={imageFiles.rafters.height} sizes="(max-width: 980px) 100vw, 48vw" /><figcaption>{copy.images.rafters.caption}</figcaption></figure>
            <figure className="home-inspection-photo"><Image src={imageFiles.house.src} alt={copy.images.house.altRepeat ?? copy.images.house.alt} width={imageFiles.house.width} height={imageFiles.house.height} sizes="(max-width: 980px) 50vw, 24vw" /></figure>
            <figure className="home-inspection-photo"><Image src={imageFiles.roof.src} alt={copy.images.roof.altRepeat ?? copy.images.roof.alt} width={imageFiles.roof.width} height={imageFiles.roof.height} sizes="(max-width: 980px) 50vw, 24vw" /></figure>
          </div>
        </section>

        <section className="section home-inspection-checklist" id="checklist" aria-labelledby="checklist-title">
          <div className="section-heading"><h2 id="checklist-title">{copy.checklist.title}</h2></div>
          <div className="home-inspection-check-grid">{copy.checklist.items.map((item, index) => <article key={item.title}><span className="home-inspection-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </section>

        <section className="section home-inspection-split home-inspection-result" aria-labelledby="result-title">
          <div className="section-heading"><h2 id="result-title">{copy.result.title}</h2><p className="home-inspection-body-copy">{copy.result.intro}</p><div className="home-inspection-section-cta"><a className="primary-button" href="#contact-form">{copy.result.cta}</a></div></div>
          <div><ul className="home-inspection-result-list">{copy.result.items.map((item) => <li key={item}>{item}</li>)}</ul><p className="home-inspection-result-note">{copy.result.note}</p></div>
        </section>

        <section className="section home-inspection-remote" aria-labelledby="remote-title"><div className="section-heading"><h2 id="remote-title">{copy.remote.title}</h2></div><Paragraphs items={copy.remote.paragraphs} /></section>

        <section className="section home-inspection-plaster" aria-labelledby="process-title">
          <div className="section-heading"><h2 id="process-title">{copy.process.title}</h2></div>
          <ol className="home-inspection-steps">{copy.process.steps.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
        </section>

        <section className="section" aria-labelledby="price-title">
          <div className="section-heading"><h2 id="price-title">{copy.price.title}</h2></div>
          <div className="home-inspection-price"><div className="home-inspection-price-big"><strong>{copy.price.amount}</strong><span>{copy.price.qualifier}</span></div><Paragraphs items={copy.price.paragraphs} /></div>
        </section>

        <section className="section home-inspection-split home-inspection-plaster" aria-labelledby="after-title">
          <div className="section-heading"><h2 id="after-title">{copy.afterPdf.title}</h2><p className="home-inspection-body-copy">{copy.afterPdf.paragraphs[0]}</p></div>
          <div className="home-inspection-body-copy"><p>{copy.afterPdf.paragraphs[1]}</p><div className="home-inspection-links" aria-label={copy.afterPdf.linksAria}>{copy.afterPdf.links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}</div></div>
        </section>

        <section className="section home-inspection-character" aria-labelledby="character-title">
          <div className="section-heading"><h2 id="character-title">{copy.character.title}</h2><Paragraphs items={copy.character.paragraphs} /></div>
          <figure className="home-inspection-photo home-inspection-character-photo"><Image src={imageFiles.stone.src} alt={copy.images.stone.altRepeat ?? copy.images.stone.alt} width={imageFiles.stone.width} height={imageFiles.stone.height} sizes="(max-width: 980px) 100vw, 52vw" /><figcaption>{copy.images.characterCaption}</figcaption></figure>
        </section>

        <section className="section home-inspection-plaster" aria-labelledby="faq-title">
          <div className="section-heading"><h2 id="faq-title">{copy.faq.title}</h2></div>
          <div className="faq-list">{copy.faq.items.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
        </section>

        <section className="section home-inspection-contact" id="contact-form" aria-labelledby="contact-title">
          <div className="contact-copy"><h2 id="contact-title">{copy.contact.title}</h2><Paragraphs items={copy.contact.paragraphs} /><div className="home-inspection-direct-contacts" aria-label={copy.contact.directAria}><a href={contactConfig.whatsapp}><span>WhatsApp</span><strong>+995 555 12 82 31</strong></a><a href={`tel:${contactConfig.phone}`}><span>{copy.contact.phoneLabel}</span><strong>+995 555 12 82 31</strong></a><a href={`mailto:${contactConfig.email}`}><span>{copy.contact.emailLabel}</span><strong>{contactConfig.email}</strong></a></div></div>
          <InquiryForm content={formContent} locale={copy.locale} variant="homeInspection" homeInspectionCopy={copy.contact.form} />
        </section>
      </main>
      <footer className="site-footer"><div><strong>{siteConfig.name}</strong><span>{copy.footer.line}</span><span>{copy.footer.regions}</span></div><div className="footer-meta"><span>RU / EN / KA</span><span>{copy.footer.copyright}</span></div></footer>
    </>
  );
}
