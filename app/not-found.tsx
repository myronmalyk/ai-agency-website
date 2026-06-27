import type { Metadata } from "next";
import Link from "next/link";
import { btnPrimary } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "Page not found — Tyvelo" },
  description:
    "This page doesn't exist or has moved. Head back to Tyvelo to get a free AI speed-to-lead demo built for your business.",
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <span className="mb-5 font-mono text-[12px] tracking-[0.18em] text-accent">{"// 404"}</span>
      <h1 className="m-0 mb-4 text-[clamp(40px,8vw,72px)] font-bold leading-[1.02] tracking-[-0.03em]">
        Page not found.
      </h1>
      <p className="m-0 mb-9 max-w-[440px] text-[16px] leading-[1.6] text-muted">
        The page you&apos;re after doesn&apos;t exist or has moved. Let&apos;s get you back to
        somewhere useful.
      </p>
      <Link href="/" className={btnPrimary}>
        Back to home →
      </Link>
    </main>
  );
}
