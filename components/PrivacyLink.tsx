import Link from "next/link";
import { privacyLinkLabels } from "@/data/privacy";
import type { PrivacyLocale } from "@/data/privacy";

export function PrivacyLink({ locale }: { locale: PrivacyLocale }) {
  return <Link className="footer-privacy-link" href={locale === "ru" ? "/privacy" : `/${locale}/privacy`}>{privacyLinkLabels[locale]}</Link>;
}
