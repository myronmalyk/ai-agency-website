import Reveal from "./Reveal";
import { container, section, label, sectionHead, sectionTitle, check } from "./ui";

const STEPS = [
  {
    n: "STEP 01",
    title: "Tell me how work comes in",
    desc: "A few minutes by message — your trade, where jobs come from, and what usually falls through. You don't have to prepare anything.",
    delay: 0,
    accent: false,
  },
  {
    n: "STEP 02",
    title: "I build it on your setup — free",
    desc: "I wire TYVELO into your real number, your web form and your inbox. You don't install software, switch tools, or learn a dashboard.",
    delay: 80,
    accent: false,
  },
  {
    n: "STEP 03",
    title: "Watch it answer a real lead",
    desc: "You see one of your own leads handled in under 60 seconds before paying a cent. Happy? It keeps running at the flat founding rate below.",
    delay: 160,
    accent: true,
  },
];

const CHECKS = [
  "No software to install",
  "No new logins",
  "I handle the tech",
  "Cancel anytime",
];

export default function HowItWorks() {
  return (
    <section id="how" className={section}>
      <div className={container}>
        <Reveal delay={0} className={label}>
          {"// HOW IT WORKS"}
        </Reveal>
        <Reveal delay={60} className={sectionHead}>
          <h2 className={sectionTitle}>Live in days. Nothing for you to learn.</h2>
          <p className="m-0 max-w-[330px] text-[15px] leading-[1.6] text-muted">
            You stay on your tools and keep doing the work. I handle the technical side, start to
            finish.
          </p>
        </Reveal>

        <div className="grid grid-cols-3 gap-[18px] max-[880px]:grid-cols-1">
          {STEPS.map((s) => (
            <Reveal
              key={s.n}
              delay={s.delay}
              className={`relative rounded-[20px] p-[30px] ${
                s.accent
                  ? "border border-[rgba(91,140,255,0.22)] bg-[linear-gradient(165deg,#10131B,#0A0B11)]"
                  : "border border-white/[0.09] bg-[linear-gradient(165deg,#0E0F14,#0A0B10)]"
              }`}
            >
              <div className="mb-[42px] font-mono text-[13px] tracking-[0.14em] text-accent">{s.n}</div>
              <h3 className="m-0 mb-3 text-[21px] font-bold">{s.title}</h3>
              <p className="m-0 text-[14.5px] leading-[1.65] text-muted">{s.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-[18px] flex flex-wrap items-center gap-x-3 gap-y-2.5">
          {CHECKS.map((c) => (
            <span key={c} className={check}>
              <span className="text-green">✓</span> {c}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
