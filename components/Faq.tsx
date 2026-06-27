"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { containerNarrow, section, label } from "./ui";
import { homeFaqs } from "@/lib/jsonld";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className={section}>
      <div className={containerNarrow}>
        <Reveal delay={0} className={label}>
          {"// COMMON QUESTIONS"}
        </Reveal>
        <Reveal
          as="h2"
          delay={60}
          className="m-0 mb-[44px] text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.05] tracking-[-0.03em]"
        >
          Questions owners actually ask.
        </Reveal>

        <Reveal delay={100} className="flex flex-col gap-3">
          {homeFaqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border bg-white/[0.015] transition-colors duration-300 ${
                  isOpen ? "border-accent" : "border-white/[0.08]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent px-6 py-[22px] text-left text-[17px] font-semibold text-text"
                >
                  {f.q}
                  <span
                    className={`flex-none text-[24px] font-normal leading-none text-accent transition-transform duration-[350ms] ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows,opacity] duration-[350ms] ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-[22px] pt-1 text-[15px] leading-[1.7] text-muted">
                      {f.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>

        <Reveal delay={120} className="mt-[34px]">
          <Link
            href="/faq"
            className="font-mono text-[13px] text-accent no-underline transition-opacity hover:opacity-70"
          >
            See all questions →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
