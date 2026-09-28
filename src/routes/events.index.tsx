import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { useEffect, type CSSProperties } from "react";
import { SiteFooter } from "@/components/site-shell";
import { events } from "@/lib/ems-data";
import { LivingHeroBg } from "@/components/LivingHeroBg";

const EVENT_IMAGES = [
  "/events/equinox.jpeg",
  "/events/wc 2.0.png",
  "/events/B2B.png",
  "/events/gi.png",
  "/events/hustle mania.png",
  "/events/metaloop.png",
];

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events — EMS.MLRIT" },
      {
        name: "description",
        content: "Browse MLRIT hackathons, workshops, bootcamps, and campus events with EMS.",
      },
      { property: "og:title", content: "Events — EMS.MLRIT" },
      {
        property: "og:description",
        content: "Browse MLRIT hackathons, workshops, bootcamps, and campus events with EMS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".events-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const handleCardMove = (event: React.MouseEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty(
      "--pointer-x",
      `${((event.clientX - bounds.left) / bounds.width) * 100}%`,
    );
    card.style.setProperty(
      "--pointer-y",
      `${((event.clientY - bounds.top) / bounds.height) * 100}%`,
    );
  };

  return (
    <main className="events-page">
      <section className="events-hero">
        <LivingHeroBg />
        <div className="page-gutter events-hero-content">
          <div className="events-hero-copy">
            <p className="meta" style={{ color: "var(--clr-purple)" }}>
              Campus experiences / 2026
            </p>
            <h1 className="display-lg">
              Make room
              <br />
              <span>for what's next.</span>
            </h1>
            <p>
              A living programme of workshops, challenges, summits and showcases for the people
              building the next chapter of campus.
            </p>
          </div>
          <a className="events-hero-scroll" href="#schedule">
            <ArrowDownRight /> Scroll to explore
          </a>
        </div>
      </section>

      <section id="schedule" className="events-index page-gutter" style={{ background: "#ffffff" }}>
        <div className="events-index-header">
          <div>
            <p className="meta" style={{ color: "var(--clr-purple)" }}>
              The programme
            </p>
            <h2>
              Find your
              <br />
              <span>next move.</span>
            </h2>
          </div>
          <p className="events-index-note">
            {events.length} ways to learn, build, compete and meet people across MLRIT.
          </p>
        </div>
        <div className="events-grid">
          {events.map((event, index) => {
            const cardImage = event.id === "equinox-2.0" ? "/events/equinox.jpeg" : EVENT_IMAGES[(index + 1) % EVENT_IMAGES.length];
            return (
            <Link
              key={event.id}
              to="/events/$id"
              params={{ id: event.id }}
              data-event-id={event.id}
              className={`events-card events-reveal ${index === 0 ? "events-card-featured" : ""}`}
              style={
                {
                  "--card-delay": `${index * 70}ms`,
                } as CSSProperties
              }
              onMouseMove={handleCardMove}
            >
              <img className="events-card-image" src={cardImage} alt="" aria-hidden="true" loading="lazy" decoding="async" />
              <div className="events-card-overlay" aria-hidden="true" />
              <div className="events-card-top">
                <span>{String(index + 6).padStart(2, "0")} OCT</span>
                <ArrowUpRight />
              </div>
              <div className="events-card-body">
                <p className="meta">{event.type}</p>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="events-card-meta">
                  <span>
                    <CalendarDays /> {event.date}
                  </span>
                  <span>
                    <MapPin /> {event.venue}
                  </span>
                </div>
              </div>
            </Link>
            );
          })}
        </div>
      </section>

      <section id="community" className="events-signal page-gutter">
        <div className="events-signal-stat">
          <strong>06</strong>
          <span>formats to jump into</span>
        </div>
        <div className="events-signal-copy">
          <p className="meta">The EMS spirit</p>
          <h2>
            Bring an idea.
            <br />
            <span>Leave with momentum.</span>
          </h2>
          <p>Meet curious people, learn in public, and turn campus energy into something real.</p>
          <Link to="/clubs" className="events-signal-link">
            Meet the community <ArrowUpRight />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
