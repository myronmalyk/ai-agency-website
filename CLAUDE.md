# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the site

```
npm install      # first time (Node 20+; Node 22 LTS recommended)
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (also type-checks + lints)
npm run start    # serve the production build
npm run lint     # eslint (next/core-web-vitals + next/typescript)
```

Node 22.14 is installed at `~/.local/bin/node` and is on `PATH` — no extra setup needed.

`npm run build` and `npm run dev` are verified working; all routes prerender clean.

## Stack

- **Next.js 15** (App Router, React 19) + **TypeScript** (strict)
- **Tailwind CSS v4** — CSS-first config via `@theme` in `app/globals.css` (no `tailwind.config.js`)
- **next/font** self-hosts Space Grotesk + JetBrains Mono (no external Google Fonts links)
- `@vercel/analytics` + `@vercel/speed-insights` React components (in `app/layout.tsx`)
- Deploys to **Vercel** (standard Next runtime — not static export)

This was migrated from a plain static HTML/CSS/JS site. The previous "no frameworks/bundlers/npm" constraint no longer applies.

## Routes (App Router)

| Route | File | Notes |
|-------|------|-------|
| `/` | `app/page.tsx` | Homepage — composes the section components |
| `/faq` | `app/faq/page.tsx` | Full FAQ (native `<details>` accordion) + standalone FAQPage JSON-LD |
| `/privacy` | `app/privacy/page.tsx` | Privacy policy |
| `/abbotsford` | `app/abbotsford/page.tsx` | City landing page — content object → shared `CityPage` |
| `/surrey` | `app/surrey/page.tsx` | City landing page — content object → shared `CityPage` |
| 404 | `app/not-found.tsx` | Rendered on unmatched URLs |

`app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`. **Hard constraint: no new public routes** beyond `/`, `/faq`, `/privacy`, `/abbotsford`, `/surrey`. Adding another city means a new `app/<city>/page.tsx` holding a real, hand-written `CityContent` — never spun boilerplate — plus a `sitemap.ts` entry.

## Architecture

- `app/layout.tsx` — root layout: fonts, `<body>`, fixed **background decor** (grid + 2 drifting orbs), skip link, analytics, and default `metadata` + `viewport` (theme-color `#07080B`).
- `app/page.tsx` — renders `<Nav/>`, `<main>` (Hero → Calculator → Services → HowItWorks → Pricing → Pipeline → FoundingOffer → Guarantee → Founder → Faq), then `<Contact/>` and `<Footer/>` outside `<main>`. Emits the homepage JSON-LD `@graph`.
- `components/` — one component per section. **Server components by default**; `"use client"` only where there's state/effects: `Nav` (mobile menu), `Calculator` (sliders), `Faq` (accordion), `Contact` (form), `Reveal`, `HeroSpotlight`.
- `components/Services.tsx` — the five-stage loop. Renders `LoopDiagram` then offer cards grouped by stage (02 Get contacted → Speed-to-Lead + AI Voice Agent add-on; 03 Quote/book → Quote Chasing; 05 Get paid & come back → Invoice Chasing + Maintenance Recall; stages 01/04 shown as "later in the loop").
- `components/DemoShowcase.tsx` — hero demo panel. Plays `public/video/demo.mp4` when that file exists, otherwise renders the static labelled example. The check is `hasPublicFile`, evaluated at **build time** — dropping the video in requires a rebuild.
- `lib/` — `site.ts` (contact/geography/price constants + the cited response study; **client-safe, no node built-ins**), `assets.ts` (`hasPublicFile`, server-only — uses `fs`), `tween.ts` (the `setTimeout`-based tween + `prefersReducedMotion`), `jsonld.ts` (FAQ data + Organization/FAQPage/Service builders + `SITE_URL`).
- `components/ui.ts` — shared Tailwind class strings (`btnPrimary`, `btnGhost`, `container`, `section`, `label`, `sectionTitle`, `chipAccent`, `check`, `pill`, …). Reuse these; keep them as full static strings so the Tailwind JIT scanner sees them.

**Never import `lib/assets.ts` from a `"use client"` component** — it pulls in `fs` and breaks the client bundle. Contact details and copy constants belong in `lib/site.ts`, which is safe from either side.

### Styling (Tailwind v4)

- Design tokens live in `app/globals.css` under `@theme`: colors (`--color-bg`, `--color-accent` `#5B8CFF`, `--color-accent2` `#7B6BFF`, `--color-green` `#38D39F`, muted greys, card greys), fonts (`--font-sans`/`--font-mono` wired to the next/font CSS variables), and custom animations (`--animate-drift1/drift2/pulsering/spinslow/marquee/flow/blink/bobble/livedot`) with their `@keyframes`.
- Use utilities for layout/spacing; use **arbitrary values** for the precise one-offs (`text-[clamp(40px,6vw,72px)]`, `bg-[linear-gradient(165deg,#10131B,#0A0B11)]`, `shadow-[…]`, `rounded-[22px]`). Always use arbitrary `bg-[linear-gradient(…)]` for gradients (Tailwind v4 renamed `bg-gradient-*`→`bg-linear-*`; arbitrary values avoid the ambiguity and keep exact angles).
- The `≤880px` breakpoint uses the `max-[880px]:` variant.
- Things utilities can't express stay in `globals.css`: `::selection`, custom scrollbar, the `input[type=range].tv-range` thumb/track, the `[data-reveal]` transition hook, and a `@media (prefers-reduced-motion)` block.

