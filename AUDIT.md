# Tyvelo Website — Pre-Push Audit
Audited 2026-05-24 against commit `75ad78a` (the mortgage broker pivot).

Overall: the pivot landed cleanly. The new copy is sharp, the structure holds, schema is mostly correct, and nothing is broken. There are ~14 things worth fixing before push — only 2 are bugs, the rest are SEO/a11y/UX polish.

---

## Severity legend
- **P1** — fix before pushing (bug, SEO policy risk, or stale content from the old positioning)
- **P2** — fix this week (SEO/a11y/UX wins with measurable upside)
- **P3** — nice-to-have polish

---

## P1 — Fix before pushing

### 1. Stale Facebook copy in the privacy policy
`privacy.html` line 386 still reads:

> "Our automation tools do not place cookies on the Facebook profiles or pages of end users."

This is a leftover from the old Blake-Anderson / media-buying positioning. It contradicts the new mortgage broker pivot and will confuse a broker reading the page.

**Fix:** rewrite §07 to talk about the tools you actually integrate with (CRMs, LOS platforms, calendar/SMS providers) and drop the Facebook line.

### 2. FAQ schema does not match visible text
On `faq.html`, question 5 visible text and JSON-LD don't match:

- Visible: `Do you work with my LOS, CRM, or lender portal?`
- Schema: `Do you work with specific LOS, CRM, or lender portals?`

Google's FAQ rich-results policy requires schema to mirror what's on the page exactly, or the rich result is suppressed. The schema also has a slightly longer answer than the visible answer ("If it has an API or a webhook, there's usually a way in." is in the visible but not the schema).

**Fix:** make the schema for Q5 mirror the visible text and answer verbatim.

### 3. Missing `<main>` landmark on `index.html`
Line 191:
```html
<a id="main" tabindex="-1" aria-hidden="true" style="position:absolute"></a>
```

This is the skip-link target, but it's an empty anchor with `aria-hidden="true"` — screen readers will skip past it, and there is no `<main>` landmark on the page. Lighthouse and axe both flag this; it's also a small SEO signal (Google uses landmarks to identify primary content).

**Fix:** delete the empty anchor and wrap the actual page content (everything from `<section class="hero">` through the FAQ section) in `<main id="main" tabindex="-1">`. Keep the CTA outside `<main>` if you want footer-style positioning, or include it — both are fine.

---

## P2 — Fix this week

### 4. Service cards look clickable but aren't
Each `<article class="service-card hoverable">` has the custom cursor expanding on hover, a `→` arrow in the bottom-right, and a hover state — but no link. Clicking does nothing. That's a misleading affordance and a small trust hit.

**Fix:** either (a) make each card an `<a href="#contact">` so clicking sends you to the form, or (b) remove the `→` arrow and `.hoverable` class so it visually reads as a static info card. (a) is the stronger move for conversion.

### 5. Contact form stays editable after a successful submit
`js/main.js` shows the success message but never hides the form, so a user can submit again. The CLAUDE.md even references a `finally` block — which doesn't exist in the code. Docs and code have drifted.

**Fix:** on success, hide the form (`contactForm.hidden = true`) before showing `cfSuccess`. Move the button-reset into a `finally` block to match CLAUDE.md.

### 6. Meta description on `index.html` is 175 chars
Google truncates at ~158 chars on desktop, ~120 on mobile. The current description is 175 — the call-to-action ("Free 30-minute strategy call.") will get cut.

**Fix:** trim to ~150 chars. Suggested rewrite:

> Custom AI automations and agents for independent mortgage brokers in Lower Mainland BC. Built around your lenders and file flow. Free 30-min call.

(148 chars, keeps the CTA in-frame.)

### 7. Organization schema is missing local-SEO signals
You're positioning as a Lower Mainland local consultant. The schema in `index.html` only specifies `addressRegion: BC, addressCountry: CA` — no city, no `areaServed` cities, no `priceRange`. The About copy says Abbotsford and the FAQ says builds are $3K–$12K.

