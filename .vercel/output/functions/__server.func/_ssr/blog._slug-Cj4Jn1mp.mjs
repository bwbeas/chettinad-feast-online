import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Section, p as posts } from "./ui-bits-Bo_UbXkN.mjs";
import { t as ImagePlaceholder } from "./ImagePlaceholder-BYqlcrJa.mjs";
import { E as ArrowLeft } from "../_libs/lucide-react.mjs";
import { s as Reveal, t as CTASection } from "./blocks-BRp-Ebq1.mjs";
import { t as Route } from "./blog._slug-QoiUjUQP.mjs";
import { t as BlogCard } from "./cards-BP5_XqLZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-Cj4Jn1mp.js
var import_jsx_runtime = require_jsx_runtime();
function ArticlePage() {
	const { post } = Route.useLoaderData();
	const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative isolate overflow-hidden bg-ivory pt-32 pb-14 sm:pt-36",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 kolam-dots opacity-35",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-3xl px-5 sm:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog",
							className: "inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), " All articles"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-x-3 text-[10px] font-semibold tracking-[0.18em] uppercase",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: post.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: post.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: post.readingTime
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 text-balance-tight text-3xl leading-tight text-secondary sm:text-4xl",
							children: post.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg leading-relaxed text-muted-foreground",
							children: post.excerpt
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-3xl px-5 pb-4 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
					label: post.placeholder,
					aspect: "aspect-[16/9]",
					className: "shadow-warm"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				className: "py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-[17px]",
					children: post.body.map((paragraph, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "p",
						delay: i * 40,
						children: paragraph
					}, i))
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-secondary",
				children: "Keep Reading"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-6 md:grid-cols-3",
				children: related.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogCard, { ...item })
				}, item.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { ArticlePage as component };
