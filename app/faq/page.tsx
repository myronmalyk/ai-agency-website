import type { Metadata } from "next";
import Link from "next/link";
import SubpageShell from "@/components/SubpageShell";
import { allFaqs, faqGraph, breadcrumbGraph } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: { absolute: "FAQ — Tyvelo AI Speed-to-Lead for Local Service Businesses" },
  description:
    "How Tyvelo's AI speed-to-lead automation works for local service businesses — cost, the free demo, and getting started. No call required.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqGraph()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbGraph("FAQ", "/faq")) }}
      />
      <SubpageShell>
        <header className="mb-[60px] border-b border-white/[0.08] pb-10">
          <span className="mb-5 block font-mono text-[12px] uppercase tracking-[0.08em] text-accent">
            {"// FAQ"}
          </span>
          <h1 className="mb-5 text-[clamp(36px,6vw,52px)] font-bold leading-[1.1] tracking-[-0.03em]">
            Frequently Asked Questions
          </h1>
          <p className="text-[14px] text-muted">
            Everything local service owners ask before getting a free demo.
          </p>
        </header>

        <div>
          {allFaqs.map((f) => (
            <details key={f.q} className="group border-t border-white/[0.08] last:border-b">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-7 [&::-webkit-details-marker]:hidden">
                <span className="text-[clamp(18px,2.5vw,22px)] font-semibold leading-[1.3] tracking-[-0.02em] text-text">
                  {f.q}
                </span>
                <span className="mt-1 flex-none font-mono text-[18px] text-muted transition-[transform,color] duration-300 group-open:rotate-45 group-open:text-accent">
                  +
                </span>
              </summary>
              <div className="max-w-[60ch] pb-7 text-[15px] leading-[1.75] text-muted">{f.a}</div>
            </details>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-white/[0.08] bg-card1 px-9 py-10">
          <span className="mb-3.5 block font-mono text-[11px] tracking-[0.1em] text-accent">
            {"// READY TO SEE IT?"}
          </span>
          <h2 className="mb-3 text-[clamp(22px,3.5vw,30px)] font-semibold tracking-[-0.02em] text-text">
            Still have questions?
          </h2>
          <p className="mb-6 text-[14px] leading-[1.7] text-muted">
            The fastest answer is a working demo. Tell me about your business and I&apos;ll build a
            free speed-to-lead demo on your actual setup — no call required. Prefer to ask first?
            Email me or reach out on LinkedIn.
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-md border border-[rgba(91,140,255,0.3)] px-6 py-3 text-[14px] text-accent no-underline transition-colors hover:bg-accent hover:text-[#07080B]"
          >
            Get a free demo →
          </Link>
        </div>
      </SubpageShell>
    </>
  );
}
