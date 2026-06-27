/**
 * setTimeout-based tween — keeps ticking even where rAF / CSS animation
 * are throttled (preview / screenshot contexts). Ported from the original
 * js/main.js. Returns a cancel function that clears all pending timers.
 */
export function tween(
  dur: number,
  onUpdate: (eased: number, progress: number) => void,
  onDone?: () => void,
): () => void {
  const iv = 32;
  const steps = Math.max(1, Math.round(dur / iv));
  let k = 0;
  let handle: ReturnType<typeof setTimeout>;
  const tick = () => {
    k++;
    const p = Math.min(1, k / steps);
    const e = 1 - Math.pow(1 - p, 3);
    onUpdate(e, p);
    if (p < 1) handle = setTimeout(tick, iv);
    else if (onDone) onDone();
  };
  handle = setTimeout(tick, iv);
  return () => clearTimeout(handle);
}

export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
