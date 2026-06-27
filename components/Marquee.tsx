const ITEMS = [
  "Speed-to-lead automation",
  "Every lead answered in 60 seconds",
  "AI answers your calls 24/7",
  "Missed-call text-back",
  "Reviews on autopilot",
  "Built on n8n + AI",
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
