import { contactConfig } from "@/data/contacts";

export function FloatingContact() {
  const channel = contactConfig.telegram
    ? "Telegram"
    : contactConfig.whatsapp
      ? "WhatsApp"
      : contactConfig.email
        ? "Email"
        : "Форма";

  return (
    <a className="floating-contact" href="/contacts" aria-label="Связаться с Atelier Sweet Home">
      <span>Связаться</span>
      <small>{channel}</small>
    </a>
  );
}
