import Reveal from "./Reveal";
import HeroSpotlight from "./HeroSpotlight";
import DemoShowcase from "./DemoShowcase";
import Marquee from "./Marquee";
import { btnPrimary, btnGhost, chipAccent, chipDot } from "./ui";
import { CONTACT_PHONE, CONTACT_PHONE_TEL, RESPONSE_STUDY } from "@/lib/site";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative mx-auto max-w-[1180px] px-8 pb-[70px] pt-[90px] max-[880px]:px-[22px] max-[880px]:pb-[50px] max-[880px]:pt-14"
    >
      <HeroSpotlight />
      <div className="relative grid grid-cols-[1.08fr_0.92fr] items-center gap-14 max-[880px]:grid-cols-1 max-[880px]:gap-11">
        <div>
          <Reveal
            delay={0}
            className="mb-[26px] inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-[7px] font-mono text-[11.5px] tracking-[0.16em] text-[#C7CCD6]"
          >
            <span className="h-2 w-2 animate-livedot rounded-full bg-green" />
            FOR TRADES · FRASER VALLEY + LOWER MAINLAND
          </Reveal>

          <Reveal
            as="h1"
            delay={60}
            className="m-0 mb-[22px] text-balance text-[clamp(40px,6vw,72px)] font-bold leading-[1.02] tracking-[-0.03em]"
          >
            Every lead,
            <br />
            answered in{" "}
            <span className="relative whitespace-nowrap text-accent">
              60 seconds.
              <span className="absolute inset-x-0 bottom-0.5 h-2.5 rounded bg-accent opacity-[0.18]" />
            </span>
          </Reveal>

          <Reveal
            as="p"
            delay={120}
            className="m-0 mb-[34px] max-w-[540px] text-[clamp(16px,1.6vw,19px)] leading-[1.6] text-muted"
          >
            HVAC, plumbing, electrical, roofing, landscaping — you run the same loop every week:
            get found, get contacted, quote, do the work, get paid — and money leaks at every
            handoff. TYVELO does the follow-through so the jobs you already earned stop slipping.{" "}
            {/* TODO: swap to DEMO_PHONE once AI voice line is live */}
            <span className="text-[#C7CCD6]">
              Text or call me:{" "}
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="font-medium text-accent no-underline hover:underline"
              >
                {CONTACT_PHONE}
              </a>
            </span>
          </Reveal>

          <Reveal delay={180} className="mb-[22px] flex flex-wrap gap-3.5">
            <a href="#contact" className={btnPrimary}>
              Get a free demo →
            </a>
            <a href="#services" className={btnGhost}>
              See where you&apos;re leaking
            </a>
          </Reveal>

          <Reveal delay={210} className="mb-[42px] flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className={chipAccent}>
              <span className={chipDot} />
              NOW ONBOARDING FOUNDING CLIENTS
            </span>
            <span className="inline-flex items-center gap-[7px] text-[13.5px] text-[#C7CCD6]">
              <span className="text-green">✓</span> Demo before you pay
            </span>
            <span className="inline-flex items-center gap-[7px] text-[13.5px] text-[#C7CCD6]">
              <span className="text-green">✓</span> No contracts
            </span>
          </Reveal>

          {/*
            Stats are server-rendered as final values — the old count-up rendered
            "<0" and "0%" until JS ran, which read as broken.
          */}
          <Reveal
            delay={240}
            className="max-w-[560px] border-t border-white/[0.07] pt-7"
          >
            <div className="grid grid-cols-3 gap-[18px] max-[880px]:grid-cols-1">
              <div>
                <div className="text-[34px] font-bold tracking-[-0.02em] text-white">&lt;60</div>
                <div className="mt-1.5 font-mono text-[11px] leading-[1.45] tracking-[0.08em] text-muted2">
                  SEC · MAX FIRST-
                  <br />
                  REPLY TIME
                </div>
              </div>
              <div>
                <div className="text-[34px] font-bold tracking-[-0.02em] text-white">24/7</div>
                <div className="mt-1.5 font-mono text-[11px] leading-[1.45] tracking-[0.08em] text-muted2">
                  ALWAYS-ON
                  <br />
                  COVERAGE
                </div>
              </div>
              <div>
                <div className="text-[34px] font-bold tracking-[-0.02em] text-white">
                  {RESPONSE_STUDY.multiple}
                  <sup className="ml-0.5 align-super text-[13px] font-medium text-muted2">1</sup>
                </div>
                <div className="mt-1.5 font-mono text-[11px] leading-[1.45] tracking-[0.08em] text-muted2">
                  MORE LIKELY TO QUALIFY
                  <br />
                  IF YOU REPLY WITHIN THE HOUR
                </div>
              </div>
            </div>
            <p className="m-0 mt-5 max-w-[520px] text-[11.5px] leading-[1.6] text-muted2">
              <sup>1</sup> {RESPONSE_STUDY.cite}{" "}
              <a
                href={RESPONSE_STUDY.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted2 underline underline-offset-2 hover:text-accent"
              >
                Read the study ↗
              </a>
            </p>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <DemoShowcase />
        </Reveal>
      </div>

      <Reveal delay={0}>
        <Marquee />
      </Reveal>
    </header>
  );
}
