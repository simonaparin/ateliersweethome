import Link from "next/link";
import type { HeaderContent } from "@/types/content";
import type { ContactConfig } from "@/data/contacts";
import { siteConfig } from "@/data/site";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

type HeaderProps = {
  content: HeaderContent;
  contacts: ContactConfig;
  activePath?: string;
  locale?: "ru" | "en" | "ge";
};

export function Header({ content, contacts, activePath = "/reconstruction", locale = "ru" }: HeaderProps) {
  const localizedPath = (target: "ru" | "en" | "ge") => target === "ru" ? activePath : `/${target}${activePath}`;
  const contactsPath = locale === "ru" ? "/contacts" : `/${locale}/contacts`;
  const enquiryPath = activePath === "/reconstruction" || activePath === "/home-inspection" ? "#contact-form" : contactsPath;
  const formattedPhone = "+995 555 12 82 31";
  const homeSchema = locale !== "ru" && activePath === "/" ? { "@context": "https://schema.org", "@type": "ProfessionalService", name: siteConfig.name, url: `${siteConfig.siteUrl}/${locale}`, telephone: "+995555128231", email: "hello@ateliersweethome.ge", areaServed: ["Tbilisi", "Kakheti", "Georgia"], availableLanguage: locale === "en" ? "English" : "Georgian" } : null;
  const services = locale === "ru"
    ? [["Реконструкция", "/reconstruction"], ["Обследование", "/home-inspection"], ["Крыши", "/roof"], ["Летние кухни", "/summer-kitchen"]]
    : locale === "en"
      ? [["Renovation", "/reconstruction"], ["Home inspection", "/home-inspection"], ["Roofs", "/roof"], ["Outdoor kitchens", "/summer-kitchen"]]
      : [["რეკონსტრუქცია", "/reconstruction"], ["სახლის შემოწმება", "/home-inspection"], ["სახურავები", "/roof"], ["საზაფხულო სამზარეულოები", "/summer-kitchen"]];

  return (
    <header className={`site-header${activePath === "/home-inspection" ? " site-header--home-inspection" : ""}`}>
      {homeSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} /> : null}
      <div className="header-topline">
        <Link className="brand" href={locale === "ru" ? "/" : `/${locale}`} aria-label="Atelier Sweet Home — home">
          {content.brand}
        </Link>
      </div>

      <nav className="service-links" aria-label={locale === "ru" ? "Направления работ" : locale === "en" ? "Services" : "სამუშაოების მიმართულებები"}>
        {services.map(([label, path]) => <Link key={path} href={locale === "ru" ? path : `/${locale}${path}`} aria-current={activePath === path ? "page" : undefined}>{label}</Link>)}
      </nav>

      <div className="header-actions" aria-label={locale === "ru" ? "Язык и контакты" : locale === "en" ? "Language and contact options" : "ენა და კონტაქტები"}>
        <LanguageSwitcher
          locale={locale}
          label={locale === "ru" ? "Язык" : locale === "en" ? "Language" : "ენა"}
          hrefFor={{ ru: localizedPath("ru"), en: localizedPath("en"), ge: localizedPath("ge") }}
        />
        {contacts.phone ? <a className="header-phone" href={`tel:${contacts.phone}`}>{formattedPhone}</a> : null}
        <a className="write-link" href={enquiryPath}>{content.writeLabel}</a>
      </div>
    </header>
  );
}
