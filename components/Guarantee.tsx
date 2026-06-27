import Reveal from "./Reveal";
import { container, check } from "./ui";

const CHECKS = ["No setup fee", "No long contract", "Cancel anytime"];

export default function Guarantee() {
  return (
    <section className="relative pb-[26px] pt-16">
      <div className={container}>
        <Reveal
          delay={0}
          className="relative flex items-center gap-[38px] overflow-hidden rounded-[24px] border border-[rgba(91,140,255,0.28)] bg-[linear-gradient(120deg,#10131B,#0A0B11)] px-11 py-10 shadow-[0_30px_80px_-45px_rgba(91,140,255,0.5)] max-[880px]:flex-col max-[880px]:px-6 max-[880px]:text-center"
        >
          <div className="pointer-events-none absolute -right-[60px] -top-[90px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.16),transparent_65%)]" />
          <div className="relative flex h-[128px] w-[128px] flex-none items-center justify-center">
            <div className="absolute inset-0 animate-spinslow rounded-full border border-dashed border-[rgba(91,140,255,0.45)]" />
            <div className="flex h-[102px] w-[102px] flex-col items-center justify-center gap-[3px] rounded-full border border-[rgba(91,140,255,0.4)] bg-[radial-gradient(circle_at_50%_32%,#161B2A,#0A0B11)] shadow-[inset_0_0_26px_rgba(91,140,255,0.14)]">
              <span className="text-[32px] font-bold leading-none text-accent">✓</span>
              <span className="font-mono text-[8px] tracking-[0.16em] text-muted">RISK-FREE</span>
            </div>
          </div>
          <div className="relative">
            <div className="mb-3 font-mono text-[11.5px] tracking-[0.16em] text-accent">
              {"// ZERO-RISK START"}
            </div>
            <h3 className="m-0 mb-3 max-w-[640px] text-balance text-[clamp(22px,3vw,30px)] font-bold leading-[1.15] tracking-[-0.02em]">
              If it doesn&apos;t beat your current reply time, you don&apos;t pay.
            </h3>
            <p className="m-0 mb-[18px] max-w-[560px] text-[15px] leading-[1.6] text-[#A8AEB9]">
              You see it work on your real leads before you commit a dollar. No setup fee, no long
              contract — and you can cancel any time.
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2.5 max-[880px]:justify-center">
              {CHECKS.map((c) => (
                <span key={c} className={check}>
                  <span className="text-green">✓</span> {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
