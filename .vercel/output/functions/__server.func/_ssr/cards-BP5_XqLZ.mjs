import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as cn } from "./ui-bits-Bo_UbXkN.mjs";
import { t as ImagePlaceholder } from "./ImagePlaceholder-BYqlcrJa.mjs";
import { T as ArrowRight, s as Star } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cards-BP5_XqLZ.js
var import_jsx_runtime = require_jsx_runtime();
function FoodCard({ name, category, description, placeholder, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("group surface-card flex flex-col overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
				label: placeholder,
				steam: true,
				aspect: "aspect-[5/4]",
				className: "rounded-none border-0 transition-transform duration-700 group-hover:scale-[1.05]"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] font-semibold tracking-[0.2em] text-primary uppercase",
					children: category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-xl text-secondary",
					children: name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 flex-1 text-sm leading-relaxed text-muted-foreground",
					children: description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/menu",
					className: "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5",
					children: ["View Menu ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					})]
				})
			]
		})]
	});
}
function ReviewCard({ name, quote, meta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "surface-card flex h-full flex-col rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-0.5 text-gold",
				"aria-label": "Five star rating placeholder",
				children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
					className: "h-4 w-4 fill-current",
					"aria-hidden": "true"
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "mt-4 flex-1 font-display text-lg leading-relaxed text-secondary italic",
				children: [
					"“",
					quote,
					"”"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-5 border-t border-border pt-4 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-semibold text-secondary",
					children: ["— ", name]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-muted-foreground uppercase",
					children: meta
				})]
			})
		]
	});
}
function BlogCard({ slug, title, category, excerpt, readingTime, date, placeholder, showDate = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group surface-card flex flex-col overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
				label: placeholder,
				aspect: "aspect-[16/10]",
				className: "rounded-none border-0 transition-transform duration-700 group-hover:scale-[1.05]"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-semibold tracking-[0.18em] uppercase",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: category
						}),
						showDate && date ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: date
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: readingTime
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 font-display text-xl leading-snug text-secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/blog/$slug",
						params: { slug },
						className: "transition-colors hover:text-primary",
						children: title
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
					children: excerpt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog/$slug",
					params: { slug },
					className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5",
					children: ["Read Article ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					})]
				})
			]
		})]
	});
}
//#endregion
export { FoodCard as n, ReviewCard as r, BlogCard as t };
