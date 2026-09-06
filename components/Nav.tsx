"use client";

import { useEffect, useState } from "react";
import Brand from "./Brand";
import { CONTACT_PHONE, CONTACT_PHONE_TEL } from "@/lib/site";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.07] bg-[rgba(7,8,11,0.66)] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-8 py-4 max-[880px]:px-[22px]">
        <Brand href="#top" />

        <div className="flex items-center gap-[26px] max-[880px]:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted no-underline transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          {/* TODO: swap to DEMO_PHONE once AI voice line is live */}
          <a
            href={`tel:${CONTACT_PHONE_TEL}`}
            className="whitespace-nowrap font-mono text-[13px] text-[#C7CCD6] no-underline transition-colors hover:text-accent"
          >
            {CONTACT_PHONE}
          </a>
          <a
            href="#contact"
            className="rounded-[10px] bg-accent px-[18px] py-2.5 text-sm font-semibold text-[#07080B] no-underline transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(91,140,255,0.7)]"
          >
            Get a free demo →
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="hidden h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-[10px] border border-white/10 bg-white/[0.04] max-[880px]:flex"
        >
          <span
            className={`block h-0.5 w-[18px] rounded bg-white transition-transform duration-200 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-[18px] rounded bg-white transition-transform duration-200 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] flex flex-col items-center justify-center gap-2 bg-[rgba(7,8,11,0.97)] backdrop-blur-xl transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute right-[26px] top-[22px] text-[26px] leading-none text-muted"
        >
          ✕
        </button>
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="px-5 py-3 text-2xl font-semibold text-text no-underline"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="px-5 py-3 text-2xl font-semibold text-accent no-underline"
        >
          Get a free demo →
        </a>
        <a
          href={`tel:${CONTACT_PHONE_TEL}`}
          onClick={() => setOpen(false)}
          className="px-5 py-3 font-mono text-base text-[#C7CCD6] no-underline"
        >
          Text or call {CONTACT_PHONE}
        </a>
      </div>
    </nav>
  );
}
