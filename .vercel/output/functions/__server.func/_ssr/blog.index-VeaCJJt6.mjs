import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SpiceParticles, i as Section, p as posts } from "./ui-bits-Bo_UbXkN.mjs";
import { t as ImagePlaceholder } from "./ImagePlaceholder-BYqlcrJa.mjs";
import { s as Reveal, t as CTASection } from "./blocks-BRp-Ebq1.mjs";
import { t as BlogCard } from "./cards-BP5_XqLZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-VeaCJJt6.js
var import_jsx_runtime = require_jsx_runtime();
function BlogIndex() {
	const [featured, ...rest] = posts;
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
								children: "Journal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 text-balance-tight text-4xl leading-tight text-secondary sm:text-5xl",
								children: "From the World of Chettinad Cuisine"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-lg leading-relaxed text-muted-foreground",
								children: "Notes on spices, South Indian food culture and eating well in Vandalur, Chennai."
							})
						]
					})
				})
			]
		}),
		featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "surface-card group grid overflow-hidden rounded-xl lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
					label: featured.placeholder,
					aspect: "aspect-[16/11] lg:h-full lg:aspect-auto",
					className: "h-full rounded-none border-0 transition-transform duration-700 group-hover:scale-[1.04]"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center p-8 sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-x-3 text-[10px] font-semibold tracking-[0.18em] uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-primary",
								children: ["Featured · ", featured.category]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: featured.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: featured.readingTime
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-3xl leading-snug text-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog/$slug",
							params: { slug: featured.slug },
							className: "transition-colors hover:text-primary",
							children: featured.title
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-muted-foreground",
						children: featured.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/blog/$slug",
						params: { slug: featured.slug },
						className: "mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5",
						children: "Read Article →"
					})
				]
			})]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: rest.map((post, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 3 * 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogCard, {
					...post,
					showDate: true
				})
			}, post.slug))
		})] }) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { BlogIndex as component };
