import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { SiteFooter } from '@/components/site-shell';
import { clubs } from "@/lib/ems-data";
import { Suspense, lazy, useState, useMemo, useRef, useEffect } from "react";
import { ClubOptionWheel } from "@/components/ClubOptionWheel";

const GalleryTunnel = lazy(async () => {
  const module = await import("@/components/GalleryTunnel");
  return { default: module.GalleryTunnel };
});

const EVENT_IMAGES = [
  "/events/welcome-gate.jpg",
  "/events/B2B.png",
  "/events/equinox.jpeg",
  "/events/gi.png",
  "/events/hustle mania.png",
  "/events/metaloop.png",
  "/events/wc 2.0.png",
  "/events/wc.png",
];

const CLUB_LOGOS: Record<string, string> = {
  cie: "/club-logos/cie.jpeg",
  came: "/club-logos/came.jpeg",
  scope: "/club-logos/scope.jpeg",
  literati: "/club-logos/lit.jpeg",
  apex: "/club-logos/apex.jpeg",
  ewb: "/club-logos/EWB.jpeg",
  csi: "/club-logos/csi.png",
  nss: "/club-logos/nss.jpeg",
  code: "/club-logos/code.jpeg",
  aim: "/club-logos/aim.png",
  squad: "/club-logos/squad.png",
  aero: "/club-logos/areo.jpeg",
  robotics: "/club-logos/robotics.png",
  mun: "/club-logos/mun.jpeg",
};

export const Route = createFileRoute("/clubs/")({
  head: () => ({ meta: [
    { title: "Clubs — EMS.MLRIT" },
    { name: "description", content: "Meet the student clubs shaping innovation and campus culture at MLRIT." },
    { property: "og:title", content: "Clubs — EMS.MLRIT" },
    { property: "og:type", content: "website" },
  ]}),
  component: ClubsPage,
});

