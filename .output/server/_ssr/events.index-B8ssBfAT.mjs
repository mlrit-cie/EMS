import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as ArrowDownRight, m as ArrowUpRight, p as CalendarDays, s as MapPin } from "../_libs/lucide-react.mjs";
import { t as SiteFooter } from "./site-shell-u06cjFZZ.mjs";
import { n as events } from "./ems-data-DREOOOk7.mjs";
import { t as LivingHeroBg } from "./LivingHeroBg-ByrYFOTd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events.index-B8ssBfAT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EVENT_IMAGES = [
	"/events/equinox.jpeg",
	"/events/wc 2.0.png",
	"/events/B2B.png",
	"/events/gi.png",
	"/events/hustle mania.png",
	"/events/metaloop.png"
];
function EventsPage() {
	(0, import_react.useEffect)(() => {
		const cards = document.querySelectorAll(".events-reveal");
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: .16 });
		cards.forEach((card) => observer.observe(card));
		return () => observer.disconnect();
	}, []);
	const handleCardMove = (event) => {
		const card = event.currentTarget;
		const bounds = card.getBoundingClientRect();
		card.style.setProperty("--pointer-x", `${(event.clientX - bounds.left) / bounds.width * 100}%`);
		card.style.setProperty("--pointer-y", `${(event.clientY - bounds.top) / bounds.height * 100}%`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "events-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "events-hero",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LivingHeroBg, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-gutter events-hero-content",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "events-hero-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "meta",
								style: { color: "var(--clr-purple)" },
								children: "Campus experiences / 2026"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "display-lg",
								children: [
									"Make room",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "for what's next." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A living programme of workshops, challenges, summits and showcases for the people building the next chapter of campus." })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "events-hero-scroll",
						href: "#schedule",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {}), " Scroll to explore"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "schedule",
				className: "events-index page-gutter",
				style: { background: "#ffffff" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "events-index-header",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "meta",
						style: { color: "var(--clr-purple)" },
						children: "The programme"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"Find your",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "next move." })
					] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "events-index-note",
						children: [events.length, " ways to learn, build, compete and meet people across MLRIT."]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "events-grid",
					children: events.map((event, index) => {
						const cardImage = event.id === "equinox-2.0" ? "/events/equinox.jpeg" : EVENT_IMAGES[(index + 1) % EVENT_IMAGES.length];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/events/$id",
							params: { id: event.id },
							"data-event-id": event.id,
							className: `events-card events-reveal ${index === 0 ? "events-card-featured" : ""}`,
							style: { "--card-delay": `${index * 70}ms` },
							onMouseMove: handleCardMove,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									className: "events-card-image",
									src: cardImage,
									alt: "",
									"aria-hidden": "true",
									loading: "lazy",
									decoding: "async"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "events-card-overlay",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "events-card-top",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [String(index + 6).padStart(2, "0"), " OCT"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "events-card-body",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "meta",
											children: event.type
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: event.title }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: event.description }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "events-card-meta",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {}),
												" ",
												event.date
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {}),
												" ",
												event.venue
											] })]
										})
									]
								})
							]
						}, event.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "community",
				className: "events-signal page-gutter",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "events-signal-stat",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "06" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "formats to jump into" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "events-signal-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "meta",
							children: "The EMS spirit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"Bring an idea.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Leave with momentum." })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Meet curious people, learn in public, and turn campus energy into something real." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/clubs",
							className: "events-signal-link",
							children: ["Meet the community ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { EventsPage as component };
