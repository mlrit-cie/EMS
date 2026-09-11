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
      setTimeout(() => { setPrev(null); setFading(false); }, 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="absolute inset-0" style={{zIndex:0}}>
      {/* Previous image fading out */}
      {prev !== null && (
        <div className="absolute inset-0" style={{
          backgroundImage: `url('${SLIDES[prev]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: fading ? 0 : 1,
          transition: "opacity 1s ease",
        }}/>
      )}
      {/* Current image fading in */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url('${SLIDES[current]}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: fading ? 1 : 1,
        transition: "opacity 1s ease",
      }}/>
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(170deg, rgba(33,37,41,0.72) 0%, rgba(26,20,40,0.85) 100%)",
      }}/>
      {/* Purple glow on top */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(131,56,236,0.35) 0%, transparent 70%)",
      }}/>
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
    {/* ── Hero ── dark purple background, orange accents */}
    <section className="relative min-h-[94svh] overflow-hidden" style={{background:"var(--clr-black)", color:"var(--clr-white)"}}>
      <HeroSlideshow />
      {/* Faint grid texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{zIndex:1,
        backgroundImage: "repeating-linear-gradient(0deg,#E9ECEF 0,#E9ECEF 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#E9ECEF 0,#E9ECEF 1px,transparent 1px,transparent 60px)"
      }}/>
      <div className="page-gutter relative mx-auto flex min-h-[94svh] max-w-[1500px] flex-col justify-end pb-14 md:pb-20" style={{zIndex:2}}>
        {/* Kicker */}
        <p className="meta mb-5 flex items-center gap-3" style={{
          color:"#fff",
          letterSpacing:"0.25em",
          opacity:0.6,
          fontFamily:"var(--font-display)",
        }}>
          <span className="h-px w-10" style={{background:"#fff", opacity:0.5}}/>
          Campus event management
        </p>

        {/* Main headline — BlurText animation, all white */}
        <h1 style={{
          fontFamily:"var(--font-display)",
          fontSize:"clamp(3.4rem, 10.5vw, 9rem)",
          lineHeight:0.84,
          fontWeight:800,
          color:"#fff",
          margin:0,
        }}>
          <span className="block overflow-hidden">
            <BlurText
              text="Ideas need"
              delay={70}
              duration={700}
              style={{
                display:"block",
                fontWeight:300,
                letterSpacing:"-0.03em",
                color:"var(--clr-orange)",
              }}
            />
          </span>
          <span className="block overflow-hidden">
            <BlurText
              text="A place."
              delay={90}
              duration={800}
              style={{
                display:"block",
                fontWeight:900,
                fontStyle:"italic",
                letterSpacing:"-0.05em",
                WebkitTextStroke:"2px #fff",
                color:"transparent",
                textTransform:"uppercase",
              }}
            />
          </span>
        </h1>

        <div className="mt-8 grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <p className="max-w-xl text-base md:text-lg" style={{
            color:"rgba(255,255,255,0.65)",
            fontFamily:"var(--font-sans)",
            fontWeight:400,
            lineHeight:1.6,
          }}>
            Discover hackathons, workshops, bootcamps and the clubs shaping campus culture — from proposal to a full house.
          </p>
          <Link to="/events"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 px-7 font-display text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5"
            style={{background:"#fff", color:"var(--clr-black)"}}>
            Explore events <ArrowUpRight className="size-4"/>
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t pt-8" style={{borderColor:"rgba(255,255,255,0.1)"}}>
          {[["12+","Active clubs"],["40+","Events this year"],["3K+","Students reached"]].map(([n,l])=>(
            <div key={l}>
              <p style={{
                fontFamily:"var(--font-display)",
                fontSize:"1.9rem",
                fontWeight:800,
                color:"#fff",
                margin:0,
              }}>{n}</p>
              <p className="meta mt-0.5" style={{color:"rgba(255,255,255,0.4)", letterSpacing:"0.15em"}}>{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── About / System ── off-white background */}
    <section ref={aboutRef} className="section-pad page-gutter overflow-hidden" style={{background:"var(--clr-white)"}}>
      <div ref={aboutInner} className="mx-auto grid max-w-[1400px] grid-cols-12 gap-y-10 md:gap-x-10" style={{willChange:"transform"}}>
        <div className="col-span-12 md:col-span-4">
          <p className="meta mb-5" style={{color:"var(--clr-purple)"}}>The system</p>
          <h2 className="text-4xl font-semibold leading-[1.02] md:text-6xl" style={{color:"var(--clr-black)"}}>
            One campus.<br/>Every field.<br/>A single map.
          </h2>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6">
          <p className="text-xl leading-relaxed md:text-3xl" style={{color:"rgba(33,37,41,0.75)"}}>
            EMS brings events and clubs into one place — from discovery and registration to approval, attendance, and reporting.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {events.slice(0,3).map(e=>(
              <span key={e.id} className="meta px-3 py-2" style={{border:"1.5px solid var(--clr-purple)", color:"var(--clr-purple)"}}>
                {e.title}
              </span>
            ))}
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
