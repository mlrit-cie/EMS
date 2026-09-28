import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Clock3, Filter, MapPin, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { SiteFooter } from '@/components/site-shell';
import { Calendar } from "@/components/ui/calendar";

const eventDates = [
  { id: "20000000-0000-4000-8000-000000000001", title: "HackFest 2025", type: "Hackathon", club: "Code Club", venue: "EMS Arena", time: "36 hours", start: new Date(2026, 9, 6), end: new Date(2026, 9, 7), color: "bg-[#ff6a3d]" },
  { id: "20000000-0000-4000-8000-000000000002", title: "AI Workshop Series", type: "Workshop", club: "CIE", venue: "Innovation Lab", time: "10:00 — 16:00", start: new Date(2026, 9, 12), end: new Date(2026, 9, 12), color: "bg-[#ff6a3d]" },
  { id: "20000000-0000-4000-8000-000000000003", title: "Web Development Bootcamp", type: "Bootcamp", club: "Code Club", venue: "CSE Seminar Hall", time: "09:30 — 17:00", start: new Date(2026, 9, 18), end: new Date(2026, 9, 18), color: "bg-[#ff6a3d]" },
  { id: "equinox-2.0", title: "EQUINOX-2.0", type: "Flagship Event", club: "CIE", venue: "MLR Institute of Technology", time: "All day", start: new Date(2026, 9, 30), end: new Date(2026, 9, 31), color: "bg-[#ff6a3d]" },
  { id: "hustle-mania", title: "Hustle Mania", type: "Challenge", club: "CIE", venue: "EMS Arena", time: "All day", start: new Date(2026, 3, 24), end: new Date(2026, 3, 24), color: "bg-[#ff6a3d]" },
  { id: "business-2-brand", title: "Business 2 Brand", type: "Hackathon", club: "Apex", venue: "EMS Arena", time: "Three days", start: new Date(2026, 3, 3), end: new Date(2026, 3, 5), color: "bg-[#ff6a3d]" },
];

const clubOptions = ["All clubs", ...Array.from(new Set(eventDates.map((event) => event.club)))];
type DateFilter = "all" | "upcoming" | "next-2-months";

function isSameDay(dateA: Date, dateB: Date) {
  return dateA.getFullYear() === dateB.getFullYear() && dateA.getMonth() === dateB.getMonth() && dateA.getDate() === dateB.getDate();
}

