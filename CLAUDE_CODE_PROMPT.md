# Claude Code prompt — Pre-push fixes for Tyvelo

Paste the block below into Claude Code from the `agency_website/` repo root. Each item is scoped, sequenced, and includes the exact target file and line context. Apply in order, commit between P1 and P2 if you want to ship the bug fixes first.

---

```
We're shipping a pre-push polish pass on the Tyvelo site. Honor every constraint in CLAUDE.md: no new routes, no frameworks, no design-system changes. Three pages only: /, /faq, /privacy. Apply the fixes below in order and verify each one before moving on.

==== P1 (must ship) ====

1) privacy.html — remove stale Facebook copy from the §07 "Cookies & Tracking" section.
   The line `Our automation tools do not place cookies on the Facebook profiles or pages of end users.` is a leftover from the old positioning. Rewrite §07 so the second paragraph reflects what we actually do — integrate with CRMs (Finmo, BluMortgage, Velocity, Floify), calendar tools, and SMS/email providers — and the cookie wording covers only the public tyvelo.com site. Keep the existing first paragraph about privacy-respecting analytics. Do not add anything about Facebook, Meta, or social platforms.

2) faq.html — fix FAQ schema vs visible text mismatch on question 5.
   Visible question reads: "Do you work with my LOS, CRM, or lender portal?"
   Visible answer ends with: "If it has an API or a webhook, there's usually a way in."
   The JSON-LD currently says "Do you work with specific LOS, CRM, or lender portals?" and the answer is missing the API/webhook sentence. Update the JSON-LD entry so the `name` and `acceptedAnswer.text` exactly mirror the visible <summary> and <div class="faq-a"> text. Do not change the visible copy — change the schema.

3) index.html — add a real <main> landmark.
   Delete this line entirely:
       <a id="main" tabindex="-1" aria-hidden="true" style="position:absolute"></a>
   Wrap the page's primary content in <main id="main" tabindex="-1">…</main>. The opening <main> tag goes immediately before <section class="hero" id="hero">, and the closing </main> tag goes immediately after the FAQ section's closing </section> (i.e. before <section class="cta section" id="contact">). Keep <nav>, the mobile menu, the CTA section, and <footer> outside <main>. The skip-link continues to point at #main and should now land on a real landmark.

==== P2 (this week) ====

4) index.html — make service cards actually clickable.
   Each <article class="service-card hoverable"> has a → arrow but no link. Convert each of the four service cards into an anchor: change `<article class="service-card hoverable" data-anim>` to `<a href="#contact" class="service-card hoverable" data-anim>` and the closing </article> to </a>. The card is already styled as a block; verify in css/style.css that .service-card has no `display: inline` rule that would break this (it currently sets `padding: 48px 44px` and `position: relative`, so converting tag works). Also add `text-decoration: none` to .service-card in style.css so the underline doesn't leak through.

5) js/main.js + index.html — fix the form post-submit UX.
   On successful Formspree submit, hide the form so users can't double-submit. In the submit handler, replace the `if (res.ok)` branch with code that sets `contactForm.hidden = true` BEFORE `cfSuccess.hidden = false`. Move the button reset (textContent + disabled) into a `finally {}` block so the button always resets unless the form was hidden on success — match the behavior CLAUDE.md describes. After this change, also update CLAUDE.md if needed so docs and code match.

6) index.html — shorten the meta description (currently 175 chars, gets truncated).
   Replace the meta description AND the og:description AND the twitter:description with this 148-char version:
       Custom AI automations and agents for independent mortgage brokers in Lower Mainland BC. Built around your lenders and file flow. Free 30-min call.

7) index.html — add local-SEO fields to the Organization JSON-LD node.
   In the @graph Organization node, replace the `address` object with:
       "address": {
         "@type": "PostalAddress",
         "addressLocality": "Abbotsford",
         "addressRegion": "BC",
         "addressCountry": "CA"
       },
   And add (alongside `areaServed`):
       "areaServed": [
         { "@type": "City", "name": "Abbotsford" },
         { "@type": "City", "name": "Vancouver" },
         { "@type": "City", "name": "Surrey" },
         { "@type": "City", "name": "Burnaby" },
         { "@type": "City", "name": "Langley" },
         { "@type": "City", "name": "Coquitlam" },
         { "@type": "City", "name": "Richmond" }
       ],
       "priceRange": "$$$",
   Replace the existing `"areaServed": "Lower Mainland BC, Canada"` line with the array above. Validate the JSON-LD is still valid after editing — run a quick mental parse.

8) index.html — resolve the double-CTA in the contact section.
   The right column currently shows the contact form AND immediately below it a Calendly button with `style="margin-top: 16px;"`. Move the Calendly link OUT of the form column and INTO the success state — i.e., put the Calendly button inside the existing <div class="cf__success"> block (right after the success message), so users only see "Book your strategy call" AFTER they've sent a message. Delete the standalone Calendly anchor from below the form. Remove the inline style and use a `cf__success-cta` class if you need different spacing; otherwise the existing .cf__success .btn--outline rule in style.css already handles it.

9) index.html, faq.html, privacy.html — add theme-color meta on all three pages.
   Add `<meta name="theme-color" content="#0a0a0a">` right after the existing viewport meta on all three pages. This colors the mobile browser chrome to match the dark hero.

10) sitemap.xml — bump lastmod to today's date for / and /faq (leave /privacy alone unless privacy.html changes in this pass — and since P1 #1 edits privacy.html, bump it too).

==== P3 (polish) ====

11) privacy.html — add Twitter Card meta tags.
    The other two pages have them, privacy doesn't. Add the four `twitter:*` tags (card, title, description, image) right after the existing og: tags, mirroring the same content.

12) Add a branded 404 page at /404.html.
    Create 404.html using the same inline-style pattern as privacy.html and faq.html. Keep it minimal: nav with logo + "Back to home" link, a centered message "Page not found. The link may be broken or the page may have moved.", and a CTA button to "/". Vercel will serve this automatically for unmatched routes. Update CLAUDE.md's "Pages" table — add a row for /404 and note that it's served only on unmatched URLs.

13) CLAUDE.md — reconcile any drift caused by the changes above.
    After P2 #5 and P2 #8, the contact-form behavior and CTA section structure both change. Update the "Contact form" and "Architecture" sections in CLAUDE.md to match the new code. After P3 #12, add /404 to the pages list.

==== After everything ====

Run `python3 -m http.server 8080` and walk through:
- Hero loads, theme toggle works, hamburger opens on mobile
- Skip-link tab navigates to the <main> landmark
- Service cards now navigate to #contact when clicked
- Form submit hides the form and shows the Calendly button
- /faq → click "What does a typical engagement cost?" — the answer renders
- /privacy reads cleanly with no Facebook references
- View source on / — confirm meta description is the new 148-char version
- Run the JSON-LD on / through https://search.google.com/test/rich-results mentally: Organization + ProfessionalService + FAQPage should all parse

Then:
git add -A
git commit -m "Pre-push polish: P1 fixes (privacy copy, FAQ schema, main landmark) + P2/P3 (local SEO, form UX, theme-color, 404)"
git push

After Vercel deploys: resubmit sitemap to Google Search Console + Bing Webmaster, re-test OG via opengraph.xyz, re-test rich results.
```

---

## How to use this prompt

1. Open Claude Code in the `agency_website/` repo root.
2. Paste the block between the `---` markers above (everything from "We're shipping…" through "re-test rich results.").
3. Let it work through P1 first, review the diff, commit if you want to ship the bug fixes immediately.
4. Let it work through P2 and P3, review, commit, push.

If you want to ship lighter, just send the P1 section first — those three items are the only ones that meaningfully matter before the push.
