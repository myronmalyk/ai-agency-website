"use client";

import { useState, type CSSProperties } from "react";
import Reveal from "./Reveal";
import { container, section, label, sectionHead, sectionTitle, btnPrimary } from "./ui";

const WINBACK = 0.3;
const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

function fill(min: number, max: number, v: number): CSSProperties {
  const p = ((v - min) / (max - min)) * 100;
  return {
    background: `linear-gradient(90deg, var(--color-accent) ${p}%, rgba(255,255,255,0.10) ${p}%)`,
  };
}

export default function Calculator() {
  const [leads, setLeads] = useState(50);
  const [value, setValue] = useState(600);
  const [pct, setPct] = useState(35);

  const slow = leads * (1 - pct / 100);
  const jobs = Math.round(slow * WINBACK);
  const m = jobs * value;

  return (
    <section
      id="cost"
      className={`${section} border-t border-white/[0.07] bg-[linear-gradient(180deg,rgba(123,107,255,0.05),transparent_38%)]`}
    >
      <div className={container}>
        <Reveal delay={0} className={label}>
          {"// THE COST OF WAITING"}
        </Reveal>
        <Reveal delay={60} className={sectionHead}>
          <h2 className={sectionTitle}>Slow replies are quietly expensive.</h2>
          <p className="m-0 max-w-[330px] text-[15px] leading-[1.6] text-muted">
            Most owners lose more to slow follow-up than to any ad budget. Drag the sliders to
            your numbers and see what it adds up to.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="grid grid-cols-[1.05fr_0.95fr] overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#0F1117,#0A0B10)] shadow-[0_40px_90px_-50px_rgba(0,0,0,0.9)] max-[880px]:grid-cols-1"
        >
          <div className="flex flex-col gap-7 border-r border-white/[0.07] p-[34px] max-[880px]:border-b max-[880px]:border-r-0">
            <Field name="Leads a month" out={`${leads}`}>
              <input
                type="range"
                className="tv-range"
                min={5}
                max={250}
                step={5}
                value={leads}
                style={fill(5, 250, leads)}
                onChange={(e) => setLeads(+e.target.value)}
                aria-label="Leads a month"
              />
            </Field>
            <Field name="An average job is worth" out={money(value)}>
              <input
                type="range"
                className="tv-range"
                min={100}
                max={5000}
                step={50}
                value={value}
                style={fill(100, 5000, value)}
                onChange={(e) => setValue(+e.target.value)}
                aria-label="Average job value"
              />
            </Field>
            <Field name="Leads you reply to within 5 min today" out={`${pct}%`}>
              <input
                type="range"
                className="tv-range"
                min={0}
                max={100}
                step={5}
                value={pct}
                style={fill(0, 100, pct)}
                onChange={(e) => setPct(+e.target.value)}
                aria-label="Leads replied to within 5 minutes today"
              />
            </Field>
            <p className="m-0 text-[12.5px] leading-[1.55] text-muted2">
              Honest math: of the leads you don&apos;t reach fast, we assume instant replies win
              back a conservative <strong className="text-muted">30%</strong>. Your real numbers
              show up in the free demo — no guesswork.
            </p>
          </div>

          <div className="flex flex-col justify-center bg-[radial-gradient(120%_100%_at_100%_0%,rgba(91,140,255,0.10),transparent_60%)] p-[34px]">
            <div className="mb-2.5 font-mono text-[11px] tracking-[0.14em] text-muted2">
              POTENTIAL REVENUE AT STAKE
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[clamp(40px,6vw,60px)] font-bold leading-none tracking-[-0.03em] text-white">
                {money(m)}
              </span>
              <span className="text-[17px] text-muted">/ month</span>
            </div>
            <div className="mt-2.5 text-[15.5px] text-[#C7CCD6]">
              ≈ {money(m * 12)} a year going to whoever replies first
            </div>
            <div className="my-[22px] h-px bg-white/[0.08]" />
            <div className="mb-[22px] flex items-center gap-[13px]">
              <span className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-xl border border-[rgba(56,211,159,0.30)] bg-[rgba(56,211,159,0.10)] text-[19px] text-green">
                ↑
              </span>
              <div className="text-[14.5px] leading-[1.5] text-[#D6DAE2]">
                <strong className="text-white">{jobs} jobs a month</strong> up for grabs — TYVELO
                is built to win them back.
              </div>
            </div>
            <a href="#contact" className={`${btnPrimary} w-full`}>
              See it on my leads — free demo →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  name,
  out,
  children,
}: {
  name: string;
  out: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-[13px] flex items-baseline justify-between">
        <span className="text-[15px] text-[#D6DAE2]">{name}</span>
        <span className="font-mono text-[20px] font-semibold text-white">{out}</span>
      </div>
      {children}
    </div>
  );
}
