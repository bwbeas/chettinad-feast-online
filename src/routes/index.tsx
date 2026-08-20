import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, MapPin, Leaf, Flame, Users, IndianRupee } from "lucide-react";
import { popularDishes, posts, restaurant, reviews, links } from "@/data/restaurant";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ActionAnchor, ActionLink, btnClass, Section, SpiceParticles } from "@/components/site/ui-bits";
import { BlogCard, FoodCard, ReviewCard } from "@/components/site/cards";
import { CTASection, FindUsOnline, LocationSection } from "@/components/site/blocks";
import { FlavourJourney } from "@/components/site/FlavourJourney";

const TITLE = "Manpaanai Chettinadu Virundhu | Chettinad Restaurant in Vandalur";
const DESCRIPTION =
  "Discover authentic Chettinad and South Indian cuisine at Manpaanai Chettinadu Virundhu, located on GST Road opposite Vandalur Zoo in Chennai.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const whyDine = [
  {
    Icon: Flame,
    title: "Authentic Flavours",
    text: "Traditional Chettinad-inspired spice blends alongside South Indian favourites.",
  },
  {
    Icon: Leaf,
    title: "Freshly Prepared",
    text: "Dishes cooked to order with carefully chosen ingredients and fresh tempering.",
  },
  {
    Icon: Users,
    title: "Family Friendly",
    text: "A comfortable, welcoming dining destination for families and groups.",
  },
  {
    Icon: IndianRupee,
    title: "Affordable Dining",
    text: "Generous, quality South Indian food at accessible everyday prices.",
  },
];

