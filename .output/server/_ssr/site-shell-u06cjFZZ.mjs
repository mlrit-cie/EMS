import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-DKqOLaMj.mjs";
import { o as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-u06cjFZZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV_LINKS = [
	{
		to: "/",
		activeColor: "var(--clr-purple)"
	},
	{
		to: "/events",
		activeColor: "var(--clr-orange)"
	},
	{
		to: "/clubs",
		activeColor: "var(--clr-purple)"
	},
	{
		to: "/calendar",
		activeColor: "var(--clr-orange)"
	}
];
/**
* EMS.MLRIT logo mark — two overlapping circles.
* Rotates 180° on every route change; colours swap at the halfway point.
*/
function BrandMark({ pathname }) {
	const c1 = NAV_LINKS.find((l) => l.to === "/" ? pathname === "/" : pathname.startsWith(l.to))?.activeColor ?? "var(--clr-purple)";
	const c2 = c1 === "var(--clr-purple)" ? "var(--clr-orange)" : "var(--clr-purple)";
	const [rotation, setRotation] = (0, import_react.useState)(0);
	const [colors, setColors] = (0, import_react.useState)({
		c1,
		c2
	});
	const prevPath = (0, import_react.useRef)(pathname);
	(0, import_react.useEffect)(() => {
		if (prevPath.current === pathname) return;
		prevPath.current = pathname;
		setRotation((r) => r + 180);
		const t = setTimeout(() => setColors({
			c1,
			c2
		}), 300);
		return () => clearTimeout(t);
	}, [
		pathname,
		c1,
		c2
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "site-brand-mark",
		"aria-hidden": "true",
		style: {
			transform: `rotate(${rotation}deg)`,
			transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
			display: "inline-flex",
			alignItems: "center"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { borderColor: colors.c1 } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { borderColor: colors.c2 } })]
	});
}
var links = [
	{
		to: "/",
		label: "Home",
		activeColor: "var(--clr-purple)"
	},
	{
		to: "/events",
		label: "Events",
		activeColor: "var(--clr-purple)"
	},
	{
		to: "/clubs",
		label: "Clubs",
		activeColor: "var(--clr-purple)"
	},
	{
		to: "/calendar",
		label: "Calendar",
		activeColor: "var(--clr-purple)"
	}
];
function SiteHeader({ inverse = false, className = "" }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const menuVideoRef = (0, import_react.useRef)(null);
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		setOpen(false);
		document.body.style.overflow = "";
	}, [location.pathname]);
	(0, import_react.useEffect)(() => {
		const video = menuVideoRef.current;
		if (!video) return;
		if (open) {
			video.currentTime = 0;
			video.play().catch(() => void 0);
		} else video.pause();
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKeyDown = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [open]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	const mobileMenuClasses = ["site-mobile-menu fixed inset-0 z-40 transition-all duration-500 ease-out", open ? "translate-y-0 opacity-100 pointer-events-auto visible" : "-translate-y-full opacity-0 pointer-events-none invisible"].join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `site-header absolute inset-x-0 top-0 z-50 px-4 py-4 md:px-8 ${inverse ? "site-header--inverse" : "site-header--light"} ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "site-nav-shell mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 py-3 md:px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "site-brand group flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { pathname: location.pathname }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "truncate",
						children: [
							"EMS",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "var(--clr-orange)" },
								children: "."
							}),
							"MLRIT"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					"aria-label": "Primary navigation",
					children: links.map((link) => {
						const isActive = link.to === "/" ? location.pathname === "/" : location.pathname.startsWith(link.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: "site-nav-link",
							style: isActive ? {
								background: link.activeColor,
								color: "#E9ECEF"
							} : {},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: link.label })
						}, link.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/register",
						className: "site-sign-in hidden sm:inline-flex",
						children: ["Sign in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "↗"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						className: "site-menu-button",
						variant: "ghost",
						size: "icon",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((current) => !current),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
					})]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: mobileMenuClasses,
		"aria-hidden": !open,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: menuVideoRef,
				className: "site-menu-video",
				muted: true,
				loop: true,
				playsInline: true,
				preload: "auto",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: "/Scene.mp4",
					type: "video/mp4"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "site-menu-video-overlay",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "relative flex h-full flex-col justify-end gap-2 px-6 pb-16 md:px-16 md:pb-20",
				"aria-label": "Menu",
				children: [links.map((link) => {
					const isActive = link.to === "/" ? location.pathname === "/" : location.pathname.startsWith(link.to);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						onClick: () => setOpen(false),
						className: "font-display font-semibold leading-none transition-colors duration-200",
						style: {
							fontSize: "clamp(2.8rem,7vw,6rem)",
							color: isActive ? link.activeColor : "var(--clr-white)"
						},
						children: link.label
					}, link.to);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/register",
					onClick: () => setOpen(false),
					className: "font-display font-semibold leading-none transition-colors duration-200",
					style: {
						fontSize: "clamp(2.8rem,7vw,6rem)",
						color: "var(--clr-purple)"
					},
					onMouseEnter: (e) => e.currentTarget.style.color = "var(--clr-orange)",
					onMouseLeave: (e) => e.currentTarget.style.color = "var(--clr-purple)",
					children: "Sign in"
				})]
			})
		]
	})] });
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "page-gutter py-16 md:py-20",
		style: {
			background: "var(--clr-black)",
			color: "var(--clr-white)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] gap-12 md:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-4xl font-bold",
						children: [
							"EMS",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "var(--clr-orange)" },
								children: "."
							}),
							"MLRIT"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-sm",
						style: { color: "rgba(233,236,239,0.6)" },
						children: [
							"Event Management System",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"MLR Institute of Technology"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "grid grid-cols-2 gap-3 font-display text-2xl font-medium md:col-span-3",
					children: [
						{
							to: "/events",
							label: "Events"
						},
						{
							to: "/clubs",
							label: "Clubs"
						},
						{
							to: "/calendar",
							label: "Calendar"
						},
						{
							to: "/register",
							label: "Sign in"
						}
					].map(({ to, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to,
						className: "transition-colors duration-200",
						onMouseEnter: (e) => e.currentTarget.style.color = "var(--clr-purple)",
						onMouseLeave: (e) => e.currentTarget.style.color = "",
						children: label
					}, to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4 md:col-start-9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl font-semibold",
							children: "Every idea needs a room."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4",
							style: { color: "rgba(233,236,239,0.6)" },
							children: "Find yours across the campus."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/events",
							className: "mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5",
							style: {
								background: "var(--clr-purple)",
								color: "var(--clr-white)"
							},
							children: "Browse events ↗"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-14 flex max-w-[1400px] items-center justify-between border-t pt-8",
			style: { borderColor: "rgba(233,236,239,0.1)" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "meta",
				style: { opacity: .35 },
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" MLRIT EMS"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "meta",
				style: {
					color: "var(--clr-orange)",
					opacity: .7
				},
				children: "Campus Events, Reframed."
			})]
		})]
	});
}
//#endregion
export { SiteHeader as n, SiteFooter as t };
