import Reveal from "./Reveal";
import { container, section, label, sectionTitle, btnPrimary, chipAccent, chipDot } from "./ui";
import { FOUNDING_PRICE } from "@/lib/site";

const CARDS = [
  {
    tag: "01 · DIRECT",
    title: "Founder-built, start to finish",
    desc: "You work directly with me — no account managers, no juniors. I design, wire and tune your system personally, and I'm who answers when you reach out.",
    delay: 0,
    accent: false,
  },
  {
    tag: "02 · LOCKED IN",
    title: `${FOUNDING_PRICE}, and it stays there`,
    desc: `Founding clients pay a flat ${FOUNDING_PRICE} CAD per location, with no setup fee and no contract. That rate is locked for you as TYVELO grows — the people who come after you will pay more.`,
    delay: 80,
    accent: false,
  },
  {
    tag: "03 · PROVEN FIRST",
    title: "Nothing is billed until you've seen it run",
    desc: "I build the demo on your real leads first. You watch it handle them, then decide. After that you get a monthly report with the actual numbers — leads answered, reply times, quotes followed up.",
    delay: 160,
    accent: true,
  },
];

export default function FoundingOffer() {
  return (
    <section
      id="offer"
      className={`${section} border-b border-white/[0.07] bg-[linear-gradient(180deg,rgba(91,140,255,0.04),transparent_36%)]`}
    >
      <div className={container}>
        <Reveal delay={0} className={label}>
          {"// FOUNDING CLIENTS"}
        </Reveal>
        <Reveal delay={60} className="mb-6 flex flex-wrap items-end justify-between gap-[18px]">
          <h2 className={`${sectionTitle} max-w-[600px]`}>
            New here — and that&apos;s the best time to work with me.
          </h2>
          <span className={chipAccent}>
            <span className={chipDot} />
            A SMALL FIRST COHORT
          </span>
        </Reveal>
        <Reveal as="p" delay={90} className="m-0 mb-[44px] max-w-[680px] text-[16.5px] leading-[1.65] text-[#A8AEB9]">
          Straight talk: TYVELO is new, so I&apos;m onboarding a small group of founding trades
          instead of chasing volume. No client list to show you yet — what I can offer is my full
          attention, a rate that won&apos;t go up, and a demo running on your own leads before you
          decide anything.
        </Reveal>

        <div className="grid grid-cols-3 gap-[18px] max-[880px]:grid-cols-1">
          {CARDS.map((c) => (
            <Reveal
              key={c.tag}
              delay={c.delay}
              className={`flex flex-col gap-3.5 rounded-[20px] p-[30px] ${
                c.accent
                  ? "border border-[rgba(91,140,255,0.22)] bg-[linear-gradient(165deg,#10131B,#0A0B11)]"
                  : "border border-white/[0.09] bg-[linear-gradient(165deg,#0E0F14,#0A0B10)]"
              }`}
            >
              <span className="font-mono text-[11px] tracking-[0.12em] text-accent">{c.tag}</span>
              <h3 className="m-0 text-[20px] font-bold tracking-[-0.01em]">{c.title}</h3>
              <p className="m-0 text-[14.5px] leading-[1.65] text-muted">{c.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-[30px] flex flex-wrap items-center gap-x-[22px] gap-y-4">
          <a href="#contact" className={btnPrimary}>
            Claim a founding spot →
          </a>
          <span className="text-[14px] leading-[1.5] text-[#8A909C]">
            Message me and I&apos;ll build your free demo.{" "}
            <span className="text-[#C7CCD6]">
              I&apos;d rather earn one delighted local trade than oversell ten.
            </span>
          </span>
        </Reveal>
      </div>
    </section>
  );
}
