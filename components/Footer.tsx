import Link from "next/link";
import Brand from "./Brand";
import { container } from "./ui";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  WHATSAPP_URL,
  LINKEDIN_URL,
  HOME_CITY,
} from "@/lib/site";

const COLS = [
  {
    label: "EXPLORE",
    links: [
      { href: "#services", label: "Where the money leaks" },
      { href: "#pricing", label: "Pricing" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    label: "SERVICE AREA",
    links: [
      { href: "/abbotsford", label: "Abbotsford" },
      { href: "/surrey", label: "Surrey" },
    ],
  },
  {
    label: "CONTACT",
    links: [
      { href: "#contact", label: "Get a demo" },
      { href: `mailto:${CONTACT_EMAIL}`, label: CONTACT_EMAIL },
      { href: `tel:${CONTACT_PHONE_TEL}`, label: CONTACT_PHONE },
      { href: WHATSAPP_URL, label: "WhatsApp ↗", external: true },
      { href: LINKEDIN_URL, label: "LinkedIn ↗", external: true },
    ],
  },
  {
    label: "LEGAL",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/faq", label: "Full FAQ" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07]">
      <div className={`${container} flex flex-wrap items-start justify-between gap-[34px] pb-10 pt-[54px]`}>
        <div className="max-w-[300px]">
          <Brand href="#top" markHeight={24} className="mb-3.5" />
          <p className="m-0 text-[14px] leading-[1.6] text-muted2">
            Automated follow-through for trades in the Fraser Valley and Lower Mainland. Every
            lead answered, every quote chased, every invoice nudged.
          </p>
        </div>
        <div className="flex flex-wrap gap-[44px]">
          {COLS.map((col) => (
            <div key={col.label} className="flex flex-col gap-[11px]">
              <span className="mb-[3px] font-mono text-[10.5px] tracking-[0.14em] text-muted2">
                {col.label}
              </span>
              {col.links.map((l) => {
                const cls =
                  "text-[14px] text-muted no-underline transition-colors hover:text-white";
                // Internal page routes (e.g. /privacy, /abbotsford) use next/link.
                if (l.href.startsWith("/")) {
                  return (
                    <Link key={l.label} href={l.href} className={cls}>
                      {l.label}
                    </Link>
                  );
                }
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    className={cls}
                    {...("external" in l && l.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {l.label}
                  </a>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Business details — who you're actually dealing with. */}
      <div className={`${container} border-t border-white/[0.05] pt-6`}>
        <p className="m-0 font-mono text-[11.5px] leading-[1.7] text-muted2">
          {/* TODO: replace with the registered legal name + BC business registration number
              once the business is incorporated / registered. */}
          TYVELO — sole proprietorship, registration pending · {HOME_CITY}, British Columbia,
          Canada ·{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-muted2 no-underline transition-colors hover:text-accent"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          ·{" "}
          <a
            href={`tel:${CONTACT_PHONE_TEL}`}
            className="text-muted2 no-underline transition-colors hover:text-accent"
          >
            {CONTACT_PHONE}
          </a>
        </p>
      </div>

      <div
        className={`${container} mt-4 flex flex-wrap items-center justify-between gap-3.5 border-t border-white/[0.05] pb-10 pt-6 font-mono text-[12px] text-muted2`}
      >
        <span>© 2026 TYVELO. All rights reserved.</span>
        <span>Abbotsford · Surrey · Langley · Chilliwack</span>
      </div>
    </footer>
  );
}
