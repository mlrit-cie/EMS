import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { SiteFooter } from '@/components/site-shell';
import { events } from "@/lib/ems-data";
import { useEffect, useRef, useState } from "react";
import { BlurText } from "@/components/BlurText";
import { useParallax } from "@/hooks/useParallax";

const SLIDES = [
  "/events/B2B.png",
  "/events/equniox.png",
  "/events/gi.png",
  "/events/hustle mania.png",
  "/events/metaloop.png",
  "/events/wc 2.0.png",
  "/events/wc.png",
  "/events/welcome-gate.jpg",
];

function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setFading(true);
      setCurrent(c => (c + 1) % SLIDES.length);
      setTimeout(() => { setPrev(null); setFading(false); }, 1200);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      {/* Previous slide — fades out */}
      {prev !== null && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${SLIDES[prev]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: fading ? 0 : 1,
            transform: fading ? "scale(1.04)" : "scale(1)",
            transition: "opacity 1.2s ease, transform 1.2s ease",
          }}
        />
      )}
      {/* Current slide — fades in with a gentle zoom */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${SLIDES[current]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
          animation: "hero-slide-in 6s ease forwards",
        }}
      />

      {/* Layer 1 — deep base darkening so text always reads */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(175deg, rgba(14,10,26,0.55) 0%, rgba(14,10,26,0.82) 100%)",
        }}
      />

      {/* Layer 2 — bottom-up vignette to anchor the text content */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(14,10,26,0.90) 0%, rgba(14,10,26,0.55) 38%, transparent 65%)",
        }}
      />

      {/* Layer 3 — purple radial bloom from top-center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% -5%, rgba(131,56,236,0.42) 0%, transparent 68%)",
        }}
      />

      {/* Layer 4 — orange accent glow, bottom-left warmth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at -5% 105%, rgba(251,86,7,0.22) 0%, transparent 60%)",
        }}
      />

      {/* Layer 5 — grain texture for depth */}
      <div className="hero-grain absolute inset-0" style={{ zIndex: 1 }} />
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "EMS.MLRIT — Campus Events, Reframed" },
    { name: "description", content: "Discover hackathons, workshops, bootcamps, and student clubs with EMS." },
    { property: "og:title", content: "EMS.MLRIT — Campus Events, Reframed" },
    { property: "og:description", content: "Discover hackathons, workshops, bootcamps, and student clubs with EMS." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomePage,
});

function HomePage() {
  const aboutInner   = useParallax<HTMLDivElement>(0.25);
  const whatsOnInner = useParallax<HTMLDivElement>(0.2);
  const planInner    = useParallax<HTMLDivElement>(0.25);

  // Scroll-reveal: sections rise up + fade in as they enter viewport
  const aboutRef   = useRef<HTMLElement>(null);
  const whatsRef   = useRef<HTMLElement>(null);
  const planRef    = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = [aboutRef, whatsRef, planRef];
    sections.forEach(r => {
      if (r.current) {
        r.current.style.opacity = "0";
        r.current.style.transform = "translateY(60px)";
        r.current.style.transition = "opacity 0.9s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94)";
      }
    });

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "translateY(0px)";
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(r => { if (r.current) obs.observe(r.current); });
    return () => obs.disconnect();
  }, []);

  return <main>
    {/* ── Hero ── */}
    <section
      className="relative min-h-[94svh] overflow-hidden"
      style={{ background: "#0e0a1a", color: "var(--clr-white)" }}
    >
      <HeroSlideshow />

      {/* Subtle grid — sits above slideshow overlays for a faint structural texture */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          backgroundImage:
            "repeating-linear-gradient(0deg,rgba(233,236,239,0.035) 0,rgba(233,236,239,0.035) 1px,transparent 1px,transparent 72px)," +
            "repeating-linear-gradient(90deg,rgba(233,236,239,0.035) 0,rgba(233,236,239,0.035) 1px,transparent 1px,transparent 72px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Content ── */}
      
      <div
        classNa  me="page-gutter relative mx-auto flex min-h-[94svh] max-w-[1500px] flex-col justify-end pb-16 md:pb-24"
        style={{ zIndex: 3 }}
      >
        {/* Kicker line */}
        <p
          className="hero-kicker meta mb-6 flex items-center gap-3"
          style={{
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.28em",
            fontFamily: "var(--font-display)",
          }}
        >
          <span
            className="hero-kicker-line h-px w-12 shrink-0"
            style={{ background: "var(--clr-orange)", opacity: 0.8 }}
          />
          Campus event management &nbsp;·&nbsp; MLRIT
        </p>

        {/* Headline */}
        <h1
          className="hero-headline"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.6rem, 11vw, 9.5rem)",
            lineHeight: 0.82,
            fontWeight: 800,
            color: "#fff",
            margin: 0,
            letterSpacing: "-0.03em",
          }}
        >
          {/* Line 1 — light weight, orange, blur-in */}
          <span className="block overflow-hidden">
            <BlurText
              text="Ideas need"
              delay={55}
              duration={750}
              style={{
                display: "block",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                color: "var(--clr-orange)",
                textShadow: "0 0 48px rgba(251,86,7,0.45), 0 0 120px rgba(251,86,7,0.18)",
              }}
            />
          </span>

          {/* Line 2 — heavy italic outline, staggered start */}
          <span className="block overflow-hidden">
            <BlurText
              text="A place."
              delay={80}
              duration={900}
              style={{
                display: "block",
                fontWeight: 900,
                fontStyle: "italic",
                letterSpacing: "-0.055em",
                WebkitTextStroke: "2.5px rgba(255,255,255,0.92)",
                color: "transparent",
                textTransform: "uppercase",
                /* Subtle purple fill visible through the stroke */
                textShadow: "0 0 80px rgba(131,56,236,0.25)",
              }}
            />
          </span>
        </h1>

        {/* Sub-copy + CTA */}
        <div
          className="hero-body mt-10 grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end"
        >
          <p
            className="max-w-lg text-base md:text-lg"
            style={{
              color: "rgba(255,255,255,0.60)",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              lineHeight: 1.65,
            }}
          >
            Discover hackathons, workshops, bootcamps and the clubs shaping
            campus culture — from proposal to a full house.
          </p>

          {/* CTA — orange fill, glow-ring on hover */}
          <Link
            to="/events"
            className="hero-cta inline-flex min-h-[3.25rem] shrink-0 items-center justify-center gap-3 px-8 font-display text-sm font-bold uppercase tracking-widest"
            style={{
              background: "var(--clr-orange)",
              color: "#fff",
            }}
          >
            Explore events
            <ArrowUpRight className="size-[1.1rem] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Stats row */}
        <div
          className="hero-stats mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t pt-8"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {[
            ["12+", "Active clubs"],
            ["40+", "Events this year"],
            ["3K+", "Students reached"],
          ].map(([n, l]) => (
            <div key={l} className="hero-stat-item">
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.7rem, 3.5vw, 2.1rem)",
                  fontWeight: 800,
                  color: "#fff",
                  margin: 0,
                  letterSpacing: "-0.03em",
                }}
              >
                {n}
              </p>
              <p
                className="meta mt-1"
                style={{ color: "rgba(255,255,255,0.38)", letterSpacing: "0.16em" }}
              >
                {l}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicator dots */}
    </section>

    {/* ── About / System ── */}
