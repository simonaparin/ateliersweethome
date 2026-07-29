import Link from "next/link";
import type { HeaderContent } from "@/types/content";
import type { ContactConfig } from "@/data/contacts";

type HeaderProps = {
  content: HeaderContent;
  contacts: ContactConfig;
  activePath?: string;
};

export function Header({ content, contacts, activePath = "/reconstruction" }: HeaderProps) {
  const hasContact = Boolean(contacts.whatsapp || contacts.telegram || contacts.email);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Atelier Sweet Home">
        {content.brand}
      </Link>

      <div className="header-actions" aria-label="Language and contact controls">
        <nav className="language-switcher" aria-label="Language">
          <a aria-current="page" href={`${activePath}?lang=ru`}>RU</a>
          <a aria-disabled="true" href={`${activePath}?lang=en`}>EN</a>
          <a aria-disabled="true" href={`${activePath}?lang=ka`}>GE</a>
        </nav>
        {hasContact ? (
          <a className="write-link" href="#contact-form">{content.writeLabel}</a>
        ) : (
          <a className="write-link" href="#contact-form">{content.writeLabel}</a>
        )}
      </div>
    </header>
  );
}
