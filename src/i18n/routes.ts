import { getRelativeLocaleUrl } from "astro:i18n";

export type Locale = "ja" | "en";
export type Page = "home" | "who" | "realCopy" | "jijitsu" | "rabbit";

const paths: Record<Page, string> = {
  home: "",
  who: "who",
  realCopy: "what/real-copy",
  jijitsu: "what/jijitsu",
  rabbit: "what/rabbit"
};

const translatedPages: ReadonlySet<Page> = new Set(["home", "who", "realCopy", "jijitsu", "rabbit"]);

export function getPageHref(locale: Locale, page: Page, fragment?: string): string {
  // Keep this fallback for future pages until a matching English route is published.
  const routeLocale = translatedPages.has(page) ? locale : "ja";
  const href = getRelativeLocaleUrl(routeLocale, paths[page]);
  return fragment ? `${href}#${fragment}` : href;
}
