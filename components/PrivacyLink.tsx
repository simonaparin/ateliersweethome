import Link from "next/link";
import { privacyLinkLabels, termsLinkLabels } from "@/data/privacy";
import type { PrivacyLocale } from "@/data/privacy";

export function PrivacyLink({ locale }: { locale: PrivacyLocale }) {
  const prefix = locale === "ru" ? "" : `/${locale}`;
  return (
    <>
      <Link className="footer-privacy-link" href={`${prefix}/privacy`}>{privacyLinkLabels[locale]}</Link>
      <Link className="footer-privacy-link" href={`${prefix}/terms`}>{termsLinkLabels[locale]}</Link>
    </>
  );
}
