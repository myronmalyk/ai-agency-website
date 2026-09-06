import Reveal from "./Reveal";
import { container, section, label, sectionHead, sectionTitle, btnPrimary, check } from "./ui";
import { FOUNDING_PRICE } from "@/lib/site";

const INCLUDED = [
  "01 Speed-to-Lead — every form, call and DM answered in under 60 seconds, missed-call text-back included",
  "One more stage of your choice — Quote Chasing, Invoice Chasing or Maintenance Recall",
  "Built on your real phone number, forms and inbox — nothing for you to install",
  "A monthly report on what it actually did",
  "Wording changes and tuning whenever you want them",
];

const TERMS = ["No setup fee", "No contract", "Demo before you pay", "Cancel anytime"];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className={`${section} border-t border-white/[0.07] bg-[linear-gradient(180deg,rgba(91,140,255,0.05),transparent_38%)]`}
    >
      <div className={container}>
        <Reveal delay={0} className={label}>
          {"// WHAT IT COSTS"}
        </Reveal>
        <Reveal delay={60} className={sectionHead}>
          <h2 className={sectionTitle}>One flat price. No setup fee, no contract.</h2>
          <p className="m-0 max-w-[330px] text-[15px] leading-[1.6] text-muted">
            You&apos;ll know the number before you talk to me, because hiding it wastes both our
            time.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="grid grid-cols-[0.9fr_1.1fr] overflow-hidden rounded-[24px] border border-[rgba(91,140,255,0.28)] bg-[linear-gradient(180deg,#0F1117,#0A0B10)] shadow-[0_40px_90px_-50px_rgba(0,0,0,0.9)] max-[880px]:grid-cols-1"
        >
          <div className="flex flex-col justify-center gap-4 border-r border-white/[0.07] bg-[radial-gradient(120%_100%_at_0%_0%,rgba(91,140,255,0.12),transparent_62%)] p-[38px] max-[880px]:border-b max-[880px]:border-r-0 max-[880px]:p-7">
            <span className="font-mono text-[11px] tracking-[0.14em] text-accent">
              FOUNDING RATE
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-[clamp(42px,6vw,62px)] font-bold leading-none tracking-[-0.03em] text-white">
                {FOUNDING_PRICE.replace("/mo", "")}
              </span>
              <span className="text-[17px] text-muted">CAD / month</span>
            </div>
            <p className="m-0 text-[15px] leading-[1.6] text-[#C7CCD6]">
              Flat, per location, and <strong className="text-white">locked for 12 months</strong>{" "}
              for founding clients. No setup fee, no contract.
            </p>
            <div className="mt-2 flex flex-wrap gap-x-2.5 gap-y-2">
              {TERMS.map((t) => (
                <span key={t} className={check}>
                  <span className="text-green">✓</span> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col p-[38px] max-[880px]:p-7">
            <span className="mb-5 font-mono text-[11px] tracking-[0.14em] text-muted2">
              WHAT&apos;S INCLUDED
            </span>
            <ul className="m-0 mb-7 flex list-none flex-col gap-3.5 p-0">
              {INCLUDED.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-3 text-[14.5px] leading-[1.55] text-[#D6DAE2]"
                >
                  <span className="mt-[3px] flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full border border-accent text-[11px] text-accent">
                    ✓
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <p className="m-0 mb-7 border-t border-white/[0.07] pt-5 text-[13.5px] leading-[1.6] text-muted2">
              Want a third or fourth stage running? Those are added on top once the first two are
              earning — priced per stage, and only when you ask for them. Nothing gets switched on
              behind your back.
            </p>
            <a href="#contact" className={`${btnPrimary} mt-auto w-full`}>
              Start with a free demo →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
