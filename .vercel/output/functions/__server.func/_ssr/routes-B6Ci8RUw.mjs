import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SpiceParticles, c as flavourJourney, f as popularDishes, g as reviews, h as restaurant, i as Section, l as links, o as btnClass, p as posts, r as ActionLink, s as cn, t as ActionAnchor } from "./ui-bits-Bo_UbXkN.mjs";
import { t as ImagePlaceholder } from "./ImagePlaceholder-BYqlcrJa.mjs";
import { C as ChevronDown, T as ArrowRight, a as UtensilsCrossed, d as MapPin, f as Leaf, h as IndianRupee, o as Users, p as Landmark, r as Wind, v as Flame } from "../_libs/lucide-react.mjs";
import { c as SectionHeading, i as LocationSection, r as FindUsOnline, s as Reveal, t as CTASection } from "./blocks-BRp-Ebq1.mjs";
import { n as FoodCard, r as ReviewCard, t as BlogCard } from "./cards-BP5_XqLZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B6Ci8RUw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var icons = [
	Flame,
	Wind,
	Landmark,
	UtensilsCrossed
];
function FlavourJourney() {
	const [active, setActive] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		tone: "ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Special",
			title: "The Chettinad Flavour Journey",
			description: "Four steps from raw spice to a shared table. Hover or select a step to follow the journey."
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: 80,
			className: "mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: flavourJourney.map((item, i) => {
					const Icon = icons[i] ?? Flame;
					const isActive = active === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onMouseEnter: () => setActive(i),
						onFocus: () => setActive(i),
						onClick: () => setActive(i),
						"aria-pressed": isActive,
						className: cn("surface-card h-full w-full rounded-xl p-6 text-left transition-all duration-500", isActive ? "-translate-y-1.5 border-primary/60 shadow-lift" : "hover:-translate-y-1 hover:shadow-lift"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("grid h-11 w-11 place-items-center rounded-full transition-colors duration-500", isActive ? "bg-ember text-primary-foreground" : "bg-accent text-primary"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-5 w-5",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-[10px] font-semibold tracking-[0.22em] text-muted-foreground uppercase",
								children: ["Step ", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-2xl text-secondary",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("grid overflow-hidden text-sm leading-relaxed text-muted-foreground transition-all duration-500", isActive ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "min-h-0",
									children: item.description
								})
							})
						]
					}) }, item.step);
				})
			})
		})]
	});
}
var whyDine = [
	{
		Icon: Flame,
		title: "Authentic Flavours",
		text: "Traditional Chettinad-inspired spice blends alongside South Indian favourites."
	},
	{
		Icon: Leaf,
		title: "Freshly Prepared",
		text: "Dishes cooked to order with carefully chosen ingredients and fresh tempering."
	},
	{
		Icon: Users,
		title: "Family Friendly",
		text: "A comfortable, welcoming dining destination for families and groups."
	},
	{
		Icon: IndianRupee,
		title: "Affordable Dining",
		text: "Generous, quality South Indian food at accessible everyday prices."
	}
];
var experience = [
	{
		label: "[SIGNATURE DISH IMAGE]",
		caption: "The Food",
		span: "sm:col-span-2 sm:row-span-2"
	},
	{
		label: "[SPICE CLOSE-UP IMAGE]",
		caption: "The Flavours",
		span: ""
	},
	{
		label: "[DINING TABLE IMAGE]",
		caption: "The Table",
		span: ""
	},
	{
		label: "[RESTAURANT INTERIOR IMAGE]",
		caption: "The Experience",
		span: "sm:col-span-2"
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-ivory pt-28 pb-16 sm:pt-32 lg:min-h-[92vh] lg:pt-36",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpiceParticles, { count: 16 }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 kolam-dots opacity-40",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-drift absolute -top-24 -left-24 h-72 w-72 rounded-full border border-gold/25",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2 text-[11px] font-semibold tracking-[0.26em] text-primary uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-px w-8 rule-ornament",
									"aria-hidden": "true"
								}), "Chettinad · South Indian"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-5 text-balance-tight text-4xl leading-[1.08] text-secondary sm:text-5xl lg:text-6xl",
								children: "Authentic Chettinad Flavours, Served with Tradition"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
								children: [
									"Experience the rich spices, comforting flavours and timeless traditions of Chettinad and South Indian cuisine at ",
									restaurant.name,
									", Vandalur."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-9 flex flex-col gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionLink, {
									to: "/menu",
									variant: "primary",
									size: "lg",
									children: ["Explore Our Menu ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									hash: "reserve",
									className: btnClass("outline", "lg"),
									children: "Reserve a Table"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-7 flex items-center gap-2 text-sm text-secondary/80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "h-4 w-4 text-primary",
									"aria-hidden": "true"
								}), " Vandalur, Chennai"]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative animate-reveal [animation-delay:180ms]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
							label: "[HERO FOOD IMAGE]",
							src: "/image1.png",
							steam: true,
							aspect: "aspect-[4/5]",
							className: "shadow-lift"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute -bottom-5 -left-5 hidden h-32 w-32 rounded-full border border-primary/25 sm:block",
							"aria-hidden": "true"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mt-14 flex justify-center lg:absolute lg:inset-x-0 lg:bottom-8 lg:mt-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "animate-scroll-hint flex flex-col items-center gap-1 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] tracking-[0.28em] uppercase",
							children: "Scroll"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
				src: "/image2.png",
				label: "[TRADITIONAL COOKING IMAGE]",
				aspect: "aspect-[5/4]",
				steam: true
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 100,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						align: "left",
						eyebrow: "Our Restaurant",
						title: "A Taste of Tradition in Vandalur"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-4 text-base leading-relaxed text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [restaurant.name, " brings traditional Chettinad and South Indian flavours to diners in Vandalur, Chennai. Every curry begins with spices roasted for aroma, and every plate is built around the comforting rhythm of a South Indian meal — rice, sambar, rasam and something crisp on the side."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We cook with carefully chosen ingredients and serve food the way it is enjoyed at home: hot, generous and meant to be shared. Whether you stop by for breakfast tiffin, a full meals plate at lunch or Chettinad curries with parotta at dinner, you will find the same attention to flavour." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Families, groups and travellers along GST Road are all welcome — a relaxed dining room and honest pricing make it easy to come back often." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionLink, {
						to: "/about",
						variant: "outline",
						className: "mt-8",
						children: ["Discover Our Story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						})]
					})
				]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Why Dine With Us",
				title: "Four Reasons Guests Keep Returning",
				description: "A South Indian restaurant in Vandalur built around flavour, freshness and value."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: whyDine.map(({ Icon, title, text }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "surface-card group h-full rounded-xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 place-items-center rounded-full bg-accent text-primary transition-colors duration-500 group-hover:bg-ember group-hover:text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-5 w-5",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-xl text-secondary",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: text
							})
						]
					})
				}, title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "ivory",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Popular Dishes",
					title: "Favourites Worth Savoring",
					description: "A preview of the Chettinad and South Indian dishes our guests order most."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: popularDishes.map((dish, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 4 * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoodCard, {
							...dish,
							className: "h-full"
						})
					}, dish.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionLink, {
						to: "/menu",
						variant: "primary",
						size: "lg",
						children: ["View Full Menu ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				eyebrow: "Our Kitchen",
				title: "Rooted in Chettinad. Made for Today."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-4 text-base leading-relaxed text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Chettinad cooking is defined by its spices — black pepper, fennel, star anise, cinnamon and dried chilli, dry-roasted and ground so each masala carries its own character. That single step is what gives a Chettinad curry its depth rather than simple heat." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Around those gravies sits the wider world of South Indian cooking: fermented batters griddled into dosa, lentils simmered into sambar and kootu, coconut and tamarind balancing every plate. It is food shaped by the culinary heritage of Tamil Nadu and still eaten every day." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We keep that tradition intact and serve it in a comfortable, modern dining room — aromatic, hearty, and unmistakably Chettinad." })
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 100,
				className: "grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
					src: "/image3.png",
					label: "",
					aspect: "aspect-[3/4]",
					steam: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
					src: "/image4.png",
					label: "[]",
					aspect: "aspect-[3/4]",
					className: "mt-8"
				})]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlavourJourney, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "The Experience",
			title: "Dining at Manpaanai",
			description: "Photographs of the food, the flavours and the dining room."
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-4 sm:grid-cols-4 sm:grid-rows-3",
			children: experience.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 90,
				className: item.span,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "group relative h-full overflow-hidden rounded-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
						label: item.label,
						aspect: "h-full min-h-[190px]",
						className: "h-full transition-transform duration-700 group-hover:scale-[1.04]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "absolute bottom-4 left-4 rounded-full bg-secondary/85 px-4 py-1.5 font-display text-sm text-secondary-foreground",
						children: item.caption
					})]
				})
			}, item.label))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Reviews",
				title: "What Our Guests Say",
				description: "Sample review cards — replace the placeholder text with real Google reviews before publishing."
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: reviews.map((review, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, { ...review })
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 120,
				className: "mt-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionAnchor, {
					href: links.GOOGLE_REVIEWS_URL,
					variant: "outline",
					size: "lg",
					children: "Read More Reviews on Google"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs tracking-[0.16em] text-muted-foreground uppercase",
					children: "Placeholder link: GOOGLE_REVIEWS_URL"
				})]
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Journal",
					title: "From the World of Chettinad Cuisine",
					description: "Stories about spices, South Indian breakfasts and eating well in Vandalur."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: posts.slice(0, 3).map((post, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 90,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogCard, { ...post })
					}, post.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionLink, {
						to: "/blog",
						variant: "outline",
						children: ["Visit the Blog ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FindUsOnline, {})
	] });
}
//#endregion
export { Home as component };
