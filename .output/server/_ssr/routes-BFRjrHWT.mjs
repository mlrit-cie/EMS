import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as ArrowUpRight, s as MapPin } from "../_libs/lucide-react.mjs";
import { t as SiteFooter } from "./site-shell-u06cjFZZ.mjs";
import { n as events } from "./ems-data-DREOOOk7.mjs";
import { t as LivingHeroBg } from "./LivingHeroBg-ByrYFOTd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BFRjrHWT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* ReactBits-style BlurText:
* Each word fades in from blur(12px) + translateY(8px) → clear, staggered.
*/
function BlurText({ text, className = "", style = {}, delay = 80, duration = 600, once = true }) {
	const words = text.split(" ");
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setVisible(true);
				if (once) obs.disconnect();
			} else if (!once) setVisible(false);
		}, { threshold: .2 });
		obs.observe(el);
		return () => obs.disconnect();
	}, [once]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		className,
		style: {
			display: "inline",
			...style
		},
		children: words.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			style: {
				display: "inline-block",
				whiteSpace: "pre",
				opacity: visible ? 1 : 0,
				filter: visible ? "blur(0px)" : "blur(12px)",
				transform: visible ? "translateY(0)" : "translateY(10px)",
				transitionProperty: "opacity, filter, transform",
				transitionDuration: `${duration}ms`,
				transitionTimingFunction: "ease",
				transitionDelay: visible ? `${i * delay}ms` : "0ms"
			},
			children: [word, i < words.length - 1 ? " " : ""]
		}, i))
	});
}
/**
* Scroll-driven parallax for a section's inner content.
* The content shifts vertically as the section enters/leaves the viewport.
* @param speed  0.1 = subtle, 0.3 = noticeable, 0.5 = strong
*/
function useParallax(speed = .2) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		function onScroll() {
			if (!el) return;
			const rect = el.getBoundingClientRect();
			const viewH = window.innerHeight;
			const y = (viewH * .5 - (rect.top + rect.height * .5)) / viewH * speed * 160;
			el.style.transform = `translateY(${y}px)`;
		}
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, [speed]);
	return ref;
}
function HomePage() {
	const aboutInner = useParallax(.25);
	const whatsOnInner = useParallax(.2);
	const planInner = useParallax(.25);
	const aboutRef = (0, import_react.useRef)(null);
	const whatsRef = (0, import_react.useRef)(null);
	const planRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const sections = [
			aboutRef,
			whatsRef,
			planRef
		];
		sections.forEach((r) => {
			if (r.current) {
				r.current.style.opacity = "0";
				r.current.style.transform = "translateY(60px)";
				r.current.style.transition = "opacity 0.9s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94)";
			}
		});
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.style.opacity = "1";
					e.target.style.transform = "translateY(0px)";
				}
			});
		}, { threshold: .1 });
		sections.forEach((r) => {
			if (r.current) obs.observe(r.current);
		});
		return () => obs.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-screen min-h-[100svh] overflow-hidden",
			style: {
				background: "#080402",
				color: "var(--clr-white)"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LivingHeroBg, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-gutter relative mx-auto flex min-h-screen min-h-[100svh] max-w-[1500px] flex-col justify-end pb-12 md:pb-16",
				style: { zIndex: 2 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "meta mb-5 flex items-center gap-3",
						style: {
							color: "#fff",
							letterSpacing: "0.25em",
							opacity: .6,
							fontFamily: "var(--font-display)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-px w-10",
							style: {
								background: "#fff",
								opacity: .5
							}
						}), "Campus event management"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						style: {
							fontFamily: "var(--font-display)",
							fontSize: "clamp(3.4rem, 10.5vw, 9rem)",
							lineHeight: .84,
							fontWeight: 800,
							color: "#ff8a3d",
							margin: 0
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurText, {
								text: "Ideas need",
								delay: 70,
								duration: 700,
								style: {
									display: "block",
									fontWeight: 300,
									letterSpacing: "-0.03em",
									color: "#ff8a3d"
								}
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurText, {
								text: "A place.",
								delay: 90,
								duration: 800,
								style: {
									display: "block",
									fontWeight: 900,
									fontStyle: "italic",
									letterSpacing: "-0.05em",
									WebkitTextStroke: "2px #ff8a3d",
									color: "#ff8a3d",
									textTransform: "uppercase"
								}
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-xl text-base md:text-lg",
							style: {
								color: "rgba(255,255,255,0.65)",
								fontFamily: "var(--font-sans)",
								fontWeight: 400,
								lineHeight: 1.6
							},
							children: "Discover hackathons, workshops, bootcamps and the clubs shaping campus culture — from proposal to a full house."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/events",
							className: "inline-flex min-h-12 shrink-0 items-center justify-center gap-3 px-7 font-display text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5",
							style: {
								background: "#fff",
								color: "var(--clr-black)"
							},
							children: ["Explore events ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t pt-8",
						style: { borderColor: "rgba(255,255,255,0.1)" },
						children: [
							["12+", "Active clubs"],
							["40+", "Events this year"],
							["3K+", "Students reached"]
						].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								fontFamily: "var(--font-display)",
								fontSize: "1.9rem",
								fontWeight: 800,
								color: "#fff",
								margin: 0
							},
							children: n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "meta mt-0.5",
							style: {
								color: "rgba(255,255,255,0.4)",
								letterSpacing: "0.15em"
							},
							children: l
						})] }, l))
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: aboutRef,
			className: "section-pad page-gutter overflow-hidden",
			style: { background: "var(--clr-white)" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: aboutInner,
				className: "mx-auto grid max-w-[1400px] grid-cols-12 gap-y-10 md:gap-x-10",
				style: { willChange: "transform" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-12 md:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "meta mb-5",
						style: { color: "var(--clr-purple)" },
						children: "The system"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-4xl font-semibold leading-[1.02] md:text-6xl",
						style: { color: "var(--clr-black)" },
						children: [
							"One campus.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Every field.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"A single map."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-12 md:col-span-7 md:col-start-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl leading-relaxed md:text-3xl",
						style: { color: "rgba(33,37,41,0.75)" },
						children: "EMS brings events and clubs into one place — from discovery and registration to approval, attendance, and reporting."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-9 flex flex-wrap gap-3",
						children: events.slice(0, 3).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "meta px-3 py-2",
							style: {
								border: "1.5px solid var(--clr-purple)",
								color: "var(--clr-purple)"
							},
							children: e.title
						}, e.id))
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: whatsRef,
			className: "section-pad page-gutter overflow-hidden",
			style: { background: "#ffffff" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: whatsOnInner,
				className: "mx-auto max-w-[1400px]",
				style: { willChange: "transform" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-12 grid grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "col-span-8 text-5xl font-semibold md:col-span-4 md:text-7xl",
						style: { color: "var(--clr-black)" },
						children: "What's on"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/events",
						className: "meta col-span-4 self-end text-right transition-colors hover:text-[var(--clr-orange)]",
						style: { color: "var(--clr-purple)" },
						children: "All events"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-10 lg:grid-cols-12",
					children: events.slice(0, 2).map((event, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/events/$id",
						params: { id: event.id },
						className: `group ${index === 0 ? "lg:col-span-7" : "lg:col-span-5 lg:pt-24"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `flex items-center justify-center overflow-hidden ${index === 0 ? "aspect-[4/3]" : "aspect-[4/5]"}`,
								style: {
									backgroundImage: event.id === "equinox-2.0" ? `url("/events/equinox.jpeg")` : index === 0 ? "linear-gradient(135deg, var(--clr-purple) 0%, #5b21b6 60%, var(--clr-orange) 120%)" : "linear-gradient(135deg, var(--clr-black) 0%, #2d3748 60%, var(--clr-purple) 120%)",
									backgroundSize: event.id === "equinox-2.0" ? "contain" : "cover",
									backgroundRepeat: event.id === "equinox-2.0" ? "no-repeat" : "initial",
									backgroundPosition: "center"
								},
								children: event.id !== "equinox-2.0" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-4xl font-black tracking-[0.2em]",
									style: { color: "var(--clr-white)" },
									children: "EMS"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap gap-x-4 gap-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "meta px-3 py-1.5",
										style: {
											background: "var(--clr-purple)",
											color: "var(--clr-white)"
										},
										children: event.type
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "meta",
										style: {
											color: "var(--clr-black)",
											opacity: .5
										},
										children: event.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "meta",
										style: {
											color: "var(--clr-black)",
											opacity: .5
										},
										children: event.venue
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-3xl font-semibold transition-colors duration-300 group-hover:text-[var(--clr-purple)] md:text-4xl",
								children: event.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xl",
								style: { color: "rgba(33,37,41,0.6)" },
								children: event.description
							})
						]
					}, event.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: planRef,
			className: "section-pad page-gutter overflow-hidden",
			style: { background: "var(--clr-black)" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: planInner,
				className: "mx-auto max-w-[1400px]",
				style: { willChange: "transform" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "meta mb-5",
							style: { color: "var(--clr-orange)" },
							children: "Plan the month"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-5xl font-semibold md:text-6xl",
							style: { color: "var(--clr-white)" },
							children: [
								"Know where",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"to be next."
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-px md:col-span-8 md:grid-cols-2",
						style: { background: "rgba(233,236,239,0.08)" },
						children: events.slice(0, 4).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/events/$id",
							params: { id: e.id },
							className: "group p-6 transition-all duration-300",
							style: {
								background: "var(--clr-purple)",
								color: "var(--clr-white)"
							},
							onMouseEnter: (e2) => {
								e2.currentTarget.style.background = "var(--clr-orange)";
							},
							onMouseLeave: (e2) => {
								e2.currentTarget.style.background = "var(--clr-purple)";
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "meta",
									style: { color: "rgba(233,236,239,0.65)" },
									children: e.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-8 text-2xl font-semibold",
									style: { color: "var(--clr-white)" },
									children: e.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 flex items-center gap-2 text-sm",
									style: { color: "rgba(233,236,239,0.65)" },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), e.venue]
								})
							]
						}, e.id))
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
	] });
}
//#endregion
export { HomePage as component };
