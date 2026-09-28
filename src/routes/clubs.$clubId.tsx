import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, CalendarDays, MapPin, Sparkles, Users } from "lucide-react";
import { SiteFooter } from "@/components/site-shell";
import { clubs, events } from "@/lib/ems-data";

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

export const Route = createFileRoute("/clubs/$clubId")({
  head: ({ params }) => {
    const c = clubs.find(x => x.id === params.clubId);
    const title = c ? `${c.name} — EMS.MLRIT` : "Club — EMS.MLRIT";
    return {
      meta: [
        { title },
        { name: "description", content: c?.focus ?? "MLRIT student club." },
        { property: "og:title", content: title },
        { property: "og:description", content: c?.focus ?? "MLRIT student club." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ClubPage,
});

function ClubPage() {
  const { clubId } = Route.useParams();
  const c = clubs.find(x => x.id === clubId) ?? clubs[0];
  if (!c) return null;

  // Filter events that belong to this club (by name match) or show all if none
  const clubEvents = events.filter(e =>
    e.club?.toLowerCase() === c.name.toLowerCase() ||
    e.club?.toLowerCase() === clubId
  );
  const displayEvents = clubEvents.length > 0 ? clubEvents : events.slice(0, 3);
  const featuredClubEvent = displayEvents.find(e => e.id === "equinox-2.0") ?? displayEvents[0];

  const logoSrc = CLUB_LOGOS[c.id];

  return (
    <main style={{ background: "linear-gradient(180deg, #0a0614 0%, #0e0a1a 40%, #15101f 100%)", minHeight: "100vh" }}>

      {/* ── Hero Section ── */}
      <section style={{ position: "relative", overflow: "hidden", paddingTop: "76px" }}>
        {/* Ambient glow */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          background: "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(131,56,236,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(251,86,7,0.10) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />

        <div className="page-gutter" style={{ position: "relative", zIndex: 1, maxWidth: "1400px", margin: "0 auto", paddingTop: "4rem", paddingBottom: "5rem" }}>
          {/* Back link */}
          <Link
            to="/clubs"
            style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              color: "var(--clr-orange)", fontWeight: 600, fontSize: "0.8rem",
              letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
              marginBottom: "3rem",
            }}
          >
            <ArrowLeft size={14} /> All clubs
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "flex-start" }}>
            {/* Left: Club identity */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
                <Sparkles size={16} color="var(--clr-orange)" />
                <span style={{
                  fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em",
                  textTransform: "uppercase", color: "var(--clr-orange)",
                }}>
                  {c.category === "main" ? "Campus-wide Club" : "Department Chapter"}
                </span>
              </div>
              <h1 style={{
                fontSize: "clamp(3.5rem, 9vw, 7rem)", fontWeight: 900,
                letterSpacing: "-0.03em", lineHeight: 1, margin: 0,
                color: "var(--clr-white)",
              }}>
                {c.name}
              </h1>
              <p style={{
                marginTop: "1.5rem", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                color: "rgba(233,236,239,0.65)", maxWidth: "520px", lineHeight: 1.5,
              }}>
                {c.focus}
              </p>

              {/* Stats row */}
              <div style={{ display: "flex", gap: "2rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
                {[
                  { label: "Community", value: "Active" },
                  { label: "Events hosted", value: `${displayEvents.length}+` },
                  { label: "Campus", value: "MLRIT" },
                ].map(stat => (
                  <div key={stat.label} style={{
                    padding: "1rem 1.5rem",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                  }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--clr-white)", lineHeight: 1 }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: "0.72rem", letterSpacing: "0.08em", color: "rgba(233,236,239,0.45)", marginTop: "4px", textTransform: "uppercase" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Logo Card */}
            <div style={{
              width: "clamp(140px, 18vw, 220px)",
              aspectRatio: "1",
              borderRadius: "24px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(20px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(131,56,236,0.15)",
              flexShrink: 0,
            }}>
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt={`${c.name} logo`}
                  style={{ width: "80%", height: "80%", objectFit: "contain" }}
                />
              ) : (
                <span style={{
                  fontSize: "3rem", fontWeight: 900, letterSpacing: "0.15em",
                  color: "var(--clr-white)", opacity: 0.7,
                }}>
                  {c.name.slice(0, 2).toUpperCase()}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Divider gradient */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(131,56,236,0.4) 30%, rgba(251,86,7,0.4) 70%, transparent)",
        }} />
      </section>

      {/* ── About Section ── */}
      <section style={{ padding: "5rem 0" }}>
        <div className="page-gutter" style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem",
            alignItems: "center",
          }}>
            <div>
              <p style={{
                fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "var(--clr-purple)", marginBottom: "1rem",
              }}>About the club</p>
              <h2 style={{
                fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.15,
                color: "var(--clr-white)", margin: 0,
              }}>
                Built by students,<br />open to ideas.
              </h2>
            </div>
            <p style={{
              fontSize: "1.15rem", lineHeight: 1.75,
              color: "rgba(233,236,239,0.6)", margin: 0,
            }}>
              {c.name} is part of the MLRIT student community, bringing people together through{" "}
              <span style={{ color: "rgba(233,236,239,0.9)", fontWeight: 500 }}>
                {c.focus.toLowerCase()}
              </span>
              . We welcome everyone who's curious, driven, and ready to collaborate.
            </p>
          </div>
        </div>
      </section>

      {/* ── Events Section ── */}
      <section style={{ padding: "2rem 0 6rem" }}>
        <div className="page-gutter" style={{ maxWidth: "1400px", margin: "0 auto" }}>
          {/* Section header */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", gap: "1rem", flexWrap: "wrap" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.5rem" }}>
                <Users size={14} color="var(--clr-orange)" />
                <span style={{
                  fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em",
                  textTransform: "uppercase", color: "var(--clr-orange)",
                }}>
                  {clubEvents.length > 0 ? "Club Events" : "Featured Events"}
                </span>
              </div>
              <h2 style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800,
                color: "var(--clr-white)", margin: 0, lineHeight: 1.1,
              }}>
                {clubEvents.length > 0 ? `Events by ${c.name}` : "Upcoming Experiences"}
              </h2>
            </div>
            <Link
              to="/events"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "0.6rem 1.2rem",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "50px",
                color: "rgba(233,236,239,0.7)",
                fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.05em",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(131,56,236,0.15)";
                e.currentTarget.style.borderColor = "rgba(131,56,236,0.4)";
                e.currentTarget.style.color = "var(--clr-white)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "rgba(233,236,239,0.7)";
              }}
            >
              All events <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Events Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.25rem",
          }}>
            {displayEvents.map((event, idx) => (
              <Link
                key={event.id}
                to="/events/$id"
                params={{ id: event.id }}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: idx === 0
                      ? "linear-gradient(135deg, rgba(131,56,236,0.18) 0%, rgba(14,10,26,0.95) 100%)"
                      : "rgba(255,255,255,0.03)",
                    border: idx === 0
                      ? "1px solid rgba(131,56,236,0.3)"
                      : "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "18px",
                    padding: "1.75rem",
                    cursor: "pointer",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                    height: "100%",
                    display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "1.5rem",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(131,56,236,0.25)";
                    el.style.borderColor = "rgba(131,56,236,0.35)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                    el.style.borderColor = idx === 0 ? "rgba(131,56,236,0.3)" : "rgba(255,255,255,0.07)";
                  }}
                >
                  <div>
                    {/* Type badge */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                      <span style={{
                        display: "inline-block",
                        padding: "3px 10px",
                        borderRadius: "50px",
                        background: idx === 0 ? "rgba(131,56,236,0.3)" : "rgba(255,255,255,0.06)",
                        border: `1px solid ${idx === 0 ? "rgba(131,56,236,0.5)" : "rgba(255,255,255,0.1)"}`,
                        color: idx === 0 ? "#c084fc" : "rgba(233,236,239,0.55)",
                        fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                      }}>
                        {event.type}
                      </span>
                      <ArrowUpRight size={16} color="rgba(233,236,239,0.3)" />
                    </div>

                    <h3 style={{
                      fontSize: "1.3rem", fontWeight: 700, color: "var(--clr-white)",
                      margin: 0, lineHeight: 1.2, marginBottom: "0.75rem",
                    }}>
                      {event.title}
                    </h3>
                    <p style={{
                      fontSize: "0.9rem", color: "rgba(233,236,239,0.5)",
                      margin: 0, lineHeight: 1.6,
                    }}>
                      {event.description}
                    </p>
                  </div>

                  {/* Meta info */}
                  <div style={{
                    display: "flex", gap: "1.25rem", flexWrap: "wrap",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    paddingTop: "1rem",
                  }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.78rem", color: "rgba(233,236,239,0.45)" }}>
                      <CalendarDays size={12} /> {event.date}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.78rem", color: "rgba(233,236,239,0.45)" }}>
                      <MapPin size={12} /> {event.venue}
                    </span>
                    {event.price && (
                      <span style={{
                        marginLeft: "auto",
                        fontSize: "0.78rem", fontWeight: 700,
                        color: event.price === "Free" ? "#4ade80" : "var(--clr-orange)",
                      }}>
                        {event.price}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state */}
          {displayEvents.length === 0 && (
            <div style={{
              textAlign: "center", padding: "5rem 2rem",
              background: "rgba(255,255,255,0.02)", borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              <p style={{ color: "rgba(233,236,239,0.4)", fontSize: "1rem" }}>
                No events listed yet — check back soon.
              </p>
              <Link to="/events" style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                marginTop: "1.5rem", padding: "0.7rem 1.5rem",
                background: "var(--clr-purple)", color: "#fff",
                borderRadius: "50px", fontWeight: 600, fontSize: "0.85rem",
                textDecoration: "none",
              }}>
                Browse all events <ArrowUpRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section style={{
        margin: "0 0 5rem",
        padding: "3rem",
        background: "linear-gradient(135deg, rgba(131,56,236,0.15) 0%, rgba(251,86,7,0.08) 100%)",
        border: "1px solid rgba(131,56,236,0.2)",
        borderRadius: "24px",
        maxWidth: "1400px",
        marginLeft: "auto", marginRight: "auto",
      }}
        className="page-gutter"
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
          <div>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--clr-white)", margin: 0 }}>
              Join {c.name}
            </h2>
            <p style={{ color: "rgba(233,236,239,0.5)", marginTop: "0.5rem", fontSize: "0.95rem" }}>
              Be part of the community shaping {c.focus.toLowerCase()}.
            </p>
          </div>
          <Link
            to="/clubs"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "0.85rem 2rem",
              background: "var(--clr-orange)",
              color: "#fff",
              borderRadius: "50px",
              fontWeight: 700, fontSize: "0.9rem",
              textDecoration: "none",
              letterSpacing: "0.04em",
              boxShadow: "0 8px 24px rgba(251,86,7,0.35)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(251,86,7,0.5)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(251,86,7,0.35)";
            }}
          >
            Explore all clubs <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}