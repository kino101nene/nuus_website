<!-- Copilot / AI agent instructions for the nuus_website repo -->

# Copilot instructions — nuus_website

Purpose

- Help contributors and AI agents make safe, targeted edits for the Astro-based site.

Quick facts

- Framework: Astro (see package.json dependency). Use `npm run dev` / `npm run build` / `npm run preview`.
- Repo entry points: pages under `src/pages`, reusable markup in `src/components`, and layout wrappers in `src/layouts`.
- Public assets live in `public/assets` and are referenced by their absolute path (e.g. `/assets/...`).

Architecture & conventions (important)

- This is a static/site project using Astro server-side rendering at build time; prefer editing `.astro` files for page markup and layout concerns.
- Layouts: use `src/layouts/BaseLayout.astro` as the site wrapper. Pages import layouts directly.
- Components: small presentational units live in `src/components` (example: `src/components/Header.astro`).
- Styles: global and page-specific CSS live in `src/styles`. Project-specific styles are under `src/styles/projects` (example: `src/styles/projects/real-copy.css`).
- JS: minimal client behavior lives in the `js/` folder (e.g. `js/main.js`, `js/home.js`). Keep JS unobtrusive and DOM-focused.
- Responsive breakpoints: the project commonly uses `@media (max-width: 900px)` patterns — preserve this when adjusting layout breakpoints.

Patterns & examples to follow

- Grid system: many pages use a 12-column CSS grid in `.gallery` and `grid-column: span N;` for tile placement (see `src/styles/projects/real-copy.css`).
- Hero layouts: `.hero-grid` frequently uses two columns `200px 1fr` on desktop and collapses to `1fr` under 900px.
- Vertical titles: some pages use `writing-mode: vertical-rl` and `transform: rotate(180deg)` (see `.title-vertical` in `src/styles/projects/real-copy.css`).
- Aspect ratios: images and video containers commonly use `aspect-ratio: 16 / 9` or `4 / 3` in mobile rules — preserve these for consistent spacing.

Developer workflows

- Local dev: `npm install` then `npm run dev` — Astro dev server runs on `localhost` (see README for defaults).
- Build & preview: `npm run build` then `npm run preview` for post-build checks.
- Avoid introducing new build tools or changing `type: module` in package.json without explicit owner approval.

What to change vs what to avoid

- Change: page content under `src/pages`, style updates in `src/styles`, and small component adjustments in `src/components`.
- Avoid: moving images out of `public/` (breaks existing paths), changing the global layout structure without updating affected pages, or adding large runtime JS bundles.

Integration & dependencies

- The project uses only Astro (see `package.json`). No server-side APIs or DB integrations are present in the repository.
- External services (if added) should be documented in README or a new MD file at repo root.

When in doubt

- Run `npm run dev` locally and validate layout and responsiveness in the browser.
- Use small, focused PRs: update one page or component at a time and include before/after screenshots for visual changes.

If something is missing here or unclear, leave a short note in the PR description and ask for owner review.
