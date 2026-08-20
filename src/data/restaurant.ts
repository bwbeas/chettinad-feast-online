/**
 * Central restaurant data. Edit values here — they flow through the whole site.
 * Anything wrapped in [BRACKETS] is a placeholder to be replaced with verified info.
 */

export const restaurant = {
  name: "Manpaanai Chettinadu Virundhu",
  shortName: "Manpaanai",
  tagline: "Authentic Chettinad & South Indian Cuisine",
  cuisine: ["Chettinad", "South Indian", "Indian"],
  priceRange: "₹₹",
  phoneDisplay: "070949 88889",
  phoneHref: "tel:+917094988889",
  address: {
    street: "133, Grand Southern Trunk Road, Opposite to Zoo, Otteri",
    locality: "Vandalur",
    city: "Chennai",
    region: "Tamil Nadu",
    postalCode: "600048",
    country: "IN",
  },
  addressLines: [
    "133, Grand Southern Trunk Road,",
    "Opposite to Zoo, Otteri,",
    "Vandalur, Chennai, Tamil Nadu – 600048",
  ],
  footerAddressLines: [
    "133, GST Road, Opposite to Zoo,",
    "Otteri, Vandalur, Chennai – 600048",
  ],
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Manpaanai+Chettinadu+Virundhu,+GST+Road,+Vandalur,+Chennai",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Manpaanai+Chettinadu+Virundhu,+GST+Road,+Otteri,+Vandalur,+Chennai+600048&output=embed",
} as const;

/** Replace these placeholder URLs with the real ones when available. */
export const links = {
  GOOGLE_REVIEWS_URL: "#GOOGLE_REVIEWS_URL",
  GOOGLE_BUSINESS_URL: "#GOOGLE_BUSINESS_PROFILE_URL",
  INSTAGRAM_URL: "#ADD_INSTAGRAM_URL",
  FACEBOOK_URL: "#ADD_FACEBOOK_URL",
  YOUTUBE_URL: "#ADD_YOUTUBE_URL",
  ZOMATO_URL: "#ZOMATO_RESERVATION_URL",
  SWIGGY_URL: "#SWIGGY_DINEOUT_URL",
  DISTRICT_URL: "#DISTRICT_RESERVATION_URL",
  EAZYDINER_URL: "#EAZYDINER_RESERVATION_URL",
  RESERVATION_URL: "#RESERVATION_URL",
} as const;

export const reservationOptions = [
  { label: "Book via District", url: links.DISTRICT_URL, note: "District" },
  { label: "Book via Zomato", url: links.ZOMATO_URL, note: "Zomato" },
  { label: "Book via Swiggy", url: links.SWIGGY_URL, note: "Swiggy Dineout" },
  { label: "Book via EazyDiner", url: links.EAZYDINER_URL, note: "EazyDiner" },
];

/** Opening hours are unverified — replace [TIME] with the confirmed schedule. */
export const openingHours = [
  { day: "Monday", time: "[TIME]" },
  { day: "Tuesday", time: "[TIME]" },
  { day: "Wednesday", time: "[TIME]" },
  { day: "Thursday", time: "[TIME]" },
  { day: "Friday", time: "[TIME]" },
  { day: "Saturday", time: "[TIME]" },
  { day: "Sunday", time: "[TIME]" },
];

