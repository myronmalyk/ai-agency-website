import Reveal from "./Reveal";
import LoopDiagram from "./LoopDiagram";
import { container, section, label, sectionHead, sectionTitle, pill } from "./ui";

const cardBase =
  "group relative flex h-full flex-col overflow-hidden rounded-[20px] p-8 no-underline text-inherit transition-[transform,border-color,box-shadow,background] duration-[250ms] max-[880px]:p-6";

function StageHeading({ stage, title }: { stage: string; title: string }) {
  return (
    <div className="mb-[18px] mt-[52px] flex flex-wrap items-baseline gap-x-3.5 gap-y-1 first:mt-0">
      <span className="font-mono text-[11px] tracking-[0.14em] text-accent">{stage}</span>
      <span className="text-[15px] text-muted">{title}</span>
    </div>
  );
}

function Metric({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-auto flex items-center gap-2 border-t border-white/[0.07] pt-[18px] font-mono text-[11.5px] tracking-[0.06em] text-muted2">
      <span className="text-green">◆</span>
      <span>
        WE MEASURE: <span className="text-[#C7CCD6]">{children}</span>
      </span>
    </div>
  );
}

function Hook({ children }: { children: React.ReactNode }) {
  return (
    <p className="m-0 mb-4 text-[14px] font-medium italic leading-[1.5] text-[#C7CCD6]">
      {children}
    </p>
  );
}

