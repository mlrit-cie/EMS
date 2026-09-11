import { useEffect, useRef, useState } from "react";

const FAKE_PATHS = ["/", "/events", "/clubs", "/calendar"];

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase]         = useState<"loading" | "split">("loading");
  const [progress, setProgress]   = useState(0);
  const [pathIndex, setPathIndex] = useState(0);
  const frameRef = useRef<number>(0);

  // Progress counter
  useEffect(() => {
    const start    = Date.now();
    const duration = 3200;
    function tick() {
      const p = Math.min((Date.now() - start) / duration, 1);
      setProgress(Math.round(p * p * 100));
      if (p < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setPhase("split"), 350);
        setTimeout(onDone, 1350);
      }
    }
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [onDone]);

  // Cycle paths to trigger BrandMark 180° spin
  useEffect(() => {
    const t = setInterval(() => setPathIndex(i => (i + 1) % FAKE_PATHS.length), 600);
    return () => clearInterval(t);
  }, []);

  const splitting = phase === "split";

  return (
    <>
      {/* Top curtain slides UP */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0,
        height: "50%",
        background: "var(--clr-orange)",
        zIndex: 9999,
        transform: splitting ? "translateY(-100%)" : "translateY(0)",
        transition: splitting ? "transform 0.95s cubic-bezier(0.76,0,0.24,1)" : "none",
        overflow: "hidden",
        cursor: "none",
      }} />

      {/* Logo — truly outside curtains, perfectly centered */}
      {!splitting && (
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          zIndex: 10001,
          pointerEvents: "none",
          cursor: "none",
        }}>
          <div style={{ transform: "scale(3)", marginBottom: "1rem" }}>
            <SpinningMark pathIndex={pathIndex} />
          </div>
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.65)",
            margin: 0,
          }}>
            EMS · MLRIT
          </p>
        </div>
      )}

      {/* Bottom curtain slides DOWN */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        height: "50%",
        background: "var(--clr-orange)",
        zIndex: 9999,
        transform: splitting ? "translateY(100%)" : "translateY(0)",
        transition: splitting ? "transform 0.95s cubic-bezier(0.76,0,0.24,1)" : "none",
        overflow: "hidden",
        cursor: "none",
      }}>
        {/* Progress number — bottom-right */}
        {!splitting && (
          <div style={{
            position: "absolute",
            bottom: "1.5rem",
            right: "2rem",
            lineHeight: 1,
            fontFamily: "var(--font-display)",
            fontSize: "clamp(5rem, 18vw, 14rem)",
            fontWeight: 900,
            letterSpacing: "-0.06em",
            color: "#fff",
            fontVariantNumeric: "tabular-nums",
          }}>
            {String(progress).padStart(2, "0")}
            <span style={{ fontSize: "0.35em", letterSpacing: "0.05em" }}>%</span>
          </div>
        )}

        {/* Tagline */}
        {!splitting && (
          <p style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "var(--font-display)",
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            margin: 0,
            whiteSpace: "nowrap",
          }}>
            Campus Events, Reframed.
          </p>
        )}
      </div>

      {/* White cursor dot */}
      {!splitting && <CursorDot />}
    </>
  );
}

function SpinningMark({ pathIndex }: { pathIndex: number }) {
  const colors = [
    { c1: "var(--clr-purple)", c2: "var(--clr-orange)" },
    { c1: "var(--clr-orange)", c2: "var(--clr-purple)" },
    { c1: "var(--clr-purple)", c2: "var(--clr-orange)" },
    { c1: "var(--clr-orange)", c2: "var(--clr-purple)" },
  ];
  const [rotation, setRotation] = useState(0);
  const [activeColors, setActiveColors] = useState({ c1: "#fff", c2: "#fff" });
  const prevIndex = useRef(pathIndex);

  useEffect(() => {
    if (prevIndex.current === pathIndex) return;
    prevIndex.current = pathIndex;
    setRotation(r => r + 180);
    setTimeout(() => setActiveColors({ c1: "#fff", c2: "#fff" }), 300);
  }, [pathIndex]);

  return (
    <span
      className="site-brand-mark"
      aria-hidden="true"
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <span style={{ borderColor: activeColors.c1 }} />
      <span style={{ borderColor: activeColors.c2 }} />
    </span>
  );
}

function CursorDot() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (ref.current) {
        ref.current.style.left = `${e.clientX}px`;
        ref.current.style.top  = `${e.clientY}px`;
      }
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={ref} style={{
      position: "fixed",
      width: 10, height: 10,
      borderRadius: "50%",
      background: "#fff",
      transform: "translate(-50%,-50%)",
      pointerEvents: "none",
      zIndex: 10002,
    }}/>
  );
}
