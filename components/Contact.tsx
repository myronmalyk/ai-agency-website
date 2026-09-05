"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { container, label, btnPrimary, btnGhost } from "./ui";

const FORMSPREE = "https://formspree.io/f/xvzwezll";

const POINTS = [
  { strong: "No call required.", rest: " Reach out by email, WhatsApp or LinkedIn." },
  { strong: "Demo first, talk later.", rest: " See it work before you commit a dollar." },
  { strong: "Outcome-measured.", rest: " If response times don't move, the work didn't work." },
];

const inputClass =
  "rounded-[11px] border border-white/10 bg-white/[0.03] px-[15px] py-3.5 text-[15px] text-white outline-none transition-colors placeholder:text-muted3 focus:border-accent";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    if (!emailInput.value.trim() || !emailInput.validity.valid) {
      setError("Please enter a valid email address.");
      emailInput.focus();
      return;
    }
    setSending(true);
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative border-t border-white/[0.07] bg-[linear-gradient(180deg,transparent,rgba(91,140,255,0.05))] pb-[100px] pt-[104px]"
    >
      <div className={`${container} grid grid-cols-2 items-start gap-[60px] max-[880px]:grid-cols-1`}>
        <Reveal delay={0}>
          <div className={label}>{"// GET YOUR DEMO"}</div>
          <h2 className="m-0 mb-5 text-balance text-[clamp(30px,4.4vw,50px)] font-bold leading-[1.05] tracking-[-0.03em]">
            Get a free demo built for your business.
          </h2>
          <p className="m-0 mb-[34px] max-w-[440px] text-[16px] leading-[1.65] text-muted">
            Tell me where you think you&apos;re losing leads. I&apos;ll build a free working demo on
            your actual setup and show you it answering a lead in under 60 seconds.
          </p>

          <div className="mb-[34px] flex flex-col gap-4">
            {POINTS.map((p) => (
              <div key={p.strong} className="flex items-start gap-[13px] text-[15px] leading-[1.5] text-[#D6DAE2]">
                <span className="mt-[3px] flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full border border-accent text-[11px] text-accent">
                  ✓
                </span>
                <span>
                  <strong className="font-semibold text-white">{p.strong}</strong>
                  {p.rest}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-[22px] border-t border-white/[0.07] pt-6">
            <a
              href="mailto:myron@tyvelo.com"
              className="font-mono text-[13px] text-[#C7CCD6] no-underline transition-colors hover:text-accent"
            >
              myron@tyvelo.com
            </a>
            <a
              href="tel:+17788094442"
              className="font-mono text-[13px] text-[#C7CCD6] no-underline transition-colors hover:text-accent"
            >
              +1 (778) 809-4442
            </a>
            <a
              href="https://www.linkedin.com/in/myron-malykhin-791038279"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] text-[#C7CCD6] no-underline transition-colors hover:text-accent"
            >
              LinkedIn ↗
            </a>
          </div>
          <p className="m-0 mt-[22px] text-[13.5px] leading-[1.6] text-muted2">
            Built and run by Myron, founder of TYVELO — helping local service businesses across the
            Lower Mainland stop losing leads to slow response.
          </p>
        </Reveal>

        <Reveal
          delay={80}
          className="relative rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,#0F1117,#0A0B10)] p-[30px] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]"
        >
          {success ? (
            <div className="flex flex-col items-center gap-3.5 px-2.5 py-10 text-center">
              <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-[rgba(56,211,159,0.4)] bg-[rgba(56,211,159,0.12)] text-[26px] text-green">
                ✓
              </div>
              <h3 className="m-0 text-[21px] font-bold">Got it — talk soon.</h3>
              <p className="m-0 mb-1.5 max-w-[320px] text-[14.5px] leading-[1.6] text-muted">
                I&apos;ll put together a working demo for your business and reply shortly — no call
                required.
              </p>
              <a
                href="https://calendly.com/myronmalyk/30min"
                target="_blank"
                rel="noopener"
                className={btnGhost}
              >
                Prefer to talk it through? Book a time →
              </a>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] tracking-[0.10em] text-muted2">NAME</span>
                <input type="text" name="name" placeholder="Your name" required autoComplete="name" className={inputClass} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] tracking-[0.10em] text-muted2">BUSINESS NAME</span>
                <input type="text" name="business" placeholder="Your business" required autoComplete="organization" className={inputClass} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] tracking-[0.10em] text-muted2">EMAIL</span>
                <input type="email" name="email" placeholder="you@business.com" required autoComplete="email" className={inputClass} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] tracking-[0.10em] text-muted2">
                  WHERE ARE YOU LOSING LEADS?
                </span>
                <textarea
                  name="challenge"
                  rows={3}
                  placeholder="After-hours calls, slow form replies, missed DMs…"
                  required
                  className={`${inputClass} min-h-[92px] resize-y`}
                />
              </label>
              <p aria-live="polite" className="m-0 text-[13.5px] text-[#FF8A8A]">
                {error}
              </p>
              <button type="submit" disabled={sending} className={`${btnPrimary} mt-1 w-full`}>
                {sending ? "Sending…" : "Get my free demo →"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
