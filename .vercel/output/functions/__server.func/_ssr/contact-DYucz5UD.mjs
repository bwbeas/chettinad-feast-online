import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as SpiceParticles, h as restaurant, i as Section, n as ActionButton, s as cn } from "./ui-bits-Bo_UbXkN.mjs";
import { S as CircleCheck, d as MapPin, l as Phone } from "../_libs/lucide-react.mjs";
import { a as OpeningHours, c as SectionHeading, n as ContactCard, o as ReservationButtons, r as FindUsOnline, s as Reveal } from "./blocks-BRp-Ebq1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DYucz5UD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	function handleSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);
		const get = (key) => String(data.get(key) ?? "").trim();
		const next = {};
		if (get("name").length < 2) next.name = "Please enter your name.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(get("email"))) next.email = "Please enter a valid email address.";
		if (!/^[\d+\s()-]{8,15}$/.test(get("phone"))) next.phone = "Please enter a valid phone number.";
		if (get("subject").length < 3) next.subject = "Please add a subject.";
		if (get("message").length < 10) next.message = "Please tell us a little more (10+ characters).";
		setErrors(next);
		if (Object.keys(next).length === 0) {
			setSent(true);
			form.reset();
		} else setSent(false);
	}
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
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 text-balance-tight text-4xl leading-tight text-secondary sm:text-5xl",
								children: "Come Visit Us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 text-lg leading-relaxed text-muted-foreground",
								children: [restaurant.name, " — Chettinad and South Indian cuisine on GST Road, opposite Vandalur Zoo, Chennai."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-wrap gap-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: restaurant.phoneHref,
									className: "inline-flex items-center gap-2 font-semibold text-primary hover:underline",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											className: "h-4 w-4",
											"aria-hidden": "true"
										}),
										" ",
										restaurant.phoneDisplay
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: restaurant.mapsDirectionsUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-2 font-semibold text-primary hover:underline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									}), " Get Directions"]
								})]
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[1.1fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card rounded-xl p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-secondary",
						children: "Send an Enquiry"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "For reservations, group bookings or questions about our menu."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						noValidate: true,
						className: "mt-7 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								name: "name",
								error: errors.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									name: "email",
									type: "email",
									error: errors.email
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									name: "phone",
									type: "tel",
									error: errors.phone
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Subject",
								name: "subject",
								error: errors.subject
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Message",
								name: "message",
								textarea: true,
								error: errors.message
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButton, {
								type: "submit",
								variant: "primary",
								size: "lg",
								className: "w-full sm:w-auto",
								children: "Send Enquiry"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-live": "polite",
								children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2 rounded-lg bg-leaf/10 px-4 py-3 text-sm font-medium text-leaf",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									}), "Thank you — your enquiry has been noted. We will get back to you shortly."]
								}) : Object.keys(errors).length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rounded-lg bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive",
									children: "Please correct the highlighted fields and try again."
								}) : null
							})
						]
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 140,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpeningHours, {})
				})]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "ivory",
			id: "reserve",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Reservations",
				title: "Reserve a Table in Vandalur",
				description: "Choose a booking platform below, or call us directly. These links are placeholders to be replaced with the live reservation URLs."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 100,
				className: "mx-auto mt-10 max-w-2xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReservationButtons, {})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "muted",
			className: "pt-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "surface-card overflow-hidden rounded-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: `Map showing the location of ${restaurant.name}`,
					src: restaurant.mapsEmbedUrl,
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade",
					className: "h-[420px] w-full border-0"
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FindUsOnline, {})
	] });
}
function Field({ label, name, type = "text", textarea = false, error }) {
	const id = `field-${name}`;
	const shared = cn("mt-2 w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-primary", error ? "border-destructive" : "border-input");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: id,
			className: "text-sm font-medium text-secondary",
			children: label
		}),
		textarea ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			id,
			name,
			rows: 5,
			"aria-invalid": Boolean(error),
			"aria-describedby": error ? `${id}-error` : void 0,
			className: shared
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id,
			name,
			type,
			"aria-invalid": Boolean(error),
			"aria-describedby": error ? `${id}-error` : void 0,
			className: shared
		}),
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			id: `${id}-error`,
			className: "mt-1.5 text-xs font-medium text-destructive",
			children: error
		}) : null
	] });
}
//#endregion
export { ContactPage as component };
