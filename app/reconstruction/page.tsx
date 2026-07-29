import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { ContactLinks } from "@/components/ContactLinks";
import { InquiryForm } from "@/components/InquiryForm";
import { RelatedDirections } from "@/components/RelatedDirections";
import { contactConfig } from "@/data/contacts";
import { relatedDirections } from "@/data/directions";
import { siteConfig } from "@/data/site";
import { getReconstructionContent } from "@/lib/content";

const content = getReconstructionContent("ru");

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  alternates: {
    canonical: "/reconstruction"
  },
  openGraph: {
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    url: "/reconstruction",
    siteName: siteConfig.name,
    locale: "ru_GE",
    type: "website"
  }
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ReconstructionPage() {
  const heroSideImages = content.realPhotos.images.slice(0, 2);
  const materialImages = content.realPhotos.images.slice(0, 5);

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: `${siteConfig.siteUrl}/reconstruction`,
    areaServed: ["Tbilisi", "Kakheti", "Georgia"],
    description: content.seo.description
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Реконструкция старых домов",
    serviceType: "Old house reconstruction",
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.name
    },
    areaServed: ["Тбилиси", "Кахетия", "Грузия"],
    description: content.seo.description
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      <JsonLd data={professionalServiceSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <Header content={content.header} contacts={contactConfig} activePath="/reconstruction" />

      <main>
        <section className="hero-section material-hero">
          <div className="hero-copy">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            {content.hero.mainPhrase ? <p className="hero-phrase">{content.hero.mainPhrase}</p> : null}
            <p className="hero-text">{content.hero.text}</p>
            <div className="hero-actions">
              <a className="primary-button" href="#contact-form">{content.hero.primaryCta}</a>
              <a className="secondary-link" href="#work-start">{content.hero.secondaryCta}</a>
            </div>
            <p className="language-line">{content.hero.languagesLine}</p>
            <div className="hero-ledger" aria-label="How the first conversation works">
              <div>
                <b>01 / смотрим</b>
                <span>дом, фото, место, видимые риски</span>
              </div>
              <div>
                <b>02 / отделяем</b>
                <span>что сохранить, усилить, заменить</span>
              </div>
              <div>
                <b>03 / решаем</b>
                <span>нужен разговор или осмотр</span>
              </div>
            </div>
          </div>
          <div className="hero-photo-ledger" aria-label="Real old house photos">
            <figure className="hero-image hero-main-photo">
              <Image
                src={content.hero.image.src}
                alt={content.hero.image.alt}
                width={1320}
                height={980}
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
              />
              <figcaption>{content.hero.image.caption}</figcaption>
            </figure>
            <div className="hero-photo-stack">
              {heroSideImages.map((image) => (
                <figure className="hero-image" key={image.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={780}
                    height={620}
                    sizes="(max-width: 900px) 100vw, 22vw"
                  />
                  {image.caption ? <figcaption>{image.caption}</figcaption> : null}
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section split-section dark-check-section" aria-labelledby="inspection-title">
          <div className="section-heading">
            <p className="eyebrow">Осмотр</p>
            <h2 id="inspection-title">{content.inspection.title}</h2>
            <p>{content.inspection.text}</p>
          </div>
          <div>
            <ul className="check-list">
              {content.inspection.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="note">{content.inspection.note}</p>
          </div>
        </section>

        <section className="section photo-ledger-section" aria-labelledby="real-photos-title">
          <div className="photo-ledger-copy">
            <div className="section-heading">
              <p className="eyebrow">Детали</p>
              <h2 id="real-photos-title">{content.realPhotos.title}</h2>
            </div>
            <p>{content.realPhotos.text}</p>
          </div>
          <div className="real-photo-grid">
            {materialImages.map((image) => (
              <figure key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={680}
                  sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
                {image.caption ? <figcaption>{image.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        </section>

        <section className="section split-section" aria-labelledby="modern-life-title">
          <div className="section-heading">
            <p className="eyebrow">Жизнь внутри</p>
            <h2 id="modern-life-title">{content.modernLife.title}</h2>
            <p>{content.modernLife.text}</p>
          </div>
          <ul className="scope-list">
            {content.modernLife.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section" aria-labelledby="situations-title">
          <div className="section-heading">
            <p className="eyebrow">Ситуации</p>
            <h2 id="situations-title">{content.situations.title}</h2>
          </div>
          <div className="situation-grid">
            {content.situations.items.map((item) => (
              <article className="situation-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" aria-labelledby="scope-title">
          <div className="section-heading">
            <p className="eyebrow">Состав работ</p>
            <h2 id="scope-title">{content.scope.title}</h2>
            <p>{content.scope.text}</p>
          </div>
          <ul className="scope-list">
            {content.scope.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section object-context-section" aria-labelledby="object-context-title">
          <div className="section-heading">
            <p className="eyebrow">Реальность</p>
            <h2 id="object-context-title">{content.objectContext.title}</h2>
            <p>{content.objectContext.text}</p>
          </div>
          <div className="object-context-grid">
            {content.objectContext.items.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="note">{content.objectContext.note}</p>
        </section>

        <section className="section workshop-section" aria-labelledby="workshop-title">
          <div className="workshop-copy">
            <p className="eyebrow">Формат работы</p>
            <h2 id="workshop-title">{content.workshop.title}</h2>
            <p>{content.workshop.text}</p>
            <p>{content.workshop.extra}</p>
          </div>
          <figure className="profile-image">
            <Image
              src={content.workshop.image.src}
              alt={content.workshop.image.alt}
              width={900}
              height={700}
              sizes="(max-width: 900px) 100vw, 36vw"
            />
            <figcaption>{content.workshop.image.caption}</figcaption>
          </figure>
        </section>

        <section className="section" id="work-start" aria-labelledby="start-title">
          <div className="section-heading compact">
            <p className="eyebrow">Начало</p>
            <h2 id="start-title">{content.start.title}</h2>
          </div>
          <ol className="steps-list">
            {content.start.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="section faq-section" aria-labelledby="faq-title">
          <div className="section-heading compact">
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-title">{content.faq.title}</h2>
          </div>
          <div className="faq-list">
            {content.faq.items.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <RelatedDirections
          title="Если задача окажется шире"
          text="Старый дом редко просит одну кнопку. Иногда после разговора становится понятно, что первым этапом будет крыша, а иногда рядом с домом просится летняя кухня."
          items={relatedDirections.reconstruction}
        />

        <section className="section contact-section" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="eyebrow">Обращение</p>
            <h2 id="contact-title">{content.form.title}</h2>
            <p>{content.form.text}</p>
            <ContactLinks contacts={contactConfig} />
          </div>
          <InquiryForm content={content.form} />
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>{content.footer.brand}</strong>
          <span>{content.footer.line}</span>
          <span>{content.footer.regions}</span>
        </div>
        <div className="footer-meta">
          <span>RU / EN / GE</span>
          <span>{content.footer.copyright}</span>
        </div>
      </footer>
    </>
  );
}
