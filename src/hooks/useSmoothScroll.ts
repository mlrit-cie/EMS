import { useEffect } from "react";

/**
 * Replaces native scroll with a slow, buttery smooth eased scroll.
 * Intercepts wheel events and animates manually using requestAnimationFrame.
 */
export function useSmoothScroll() {
  useEffect(() => {
    let current = window.scrollY;
    let target = window.scrollY;
    let raf: number | null = null;
    const ease = 0.16;

    function clampTarget() {
      target = Math.max(0, Math.min(target, document.documentElement.scrollHeight - window.innerHeight));
    }

    function onWheel(e: WheelEvent) {
      if (e.ctrlKey) return;
      e.preventDefault();
      const multiplier = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1;
      target += e.deltaY * multiplier;
      clampTarget();
      if (!raf) loop();
    }

    function loop() {
      const diff = target - current;
      if (Math.abs(diff) < 0.5) {
        current = target;
        window.scrollTo({ top: current, behavior: "instant" });
        raf = null;
        return;
      }
      current += diff * ease;
      window.scrollTo({ top: current, behavior: "instant" });
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
