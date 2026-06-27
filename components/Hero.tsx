import Reveal from "./Reveal";
import Counter from "./Counter";
import HeroSpotlight from "./HeroSpotlight";
import LeadCard from "./LeadCard";
import Marquee from "./Marquee";
import { btnPrimary, btnGhost, chipAccent, chipDot } from "./ui";

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
            SYSTEM ONLINE · GREATER VANCOUVER
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
            className="m-0 mb-[34px] max-w-[520px] text-[clamp(16px,1.6vw,19px)] leading-[1.6] text-muted"
          >
            AI speed-to-lead for local service businesses in Greater Vancouver. When someone
            messages or calls, the first business to reply usually wins — so TYVELO replies and
            follows up for you, automatically, day or night. The job is yours, not your
            competitor&apos;s.
          </Reveal>

          <Reveal delay={180} className="mb-[22px] flex flex-wrap gap-3.5">
            <a href="#contact" className={btnPrimary}>
              Get a free demo →
            </a>
            <a href="#services" className={btnGhost}>
              See what we automate
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

          <Reveal
            delay={240}
            className="grid max-w-[540px] grid-cols-3 gap-[18px] border-t border-white/[0.07] pt-7 max-[880px]:grid-cols-1"
          >
            <div>
              <div className="text-[34px] font-bold tracking-[-0.02em] text-white">
                &lt;<Counter to={60} />
              </div>
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
                <Counter to={78} suffix="%" delay={670} />
              </div>
              <div className="mt-1.5 font-mono text-[11px] leading-[1.45] tracking-[0.08em] text-muted2">
                BUY FROM WHOEVER
                <br />
                REPLIES FIRST
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <LeadCard />
        </Reveal>
      </div>

      <Reveal delay={0}>
        <Marquee />
      </Reveal>
    </header>
  );
}