function matchesEvent(event: typeof eventDates[number], date: Date) {
  if (!event.end) return isSameDay(event.start, date);
  const day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return day >= new Date(event.start.getFullYear(), event.start.getMonth(), event.start.getDate())
    && day <= new Date(event.end.getFullYear(), event.end.getMonth(), event.end.getDate());
}

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [{ title: "Calendar — EMS.MLRIT" }, { name: "description", content: "The MLRIT campus events calendar powered by EMS." }, { property: "og:title", content: "Calendar — EMS.MLRIT" }, { property: "og:description", content: "The MLRIT campus events calendar powered by EMS." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }],
  }),
  component: CalendarPage,
});

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2026, 9, 12));
  const [month, setMonth] = useState<Date>(new Date(2026, 9, 1));
  const [selectedClub, setSelectedClub] = useState("All clubs");
  const [dateFilter, setDateFilter] = useState<DateFilter>("all");

  const filteredEvents = useMemo(() => {
    const today = new Date();
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const twoMonthsFromToday = new Date(startOfToday.getFullYear(), startOfToday.getMonth() + 2, startOfToday.getDate());

    return eventDates.filter((event) => {
      const matchesClub = selectedClub === "All clubs" || event.club === selectedClub;
      const startsAfterToday = event.start >= startOfToday;
      const matchesDate = dateFilter === "all"
        || (dateFilter === "upcoming" && startsAfterToday)
        || (dateFilter === "next-2-months" && startsAfterToday && event.start <= twoMonthsFromToday);
      return matchesClub && matchesDate;
    });
  }, [dateFilter, selectedClub]);

  const selectedEvents = useMemo(() => {
    return filteredEvents.filter((event) => matchesEvent(event, selectedDate));
  }, [filteredEvents, selectedDate]);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(".calendar-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#e6edef] text-slate-900">
      <div className="relative pb-14 pt-28 md:pb-20 md:pt-32" style={{ background: "linear-gradient(180deg, #0d1617 0%, #0d2c36 100%)" }}>
        <div className="page-gutter mx-auto max-w-[1400px]">
          <p className="meta" style={{ color: "#ff8d63" }}>{month.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-[-0.06em] text-white md:text-6xl">Campus calendar.</h1>
        </div>
      </div>

      <section className="page-gutter pb-20 pt-8 md:pt-10" style={{ background: "linear-gradient(135deg, #e6edef 0%, #f3eee6 52%, #e4eeea 100%)" }}>
        <div className="mx-auto grid w-full max-w-[1500px] gap-4 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-5">
          <aside className="calendar-reveal h-fit rounded-[2rem] border border-[#2d5660] bg-[#12333c] p-5 text-white shadow-[0_20px_60px_rgba(18,51,60,0.2)] md:p-6">
            <div className="flex items-center gap-2 border-b border-white/15 pb-4 text-sm font-semibold text-white">
              <Filter className="h-4 w-4 text-[#ff6a3d]" />
              <span>Filter events</span>
            </div>
            <div className="mt-5 grid gap-4">
              <div>
                <label className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#a8c4c8]" htmlFor="calendar-club">Club</label>
                <select id="calendar-club" value={selectedClub} onChange={(event) => setSelectedClub(event.target.value)} className="h-10 w-full rounded-lg border border-[#52777e] bg-[#204954] px-3 text-sm font-medium text-white outline-none focus:border-[#ff8d63]">
                  {clubOptions.map((club) => <option key={club}>{club}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#a8c4c8]" htmlFor="calendar-date-filter">Date range</label>
                <select id="calendar-date-filter" value={dateFilter} onChange={(event) => setDateFilter(event.target.value as DateFilter)} className="h-10 w-full rounded-lg border border-[#52777e] bg-[#204954] px-3 text-sm font-medium text-white outline-none focus:border-[#ff8d63]">
                  <option value="all">All events</option>
                  <option value="upcoming">Upcoming events</option>
                  <option value="next-2-months">Next 2 months</option>
                </select>
              </div>
            </div>
          </aside>

          <div className="grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] xl:gap-5">
            <div className="calendar-reveal flex min-h-full min-w-0 items-center justify-center overflow-hidden rounded-[2rem] border border-[#d9cdbd] bg-[#fffaf2] p-3 shadow-[0_24px_80px_rgba(72,58,39,0.14)] md:p-5">
            <Calendar
              mode="single"
              month={month}
              onMonthChange={setMonth}
              selected={selectedDate}
              onSelect={(date) => date && setSelectedDate(date)}
              className="mx-auto w-full max-w-[620px] rounded-[1.5rem] bg-[#fffaf2] p-0"
              classNames={{
                months: "mx-auto w-full max-w-[560px]",
                month: "mx-auto w-full",
                nav: "mb-4 flex items-center justify-between",
                month_caption: "-mt-10 mb-2 flex items-center justify-center",
                caption_label: "text-xl font-semibold text-slate-900",
                table: "mx-auto w-full border-collapse",
                weekdays: "mx-auto mb-2 grid w-full max-w-[560px] grid-cols-7 gap-2",
                weekday: "text-center text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-400",
                week: "mx-auto grid w-full max-w-[560px] grid-cols-7 gap-2",
                day: "group relative flex h-14 w-full items-center justify-center rounded-xl text-sm font-medium text-slate-700 transition-all hover:bg-slate-100 md:h-16",
                outside: "text-slate-300",
                disabled: "opacity-40",
                selected: "bg-[#ff6a3d] text-white rounded-[0.75rem] shadow-none",
                today: "bg-[#eef2ff] text-slate-900",
              }}
              components={{
                DayContent: ({ date }) => {
                  const hasEvents = filteredEvents.some((event) => matchesEvent(event, date));
                  return (
                    <div className="relative flex h-full w-full items-center justify-center">
                      <span>{date.getDate()}</span>
                      {hasEvents && (
                        <span className="absolute bottom-1.5 h-1.5 w-1.5 rounded-[2px] bg-[#ff6a3d]" />
                      )}
                    </div>
                  );
                },
              }}
            />
            </div>

            <aside className="calendar-reveal rounded-[2rem] border border-[#e2d4c0] bg-[#fffaf2] p-5 shadow-[0_20px_60px_rgba(72,58,39,0.12)] md:p-6">
            <div className="flex items-center justify-between gap-4 border-b border-[#e2d4c0] pb-4">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-400">Selected day</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  {selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric" })}
                </h2>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff0eb] text-[#ff6a3d]">
                <CalendarDays className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {selectedEvents.length > 0 ? (
                selectedEvents.map((event) => (
                  <Link key={event.id} to="/events/$id" params={{ id: event.id }} className="calendar-event-card block rounded-[1.5rem] border border-[#e2d4c0] bg-[#fffaf2] p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(72,58,39,0.14)]">
                    <div className="flex items-start gap-3">
                      <span className={`mt-1 h-2.5 w-2.5 rounded-full ${event.color}`} aria-hidden="true" />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-slate-400">{event.type}</span>
                          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[0.62rem] font-medium text-slate-600">
                            {event.start.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          </span>
                        </div>
                        <h3 className="mt-2 text-xl font-bold text-slate-900">{event.title}</h3>
                        <p className="mt-1 text-sm font-medium text-slate-500">{event.club}</p>
                        <div className="mt-3 space-y-2 text-sm text-slate-600">
                          <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#ff6a3d]" /><span>{event.time}</span></div>
                          <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#ff6a3d]" /><span>{event.venue}</span></div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="rounded-[1.5rem] border border-dashed border-[#a9c3b7] bg-[#f5faf7] p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-lg font-semibold text-slate-700">No events scheduled</p>
                  <p className="mt-1 text-sm text-slate-500">Pick another day to explore the campus calendar.</p>
                </div>
              )}
            </div>
            </aside>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

export default CalendarPage;