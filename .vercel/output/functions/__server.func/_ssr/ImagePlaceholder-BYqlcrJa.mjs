import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { s as cn } from "./ui-bits-Bo_UbXkN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ImagePlaceholder-BYqlcrJa.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Elegant stand-in for a real photograph.
* Replace with <img src=... alt=... loading="lazy" /> once photos are available.
*/
function ImagePlaceholder({ label, className, steam = false, aspect = "aspect-[4/3]", src }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "img",
		"aria-label": `Image placeholder: ${label}`,
		className: cn("group relative isolate overflow-hidden rounded-lg border border-border bg-accent/60", aspect, className),
		children: [
			src && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: label,
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 kolam-dots",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_120%,var(--color-gold)/25,transparent_60%)] opacity-40",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-3 rounded-md border border-gold/40",
				"aria-hidden": "true"
			}),
			steam ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute bottom-1/3 left-1/2 flex -translate-x-1/2 gap-3",
				"aria-hidden": "true",
				children: [
					0,
					1,
					2
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "animate-steam block h-10 w-1.5 rounded-full bg-ivory/70 blur-[3px]",
					style: { animationDelay: `${i * 1.1}s` }
				}, i))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex h-full flex-col items-center justify-center gap-2 px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-px w-10 rule-ornament",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xs tracking-[0.28em] text-secondary/80 uppercase sm:text-sm",
						children: label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[10px] tracking-[0.18em] text-muted-foreground uppercase" })
				]
			})
		]
	});
}
//#endregion
export { ImagePlaceholder as t };
