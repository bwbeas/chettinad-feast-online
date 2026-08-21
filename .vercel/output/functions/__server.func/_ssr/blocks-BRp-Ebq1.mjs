import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SpiceParticles, d as openingHours, h as restaurant, i as Section, l as links, m as reservationOptions, o as btnClass, s as cn, t as ActionAnchor } from "./ui-bits-Bo_UbXkN.mjs";
import { b as ExternalLink, d as MapPin, l as Phone, x as Clock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blocks-BRp-Ebq1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Lightweight IntersectionObserver scroll reveal (CSS does the animating). */
function Reveal({ children, className, delay = 0, as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			el.dataset["visible"] = "true";
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					el.dataset["visible"] = "true";
					observer.unobserve(el);
				}
			});
		}, {
			threshold: .12,
			rootMargin: "0px 0px -8% 0px"
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		"data-reveal": "",
		style: { transitionDelay: `${delay}ms` },
		className: cn(className),
		children
	});
}
function SectionHeading({ eyebrow, title, description, align = "center", as: Tag = "h2", className }) {
	const centered = align === "center";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn(centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex items-center gap-3", centered && "justify-center"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-px w-8 rule-ornament",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold tracking-[0.26em] text-primary uppercase",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-px w-8 rule-ornament",
						"aria-hidden": "true"
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
				className: "mt-4 text-balance-tight text-3xl leading-tight text-secondary sm:text-4xl md:text-[2.75rem]",
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted-foreground",
				children: description
			}) : null
		]
	});
}
function OpeningHours() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "surface-card rounded-xl p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "flex items-center gap-2 font-display text-xl text-secondary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
					className: "h-5 w-5 text-primary",
					"aria-hidden": "true"
				}), " Opening Hours"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs tracking-wide text-muted-foreground uppercase",
				children: "[ADD VERIFIED OPENING HOURS]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-4 divide-y divide-border text-sm",
				children: openingHours.map(({ day, time }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between py-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-medium text-secondary",
						children: day
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-muted-foreground",
						children: time
					})]
				}, day))
			})
		]
	});
}
function ContactCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "surface-card rounded-xl p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl text-secondary",
				children: restaurant.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
				className: "mt-3 text-sm leading-relaxed text-muted-foreground not-italic",
				children: restaurant.addressLines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block",
					children: line
				}, line))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionAnchor, {
					href: restaurant.mapsDirectionsUrl,
					external: true,
					variant: "primary",
					size: "sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), " Get Directions"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionAnchor, {
					href: restaurant.phoneHref,
					variant: "outline",
					size: "sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), " Call the Restaurant"]
				})]
			})
		]
	});
}
function ReservationButtons() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3 sm:grid-cols-2",
		children: reservationOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: option.url,
			className: "group surface-card flex items-center justify-between rounded-lg px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-display text-lg text-secondary",
				children: option.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "block text-[10px] tracking-[0.18em] text-muted-foreground uppercase",
				children: [option.note, " · link to be added"]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
				className: "h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
				"aria-hidden": "true"
			})]
		}, option.label))
	});
}
function LocationSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		tone: "ivory",
		id: "visit",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Visit Us",
			title: "Visit Manpaanai Chettinadu Virundhu in Vandalur",
			description: "Find us on the Grand Southern Trunk Road at Otteri, directly opposite Vandalur Zoo — an easy stop for families, travellers and anyone craving Chettinad food in Chennai."
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "surface-card overflow-hidden rounded-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: `Map showing the location of ${restaurant.name} in Vandalur, Chennai`,
					src: restaurant.mapsEmbedUrl,
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade",
					className: "h-full min-h-[340px] w-full border-0"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 160,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpeningHours, {})
				})]
			})]
		})]
	});
}
function CTASection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden bg-secondary py-20 text-secondary-foreground sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpiceParticles, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 kolam-dots opacity-15",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-3xl px-5 text-center sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-auto block h-px w-14 rule-ornament",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 text-balance-tight font-display text-3xl leading-tight sm:text-4xl md:text-[2.75rem]",
						children: "Planning a Meal? Let's Make It Special."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-xl leading-relaxed text-secondary-foreground/75",
						children: "Gather your family and friends and enjoy authentic South Indian and Chettinad flavours in Vandalur."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							hash: "reserve",
							className: btnClass("gold", "lg"),
							children: "Reserve a Table"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionAnchor, {
							href: restaurant.phoneHref,
							variant: "ghostLight",
							size: "lg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}),
								" Call ",
								restaurant.phoneDisplay
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-xs tracking-[0.16em] text-secondary-foreground/50 uppercase",
						children: ["Reservation link placeholder: ", links.RESERVATION_URL]
					})
				]
			})
		]
	});
}
function FindUsOnline() {
	const online = [
		{
			label: "Google Business Profile",
			href: links.GOOGLE_BUSINESS_URL
		},
		{
			label: "Instagram",
			href: links.INSTAGRAM_URL
		},
		{
			label: "Facebook",
			href: links.FACEBOOK_URL
		},
		{
			label: "Zomato",
			href: links.ZOMATO_URL
		},
		{
			label: "Swiggy",
			href: links.SWIGGY_URL
		},
		{
			label: "District",
			href: links.DISTRICT_URL
		},
		{
			label: "EazyDiner",
			href: links.EAZYDINER_URL
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		tone: "muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Find Us Online",
			title: "Follow Manpaanai Chettinadu Virundhu",
			description: "Our listings and social profiles will be linked here — replace each placeholder link once the profiles are confirmed."
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: 80,
			className: "mt-10 flex flex-wrap justify-center gap-3",
			children: online.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: item.href,
				className: "surface-card inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:text-primary hover:shadow-lift",
				children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
					className: "h-3.5 w-3.5 text-primary",
					"aria-hidden": "true"
				})]
			}, item.label))
		})]
	});
}
//#endregion
export { OpeningHours as a, SectionHeading as c, LocationSection as i, ContactCard as n, ReservationButtons as o, FindUsOnline as r, Reveal as s, CTASection as t };