export default function Services() {
  return (
    <section id="services" className={section}>
      <div className={container}>
        <Reveal delay={0} className={label}>
          {"// WHERE THE MONEY LEAKS"}
        </Reveal>
        <Reveal delay={60} className={sectionHead}>
          <h2 className={sectionTitle}>
            The lead you never answered. The quote you never chased.
          </h2>
          <p className="m-0 max-w-[330px] text-[15px] leading-[1.6] text-muted">
            Other agencies sell you more leads. TYVELO recovers the leads, quotes and customers
            you&apos;re already losing.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <LoopDiagram />
        </Reveal>

        {/* ── Stage 02 ─────────────────────────────────────────── */}
        <Reveal delay={0}>
          <StageHeading stage="STAGE 02 · GET CONTACTED" title="They reached out. Did you answer?" />
        </Reveal>

        <div className="grid grid-cols-[1.35fr_1fr] gap-[18px] max-[880px]:grid-cols-1">
          <Reveal
            as="a"
            href="#contact"
            delay={0}
            className={`${cardBase} border border-[rgba(91,140,255,0.22)] bg-[linear-gradient(165deg,#10131B,#0A0B11)] hover:-translate-y-[5px] hover:border-accent hover:shadow-[0_30px_70px_-28px_rgba(91,140,255,0.55)]`}
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.20),transparent_65%)]" />
            <div className="mb-[26px] flex items-center justify-between gap-3">
              <span className="font-mono text-[40px] font-medium leading-none text-white/10">01</span>
              <span className="rounded-full border border-[rgba(56,211,159,0.40)] bg-[rgba(56,211,159,0.10)] px-[11px] py-1.5 font-mono text-[10.5px] tracking-[0.14em] text-green">
                LIVE NOW
              </span>
            </div>
            <h3 className="m-0 mb-3.5 text-[26px] font-bold tracking-[-0.02em]">Speed-to-Lead</h3>
            <Hook>How many jobs went to whoever picked up while you were under a sink?</Hook>
            <p className="m-0 mb-[22px] text-[15px] leading-[1.65] text-[#A8AEB9]">
              Every inbound lead gets a personal reply in under 60 seconds, then an automatic
              follow-up sequence until they answer or tell you to stop. Day, night, weekend, on a
              roof — you&apos;re the trade that got back to them first.
            </p>
            <ul className="m-0 mb-[22px] flex list-none flex-col gap-2.5 p-0 text-[14.5px] leading-[1.5] text-[#D6DAE2]">
              {[
                "Web forms, calls and DMs answered in one place",
                "Missed-call text-back — the call you couldn't take turns into a text thread",
                "After-hours and weekend cover, without an answering service",
                "Follow-up that keeps going until they reply",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <span className="mt-[3px] flex-none text-[12px] text-green">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mb-[22px] flex flex-wrap gap-[9px]">
              <span className={pill}>Form · call · DM</span>
              <span className={pill}>Missed-call text-back</span>
              <span className={pill}>24/7</span>
            </div>
            <Metric>leads answered + median first-reply time</Metric>
            <span className="mt-[22px] text-[14px] font-semibold text-accent">
              Get this running →
            </span>
          </Reveal>

          {/* Secondary offer under stage 02 — deliberately not a headline card. */}
          <Reveal
            delay={80}
            className={`${cardBase} border border-[rgba(123,107,255,0.22)] bg-[linear-gradient(165deg,#13111C,#0A0B11)]`}
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="font-mono text-[10px] tracking-[0.14em] text-muted2">
                ALSO AVAILABLE
              </span>
              <span className="rounded-full border border-[rgba(123,107,255,0.40)] bg-[rgba(123,107,255,0.12)] px-[11px] py-1.5 font-mono text-[10.5px] tracking-[0.14em] text-[#B6A9FF]">
                ADD-ON
              </span>
            </div>
            <h3 className="m-0 mb-3.5 text-[21px] font-bold tracking-[-0.01em]">AI Voice Agent</h3>
            {/* No "hear it" CTA until there's a live demo line to point at. */}
            <p className="m-0 text-[14.5px] leading-[1.6] text-muted">
              A natural-sounding voice picks up when you can&apos;t — takes the name, number, the
              job and how urgent it is, then books it or texts you the summary. Bolted onto
              Speed-to-Lead when the phone is where you&apos;re losing work.
            </p>
          </Reveal>
        </div>

        {/* ── Stage 03 ─────────────────────────────────────────── */}
        <Reveal delay={0}>
          <StageHeading
            stage="STAGE 03 · QUOTE / BOOK"
            title="The estimate went out. Then what?"
          />
        </Reveal>

        <div className="grid grid-cols-2 gap-[18px] max-[880px]:grid-cols-1">
          <Reveal
            as="a"
            href="#contact"
            delay={0}
            className={`${cardBase} border border-[rgba(91,140,255,0.22)] bg-[linear-gradient(165deg,#10131B,#0A0B11)] hover:-translate-y-[5px] hover:border-accent hover:shadow-[0_30px_70px_-28px_rgba(91,140,255,0.55)]`}
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.16),transparent_65%)]" />
            <div className="mb-[26px] flex items-center justify-between gap-3">
              <span className="font-mono text-[40px] font-medium leading-none text-white/10">02</span>
              <span className="rounded-full border border-[rgba(91,140,255,0.35)] bg-[rgba(91,140,255,0.10)] px-[11px] py-1.5 font-mono text-[10.5px] tracking-[0.14em] text-accent">
                NEW
              </span>
            </div>
            <h3 className="m-0 mb-3.5 text-[26px] font-bold tracking-[-0.02em]">Quote Chasing</h3>
            <Hook>How many quotes did you send last month that never replied?</Hook>
            <p className="m-0 mb-[22px] text-[15px] leading-[1.65] text-[#A8AEB9]">
              Every open estimate gets personal follow-up at 2, 7 and 21 days, then a &ldquo;still
              need this done?&rdquo; revival at 60. Not a blast — a short message that reads like
              you wrote it between jobs, so quotes get a yes or a no instead of silence.
            </p>
            <div className="mb-[22px] flex flex-wrap gap-[9px]">
              <span className={pill}>Day 2</span>
              <span className={pill}>Day 7</span>
              <span className={pill}>Day 21</span>
              <span className={pill}>Day 60 revival</span>
            </div>
            <Metric>quote-to-job rate</Metric>
            <span className="mt-[22px] text-[14px] font-semibold text-accent">
              Chase my open quotes →
            </span>
          </Reveal>

          <Reveal
            delay={80}
            className="flex flex-col justify-center gap-4 rounded-[20px] border border-white/[0.09] bg-[linear-gradient(165deg,#0E0F14,#0A0B10)] p-8 max-[880px]:p-6"
          >
            <span className="font-mono text-[10.5px] tracking-[0.14em] text-muted2">
              WHY THIS STAGE
            </span>
            <p className="m-0 text-[15.5px] leading-[1.65] text-[#C7CCD6]">
              A quote you already priced and drove out for is the cheapest job you will ever win.
              You paid the cost of getting it; the only thing standing between you and the work is
              somebody following up. That&apos;s the leak nobody staffs for — and the one
              automation is genuinely good at.
            </p>
          </Reveal>
        </div>

        {/* ── Stage 05 ─────────────────────────────────────────── */}
        <Reveal delay={0}>
          <StageHeading
            stage="STAGE 05 · GET PAID & COME BACK"
            title="Work's done. The money and the next job aren't."
          />
        </Reveal>

        <div className="grid grid-cols-2 gap-[18px] max-[880px]:grid-cols-1">
          <Reveal
            as="a"
            href="#contact"
            delay={0}
            className={`${cardBase} border border-white/[0.09] bg-[linear-gradient(165deg,#0E0F14,#0A0B10)] hover:-translate-y-[5px] hover:border-white/[0.26] hover:shadow-[0_26px_60px_-28px_rgba(0,0,0,0.8)]`}
          >
            <div className="mb-[26px] flex items-center justify-between gap-3">
              <span className="font-mono text-[34px] font-medium leading-none text-white/10">03</span>
            </div>
            <h3 className="m-0 mb-3.5 text-[22px] font-bold tracking-[-0.01em]">Invoice Chasing</h3>
            <Hook>How much of last quarter is still sitting unpaid?</Hook>
            <p className="m-0 mb-[22px] text-[14.5px] leading-[1.65] text-muted">
              Polite nudges on the due date, then at +7 and +14 days — and if it&apos;s still open
              after that, it escalates to you with everything you need to make one phone call. You
              stop being the person who has to ask.
            </p>
            <div className="mb-[22px] flex flex-wrap gap-[9px]">
              <span className={pill}>Due date</span>
              <span className={pill}>+7 days</span>
              <span className={pill}>+14 days</span>
              <span className={pill}>Escalate to owner</span>
            </div>
            <Metric>days-to-paid</Metric>
            <span className="mt-[22px] text-[14px] font-semibold text-accent">
              Shorten my days-to-paid →
            </span>
          </Reveal>

          <Reveal
            as="a"
            href="#contact"
            delay={80}
            className={`${cardBase} border border-white/[0.09] bg-[linear-gradient(165deg,#0E0F14,#0A0B10)] hover:-translate-y-[5px] hover:border-white/[0.26] hover:shadow-[0_26px_60px_-28px_rgba(0,0,0,0.8)]`}
          >
            <div className="mb-[26px] flex items-center justify-between gap-3">
              <span className="font-mono text-[34px] font-medium leading-none text-white/10">04</span>
            </div>
            <h3 className="m-0 mb-3.5 text-[22px] font-bold tracking-[-0.01em]">
              Maintenance Recall
            </h3>
            <Hook>Who did you service last spring that you haven&apos;t spoken to since?</Hook>
            <p className="m-0 mb-[22px] text-[14.5px] leading-[1.65] text-muted">
              Service-due texts go out on your schedule — annual furnace service, gutter season,
              the filter change you flagged on the last visit — and book straight into your
              calendar. Your existing customer list starts producing work again.
            </p>
            <div className="mb-[22px] flex flex-wrap gap-[9px]">
              <span className={pill}>Service-due texts</span>
              <span className={pill}>Books into calendar</span>
              <span className={pill}>Seasonal</span>
            </div>
            <Metric>repeat jobs</Metric>
            <span className="mt-[22px] text-[14px] font-semibold text-accent">
              Wake up my customer list →
            </span>
          </Reveal>
        </div>

        {/* ── Not yet ──────────────────────────────────────────── */}
        <Reveal delay={0}>
          <StageHeading stage="LATER IN THE LOOP" title="Worth doing — but not first." />
        </Reveal>

        <div className="grid grid-cols-2 gap-[18px] max-[880px]:grid-cols-1">
          {[
            {
              stage: "STAGE 01 · GET FOUND",
              title: "Review Automation",
              desc: "Ask happy customers for a Google review at the right moment, and route unhappy ones to private feedback first.",
              note: "Once your system is running",
            },
            {
              stage: "STAGE 04 · DO THE WORK",
              title: "“On my way” / status texts",
              desc: "Automatic heads-up when the crew is dispatched, en route or running late — fewer no-shows, fewer “where are you?” calls.",
              note: "Included when useful",
            },
          ].map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 80}
              className="flex h-full flex-col gap-3 rounded-[20px] border border-white/[0.06] bg-white/[0.012] p-7 transition-colors duration-200 hover:border-white/[0.12] max-[880px]:p-6"
            >
              <span className="font-mono text-[10.5px] tracking-[0.14em] text-muted2">
                {c.stage}
              </span>
              <h3 className="m-0 text-[19px] font-bold tracking-[-0.01em] text-[#C7CCD6]">
                {c.title}
              </h3>
              <p className="m-0 text-[14px] leading-[1.6] text-muted">{c.desc}</p>
              <span className="mt-auto inline-flex w-fit items-center rounded-full border border-white/[0.10] px-3 py-1.5 font-mono text-[10.5px] tracking-[0.10em] text-muted2">
                {c.note}
              </span>
            </Reveal>
          ))}
        </div>

        {/* Footnote, not a card. */}
        <Reveal delay={40} className="mt-[38px] border-t border-white/[0.07] pt-6">
          <p className="m-0 text-[14.5px] leading-[1.7] text-muted">
            Not sure where you&apos;re leaking?{" "}
            <a href="#contact" className="font-semibold text-accent no-underline hover:underline">
              Ask me
            </a>{" "}
            — tell me how work comes in and I&apos;ll point at the stage costing you most. If
            automation won&apos;t help, I&apos;ll say so. No call required.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
