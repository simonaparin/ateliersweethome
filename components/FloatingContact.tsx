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
  const channel = contactConfig.telegram
    ? "Telegram"
    : contactConfig.whatsapp
      ? "WhatsApp"
      : contactConfig.email
        ? "Email"
        : "Форма";

  return (
    <Link className="floating-contact" href={label.href} aria-label={label.aria}>
      <span>{label.action}</span>
      <small>{channel}</small>
    </Link>
  );
}
