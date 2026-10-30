import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { PrivacyLink } from "@/components/PrivacyLink";
import { contactConfig } from "@/data/contacts";
import { privacyPolicy } from "@/data/privacy";
import type { PrivacyContent, PrivacyLocale } from "@/data/privacy";
import { termsOfUse } from "@/data/terms";
import { siteConfig } from "@/data/site";

const localePath = (locale: PrivacyLocale, path: string) => (locale === "ru" ? path : `/${locale}${path}`);

function legalMetadata(locale: PrivacyLocale, c: PrivacyContent, path: string): Metadata {
  const title = `${c.title} | Atelier Sweet Home`;
  return {
    title,
    description: c.description,
    alternates: { canonical: localePath(locale, path), languages: { ru: path, en: `/en${path}`, ka: `/ge${path}` } },
    openGraph: { title, description: c.description, url: localePath(locale, path), siteName: siteConfig.name, type: "website" }
  };
}

export const privacyMetadata = (locale: PrivacyLocale) => legalMetadata(locale, privacyPolicy[locale], "/privacy");
export const termsMetadata = (locale: PrivacyLocale) => legalMetadata(locale, termsOfUse[locale], "/terms");

const linkPattern = /(hello@ateliersweethome\.ge|tools\.google\.com\/dlpage\/gaoptout|myadcenter\.google\.com|myaccount\.google\.com\/permissions)/;

function withLinks(text: string): ReactNode[] {
  return text.split(linkPattern).map((part, index) => {
    if (index % 2 === 0) return part;
    return <a key={part} href={part.includes("@") ? `mailto:${part}` : `https://${part}`}>{part}</a>;
  });
}

function LegalPage({ locale, c, path }: { locale: PrivacyLocale; c: PrivacyContent; path: string }) {
  return (
    <>
      <Header locale={locale} activePath={path} contacts={contactConfig} content={{ brand: siteConfig.name, writeLabel: c.write }} />
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

export const PrivacyPage = ({ locale }: { locale: PrivacyLocale }) => <LegalPage locale={locale} c={privacyPolicy[locale]} path="/privacy" />;
export const TermsPage = ({ locale }: { locale: PrivacyLocale }) => <LegalPage locale={locale} c={termsOfUse[locale]} path="/terms" />;
