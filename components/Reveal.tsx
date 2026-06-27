"use client";

import { createElement, useEffect, useRef, type ElementType, type ReactNode } from "react";
import { prefersReducedMotion } from "@/lib/tween";

/**
 * Staggered fade-up on mount — mirrors the original [data-reveal] behavior.
 * The base `delay` matches the data-reveal numbers from the static build.
 */
export default function Reveal({
  as = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}: {
  as?: ElementType;
  delay?: number;
  className?: string;
  children?: ReactNode;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.classList.add("is-visible");
      return;
    }
    const id = setTimeout(() => el.classList.add("is-visible"), 120 + delay);
    return () => clearTimeout(id);
  }, [delay]);

  return createElement(as, { ref, "data-reveal": true, className, ...rest }, children);
}
