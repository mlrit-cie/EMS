import { useRef, type PointerEvent } from "react";

interface ClubOptionWheelProps {
  items: string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const ROW_HEIGHT = 58;
const WHEEL_TILT = 0.19;

export function ClubOptionWheel({ items, selectedIndex, onSelect }: ClubOptionWheelProps) {
  const selectedRef = useRef(selectedIndex);
  const suppressClickRef = useRef(false);
  const dragRef = useRef<{
    startY: number;
    startIndex: number;
    pointerId: number;
    moved: boolean;
  } | null>(null);

  selectedRef.current = selectedIndex;

  const select = (index: number) => {
    const nextIndex = Math.max(0, Math.min(items.length - 1, index));
    selectedRef.current = nextIndex;
    onSelect(nextIndex);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    dragRef.current = {
      startY: event.clientY,
      startIndex: selectedRef.current,
      pointerId: event.pointerId,
      moved: false,
    };
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    const distance = drag.startY - event.clientY;
    if (!drag.moved && Math.abs(distance) < 5) return;
    if (!drag.moved) {
      drag.moved = true;
      event.currentTarget.setPointerCapture(drag.pointerId);
    }
    select(drag.startIndex + Math.round(distance / ROW_HEIGHT));
  };

  const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    if (drag.moved) {
      suppressClickRef.current = true;
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 0);
    }
    if (event.currentTarget.hasPointerCapture(drag.pointerId)) {
      event.currentTarget.releasePointerCapture(drag.pointerId);
    }
    dragRef.current = null;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      select(selectedRef.current + 1);
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      select(selectedRef.current - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      select(0);
    } else if (event.key === "End") {
      event.preventDefault();
      select(items.length - 1);
    }
  };

  return (
    <div
      role="listbox"
      aria-label="Choose a club"
      className="club-option-wheel"
      tabIndex={0}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      onKeyDown={handleKeyDown}
      style={{
        position: "relative",
        width: "100%",
        height: "min(440px, 52vh)",
        minHeight: "320px",
        overflow: "hidden",
        outline: "none",
        touchAction: "pan-y",
        cursor: dragRef.current?.moved ? "grabbing" : "grab",
        maskImage: "linear-gradient(transparent, black 18%, black 82%, transparent)",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          right: "4%",
          left: "5%",
          height: "58px",
          transform: "translateY(-50%)",
          borderBlock: "1px solid rgba(255,255,255,0.14)",
          background: "linear-gradient(90deg, rgba(131,56,236,0.15), rgba(131,56,236,0.03))",
          pointerEvents: "none",
        }}
      />
      {items.map((item, index) => {
        const offset = index - selectedIndex;
        const angle = Math.max(-1.1, Math.min(1.1, offset * WHEEL_TILT));
        const radius = ROW_HEIGHT / WHEEL_TILT;
        const x = -radius * (1 - Math.cos(angle)) * 0.85;
        const y = radius * Math.sin(angle);
        const distance = Math.abs(offset);
        const opacity = Math.max(0.12, 1 - distance * 0.22);

        return (
          <button
            key={item}
            type="button"
            role="option"
            className="club-option-wheel__item"
            aria-selected={selectedIndex === index}
            aria-label={`${item}, ${index + 1} of ${items.length}`}
            onClick={() => {
              if (suppressClickRef.current) return;
              select(index);
            }}
            style={{
              position: "absolute",
              top: "50%",
              left: "clamp(12px, 4vw, 48px)",
              width: "calc(100% - 64px)",
              minHeight: `${ROW_HEIGHT}px`,
              padding: "0 12px",
              border: 0,
              background: "transparent",
              color: selectedIndex === index ? "#ffffff" : "rgba(233,236,239,0.76)",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.2rem, 2.2vw, 1.8rem)",
              fontWeight: selectedIndex === index ? 700 : 500,
              lineHeight: 1,
              textAlign: "left",
              whiteSpace: "nowrap",
              cursor: "pointer",
              opacity,
              filter: `blur(${Math.min(distance * 0.35, 1.5)}px)`,
              transform: `translate3d(${x}px, calc(${y}px - 50%), 0) rotate(${angle * 36}deg) scale(${Math.max(0.84, 1 - distance * 0.045)})`,
              transformOrigin: "left center",
              transition: "transform 260ms cubic-bezier(0.22, 1, 0.36, 1), opacity 260ms ease, color 260ms ease, filter 260ms ease",
              willChange: "transform, opacity",
            }}
          >
            <span style={{ color: selectedIndex === index ? "#ff8a3d" : "rgba(255,255,255,0.3)", marginRight: "0.8em" }}>
              {String(index + 1).padStart(2, "0")}
            </span>
            {item}
          </button>
        );
      })}
    </div>
  );
}