export const popularDishes = [
  {
    name: "Chettinad Chicken",
    category: "Chettinad Special",
    description:
      "Chicken simmered in a roasted spice masala with peppercorn warmth and curry-leaf aroma.",
    placeholder: "[CHETTINAD DISH IMAGE]",
  },
  {
    name: "Chicken Biryani",
    category: "Biryani",
    description:
      "Long-grain rice layered with spiced chicken, slow-finished for deep, comforting flavour.",
    placeholder: "[CHICKEN BIRYANI IMAGE]",
  },
  {
    name: "Mutton Biryani",
    category: "Biryani",
    description: "Tender mutton and fragrant rice, seasoned the traditional Chettinad way.",
    placeholder: "[MUTTON BIRYANI IMAGE]",
  },
  {
    name: "Parotta",
    category: "Breads",
    description: "Flaky, hand-slapped layers made to soak up every drop of gravy.",
    placeholder: "[PAROTTA IMAGE]",
  },
  {
    name: "South Indian Meals",
    category: "Rice & Meals",
    description:
      "A full plate of rice, sambar, rasam, poriyal and accompaniments — homestyle and generous.",
    placeholder: "[SOUTH INDIAN MEALS IMAGE]",
  },
  {
    name: "Dosa",
    category: "Breakfast",
    description: "Crisp, golden and served hot with chutney and sambar.",
    placeholder: "[DOSA IMAGE]",
  },
  {
    name: "Idli",
    category: "Breakfast",
    description: "Soft steamed rice cakes — the gentlest start to a South Indian morning.",
    placeholder: "[IDLI IMAGE]",
  },
  {
    name: "Vegetarian Specialities",
    category: "Vegetarian",
    description:
      "Seasonal vegetable curries, kootu and poriyal prepared with traditional tempering.",
    placeholder: "[VEGETARIAN THALI IMAGE]",
  },
];

export const menu = [
  {
    category: "Starters",
    items: [
      { name: "Chicken 65", description: "Crisp-fried chicken tossed with curry leaves and chilli." },
      { name: "Chettinad Pepper Chicken Dry", description: "Peppery, aromatic and boldly spiced." },
      { name: "Mutton Chukka", description: "Slow-roasted mutton with a dry Chettinad masala." },
      { name: "Vazhaipoo Vadai", description: "Banana-flower lentil fritters, a traditional favourite." },
      { name: "Onion Pakoda", description: "Golden, crunchy and served hot." },
    ],
  },
  {
    category: "South Indian Breakfast",
    items: [
      { name: "Idli", description: "Steamed rice cakes with chutney and sambar." },
      { name: "Plain Dosa", description: "Thin, crisp and golden." },
      { name: "Masala Dosa", description: "Filled with spiced potato masala." },
      { name: "Pongal", description: "Comforting rice-and-lentil pongal with ghee and pepper." },
      { name: "Poori Masala", description: "Puffed poori with a mild potato masala." },
      { name: "Uthappam", description: "Thick, soft pancake with onion and chilli." },
    ],
  },
  {
    category: "Vegetarian Specials",
    items: [
      { name: "Vegetable Kootu", description: "Lentils and vegetables with fresh coconut." },
      { name: "Poriyal of the Day", description: "Seasonal vegetable stir-fry with tempered spices." },
      { name: "Kara Kuzhambu", description: "Tangy, spiced tamarind gravy." },
      { name: "Paneer Butter Masala", description: "Creamy, mildly spiced and family-friendly." },
    ],
  },
  {
    category: "Non-Vegetarian Specials",
    items: [
      { name: "Chettinad Chicken", description: "Signature roasted-spice chicken curry." },
      { name: "Chettinad Mutton Kuzhambu", description: "Slow-cooked mutton in a robust masala." },
      { name: "Fish Curry", description: "Tangy, spiced coastal-style gravy." },
      { name: "Nattu Kozhi Kuzhambu", description: "Country chicken curry with deep, rustic flavour." },
      { name: "Egg Masala", description: "Eggs in an onion-tomato Chettinad masala." },
    ],
  },
  {
    category: "Biryani",
    items: [
      { name: "Chicken Biryani", description: "Spiced chicken layered with fragrant rice." },
      { name: "Mutton Biryani", description: "Tender mutton, traditional seasoning." },
      { name: "Vegetable Biryani", description: "Rice and vegetables with whole spices." },
      { name: "Egg Biryani", description: "A simple, satisfying favourite." },
    ],
  },
  {
    category: "Rice & Meals",
    items: [
      { name: "South Indian Full Meals", description: "Rice, sambar, rasam, poriyal and accompaniments." },
      { name: "Curd Rice", description: "Cooling, tempered and comforting." },
      { name: "Lemon Rice", description: "Bright, tangy and lightly spiced." },
      { name: "Tamarind Rice", description: "Traditional puliyodarai." },
    ],
  },
  {
    category: "Breads",
    items: [
      { name: "Parotta", description: "Flaky layered flatbread." },
      { name: "Kal Dosa", description: "Soft, thick dosa perfect with gravy." },
      { name: "Chapati", description: "Light wholewheat flatbread." },
      { name: "Idiyappam", description: "Steamed string hoppers." },
    ],
  },
  {
    category: "Beverages",
    items: [
      { name: "Filter Coffee", description: "Strong, frothy and freshly brewed." },
      { name: "Masala Tea", description: "Spiced and warming." },
      { name: "Buttermilk", description: "Tempered with curry leaves and ginger." },
      { name: "Fresh Lime Soda", description: "Sweet or salted." },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Payasam", description: "Traditional sweet finish to a Chettinad meal." },
      { name: "Gulab Jamun", description: "Warm, syrup-soaked and soft." },
      { name: "Ice Cream", description: "Assorted flavours." },
    ],
  },
];

