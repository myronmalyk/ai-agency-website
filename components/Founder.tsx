import Reveal from "./Reveal";
import { container, label } from "./ui";

export default function Founder() {
  return (
    <section id="founder" className="relative pb-[100px] pt-[60px]">
      <div className={container}>
        <Reveal
          delay={0}
          className="grid grid-cols-[0.82fr_1.18fr] items-center gap-12 max-[880px]:grid-cols-1"
        >
          <div className="relative mx-auto flex aspect-square w-full max-w-[320px] flex-col items-center justify-center gap-4 overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_50%_28%,#161B2A,#0A0B10)]">
            <div className="pointer-events-none absolute -bottom-[70px] -left-[50px] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.18),transparent_64%)]" />
            <span className="absolute left-4 top-4 rounded-full border border-white/[0.12] px-2.5 py-[5px] font-mono text-[9.5px] tracking-[0.12em] text-muted">
              GREATER VANCOUVER
            </span>
            <div className="relative flex h-[110px] w-[110px] items-center justify-center rounded-full border border-[rgba(91,140,255,0.32)] bg-[rgba(91,140,255,0.12)] text-[44px] font-bold text-[#9DB6FF]">
              M
            </div>
            <div className="relative text-center">
              <div className="text-[16px] font-semibold text-white">Myron</div>
              <div className="mt-[3px] font-mono text-[10.5px] tracking-[0.10em] text-[#8A909C]">
                FOUNDER · TYVELO
              </div>
            </div>
          </div>

          <div>
            <div className={label}>{"// FROM THE FOUNDER"}</div>
            <h2 className="m-0 mb-5 text-balance text-[clamp(28px,4vw,46px)] font-bold leading-[1.08] tracking-[-0.03em]">
              Why I built TYVELO.
            </h2>
            <p className="m-0 mb-4 max-w-[560px] text-[16.5px] leading-[1.7] text-[#C7CCD6]">
              I kept watching great local businesses lose work for one silly reason — someone else
              simply replied first. Not better work. Not lower prices. Just faster.
            </p>
            <p className="m-0 mb-[26px] max-w-[560px] text-[16.5px] leading-[1.7] text-[#C7CCD6]">
              TYVELO is the system I wished they had: it answers every lead instantly, in your own
              voice, day or night, so the job stays with you. No call centre, no offshore team —
              when you message TYVELO, you&apos;re talking to me. And I don&apos;t consider it
              working until your response times actually drop.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-[16px] font-semibold text-white">— Myron, Founder of TYVELO</span>
              <span className="inline-flex items-center gap-[7px] rounded-full border border-[rgba(56,211,159,0.28)] bg-[rgba(56,211,159,0.06)] px-[13px] py-2 font-mono text-[12px] text-[#C7CCD6]">
                <span className="text-green">✓</span> You always reach a real person — me
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
