# Naphat Chartwanchai — Portfolio

An editorial portfolio built with Next.js App Router, TypeScript, Tailwind CSS 4, Motion, and Lucide. Includes four statically generated project profiles, a persistent light/dark theme, responsive navigation, original CSS/SVG conceptual artwork, and generated Open Graph artwork.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
```

## Personalize

Edit `src/data/portfolio.ts` for profile information, contact URLs, résumé URL, projects, experience, and skills. Contact and résumé links currently show an honest “coming soon” notice. Set `profile.resume` to `/resume.pdf` and place your PDF in `public/resume.pdf` to enable downloading. Set email, GitHub, and LinkedIn to real values to enable those links.

Project profiles at `/projects/[slug]` contain all eight case-study sections. Missing ownership, implementation details, dates, lessons, and measured results are visibly marked for completion. No achievements or impact metrics have been invented. Conceptual artwork is explicitly labeled and does not represent real product screenshots.

Colors, spacing, breakpoints, and reduced-motion overrides live in `src/app/globals.css`. The direction is documented in `design-system/MASTER.md`, informed by `uxui_promax.md` and a verified local UI/UX Pro Max design-system query. Navigation, motion, link feedback, diagrams, and footer are reusable components in `src/components`.

Geist and Geist Mono are optimized and self-hosted by `next/font`; the first production build requires access to Google Fonts. No runtime font requests or remote image dependencies are used. Theme preference is stored locally; no analytics, database, or authentication is included.

Before publishing, fill the missing personal details, confirm case-study content, and add the production domain to metadata if canonical URLs are wanted.

Set `NEXT_PUBLIC_SITE_URL` to your production origin (see `.env.example`) before building for deployment so Open Graph image URLs use your domain. Builds use the supported webpack compiler because this workspace restricts the local subprocess ports required by Turbopack.
