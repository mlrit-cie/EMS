import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MoveDown } from "lucide-react";
import { events } from "@/lib/ems-data";
import { SpacePanel } from "./space";
import { useEffect } from "react";

export const Route = createFileRoute("/events/")({ head:()=>({meta:[{title:"Events — EMS.MLRIT"},{name:"description",content:"Browse MLRIT hackathons, workshops, bootcamps, and campus events with EMS."},{property:"og:title",content:"Events — EMS.MLRIT"},{property:"og:description",content:"Browse MLRIT hackathons, workshops, bootcamps, and campus events with EMS."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}), component: EventsPage });

function EventsPage(){
  useEffect(() => {
    const rows = document.querySelectorAll<HTMLElement>(".event-row-reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.style.getPropertyValue("--row-delay") || "0ms";
          setTimeout(() => el.classList.add("is-visible"), parseInt(delay));
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.1 });
    rows.forEach(r => obs.observe(r));
    return () => obs.disconnect();
  }, []);
  return (
    <main className="event-world bg-background text-foreground">
      <div className="event-frame page-gutter">
        <aside className="event-rail event-panel event-purple"><div className="event-mark" aria-hidden="true"><span/><span/></div><p className="event-rail-kicker">EMS / MLRIT</p><nav className="event-rail-nav" aria-label="Event sections"><a href="#about">About</a><a href="#schedule">Events</a><a href="#community">Community</a><a href="#contact">Contact</a></nav><a href="#schedule" className="event-cta event-orange">Explore schedule <ArrowUpRight /></a></aside>
        <section id="about" className="event-intro">
          <p className="event-kicker event-purple-text">Campus experiences / 2026</p>
          <h1 className="event-display">Make room<br/><span>for what's next.</span></h1>
          <p className="event-intro-copy">A living programme of workshops, challenges, summits and showcases for the people building the next chapter of campus.</p>
          <a className="event-scroll-cue" href="#schedule"><MoveDown /> Scroll to explore</a>
        </section>
        <div className="event-schedule-pair"><section id="schedule" className="event-schedule"><div className="event-section-heading"><p className="event-kicker">Upcoming schedule</p><h2>Meetups &amp;<br/>workshops</h2></div>{events.map((event,index)=><Link key={event.id} to="/events/$id" params={{id:event.id}} className="event-row event-panel event-purple event-row-reveal" style={{"--row-delay":`${index * 80}ms`} as React.CSSProperties}><div className="event-date event-white"><strong>{String(index+6).padStart(2,"0")}</strong><span>OCT</span></div><div className="event-row-content"><ArrowUpRight className="event-row-arrow"/><p className="event-kicker">{event.type}</p><h3>{event.title}</h3><p className="event-row-description">{event.description}</p><div className="event-row-meta"><span>{event.club}</span><span>{event.time}</span></div></div></Link>)}</section><SpacePanel /></div>
        <section id="community" className="event-community"><div className="event-panel event-orange event-stat"><strong>100+</strong><span>active participants</span></div><div className="event-panel event-white event-stat"><strong>06</strong><span>ways to get involved</span></div><div className="event-panel event-purple event-community-copy"><p className="event-kicker">The EMS spirit</p><h2>Bring an idea.<br/>Leave with momentum.</h2><p>Meet curious people, learn in public, and turn campus energy into something real.</p></div></section>
        <footer id="contact" className="event-footer"><div className="event-panel event-purple"><p className="event-kicker">Get in touch</p><h2>See you<br/>at EMS.</h2><a href="mailto:hello@ems.mlrit.in">hello@ems.mlrit.in <ArrowUpRight /></a></div><div className="event-panel event-orange event-footer-next"><p className="event-kicker">Next event</p><h3>{events[0].title}</h3><p>{events[0].date} · {events[0].venue}</p><Link to="/events/$id" params={{id:events[0].id}}>View event <ArrowUpRight /></Link></div></footer>
      </div>
    </main>
  );
}