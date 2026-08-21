import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-bits-Bo_UbXkN.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Central restaurant data. Edit values here — they flow through the whole site.
* Anything wrapped in [BRACKETS] is a placeholder to be replaced with verified info.
*/
var restaurant = {
	name: "Manpaanai Chettinadu Virundhu",
	shortName: "Manpaanai",
	tagline: "Authentic Chettinad & South Indian Cuisine",
	cuisine: [
		"Chettinad",
		"South Indian",
		"Indian"
	],
	priceRange: "₹₹",
	phoneDisplay: "070949 88889",
	phoneHref: "tel:+917094988889",
	address: {
		street: "133, Grand Southern Trunk Road, Opposite to Zoo, Otteri",
		locality: "Vandalur",
		city: "Chennai",
		region: "Tamil Nadu",
		postalCode: "600048",
		country: "IN"
	},
	addressLines: [
		"133, Grand Southern Trunk Road,",
		"Opposite to Zoo, Otteri,",
		"Vandalur, Chennai, Tamil Nadu – 600048"
	],
	footerAddressLines: ["133, GST Road, Opposite to Zoo,", "Otteri, Vandalur, Chennai – 600048"],
	mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Manpaanai+Chettinadu+Virundhu,+GST+Road,+Vandalur,+Chennai",
	mapsEmbedUrl: "https://www.google.com/maps?q=Manpaanai+Chettinadu+Virundhu,+GST+Road,+Otteri,+Vandalur,+Chennai+600048&output=embed"
};
/** Replace these placeholder URLs with the real ones when available. */
var links = {
	GOOGLE_REVIEWS_URL: "#GOOGLE_REVIEWS_URL",
	GOOGLE_BUSINESS_URL: "#GOOGLE_BUSINESS_PROFILE_URL",
	INSTAGRAM_URL: "#ADD_INSTAGRAM_URL",
	FACEBOOK_URL: "#ADD_FACEBOOK_URL",
	YOUTUBE_URL: "#ADD_YOUTUBE_URL",
	ZOMATO_URL: "#ZOMATO_RESERVATION_URL",
	SWIGGY_URL: "#SWIGGY_DINEOUT_URL",
	DISTRICT_URL: "#DISTRICT_RESERVATION_URL",
	EAZYDINER_URL: "#EAZYDINER_RESERVATION_URL",
	RESERVATION_URL: "#RESERVATION_URL"
};
var reservationOptions = [
	{
		label: "Book via District",
		url: links.DISTRICT_URL,
		note: "District"
	},
	{
		label: "Book via Zomato",
		url: links.ZOMATO_URL,
		note: "Zomato"
	},
	{
		label: "Book via Swiggy",
		url: links.SWIGGY_URL,
		note: "Swiggy Dineout"
	},
	{
		label: "Book via EazyDiner",
		url: links.EAZYDINER_URL,
		note: "EazyDiner"
	}
];
/** Opening hours are unverified — replace [TIME] with the confirmed schedule. */
var openingHours = [
	{
		day: "Monday",
		time: "[TIME]"
	},
	{
		day: "Tuesday",
		time: "[TIME]"
	},
	{
		day: "Wednesday",
		time: "[TIME]"
	},
	{
		day: "Thursday",
		time: "[TIME]"
	},
	{
		day: "Friday",
		time: "[TIME]"
	},
	{
		day: "Saturday",
		time: "[TIME]"
	},
	{
		day: "Sunday",
		time: "[TIME]"
	}
];
var popularDishes = [
	{
		name: "Chettinad Chicken",
		category: "Chettinad Special",
		description: "Chicken simmered in a roasted spice masala with peppercorn warmth and curry-leaf aroma.",
		placeholder: "[CHETTINAD DISH IMAGE]"
	},
	{
		name: "Chicken Biryani",
		category: "Biryani",
		description: "Long-grain rice layered with spiced chicken, slow-finished for deep, comforting flavour.",
		placeholder: "[CHICKEN BIRYANI IMAGE]"
	},
	{
		name: "Mutton Biryani",
		category: "Biryani",
		description: "Tender mutton and fragrant rice, seasoned the traditional Chettinad way.",
		placeholder: "[MUTTON BIRYANI IMAGE]"
	},
	{
		name: "Parotta",
		category: "Breads",
		description: "Flaky, hand-slapped layers made to soak up every drop of gravy.",
		placeholder: "[PAROTTA IMAGE]"
	},
	{
		name: "South Indian Meals",
		category: "Rice & Meals",
		description: "A full plate of rice, sambar, rasam, poriyal and accompaniments — homestyle and generous.",
		placeholder: "[SOUTH INDIAN MEALS IMAGE]"
	},
	{
		name: "Dosa",
		category: "Breakfast",
		description: "Crisp, golden and served hot with chutney and sambar.",
		placeholder: "[DOSA IMAGE]"
	},
	{
		name: "Idli",
		category: "Breakfast",
		description: "Soft steamed rice cakes — the gentlest start to a South Indian morning.",
		placeholder: "[IDLI IMAGE]"
	},
	{
		name: "Vegetarian Specialities",
		category: "Vegetarian",
		description: "Seasonal vegetable curries, kootu and poriyal prepared with traditional tempering.",
		placeholder: "[VEGETARIAN THALI IMAGE]"
	}
];
var menu = [
	{
		category: "Starters",
		items: [
			{
				name: "Chicken 65",
				description: "Crisp-fried chicken tossed with curry leaves and chilli."
			},
			{
				name: "Chettinad Pepper Chicken Dry",
				description: "Peppery, aromatic and boldly spiced."
			},
			{
				name: "Mutton Chukka",
				description: "Slow-roasted mutton with a dry Chettinad masala."
			},
			{
				name: "Vazhaipoo Vadai",
				description: "Banana-flower lentil fritters, a traditional favourite."
			},
			{
				name: "Onion Pakoda",
				description: "Golden, crunchy and served hot."
			}
		]
	},
	{
		category: "South Indian Breakfast",
		items: [
			{
				name: "Idli",
				description: "Steamed rice cakes with chutney and sambar."
			},
			{
				name: "Plain Dosa",
				description: "Thin, crisp and golden."
			},
			{
				name: "Masala Dosa",
				description: "Filled with spiced potato masala."
			},
			{
				name: "Pongal",
				description: "Comforting rice-and-lentil pongal with ghee and pepper."
			},
			{
				name: "Poori Masala",
				description: "Puffed poori with a mild potato masala."
			},
			{
				name: "Uthappam",
				description: "Thick, soft pancake with onion and chilli."
			}
		]
	},
	{
		category: "Vegetarian Specials",
		items: [
			{
				name: "Vegetable Kootu",
				description: "Lentils and vegetables with fresh coconut."
			},
			{
				name: "Poriyal of the Day",
				description: "Seasonal vegetable stir-fry with tempered spices."
			},
			{
				name: "Kara Kuzhambu",
				description: "Tangy, spiced tamarind gravy."
			},
			{
				name: "Paneer Butter Masala",
				description: "Creamy, mildly spiced and family-friendly."
			}
		]
	},
	{
		category: "Non-Vegetarian Specials",
		items: [
			{
				name: "Chettinad Chicken",
				description: "Signature roasted-spice chicken curry."
			},
			{
				name: "Chettinad Mutton Kuzhambu",
				description: "Slow-cooked mutton in a robust masala."
			},
			{
				name: "Fish Curry",
				description: "Tangy, spiced coastal-style gravy."
			},
			{
				name: "Nattu Kozhi Kuzhambu",
				description: "Country chicken curry with deep, rustic flavour."
			},
			{
				name: "Egg Masala",
				description: "Eggs in an onion-tomato Chettinad masala."
			}
		]
	},
	{
		category: "Biryani",
		items: [
			{
				name: "Chicken Biryani",
				description: "Spiced chicken layered with fragrant rice."
			},
			{
				name: "Mutton Biryani",
				description: "Tender mutton, traditional seasoning."
			},
			{
				name: "Vegetable Biryani",
				description: "Rice and vegetables with whole spices."
			},
			{
				name: "Egg Biryani",
				description: "A simple, satisfying favourite."
			}
		]
	},
	{
		category: "Rice & Meals",
		items: [
			{
				name: "South Indian Full Meals",
				description: "Rice, sambar, rasam, poriyal and accompaniments."
			},
			{
				name: "Curd Rice",
				description: "Cooling, tempered and comforting."
			},
			{
				name: "Lemon Rice",
				description: "Bright, tangy and lightly spiced."
			},
			{
				name: "Tamarind Rice",
				description: "Traditional puliyodarai."
			}
		]
	},
	{
		category: "Breads",
		items: [
			{
				name: "Parotta",
				description: "Flaky layered flatbread."
			},
			{
				name: "Kal Dosa",
				description: "Soft, thick dosa perfect with gravy."
			},
			{
				name: "Chapati",
				description: "Light wholewheat flatbread."
			},
			{
				name: "Idiyappam",
				description: "Steamed string hoppers."
			}
		]
	},
	{
		category: "Beverages",
		items: [
			{
				name: "Filter Coffee",
				description: "Strong, frothy and freshly brewed."
			},
			{
				name: "Masala Tea",
				description: "Spiced and warming."
			},
			{
				name: "Buttermilk",
				description: "Tempered with curry leaves and ginger."
			},
			{
				name: "Fresh Lime Soda",
				description: "Sweet or salted."
			}
		]
	},
	{
		category: "Desserts",
		items: [
			{
				name: "Payasam",
				description: "Traditional sweet finish to a Chettinad meal."
			},
			{
				name: "Gulab Jamun",
				description: "Warm, syrup-soaked and soft."
			},
			{
				name: "Ice Cream",
				description: "Assorted flavours."
			}
		]
	}
];
var reviews = [
	{
		name: "[Customer Name]",
		quote: "[Customer review will be added here]",
		meta: "Google Review"
	},
	{
		name: "[Customer Name]",
		quote: "[Customer review will be added here]",
		meta: "Google Review"
	},
	{
		name: "[Customer Name]",
		quote: "[Customer review will be added here]",
		meta: "Google Review"
	},
	{
		name: "[Customer Name]",
		quote: "[Customer review will be added here]",
		meta: "Google Review"
	},
	{
		name: "[Customer Name]",
		quote: "[Customer review will be added here]",
		meta: "Google Review"
	},
	{
		name: "[Customer Name]",
		quote: "[Customer review will be added here]",
		meta: "Google Review"
	}
];
var posts = [
	{
		slug: "what-makes-chettinad-cuisine-special",
		title: "What Makes Chettinad Cuisine So Special?",
		category: "Chettinad Cuisine",
		readingTime: "6 min read",
		date: "[DATE]",
		excerpt: "Roasted spices, peppery heat and centuries of Tamil culinary tradition — a look at why Chettinad food tastes like nothing else in South India.",
		placeholder: "[CHETTINAD SPICES IMAGE]",
		body: [
			"Chettinad cuisine comes from the Chettinad region of Tamil Nadu, and it is best known for the depth its spices bring to everyday cooking. Where many South Indian kitchens lean on a light tempering, Chettinad cooking builds flavour by dry-roasting whole spices and grinding them fresh for each dish.",
			"Black pepper, star anise, fennel, dried red chilli, cinnamon and stone flower are common. The roasting stage matters as much as the ingredients: it deepens aroma and gives gravies their characteristic dark colour and layered heat.",
			"Curry leaves, shallots, tamarind and freshly grated coconut round the spice out, so a well-made Chettinad curry tastes warm and aromatic rather than simply hot.",
			"At Manpaanai Chettinadu Virundhu in Vandalur we cook in that tradition — spice blends prepared for flavour, dishes finished fresh, and portions meant to be shared at the table."
		]
	},
	{
		slug: "exploring-south-indian-cuisine",
		title: "Exploring the Flavours of South Indian Cuisine",
		category: "South Indian Food",
		readingTime: "5 min read",
		date: "[DATE]",
		excerpt: "Rice, lentils, coconut and tamarind form the backbone of South Indian cooking. Here is how those few ingredients create such variety.",
		placeholder: "[SOUTH INDIAN SPREAD IMAGE]",
		body: [
			"South Indian food is built on a handful of staples used with remarkable range. Rice appears steamed, fermented, tempered and ground into batter; lentils become sambar, rasam, kootu and vadai.",
			"Tamarind brings sourness, coconut brings body, and the tempering of mustard seeds, urad dal and curry leaves in hot oil gives almost every dish its familiar opening note.",
			"That balance of sour, spice and comfort is why a South Indian meal feels complete: something crisp, something soupy, something cooling, and rice to carry it all.",
			"You will find the full range on our menu in Vandalur — from breakfast tiffin to a proper full meals plate."
		]
	},
	{
		slug: "traditional-south-indian-breakfasts",
		title: "Traditional South Indian Breakfasts You Should Try",
		category: "Breakfast Guide",
		readingTime: "4 min read",
		date: "[DATE]",
		excerpt: "Idli, dosa, pongal, poori and uthappam — a short guide to the morning classics and what to eat them with.",
		placeholder: "[SOUTH INDIAN BREAKFAST IMAGE]",
		body: [
			"A South Indian breakfast is light but satisfying, and almost always fermented, steamed or griddled rather than fried heavy.",
			"Idli is the gentlest place to start: soft, steamed and best with a spoonful of sambar. Dosa gives you crispness, and a masala dosa turns it into a full plate on its own.",
			"Pongal — rice and moong dal cooked soft with ghee, pepper and cumin — is the comfort choice, usually paired with coconut chutney and a side of vadai.",
			"Uthappam and poori masala round out the classics. Order filter coffee alongside and the morning is set."
		]
	},
	{
		slug: "story-behind-chettinad-spices",
		title: "The Story Behind Chettinad Spices",
		category: "Spices",
		readingTime: "5 min read",
		date: "[DATE]",
		excerpt: "Star anise, stone flower, peppercorn and fennel — the aromatics that define Chettinad masala and the role each one plays.",
		placeholder: "[SPICE MASALA IMAGE]",
		body: [
			"Chettinad spice blends reflect the region's long history of trade. Ingredients that travelled through Tamil ports — star anise, cinnamon, nutmeg — settled into local kitchens alongside home-grown pepper and fennel.",
			"Stone flower, or kalpasi, is perhaps the most distinctive. Used sparingly, it lends an earthy, almost smoky background note that is hard to place but immediately recognisable.",
			"Black pepper carries the heat in older recipes, with dried chilli added later. Fennel and coriander soften the edge, while shallots and garlic give the gravy weight.",
			"Every blend is roasted before grinding, and that single step is what separates Chettinad masala from a generic curry powder."
		]
	},
	{
		slug: "biryani-and-south-indian-food-culture",
		title: "Biryani and South Indian Food Culture",
		category: "Food Culture",
		readingTime: "6 min read",
		date: "[DATE]",
		excerpt: "How biryani became a Tamil Nadu weekend ritual, and what makes a southern-style biryani distinct.",
		placeholder: "[BIRYANI PLATTER IMAGE]",
		body: [
			"Biryani arrived in the south through centuries of exchange and was quickly reshaped by local taste — shorter grains in some regions, more spice paste, and a stronger presence of mint and coriander.",
			"In Tamil Nadu, biryani is a shared occasion food. It shows up at family lunches, celebrations and long weekend meals, served with onion raita, brinjal curry and a boiled egg.",
			"Southern-style biryani tends to be cooked with the masala rather than layered over it, which gives every grain colour and flavour instead of concentrating it at the base.",
			"Our chicken and mutton biryani follow that approach — spiced through, not spiced on top."
		]
	},
	{
		slug: "food-lovers-guide-to-dining-in-vandalur",
		title: "A Food Lover's Guide to Dining in Vandalur",
		category: "Local Guide",
		readingTime: "5 min read",
		date: "[DATE]",
		excerpt: "Visiting Vandalur Zoo or travelling along GST Road? Here is how to plan a proper South Indian meal around your day.",
		placeholder: "[RESTAURANT INTERIOR IMAGE]",
		body: [
			"Vandalur sits at a busy point on the Grand Southern Trunk Road, which makes it a natural stop for travellers heading in and out of Chennai as well as families visiting the zoo.",
			"Time your meal around the crowd: breakfast is calm and ideal for tiffin, lunch is when full meals and biryani are at their best, and dinner suits Chettinad curries with parotta.",
			"If you are coming from the zoo, we are directly opposite on GST Road at Otteri — an easy walk or a very short drive.",
			"Come hungry, order to share, and finish with filter coffee."
		]
	}
];
var flavourJourney = [
	{
		step: "Spice",
		title: "Spice",
		description: "Whole peppercorn, fennel, star anise and dried chilli, dry-roasted and ground fresh so each masala carries its own character."
	},
	{
		step: "Aroma",
		title: "Aroma",
		description: "Curry leaves and shallots hit hot oil and the kitchen announces itself — the moment Chettinad cooking becomes unmistakable."
	},
	{
		step: "Tradition",
		title: "Tradition",
		description: "Slow gravies, tempered lentils and time-honoured technique from the Chettinad region of Tamil Nadu, cooked the way it has always been done."
	},
	{
		step: "Table",
		title: "Table",
		description: "Served hot and generous, meant to be shared — plates passed around and a meal that lingers."
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var base = "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 disabled:opacity-60 disabled:pointer-events-none";
var variants = {
	primary: "bg-ember text-primary-foreground shadow-warm hover:shadow-lift hover:-translate-y-0.5",
	outline: "border border-secondary/30 text-secondary hover:border-primary hover:text-primary hover:-translate-y-0.5",
	gold: "bg-gold text-gold-foreground shadow-warm hover:shadow-lift hover:-translate-y-0.5",
	ghostLight: "border border-ivory/40 text-primary-foreground hover:bg-ivory/12 hover:-translate-y-0.5"
};
var sizes = {
	sm: "px-4 py-2 text-xs",
	md: "px-6 py-3",
	lg: "px-7 py-3.5 text-base"
};
function btnClass(variant = "primary", size = "md", className) {
	return cn(base, variants[variant], sizes[size], className);
}
function ActionButton({ children, variant = "primary", size = "md", className, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: btnClass(variant, size, className),
		...rest,
		children
	});
}
function ActionLink({ to, children, variant = "primary", size = "md", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: btnClass(variant, size, className),
		children
	});
}
function ActionAnchor({ href, children, variant = "primary", size = "md", className, external = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: btnClass(variant, size, className),
		...external ? {
			target: "_blank",
			rel: "noopener noreferrer"
		} : {},
		children
	});
}
/** Floating spice-particle field — decorative only. */
function SpiceParticles({ count = 14 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		"aria-hidden": "true",
		children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "animate-spice absolute block rounded-full bg-gold/60",
			style: {
				left: `${i * 97 % 100}%`,
				bottom: `-${i % 5 * 6 + 4}%`,
				width: `${3 + i % 3}px`,
				height: `${3 + i % 3}px`,
				animationDuration: `${14 + i % 7 * 3}s`,
				animationDelay: `${i % 9 * 1.7}s`
			}
		}, i))
	});
}
function Section({ children, className, id, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("relative py-20 sm:py-24", {
			default: "",
			ivory: "bg-ivory",
			muted: "bg-accent/40",
			dark: "bg-secondary text-secondary-foreground"
		}[tone], className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-6xl px-5 sm:px-8",
			children
		})
	});
}
//#endregion
export { SpiceParticles as a, flavourJourney as c, openingHours as d, popularDishes as f, reviews as g, restaurant as h, Section as i, links as l, reservationOptions as m, ActionButton as n, btnClass as o, posts as p, ActionLink as r, cn as s, ActionAnchor as t, menu as u };
