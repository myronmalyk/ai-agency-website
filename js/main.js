/* ============================================================
   MYRON'S AGENCY — main.js
============================================================ */
(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  gsap.registerPlugin(ScrollTrigger);

  /* ── Reduced motion: show everything immediately ── */
  if (prefersReducedMotion) {
    gsap.set('[data-anim], .hiw__item', { opacity: 1, y: 0 });
    gsap.set('.lm__i, [data-anim-line] .lm__i', { y: 0 });
    gsap.set(['#hero-sub', '#hero-cta', '.hero__scroll-hint', '.hero__status'], { opacity: 1, y: 0 });
    gsap.set('.hiw__rule, .hiw__rule--last', { scaleX: 1 });
    return;
  }

  /* ============================================================
     THEME TOGGLE
  ============================================================ */
  const html = document.documentElement;
  const themeToggle  = document.getElementById('theme-toggle');
  const themeLabel   = document.getElementById('theme-label');
  const mobileTheme  = document.getElementById('mobile-theme-toggle');
  const mobileTLabel = document.getElementById('mobile-theme-label');

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    const isLight = theme === 'light';
    if (themeLabel)   themeLabel.textContent   = isLight ? 'Dark'  : 'Light';
    if (mobileTLabel) mobileTLabel.textContent = isLight ? 'Switch to Dark' : 'Switch to Light';
    localStorage.setItem('ma-theme', theme);
  }

  function toggleTheme() {
    applyTheme(html.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  }

  /* Restore saved preference */
  const saved = localStorage.getItem('ma-theme');
  if (saved) applyTheme(saved);

  if (themeToggle)  themeToggle.addEventListener('click', toggleTheme);
  if (mobileTheme)  mobileTheme.addEventListener('click', toggleTheme);

  /* ============================================================
     CUSTOM CURSOR
  ============================================================ */
  const cursor = document.getElementById('cursor');
  if (cursor && window.matchMedia('(hover: hover)').matches) {
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.08, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.08, ease: 'power3.out' });
    window.addEventListener('mousemove', e => { xTo(e.clientX); yTo(e.clientY); }, { passive: true });
    document.querySelectorAll('.hoverable').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-expand'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-expand'));
    });
  }

  /* ============================================================
     NAV — scroll state
  ============================================================ */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ============================================================
     HAMBURGER
  ============================================================ */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');
  let menuOpen = false;

  function openMenu()  {
    menuOpen = true;
    hamburger.classList.add('open');
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menuOpen = false;
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click',   () => menuOpen ? closeMenu() : openMenu());
  mobileClose.addEventListener('click', closeMenu);
  mobileMenu.querySelectorAll('.mobile-menu__link').forEach(l => l.addEventListener('click', closeMenu));

  /* ============================================================
     MARQUEE — speed up slightly on scroll
  ============================================================ */
  let mqTimer;
  const mqTrack = document.querySelector('.marquee__track');
  window.addEventListener('scroll', () => {
    if (mqTrack) mqTrack.style.animationDuration = '12s';
    clearTimeout(mqTimer);
    mqTimer = setTimeout(() => { if (mqTrack) mqTrack.style.animationDuration = '28s'; }, 200);
  }, { passive: true });

  /* ============================================================
     HERO — full animation sequence (unchanged)
  ============================================================ */
  const heroLines     = document.querySelectorAll('.hero .lm__i');
  const heroSub       = document.getElementById('hero-sub');
  const heroCta       = document.getElementById('hero-cta');
  const heroRule      = document.getElementById('hero-rule');
  const heroScrollHint = document.querySelector('.hero__scroll-hint');
  const heroBgWord    = document.querySelector('.hero__bg-logo');
  const heroCursorEl  = document.querySelector('.hero__cursor');
  const heroStatusEl  = document.querySelector('.hero__status');

  /* Typewriter */
  function typewriter(el, text, speed) {
    el.textContent = '';
    el.style.opacity = '1';
    el.style.transform = 'none';
    let i = 0;
    return new Promise(resolve => {
      const tick = setInterval(() => {
        el.textContent = text.slice(0, i + 1);
        i++;
        if (i >= text.length) { clearInterval(tick); resolve(); }
      }, speed);
    });
  }

  const heroSubText = "We identify what's slowing your business down — and build AI systems that fix it.";

  const heroTl = gsap.timeline({ delay: 0.2 });

  heroTl
    .to(heroLines, { y: 0, duration: 1.1, ease: 'power4.out', stagger: 0.1 })
    .to(heroRule,  { width: '100%', duration: 0.8, ease: 'power3.inOut' }, '-=0.3')
    .to(heroStatusEl, { opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.4')
    .call(() => {
      if (heroCursorEl) heroCursorEl.style.animationPlayState = 'running';
      typewriter(heroSub, heroSubText, 22).then(() => {
        setTimeout(() => {
          if (heroCursorEl) gsap.to(heroCursorEl, { opacity: 0, duration: 0.3 });
        }, 2200);
      });
    })
    .to(heroCta, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '+=0.5')
    .to(heroScrollHint, { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.4');

  /* Hero bg-word parallax on scroll out */
  if (heroBgWord) {
    gsap.to(heroBgWord, {
      y: -100,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });
  }

  /* ============================================================
     GENERIC SCROLL REVEALS — all [data-anim] elements
     Simple fade + subtle translateY. No complexity.
  ============================================================ */
  document.querySelectorAll('[data-anim]').forEach(el => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(el, { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out' });
      }
    });
  });

  /* Pain columns — stagger slightly */
  const painCols = document.querySelectorAll('.pain__col[data-anim]');
  painCols.forEach((col, i) => {
    ScrollTrigger.create({
      trigger: col,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(col, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: i * 0.1 });
      }
    });
  });

  /* Service cards — stagger slightly */
  const cards = document.querySelectorAll('.service-card[data-anim]');
  cards.forEach((card, i) => {
    ScrollTrigger.create({
      trigger: card,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(card, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: i * 0.07 });
      }
    });
  });

  /* About lines — line-mask reveal */
  const aboutLines = document.querySelectorAll('[data-anim-line] .lm__i');
  if (aboutLines.length) {
    ScrollTrigger.create({
      trigger: aboutLines[0].closest('.about__headline'),
      start: 'top 86%',
      once: true,
      onEnter: () => {
        gsap.to(aboutLines, { y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1 });
      }
    });
  }

  /* ============================================================
     HOW IT WORKS — rules draw in, items fade up, accent on active
  ============================================================ */
  const hiwItems = document.querySelectorAll('.hiw__item');
  const hiwRules = document.querySelectorAll('.hiw__rule');

  hiwRules.forEach((rule, i) => {
    const trigger = i < hiwItems.length ? hiwItems[i] : hiwItems[hiwItems.length - 1];
    ScrollTrigger.create({
      trigger,
      start: 'top 84%',
      once: true,
      onEnter: () => gsap.to(rule, { scaleX: 1, duration: 0.7, ease: 'power2.inOut' })
    });
  });

  hiwItems.forEach((item, i) => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 82%',
      once: true,
      onEnter: () => {
        gsap.to(item, { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out', delay: i * 0.08 });
        item.classList.add('is-active');
      }
    });
  });

  /* ============================================================
     CTA — headline line-mask reveal on scroll enter
  ============================================================ */
  const ctaLines = document.querySelectorAll('.cta__headline .lm__i');
  if (ctaLines.length) {
    ScrollTrigger.create({
      trigger: '.cta',
      start: 'top 72%',
      once: true,
      onEnter: () => {
        gsap.to(ctaLines, { y: 0, duration: 1.1, ease: 'power4.out', stagger: 0.12 });
      }
    });
  }

  /* ============================================================
     SMOOTH ANCHOR SCROLL
  ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  /* ============================================================
     CONTACT FORM — Formspree async submit
  ============================================================ */
  const contactForm = document.getElementById('contact-form');
  const cfSuccess   = document.getElementById('cf-success');
  const cfError     = document.getElementById('cf-error');

  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      cfError.textContent = '';

      const emailInput = document.getElementById('cf-email');
      if (!emailInput.value.trim() || !emailInput.validity.valid) {
        cfError.textContent = 'Please enter a valid email address.';
        emailInput.focus();
        return;
      }

      const btn = contactForm.querySelector('.cf__submit');
      btn.textContent = 'Sending…';
      btn.disabled = true;

      try {
        const res = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          contactForm.hidden = true;
          cfSuccess.hidden = false;
        } else {
          const data = await res.json().catch(() => ({}));
          cfError.textContent = data.errors?.[0]?.message || 'Something went wrong. Please try again.';
        }
      } catch {
        cfError.textContent = 'Network error. Please check your connection and try again.';
      } finally {
        if (!contactForm.hidden) {
          btn.textContent = 'Send message →';
          btn.disabled = false;
        }
      }
    });
  }

  /* ============================================================
     RESIZE
  ============================================================ */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 300);
  });

})();