function ClubsPage() {
  const navigate = useNavigate();
  const [category, setCategory] = useState<"main" | "dept" | "all">("main");
  const [selectedClubIndex, setSelectedClubIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const mainClubs = useMemo(() => clubs.filter(c => c.category === "main"), []);
  const deptClubs = useMemo(() => clubs.filter(c => c.category === "dept"), []);

  const activeClubsList = useMemo(() => {
    if (category === "main") return mainClubs;
    if (category === "dept") return deptClubs;
    return clubs;
  }, [category, mainClubs, deptClubs]);

  const selectedClub = activeClubsList[selectedClubIndex] ?? activeClubsList[0];

  useEffect(() => {
    const updateSelection = () => {
      const track = trackRef.current;
      if (!track) return;
      const scrollDistance = track.offsetHeight - window.innerHeight;
      if (scrollDistance <= 0) return;
      const progress = Math.max(0, Math.min(1, -track.getBoundingClientRect().top / scrollDistance));
      const nextIndex = Math.round(progress * (activeClubsList.length - 1));
      setSelectedClubIndex((current) => current === nextIndex ? current : nextIndex);
    };

    window.addEventListener("scroll", updateSelection, { passive: true });
    window.addEventListener("resize", updateSelection);
    updateSelection();
    return () => {
      window.removeEventListener("scroll", updateSelection);
      window.removeEventListener("resize", updateSelection);
    };
  }, [activeClubsList.length]);

  const selectClub = (index: number) => {
    setSelectedClubIndex(index);
    const track = trackRef.current;
    if (!track) return;
    const scrollDistance = track.offsetHeight - window.innerHeight;
    if (scrollDistance <= 0) return;
    const progress = index / Math.max(activeClubsList.length - 1, 1);
    const target = window.scrollY + track.getBoundingClientRect().top + progress * scrollDistance;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const changeCategory = (nextCategory: "main" | "dept" | "all") => {
    setCategory(nextCategory);
    setSelectedClubIndex(0);
    requestAnimationFrame(() => {
      const track = trackRef.current;
      if (track) window.scrollTo({ top: window.scrollY + track.getBoundingClientRect().top });
    });
  };

  return (
    <>
      {/* ── Hero ── GalleryTunnel full bleed */}
      <div style={{
        position: "relative",
        height: "60vh",
        minHeight: "500px",
        overflow: "hidden",
        display: "block",
        width: "100%",
        background: "#212529",
      }}>
        <Suspense fallback={null}>
          <GalleryTunnel
            images={EVENT_IMAGES}
            colors={["#212529", "#1a1d21", "#2d3748", "#E9ECEF"]}
            background="#212529"
            lineColor="#ffffff"
            lineOpacity={25}
            grid={3}
            speed={40}
            fade={70}
          />
        </Suspense>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(33,37,41,0.9) 30%, transparent 100%)", zIndex: 1 }} />
        <div className="page-gutter" style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2, paddingBottom: "3rem" }}>
          <div className="mx-auto max-w-[1400px]">
            <p className="meta mb-4" style={{ color: "var(--clr-orange)" }}>Campus communities</p>
            <h1 className="display-lg uppercase" style={{ color: "var(--clr-white)" }}>
              Find your<br/>circle.
            </h1>
            <p className="mt-6 max-w-xl text-lg" style={{ color: "rgba(233,236,239,0.7)" }}>
              {clubs.length} active clubs across main campus and department chapters.
            </p>
          </div>
        </div>
      </div>

      <main
        style={{
          background: "linear-gradient(180deg, #0e0a1a 0%, #15101f 45%, #0e0a1a 100%)",
        }}
      >
        <div id="club-scroll-track" ref={trackRef} style={{ position: "relative", height: `${100 + Math.max(activeClubsList.length - 1, 0) * 38}vh` }}>
          <div style={{ position: "sticky", top: 0, height: "100svh", overflow: "hidden", display: "flex", alignItems: "center", paddingTop: "76px", paddingBottom: "16px" }}>
        <div className="page-gutter" style={{ width: "100%", paddingTop: "clamp(1rem, 2vh, 2rem)", paddingBottom: "clamp(1rem, 2vh, 2rem)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-5">
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <Sparkles className="size-4" style={{ color: "var(--clr-orange)" }} />
                  <p className="meta" style={{ color: "var(--clr-orange)" }}>Interactive Club Showcase</p>
                </div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-5xl" style={{ color: "var(--clr-white)" }}>
                  {category === "main" ? "Campus-Wide Clubs" : category === "dept" ? "Department Chapters" : "All Communities"}
                </h2>
              </div>

              <div
                className="flex items-center rounded-full p-1"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                aria-label="Filter clubs by category"
              >
                {([
                  ["main", `Campus-wide (${mainClubs.length})`],
                  ["dept", `Department (${deptClubs.length})`],
                  ["all", `All (${clubs.length})`],
                ] as const).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={category === value}
                    onClick={() => changeCategory(value)}
                    className="rounded-full px-4 py-2 text-xs font-semibold transition-colors"
                    style={{
                      background: category === value ? "var(--clr-purple)" : "transparent",
                      color: category === value ? "#ffffff" : "rgba(255,255,255,0.62)",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="club-option-layout" style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
              alignItems: "stretch",
              gap: "clamp(1rem, 3vw, 2.5rem)",
            }}>
              <section
                aria-label="Club selector"
                style={{
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "radial-gradient(ellipse at 45% 50%, rgba(131,56,236,0.12), rgba(14,10,26,0.76) 72%)",
                  overflow: "hidden",
                }}
              >
                <ClubOptionWheel
                  key={category}
                  items={activeClubsList.map((club) => club.name)}
                  selectedIndex={selectedClubIndex}
                  onSelect={selectClub}
                />
                <div style={{ padding: "0 1.5rem 1.2rem", textAlign: "right", color: "rgba(255,255,255,0.42)", fontSize: "0.72rem", letterSpacing: "0.12em" }}>
                  {String(selectedClubIndex + 1).padStart(2, "0")} / {String(activeClubsList.length).padStart(2, "0")}
                </div>
              </section>

              {selectedClub && (
                <section
                  aria-live="polite"
                  style={{
                    minWidth: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "1.5rem",
                    padding: "clamp(1.25rem, 3vw, 2rem)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.015))",
                  }}
                >
                  <div
                    className="club-logo-preview"
                    style={{
                      display: "grid",
                      placeItems: "center",
                      minHeight: "250px",
                      flex: 1,
                      overflow: "hidden",
                      borderRadius: "12px",
                      background: "rgba(0,0,0,0.22)",
                    }}
                  >
                    <img
                      key={selectedClub.id}
                      src={CLUB_LOGOS[selectedClub.id] || "/club-logos/cie.jpeg"}
                      alt={`${selectedClub.name} club logo`}
                      loading="lazy"
                      decoding="async"
                      style={{ display: "block", width: "100%", height: "100%", maxHeight: "330px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="meta mb-2" style={{ color: "var(--clr-orange)" }}>
                        {selectedClub.category === "main" ? "Campus-wide club" : "Department chapter"}
                      </p>
                      <h3 className="text-3xl font-semibold md:text-4xl" style={{ color: "var(--clr-white)" }}>
                        {selectedClub.name}
                      </h3>
                      <p className="mt-2 text-sm md:text-base" style={{ color: "rgba(233,236,239,0.66)" }}>
                        {selectedClub.focus}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => navigate({ to: "/clubs/$clubId", params: { clubId: selectedClub.id } })}
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
                      style={{ background: "var(--clr-purple)", color: "#ffffff" }}
                    >
                      Explore club <span aria-hidden="true">↗</span>
                    </button>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
          </div>
        </div>

        <SiteFooter />
      </main>
    </>
  );
}