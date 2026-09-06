import Reveal from "./Reveal";
import { container } from "./ui";

const COMMITMENTS = [
  {
    tag: "01",
    title: "Proof before billing",
    body: "You watch it work on your real leads before the first invoice exists. Not a slide deck, not someone else's screenshot — your phone number, your forms, your customers, running live. If it doesn't do what I said it would, there's nothing to cancel and nothing owed.",
  },
  {
    tag: "02",
    title: "Measured monthly",
    body: "Every client gets a monthly report: leads answered, median reply time, quotes followed up, and — where those stages are switched on — jobs booked and days-to-paid. Real counts from your own system. If the numbers don't move, we talk before you pay again.",
  },
];

export default function Guarantee() {
  return (
    <section className="relative pb-[26px] pt-16">
      <div className={container}>
        <Reveal
          delay={0}
          className="relative overflow-hidden rounded-[24px] border border-[rgba(91,140,255,0.28)] bg-[linear-gradient(120deg,#10131B,#0A0B11)] px-11 py-10 shadow-[0_30px_80px_-45px_rgba(91,140,255,0.5)] max-[880px]:px-6"
        >
          <div className="pointer-events-none absolute -right-[60px] -top-[90px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.16),transparent_65%)]" />

          <div className="relative mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <div className="mb-3 font-mono text-[11.5px] tracking-[0.16em] text-accent">
                {"// HOW YOU'LL KNOW IT'S WORKING"}
              </div>
              <h3 className="m-0 max-w-[640px] text-balance text-[clamp(22px,3vw,30px)] font-bold leading-[1.15] tracking-[-0.02em]">
                You see the numbers before you pay — and every month after.
              </h3>
            </div>
            <div className="relative flex h-[92px] w-[92px] flex-none items-center justify-center max-[880px]:hidden">
              <div className="absolute inset-0 animate-spinslow rounded-full border border-dashed border-[rgba(91,140,255,0.45)]" />
              <div className="flex h-[72px] w-[72px] flex-col items-center justify-center gap-[3px] rounded-full border border-[rgba(91,140,255,0.4)] bg-[radial-gradient(circle_at_50%_32%,#161B2A,#0A0B11)] shadow-[inset_0_0_26px_rgba(91,140,255,0.14)]">
                <span className="text-[22px] font-bold leading-none text-accent">✓</span>
                <span className="font-mono text-[7px] tracking-[0.16em] text-muted">MEASURED</span>
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-[18px] max-[880px]:grid-cols-1">
            {COMMITMENTS.map((c) => (
              <div
                key={c.tag}
                className="flex flex-col gap-3 rounded-[18px] border border-white/[0.09] bg-white/[0.02] p-7 max-[880px]:p-6"
              >
                <span className="font-mono text-[11px] tracking-[0.12em] text-accent">
                  {c.tag}
                </span>
                <h4 className="m-0 text-[19px] font-bold tracking-[-0.01em]">{c.title}</h4>
                <p className="m-0 text-[14.5px] leading-[1.65] text-[#A8AEB9]">{c.body}</p>
              </div>
            ))}
          </div>

          <p className="relative m-0 mt-6 text-[13.5px] leading-[1.6] text-muted2">
            No setup fee, no contract, cancel any time. What I won&apos;t do is promise you a
            revenue number — how many of those faster replies turn into signed jobs depends on
            your pricing, your availability and your crew. The response, the follow-up and the
            reporting are mine to guarantee.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
