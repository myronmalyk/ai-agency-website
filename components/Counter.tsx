"use client";

import { useEffect, useState } from "react";
import { tween, prefersReducedMotion } from "@/lib/tween";

/** Counts 0 → `to` once on mount, with optional suffix. */
export default function Counter({
  to,
  suffix = "",
  delay = 520,
}: {
  to: number;
  suffix?: string;
  delay?: number;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setVal(to);
      return;
    }
    let cancel: (() => void) | undefined;
    const id = setTimeout(() => {
      cancel = tween(1200, (e) => setVal(Math.round(to * e)));
    }, delay);
    return () => {
      clearTimeout(id);
      cancel?.();
    };
  }, [to, delay]);

  return (
    <>
      {val}
      {suffix}
    </>
  );
}
