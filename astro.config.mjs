// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Preserve the pre-v7 handling of spaces between inline elements.
  compressHTML: true,
  site: process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined),
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    routing: { prefixDefaultLocale: false }
  },
  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: [
        'skylar-intermuscular-uncontiguously.ngrok-free.dev'
      ]
    }
  }
});
