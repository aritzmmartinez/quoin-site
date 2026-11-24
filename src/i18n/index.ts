import { es } from "./es";
import { en } from "./en";

import { locales, type Locale } from "./config";

export { defaultLocale, locales, type Locale } from "./config";

const dictionaries = { es, en } satisfies Record<Locale, typeof es>;

export function isLocale(value: unknown): value is Locale {
  return locales.includes(value as Locale);
}

export function useTranslations(locale: Locale) {
  return dictionaries[locale];
}

export function localeStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
