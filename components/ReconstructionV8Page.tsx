import Image from "next/image";
import { Header } from "@/components/Header";
import { InquiryForm } from "@/components/InquiryForm";
import type { ReconstructionPageCopy } from "@/content/reconstruction-v8";
import { contactConfig } from "@/data/contacts";
import { siteConfig } from "@/data/site";
import type { FormContent } from "@/types/content";

const heroImages = [
  { src: "/images/reconstruction/hero/house-t-restored-clean.png", width: 1320, height: 980 },
  { src: "/images/reconstruction/projects/house-t/house-t-buffet-and-table.jpg", width: 768, height: 1024 },
  { src: "/images/reconstruction/projects/house-t/house-t-veranda-wide.jpg", width: 1280, height: 960 }
] as const;

const characterImages = [
  { src: "/images/reconstruction/projects/house-t/house-t-veranda-red-wall.jpg", width: 960, height: 1280 },
  { src: "/images/reconstruction/projects/house-t/house-t-room-plants.jpg", width: 768, height: 1024 },
  { src: "/images/reconstruction/projects/house-t/house-t-buffet-and-dog.jpg", width: 768, height: 1280 }
] as const;

const projectImages = [
  { src: "/images/reconstruction/projects/house-t/house-t-stone-facade-day.jpg", width: 1280, height: 960 },
  { src: "/images/reconstruction/projects/house-t/house-t-veranda-front.jpg", width: 1280, height: 960 },
  { src: "/images/reconstruction/projects/house-t/house-t-kitchen-interior.jpg", width: 768, height: 1024 },
  { src: "/images/reconstruction/projects/house-t/house-t-bathroom.jpg", width: 768, height: 1024 }
] as const;

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function Paragraphs({ items }: { items: string[] }) {
  return <div className="body-copy">{items.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>;
}

export function ReconstructionV8Page({ copy }: { copy: ReconstructionPageCopy }) {
  const pageUrl = `${siteConfig.siteUrl}${copy.route}`;
  const organizationId = `${siteConfig.siteUrl}/#organization`;
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": organizationId,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    telephone: "+995555128231",
    email: "hello@ateliersweethome.ge",
    areaServed: copy.seo.areaServed,
    availableLanguage: copy.seo.availableLanguage
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: copy.seo.serviceName,
    serviceType: copy.seo.serviceType,
    description: copy.seo.description,
    url: pageUrl,
    provider: { "@id": organizationId },
    areaServed: copy.seo.areaServed,
    availableLanguage: copy.seo.availableLanguage
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };
  const formContent: FormContent = {
    title: copy.contact.form.heading,
    text: "",
    fields: { name: "", contact: "", location: "", task: "", start: "", budget: "", photos: "" },
    budgetHint: "",
    submit: copy.contact.form.send,
    localMode: "",
    success: copy.contact.form.success,
    notSent: ""
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Header
        locale={copy.locale}
        activePath="/reconstruction"
        contacts={contactConfig}
        content={{ brand: siteConfig.name, writeLabel: copy.header.writeLabel }}
      />

      <main id="top" className={`reconstruction-v8 reconstruction-v8--${copy.locale}`}>
        <section className="material-hero reconstruction-v8-hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div>
              <p className="eyebrow">{copy.hero.eyebrow}</p>
              <h1 id="hero-title">{copy.hero.title}</h1>
              <p className="hero-phrase">{copy.hero.lead}</p>
              <p className="hero-text">{copy.hero.body}</p>
              <div className="hero-actions">
                <a className="primary-button" href="#contact-form">{copy.hero.primaryCta}</a>
                <a className="secondary-link" href="#work-start">{copy.hero.secondaryCta}</a>
              </div>
            </div>
            <div className="hero-ledger" aria-label={copy.hero.stepsAria}>
              {copy.hero.steps.map((step) => <div key={step.label}><b>{step.label}</b><span>{step.text}</span></div>)}
            </div>
          </div>
          <div className="reconstruction-v8-hero-collage" aria-label={copy.hero.collageAria}>
            {heroImages.map((image, index) => (
              <figure className={`reconstruction-v8-photo${index === 0 ? " reconstruction-v8-photo--house" : ""}`} key={image.src}>
                <Image src={image.src} alt={copy.hero.images[index].alt} width={image.width} height={image.height} priority={index === 0} sizes={index === 0 ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 900px) 50vw, 25vw"} />
                {copy.hero.images[index].caption ? <figcaption>{copy.hero.images[index].caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        </section>

        <section className="section split-section dark-check-section reconstruction-v8-inspection" id="inspection" aria-labelledby="inspection-title">
          <div className="section-heading">
            <p className="eyebrow">{copy.inspection.eyebrow}</p>
            <h2 id="inspection-title">{copy.inspection.title}</h2>
            <p className="body-copy">{copy.inspection.intro}</p>
            <p className="inspection-result body-copy">{copy.inspection.result}</p>
            <div className="price-note"><strong>{copy.inspection.price}</strong><span>{copy.inspection.priceText}</span></div>
            <div className="section-cta">
              <a className="primary-button" href="#contact-form">{copy.inspection.cta}</a>
              <p className="body-copy">{copy.inspection.ctaText}</p>
            </div>
          </div>
          <div>
            <p className="eyebrow">{copy.inspection.checklistEyebrow}</p>
            <ul className="reconstruction-v8-list">{copy.inspection.checklist.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>

        <section className="section reconstruction-v8-character" aria-labelledby="character-title">
          <div className="reconstruction-v8-character-head">
            <div className="section-heading"><p className="eyebrow">{copy.character.eyebrow}</p><h2 id="character-title">{copy.character.title}</h2></div>
            <Paragraphs items={copy.character.paragraphs} />
          </div>
          <div className="reconstruction-v8-interior-collage">
            <figure className="reconstruction-v8-photo"><Image src={characterImages[0].src} alt={copy.character.imageAlts[0]} width={characterImages[0].width} height={characterImages[0].height} sizes="(max-width: 900px) 100vw, 37vw" /></figure>
            <div className="reconstruction-v8-interior-right">
              {characterImages.slice(1).map((image, index) => <figure className="reconstruction-v8-photo" key={image.src}><Image src={image.src} alt={copy.character.imageAlts[index + 1]} width={image.width} height={image.height} sizes="(max-width: 900px) 50vw, 32vw" /></figure>)}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="future-title">
          <div className="section-heading"><p className="eyebrow">{copy.future.eyebrow}</p><h2 id="future-title">{copy.future.title}</h2><p>{copy.future.intro}</p></div>
          <div className="reconstruction-v8-cards">{copy.future.cards.map((card) => <article key={card.title}><h3>{card.title}</h3><p>{card.text}</p></article>)}</div>
        </section>

        <section className="section" aria-labelledby="scale-title">
          <div className="section-heading"><p className="eyebrow">{copy.scale.eyebrow}</p><h2 id="scale-title">{copy.scale.title}</h2></div>
          <div className="reconstruction-v8-scale">{copy.scale.cards.map((card) => <article key={card.title}><h3>{card.title}</h3><p>{card.text}</p></article>)}</div>
        </section>

        <section className="section" aria-labelledby="scope-title">
          <div className="section-heading"><p className="eyebrow">{copy.scope.eyebrow}</p><h2 id="scope-title">{copy.scope.title}</h2></div>
          <div className="reconstruction-v8-scope">{copy.scope.items.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </section>

        <section className="section split-section reconstruction-v8-cost" aria-labelledby="cost-title">
          <div className="section-heading"><p className="eyebrow">{copy.cost.eyebrow}</p><h2 id="cost-title">{copy.cost.title}</h2></div>
          <Paragraphs items={copy.cost.paragraphs} />
        </section>

        <section className="section" aria-labelledby="geography-title">
          <div className="reconstruction-v8-geography">
            <div className="section-heading"><p className="eyebrow">{copy.geography.eyebrow}</p><h2 id="geography-title">{copy.geography.title}</h2></div>
            <Paragraphs items={copy.geography.paragraphs} />
          </div>
        </section>

        <section className="section reconstruction-v8-project" aria-labelledby="project-title">
          <div className="reconstruction-v8-project-head">
            <div className="section-heading"><p className="eyebrow">{copy.project.eyebrow}</p><h2 id="project-title">{copy.project.title}</h2></div>
            <Paragraphs items={copy.project.paragraphs} />
          </div>
          <div className="reconstruction-v8-project-gallery">
            {projectImages.map((image, index) => <figure className={`reconstruction-v8-photo${index === 0 ? " reconstruction-v8-photo--facade" : index === 1 ? " reconstruction-v8-photo--wide" : ""}`} key={image.src}><Image src={image.src} alt={copy.project.images[index].alt} width={image.width} height={image.height} sizes={index === 0 ? "(max-width: 620px) 100vw, 40vw" : "(max-width: 620px) 50vw, 30vw"} /><figcaption>{copy.project.images[index].caption}</figcaption></figure>)}
          </div>
        </section>

        <section className="section split-section reconstruction-v8-hands" aria-labelledby="hands-title">
          <div className="section-heading"><p className="eyebrow">{copy.hands.eyebrow}</p><h2 id="hands-title">{copy.hands.title}</h2></div>
          <Paragraphs items={copy.hands.paragraphs} />
        </section>

        <section className="section reconstruction-v8-process" id="work-start" aria-labelledby="process-title">
          <div className="section-heading"><p className="eyebrow">{copy.process.eyebrow}</p><h2 id="process-title">{copy.process.title}</h2></div>
          <ol className="reconstruction-v8-steps">{copy.process.steps.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
        </section>

        <section className="section" aria-labelledby="faq-title">
          <div className="section-heading"><p className="eyebrow">{copy.faq.eyebrow}</p><h2 id="faq-title">{copy.faq.title}</h2></div>
          <div className="faq-list">{copy.faq.items.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
        </section>

        <section className="section reconstruction-v8-contact" id="contact-form" aria-labelledby="contact-title">
          <div className="contact-copy">
            <h2 id="contact-title">{copy.contact.title}</h2>
            <p>{copy.contact.text}</p>
            <div className="reconstruction-v8-direct-contacts" aria-label={copy.contact.directAria}>
              <a href={contactConfig.whatsapp}><span>WhatsApp</span><strong>+995 555 12 82 31</strong></a>
              <a href={`tel:${contactConfig.phone}`}><span>{copy.contact.phoneLabel}</span><strong>+995 555 12 82 31</strong></a>
              <a href={`mailto:${contactConfig.email}`}><span>{copy.contact.emailLabel}</span><strong>{contactConfig.email}</strong></a>
            </div>
          </div>
          <InquiryForm content={formContent} locale={copy.locale} variant="reconstruction" reconstructionCopy={copy.contact.form} />
        </section>
      </main>

      <footer className="site-footer">
        <div><strong>{siteConfig.name}</strong><span>{copy.footer.line}</span><span>{copy.footer.regions}</span></div>
        <div className="footer-meta"><span>RU / EN / KA</span><span>{copy.footer.copyright}</span></div>
      </footer>
    </>
  );
}