const experience = [
  { label: "[SIGNATURE DISH IMAGE]", caption: "The Food", span: "sm:col-span-2 sm:row-span-2" },
  { label: "[SPICE CLOSE-UP IMAGE]", caption: "The Flavours", span: "" },
  { label: "[DINING TABLE IMAGE]", caption: "The Table", span: "" },
  { label: "[RESTAURANT INTERIOR IMAGE]", caption: "The Experience", span: "sm:col-span-2" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ivory pt-28 pb-16 sm:pt-32 lg:min-h-[92vh] lg:pt-36">
        <SpiceParticles count={16} />
        <div className="absolute inset-0 kolam-dots opacity-40" aria-hidden="true" />
        <div
          className="animate-drift absolute -top-24 -left-24 h-72 w-72 rounded-full border border-gold/25"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div className="animate-reveal">
            <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.26em] text-primary uppercase">
              <span className="h-px w-8 rule-ornament" aria-hidden="true" />
              Chettinad · South Indian
            </p>
            <h1 className="mt-5 text-balance-tight text-4xl leading-[1.08] text-secondary sm:text-5xl lg:text-6xl">
              Authentic Chettinad Flavours, Served with Tradition
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Experience the rich spices, comforting flavours and timeless traditions of Chettinad and
              South Indian cuisine at {restaurant.name}, Vandalur.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ActionLink to="/menu" variant="primary" size="lg">
                Explore Our Menu <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ActionLink>
              <Link to="/contact" hash="reserve" className={btnClass("outline", "lg")}>
                Reserve a Table
              </Link>
            </div>
            <p className="mt-7 flex items-center gap-2 text-sm text-secondary/80">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" /> Vandalur, Chennai
            </p>
          </div>

          <div className="relative animate-reveal [animation-delay:180ms]">
            <ImagePlaceholder
              label="[HERO FOOD IMAGE]"
              src="/image1.png"
              steam
              aspect="aspect-[4/5]"
              className="shadow-lift"
            />

            <div
              className="pointer-events-none absolute -bottom-5 -left-5 hidden h-32 w-32 rounded-full border border-primary/25 sm:block"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="relative mt-14 flex justify-center lg:absolute lg:inset-x-0 lg:bottom-8 lg:mt-0">
          <span className="animate-scroll-hint flex flex-col items-center gap-1 text-muted-foreground">
            <span className="text-[10px] tracking-[0.28em] uppercase">Scroll</span>
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </section>

      {/* INTRO */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ImagePlaceholder src="/image2.png" label="[TRADITIONAL COOKING IMAGE]" aspect="aspect-[5/4]" steam />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              align="left"
              eyebrow="Our Restaurant"
              title="A Taste of Tradition in Vandalur"
            />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                {restaurant.name} brings traditional Chettinad and South Indian flavours to diners in
                Vandalur, Chennai. Every curry begins with spices roasted for aroma, and every plate
                is built around the comforting rhythm of a South Indian meal — rice, sambar, rasam
                and something crisp on the side.
              </p>
              <p>
                We cook with carefully chosen ingredients and serve food the way it is enjoyed at
                home: hot, generous and meant to be shared. Whether you stop by for breakfast tiffin,
                a full meals plate at lunch or Chettinad curries with parotta at dinner, you will find
                the same attention to flavour.
              </p>
              <p>
                Families, groups and travellers along GST Road are all welcome — a relaxed dining room
                and honest pricing make it easy to come back often.
              </p>
            </div>
            <ActionLink to="/about" variant="outline" className="mt-8">
              Discover Our Story <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ActionLink>
          </Reveal>
        </div>
      </Section>

      {/* WHY DINE WITH US */}
      <Section tone="muted">
        <Reveal>
          <SectionHeading
            eyebrow="Why Dine With Us"
            title="Four Reasons Guests Keep Returning"
            description="A South Indian restaurant in Vandalur built around flavour, freshness and value."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyDine.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90}>
              <article className="surface-card group h-full rounded-xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-primary transition-colors duration-500 group-hover:bg-ember group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl text-secondary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* POPULAR DISHES */}
      <Section tone="ivory">
        <Reveal>
          <SectionHeading
            eyebrow="Popular Dishes"
            title="Favourites Worth Savoring"
            description="A preview of the Chettinad and South Indian dishes our guests order most."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularDishes.map((dish, i) => (
            <Reveal key={dish.name} delay={(i % 4) * 80}>
              <FoodCard {...dish} className="h-full" />
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-12 text-center">
          <ActionLink to="/menu" variant="primary" size="lg">
            View Full Menu <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ActionLink>
        </Reveal>
      </Section>

      {/* TRADITION / PHILOSOPHY */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our Kitchen"
              title="Rooted in Chettinad. Made for Today."
            />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Chettinad cooking is defined by its spices — black pepper, fennel, star anise,
                cinnamon and dried chilli, dry-roasted and ground so each masala carries its own
                character. That single step is what gives a Chettinad curry its depth rather than
                simple heat.
              </p>
              <p>
                Around those gravies sits the wider world of South Indian cooking: fermented batters
                griddled into dosa, lentils simmered into sambar and kootu, coconut and tamarind
                balancing every plate. It is food shaped by the culinary heritage of Tamil Nadu and
                still eaten every day.
              </p>
              <p>
                We keep that tradition intact and serve it in a comfortable, modern dining room —
                aromatic, hearty, and unmistakably Chettinad.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100} className="grid grid-cols-2 gap-4">
            <ImagePlaceholder src="/image3.png" label="" aspect="aspect-[3/4]" steam />
            <ImagePlaceholder
            src="/image4.png"
              label="[]"
              aspect="aspect-[3/4]"
              className="mt-8"
            />
          </Reveal>
        </div>
      </Section>

      {/* FLAVOUR JOURNEY */}
      <FlavourJourney />

      {/* EXPERIENCE GALLERY */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="The Experience"
            title="Dining at Manpaanai"
            description="Photographs of the food, the flavours and the dining room."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-4 sm:grid-rows-3">
          {experience.map((item, i) => (
            <Reveal key={item.label} delay={i * 90} className={item.span}>
              <figure className="group relative h-full overflow-hidden rounded-xl">
                <ImagePlaceholder
                  label={item.label}
                  aspect="h-full min-h-[190px]"
                  className="h-full transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-secondary/85 px-4 py-1.5 font-display text-sm text-secondary-foreground">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* LOCATION */}
      <LocationSection />

      {/* RESERVATION CTA */}
      <CTASection />

      {/* REVIEWS */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Reviews"
            title="What Our Guests Say"
            description="Sample review cards — replace the placeholder text with real Google reviews before publishing."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <ReviewCard {...review} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-12 text-center">
          <ActionAnchor href={links.GOOGLE_REVIEWS_URL} variant="outline" size="lg">
            Read More Reviews on Google
          </ActionAnchor>
          <p className="mt-3 text-xs tracking-[0.16em] text-muted-foreground uppercase">
            Placeholder link: GOOGLE_REVIEWS_URL
          </p>
        </Reveal>
      </Section>

      {/* BLOG PREVIEW */}
      <Section tone="muted">
        <Reveal>
          <SectionHeading
            eyebrow="Journal"
            title="From the World of Chettinad Cuisine"
            description="Stories about spices, South Indian breakfasts and eating well in Vandalur."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 90}>
              <BlogCard {...post} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-12 text-center">
          <ActionLink to="/blog" variant="outline">
            Visit the Blog <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ActionLink>
        </Reveal>
      </Section>

      <FindUsOnline />
    </>
  );
}
