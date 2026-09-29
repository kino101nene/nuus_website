# Nuus website

Astro 5 site for Nuus.

## Development

```sh
npm install
npm run dev
```

`npm run build` generates the static site in `dist/`. `npm run preview` serves that build locally.

## Structure

- `src/pages/index.astro`: homepage; styles in `src/styles/home.css`.
- `src/pages/what/real-copy.astro`, `jijitsu.astro`, `rabbit.astro`: current work pages; each imports its matching `*-editorial.css` file from `src/styles/projects/`.
- `src/pages/who/index.astro`, `src/pages/when/index.astro`: other site pages.
- `src/layouts/BaseLayout.astro`: shared page shell, header, footer, and global styles.
- `src/components/`: shared Astro components.
- `src/styles/main.css`: site-wide design tokens and base styles. `src/styles/projects/editorial-shared.css` and `next-project.css` provide shared work-page styles.
- `src/assets/`: imported media. `public/`: assets and scripts served by URL.

`src/pages/what/project-template.astro` is a separate older example route that uses `src/styles/projects/real-copy.css`; the current work pages do not use it.

AI agent guidance is in [`.github/copilot-instructions.md`](.github/copilot-instructions.md) and [`AGENTS.md`](AGENTS.md).
