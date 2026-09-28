import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, CalendarDays, MapPin, Sparkles, Ticket } from "lucide-react";
import { events } from "@/lib/ems-data";

export const Route = createFileRoute("/events/$id")({
  head: ({ params }) => {
    const e = events.find((x) => x.id === params.id);
    const title = e ? `${e.title} — EMS.MLRIT` : "Event — EMS.MLRIT";
    const description = e?.description ?? "Event information from EMS.MLRIT.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: EventPage,
});

function EventPage() {
  const { id } = Route.useParams();
  const e = events.find((x) => x.id === id) ?? events[0];
  if (!e) return null;

  const related = events.filter((item) => item.id !== e.id).slice(0, 3);
  const heroImage = e.id === "equinox-2.0" ? "/events/equinox.jpeg" : null;
  const experienceHighlights =
    e.id === "equinox-2.0"
      ? ["Startup challenges", "Pitch decks", "Brand battles", "Networking", "Live experiences", "Entertainment"]
      : [];

  const detailStats = [
    { label: "Date", value: e.date },
    { label: "Venue", value: e.venue },
    { label: "Type", value: e.type },
    { label: "Price", value: e.price },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0d0d12 0%, #17151f 100%)",
        color: "#f5f5f7",
        paddingTop: "90px",
      }}
    >
      <div
        className="page-gutter"
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          paddingBottom: "80px",
        }}
      >
        <Link
          to="/events"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#f7b267",
            textDecoration: "none",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontSize: "0.75rem",
            marginBottom: "2rem",
          }}
        >
          <ArrowLeft size={16} /> All events
        </Link>

        <section style={{ display: "grid", gridTemplateColumns: "1.3fr 0.7fr", alignItems: "start", gap: "1.25rem", marginTop: "0.5rem" }}>
          <div
            style={{
              background: "linear-gradient(145deg, rgba(35,27,48,0.92) 0%, rgba(18,18,24,0.96) 72%)",
              borderRadius: "28px",
              padding: "clamp(1.4rem, 3vw, 2.4rem)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
              color: "#f5f5f7",
              display: "flex",
              flexDirection: "column",
              margin: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                marginBottom: "1.75rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#ff9a52",
                }}
              >
                Featured experience
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 10px",
                  borderRadius: "999px",
                  background: "rgba(255, 138, 61, 0.12)",
                  color: "#ffad70",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                <Sparkles size={12} /> {e.club}
              </span>
            </div>

            <h1
              style={{
                margin: 0,
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                letterSpacing: "-0.08em",
                lineHeight: 0.82,
                fontSize: "clamp(4rem, 8vw, 9rem)",
                textTransform: "uppercase",
                color: "#ffffff",
              }}
            >
              {e.title}
            </h1>

            <p
              style={{
                marginTop: "2rem",
                maxWidth: "640px",
                fontSize: "clamp(1.15rem, 2vw, 1.65rem)",
                lineHeight: 1.38,
                color: "rgba(245, 245, 247, 0.72)",
              }}
            >
              {e.description}
            </p>

            <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {e.type && (
                <span
                  style={{
                    display: "inline-flex",
                    padding: "0.6rem 0.9rem",
                    borderRadius: "999px",
                    background: "#ff8a3d",
                    color: "#17151b",
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {e.type}
                </span>
              )}
              {e.date && (
                <span
                  style={{
                    display: "inline-flex",
                    padding: "0.6rem 0.9rem",
                    borderRadius: "999px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "#f5f5f7",
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {e.date}
                </span>
              )}
            </div>

            {experienceHighlights.length > 0 && (
              <div style={{ marginTop: "2.5rem" }}>
                <div
                  style={{
                    marginBottom: "1rem",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(245,245,247,0.56)",
                  }}
                >
                  Two days of ideas, competition & opportunity
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "0.7rem" }}>
                  {experienceHighlights.map((highlight, index) => (
                    <div
                      key={highlight}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.8rem",
                        minHeight: "58px",
                        padding: "0.8rem 1rem",
                        borderRadius: "12px",
                        border: "1px solid rgba(255,255,255,0.08)",
                        background: "rgba(255,255,255,0.035)",
                      }}
                    >
                      <span style={{ color: "#ff9a52", fontSize: "0.72rem", fontWeight: 800 }}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span style={{ fontSize: "0.88rem", fontWeight: 700, lineHeight: 1.25 }}>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside
            style={{
              background: "linear-gradient(180deg, rgba(17,17,21,0.96), rgba(23,18,36,0.94))",
              borderRadius: "28px",
              padding: "1.2rem",
              boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              margin: 0,
            }}
          >
            {heroImage ? (
              <div
                style={{
                  overflow: "hidden",
                  borderRadius: "20px",
                  minHeight: "300px",
                  background: "#1b122b",
                }}
              >
                <img
                  src={heroImage}
                  alt={e.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            ) : (
              <div
                style={{
                  borderRadius: "20px",
                  minHeight: "300px",
                  background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(251,86,7,0.18), rgba(19,18,24,0.96))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "4rem",
                  letterSpacing: "-0.08em",
                  color: "#f5f5f7",
                }}
              >
                EMS
              </div>
            )}

            <div style={{ display: "grid", gap: "0.9rem" }}>
              {detailStats.map((item) => (
                <div
                  key={item.label}
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.09)",
                    paddingBottom: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.68rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.58)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.35rem",
                      fontWeight: 800,
                      lineHeight: 1.2,
                      color: "#f5f5f7",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={e.id === "equinox-2.0" ? "https://equinox-2.0.mlritcie.in/" : "#register"}
              target={e.id === "equinox-2.0" ? "_blank" : undefined}
              rel={e.id === "equinox-2.0" ? "noreferrer" : undefined}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                background: "linear-gradient(135deg, #ff8a3d 0%, #ff6a3d 100%)",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "18px",
                padding: "1rem 1.1rem",
                fontFamily: "var(--font-display)",
                fontSize: "0.82rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                boxShadow: "0 18px 32px rgba(255, 106, 61, 0.25)",
              }}
            >
              Register now <ArrowUpRight size={18} />
            </a>
          </aside>
        </section>

        <section
          id="register"
          style={{
            marginTop: "1.5rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #ff8a3d 0%, #ff6a3d 100%)",
              borderRadius: "24px",
              padding: "1.7rem",
              minHeight: "230px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                opacity: 0.9,
              }}
            >
              Save your seat
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                letterSpacing: "-0.07em",
                lineHeight: 0.8,
              }}
            >
              {e.price}
            </div>
          </div>

          <div
            style={{
              background: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)",
              borderRadius: "24px",
              padding: "1.7rem",
              minHeight: "230px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                opacity: 0.9,
              }}
            >
              What to expect
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                letterSpacing: "-0.07em",
                lineHeight: 0.8,
                textTransform: "uppercase",
              }}
            >
              Show up curious
            </div>
          </div>
        </section>

        <section style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.2rem" }}>
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "1.5rem",
            }}
          >
            <CalendarDays size={22} color="#ff8a3d" />
            <div
              style={{
                marginTop: "1rem",
                fontSize: "0.7rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Date & Time
            </div>
            <div
              style={{
                marginTop: "0.7rem",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "2rem",
                lineHeight: 1.05,
                letterSpacing: "-0.05em",
              }}
            >
              {e.date}
              <br />
              {e.time}
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "1.5rem",
            }}
          >
            <MapPin size={22} color="#ff8a3d" />
            <div
              style={{
                marginTop: "1rem",
                fontSize: "0.7rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Venue
            </div>
            <div
              style={{
                marginTop: "0.7rem",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "2rem",
                lineHeight: 1.05,
                letterSpacing: "-0.05em",
              }}
            >
              {e.venue}
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "1.5rem",
            }}
          >
            <Ticket size={22} color="#ff8a3d" />
            <div
              style={{
                marginTop: "1rem",
                fontSize: "0.7rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Team Size
            </div>
            <div
              style={{
                marginTop: "0.7rem",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "2rem",
                lineHeight: 1.05,
                letterSpacing: "-0.05em",
              }}
            >
              4–5 members
            </div>
          </div>
        </section>

        <section style={{ marginTop: "3rem" }}>
          <div
            style={{
              marginBottom: "1.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#f7b267",
              }}
            >
              More events
            </div>
            <Link
              to="/events"
              style={{
                color: "#f5f5f7",
                textDecoration: "none",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontSize: "0.7rem",
              }}
            >
              Explore all
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1rem" }}>
            {related.map((item) => (
              <Link
                key={item.id}
                to="/events/$id"
                params={{ id: item.id }}
                style={{
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "22px",
                  overflow: "hidden",
                  color: "#f5f5f7",
                  display: "block",
                }}
              >
                <div
                  style={{
                    height: "180px",
                    background: item.id === "equinox-2.0" ? "linear-gradient(135deg, #7c3aed, #1f1a2b)" : "linear-gradient(135deg, #ff8a3d, #1d1a22)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    fontWeight: 800,
                    letterSpacing: "-0.05em",
                  }}
                >
                  {item.id === "equinox-2.0" ? "E" : "EMS"}
                </div>
                <div style={{ padding: "1.2rem" }}>
                  <div
                    style={{
                      fontSize: "0.68rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {item.type}
                  </div>
                  <h3
                    style={{
                      margin: "0.8rem 0 0.4rem",
                      fontFamily: "var(--font-display)",
                      fontSize: "2rem",
                      lineHeight: 0.9,
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <div style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.9rem" }}>{item.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
