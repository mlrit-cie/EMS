import { useEffect, useRef } from "react";

/**
 * Scroll-driven card animation:
 * Cards start tilted + scaled down + translated up, then snap into place as they enter the viewport.
 */
export function useScrollCard(delay = 0) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Initial state
    el.style.opacity = "0";
    el.style.transform = "translateY(50px) scale(0.95) rotateX(4deg)";
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`;
    el.style.willChange = "transform, opacity";

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0) scale(1) rotateX(0deg)";
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return ref;
}
