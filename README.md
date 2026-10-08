# Nuus website

Nuus website built with Astro 7. Requires Node.js 22.12.0 or newer.

## Development

```sh
npm install
npm run dev
```

`npm run build` generates the static site in `dist/`. `npm run preview` serves that build locally.

Japanese is the default language at the existing URLs. English pages use the `/en/` prefix. Both languages share page components, styles, and media; localized copy lives in `src/i18n/`.

## Structure

- `src/pages/`: Japanese routes and their `/en/` counterparts.
- `src/components/`: shared page components, navigation, and language switcher.
- `src/i18n/`: locale-specific copy and route helpers.
- `src/layouts/BaseLayout.astro`: shared page shell, metadata, header, and footer.
- `src/styles/main.css`: site-wide design tokens and base styles. `src/styles/projects/editorial-shared.css` and `next-project.css` provide shared work-page styles.
- `src/assets/`: imported media. `public/`: assets and scripts served by URL.
