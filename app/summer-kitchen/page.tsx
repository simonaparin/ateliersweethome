import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { ContactLinks } from "@/components/ContactLinks";
import { InquiryForm } from "@/components/InquiryForm";
import { RelatedDirections } from "@/components/RelatedDirections";
import { contactConfig } from "@/data/contacts";
import { relatedDirections } from "@/data/directions";
import { siteConfig } from "@/data/site";
import { getSummerKitchenContent } from "@/lib/content";

const content = getSummerKitchenContent("ru");

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  alternates: {
    canonical: "/summer-kitchen",
    languages: { ru: "/summer-kitchen", en: "/en/summer-kitchen", ka: "/ge/summer-kitchen" }
  },
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    url: "/summer-kitchen",
    siteName: siteConfig.name,
    locale: "ru_GE",
    type: "website",
    images: [
      {
        url: content.hero.image.src,
        width: 1280,
        height: 960,
        alt: content.hero.image.alt
      }
    ]
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

export default function SummerKitchenPage() {
  const galleryImages = content.realObject.images.slice(1);

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: `${siteConfig.siteUrl}/summer-kitchen`,
    areaServed: ["Tbilisi", "Kakheti", "Georgia"],
    description: content.seo.description
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Летние кухни и навесы",
    serviceType: "Outdoor kitchen construction",
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

      <Header content={content.header} contacts={contactConfig} activePath="/summer-kitchen" />

      <main>
        <section className="summer-hero">
          <div className="summer-hero-copy">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            <p className="hero-phrase">{content.hero.mainPhrase}</p>
            <p className="hero-text">{content.hero.text}</p>
            <div className="hero-actions">
              <a className="primary-button" href="#contact-form">{content.hero.primaryCta}</a>
              <a className="secondary-link" href="#site-check">{content.hero.secondaryCta}</a>
            </div>
          </div>

          <figure className="summer-hero-image">
            <Image
              src={content.hero.image.src}
              alt={content.hero.image.alt}
              width={1280}
              height={960}
              priority
              sizes="100vw"
            />
            <figcaption>{content.hero.image.caption}</figcaption>
          </figure>

          <div className="summer-spec-strip" aria-label="Visible project elements">
            <span>навес</span>
            <span>рабочая зона</span>
            <span>свет</span>
            <span>металл</span>
            <span>плитка</span>
          </div>
        </section>

        <section className="section kitchen-gallery-section" aria-labelledby="real-object-title">
          <div className="section-heading">
            <p className="eyebrow">Реальный объект</p>
            <h2 id="real-object-title">{content.realObject.title}</h2>
            <p>{content.realObject.text}</p>
          </div>
          <div className="kitchen-gallery">
            {galleryImages.map((image) => (
              <figure key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={680}
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
                {image.caption ? <figcaption>{image.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="situations-title">
          <div className="section-heading">
            <p className="eyebrow">Ситуации</p>
            <h2 id="situations-title">{content.situations.title}</h2>
          </div>
          <div className="situation-grid">
            {content.situations.items.map((item) => (
              <article className="situation-item" key={item}>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section dark-check-section" id="site-check" aria-labelledby="site-check-title">
          <div className="section-heading">
            <p className="eyebrow">Место</p>
            <h2 id="site-check-title">{content.siteCheck.title}</h2>
            <p>{content.siteCheck.text}</p>
          </div>
          <ul className="check-list">
            {content.siteCheck.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section split-section" aria-labelledby="scope-title">
          <div className="section-heading">
            <p className="eyebrow">Состав</p>
            <h2 id="scope-title">{content.scope.title}</h2>
            <p>{content.scope.text}</p>
          </div>
          <ul className="scope-list">
            {content.scope.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section kitchen-price-section" aria-labelledby="price-title">
          <div className="section-heading compact">
            <p className="eyebrow">Стоимость</p>
            <h2 id="price-title">{content.price.title}</h2>
            <p>{content.price.text}</p>
          </div>
        </section>

        <section className="section" aria-labelledby="start-title">
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
          title="Если это часть большего плана"
          text="Летняя кухня может быть отдельным объектом или частью будущей реконструкции дома и участка. Сначала определяем первый разумный шаг, затем собираем общий план."
          items={relatedDirections.summerKitchen}
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
