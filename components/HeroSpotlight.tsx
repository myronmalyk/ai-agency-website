"use client";

import { useEffect, useRef } from "react";

/** Cursor-following spotlight; listens on the parent hero element. */
export default function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    const zone = el?.parentElement;
    if (!el || !zone) return;
    const move = (ev: MouseEvent) => {
      const r = zone.getBoundingClientRect();
      el.style.setProperty("--mx", `${((ev.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty("--my", `${((ev.clientY - r.top) / r.height) * 100}%`);
    };
    zone.addEventListener("mousemove", move);
    return () => zone.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(460px circle at var(--mx,28%) var(--my,30%), rgba(91,140,255,0.14), transparent 60%)",
        transition: "background .15s ease",
      }}
    />
  );
}
