import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as restaurant, l as links, o as btnClass, p as posts, s as cn } from "./ui-bits-Bo_UbXkN.mjs";
import { _ as Globe, d as MapPin, l as Phone, m as Instagram, n as X, t as Youtube, u as Menu, y as Facebook } from "../_libs/lucide-react.mjs";
import { t as Route$7 } from "./blog._slug-QoiUjUQP.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C8V9OLi6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-B_drS8Ji.css";
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
var navItems = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/menu",
		label: "Menu"
	},
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/blog",
		label: "Blog"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "border-b border-border/70 bg-ivory/95 backdrop-blur-md shadow-warm" : "bg-ivory/70 backdrop-blur-sm"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Main navigation",
			className: cn("mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 transition-all duration-500 sm:px-8", scrolled ? "py-2.5" : "py-4"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex items-center gap-3",
					"aria-label": `${restaurant.name} — home`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("grid place-items-center rounded-full bg-ember font-display text-primary-foreground transition-all duration-500", scrolled ? "h-9 w-9 text-base" : "h-11 w-11 text-lg"),
						"aria-hidden": "true",
						children: "M"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("block font-display text-secondary transition-all duration-500", scrolled ? "text-base sm:text-lg" : "text-lg sm:text-xl"),
							children: "Manpaanai"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[9px] font-semibold tracking-[0.22em] text-primary uppercase sm:text-[10px]",
							children: "Chettinadu Virundhu"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-1 lg:flex",
					children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						activeProps: { className: "text-primary after:scale-x-100" },
						className: "relative px-3.5 py-2 text-sm font-medium text-secondary/85 transition-colors after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary hover:after:scale-x-100",
						children: item.label
					}) }, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: restaurant.phoneHref,
							className: "hidden items-center gap-2 text-sm font-medium text-secondary/85 transition-colors hover:text-primary md:inline-flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Call "
								}),
								restaurant.phoneDisplay
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							hash: "reserve",
							className: btnClass("primary", "sm", "hidden sm:inline-flex"),
							children: "Reserve a Table"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen(true),
							"aria-label": "Open menu",
							"aria-expanded": open,
							className: "grid h-10 w-10 place-items-center rounded-full border border-border text-secondary transition-colors hover:border-primary hover:text-primary lg:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
								className: "h-5 w-5",
								"aria-hidden": "true"
							})
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("fixed inset-0 z-50 lg:hidden", open ? "pointer-events-auto" : "pointer-events-none"),
			"aria-hidden": !open,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("absolute inset-0 bg-secondary/50 transition-opacity duration-300", open ? "opacity-100" : "opacity-0"),
				onClick: () => setOpen(false)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "dialog",
				"aria-modal": "true",
				"aria-label": "Site menu",
				className: cn("absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-ivory shadow-lift transition-transform duration-400 ease-out", open ? "translate-x-0" : "translate-x-full"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg text-secondary",
							children: "Manpaanai"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen(false),
							"aria-label": "Close menu",
							className: "grid h-10 w-10 place-items-center rounded-full border border-border text-secondary hover:border-primary hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: "h-5 w-5",
								"aria-hidden": "true"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-1 flex-col gap-1 px-4 py-6",
						children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							activeOptions: { exact: item.to === "/" },
							activeProps: { className: "bg-accent/60 text-primary" },
							onClick: () => setOpen(false),
							className: "block rounded-lg px-4 py-3.5 font-display text-xl text-secondary transition-colors hover:bg-accent/60 hover:text-primary",
							children: item.label
						}) }, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 border-t border-border px-5 py-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							hash: "reserve",
							onClick: () => setOpen(false),
							className: btnClass("primary", "md", "w-full"),
							children: "Reserve a Table"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: restaurant.phoneHref,
							className: btnClass("outline", "md", "w-full"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}),
								" ",
								restaurant.phoneDisplay
							]
						})]
					})
				]
			})]
		})]
	});
}
var quickLinks = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/menu",
		label: "Menu"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/blog",
		label: "Blog"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var socials = [
	{
		label: "Instagram",
		href: links.INSTAGRAM_URL,
		Icon: Instagram
	},
	{
		label: "Facebook",
		href: links.FACEBOOK_URL,
		Icon: Facebook
	},
	{
		label: "Google Business Profile",
		href: links.GOOGLE_BUSINESS_URL,
		Icon: Globe
	},
	{
		label: "YouTube",
		href: links.YOUTUBE_URL,
		Icon: Youtube
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden bg-secondary text-secondary-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 top-0 h-px rule-ornament",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -right-16 -bottom-16 h-64 w-64 rounded-full border border-gold/20",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl",
							children: restaurant.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xs text-sm leading-relaxed text-secondary-foreground/70",
							children: "Authentic Chettinad and South Indian cuisine in Vandalur, Chennai."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex gap-3",
							children: socials.map(({ label, href, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								"aria-label": label,
								className: "grid h-10 w-10 place-items-center rounded-full border border-ivory/25 text-secondary-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								})
							}, label))
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Footer navigation",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs font-semibold tracking-[0.24em] text-gold uppercase",
							children: "Quick Links"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3 text-sm",
							children: quickLinks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: "text-secondary-foreground/75 transition-colors hover:text-gold",
								children: item.label
							}) }, item.to))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs font-semibold tracking-[0.24em] text-gold uppercase",
							children: "Visit Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
							className: "mt-5 text-sm leading-relaxed text-secondary-foreground/75 not-italic",
							children: restaurant.footerAddressLines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: line
							}, line))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: restaurant.mapsDirectionsUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-4 inline-flex items-center gap-2 text-sm text-gold transition-colors hover:text-gold/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), " Get Directions"]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs font-semibold tracking-[0.24em] text-gold uppercase",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: restaurant.phoneHref,
							className: "mt-5 inline-flex items-center gap-2 font-display text-xl transition-colors hover:text-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}),
								" ",
								restaurant.phoneDisplay
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-secondary-foreground/70",
							children: "Chettinad restaurant in Vandalur, on GST Road opposite Vandalur Zoo."
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative border-t border-ivory/12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-secondary-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© 2026 ",
						restaurant.name,
						". All Rights Reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Designed as an SEO-focused digital presence for ",
						restaurant.name,
						"."
					] })]
				})
			})
		]
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
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Manpaanai Chettinadu Virundhu | Chettinad Restaurant in Vandalur" },
			{
				name: "description",
				content: "Authentic Chettinad and South Indian cuisine at Manpaanai Chettinadu Virundhu, GST Road, Vandalur, Chennai."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Manpaanai Chettinadu Virundhu"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#7a3521"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
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
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..800;1,400..600&family=Manrope:wght@400;500;600;700&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Restaurant",
				name: "Manpaanai Chettinadu Virundhu",
				description: "Restaurant serving authentic Chettinad and South Indian cuisine in Vandalur, Chennai.",
				servesCuisine: [
					"Chettinad",
					"South Indian",
					"Indian"
				],
				priceRange: "₹₹",
				telephone: "+91 70949 88889",
				url: "/",
				hasMenu: "/menu",
				address: {
					"@type": "PostalAddress",
					streetAddress: "133, Grand Southern Trunk Road, Opposite to Zoo, Otteri",
					addressLocality: "Vandalur, Chennai",
					addressRegion: "Tamil Nadu",
					postalCode: "600048",
					addressCountry: "IN"
				},
				areaServed: ["Vandalur", "Chennai"],
				openingHours: ["[ADD VERIFIED OPENING HOURS]"],
				sameAs: [
					"ADD_GOOGLE_BUSINESS_PROFILE_URL",
					"ADD_INSTAGRAM_URL",
					"ADD_FACEBOOK_URL",
					"ADD_ZOMATO_URL"
				]
			})
		}]
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
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var $$splitComponentImporter$4 = () => import("./routes-B6Ci8RUw.mjs");
var TITLE$4 = "Manpaanai Chettinadu Virundhu | Chettinad Restaurant in Vandalur";
var DESCRIPTION$4 = "Discover authentic Chettinad and South Indian cuisine at Manpaanai Chettinadu Virundhu, located on GST Road opposite Vandalur Zoo in Chennai.";
var Route$5 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: TITLE$4 },
			{
				name: "description",
				content: DESCRIPTION$4
			},
			{
				property: "og:title",
				content: TITLE$4
			},
			{
				property: "og:description",
				content: DESCRIPTION$4
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:title",
				content: TITLE$4
			},
			{
				name: "twitter:description",
				content: DESCRIPTION$4
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./about-DJzvAu8I.mjs");
var TITLE$3 = "About Us | Manpaanai Chettinadu Virundhu, Vandalur";
var DESCRIPTION$3 = "Learn about Manpaanai Chettinadu Virundhu, a Chettinad and South Indian restaurant on GST Road in Vandalur, Chennai — our food philosophy and dining experience.";
var Route$4 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: TITLE$3 },
			{
				name: "description",
				content: DESCRIPTION$3
			},
			{
				property: "og:title",
				content: TITLE$3
			},
			{
				property: "og:description",
				content: DESCRIPTION$3
			},
			{
				property: "og:url",
				content: "/about"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:title",
				content: TITLE$3
			},
			{
				name: "twitter:description",
				content: DESCRIPTION$3
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-DYucz5UD.mjs");
var TITLE$2 = "Contact & Location | Manpaanai Chettinadu Virundhu";
var DESCRIPTION$2 = "Contact Manpaanai Chettinadu Virundhu, a Chettinad restaurant in Vandalur, Chennai. Call 070949 88889, find directions on GST Road or send an enquiry.";
var Route$3 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: TITLE$2 },
			{
				name: "description",
				content: DESCRIPTION$2
			},
			{
				property: "og:title",
				content: TITLE$2
			},
			{
				property: "og:description",
				content: DESCRIPTION$2
			},
			{
				property: "og:url",
				content: "/contact"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:title",
				content: TITLE$2
			},
			{
				name: "twitter:description",
				content: DESCRIPTION$2
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./menu-CTJR80En.mjs");
var TITLE$1 = "Menu | Chettinad & South Indian Food in Vandalur";
var DESCRIPTION$1 = "Explore the Chettinad and South Indian menu at Manpaanai Chettinadu Virundhu in Vandalur, Chennai. Discover traditional favourites, biryani, tiffin and more.";
var Route$2 = createFileRoute("/menu")({
	head: () => ({
		meta: [
			{ title: TITLE$1 },
			{
				name: "description",
				content: DESCRIPTION$1
			},
			{
				property: "og:title",
				content: TITLE$1
			},
			{
				property: "og:description",
				content: DESCRIPTION$1
			},
			{
				property: "og:url",
				content: "/menu"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:title",
				content: TITLE$1
			},
			{
				name: "twitter:description",
				content: DESCRIPTION$1
			}
		],
		links: [{
			rel: "canonical",
			href: "/menu"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var BASE_URL = "";
var Route$1 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/menu",
				changefreq: "weekly",
				priority: "0.9"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/blog",
				changefreq: "weekly",
				priority: "0.7"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.8"
			},
			...posts.map((post) => ({
				path: `/blog/${post.slug}`,
				changefreq: "monthly",
				priority: "0.6"
			}))
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter = () => import("./blog.index-VeaCJJt6.mjs");
var TITLE = "Food & Chettinad Cuisine Blog | Manpaanai Vandalur";
var DESCRIPTION = "Read about Chettinad cuisine, South Indian breakfasts, spices and dining in Vandalur from Manpaanai Chettinadu Virundhu, Chennai.";
var Route = createFileRoute("/blog/")({
	head: () => ({
		meta: [
			{ title: TITLE },
			{
				name: "description",
				content: DESCRIPTION
			},
			{
				property: "og:title",
				content: TITLE
			},
			{
				property: "og:description",
				content: DESCRIPTION
			},
			{
				property: "og:url",
				content: "/blog"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:title",
				content: TITLE
			},
			{
				name: "twitter:description",
				content: DESCRIPTION
			}
		],
		links: [{
			rel: "canonical",
			href: "/blog"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var AboutRoute = Route$4.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$6
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$6
});
var MenuRoute = Route$2.update({
	id: "/menu",
	path: "/menu",
	getParentRoute: () => Route$6
});
var SitemapDotxmlRoute = Route$1.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$6
});
var BlogIndexRoute = Route.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	MenuRoute,
	SitemapDotxmlRoute,
	BlogSlugRoute: Route$7.update({
		id: "/blog/$slug",
		path: "/blog/$slug",
		getParentRoute: () => Route$6
	}),
	BlogIndexRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
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
