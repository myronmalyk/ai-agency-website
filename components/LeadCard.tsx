"use client";

import { useEffect, useRef } from "react";
import { tween, prefersReducedMotion } from "@/lib/tween";
import { leads } from "@/lib/leads";

export default function LeadCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const chRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const msgRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);
  const typingRef = useRef<HTMLDivElement>(null);
  const replyRef = useRef<HTMLDivElement>(null);
  const replyTextRef = useRef<HTMLDivElement>(null);
  const replyLabelRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Reduced motion → static "answered" state.
    if (prefersReducedMotion()) {
      if (barRef.current) barRef.current.style.width = "100%";
      if (replyRef.current) {
        replyRef.current.style.opacity = "1";
        replyRef.current.style.transform = "none";
      }
      const s = statusRef.current;
      if (s) {
        s.textContent = "● ANSWERED";
        s.style.color = "#38D39F";
        s.style.borderColor = "rgba(56,211,159,0.4)";
        s.style.background = "rgba(56,211,159,0.10)";
      }
      return;
    }

    const cleanups: Array<() => void> = [];
    const t = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms);
      cleanups.push(() => clearTimeout(id));
    };
    const animate = (
      dur: number,
      onUpdate: (e: number) => void,
      onDone?: () => void,
    ) => {
      cleanups.push(tween(dur, onUpdate, onDone));
    };

    const fmt = (s: number) => `0:${s < 10 ? "0" + s : s}`;
    const setStatus = (txt: string, col: string) => {
      const s = statusRef.current;
      if (!s) return;
      s.textContent = txt;
      s.style.color = col;
      const rgb =
        col === "#38D39F" ? "56,211,159" : col === "#FFB020" ? "255,176,32" : "91,140,255";
      s.style.borderColor = `rgba(${rgb},0.40)`;
      s.style.background = `rgba(${rgb},0.10)`;
    };
    const setBar = (from: number, to: number, dur: number) =>
      animate(dur, (e) => {
        if (barRef.current) barRef.current.style.width = `${from + (to - from) * e}%`;
      });
    const countTimer = (to: number) =>
      animate(720, (e) => {
        if (timerRef.current) timerRef.current.textContent = fmt(Math.round(to * e));
      });

    const run = (i: number) => {
      const L = leads[i];
      card.style.opacity = "1";
      card.style.transform = "none";
      if (chRef.current) chRef.current.textContent = L.ch;
      if (nameRef.current) nameRef.current.textContent = L.name;
      if (msgRef.current) msgRef.current.textContent = L.msg;
      if (replyTextRef.current) replyTextRef.current.textContent = L.reply;
      if (replyLabelRef.current) replyLabelRef.current.textContent = L.label || "TYVELO · AUTO-REPLY";

      if (msgRef.current) msgRef.current.style.opacity = "0";
      if (nameRef.current) nameRef.current.style.opacity = "0";
      animate(300, (e) => {
        if (msgRef.current) msgRef.current.style.opacity = `${e}`;
        if (nameRef.current) nameRef.current.style.opacity = `${e}`;
      });
      if (replyRef.current) {
        replyRef.current.style.opacity = "0";
        replyRef.current.style.transform = "translateY(10px)";
      }
      if (typingRef.current) typingRef.current.style.display = "none";
      if (timerRef.current) timerRef.current.textContent = "0:00";
      if (barRef.current) barRef.current.style.width = "0%";
      setStatus("● INCOMING", "#5B8CFF");

      t(() => setBar(0, 32, 600), 180);
      t(() => {
        setStatus("● REPLYING", "#FFB020");
        if (typingRef.current) typingRef.current.style.display = "flex";
        setBar(32, 66, 700);
      }, 950);
      t(() => {
        if (typingRef.current) typingRef.current.style.display = "none";
        animate(360, (e) => {
          if (replyRef.current) {
            replyRef.current.style.opacity = `${e}`;
            replyRef.current.style.transform = `translateY(${10 * (1 - e)}px)`;
          }
        });
        setStatus("● ANSWERED", "#38D39F");
        setBar(66, 100, 600);
        countTimer(L.secs);
      }, 2200);
      t(() => {
        animate(300, (e) => {
          if (msgRef.current) msgRef.current.style.opacity = `${1 - e}`;
          if (replyRef.current) replyRef.current.style.opacity = `${1 - e}`;
        });
      }, 5700);
      t(() => run((i + 1) % leads.length), 6100);
    };

    run(0);
    return () => cleanups.forEach((c) => c());
  }, []);

  return (
    <div className="relative">
      <div
        ref={cardRef}
        className="relative animate-bobble rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,#0F1117,#0A0B10)] p-[22px] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9),0_0_0_1px_rgba(91,140,255,0.05)]"
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] pb-4">
          <div className="flex items-center gap-2.5 font-mono text-[11.5px] tracking-[0.14em] text-[#C7CCD6]">
            <span className="h-[9px] w-[9px] rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" />
            <span ref={chRef}>WEB FORM</span>
          </div>
          <span
            ref={statusRef}
            className="rounded-full border border-[rgba(91,140,255,0.35)] bg-[rgba(91,140,255,0.10)] px-2.5 py-[5px] font-mono text-[10.5px] tracking-[0.12em] text-accent"
          >
            ● INCOMING
          </span>
        </div>

        <div className="flex min-h-[200px] flex-col gap-3.5 pb-1.5 pt-5">
          <div className="max-w-[84%] self-start">
            <div ref={nameRef} className="mb-1.5 font-mono text-[10.5px] tracking-[0.08em] text-muted2">
              SARAH M.
            </div>
            <div
              ref={msgRef}
              className="rounded-[4px_16px_16px_16px] border border-white/[0.07] bg-white/[0.05] px-[15px] py-[13px] text-[14.5px] leading-[1.5] text-[#E8EBF1]"
            >
              Hi! Do you have availability this week for a quote?
            </div>
          </div>

          <div
            ref={typingRef}
            className="hidden items-center gap-[5px] self-end rounded-[16px_4px_16px_16px] bg-accent px-4 py-[13px]"
          >
            <span className="h-[7px] w-[7px] animate-blink rounded-full bg-[#07080B]" />
            <span className="h-[7px] w-[7px] animate-blink rounded-full bg-[#07080B] [animation-delay:0.2s]" />
            <span className="h-[7px] w-[7px] animate-blink rounded-full bg-[#07080B] [animation-delay:0.4s]" />
          </div>

          <div
            ref={replyRef}
            className="max-w-[86%] self-end opacity-0"
            style={{ transform: "translateY(10px)", transition: "opacity .4s ease, transform .4s ease" }}
          >
            <div
              ref={replyLabelRef}
              className="mb-1.5 text-right font-mono text-[10.5px] tracking-[0.08em] text-accent"
            >
              TYVELO · AUTO-REPLY
            </div>
            <div
              ref={replyTextRef}
              className="rounded-[16px_4px_16px_16px] bg-accent px-[15px] py-[13px] text-[14.5px] font-medium leading-[1.5] text-[#07080B]"
            >
              Hi Sarah 👋 Yes — I&apos;ve got Thursday 2pm or Friday AM open. Want me to lock one in?
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-4">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="font-mono text-[11px] tracking-[0.10em] text-muted2">FIRST REPLY SENT</span>
            <span ref={timerRef} className="font-mono text-[18px] font-medium text-green">
              0:00
            </span>
          </div>
          <div className="h-[5px] overflow-hidden rounded-full bg-white/[0.07]">
            <div
              ref={barRef}
              className="h-full w-0 rounded-full bg-[linear-gradient(90deg,var(--color-accent),var(--color-green))] transition-[width] duration-[900ms] ease-[cubic-bezier(.4,0,.2,1)]"
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10.5px] tracking-[0.18em] text-muted3">
        LIVE SIMULATION · LOOPING
      </div>
    </div>
  );
}
