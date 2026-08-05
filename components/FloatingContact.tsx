"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { contactConfig } from "@/data/contacts";

export function FloatingContact() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : pathname.startsWith("/ge") ? "ge" : "ru";
  const labels = {
    ru: { action: "Связаться", aria: "Связаться с Atelier Sweet Home", href: "/contacts" },
    en: { action: "Contact us", aria: "Contact Atelier Sweet Home", href: "/en/contacts" },
    ge: { action: "დაგვიკავშირდით", aria: "Atelier Sweet Home-თან დაკავშირება", href: "/ge/contacts" }
  } as const;
  const label = labels[locale];
  return (
    <div className="floating-contact" aria-label={label.aria}>
      <Link className="floating-contact__action" href={label.href}>{label.action}</Link>
      {contactConfig.whatsapp ? <a className="floating-contact__action" href={contactConfig.whatsapp}>WhatsApp</a> : null}
    </div>
  );
}
