import Link from "next/link";
import SubpageShell from "./SubpageShell";
import { CONTACT_PHONE, CONTACT_PHONE_TEL, FOUNDING_PRICE } from "@/lib/site";

export interface CityContent {
  city: string;
  /** Neighbourhoods / areas actually worked — used in the intro, not padding. */
  intro: string[];
  /** Three leak points, written for what trades in this city deal with. */
  leaks: { stage: string; title: string; body: string }[];
  /** Closing paragraph before the CTA. */
  close: string;
  otherCity: { name: string; href: string };
}

export default function CityPage({ content }: { content: CityContent }) {
  const { city, intro, leaks, close, otherCity } = content;

  return (
    <SubpageShell>
      <header className="mb-[52px] border-b border-white/[0.08] pb-10">
        <span className="mb-5 block font-mono text-[12px] uppercase tracking-[0.08em] text-accent">
          {`// ${city}, BC`}
        </span>
        <h1 className="mb-5 text-balance text-[clamp(32px,5.5vw,48px)] font-bold leading-[1.1] tracking-[-0.03em]">
          {city} trades lose work between the phone and the invoice.
        </h1>
        <p className="text-[15px] leading-[1.7] text-muted">
          Every lead answered in 60 seconds. Every open quote chased. Every overdue invoice
          nudged. Built and run by one person, {city === "Abbotsford" ? "here in town" : "up the highway in Abbotsford"}.
        </p>
      </header>

      <div className="mb-12 space-y-4 text-[15.5px] leading-[1.75] text-text">
        {intro.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </div>

      <div className="mb-12 flex flex-col gap-3">
        {leaks.map((l) => (
          <div
            key={l.title}
            className="rounded-[16px] border border-white/[0.08] bg-[linear-gradient(165deg,#0E0F14,#0A0B10)] p-6"
          >
            <span className="mb-2 block font-mono text-[10.5px] tracking-[0.14em] text-accent">
              {l.stage}
            </span>
            <h2 className="mb-2 text-[19px] font-bold tracking-[-0.01em]">{l.title}</h2>
            <p className="m-0 text-[14.5px] leading-[1.65] text-muted">{l.body}</p>
          </div>
        ))}
      </div>

      <p className="mb-12 text-[15.5px] leading-[1.75] text-text">{close}</p>

      <div className="rounded-xl border border-[rgba(91,140,255,0.28)] bg-card1 px-9 py-10 max-[600px]:px-6">
        <span className="mb-3.5 block font-mono text-[11px] tracking-[0.1em] text-accent">
          {"// FOUNDING RATE"}
        </span>
        <h2 className="mb-3 text-[clamp(22px,3.5vw,30px)] font-semibold tracking-[-0.02em] text-text">
          {FOUNDING_PRICE} flat, per location. No setup fee, no contract.
        </h2>
        <p className="mb-6 text-[14.5px] leading-[1.7] text-muted">
          I&apos;ll build a free working demo on your real leads first — your number, your form,
          your customers — and you decide after you&apos;ve watched it run. Tell me where work is
          slipping and I&apos;ll tell you which stage is costing you most.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/#contact"
            className="inline-block rounded-md bg-accent px-6 py-3 text-[14px] font-semibold text-[#07080B] no-underline transition-transform hover:-translate-y-0.5"
          >
            Get a free demo →
          </Link>
          {/* TODO: swap to DEMO_PHONE once AI voice line is live */}
          <a
            href={`tel:${CONTACT_PHONE_TEL}`}
            className="font-mono text-[13.5px] text-[#C7CCD6] no-underline hover:text-accent"
          >
            Or text/call me: {CONTACT_PHONE}
          </a>
        </div>
      </div>

      <p className="mt-10 text-[14px] text-muted">
        Also working with trades in{" "}
        <Link href={otherCity.href} className="text-accent no-underline hover:underline">
          {otherCity.name}
        </Link>
        , plus Langley, Chilliwack, Mission and Maple Ridge.{" "}
        <Link href="/faq" className="text-accent no-underline hover:underline">
          Full FAQ
        </Link>
        .
      </p>
    </SubpageShell>
  );
}
