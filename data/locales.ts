export const supportedLocales = ["ru", "en", "ge"] as const;

export type SiteLocale = (typeof supportedLocales)[number];

export const localeLabels: Record<SiteLocale, string> = {
  ru: "RU",
  en: "EN",
  ge: "KA"
};

export function localePrefix(locale: SiteLocale) {
  return locale === "ru" ? "" : `/${locale}`;
}
