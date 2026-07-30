import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { ContactLinks } from "@/components/ContactLinks";
import { InquiryForm } from "@/components/InquiryForm";
import { RelatedDirections } from "@/components/RelatedDirections";
import { contactConfig } from "@/data/contacts";
import { relatedDirections } from "@/data/directions";
import { siteConfig } from "@/data/site";
import { getRoofContent } from "@/lib/content";

const content = getRoofContent("ru");
const beforeImage = content.currentPhotos.images[0];
const processImage = content.currentPhotos.images[1];
const afterImage = content.currentPhotos.images[2];

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  alternates: {
    canonical: "/roof",
    languages: { ru: "/roof", en: "/en/roof", ka: "/ge/roof" }
  },
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    url: "/roof",
    siteName: siteConfig.name,
    locale: "ru_GE",
    type: "website",
    images: [
      {
        url: afterImage.src,
        width: 960,
        height: 1280,
        alt: afterImage.alt
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

export default function RoofPage() {
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: `${siteConfig.siteUrl}/roof`,
    areaServed: ["Tbilisi", "Kakheti", "Georgia"],
    description: content.seo.description
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ремонт и замена крыш старых домов",
    serviceType: "Roof repair and replacement",
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

      <Header content={content.header} contacts={contactConfig} activePath="/roof" />

      <main>
        <section className="roof-hero">
          <div className="roof-hero-copy">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            <p className="hero-phrase">{content.hero.mainPhrase}</p>
            <p className="hero-text">{content.hero.text}</p>
            <div className="hero-actions">
              <a className="primary-button" href="#contact-form">{content.hero.primaryCta}</a>
              <a className="secondary-link" href="#roof-check">{content.hero.secondaryCta}</a>
            </div>
          </div>

          <div className="roof-proof-strip" aria-label="Roof before, process and after">
            {[beforeImage, processImage, afterImage].map((image, index) => (
              <figure key={image.src}>
                <span>{index === 0 ? "до" : index === 1 ? "процесс" : "после"}</span>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={960}
                  height={1280}
                  priority
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
                {image.caption ? <figcaption>{image.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        </section>

        <section className="section roof-case-section" aria-labelledby="roof-case-title">
          <div className="section-heading">
            <p className="eyebrow">Реальная работа</p>
            <h2 id="roof-case-title">Замена крыши на старом доме</h2>
            <p>{content.neededRealCase.publicDraft}</p>
          </div>
          <div className="roof-case-grid">
            {content.neededRealCase.images.map((image) => (
              <figure key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={960}
                  height={1280}
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
                {image.caption ? <figcaption>{image.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
          <p className="note">{content.currentPhotos.warning}</p>
        </section>

        <section className="section" aria-labelledby="situations-title">
          <div className="section-heading">
            <p className="eyebrow">Ситуации</p>
            <h2 id="situations-title">Какие проблемы с крышей решаем</h2>
          </div>
          <div className="situation-grid">
            {content.situations.map((item) => (
              <article className="situation-item" key={item}>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section dark-check-section" id="roof-check" aria-labelledby="roof-check-title">
          <div className="section-heading">
            <p className="eyebrow">Проверка</p>
            <h2 id="roof-check-title">Оцениваем крышу, находим слабые места, предлагаем варианты</h2>
            <p>
              Оцениваем стропила, опирание на стены, старое покрытие, влагу, гниение, свесы и примыкания.
              После осмотра предлагаем варианты: ремонт отдельных элементов, замена поврежденного дерева или новая стропильная система.
            </p>
          </div>
          <ul className="check-list">
            {content.checkBeforeWork.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section split-section" aria-labelledby="scope-title">
          <div className="section-heading">
            <p className="eyebrow">Состав</p>
            <h2 id="scope-title">Что может входить в работу по крыше</h2>
            <p>
              Состав зависит от состояния старой кровли, дерева, стен, будущего утепления и задачи:
              быстро закрыть дом от воды или подготовить его к дальнейшей реконструкции.
            </p>
          </div>
          <ul className="scope-list">
            {content.scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
          title="Если крыша окажется первым этапом"
          text="Иногда задача ограничивается крышей. Иногда после осмотра видно, что кровля связана со стенами, перекрытиями и будущей реконструкцией дома."
          items={relatedDirections.roof}
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
