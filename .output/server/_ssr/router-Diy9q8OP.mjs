import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useLocation, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as buttonVariants, r as cn, t as Button } from "./button-DKqOLaMj.mjs";
import { c as Funnel, d as ChevronLeft, f as ChevronDown, i as Sparkles, l as Clock3, p as CalendarDays, s as MapPin, u as ChevronRight } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-shell-u06cjFZZ.mjs";
import { t as Route$16 } from "./clubs._clubId-DEpGl3bn.mjs";
import { t as Route$17 } from "./events._id-C39sTaPA.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as getDefaultClassNames, t as DayPicker } from "../_libs/react-day-picker.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Diy9q8OP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-pdfEZWJo.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
/**
* Replaces native scroll with a slow, buttery smooth eased scroll.
* Intercepts wheel events and animates manually using requestAnimationFrame.
*/
function useSmoothScroll() {
	(0, import_react.useEffect)(() => {
		let current = window.scrollY;
		let target = window.scrollY;
		let raf = null;
		const ease = .16;
		function clampTarget() {
			target = Math.max(0, Math.min(target, document.documentElement.scrollHeight - window.innerHeight));
		}
		function onWheel(e) {
			if (e.ctrlKey) return;
			e.preventDefault();
			const multiplier = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1;
			target += e.deltaY * multiplier;
			clampTarget();
			if (!raf) loop();
		}
		function loop() {
			const diff = target - current;
			if (Math.abs(diff) < .5) {
				current = target;
				window.scrollTo({
					top: current,
					behavior: "instant"
				});
				raf = null;
				return;
			}
			current += diff * ease;
			window.scrollTo({
				top: current,
				behavior: "instant"
			});
			raf = requestAnimationFrame(loop);
		}
		window.addEventListener("wheel", onWheel, { passive: false });
		return () => {
			window.removeEventListener("wheel", onWheel);
			if (raf) cancelAnimationFrame(raf);
		};
	}, []);
}
function GlobalNav() {
	const location = useLocation();
	const isEvents = location.pathname.startsWith("/events");
	const [leftPx, setLeftPx] = (0, import_react.useState)(0);
	const [rightPx, setRightPx] = (0, import_react.useState)(0);
	const timerRef = (0, import_react.useRef)(null);
	function measure() {
		const rail = document.querySelector(".event-rail");
		const intro = document.querySelector(".event-intro");
		if (rail && intro) {
			setLeftPx(rail.getBoundingClientRect().right);
			setRightPx(window.innerWidth - intro.getBoundingClientRect().right);
		} else {
			setLeftPx(0);
			setRightPx(0);
		}
	}
	(0, import_react.useEffect)(() => {
		if (timerRef.current) clearTimeout(timerRef.current);
		if (isEvents) timerRef.current = setTimeout(measure, 60);
		else {
			setLeftPx(0);
			setRightPx(0);
		}
		return () => {
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, [location.pathname]);
	(0, import_react.useEffect)(() => {
		if (!isEvents) return;
		window.addEventListener("resize", measure);
		return () => window.removeEventListener("resize", measure);
	}, [isEvents]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			position: "fixed",
			top: 0,
			left: leftPx,
			right: rightPx,
			zIndex: 50,
			transition: "left 0.65s cubic-bezier(0.4,0,0.2,1), right 0.65s cubic-bezier(0.4,0,0.2,1)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { className: isEvents ? "event-fixed-header" : "" })
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$15 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "EMS.MLRIT Events" },
			{
				name: "description",
				content: "Discover and manage events across the MLRIT campus with EMS."
			},
			{
				name: "author",
				content: "EMS.MLRIT"
			},
			{
				property: "og:title",
				content: "EMS.MLRIT Events"
			},
			{
				property: "og:description",
				content: "Discover and manage events across the MLRIT campus with EMS."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&family=Big+Shoulders+Display:wght@900&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$15.useRouteContext();
	useSmoothScroll();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalNav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})]
	});
}
var $$splitComponentImporter$12 = () => import("./routes-BFRjrHWT.mjs");
var Route$14 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "EMS.MLRIT — Campus Events, Reframed" },
		{
			name: "description",
			content: "Discover hackathons, workshops, bootcamps, and student clubs with EMS."
		},
		{
			property: "og:title",
			content: "EMS.MLRIT — Campus Events, Reframed"
		},
		{
			property: "og:description",
			content: "Discover hackathons, workshops, bootcamps, and student clubs with EMS."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./admin-CxZzNxz3.mjs");
var Route$13 = createFileRoute("/admin")({
	head: () => ({ meta: [
		{ title: "Admin Review — EMS.MLRIT" },
		{
			name: "description",
			content: "Review clubs and event proposals for EMS.MLRIT."
		},
		{
			property: "og:title",
			content: "Admin Review — EMS.MLRIT"
		},
		{
			property: "og:description",
			content: "Review clubs and event proposals for EMS.MLRIT."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
function Calendar({ className, classNames, showOutsideDays = true, captionLayout = "label", buttonVariant = "ghost", formatters, components, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayPicker, {
		showOutsideDays,
		className: cn("bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, className),
		captionLayout,
		formatters: {
			formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
			...formatters
		},
		classNames: {
			root: cn("w-fit", defaultClassNames.root),
			months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
			month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
			nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
			button_previous: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_previous),
			button_next: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_next),
			month_caption: cn("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", defaultClassNames.month_caption),
			dropdowns: cn("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", defaultClassNames.dropdowns),
			dropdown_root: cn("has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border", defaultClassNames.dropdown_root),
			dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
			caption_label: cn("select-none font-medium", captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5", defaultClassNames.caption_label),
			table: "w-full border-collapse",
			weekdays: cn("flex", defaultClassNames.weekdays),
			weekday: cn("text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal", defaultClassNames.weekday),
			week: cn("mt-2 flex w-full", defaultClassNames.week),
			week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
			week_number: cn("text-muted-foreground select-none text-[0.8rem]", defaultClassNames.week_number),
			day: cn("group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md", defaultClassNames.day),
			range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
			range_middle: cn("rounded-none", defaultClassNames.range_middle),
			range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
			today: cn("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none", defaultClassNames.today),
			outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
			disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
			hidden: cn("invisible", defaultClassNames.hidden),
			...classNames
		},
		components: {
			Root: ({ className, rootRef, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-slot": "calendar",
					ref: rootRef,
					className: cn(className),
					...props
				});
			},
			Chevron: ({ className, orientation, ...props }) => {
				if (orientation === "left") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					className: cn("size-4", className),
					...props
				});
				if (orientation === "right") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: cn("size-4", className),
					...props
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: cn("size-4", className),
					...props
				});
			},
			DayButton: CalendarDayButton,
			WeekNumber: ({ children, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					...props,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-(--cell-size) items-center justify-center text-center",
						children
					})
				});
			},
			...components
		},
		...props
	});
}
function CalendarDayButton({ className, day, modifiers, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	const ref = import_react.useRef(null);
	import_react.useEffect(() => {
		if (modifiers["focused"]) ref.current?.focus();
	}, [modifiers]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		ref,
		variant: "ghost",
		size: "icon",
		"data-day": day.date.toLocaleDateString(),
		"data-selected-single": modifiers["selected"] && !modifiers["range_start"] && !modifiers["range_end"] && !modifiers["range_middle"],
		"data-range-start": modifiers["range_start"],
		"data-range-end": modifiers["range_end"],
		"data-range-middle": modifiers["range_middle"],
		className: cn("data-[selected-single=true]:!rounded-[0.75rem] data-[selected-single=true]:!bg-[#ff6a3d] data-[selected-single=true]:!text-white data-[range-middle=true]:!rounded-[0.75rem] data-[range-middle=true]:!bg-[#ff6a3d] data-[range-middle=true]:!text-white data-[range-start=true]:!rounded-[0.75rem] data-[range-start=true]:!bg-[#ff6a3d] data-[range-start=true]:!text-white data-[range-end=true]:!rounded-[0.75rem] data-[range-end=true]:!bg-[#ff6a3d] data-[range-end=true]:!text-white group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 rounded-[0.75rem] font-normal leading-none group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70", defaultClassNames.day, className),
		...props
	});
}
var eventDates = [
	{
		id: "20000000-0000-4000-8000-000000000001",
		title: "HackFest 2025",
		type: "Hackathon",
		club: "Code Club",
		venue: "EMS Arena",
		time: "36 hours",
		start: new Date(2026, 9, 6),
		end: new Date(2026, 9, 7),
		color: "bg-[#ff6a3d]"
	},
	{
		id: "20000000-0000-4000-8000-000000000002",
		title: "AI Workshop Series",
		type: "Workshop",
		club: "CIE",
		venue: "Innovation Lab",
		time: "10:00 — 16:00",
		start: new Date(2026, 9, 12),
		end: new Date(2026, 9, 12),
		color: "bg-[#ff6a3d]"
	},
	{
		id: "20000000-0000-4000-8000-000000000003",
		title: "Web Development Bootcamp",
		type: "Bootcamp",
		club: "Code Club",
		venue: "CSE Seminar Hall",
		time: "09:30 — 17:00",
		start: new Date(2026, 9, 18),
		end: new Date(2026, 9, 18),
		color: "bg-[#ff6a3d]"
	},
	{
		id: "equinox-2.0",
		title: "EQUINOX-2.0",
		type: "Flagship Event",
		club: "CIE",
		venue: "MLR Institute of Technology",
		time: "All day",
		start: new Date(2026, 9, 30),
		end: new Date(2026, 9, 31),
		color: "bg-[#ff6a3d]"
	},
	{
		id: "hustle-mania",
		title: "Hustle Mania",
		type: "Challenge",
		club: "CIE",
		venue: "EMS Arena",
		time: "All day",
		start: new Date(2026, 3, 24),
		end: new Date(2026, 3, 24),
		color: "bg-[#ff6a3d]"
	},
	{
		id: "business-2-brand",
		title: "Business 2 Brand",
		type: "Hackathon",
		club: "Apex",
		venue: "EMS Arena",
		time: "Three days",
		start: new Date(2026, 3, 3),
		end: new Date(2026, 3, 5),
		color: "bg-[#ff6a3d]"
	}
];
var clubOptions = ["All clubs", ...Array.from(new Set(eventDates.map((event) => event.club)))];
function isSameDay(dateA, dateB) {
	return dateA.getFullYear() === dateB.getFullYear() && dateA.getMonth() === dateB.getMonth() && dateA.getDate() === dateB.getDate();
}
function matchesEvent(event, date) {
	if (!event.end) return isSameDay(event.start, date);
	const day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	return day >= new Date(event.start.getFullYear(), event.start.getMonth(), event.start.getDate()) && day <= new Date(event.end.getFullYear(), event.end.getMonth(), event.end.getDate());
}
var Route$12 = createFileRoute("/calendar")({
	head: () => ({ meta: [
		{ title: "Calendar — EMS.MLRIT" },
		{
			name: "description",
			content: "The MLRIT campus events calendar powered by EMS."
		},
		{
			property: "og:title",
			content: "Calendar — EMS.MLRIT"
		},
		{
			property: "og:description",
			content: "The MLRIT campus events calendar powered by EMS."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: CalendarPage
});
function CalendarPage() {
	const [selectedDate, setSelectedDate] = (0, import_react.useState)(new Date(2026, 9, 12));
	const [month, setMonth] = (0, import_react.useState)(new Date(2026, 9, 1));
	const [selectedClub, setSelectedClub] = (0, import_react.useState)("All clubs");
	const [dateFilter, setDateFilter] = (0, import_react.useState)("all");
	const filteredEvents = (0, import_react.useMemo)(() => {
		const today = /* @__PURE__ */ new Date();
		const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
		const twoMonthsFromToday = new Date(startOfToday.getFullYear(), startOfToday.getMonth() + 2, startOfToday.getDate());
		return eventDates.filter((event) => {
			const matchesClub = selectedClub === "All clubs" || event.club === selectedClub;
			const startsAfterToday = event.start >= startOfToday;
			const matchesDate = dateFilter === "all" || dateFilter === "upcoming" && startsAfterToday || dateFilter === "next-2-months" && startsAfterToday && event.start <= twoMonthsFromToday;
			return matchesClub && matchesDate;
		});
	}, [dateFilter, selectedClub]);
	const selectedEvents = (0, import_react.useMemo)(() => {
		return filteredEvents.filter((event) => matchesEvent(event, selectedDate));
	}, [filteredEvents, selectedDate]);
	(0, import_react.useEffect)(() => {
		const revealItems = document.querySelectorAll(".calendar-reveal");
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: .12 });
		revealItems.forEach((item) => observer.observe(item));
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-[#e6edef] text-slate-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative pb-14 pt-28 md:pb-20 md:pt-32",
				style: { background: "linear-gradient(180deg, #0d1617 0%, #0d2c36 100%)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-gutter mx-auto max-w-[1400px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "meta",
						style: { color: "#ff8d63" },
						children: month.toLocaleDateString("en-US", {
							month: "long",
							year: "numeric"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-4xl font-black uppercase tracking-[-0.06em] text-white md:text-6xl",
						children: "Campus calendar."
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "page-gutter pb-20 pt-8 md:pt-10",
				style: { background: "linear-gradient(135deg, #e6edef 0%, #f3eee6 52%, #e4eeea 100%)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid w-full max-w-[1500px] gap-4 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "calendar-reveal h-fit rounded-[2rem] border border-[#2d5660] bg-[#12333c] p-5 text-white shadow-[0_20px_60px_rgba(18,51,60,0.2)] md:p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 border-b border-white/15 pb-4 text-sm font-semibold text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4 text-[#ff6a3d]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Filter events" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#a8c4c8]",
								htmlFor: "calendar-club",
								children: "Club"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								id: "calendar-club",
								value: selectedClub,
								onChange: (event) => setSelectedClub(event.target.value),
								className: "h-10 w-full rounded-lg border border-[#52777e] bg-[#204954] px-3 text-sm font-medium text-white outline-none focus:border-[#ff8d63]",
								children: clubOptions.map((club) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: club }, club))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#a8c4c8]",
								htmlFor: "calendar-date-filter",
								children: "Date range"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "calendar-date-filter",
								value: dateFilter,
								onChange: (event) => setDateFilter(event.target.value),
								className: "h-10 w-full rounded-lg border border-[#52777e] bg-[#204954] px-3 text-sm font-medium text-white outline-none focus:border-[#ff8d63]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "all",
										children: "All events"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "upcoming",
										children: "Upcoming events"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "next-2-months",
										children: "Next 2 months"
									})
								]
							})] })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] xl:gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "calendar-reveal flex min-h-full min-w-0 items-center justify-center overflow-hidden rounded-[2rem] border border-[#d9cdbd] bg-[#fffaf2] p-3 shadow-[0_24px_80px_rgba(72,58,39,0.14)] md:p-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
								mode: "single",
								month,
								onMonthChange: setMonth,
								selected: selectedDate,
								onSelect: (date) => date && setSelectedDate(date),
								className: "mx-auto w-full max-w-[620px] rounded-[1.5rem] bg-[#fffaf2] p-0",
								classNames: {
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
									today: "bg-[#eef2ff] text-slate-900"
								},
								components: { DayContent: ({ date }) => {
									const hasEvents = filteredEvents.some((event) => matchesEvent(event, date));
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex h-full w-full items-center justify-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: date.getDate() }), hasEvents && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-1.5 h-1.5 w-1.5 rounded-[2px] bg-[#ff6a3d]" })]
									});
								} }
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "calendar-reveal rounded-[2rem] border border-[#e2d4c0] bg-[#fffaf2] p-5 shadow-[0_20px_60px_rgba(72,58,39,0.12)] md:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-4 border-b border-[#e2d4c0] pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-400",
									children: "Selected day"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-2xl font-bold text-slate-900",
									children: selectedDate.toLocaleDateString("en-US", {
										month: "long",
										day: "numeric"
									})
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff0eb] text-[#ff6a3d]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-5 w-5" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 space-y-4",
								children: selectedEvents.length > 0 ? selectedEvents.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/events/$id",
									params: { id: event.id },
									className: "calendar-event-card block rounded-[1.5rem] border border-[#e2d4c0] bg-[#fffaf2] p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(72,58,39,0.14)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `mt-1 h-2.5 w-2.5 rounded-full ${event.color}`,
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-wrap items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[0.62rem] font-bold uppercase tracking-[0.18em] text-slate-400",
														children: event.type
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-full bg-slate-100 px-2 py-0.5 text-[0.62rem] font-medium text-slate-600",
														children: event.start.toLocaleDateString("en-US", {
															month: "short",
															day: "numeric"
														})
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-2 text-xl font-bold text-slate-900",
													children: event.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm font-medium text-slate-500",
													children: event.club
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-3 space-y-2 text-sm text-slate-600",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "h-4 w-4 text-[#ff6a3d]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: event.time })]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-[#ff6a3d]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: event.venue })]
													})]
												})
											]
										})]
									})
								}, event.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-[1.5rem] border border-dashed border-[#a9c3b7] bg-[#f5faf7] p-6 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-lg font-semibold text-slate-700",
											children: "No events scheduled"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-slate-500",
											children: "Pick another day to explore the campus calendar."
										})
									]
								})
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var $$splitComponentImporter$10 = () => import("./club-UC0hM71w.mjs");
var Route$11 = createFileRoute("/club")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./clubs-D2pZg4mR.mjs");
var Route$10 = createFileRoute("/clubs")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./events-BIkp57ao.mjs");
var Route$9 = createFileRoute("/events")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./faculty-tLhIAjWo.mjs");
var Route$8 = createFileRoute("/faculty")({
	head: () => ({ meta: [
		{ title: "Faculty Review — IIC.MLRIT" },
		{
			name: "description",
			content: "Faculty event review and oversight for IIC.MLRIT."
		},
		{
			property: "og:title",
			content: "Faculty Review — IIC.MLRIT"
		},
		{
			property: "og:description",
			content: "Faculty event review and oversight for IIC.MLRIT."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./register-Ci-K-q7t.mjs");
var Route$7 = createFileRoute("/register")({
	head: () => ({ meta: [
		{ title: "Sign in — IIC.MLRIT" },
		{
			name: "description",
			content: "Sign in to register for events and manage your IIC.MLRIT activity."
		},
		{
			property: "og:title",
			content: "Sign in — IIC.MLRIT"
		},
		{
			property: "og:description",
			content: "Sign in to register for events and manage your IIC.MLRIT activity."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var LINES = 7;
function SpacePanel() {
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const container = containerRef.current;
		if (!container) return;
		const lines = Array.from(container.querySelectorAll(".space-word-line"));
		function onScroll() {
			const rect = container.getBoundingClientRect();
			const viewH = window.innerHeight;
			const progress = (viewH - rect.top) / (viewH + rect.height);
			const clamped = Math.max(0, Math.min(1, progress));
			const travel = 120;
			lines.forEach((line, i) => {
				const x = (i % 2 === 0 ? -1 : 1) * travel * clamped;
				line.style.transform = `translateX(${x}px)`;
			});
		}
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-page",
		ref: containerRef,
		"aria-label": "When events need a space",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-word-stack",
			children: Array(LINES).fill("when events need a space").map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "space-word-line",
				style: { willChange: "transform" },
				children: line
			}, index))
		})
	});
}
function SpacePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "space-landing",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpacePanel, {})
	});
}
var Route$6 = createFileRoute("/space")({ component: SpacePage });
var $$splitComponentImporter$5 = () => import("./club.profile-BLmHPD5f.mjs");
var Route$5 = createFileRoute("/club/profile")({
	head: () => ({ meta: [
		{ title: "Club Profile — IIC.MLRIT" },
		{
			name: "description",
			content: "Manage a student club profile."
		},
		{
			property: "og:title",
			content: "Club Profile — IIC.MLRIT"
		},
		{
			property: "og:description",
			content: "Manage a student club profile."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./clubs.index-KZx1mGrK.mjs");
var Route$4 = createFileRoute("/clubs/")({
	head: () => ({ meta: [
		{ title: "Clubs — EMS.MLRIT" },
		{
			name: "description",
			content: "Meet the student clubs shaping innovation and campus culture at MLRIT."
		},
		{
			property: "og:title",
			content: "Clubs — EMS.MLRIT"
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./events.index-B8ssBfAT.mjs");
var Route$3 = createFileRoute("/events/")({
	head: () => ({ meta: [
		{ title: "Events — EMS.MLRIT" },
		{
			name: "description",
			content: "Browse MLRIT hackathons, workshops, bootcamps, and campus events with EMS."
		},
		{
			property: "og:title",
			content: "Events — EMS.MLRIT"
		},
		{
			property: "og:description",
			content: "Browse MLRIT hackathons, workshops, bootcamps, and campus events with EMS."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./user.profile-B9LQjz95.mjs");
var Route$2 = createFileRoute("/user/profile")({
	head: () => ({ meta: [
		{ title: "Profile — IIC.MLRIT" },
		{
			name: "description",
			content: "Your IIC.MLRIT event profile."
		},
		{
			property: "og:title",
			content: "Profile — IIC.MLRIT"
		},
		{
			property: "og:description",
			content: "Your IIC.MLRIT event profile."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./club.event._id-BqxfS6Gv.mjs");
var Route$1 = createFileRoute("/club/event/$id")({
	head: () => ({ meta: [
		{ title: "Manage Event — IIC.MLRIT" },
		{
			name: "description",
			content: "Manage an MLRIT club event."
		},
		{
			property: "og:title",
			content: "Manage Event — IIC.MLRIT"
		},
		{
			property: "og:description",
			content: "Manage an MLRIT club event."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./club.event.create-D6qpQQ54.mjs");
var Route = createFileRoute("/club/event/create")({
	head: () => ({ meta: [
		{ title: "Create Event — IIC.MLRIT" },
		{
			name: "description",
			content: "Submit a new MLRIT club event for review."
		},
		{
			property: "og:title",
			content: "Create Event — IIC.MLRIT"
		},
		{
			property: "og:description",
			content: "Submit a new MLRIT club event for review."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$14.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$15
});
var AdminRoute = Route$13.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$15
});
var CalendarRoute = Route$12.update({
	id: "/calendar",
	path: "/calendar",
	getParentRoute: () => Route$15
});
var ClubRoute = Route$11.update({
	id: "/club",
	path: "/club",
	getParentRoute: () => Route$15
});
var ClubsRoute = Route$10.update({
	id: "/clubs",
	path: "/clubs",
	getParentRoute: () => Route$15
});
var EventsRoute = Route$9.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$15
});
var FacultyRoute = Route$8.update({
	id: "/faculty",
	path: "/faculty",
	getParentRoute: () => Route$15
});
var RegisterRoute = Route$7.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => Route$15
});
var SpaceRoute = Route$6.update({
	id: "/space",
	path: "/space",
	getParentRoute: () => Route$15
});
var ClubProfileRoute = Route$5.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => ClubRoute
});
var ClubsIndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => ClubsRoute
});
var ClubsClubIdRoute = Route$16.update({
	id: "/$clubId",
	path: "/$clubId",
	getParentRoute: () => ClubsRoute
});
var EventsIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => EventsRoute
});
var EventsIdRoute = Route$17.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => EventsRoute
});
var UserProfileRoute = Route$2.update({
	id: "/user/profile",
	path: "/user/profile",
	getParentRoute: () => Route$15
});
var ClubRouteChildren = {
	ClubProfileRoute,
	ClubEventIdRoute: Route$1.update({
		id: "/event/$id",
		path: "/event/$id",
		getParentRoute: () => ClubRoute
	}),
	ClubEventCreateRoute: Route.update({
		id: "/event/create",
		path: "/event/create",
		getParentRoute: () => ClubRoute
	})
};
var ClubRouteWithChildren = ClubRoute._addFileChildren(ClubRouteChildren);
var ClubsRouteChildren = {
	ClubsClubIdRoute,
	ClubsIndexRoute
};
var ClubsRouteWithChildren = ClubsRoute._addFileChildren(ClubsRouteChildren);
var EventsRouteChildren = {
	EventsIdRoute,
	EventsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AdminRoute,
	CalendarRoute,
	ClubRoute: ClubRouteWithChildren,
	ClubsRoute: ClubsRouteWithChildren,
	EventsRoute: EventsRoute._addFileChildren(EventsRouteChildren),
	FacultyRoute,
	RegisterRoute,
	SpaceRoute,
	UserProfileRoute
};
var routeTree = Route$15._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
