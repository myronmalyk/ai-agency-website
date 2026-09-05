import Link from "next/link";
import Brand from "./Brand";
import { container } from "./ui";

const COLS = [
  {
    label: "EXPLORE",
    links: [
      { href: "#services", label: "Services" },
      { href: "#stack", label: "Stack" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    label: "CONTACT",
    links: [
      { href: "#contact", label: "Get a demo" },
      { href: "mailto:myron@tyvelo.com", label: "myron@tyvelo.com" },
      { href: "tel:+17788094442", label: "+1 (778) 809-4442" },
      { href: "https://www.linkedin.com/in/myron-malykhin-791038279", label: "LinkedIn ↗", external: true },
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
            AI speed-to-lead automation for local service businesses. Every lead answered in 60
            seconds.
          </p>
        </div>
        <div className="flex flex-wrap gap-[54px]">
          {COLS.map((col) => (
            <div key={col.label} className="flex flex-col gap-[11px]">
              <span className="mb-[3px] font-mono text-[10.5px] tracking-[0.14em] text-muted2">
                {col.label}
              </span>
              {col.links.map((l) => {
                const cls =
                  "text-[14px] text-muted no-underline transition-colors hover:text-white";
                // Internal page routes (e.g. /privacy, /faq) use next/link.
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
      <div
        className={`${container} flex flex-wrap items-center justify-between gap-3.5 border-t border-white/[0.05] pb-10 pt-6 font-mono text-[12px] text-muted2`}
      >
        <span>© 2026 TYVELO. All rights reserved.</span>
        <span>Greater Vancouver · Built with n8n + AI</span>
      </div>
    </footer>
  );
}