### Animations

Ported from the old vanilla JS (no animation library):
- **Reveal** (`components/Reveal.tsx`) — staggered fade-up on mount via the `[data-reveal]` → `.is-visible` class toggle; `delay` prop matches the original base numbers. Polymorphic via `as` and spreads extra props (e.g. `<Reveal as="a" href=…>`).
- **Calculator** — React-controlled sliders → revenue math (`WINBACK = 0.30`) + slider fill gradient. Defaults: 40 leads / $850 job / 35% replied in 5 min.
- Hero stats are **server-rendered static values**. The old `Counter` count-up rendered "<0" and "0%" before hydration, which read as broken; `Counter.tsx` and the looping `LeadCard`/`lib/leads.ts` were removed with it.
- **Faq** — single-open accordion via a `0fr→1fr` grid-rows height transition.
- All effects respect `prefers-reduced-motion` and clean up timers on unmount.

### Theming

**Dark-only.** No light theme, no toggle. Background `#07080B` throughout.

### Logos

Founder headshot: `public/images/myron.png` (800×800), rendered via `next/image` `fill` + `object-cover` in `components/Founder.tsx`.

Logos in `public/images/logo/` (PNG + WebP, all 677×369, transparent). The dark-only site uses `logo_black.png` (white-content mark) via `next/image` in `components/Brand.tsx` (mark + "TYVELO" wordmark) and in the pipeline engine core. Favicons: `public/favicon.ico` + `public/apple-touch-icon.png`, wired through `metadata.icons`.

## SEO

- Metadata via the Next Metadata API: shared defaults in `layout.tsx`, per-route `metadata` exports (title/description/`alternates.canonical`). Subpages use `title: { absolute: … }`.
- JSON-LD rendered as `<script type="application/ld+json">` from `lib/jsonld.ts`: homepage = `@graph` (Organization/ProfessionalService with 6 services + 9-question FAQPage); `/faq` = standalone 15-question FAQPage; `/abbotsford` + `/surrey` = `Service` node (via `cityGraph`) + `BreadcrumbList`. **Keep the homepage FAQ accordion and its FAQPage JSON-LD in sync** (both read `homeFaqs`; `allFaqs` spreads `homeFaqs` then adds the rest).
- OG image: `public/images/og-image.png` (1200×630).

**Post-deploy checklist:** submit `/sitemap.xml` to Google Search Console + Bing; verify OG at opengraph.xyz; test JSON-LD at Google Rich Results.

## Integrations

- **Contact form** (`components/Contact.tsx`): Formspree `https://formspree.io/f/xvzwezll`, client-side email validation, async `fetch` with `Accept: application/json`; on success shows the success block with the **Calendly** link (`CALENDLY_URL`). Cannot double-submit.
- **Security headers** (HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy) are set in `next.config.ts` `headers()`.

## Design tokens

| Token | Value |
|-------|-------|
| Accent | `#5B8CFF` |
| Accent 2 | `#7B6BFF` |
| Success | `#38D39F` |
| Background | `#07080B` |
| Card | `#0F1117` / `#0A0B10` |

## Branding

- Agency name: **Tyvelo** (wordmark rendered uppercase "TYVELO")
- Positioning: every local service business runs the same loop — get found → get contacted → quote/book → do the work → get paid & come back — and leaks money at the handoffs. Tyvelo plugs the leaks with automated follow-through. Speed-to-Lead is the entry offer; the loop is the frame.
- Primary vertical: **trades** (HVAC, plumbing, electrical, roofing, landscaping)
- Geography: **Fraser Valley + Lower Mainland** — Abbotsford, Surrey, Langley, Chilliwack
- Contact email: myron@tyvelo.com
- Contact phone: (778) 809-4442 (`tel:+17788094442`) — founder's direct line, used for calls/texts
- WhatsApp: https://wa.me/17788094442
- Founding rate: **$197/mo CAD** flat, per location (`FOUNDING_PRICE` in `lib/site.ts`)
- LinkedIn: https://linkedin.com/company/tyvelo
- Founder: Myron, Abbotsford (BC, Canada)

All of the above live as constants in `lib/site.ts` — change them there, not in components.

**Hard constraints (do not violate):**
- No social proof — no testimonials, client logos, metrics, or case studies (no shipped clients yet). Where proof would normally go, use honest "founding cohort" copy.
- **No fabricated numbers.** Any statistic on the site must cite a real, checkable source (see `RESPONSE_STUDY` in `lib/site.ts`). The calculator's 30% win-back is labelled as *our assumption*, not a result.
- No new public routes beyond `/`, `/privacy`, `/faq`, `/abbotsford`, `/surrey`
- Dark-only — do not reintroduce a light theme
- Do not change the design system or brand voice
- **Banned vocabulary**: "AI business process automation", "digital transformation", "solutions", "cutting-edge", "leverage". Every headline names a concrete problem or outcome an owner already recognises.
- Compliance copy (CASL opt-out, consent windows) is written as **how Tyvelo is built to operate** — never as an already-audited claim.
- Keep "No call required" to exactly two occurrences: the Services footnote and the Contact block.

## GitHub

Remote: `https://github.com/myronmalyk/ai-agency-website`
