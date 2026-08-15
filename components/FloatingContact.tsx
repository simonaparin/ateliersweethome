"use client";

import { usePathname } from "next/navigation";
import { contactConfig } from "@/data/contacts";

const LABELS = {
  ru: "Написать в WhatsApp",
  en: "Message us on WhatsApp",
  ge: "მოგვწერეთ WhatsApp-ში"
} as const;

export function FloatingContact() {
  const pathname = usePathname();
  if (!contactConfig.whatsapp) return null;
  const locale = pathname.startsWith("/en") ? "en" : pathname.startsWith("/ge") ? "ge" : "ru";
  const label = LABELS[locale];
  return (
    <a className="whatsapp-fab" href={contactConfig.whatsapp} aria-label={label} title={label}>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.8h-.02a9.8 9.8 0 01-4.99-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.78 9.78 0 01-1.5-5.23c0-5.4 4.4-9.8 9.82-9.8a9.75 9.75 0 016.94 2.88 9.72 9.72 0 012.87 6.93c0 5.4-4.4 9.8-9.81 9.8M20.52 3.45A11.7 11.7 0 0012.05 0C5.55 0 .26 5.29.26 11.79c0 2.08.54 4.11 1.58 5.9L.16 24l6.45-1.69a11.75 11.75 0 005.43 1.38h.01c6.5 0 11.79-5.29 11.79-11.79 0-3.15-1.23-6.11-3.46-8.34" />
      </svg>
    </a>
  );
}
