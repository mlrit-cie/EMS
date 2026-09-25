import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from '@/components/site-shell';
import { clubs } from "@/lib/ems-data";
import { useEffect } from "react";
import { GalleryTunnel } from "@/components/GalleryTunnel";

const EVENT_IMAGES = [
  "/events/welcome-gate.jpg",
  "/events/B2B.png",
  "/events/equniox.png",
  "/events/gi.png",
  "/events/hustle mania.png",
  "/events/metaloop.png",
  "/events/wc 2.0.png",
  "/events/wc.png",
];

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
  const main = clubs.filter(c => c.category === "main");
  const dept = clubs.filter(c => c.category === "dept");

  // Scroll reveal
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".club-card");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const d = el.dataset.delay ?? "0";
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, parseInt(d));
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.08 });
    cards.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);

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
    background:
      "linear-gradient(180deg, #0e0a1a 0%, #15101f 45%, #0e0a1a 100%)",
  }}
>

      {/* ── Main Clubs ── */}
      <div
  className="page-gutter pt-32 pb-24"
  style={{ background: "transparent" }}
>
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="meta mb-2" style={{ color: "var(--clr-purple)" }}>Main clubs</p>
              <h2 className="text-4xl font-semibold" style={{ color: "var(--clr-white)" }}>Campus-wide</h2>
            </div>
            <span className="meta" style={{ color: "var(--clr-white)", opacity: 0.45 }}>{main.length} clubs</span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}>
            {main.map((c, i) => (
              <ClubCard key={c.id} club={c} delay={i * 60} accent="var(--clr-purple)" />
            ))}
          </div>
        </div>
      </div>

      {/* ── Dept Clubs ── */}
      <div
  className="page-gutter py-24"
  style={{
    background:
      "linear-gradient(180deg, #15101f 0%, #21142b 50%, #15101f 100%)",
  }}
>
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="meta mb-2" style={{ color: "var(--clr-orange)" }}>Department clubs</p>
              <h2 className="text-4xl font-semibold" style={{ color: "var(--clr-white)" }}>By department</h2>
            </div>
            <span className="meta" style={{ color: "var(--clr-white)", opacity: 0.45 }}>{dept.length} clubs</span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}>
            {dept.map((c, i) => (
              <ClubCard key={c.id} club={c} delay={i * 60} accent="var(--clr-purple)" />
            ))}
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
    </>
  );
}

function ClubCard({ club, delay, accent }: {
  club: typeof clubs[0];
  delay: number;
  accent: string;
}) {
  const clubLogos: Record<string, string> = {
    cie: "/club-logos/cie.jpeg",
    came: "/club-logos/came.jpeg",
    scope: "/club-logos/scope.jpeg",
    literati: "/club-logos/lit.jpeg",
    apex: "/club-logos/apex.jpeg",
    ewb: "/club-logos/EWB.jpeg",
    nss: "/club-logos/nss.jpeg",
    code: "/club-logos/code.jpeg",
    aero: "/club-logos/areo.jpeg",
  };

  return (
    <Link
      to="/clubs/$clubId"
      params={{ clubId: club.id }}
      className="club-card group"
      data-delay={delay}
      style={{
        background: "rgba(255,255,255,0.035)",
        padding: "2rem",
        minHeight: "280px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "1.5rem",
        opacity: 0,
        transform: "translateY(32px)",
        transition:
          "opacity 0.65s ease, transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94), background 0.35s ease, box-shadow 0.35s ease",
        textDecoration: "none",
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.09)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;

        el.style.background =
          "linear-gradient(145deg, rgba(131,56,236,0.18), rgba(14,10,26,0.95))";

        el.style.boxShadow =
          "0 20px 60px rgba(131,56,236,0.16)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;

        el.style.background = "rgba(255,255,255,0.035)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Logo */}
      <div
        className="club-logo"
        style={{
          width: "5rem",
          height: "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          overflow: "hidden",
          borderRadius: "1rem",
          background: "#fff",
          border: "1px solid rgba(255,255,255,0.15)",
          transition:
            "transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.4s ease",
        }}
      >
        {clubLogos[club.id] ? (
          <img
            src={clubLogos[club.id]}
            alt={`${club.name} logo`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              padding: "0.45rem",
            }}
          />
        ) : (
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "1rem",
              letterSpacing: "0.05em",
              color: accent,
            }}
          >
            {club.abbr}
          </span>
        )}
      </div>

      {/* Club information */}
      <div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 700,
            color: "var(--clr-white)",
            margin: 0,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          {club.name}
        </h3>

        <p
          style={{
            marginTop: "0.65rem",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.48)",
            lineHeight: 1.5,
            maxWidth: "18rem",
          }}
        >
          {club.focus}
        </p>
      </div>

      {/* Arrow */}
      <div
        className="club-arrow"
        style={{
          position: "absolute",
          right: "1.75rem",
          bottom: "1.75rem",
          width: "2.5rem",
          height: "2.5rem",
          borderRadius: "50%",
          border: `1px solid ${
            accent === "var(--clr-purple)"
              ? "rgba(131,56,236,0.5)"
              : "rgba(251,86,7,0.5)"
          }`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: accent,
          transition:
            "transform 0.3s ease, background 0.3s ease, color 0.3s ease",
        }}
      >
        <ArrowUpRight size={18} />
      </div>

      {/* Bottom accent */}
      <div
        className="club-card-bar"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "35%",
          height: "3px",
          background: accent,
          transition: "width 0.4s ease",
        }}
      />
    </Link>
  );
}