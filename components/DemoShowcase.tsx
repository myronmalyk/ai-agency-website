import { hasPublicFile } from "@/lib/assets";

/**
 * Hero demo panel. If a real screen recording has been dropped at
 * /public/video/demo.mp4 it plays that; otherwise it renders a static,
 * clearly-labelled example conversation. No looping simulation — the old
 * "LIVE SIMULATION" widget implied live data that wasn't there.
 *
 * TODO: Record a real 20–40s screen capture of Speed-to-Lead handling an
 * inbound trade lead (form hits → text goes out → timer) and save it to
 * public/video/demo.mp4. This component switches over automatically.
 */
export default function DemoShowcase() {
  const hasVideo = hasPublicFile("video/demo.mp4");

  return (
    <div className="relative">
      <div className="relative rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,#0F1117,#0A0B10)] p-[22px] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9),0_0_0_1px_rgba(91,140,255,0.05)]">
        <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] pb-4">
          <div className="flex items-center gap-2.5 font-mono text-[11.5px] tracking-[0.14em] text-[#C7CCD6]">
            <span className="h-[9px] w-[9px] rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" />
            WEB FORM
          </div>
          <span className="rounded-full border border-[rgba(56,211,159,0.40)] bg-[rgba(56,211,159,0.10)] px-2.5 py-[5px] font-mono text-[10.5px] tracking-[0.12em] text-green">
            ● ANSWERED
          </span>
        </div>

        {hasVideo ? (
          <div className="overflow-hidden rounded-[14px] border border-white/[0.07] py-5">
            <video
              className="block h-auto w-full rounded-[10px]"
              controls
              playsInline
              preload="metadata"
              poster="/images/og-image.png"
            >
              <source src="/video/demo.mp4" type="video/mp4" />
              Your browser can&apos;t play this video. Email {""}
              <a href="mailto:hello@tyvelo.com">hello@tyvelo.com</a> and I&apos;ll send it over.
            </video>
          </div>
        ) : (
          <div className="flex min-h-[200px] flex-col gap-3.5 pb-1.5 pt-5">
            <div className="max-w-[86%] self-start">
              <div className="mb-1.5 font-mono text-[10.5px] tracking-[0.08em] text-muted2">
                SARAH M.
              </div>
              <div className="rounded-[4px_16px_16px_16px] border border-white/[0.07] bg-white/[0.05] px-[15px] py-[13px] text-[14.5px] leading-[1.5] text-[#E8EBF1]">
                Hi — our furnace is short-cycling and we&apos;d like a quote to get it looked at.
                Are you taking jobs this week?
              </div>
            </div>

            <div className="max-w-[88%] self-end">
              <div className="mb-1.5 text-right font-mono text-[10.5px] tracking-[0.08em] text-accent">
                AUTO-REPLY · SENT FOR YOU
              </div>
              <div className="rounded-[16px_4px_16px_16px] bg-accent px-[15px] py-[13px] text-[14.5px] font-medium leading-[1.5] text-[#07080B]">
                Hi Sarah — thanks for reaching out. I can get someone out Thursday at 2pm, or
                Friday morning between 8 and 10. Which suits you better?
              </div>
            </div>
          </div>
        )}

        <div className="border-t border-white/[0.07] pt-4">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="font-mono text-[11px] tracking-[0.10em] text-muted2">
              FIRST REPLY SENT
            </span>
            <span className="font-mono text-[18px] font-medium text-green">0:41</span>
          </div>
          <div className="h-[5px] overflow-hidden rounded-full bg-white/[0.07]">
            <div className="h-full w-full rounded-full bg-[linear-gradient(90deg,var(--color-accent),var(--color-green))]" />
          </div>
        </div>
      </div>

      <div className="mt-4 text-center font-mono text-[10.5px] leading-[1.5] tracking-[0.12em] text-muted2">
        {hasVideo
          ? "RECORDED FROM A REAL SPEED-TO-LEAD RUN"
          : "EXAMPLE — YOUR DEMO RUNS ON YOUR REAL LEADS."}
      </div>
    </div>
  );
}