**Fix:** add to the Organization node:
```json
"address": {
  "@type": "PostalAddress",
  "addressLocality": "Abbotsford",
  "addressRegion": "BC",
  "addressCountry": "CA"
},
"areaServed": [
  { "@type": "City", "name": "Abbotsford" },
  { "@type": "City", "name": "Vancouver" },
  { "@type": "City", "name": "Surrey" },
  { "@type": "City", "name": "Burnaby" },
  { "@type": "City", "name": "Langley" },
  { "@type": "City", "name": "Coquitlam" },
  { "@type": "City", "name": "Richmond" }
],
"priceRange": "$$$"
```

This is the single biggest near-term lever for "AI consultant Lower Mainland" / "mortgage broker AI Vancouver" searches.

### 8. CTA section has a form AND a Calendly button stacked
The right column has the contact form, then immediately below it a Calendly "Book your strategy call →" button (with inline `style="margin-top: 16px;"`). This is two competing primary CTAs in the same column.

**Fix:** pick one. Either (a) form-only and show Calendly only after submit success, or (b) Calendly-only and drop the form. (a) gives you the lead even if they don't book; (b) cuts the friction. Current state is the worst of both.

### 9. No `<meta name="theme-color">`
Mobile Safari/Chrome won't color the address bar to match the dark hero — it'll stay white, which jars against the `#0a0a0a` page.

**Fix:** add `<meta name="theme-color" content="#0a0a0a">` to all three pages.

### 10. Sitemap `lastmod` is stale
`sitemap.xml` says `<lastmod>2026-05-22</lastmod>` for all three URLs, but `index.html` and `faq.html` were edited 2026-05-24/25.

**Fix:** update `lastmod` to today's date for `/` and `/faq` after this push.

---

## P3 — Polish

### 11. Voice is inconsistent (we/I)
Hero and services say "we build". About switches to "I'm Myron … I build". FAQ mixes both. Common for solo founders, not a bug, but if you want to feel deliberately scrappy go "I" everywhere; if you want to feel like a small team go "we" everywhere with one mention upfront that it's currently a one-person consultancy.

### 12. `privacy.html` is missing Twitter Card tags
The other two pages have them, privacy doesn't. Minor — privacy pages rarely get shared, but consistency is cheap.

**Fix:** add the 4 `twitter:*` meta tags (same pattern as `index.html`).

### 13. No branded 404 page
A 404 on tyvelo.com hits Vercel's default. Easy win for brand polish.

**Fix:** add `404.html` that matches the privacy/faq styling and links back to home.

### 14. CLAUDE.md drift
CLAUDE.md says the form has a `finally` block and that the form hides on success. Neither is true. Update CLAUDE.md after the form fix in P2 #5.

---

## What's already good (so we don't regress)
- Title tags well under 60 chars on all pages
- Canonical + OG + Twitter on `/` and `/faq`
- JSON-LD `@graph` pattern on `/` is correct, FAQPage on `/faq` is correct (modulo the wording mismatch)
- All referenced images and webp sources exist
- All `<img>` tags have `alt` (decorative ones correctly use `alt=""`)
- Heading hierarchy is clean (H1 → H2 → H3, no skipped levels)
- `vercel.json` has solid security headers + immutable caching on static assets
- `robots.txt` allows all and points to the sitemap
- `prefers-reduced-motion` is honored
- Mobile responsive breaks at 900px and 768px hold up
- WebP fallbacks via `<picture>` are properly wired

---

## Suggested commit before push
After applying the fixes:
```
git add -A
git commit -m "Pre-push polish: fix FAQ schema mismatch, privacy stale copy, main landmark, local SEO signals, form UX"
git push
```

Then the post-deploy steps from CLAUDE.md (Search Console resubmit, OG preview check, Rich Results test).
