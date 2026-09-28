import { useEffect, useRef } from "react";

interface FlowLine {
  offset: number;
  amplitude: number;
  frequency: number;
  speed: number;
  thickness: number;
  opacity: number;
  phase: number;
}

export function LivingHeroBg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationId = 0;
    let width = 0;
    let height = 0;
    let time = 0;
    let lastFrameTime = 0;
    let isIntersecting = false;
    let isPageVisible = document.visibilityState === "visible";
    let isTrackingPointer = false;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.targetX = Math.max(0, Math.min(1, (event.clientX - rect.left) / width));
      mouseRef.current.targetY = Math.max(0, Math.min(1, (event.clientY - rect.top) / height));
    };

    resize();
    window.addEventListener("resize", resize);

    const lines: FlowLine[] = Array.from({ length: 58 }, (_, index) => ({
      offset: index / 57,
      amplitude: 12 + Math.random() * 28,
      frequency: 0.008 + Math.random() * 0.009,
      speed: 0.35 + Math.random() * 0.45,
      thickness: index % 5 === 0 ? 2.4 : 0.8 + Math.random() * 1.2,
      opacity: index % 5 === 0 ? 0.42 : 0.12 + Math.random() * 0.16,
      phase: Math.random() * Math.PI * 2,
    }));
    const verticalLines = lines.slice(0, 22).map((line) => ({
      ...line,
      opacity: line.opacity * 0.32,
      thickness: 0.7,
    }));

    const drawLine = (line: FlowLine, direction: "horizontal" | "vertical") => {
      const isHorizontal = direction === "horizontal";
      const length = isHorizontal ? width + 120 : height + 120;
      const crossLength = isHorizontal ? height : width;
      const base = line.offset * crossLength - 60;
      const pointer = isHorizontal ? mouseRef.current.x * width : mouseRef.current.y * height;

      context.beginPath();
      for (let distance = -60; distance <= length; distance += 12) {
        const wave = Math.sin(distance * line.frequency + time * line.speed + line.phase) * line.amplitude;
        const secondaryWave = Math.sin(distance * 0.003 - time * 0.24 + line.phase) * 16;
        const pointerDistance = distance + 60 - pointer;
        const pointerInfluence = Math.exp(-(pointerDistance * pointerDistance) / 18000);
        const bend = Math.sin(pointerDistance * 0.018) * pointerInfluence * 42;
        const cross = base + wave + secondaryWave + bend;

        if (distance === -60) {
          isHorizontal ? context.moveTo(distance, cross) : context.moveTo(cross, distance);
        } else {
          isHorizontal ? context.lineTo(distance, cross) : context.lineTo(cross, distance);
        }
      }
      context.lineWidth = line.thickness;
      context.strokeStyle = `rgba(255, 255, 255, ${line.opacity})`;
      context.stroke();
    };

    const render = (now: number) => {
      animationId = 0;
      if (!isIntersecting || !isPageVisible) return;
      if (now - lastFrameTime < 1000 / 30) {
        animationId = requestAnimationFrame(render);
        return;
      }
      lastFrameTime = now;
      time += 0.012;
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      const background = context.createLinearGradient(0, 0, width, height);
      background.addColorStop(0, "#2e1065");
      background.addColorStop(0.38, "#4c1d95");
      background.addColorStop(0.72, "#6d28d9");
      background.addColorStop(1, "#312e81");
      context.fillStyle = background;
      context.fillRect(0, 0, width, height);

      const glow = context.createRadialGradient(
        mouse.x * width,
        mouse.y * height,
        0,
        mouse.x * width,
        mouse.y * height,
        Math.min(width, height) * 0.7,
      );
      glow.addColorStop(0, "rgba(216, 180, 254, 0.24)");
      glow.addColorStop(1, "rgba(49, 46, 129, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      context.lineCap = "round";
      context.lineJoin = "round";
      lines.forEach((line) => drawLine(line, "horizontal"));
      verticalLines.forEach((line) => drawLine(line, "vertical"));

      const rippleRadius = 28 + Math.sin(time * 1.8) * 8;
      context.beginPath();
      context.arc(mouse.x * width, mouse.y * height, rippleRadius, 0, Math.PI * 2);
      context.strokeStyle = "rgba(255, 255, 255, 0.55)";
      context.lineWidth = 1.5;
      context.stroke();

      animationId = requestAnimationFrame(render);
    };

    const updateAnimation = () => {
      if (isIntersecting && isPageVisible) {
        if (animationId === 0) animationId = requestAnimationFrame(render);
        if (!isTrackingPointer) {
          window.addEventListener("mousemove", onMouseMove, { passive: true });
          isTrackingPointer = true;
        }
      } else if (animationId !== 0) {
        cancelAnimationFrame(animationId);
        animationId = 0;
      }
      if ((!isIntersecting || !isPageVisible) && isTrackingPointer) {
        window.removeEventListener("mousemove", onMouseMove);
        isTrackingPointer = false;
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
      updateAnimation();
    }, { rootMargin: "80px" });
    const handleVisibilityChange = () => {
      isPageVisible = document.visibilityState === "visible";
      updateAnimation();
    };

    observer.observe(container);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(1, 85, 125, 0.12), transparent 42%, rgba(1, 61, 111, 0.3))" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 90% 80% at 50% 42%, transparent 35%, rgba(0, 54, 103, 0.34) 100%)" }}
      />
    </div>
  );
}
