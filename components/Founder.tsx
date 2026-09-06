import Image from "next/image";
import Reveal from "./Reveal";
import { container, label } from "./ui";
import { CONTACT_PHONE, CONTACT_PHONE_TEL, HOME_CITY } from "@/lib/site";
import { hasPublicFile } from "@/lib/assets";

/**
 * TODO: Drop a real headshot at public/images/founder.jpg (square, ~640×640).
 * Until it exists this renders a neutral placeholder — no fake stock photo.
 */
const FOUNDER_PHOTO = "/images/founder.jpg";

export default function Founder() {
  const hasPhoto = hasPublicFile("images/founder.jpg");

  return (
    <section id="founder" className="relative pb-[100px] pt-[60px]">
      <div className={container}>
        <Reveal
          delay={0}
          className="grid grid-cols-[0.82fr_1.18fr] items-center gap-12 max-[880px]:grid-cols-1"
        >
          <div className="relative mx-auto flex aspect-square w-full max-w-[320px] flex-col items-center justify-center gap-4 overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_50%_28%,#161B2A,#0A0B10)]">
            {hasPhoto ? (
              <>
                <Image
                  src={FOUNDER_PHOTO}
                  alt="Myron, founder of TYVELO"
                  fill
                  sizes="(max-width: 880px) 320px, 320px"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,11,0.15),rgba(7,8,11,0.85))]"
                />
              </>
            ) : (
              <div className="pointer-events-none absolute -bottom-[70px] -left-[50px] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.18),transparent_64%)]" />
            )}

            <span className="absolute left-4 top-4 z-10 rounded-full border border-white/[0.12] bg-[rgba(7,8,11,0.55)] px-2.5 py-[5px] font-mono text-[9.5px] tracking-[0.12em] text-muted backdrop-blur-sm">
              {HOME_CITY.toUpperCase()}, BC
            </span>

            {!hasPhoto && (
              <div
                aria-hidden="true"
                className="relative flex h-[110px] w-[110px] items-center justify-center rounded-full border border-[rgba(91,140,255,0.32)] bg-[rgba(91,140,255,0.10)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-[52px] w-[52px] text-[#9DB6FF] opacity-70"
                >
                  <circle cx="12" cy="8.2" r="3.6" stroke="currentColor" strokeWidth="1.4" />
                  <path
                    d="M4.6 19.4c0-3.6 3.3-5.8 7.4-5.8s7.4 2.2 7.4 5.8"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )}

            <div className="relative z-10 text-center">
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
              I spent ten years living and working in Spain before moving to Canada. When I got
              here I started paying attention to how trades actually run their days: on a roof,
              under a sink, in a van — nowhere near a phone. The quote goes out and nothing
              happens. The invoice sits. The customer books whoever answered.
            </p>
            <p className="m-0 mb-[26px] max-w-[560px] text-[16.5px] leading-[1.7] text-[#C7CCD6]">
              That&apos;s what TYVELO does — the follow-through you&apos;d do yourself if you had
              the hours. I build every system myself, for Fraser Valley trades, and when you
              message TYVELO you get me, not a support queue.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-[16px] font-semibold text-white">— Myron, Founder of TYVELO</span>
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="inline-flex items-center gap-[7px] rounded-full border border-[rgba(56,211,159,0.28)] bg-[rgba(56,211,159,0.06)] px-[13px] py-2 font-mono text-[12px] text-[#C7CCD6] no-underline transition-colors hover:border-[rgba(56,211,159,0.5)] hover:text-white"
              >
                <span className="text-green">✓</span> My direct line: {CONTACT_PHONE}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
