/** Shared Tailwind class strings (kept static so the JIT scanner sees them). */

export const container = "mx-auto max-w-[1180px] px-8 max-[880px]:px-[22px]";
export const containerNarrow = "mx-auto max-w-[920px] px-8 max-[880px]:px-[22px]";
export const section = "relative pt-[110px] pb-[92px] max-[880px]:pt-20 max-[880px]:pb-16";

export const label = "mb-[18px] font-mono text-[12px] tracking-[0.18em] text-accent";
export const sectionHead = "mb-[46px] flex flex-wrap items-end justify-between gap-5";
export const sectionTitle =
  "m-0 max-w-[680px] text-balance text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.05] tracking-[-0.03em]";
export const sectionLead = "m-0 max-w-[330px] text-[15px] leading-[1.6] text-muted";

export const btnPrimary =
  "inline-flex items-center justify-center gap-[9px] rounded-xl bg-accent px-[26px] py-[15px] text-[15px] font-semibold text-[#07080B] no-underline transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-14px_rgba(91,140,255,0.75)]";
export const btnGhost =
  "inline-flex items-center justify-center gap-[9px] rounded-xl border border-white/10 bg-white/[0.04] px-[26px] py-[15px] text-[15px] font-semibold text-text no-underline transition-[transform,border-color,background] duration-200 hover:-translate-y-0.5 hover:border-white/[0.28] hover:bg-white/[0.07]";

export const chipAccent =
  "inline-flex items-center gap-[9px] rounded-full border border-[rgba(91,140,255,0.35)] bg-[rgba(91,140,255,0.10)] px-3.5 py-2 font-mono text-[11px] tracking-[0.12em] text-accent";
export const chipDot = "h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]";

export const check =
  "inline-flex items-center gap-[7px] rounded-full border border-white/10 bg-white/[0.02] px-[13px] py-2 font-mono text-[12px] text-[#C7CCD6]";
export const pill =
  "rounded-full border border-white/10 bg-white/[0.02] px-3 py-[7px] font-mono text-[11.5px] text-[#C7CCD6]";
