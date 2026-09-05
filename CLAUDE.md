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

**Node is not installed system-wide on this machine.** Install it permanently with
`brew install node` (Homebrew also absent — install from https://brew.sh first), or any
Node version manager (nvm/fnm/volta). Until then, a standalone Node 22.12 arm64 binary lives
at `/private/tmp/tyvelo-node/node-v22.12.0-darwin-arm64/bin` — prepend it to `PATH` to use it:
`export PATH="/private/tmp/tyvelo-node/node-v22.12.0-darwin-arm64/bin:$PATH"`
(that temp copy is outside the repo and is wiped on reboot — install Node properly for a lasting setup).

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
| 404 | `app/not-found.tsx` | Rendered on unmatched URLs |

`app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`. **Hard constraint: no new public routes** beyond `/`, `/faq`, `/privacy`.

## Architecture

- `app/layout.tsx` — root layout: fonts, `<body>`, fixed **background decor** (grid + 2 drifting orbs), skip link, analytics, and default `metadata` + `viewport` (theme-color `#07080B`).
- `app/page.tsx` — renders `<Nav/>`, `<main>` (Hero → Calculator → Services → HowItWorks → Pipeline → FoundingOffer → Guarantee → Founder → Faq), then `<Contact/>` and `<Footer/>` outside `<main>`. Emits the homepage JSON-LD `@graph`.
- `components/` — one component per section. **Server components by default**; `"use client"` only where there's state/effects: `Nav` (mobile menu), `LeadCard` (demo loop), `Calculator` (sliders), `Faq` (accordion), `Contact` (form), `Reveal`, `Counter`, `HeroSpotlight`.
- `lib/` — `tween.ts` (the `setTimeout`-based tween + `prefersReducedMotion`), `leads.ts` (5 hero demo leads), `jsonld.ts` (FAQ data + Organization/FAQPage builders + `SITE_URL`).
- `components/ui.ts` — shared Tailwind class strings (`btnPrimary`, `btnGhost`, `container`, `section`, `label`, `sectionTitle`, `chipAccent`, `check`, `pill`, …). Reuse these; keep them as full static strings so the Tailwind JIT scanner sees them.

### Styling (Tailwind v4)

- Design tokens live in `app/globals.css` under `@theme`: colors (`--color-bg`, `--color-accent` `#5B8CFF`, `--color-accent2` `#7B6BFF`, `--color-green` `#38D39F`, muted greys, card greys), fonts (`--font-sans`/`--font-mono` wired to the next/font CSS variables), and custom animations (`--animate-drift1/drift2/pulsering/spinslow/marquee/flow/blink/bobble/livedot`) with their `@keyframes`.
- Use utilities for layout/spacing; use **arbitrary values** for the precise one-offs (`text-[clamp(40px,6vw,72px)]`, `bg-[linear-gradient(165deg,#10131B,#0A0B11)]`, `shadow-[…]`, `rounded-[22px]`). Always use arbitrary `bg-[linear-gradient(…)]` for gradients (Tailwind v4 renamed `bg-gradient-*`→`bg-linear-*`; arbitrary values avoid the ambiguity and keep exact angles).
- The `≤880px` breakpoint uses the `max-[880px]:` variant.
- Things utilities can't express stay in `globals.css`: `::selection`, custom scrollbar, the `input[type=range].tv-range` thumb/track, the `[data-reveal]` transition hook, and a `@media (prefers-reduced-motion)` block.

### Animations

Ported from the old vanilla JS (no animation library):
- **Reveal** (`components/Reveal.tsx`) — staggered fade-up on mount via the `[data-reveal]` → `.is-visible` class toggle; `delay` prop matches the original base numbers. Polymorphic via `as` and spreads extra props (e.g. `<Reveal as="a" href=…>`).
- **Counter** — counts `0→to` with optional suffix.
- **LeadCard** — the 5-lead looping hero simulation (status/typing/timer/bar), ref-based, mirrors the original imperative loop; reduced-motion → static "answered" state.
- **Calculator** — React-controlled sliders → revenue math (`WINBACK = 0.30`) + slider fill gradient.
- **Faq** — single-open accordion via a `0fr→1fr` grid-rows height transition.
- All effects respect `prefers-reduced-motion` and clean up timers on unmount.

### Theming

**Dark-only.** No light theme, no toggle. Background `#07080B` throughout.

### Logos

Logos in `public/images/logo/` (PNG + WebP, all 677×369, transparent). The dark-only site uses `logo_black.png` (white-content mark) via `next/image` in `components/Brand.tsx` (mark + "TYVELO" wordmark) and in the pipeline engine core. Favicons: `public/favicon.ico` + `public/apple-touch-icon.png`, wired through `metadata.icons`.

## SEO

- Metadata via the Next Metadata API: shared defaults in `layout.tsx`, per-route `metadata` exports (title/description/`alternates.canonical`). Subpages use `title: { absolute: … }`.
- JSON-LD rendered as `<script type="application/ld+json">` from `lib/jsonld.ts`: homepage = `@graph` (Organization/ProfessionalService with 4 services incl. **AI Voice Agent**, + 6-question FAQPage); `/faq` = standalone 11-question FAQPage. **Keep the homepage FAQ accordion and its FAQPage JSON-LD in sync** (both read `homeFaqs`).
- OG image: `public/images/og-image.png` (1200×630).

**Post-deploy checklist:** submit `/sitemap.xml` to Google Search Console + Bing; verify OG at opengraph.xyz; test JSON-LD at Google Rich Results.

## Integrations

- **Contact form** (`components/Contact.tsx`): Formspree `https://formspree.io/f/xvzwezll`, client-side email validation, async `fetch` with `Accept: application/json`; on success shows the success block with the **Calendly** link (`https://calendly.com/myronmalyk/30min`). Cannot double-submit.
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
- Contact email: myron@tyvelo.com
- Contact phone: +1 (778) 809-4442 (`tel:+17788094442`)
- LinkedIn: https://linkedin.com/company/tyvelo
- Founder: Myron, Greater Vancouver / Lower Mainland (BC, Canada)

**Hard constraints (do not violate):**
- No social proof — no testimonials, client logos, metrics, or case studies (no shipped clients yet)
- No new public routes beyond `/`, `/privacy`, `/faq`
- Dark-only — do not reintroduce a light theme
- Do not change the design system or brand voice

## GitHub

Remote: `https://github.com/myronmalyk/ai-agency-website`
