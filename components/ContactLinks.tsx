import type { ContactConfig } from "@/data/contacts";

type ContactLinksProps = {
  contacts: ContactConfig;
};

export function ContactLinks({ contacts }: ContactLinksProps) {
  const links = [
    contacts.whatsapp ? { label: "WhatsApp", href: contacts.whatsapp } : null,
    contacts.telegram ? { label: "Telegram", href: contacts.telegram } : null,
    contacts.email ? { label: "Email", href: `mailto:${contacts.email}` } : null,
    contacts.instagram ? { label: "Instagram", href: contacts.instagram } : null,
    contacts.phone ? { label: "Phone", href: `tel:${contacts.phone}` } : null
  ].filter(Boolean) as { label: string; href: string }[];

  if (links.length === 0) {
    return null;
  }

  return (
    <div className="contact-links" aria-label="Contact links">
      {links.map((link) => (
        <a key={link.label} href={link.href}>
          {link.label}
        </a>
      ))}
    </div>
  );
}
