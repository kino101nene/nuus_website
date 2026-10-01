# AI agent instructions — nuus_website

This repository is the Nuus website, built with Astro 7 (Node.js 22.12.0 or newer). Keep changes in this website project separate from any Shopify work.

When the user provides a GitHub issue URL or issue number for this repository, read that issue before making changes. Follow its requirements and acceptance criteria, and clarify any conflict with the user's latest instructions. Do not search for issues automatically on every task; if no issue is referenced, work from the user's request and repository context.

## Current structure

- `src/layouts/BaseLayout.astro` provides the shared header, footer, and global CSS imports.
- `src/components/Header.astro` contains the navigation and logo; `src/styles/DesktopNav.css`, `src/styles/MobileNav.css`, and `public/js/main.js` control its appearance and behavior.
- `src/pages/index.astro` and `src/styles/home.css` implement the homepage.
- `src/pages/what/{real-copy,jijitsu,rabbit}.astro` are the current work pages. Their page-specific styles are `src/styles/projects/{real-copy,jijitsu,rabbit}-editorial.css`.
- `src/styles/projects/editorial-shared.css` contains shared work-page typography and layout primitives. `src/styles/projects/next-project.css` contains the shared next-project section.
- `src/pages/who/index.astro` and `src/pages/when/index.astro` use `src/styles/who.css` and `src/styles/when.css`.
- Imported images and videos live in `src/assets`; URL-addressed assets and plain browser scripts live in `public`. Page scripts also live in `src/scripts`.

## Styling and tokens

- `src/styles/main.css` defines site-wide color, type, spacing, and layout tokens. Shared work-page tokens and components are in `src/styles/projects/editorial-shared.css`.
- Inspect the actual page CSS before changing spacing or typography. Some values, including homepage and work-page outer padding, are still set directly in page CSS, so a change to a global token may not affect them.
- **Before implementing a change where font or padding values could reuse an existing token or become a shared token, ask the owner whether to prioritize a token-based implementation.** Name the specific token or shared rule and the page-local alternative. Wait for their answer before making the related style change. Once they choose an approach for a task, use that choice without asking again for each declaration.
- Keep one-off visual values local when the owner chooses a page-specific implementation. Do not silently replace a requested exact value with a nearby token.
- Responsive breakpoints vary by component (currently 600, 699/700, 860, and 900px); inspect the relevant rules instead of assuming one site-wide breakpoint.

## Working on this site

- Change Astro markup in `src/pages` or `src/components`, and change styling in the CSS file that owns the relevant page or shared component.
- Preserve existing asset paths and behavior. Keep browser JavaScript small and relevant to the component or page.
- Run `npm run build` after changes that could affect imports, page output, or shared styles. `npm run dev` starts the local preview; `npm run preview` serves a completed build.
- Do not edit the `copy/` directory as if it were the live site; current pages are under `src/pages`.
