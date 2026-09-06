import Image from "next/image";
import Reveal from "./Reveal";
import { container, section, label, sectionTitle } from "./ui";

const SOURCES = [
  "Web form",
  "Phone call",
  "Google Business Profile",
  "Instagram DM",
  "Facebook",
  "WhatsApp",
];
const ACTIONS = [
  "Instant reply <60s",
  "Missed-call text-back",
  "Quote follow-up · day 2 / 7 / 21",
  "Invoice nudge · due / +7 / +14",
  "Service-due recall",
  "AI answers inbound calls",
];

const nodeBase =
  "rounded-xl border px-4 py-3 text-[14px] text-[#D6DAE2]";

export default function Pipeline() {
  return (
    <section
      id="stack"
      className={`${section} border-y border-white/[0.07] bg-[linear-gradient(180deg,rgba(91,140,255,0.04),transparent_40%)]`}
    >
      <div className={container}>
        <Reveal delay={0} className={label}>
          {"// THE STACK"}
        </Reveal>
        <Reveal delay={60} className="mb-[60px] flex flex-wrap items-end justify-between gap-5">
          <h2 className={sectionTitle}>Plugs into the tools you already run.</h2>
          <p className="m-0 max-w-[340px] text-[15px] leading-[1.6] text-muted">
            No new software to learn. TYVELO sits on top of the number, forms and inboxes you
            already use, and runs the follow-through in the background.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="flex items-center max-[880px]:flex-col max-[880px]:items-stretch max-[880px]:gap-6"
        >
          {/* sources */}
          <div className="flex min-w-[200px] flex-none flex-col gap-[11px] max-[880px]:min-w-0">
            <div className="mb-1 font-mono text-[10.5px] tracking-[0.14em] text-muted2">
              LEAD SOURCES
            </div>
            {SOURCES.map((s) => (
              <span key={s} className={`${nodeBase} border-white/10 bg-white/[0.025]`}>
                {s}
              </span>
            ))}
          </div>

          <Wire />

          {/* engine */}
          <div className="relative flex h-[200px] w-[200px] flex-none flex-col items-center justify-center">
            <div className="absolute inset-0 m-auto h-[150px] w-[150px] animate-pulsering rounded-full border border-[rgba(91,140,255,0.35)]" />
            <div className="absolute inset-0 m-auto h-[150px] w-[150px] animate-pulsering rounded-full border border-[rgba(91,140,255,0.35)] [animation-delay:1.5s]" />
            <div className="absolute inset-0 m-auto h-[184px] w-[184px] animate-spinslow rounded-full border border-dashed border-white/10" />
            <div className="relative flex h-[128px] w-[128px] flex-col items-center justify-center gap-2 rounded-full border border-[rgba(91,140,255,0.40)] bg-[radial-gradient(circle_at_50%_35%,#141826,#0A0B11)] shadow-[0_0_50px_-10px_rgba(91,140,255,0.55),inset_0_0_30px_rgba(91,140,255,0.10)]">
              <Image
                src="/images/logo/logo_black.png"
                alt="TYVELO"
                width={55}
                height={30}
                className="h-[30px] w-auto"
              />
              <span className="font-mono text-[8.5px] tracking-[0.14em] text-muted">AI ENGINE</span>
            </div>
          </div>

          <Wire green />

          {/* actions */}
          <div className="flex min-w-[210px] flex-none flex-col gap-[11px] max-[880px]:min-w-0">
            <div className="mb-1 text-right font-mono text-[10.5px] tracking-[0.14em] text-muted2 max-[880px]:text-left">
              AUTOMATED ACTIONS
            </div>
            {ACTIONS.map((a) => (
              <span
                key={a}
                className={`${nodeBase} border-[rgba(56,211,159,0.22)] bg-[rgba(56,211,159,0.05)] text-right max-[880px]:text-left`}
              >
                {a}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Wire({ green }: { green?: boolean }) {
  const color = green ? "var(--color-green)" : "var(--color-accent)";
  return (
    <div className="relative mx-2 h-0.5 min-w-[46px] flex-1 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)] max-[880px]:hidden">
      <span
        className="absolute -top-1 h-[9px] w-[9px] animate-flow rounded-full"
        style={{ background: color, boxShadow: `0 0 14px ${color}`, animationDelay: green ? "0.6s" : "0s" }}
      />
      <span
        className="absolute -top-1 h-[9px] w-[9px] animate-flow rounded-full"
        style={{ background: color, boxShadow: `0 0 14px ${color}`, animationDelay: green ? "1.9s" : "1.3s" }}
      />
    </div>
  );
}
