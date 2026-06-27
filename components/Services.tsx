import Reveal from "./Reveal";
import { container, section, label, sectionHead, sectionTitle, pill } from "./ui";

const cardBase =
  "group relative flex h-full flex-col overflow-hidden rounded-[20px] p-8 no-underline text-inherit transition-[transform,border-color,box-shadow,background] duration-[250ms]";

export default function Services() {
  return (
    <section id="services" className={section}>
      <div className={container}>
        <Reveal delay={0} className={label}>
          {"// WHAT WE AUTOMATE"}
        </Reveal>
        <Reveal delay={60} className={sectionHead}>
          <h2 className={sectionTitle}>
            Catch every lead, follow up every time — without lifting a finger.
          </h2>
          <p className="m-0 max-w-[300px] text-[15px] leading-[1.6] text-muted">
            Start with speed-to-lead. Layer on the rest as it earns its place.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-[18px] max-[880px]:grid-cols-1">
          {/* 01 — Speed-to-Lead */}
          <Reveal
            as="a"
            href="#contact"
            delay={0}
            className={`${cardBase} border border-[rgba(91,140,255,0.22)] bg-[linear-gradient(165deg,#10131B,#0A0B11)] hover:-translate-y-[5px] hover:border-accent hover:shadow-[0_30px_70px_-28px_rgba(91,140,255,0.55)]`}
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.20),transparent_65%)]" />
            <div className="mb-[26px] flex items-center justify-between gap-3">
              <span className="font-mono text-[40px] font-medium leading-none text-white/10">01</span>
              <span className="rounded-full border border-[rgba(91,140,255,0.35)] bg-[rgba(91,140,255,0.10)] px-[11px] py-1.5 font-mono text-[10.5px] tracking-[0.14em] text-accent">
                START HERE
              </span>
            </div>
            <h3 className="m-0 mb-3.5 text-[26px] font-bold tracking-[-0.02em]">Speed-to-Lead</h3>
            <p className="m-0 mb-[22px] text-[15px] leading-[1.65] text-[#A8AEB9]">
              Every inbound lead — web form, call, Instagram or Facebook DM — gets an instant,
              personal reply and an automatic follow-up sequence in under 60 seconds. Day or
              night, you&apos;re the business that answered first.
            </p>
            <div className="mt-auto flex flex-wrap gap-[9px]">
              <span className={pill}>Form · call · DM</span>
              <span className={pill}>Instant reply</span>
              <span className={pill}>Auto follow-up</span>
            </div>
            <span className="mt-[26px] text-[14px] font-semibold text-accent">Get this running →</span>
          </Reveal>

          {/* 02 — AI Voice Agent */}
          <Reveal
            as="a"
            href="#contact"
            delay={80}
            className={`${cardBase} border border-[rgba(123,107,255,0.26)] bg-[linear-gradient(165deg,#13111C,#0A0B11)] hover:-translate-y-[5px] hover:border-accent2 hover:shadow-[0_30px_70px_-28px_rgba(123,107,255,0.55)]`}
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(123,107,255,0.22),transparent_65%)]" />
            <div className="mb-[26px] flex items-center justify-between gap-3">
              <span className="font-mono text-[40px] font-medium leading-none text-white/10">02</span>
              <span className="rounded-full border border-[rgba(123,107,255,0.40)] bg-[rgba(123,107,255,0.12)] px-[11px] py-1.5 font-mono text-[10.5px] tracking-[0.14em] text-[#B6A9FF]">
                NEW
              </span>
            </div>
            <h3 className="m-0 mb-3.5 text-[26px] font-bold tracking-[-0.02em]">AI Voice Agent</h3>
            <p className="m-0 mb-[22px] text-[15px] leading-[1.65] text-[#A8AEB9]">
              A natural-sounding AI answers your phone when you can&apos;t — 24/7. It greets the
              caller, answers common questions, captures their name, number, the job and how
              urgent it is, then books them in or texts you a clean summary. No more lost calls or
              voicemail tag.
            </p>
            <div className="mt-auto flex flex-wrap gap-[9px]">
              <span className={pill}>Answers 24/7</span>
              <span className={pill}>Captures every detail</span>
              <span className={pill}>Books &amp; qualifies</span>
            </div>
            <span className="mt-[26px] text-[14px] font-semibold text-[#B6A9FF]">
              Hear it in your demo →
            </span>
          </Reveal>

          {/* 03 — Missed-Call Text-Back */}
          <SmallCard
            delay={120}
            num="03"
            title="Missed-Call Text-Back"
            desc="Caller hung up before the AI picked up? They still get an automatic text the moment a call goes unanswered — a missed call becomes a booked job."
          />

          {/* 04 — Review Automation */}
          <SmallCard
            delay={160}
            num="04"
            title="Review Automation"
            desc="Ask happy customers for a Google review at the right moment — and quietly route unhappy ones to private feedback first."
          />

          {/* 00 — wide audit */}
          <Reveal
            as="a"
            href="#contact"
            delay={40}
            className="group relative col-span-2 flex flex-wrap items-center justify-between gap-5 overflow-hidden rounded-[20px] border border-white/[0.09] bg-[linear-gradient(100deg,#0C0D12,#0A0B10)] px-8 py-7 no-underline text-inherit transition-[border-color,background] duration-[250ms] hover:border-accent hover:bg-[linear-gradient(100deg,#0E1018,#0A0B10)] max-[880px]:col-span-1 max-[880px]:flex-col max-[880px]:items-start"
          >
            <div className="flex items-center gap-[22px]">
              <span className="font-mono text-[30px] font-medium leading-none text-white/10">00</span>
              <div>
                <h3 className="m-0 mb-1.5 text-[19px] font-bold">Not sure what you need?</h3>
                <p className="m-0 max-w-[560px] text-[14px] leading-[1.55] text-muted">
                  Tell me about your business and I&apos;ll find where leads come in and where they
                  leak out. If automation won&apos;t help, I&apos;ll say so.
                </p>
              </div>
            </div>
            <span className="whitespace-nowrap font-mono text-[13px] font-medium text-accent">
              Get a free lead audit →
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SmallCard({
  delay,
  num,
  title,
  desc,
}: {
  delay: number;
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <Reveal
      as="a"
      href="#contact"
      delay={delay}
      className="group relative flex h-full min-h-[200px] flex-col overflow-hidden rounded-[20px] border border-white/[0.09] bg-[linear-gradient(165deg,#0E0F14,#0A0B10)] p-7 no-underline text-inherit transition-[transform,border-color,box-shadow] duration-[250ms] hover:-translate-y-[5px] hover:border-white/[0.26] hover:shadow-[0_26px_60px_-28px_rgba(0,0,0,0.8)]"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[30px] font-medium leading-none text-white/10">{num}</span>
        <span className="font-mono text-[10px] tracking-[0.12em] text-muted2">ALSO AVAILABLE</span>
      </div>
      <div className="mt-auto">
        <h3 className="mb-2.5 mt-[18px] text-[21px] font-bold tracking-[-0.01em]">{title}</h3>
        <p className="m-0 text-[14px] leading-[1.6] text-muted">{desc}</p>
      </div>
    </Reveal>
  );
}
