# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Previewing the site

Open `index.html` directly in a browser, or run a local server:
```
python3 -m http.server 8080
```

No build step, no package manager, no compilation — it's plain static files.

## Stack

- **HTML/CSS/JS only** — no frameworks, no bundlers, no dependencies to install
- **GSAP 3 + ScrollTrigger** loaded via CDN in `index.html`
- **Google Fonts** via CDN: DM Serif Display, DM Sans (300/400), Space Mono (400) — loaded async (preload + `media="print"` pattern) to avoid render-blocking

## Pages

| Route | File | Notes |
|-------|------|-------|
| `/` | `index.html` | Main single-page site |
| `/privacy` | `privacy.html` | Privacy policy, self-contained inline CSS |
| `/faq` | `faq.html` | Full FAQ, self-contained inline CSS |

**Hard constraint: no new routes.** Only these three pages exist.

## Architecture

Three files do everything on the homepage:

- `index.html` — all markup and section structure
- `css/style.css` — all styles, theming, animations
- `js/main.js` — all interactivity (wrapped in an IIFE)

`privacy.html` and `faq.html` have self-contained inline `<style>` blocks — no external CSS file.

### Theming

Dual theme via `data-theme="dark|light"` on `<html>`. CSS custom properties are defined in two blocks:

```css
[data-theme="dark"], :root { --bg: #0a0a0a; ... }
[data-theme="light"]       { --bg: #ffffff; ... }
```

Theme is toggled in JS and persisted to `localStorage` under key `ma-theme`. The hero and CTA sections are **always dark** regardless of theme (hardcoded `background: #0a0a0a`).

### Logos

Four logo PNGs in `images/logo/` — all have **transparent backgrounds**. WebP equivalents (`.webp`) exist for each.

- `logo_black.png` / `.webp` — icon only, **white content** → use on dark backgrounds (dark theme)
- `logo_white.png` / `.webp` — icon only, **black content** → use on light backgrounds (light theme)
- `logo_text_black.png` / `.webp` — icon + wordmark, **white content** → dark theme nav
- `logo_text_white.png` / `.webp` — icon + wordmark, **black content** → light theme nav

The filename suffix (`_black` / `_white`) refers to **which theme background** the logo is designed for, not the content color.

**Nav uses text logos** (`logo_text_*`). **Everywhere else** uses icon-only logos (`logo_*`).

Switching is CSS-only via blend modes and `display` toggling:
```css
.logo--dark  { mix-blend-mode: screen; }               /* visible by default */
.logo--light { mix-blend-mode: multiply; display: none; }
[data-theme="light"] .logo--dark  { display: none; }
[data-theme="light"] .logo--light { display: block; }
```

**WebP upgrade pattern:** All `<img>` logo tags are wrapped in `<picture>` with a WebP `<source>`. The CSS rule `picture { display: contents; }` makes `<picture>` a transparent wrapper so all existing `.logo--dark` / `.logo--light` rules continue to apply to the inner `<img>` unchanged. Do not remove this rule or the theme toggle breaks.

**Favicons:** `favicon.ico` (32×32) and `apple-touch-icon.png` (180×180) at repo root. All pages link both.

### Animations

- **Hero**: Full GSAP timeline on page load — line-mask text reveal, rule draw, typewriter subtitle, CTA fade-in
- **All other sections**: Simple scroll reveals only. Elements start at `opacity: 0; transform: translateY(22px)` via `[data-anim]` attribute, animated to visible by ScrollTrigger `onEnter`
- **Reduced motion**: Detected at top of `main.js` — all elements set visible immediately, script returns early

### Key CSS patterns

- **Line-mask reveal**: `.lm` has `overflow: hidden`; child `.lm__i` starts at `translateY(110%)` and animates to `0`
- **Scroll reveals**: Add `data-anim` attribute to any element — JS picks it up automatically
- **Section labels**: Use `<span class="label">// LABEL TEXT</span>` — Space Mono, dimmed color, `//` prefix is part of the content
- **Skip link**: `.skip-link` is visually hidden, revealed on `:focus`. Points to `#main` anchor at top of hero.
- **FAQ accordion**: Uses native `<details>/<summary>`. The `+` icon rotates 45° to `×` via `.faq__item[open] .faq__icon { transform: rotate(45deg) }`.
- **About fit block**: `.about__fit` is a two-column grid under `.about__right`, bordered at top.
- **CTA risk line**: `.cta__risk` — Space Mono, very dim, sits below `.cta__sub`.

## Design tokens

| Token | Value |
|-------|-------|
| Accent | `#8B9DFF` (blue-purple) |
| Dark bg | `#0a0a0a` |
| Light bg | `#ffffff` (pure white — never warm off-whites) |
| Dark card | `#131313` |

## Nav

Floating iOS-style frosted glass pill: `position: fixed`, centered via `left: 50%; transform: translateX(-50%)`, `border-radius: 16px`, `backdrop-filter: blur(24px) saturate(180%)`. Everything except the logo lives in `.nav__right` (`margin-left: auto`). On mobile (≤768px), `.nav__right` is hidden and a hamburger menu takes over.

## Contact form

- Formspree endpoint: `https://formspree.io/f/xvzwezll` ✅
- Calendly URL: `https://calendly.com/myronmalyk/30min` ✅
- Email validation runs client-side before fetch; shows error in `.cf__error` if empty/invalid
- Button reset handled in `finally` block in `main.js` — always resets unless form was hidden on success

## SEO

- `sitemap.xml` at root — lists `/`, `/faq`, `/privacy`
- `robots.txt` at root — allows all, points to sitemap
- Canonical `<link>` on every page
- OG + Twitter Card meta on every page
- OG image: `images/og-image.png` (1200×630) — generated with Python/Pillow
- JSON-LD on `/`: `Organization` + `ProfessionalService` + `FAQPage` in one `@graph`
- JSON-LD on `/faq`: standalone `FAQPage`

**Post-deploy checklist (manual):**
1. Submit `https://www.tyvelo.com/sitemap.xml` to Google Search Console
2. Submit the same to Bing Webmaster Tools
3. Verify OG image at `https://www.opengraph.xyz/url/https%3A%2F%2Fwww.tyvelo.com`
4. Test JSON-LD at `https://search.google.com/test/rich-results`

## Branding

- Agency name: **Tyvelo**
- Contact email: myronmalyk@gmail.com
- LinkedIn: https://linkedin.com/company/tyvelo

**Hard constraints (do not violate):**
- No social proof — no testimonials, client logos, metrics, or case studies (no shipped clients yet)
- No new routes beyond `/`, `/privacy`, `/faq`
- No frameworks, bundlers, or npm dependencies
- Do not change the design system or brand voice

## Vercel

- Analytics: `/_vercel/insights/script.js` (loaded in `<head>`)
- Speed Insights: `/_vercel/speed-insights/script.js` (loaded in `<head>`)
- `vercel.json`: `cleanUrls: true`, `trailingSlash: false`, security headers (HSTS, CSP basics, X-Frame-Options), 1-year immutable cache on static assets

## GitHub

Remote: `https://github.com/myronmalyk/ai-agency-website`
