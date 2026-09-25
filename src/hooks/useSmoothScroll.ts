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
    const ease = 0.07; // lower = slower/smoother (range 0.04–0.15)

    function onWheel(e: WheelEvent) {
      e.preventDefault();
      target += e.deltaY * 1.2;
      target = Math.max(0, Math.min(target, document.body.scrollHeight - window.innerHeight));
      if (!raf) loop();
    }

    function loop() {
      const diff = target - current;
      if (Math.abs(diff) < 0.5) {
        current = target;
        window.scrollTo(0, current);
        raf = null;
        return;
      }
      current += diff * ease;
      window.scrollTo(0, current);
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
