import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as ArrowLeft, i as Sparkles, m as ArrowUpRight, n as Users, p as CalendarDays, s as MapPin } from "../_libs/lucide-react.mjs";
import { t as SiteFooter } from "./site-shell-u06cjFZZ.mjs";
import { n as events, t as clubs } from "./ems-data-DREOOOk7.mjs";
import { t as Route } from "./clubs._clubId-DEpGl3bn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clubs._clubId-NHOFTyh2.js
var import_jsx_runtime = require_jsx_runtime();
var CLUB_LOGOS = {
	cie: "/club-logos/cie.jpeg",
	came: "/club-logos/came.jpeg",
	scope: "/club-logos/scope.jpeg",
	literati: "/club-logos/lit.jpeg",
	apex: "/club-logos/apex.jpeg",
	ewb: "/club-logos/EWB.jpeg",
	csi: "/club-logos/csi.png",
	nss: "/club-logos/nss.jpeg",
	code: "/club-logos/code.jpeg",
	aim: "/club-logos/aim.png",
	squad: "/club-logos/squad.png",
	aero: "/club-logos/areo.jpeg",
	robotics: "/club-logos/robotics.png",
	mun: "/club-logos/mun.jpeg"
};
function ClubPage() {
	const { clubId } = Route.useParams();
	const c = clubs.find((x) => x.id === clubId) ?? clubs[0];
	if (!c) return null;
	const clubEvents = events.filter((e) => e.club?.toLowerCase() === c.name.toLowerCase() || e.club?.toLowerCase() === clubId);
	const displayEvents = clubEvents.length > 0 ? clubEvents : events.slice(0, 3);
	displayEvents.find((e) => e.id === "equinox-2.0") ?? displayEvents[0];
	const logoSrc = CLUB_LOGOS[c.id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		style: {
			background: "linear-gradient(180deg, #0a0614 0%, #0e0a1a 40%, #15101f 100%)",
			minHeight: "100vh"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				style: {
					position: "relative",
					overflow: "hidden",
					paddingTop: "76px"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						position: "absolute",
						inset: 0,
						zIndex: 0,
						background: "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(131,56,236,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(251,86,7,0.10) 0%, transparent 60%)",
						pointerEvents: "none"
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "page-gutter",
						style: {
							position: "relative",
							zIndex: 1,
							maxWidth: "1400px",
							margin: "0 auto",
							paddingTop: "4rem",
							paddingBottom: "5rem"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/clubs",
							style: {
								display: "inline-flex",
								alignItems: "center",
								gap: "6px",
								color: "var(--clr-orange)",
								fontWeight: 600,
								fontSize: "0.8rem",
								letterSpacing: "0.1em",
								textTransform: "uppercase",
								textDecoration: "none",
								marginBottom: "3rem"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), " All clubs"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "1fr auto",
								gap: "3rem",
								alignItems: "flex-start"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										alignItems: "center",
										gap: "10px",
										marginBottom: "1.5rem"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
										size: 16,
										color: "var(--clr-orange)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											fontSize: "0.75rem",
											fontWeight: 700,
											letterSpacing: "0.12em",
											textTransform: "uppercase",
											color: "var(--clr-orange)"
										},
										children: c.category === "main" ? "Campus-wide Club" : "Department Chapter"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									style: {
										fontSize: "clamp(3.5rem, 9vw, 7rem)",
										fontWeight: 900,
										letterSpacing: "-0.03em",
										lineHeight: 1,
										margin: 0,
										color: "var(--clr-white)"
									},
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										marginTop: "1.5rem",
										fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
										color: "rgba(233,236,239,0.65)",
										maxWidth: "520px",
										lineHeight: 1.5
									},
									children: c.focus
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										display: "flex",
										gap: "2rem",
										marginTop: "2.5rem",
										flexWrap: "wrap"
									},
									children: [
										{
											label: "Community",
											value: "Active"
										},
										{
											label: "Events hosted",
											value: `${displayEvents.length}+`
										},
										{
											label: "Campus",
											value: "MLRIT"
										}
									].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											padding: "1rem 1.5rem",
											background: "rgba(255,255,255,0.04)",
											border: "1px solid rgba(255,255,255,0.08)",
											borderRadius: "12px"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontSize: "1.5rem",
												fontWeight: 800,
												color: "var(--clr-white)",
												lineHeight: 1
											},
											children: stat.value
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontSize: "0.72rem",
												letterSpacing: "0.08em",
												color: "rgba(233,236,239,0.45)",
												marginTop: "4px",
												textTransform: "uppercase"
											},
											children: stat.label
										})]
									}, stat.label))
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									width: "clamp(140px, 18vw, 220px)",
									aspectRatio: "1",
									borderRadius: "24px",
									background: "rgba(255,255,255,0.05)",
									border: "1px solid rgba(255,255,255,0.12)",
									backdropFilter: "blur(20px)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									overflow: "hidden",
									boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(131,56,236,0.15)",
									flexShrink: 0
								},
								children: logoSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logoSrc,
									alt: `${c.name} logo`,
									style: {
										width: "80%",
										height: "80%",
										objectFit: "contain"
									}
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										fontSize: "3rem",
										fontWeight: 900,
										letterSpacing: "0.15em",
										color: "var(--clr-white)",
										opacity: .7
									},
									children: c.name.slice(0, 2).toUpperCase()
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						position: "absolute",
						bottom: 0,
						left: 0,
						right: 0,
						height: "1px",
						background: "linear-gradient(90deg, transparent, rgba(131,56,236,0.4) 30%, rgba(251,86,7,0.4) 70%, transparent)"
					} })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				style: { padding: "5rem 0" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "page-gutter",
					style: {
						maxWidth: "1400px",
						margin: "0 auto"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "1fr 1fr",
							gap: "4rem",
							alignItems: "center"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								fontSize: "0.75rem",
								fontWeight: 700,
								letterSpacing: "0.12em",
								textTransform: "uppercase",
								color: "var(--clr-purple)",
								marginBottom: "1rem"
							},
							children: "About the club"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							style: {
								fontSize: "clamp(2rem, 4vw, 3rem)",
								fontWeight: 800,
								lineHeight: 1.15,
								color: "var(--clr-white)",
								margin: 0
							},
							children: [
								"Built by students,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"open to ideas."
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							style: {
								fontSize: "1.15rem",
								lineHeight: 1.75,
								color: "rgba(233,236,239,0.6)",
								margin: 0
							},
							children: [
								c.name,
								" is part of the MLRIT student community, bringing people together through",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										color: "rgba(233,236,239,0.9)",
										fontWeight: 500
									},
									children: c.focus.toLowerCase()
								}),
								". We welcome everyone who's curious, driven, and ready to collaborate."
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				style: { padding: "2rem 0 6rem" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-gutter",
					style: {
						maxWidth: "1400px",
						margin: "0 auto"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								alignItems: "flex-end",
								justifyContent: "space-between",
								marginBottom: "2.5rem",
								gap: "1rem",
								flexWrap: "wrap"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: "8px",
									marginBottom: "0.5rem"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
									size: 14,
									color: "var(--clr-orange)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										fontSize: "0.75rem",
										fontWeight: 700,
										letterSpacing: "0.12em",
										textTransform: "uppercase",
										color: "var(--clr-orange)"
									},
									children: clubEvents.length > 0 ? "Club Events" : "Featured Events"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								style: {
									fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
									fontWeight: 800,
									color: "var(--clr-white)",
									margin: 0,
									lineHeight: 1.1
								},
								children: clubEvents.length > 0 ? `Events by ${c.name}` : "Upcoming Experiences"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/events",
								style: {
									display: "inline-flex",
									alignItems: "center",
									gap: "6px",
									padding: "0.6rem 1.2rem",
									background: "rgba(255,255,255,0.05)",
									border: "1px solid rgba(255,255,255,0.12)",
									borderRadius: "50px",
									color: "rgba(233,236,239,0.7)",
									fontSize: "0.82rem",
									fontWeight: 600,
									letterSpacing: "0.05em",
									textDecoration: "none",
									transition: "all 0.2s ease"
								},
								onMouseEnter: (e) => {
									e.currentTarget.style.background = "rgba(131,56,236,0.15)";
									e.currentTarget.style.borderColor = "rgba(131,56,236,0.4)";
									e.currentTarget.style.color = "var(--clr-white)";
								},
								onMouseLeave: (e) => {
									e.currentTarget.style.background = "rgba(255,255,255,0.05)";
									e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
									e.currentTarget.style.color = "rgba(233,236,239,0.7)";
								},
								children: ["All events ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
								gap: "1.25rem"
							},
							children: displayEvents.map((event, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/events/$id",
								params: { id: event.id },
								style: { textDecoration: "none" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: idx === 0 ? "linear-gradient(135deg, rgba(131,56,236,0.18) 0%, rgba(14,10,26,0.95) 100%)" : "rgba(255,255,255,0.03)",
										border: idx === 0 ? "1px solid rgba(131,56,236,0.3)" : "1px solid rgba(255,255,255,0.07)",
										borderRadius: "18px",
										padding: "1.75rem",
										cursor: "pointer",
										transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
										height: "100%",
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-between",
										gap: "1.5rem"
									},
									onMouseEnter: (e) => {
										const el = e.currentTarget;
										el.style.transform = "translateY(-4px)";
										el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(131,56,236,0.25)";
										el.style.borderColor = "rgba(131,56,236,0.35)";
									},
									onMouseLeave: (e) => {
										const el = e.currentTarget;
										el.style.transform = "translateY(0)";
										el.style.boxShadow = "none";
										el.style.borderColor = idx === 0 ? "rgba(131,56,236,0.3)" : "rgba(255,255,255,0.07)";
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												display: "flex",
												alignItems: "center",
												justifyContent: "space-between",
												marginBottom: "1.25rem"
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: {
													display: "inline-block",
													padding: "3px 10px",
													borderRadius: "50px",
													background: idx === 0 ? "rgba(131,56,236,0.3)" : "rgba(255,255,255,0.06)",
													border: `1px solid ${idx === 0 ? "rgba(131,56,236,0.5)" : "rgba(255,255,255,0.1)"}`,
													color: idx === 0 ? "#c084fc" : "rgba(233,236,239,0.55)",
													fontSize: "0.7rem",
													fontWeight: 700,
													letterSpacing: "0.1em",
													textTransform: "uppercase"
												},
												children: event.type
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
												size: 16,
												color: "rgba(233,236,239,0.3)"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											style: {
												fontSize: "1.3rem",
												fontWeight: 700,
												color: "var(--clr-white)",
												margin: 0,
												lineHeight: 1.2,
												marginBottom: "0.75rem"
											},
											children: event.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: {
												fontSize: "0.9rem",
												color: "rgba(233,236,239,0.5)",
												margin: 0,
												lineHeight: 1.6
											},
											children: event.description
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											display: "flex",
											gap: "1.25rem",
											flexWrap: "wrap",
											borderTop: "1px solid rgba(255,255,255,0.06)",
											paddingTop: "1rem"
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												style: {
													display: "flex",
													alignItems: "center",
													gap: "5px",
													fontSize: "0.78rem",
													color: "rgba(233,236,239,0.45)"
												},
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 12 }),
													" ",
													event.date
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												style: {
													display: "flex",
													alignItems: "center",
													gap: "5px",
													fontSize: "0.78rem",
													color: "rgba(233,236,239,0.45)"
												},
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 12 }),
													" ",
													event.venue
												]
											}),
											event.price && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: {
													marginLeft: "auto",
													fontSize: "0.78rem",
													fontWeight: 700,
													color: event.price === "Free" ? "#4ade80" : "var(--clr-orange)"
												},
												children: event.price
											})
										]
									})]
								})
							}, event.id))
						}),
						displayEvents.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								textAlign: "center",
								padding: "5rem 2rem",
								background: "rgba(255,255,255,0.02)",
								borderRadius: "24px",
								border: "1px solid rgba(255,255,255,0.06)"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									color: "rgba(233,236,239,0.4)",
									fontSize: "1rem"
								},
								children: "No events listed yet — check back soon."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/events",
								style: {
									display: "inline-flex",
									alignItems: "center",
									gap: "6px",
									marginTop: "1.5rem",
									padding: "0.7rem 1.5rem",
									background: "var(--clr-purple)",
									color: "#fff",
									borderRadius: "50px",
									fontWeight: 600,
									fontSize: "0.85rem",
									textDecoration: "none"
								},
								children: ["Browse all events ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				style: {
					margin: "0 0 5rem",
					padding: "3rem",
					background: "linear-gradient(135deg, rgba(131,56,236,0.15) 0%, rgba(251,86,7,0.08) 100%)",
					border: "1px solid rgba(131,56,236,0.2)",
					borderRadius: "24px",
					maxWidth: "1400px",
					marginLeft: "auto",
					marginRight: "auto"
				},
				className: "page-gutter",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						gap: "2rem",
						flexWrap: "wrap"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						style: {
							fontSize: "clamp(1.5rem, 3vw, 2rem)",
							fontWeight: 800,
							color: "var(--clr-white)",
							margin: 0
						},
						children: ["Join ", c.name]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: {
							color: "rgba(233,236,239,0.5)",
							marginTop: "0.5rem",
							fontSize: "0.95rem"
						},
						children: [
							"Be part of the community shaping ",
							c.focus.toLowerCase(),
							"."
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/clubs",
						style: {
							display: "inline-flex",
							alignItems: "center",
							gap: "8px",
							padding: "0.85rem 2rem",
							background: "var(--clr-orange)",
							color: "#fff",
							borderRadius: "50px",
							fontWeight: 700,
							fontSize: "0.9rem",
							textDecoration: "none",
							letterSpacing: "0.04em",
							boxShadow: "0 8px 24px rgba(251,86,7,0.35)",
							transition: "transform 0.2s ease, box-shadow 0.2s ease"
						},
						onMouseEnter: (e) => {
							e.currentTarget.style.transform = "scale(1.04)";
							e.currentTarget.style.boxShadow = "0 12px 32px rgba(251,86,7,0.5)";
						},
						onMouseLeave: (e) => {
							e.currentTarget.style.transform = "scale(1)";
							e.currentTarget.style.boxShadow = "0 8px 24px rgba(251,86,7,0.35)";
						},
						children: ["Explore all clubs ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ClubPage as component };
