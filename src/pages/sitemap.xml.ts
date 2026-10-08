import type { APIRoute } from "astro";
import { getPageHref, type Page } from "../i18n/routes";

export const prerender = true;

const publishedPages: Page[] = ["home", "who", "realCopy", "jijitsu", "rabbit"];
const locales = ["ja", "en"] as const;

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error("A production site URL is required for the sitemap.");

  const entries = publishedPages.flatMap((page) => {
    const alternates = locales.map((locale) => ({
      locale,
      url: new URL(getPageHref(locale, page), site).href
    }));

    return alternates.map(({ url }) => `  <url>
    <loc>${url}</loc>
${alternates.map(({ locale, url: alternateUrl }) => `    <xhtml:link rel="alternate" hreflang="${locale}" href="${alternateUrl}" />`).join("\n")}
  </url>`);
  });

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
