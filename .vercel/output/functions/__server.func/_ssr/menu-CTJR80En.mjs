import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SpiceParticles, h as restaurant, i as Section, o as btnClass, u as menu } from "./ui-bits-Bo_UbXkN.mjs";
import { t as ImagePlaceholder } from "./ImagePlaceholder-BYqlcrJa.mjs";
import { c as SectionHeading, o as ReservationButtons, s as Reveal, t as CTASection } from "./blocks-BRp-Ebq1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-CTJR80En.js
var import_jsx_runtime = require_jsx_runtime();
function MenuPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-ivory pt-32 pb-16 sm:pt-36",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpiceParticles, { count: 10 }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 kolam-dots opacity-35",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-6xl px-5 sm:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-reveal max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold tracking-[0.26em] text-primary uppercase",
								children: "Chettinad · South Indian"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 text-balance-tight text-4xl leading-tight text-secondary sm:text-5xl",
								children: "Our Menu"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-lg leading-relaxed text-muted-foreground",
								children: "Explore the flavours of authentic Chettinad and South Indian cuisine."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted-foreground",
								children: "Prices are confirmed in the restaurant"
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "Menu categories",
			className: "flex flex-wrap gap-2",
			children: menu.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `#${slug(group.category)}`,
				className: "surface-card rounded-full px-4 py-2 text-sm font-medium text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:text-primary",
				children: group.category
			}, group.category))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 space-y-16",
			children: menu.map((group, gi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				as: "section",
				delay: 40,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: slug(group.category),
					className: "scroll-mt-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl text-secondary",
							children: group.category
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-2 hidden h-px flex-1 rule-ornament sm:block",
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 grid gap-6 lg:grid-cols-[1fr_320px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-3 sm:grid-cols-2",
							children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "surface-card rounded-lg p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-lg text-secondary",
											children: item.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0 text-sm font-semibold text-primary",
											children: "₹ —"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
										children: item.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-[10px] tracking-[0.16em] text-muted-foreground uppercase",
										children: "Price available at restaurant"
									})
								]
							}, item.name))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
							label: `[${group.category.toUpperCase()} IMAGE]`,
							aspect: "aspect-[4/5] lg:aspect-auto lg:h-full",
							steam: gi % 2 === 0,
							className: "hidden lg:block"
						})]
					})]
				})
			}, group.category))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "ivory",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Reservations",
				title: "Book a Table at Manpaanai",
				description: `Reserve through your preferred platform, or simply call ${restaurant.phoneDisplay}.`
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 100,
				className: "mx-auto mt-10 max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReservationButtons, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						hash: "reserve",
						className: btnClass("primary", "lg"),
						children: "Reserve a Table"
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
function slug(value) {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
//#endregion
export { MenuPage as component };
