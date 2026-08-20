import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, HandHeart, Sparkles, Wallet } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ActionLink, Section, SpiceParticles } from "@/components/site/ui-bits";
import { CTASection, LocationSection } from "@/components/site/blocks";

const TITLE = "About Us | Manpaanai Chettinadu Virundhu, Vandalur";
const DESCRIPTION =
  "Learn about Manpaanai Chettinadu Virundhu, a Chettinad and South Indian restaurant on GST Road in Vandalur, Chennai — our food philosophy and dining experience.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const beliefs = [
  {
    Icon: BadgeCheck,
    title: "Authenticity",
    text: "Chettinad spice blends and South Indian technique kept close to tradition.",
  },
  {
    Icon: Sparkles,
    title: "Quality",
    text: "Carefully chosen ingredients, fresh tempering and dishes cooked to order.",
  },
  {
    Icon: HandHeart,
    title: "Hospitality",
    text: "A warm, unhurried welcome for families, groups and solo diners alike.",
  },
  {
    Icon: Wallet,
    title: "Value",
    text: "Generous portions at prices that make a good meal an everyday choice.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ivory pt-32 pb-16 sm:pt-36">
        <SpiceParticles count={10} />
        <div className="absolute inset-0 kolam-dots opacity-35" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="animate-reveal max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.26em] text-primary uppercase">
              About Us
            </p>
            <h1 className="mt-4 text-balance-tight text-4xl leading-tight text-secondary sm:text-5xl">
              A Chettinad Kitchen in the Heart of Vandalur
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {restaurant.name} is a South Indian restaurant in Vandalur, Chennai, serving Chettinad
              cuisine on the Grand Southern Trunk Road at Otteri.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading align="left" eyebrow="Our Story" title="Our Story" />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                {restaurant.name} grew out of a simple idea: that Chettinad food, cooked properly,
                does not need embellishment. Our kitchen focuses on the dishes people in Tamil Nadu
                actually eat — pepper-heavy chicken curries, slow-cooked mutton, biryani, tiffin in
                the morning and a full meals plate at midday.
              </p>
              <p>
                Set on GST Road opposite Vandalur Zoo, the restaurant has become a familiar stop for
                nearby residents as well as travellers passing through Chennai's southern edge. Many
                guests arrive for a quick plate and return with the whole family.
              </p>
              <p>
                We are known locally for quality food, generous portions and pricing that stays
                approachable — the qualities that keep a neighbourhood restaurant busy.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ImagePlaceholder label="[RESTAURANT INTERIOR IMAGE]" aspect="aspect-[5/4]" />
          </Reveal>
        </div>
      </Section>

      <Section tone="ivory">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <Reveal className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <ImagePlaceholder label="[SPICE MASALA IMAGE]" aspect="aspect-[3/4]" />
            <ImagePlaceholder
              label="[TRADITIONAL COOKING IMAGE]"
              aspect="aspect-[3/4]"
              steam
              className="mt-8"
            />
          </Reveal>
          <Reveal delay={80} className="order-1 lg:order-2">
            <SectionHeading align="left" eyebrow="Philosophy" title="Our Food Philosophy" />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Authentic Chettinad cuisine begins before the pan: whole spices are dry-roasted to
                wake up their oils, then ground so the masala belongs to that dish alone. Black
                pepper, fennel, star anise, cinnamon and dried chilli each play a part, softened by
                shallots, tamarind, curry leaves and fresh coconut.
              </p>
              <p>
                The rest of our menu follows South Indian cuisine as it is practised in Chennai homes
                — fermented batters for dosa and idli, lentils for sambar and kootu, and rice at the
                centre of everything. Nothing sits waiting; food leaves the kitchen hot.
              </p>
              <p>
                The result is comfort food with real depth: aromatic, spiced with intent, and familiar
                enough to eat every week.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <Reveal>
          <SectionHeading
            eyebrow="What We Believe"
            title="Four Principles Behind Every Plate"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {beliefs.map(({ Icon, title, text }, i) => (
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

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading align="left" eyebrow="The Room" title="Dining Experience" />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Our dining room is built for sharing. Tables seat families comfortably, service is
                friendly without hovering, and the pace suits both a quick weekday lunch and a long
                weekend meal with relatives.
              </p>
              <p>
                Because we sit right on GST Road opposite the zoo, we see a mix of guests through the
                day — Vandalur regulars at breakfast, families after a zoo visit, and travellers
                looking for genuine Chettinad food in Chennai rather than a highway stop.
              </p>
              <p>
                Whatever brings you in, expect the same thing: honest South Indian food in Vandalur,
                served warm.
              </p>
            </div>
            <ActionLink to="/menu" variant="primary" className="mt-8">
              Explore Our Menu
            </ActionLink>
          </Reveal>
          <Reveal delay={100}>
            <ImagePlaceholder label="[FAMILY DINING IMAGE]" aspect="aspect-[4/3]" />
          </Reveal>
        </div>
      </Section>

      <LocationSection />
      <CTASection />
    </>
  );
}
