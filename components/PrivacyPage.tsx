import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { PrivacyLink } from "@/components/PrivacyLink";
import { contactConfig } from "@/data/contacts";
import { privacyPolicy } from "@/data/privacy";
import type { PrivacyLocale } from "@/data/privacy";
import { siteConfig } from "@/data/site";

const privacyPath = (locale: PrivacyLocale) => (locale === "ru" ? "/privacy" : `/${locale}/privacy`);

export function privacyMetadata(locale: PrivacyLocale): Metadata {
  const c = privacyPolicy[locale];
  const title = `${c.title} | Atelier Sweet Home`;
  return {
    title,
    description: c.description,
    alternates: { canonical: privacyPath(locale), languages: { ru: "/privacy", en: "/en/privacy", ka: "/ge/privacy" } },
    openGraph: { title, description: c.description, url: privacyPath(locale), siteName: siteConfig.name, type: "website" }
  };
}

const linkPattern = /(hello@ateliersweethome\.ge|tools\.google\.com\/dlpage\/gaoptout|myadcenter\.google\.com|myaccount\.google\.com\/permissions)/;

function withLinks(text: string): ReactNode[] {
  return text.split(linkPattern).map((part, index) => {
    if (index % 2 === 0) return part;
    return <a key={part} href={part.includes("@") ? `mailto:${part}` : `https://${part}`}>{part}</a>;
  });
}

export function PrivacyPage({ locale }: { locale: PrivacyLocale }) {
  const c = privacyPolicy[locale];
  return (
    <>
      <Header locale={locale} activePath="/privacy" contacts={contactConfig} content={{ brand: siteConfig.name, writeLabel: c.write }} />
      <main className="privacy-page">
        <article>
          <p className="eyebrow">{siteConfig.name}</p>
          <h1>{c.title}</h1>
          <p className="privacy-page__date">{c.effective}</p>
          <p>{c.intro}</p>
          {c.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.blocks.map((block, index) => (
                <div key={index}>
                  {block.text ? <p>{block.lead ? <strong>{block.lead} </strong> : null}{withLinks(block.text)}</p> : null}
                  {block.list ? <ul>{block.list.map((item) => <li key={item}>{withLinks(item)}</li>)}</ul> : null}
                </div>
              ))}
            </section>
          ))}
        </article>
      </main>
      <footer className="site-footer">
        <div><strong>{siteConfig.name}</strong><span>{c.footerLine}</span></div>
        <div className="footer-meta"><span>RU / EN / KA</span><span>© Atelier Sweet Home</span><PrivacyLink locale={locale} /></div>
      </footer>
    </>
  );
}
