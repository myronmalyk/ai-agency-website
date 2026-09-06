type Status = "live" | "later";

const STAGES: {
  n: string;
  name: string;
  leak: string;
  status: Status;
}[] = [
  { n: "01", name: "Get found", leak: "Ads, maps, word of mouth", status: "later" },
  { n: "02", name: "Get contacted", leak: "The call nobody picked up", status: "live" },
  { n: "03", name: "Quote / book", leak: "The estimate nobody chased", status: "live" },
  { n: "04", name: "Do the work", leak: "The customer left guessing", status: "later" },
  { n: "05", name: "Get paid & come back", leak: "The invoice still sitting there", status: "live" },
];

/**
 * The five-stage loop every local service business runs. Horizontal on
 * desktop, stacked on mobile. Stages TYVELO plugs today are accented.
 */
export default function LoopDiagram() {
  return (
    <div className="rounded-[24px] border border-white/[0.09] bg-[linear-gradient(165deg,#0C0D12,#0A0B10)] p-8 max-[880px]:p-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-[10.5px] tracking-[0.14em] text-muted2">
          THE LOOP EVERY JOB TRAVELS
        </span>
        <span className="font-mono text-[10.5px] tracking-[0.14em] text-accent">
          ● = TYVELO PLUGS THIS TODAY
        </span>
      </div>

      <ol className="m-0 flex list-none items-stretch gap-0 p-0 max-[880px]:flex-col">
        {STAGES.map((s, i) => (
          <li key={s.n} className="flex flex-1 items-stretch max-[880px]:flex-col">
            <div
              className={`flex flex-1 flex-col gap-2 rounded-[14px] border p-4 ${
                s.status === "live"
                  ? "border-[rgba(91,140,255,0.30)] bg-[rgba(91,140,255,0.06)]"
                  : "border-white/[0.08] bg-white/[0.015]"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`font-mono text-[11px] tracking-[0.10em] ${
                    s.status === "live" ? "text-accent" : "text-muted2"
                  }`}
                >
                  {s.n}
                </span>
                {s.status === "live" && (
                  <span className="h-[6px] w-[6px] rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
                )}
              </div>
              <span
                className={`text-[15px] font-semibold leading-[1.25] ${
                  s.status === "live" ? "text-white" : "text-[#8A909C]"
                }`}
              >
                {s.name}
              </span>
              <span className="text-[12.5px] leading-[1.45] text-muted2">{s.leak}</span>
            </div>

            {i < STAGES.length - 1 && (
              <div
                aria-hidden="true"
                className="flex w-7 flex-none items-center justify-center text-[15px] text-muted3 max-[880px]:h-5 max-[880px]:w-full"
              >
                <span className="max-[880px]:hidden">→</span>
                <span className="hidden max-[880px]:inline">↓</span>
              </div>
            )}
          </li>
        ))}
      </ol>

      <p className="m-0 mt-5 border-t border-white/[0.06] pt-4 text-[13px] leading-[1.6] text-muted2">
        <span aria-hidden="true" className="mr-2 text-accent">
          ↺
        </span>
        Stage 05 feeds straight back into stage 01 — a paid, happy customer is how you get found
        next time. The money doesn&apos;t leak inside the stages; it leaks at the handoffs between
        them.
      </p>
    </div>
  );
}
