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
- **Google Fonts** via CDN: DM Serif Display, DM Sans (300/400), Space Mono (400)

## Architecture

Three files do everything:

- `index.html` — all markup and section structure
- `css/style.css` — all styles, theming, animations
- `js/main.js` — all interactivity (wrapped in an IIFE)

### Theming

Dual theme via `data-theme="dark|light"` on `<html>`. CSS custom properties are defined in two blocks:

```css
[data-theme="dark"], :root { --bg: #0a0a0a; ... }
[data-theme="light"]       { --bg: #ffffff; ... }
```

Theme is toggled in JS and persisted to `localStorage` under key `ma-theme`. The hero and CTA sections are **always dark** regardless of theme (hardcoded `background: #0a0a0a`).

### Logos

Four logo images in `images/logo/`:
- `logo_black.png` — icon only, black bg → dark theme (screen removes black bg)
- `logo_white.png` — icon only, white bg → light theme (multiply removes white bg)
- `logo_text_black.png` — icon + wordmark, black bg → dark theme nav only
- `logo_text_white.png` — icon + wordmark, white bg → light theme nav only

**Nav uses text logos** (`logo_text_*`). **Everywhere else** uses icon-only logos (`logo_*`).

Switching is CSS-only via blend modes:
- Dark theme: `.logo--dark` visible, `mix-blend-mode: screen` (removes black background) → use `logo_black` / `logo_text_black`
- Light theme: `.logo--light` visible, `mix-blend-mode: multiply` (removes white background) → use `logo_white` / `logo_text_white`

Favicon: `images/logo/logo_white.png`

### Animations

- **Hero**: Full GSAP timeline on page load — line-mask text reveal, rule draw, typewriter subtitle, CTA fade-in
- **All other sections**: Simple scroll reveals only. Elements start at `opacity: 0; transform: translateY(22px)` via `[data-anim]` attribute, animated to visible by ScrollTrigger `onEnter`
- **Reduced motion**: Detected at top of `main.js` — all elements set visible immediately, script returns early

### Key CSS patterns

- **Line-mask reveal**: `.lm` has `overflow: hidden`; child `.lm__i` starts at `translateY(110%)` and animates to `0`
- **Scroll reveals**: Add `data-anim` attribute to any element — JS picks it up automatically
- **Section labels**: Use `<span class="label">// LABEL TEXT</span>` — Space Mono, dimmed color, `//` prefix is part of the content

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

## Branding

- Agency name: **Tyvelo**
- Contact email: hello@tyvelo.com

## GitHub

Remote: `https://github.com/myronmalyk/ai-agency-website`
