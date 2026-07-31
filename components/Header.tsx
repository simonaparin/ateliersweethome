import Link from "next/link";
import type { HeaderContent } from "@/types/content";
import type { ContactConfig } from "@/data/contacts";
import { siteConfig } from "@/data/site";

type HeaderProps = {
  content: HeaderContent;
  contacts: ContactConfig;
  activePath?: string;
  locale?: "ru" | "en" | "ge";
};

export function Header({ content, contacts, activePath = "/reconstruction", locale = "ru" }: HeaderProps) {
  const hasContact = Boolean(contacts.whatsapp || contacts.telegram || contacts.email);
  const localizedPath = (target: "ru" | "en" | "ge") => target === "ru" ? activePath : `/${target}${activePath}`;
  const contactsPath = locale === "ru" ? "/contacts" : `/${locale}/contacts`;
  const homeSchema = locale !== "ru" && activePath === "/" ? { "@context": "https://schema.org", "@type": "ProfessionalService", name: siteConfig.name, url: `${siteConfig.siteUrl}/${locale}`, telephone: "+995555128231", email: "ai769598@gmail.com", areaServed: ["Tbilisi", "Kakheti", "Georgia"], availableLanguage: locale === "en" ? "English" : "Georgian" } : null;

  return (
    <header className="site-header">
      {homeSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} /> : null}
      <Link className="brand" href={locale === "ru" ? "/" : `/${locale}`} aria-label="Atelier Sweet Home">
        {content.brand}
      </Link>

      <div className="header-actions" aria-label="Language and contact controls">
        <nav className="language-switcher" aria-label="Language">
          <a aria-current={locale === "ru" ? "page" : undefined} href={localizedPath("ru")}>RU</a>
          <a aria-current={locale === "en" ? "page" : undefined} href={localizedPath("en")}>EN</a>
          <a aria-current={locale === "ge" ? "page" : undefined} href={localizedPath("ge")}>GE</a>
        </nav>
        {hasContact ? (
          <a className="write-link" href={contactsPath}>{content.writeLabel}</a>
        ) : (
          <a className="write-link" href={contactsPath}>{content.writeLabel}</a>
        )}
      </div>
    </header>
  );
}