export const reviews = [
  { name: "[Customer Name]", quote: "[Customer review will be added here]", meta: "Google Review" },
  { name: "[Customer Name]", quote: "[Customer review will be added here]", meta: "Google Review" },
  { name: "[Customer Name]", quote: "[Customer review will be added here]", meta: "Google Review" },
  { name: "[Customer Name]", quote: "[Customer review will be added here]", meta: "Google Review" },
  { name: "[Customer Name]", quote: "[Customer review will be added here]", meta: "Google Review" },
  { name: "[Customer Name]", quote: "[Customer review will be added here]", meta: "Google Review" },
];

export const posts = [
  {
    slug: "what-makes-chettinad-cuisine-special",
    title: "What Makes Chettinad Cuisine So Special?",
    category: "Chettinad Cuisine",
    readingTime: "6 min read",
    date: "[DATE]",
    excerpt:
      "Roasted spices, peppery heat and centuries of Tamil culinary tradition — a look at why Chettinad food tastes like nothing else in South India.",
    placeholder: "[CHETTINAD SPICES IMAGE]",
    body: [
      "Chettinad cuisine comes from the Chettinad region of Tamil Nadu, and it is best known for the depth its spices bring to everyday cooking. Where many South Indian kitchens lean on a light tempering, Chettinad cooking builds flavour by dry-roasting whole spices and grinding them fresh for each dish.",
      "Black pepper, star anise, fennel, dried red chilli, cinnamon and stone flower are common. The roasting stage matters as much as the ingredients: it deepens aroma and gives gravies their characteristic dark colour and layered heat.",
      "Curry leaves, shallots, tamarind and freshly grated coconut round the spice out, so a well-made Chettinad curry tastes warm and aromatic rather than simply hot.",
      "At Manpaanai Chettinadu Virundhu in Vandalur we cook in that tradition — spice blends prepared for flavour, dishes finished fresh, and portions meant to be shared at the table.",
    ],
  },
  {
    slug: "exploring-south-indian-cuisine",
    title: "Exploring the Flavours of South Indian Cuisine",
    category: "South Indian Food",
    readingTime: "5 min read",
    date: "[DATE]",
    excerpt:
      "Rice, lentils, coconut and tamarind form the backbone of South Indian cooking. Here is how those few ingredients create such variety.",
    placeholder: "[SOUTH INDIAN SPREAD IMAGE]",
    body: [
      "South Indian food is built on a handful of staples used with remarkable range. Rice appears steamed, fermented, tempered and ground into batter; lentils become sambar, rasam, kootu and vadai.",
      "Tamarind brings sourness, coconut brings body, and the tempering of mustard seeds, urad dal and curry leaves in hot oil gives almost every dish its familiar opening note.",
      "That balance of sour, spice and comfort is why a South Indian meal feels complete: something crisp, something soupy, something cooling, and rice to carry it all.",
      "You will find the full range on our menu in Vandalur — from breakfast tiffin to a proper full meals plate.",
    ],
  },
  {
    slug: "traditional-south-indian-breakfasts",
    title: "Traditional South Indian Breakfasts You Should Try",
    category: "Breakfast Guide",
    readingTime: "4 min read",
    date: "[DATE]",
    excerpt:
      "Idli, dosa, pongal, poori and uthappam — a short guide to the morning classics and what to eat them with.",
    placeholder: "[SOUTH INDIAN BREAKFAST IMAGE]",
    body: [
      "A South Indian breakfast is light but satisfying, and almost always fermented, steamed or griddled rather than fried heavy.",
      "Idli is the gentlest place to start: soft, steamed and best with a spoonful of sambar. Dosa gives you crispness, and a masala dosa turns it into a full plate on its own.",
      "Pongal — rice and moong dal cooked soft with ghee, pepper and cumin — is the comfort choice, usually paired with coconut chutney and a side of vadai.",
      "Uthappam and poori masala round out the classics. Order filter coffee alongside and the morning is set.",
    ],
  },
  {
    slug: "story-behind-chettinad-spices",
    title: "The Story Behind Chettinad Spices",
    category: "Spices",
    readingTime: "5 min read",
    date: "[DATE]",
    excerpt:
      "Star anise, stone flower, peppercorn and fennel — the aromatics that define Chettinad masala and the role each one plays.",
    placeholder: "[SPICE MASALA IMAGE]",
    body: [
      "Chettinad spice blends reflect the region's long history of trade. Ingredients that travelled through Tamil ports — star anise, cinnamon, nutmeg — settled into local kitchens alongside home-grown pepper and fennel.",
      "Stone flower, or kalpasi, is perhaps the most distinctive. Used sparingly, it lends an earthy, almost smoky background note that is hard to place but immediately recognisable.",
      "Black pepper carries the heat in older recipes, with dried chilli added later. Fennel and coriander soften the edge, while shallots and garlic give the gravy weight.",
      "Every blend is roasted before grinding, and that single step is what separates Chettinad masala from a generic curry powder.",
    ],
  },
  {
    slug: "biryani-and-south-indian-food-culture",
    title: "Biryani and South Indian Food Culture",
    category: "Food Culture",
    readingTime: "6 min read",
    date: "[DATE]",
    excerpt:
      "How biryani became a Tamil Nadu weekend ritual, and what makes a southern-style biryani distinct.",
    placeholder: "[BIRYANI PLATTER IMAGE]",
    body: [
      "Biryani arrived in the south through centuries of exchange and was quickly reshaped by local taste — shorter grains in some regions, more spice paste, and a stronger presence of mint and coriander.",
      "In Tamil Nadu, biryani is a shared occasion food. It shows up at family lunches, celebrations and long weekend meals, served with onion raita, brinjal curry and a boiled egg.",
      "Southern-style biryani tends to be cooked with the masala rather than layered over it, which gives every grain colour and flavour instead of concentrating it at the base.",
      "Our chicken and mutton biryani follow that approach — spiced through, not spiced on top.",
    ],
  },
  {
    slug: "food-lovers-guide-to-dining-in-vandalur",
    title: "A Food Lover's Guide to Dining in Vandalur",
    category: "Local Guide",
    readingTime: "5 min read",
    date: "[DATE]",
    excerpt:
      "Visiting Vandalur Zoo or travelling along GST Road? Here is how to plan a proper South Indian meal around your day.",
    placeholder: "[RESTAURANT INTERIOR IMAGE]",
    body: [
      "Vandalur sits at a busy point on the Grand Southern Trunk Road, which makes it a natural stop for travellers heading in and out of Chennai as well as families visiting the zoo.",
      "Time your meal around the crowd: breakfast is calm and ideal for tiffin, lunch is when full meals and biryani are at their best, and dinner suits Chettinad curries with parotta.",
      "If you are coming from the zoo, we are directly opposite on GST Road at Otteri — an easy walk or a very short drive.",
      "Come hungry, order to share, and finish with filter coffee.",
    ],
  },
];

export const flavourJourney = [
  {
    step: "Spice",
    title: "Spice",
    description:
      "Whole peppercorn, fennel, star anise and dried chilli, dry-roasted and ground fresh so each masala carries its own character.",
  },
  {
    step: "Aroma",
    title: "Aroma",
    description:
      "Curry leaves and shallots hit hot oil and the kitchen announces itself — the moment Chettinad cooking becomes unmistakable.",
  },
  {
    step: "Tradition",
    title: "Tradition",
    description:
      "Slow gravies, tempered lentils and time-honoured technique from the Chettinad region of Tamil Nadu, cooked the way it has always been done.",
  },
  {
    step: "Table",
    title: "Table",
    description:
      "Served hot and generous, meant to be shared — plates passed around and a meal that lingers.",
  },
];
