import { useEffect, useState } from "react";

/**
 * AirbrushHeroBg
 * A high-fidelity programmatic clone of the abstract airbrush poster design
 * rendered in electric orange (#FB5607) over deep dark warm obsidian.
 *
 * All shapes and background elements are deeply blurred with feathered,
 * diffused airbrush spray edges (zero sharp vector edges).
 * The primary large cross is positioned directly behind the main headline text.
 */
export function AirbrushHeroBg() {
  const [grainPattern, setGrainPattern] = useState<string>("");

  useEffect(() => {
    // Generate fine stippled spray grain for the authentic airbrush/risograph texture
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imgData = ctx.createImageData(256, 256);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const r1 = Math.random();
      const r2 = Math.random();
      const n = Math.floor((r1 + r2) * 128);
      data[i] = n;
      data[i + 1] = n;
      data[i + 2] = n;
      // Fine airbrush stipple contrast
      data[i + 3] = Math.floor(Math.random() * 50) + 18;
    }
    ctx.putImageData(imgData, 0, 0);
    setGrainPattern(canvas.toDataURL("image/png"));
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden select-none pointer-events-none"
      style={{
        zIndex: 0,
        backgroundColor: "#070302",
      }}
      aria-hidden="true"
    >
      {/* ── 1. Deep Atmospheric Dark Base with Warm Orange Undertone ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 110% 90% at 30% 48%, #1c0903 0%, #0c0502 55%, #050201 100%)",
        }}
      />

      {/* ── 2. Top-Left Atmospheric Blurred Glow ── */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "-15%",
          left: "-12%",
          width: "65vw",
          height: "65vw",
          maxWidth: "800px",
          maxHeight: "800px",
          background:
            "radial-gradient(circle, rgba(251,86,7,0.48) 0%, rgba(251,86,7,0.18) 40%, rgba(251,86,7,0.04) 65%, transparent 80%)",
          filter: "blur(75px)",
          transform: "translate3d(0,0,0)",
        }}
      />

      {/* ── 3. Bottom-Right Atmospheric Blurred Mist ── */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          bottom: "-12%",
          right: "-8%",
          width: "55vw",
          height: "55vw",
          maxWidth: "700px",
          maxHeight: "700px",
          background:
            "radial-gradient(circle, rgba(251,86,7,0.38) 0%, rgba(251,86,7,0.14) 45%, rgba(251,86,7,0.02) 70%, transparent 85%)",
          filter: "blur(70px)",
          transform: "translate3d(0,0,0)",
        }}
      />

      {/* ── 4. PRIMARY LARGE CROSS (Positioned directly in back of the headline text) ── */}
      {/* Centered around ~30% from left, ~46% from top, perfectly backing 'Ideas need A place.' */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "clamp(120px, 28vw, 420px)",
          top: "clamp(240px, 46vh, 440px)",
          transform: "translate(-50%, -50%) rotate(-26deg)",
          width: "clamp(340px, 38vw, 560px)",
          height: "clamp(340px, 38vw, 560px)",
        }}
      >
        {/* Layer 4A: Huge diffuse ambient spray halo */}
        <div
          className="absolute inset-[-25%] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(251,86,7,0.65) 0%, rgba(251,86,7,0.3) 45%, transparent 75%)",
            filter: "blur(90px)",
          }}
        />

        {/* Layer 4B: Wide outer airbrush spray of the cross */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            filter: "blur(58px)",
            opacity: 0.65,
          }}
        >
          <CrossGraphic color="#FB5607" />
        </div>

        {/* Layer 4C: Mid-intensity airbrushed cross body */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            filter: "blur(36px)",
            opacity: 0.82,
          }}
        >
          <CrossGraphic color="#FF7518" />
        </div>

        {/* Layer 4D: Inner luminous core of the cross (feathered blur, ZERO sharp edges) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            filter: "blur(22px)",
            opacity: 0.92,
          }}
        >
          <CrossGraphic color="#FB5607" />
        </div>
      </div>

      {/* ── 5. SECONDARY SMALL CROSS (Floating in bottom-right quadrant, also blurred) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "clamp(50px, 14vw, 220px)",
          bottom: "clamp(80px, 18vh, 180px)",
          transform: "rotate(-24deg)",
          width: "clamp(110px, 12vw, 170px)",
          height: "clamp(110px, 12vw, 170px)",
        }}
      >
        {/* Layer 5A: Small ambient halo */}
        <div
          className="absolute inset-[-30%] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(251,86,7,0.5) 0%, rgba(251,86,7,0.18) 50%, transparent 80%)",
            filter: "blur(35px)",
          }}
        />

        {/* Layer 5B: Outer blurred spray */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            filter: "blur(24px)",
            opacity: 0.68,
          }}
        >
          <CrossGraphic color="#FB5607" />
        </div>

        {/* Layer 5C: Mid-soft blurred cross */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            filter: "blur(14px)",
            opacity: 0.85,
          }}
        >
          <CrossGraphic color="#FF8024" />
        </div>

        {/* Layer 5D: Inner soft core (zero sharp edges) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            filter: "blur(9px)",
            opacity: 0.94,
          }}
        >
          <CrossGraphic color="#FB5607" />
        </div>
      </div>

      {/* ── 6. Authentic Spray-Paint / Airbrush Stipple Noise Texture ── */}
      {grainPattern && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${grainPattern})`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
            mixBlendMode: "overlay",
            opacity: 0.58,
          }}
        />
      )}

      {/* ── 7. Soft Film Grain Micro-Texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: "4px 4px",
          mixBlendMode: "soft-light",
        }}
      />

      {/* ── 8. Soft Edge Vignette to keep text crisp and readable ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 95% 85% at 48% 46%, transparent 45%, rgba(6,2,1,0.48) 82%, rgba(4,1,1,0.85) 100%)",
        }}
      />
    </div>
  );
}

/**
 * CrossGraphic: Symmetrical 4-point chunky cross matching the reference image.
 * Uses rounded bars intersecting at the center.
 */
function CrossGraphic({ color }: { color: string }) {
  return (
    <div className="relative w-full h-full">
      {/* Horizontal chunky bar */}
      <div
        className="absolute top-1/2 left-0 w-full -translate-y-1/2 rounded-[22%]"
        style={{
          height: "36%",
          backgroundColor: color,
        }}
      />
      {/* Vertical chunky bar */}
      <div
        className="absolute left-1/2 top-0 h-full -translate-x-1/2 rounded-[22%]"
        style={{
          width: "36%",
          backgroundColor: color,
        }}
      />
    </div>
  );
}
