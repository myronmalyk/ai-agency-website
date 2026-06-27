import Link from "next/link";
import Brand from "./Brand";
import type { ReactNode } from "react";

/** Shared chrome for /faq and /privacy: floating nav pill + content + footer. */
export default function SubpageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className="fixed left-1/2 top-5 z-50 w-[calc(100%-40px)] max-w-[900px] -translate-x-1/2">
        <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[rgba(7,8,11,0.72)] px-5 py-3 backdrop-blur-2xl backdrop-saturate-150">
          <Brand href="/" markHeight={24} />
          <Link
            href="/"
            className="font-mono text-[12px] tracking-[0.04em] text-muted no-underline transition-colors hover:text-accent"
          >
            ← Back to home
          </Link>
        </div>
      </nav>

      <main id="main" tabIndex={-1} className="mx-auto max-w-[720px] px-6 pb-[100px] pt-[140px] max-[600px]:pb-20 max-[600px]:pt-[120px]">
        {children}

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-8 text-[13px] text-muted">
          <span>© 2026 Tyvelo. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-muted no-underline transition-colors hover:text-accent">
              Privacy
            </Link>
            <Link href="/" className="text-muted no-underline transition-colors hover:text-accent">
              ← Back to tyvelo.com
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}