<section
  ref={aboutRef}
  className="section-pad page-gutter overflow-hidden"
  style={{
    background:
      "linear-gradient(135deg, var(--clr-black) 0%, #17131f 55%, #21142b 100%)",
    color: "var(--clr-white)",
  }}
>
  <div
    ref={aboutInner}
    className="mx-auto max-w-[1400px]"
    style={{ willChange: "transform" }}
  >
    <div className="grid gap-12 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        <p
          className="meta mb-6 flex items-center gap-3"
          style={{
            color: "var(--clr-orange)",
            letterSpacing: "0.2em",
          }}
        >
          <span
            className="h-px w-10"
            style={{ background: "var(--clr-orange)" }}
          />
          THE SYSTEM
        </p>

        <h2
          className="font-display text-6xl font-semibold uppercase leading-[0.85] tracking-[-0.04em] md:text-8xl lg:text-[9rem]"
          style={{ color: "var(--clr-white)" }}
        >
          One campus.
          <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: "2px rgba(255,255,255,0.8)",
            }}
          >
            Every field.
          </span>
          <br />
          <span style={{ color: "var(--clr-orange)" }}>
            A single map.
          </span>
        </h2>
      </div>

      <div className="md:col-span-4 md:col-start-9">
        <div
          className="relative aspect-square overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--clr-purple), #5b21b6 55%, var(--clr-orange))",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,rgba(255,255,255,0.10) 0,rgba(255,255,255,0.10) 1px,transparent 1px,transparent 32px),repeating-linear-gradient(90deg,rgba(255,255,255,0.10) 0,rgba(255,255,255,0.10) 1px,transparent 1px,transparent 32px)",
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-display text-[7rem] font-black tracking-[-0.08em] md:text-[9rem]"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              EMS
            </span>
          </div>

          <div
            className="absolute bottom-5 left-5 right-5 flex items-end justify-between border-t pt-4"
            style={{ borderColor: "rgba(255,255,255,0.3)" }}
          >
            <span className="meta" style={{ color: "rgba(255,255,255,0.75)" }}>
              MLRIT
            </span>

            <span className="meta" style={{ color: "rgba(255,255,255,0.75)" }}>
              01 / 01
            </span>
          </div>
        </div>
      </div>
    </div>

    <div
      className="mt-20 grid gap-10 border-t pt-10 md:grid-cols-12"
      style={{ borderColor: "rgba(255,255,255,0.18)" }}
    >
      <div className="md:col-span-5">
        <p
          className="text-xl leading-relaxed md:text-2xl"
          style={{ color: "rgba(255,255,255,0.68)" }}
        >
          EMS brings events and clubs into one place — from discovery and
          registration to approval, attendance, and reporting.
        </p>
      </div>

      <div className="md:col-span-7 md:col-start-6">
        <div
          className="grid border-l"
          style={{ borderColor: "rgba(255,255,255,0.18)" }}
        >
          {[
            ["01", "DISCOVER", "Find events, clubs and opportunities across campus."],
            ["02", "REGISTER", "Join what interests you without losing track of dates."],
            ["03", "MANAGE", "A single system for organisers, students and campus activity."],
          ].map(([number, title, description]) => (
            <div
              key={number}
              className="group grid grid-cols-[4rem_1fr] gap-4 border-b p-5 transition-all duration-300 hover:bg-[var(--clr-purple)]"
              style={{ borderColor: "rgba(255,255,255,0.14)" }}
            >
              <span className="meta" style={{ color: "var(--clr-orange)" }}>
                {number}
              </span>

              <div>
                <h3
                  className="font-display text-xl font-bold tracking-wide"
                  style={{ color: "var(--clr-white)" }}
                >
                  {title}
                </h3>

                <p
                  className="mt-2 text-sm"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>  

    {/* ── What's on ── white with purple/orange accents */}
    <section ref={whatsRef} className="section-pad page-gutter overflow-hidden" style={{background:"#ffffff"}}>
      <div ref={whatsOnInner} className="mx-auto max-w-[1400px]" style={{willChange:"transform"}}>
        <div className="mb-12 grid grid-cols-12">
          <h2 className="col-span-8 text-5xl font-semibold md:col-span-4 md:text-7xl" style={{color:"var(--clr-black)"}}>What's on</h2>
          <Link to="/events" className="meta col-span-4 self-end text-right transition-colors hover:text-[var(--clr-orange)]" style={{color:"var(--clr-purple)"}}>All events</Link>
        </div>
        <div className="grid gap-10 lg:grid-cols-12">
          {events.slice(0,2).map((event,index)=>(
            <Link key={event.id} to="/events/$id" params={{id:event.id}}
              className={`group ${index===0?'lg:col-span-7':'lg:col-span-5 lg:pt-24'}`}>
              <div className={`flex items-center justify-center overflow-hidden ${index===0?'aspect-[4/3]':'aspect-[4/5]'}`}
                style={{background: index===0
                  ? "linear-gradient(135deg, var(--clr-purple) 0%, #5b21b6 60%, var(--clr-orange) 120%)"
                  : "linear-gradient(135deg, var(--clr-black) 0%, #2d3748 60%, var(--clr-purple) 120%)"}}>
                <span className="font-display text-4xl font-black tracking-[0.2em]" style={{color:"var(--clr-white)"}}>EMS</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                <span className="meta px-3 py-1.5" style={{background:"var(--clr-purple)", color:"var(--clr-white)"}}>{event.type}</span>
                <span className="meta" style={{color:"var(--clr-black)", opacity:0.5}}>{event.date}</span>
                <span className="meta" style={{color:"var(--clr-black)", opacity:0.5}}>{event.venue}</span>
              </div>
              <h3 className="mt-4 text-3xl font-semibold transition-colors duration-300 group-hover:text-[var(--clr-purple)] md:text-4xl">{event.title}</h3>
              <p className="mt-2 max-w-xl" style={{color:"rgba(33,37,41,0.6)"}}>{event.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ── Plan the month ── charcoal black, purple card tiles */}
    <section ref={planRef} className="section-pad page-gutter overflow-hidden" style={{background:"var(--clr-black)"}}>
      <div ref={planInner} className="mx-auto max-w-[1400px]" style={{willChange:"transform"}}>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="meta mb-5" style={{color:"var(--clr-orange)"}}>Plan the month</p>
            <h2 className="text-5xl font-semibold md:text-6xl" style={{color:"var(--clr-white)"}}>Know where<br/>to be next.</h2>
          </div>
          <div className="grid gap-px md:col-span-8 md:grid-cols-2" style={{background:"rgba(233,236,239,0.08)"}}>
            {events.slice(0,4).map(e=>(
              <Link to="/events/$id" params={{id:e.id}} key={e.id}
                className="group p-6 transition-all duration-300"
                style={{background:"var(--clr-purple)", color:"var(--clr-white)"}}
                onMouseEnter={e2=>{e2.currentTarget.style.background="var(--clr-orange)"}}
                onMouseLeave={e2=>{e2.currentTarget.style.background="var(--clr-purple)"}}>
                <p className="meta" style={{color:"rgba(233,236,239,0.65)"}}>{e.date}</p>
                <h3 className="mt-8 text-2xl font-semibold" style={{color:"var(--clr-white)"}}>{e.title}</h3>
                <p className="mt-2 flex items-center gap-2 text-sm" style={{color:"rgba(233,236,239,0.65)"}}>
                  <MapPin className="size-4"/>{e.venue}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    <SiteFooter />
  </main>;
}
