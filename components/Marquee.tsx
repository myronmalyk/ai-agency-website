const ITEMS = [
  "Every lead answered in 60 seconds",
  "Missed-call text-back",
  "Quotes chased on a fixed schedule",
  "Invoices nudged on due date, +7, +14",
  "Service-due recalls that rebook",
  "Built for trades in the Fraser Valley",
];

function Group() {
  return (
    <span className="inline-flex items-center gap-[26px] pr-[26px] font-mono text-[13px] tracking-[0.06em] text-[#8A909C]">
      {ITEMS.map((t, i) => (
        <span key={i} className="inline-flex items-center gap-[26px]">
          <span>{t}</span>
          <span className="text-accent">◆</span>
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="relative mt-[74px] overflow-hidden border-y border-white/[0.07] py-[18px]"
      style={{
        WebkitMaskImage:
          "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)",
        maskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)",
      }}
    >
      <div className="inline-flex animate-marquee whitespace-nowrap">
        <Group />
        <Group />
      </div>
    </div>
  );
}
