import Link from "next/link";
import type { HeaderContent } from "@/types/content";
import type { ContactConfig } from "@/data/contacts";

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

  return (
    <header className="site-header">
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
