import { createFileRoute, Link } from "@tanstack/react-router";
import { menu, restaurant } from "@/data/restaurant";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { btnClass, Section, SpiceParticles } from "@/components/site/ui-bits";
import { CTASection, ReservationButtons } from "@/components/site/blocks";

const TITLE = "Menu | Chettinad & South Indian Food in Vandalur";
const DESCRIPTION =
  "Explore the Chettinad and South Indian menu at Manpaanai Chettinadu Virundhu in Vandalur, Chennai. Discover traditional favourites, biryani, tiffin and more.";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/menu" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ivory pt-32 pb-16 sm:pt-36">
        <SpiceParticles count={10} />
        <div className="absolute inset-0 kolam-dots opacity-35" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="animate-reveal max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.26em] text-primary uppercase">
              Chettinad · South Indian
            </p>
            <h1 className="mt-4 text-balance-tight text-4xl leading-tight text-secondary sm:text-5xl">
              Our Menu
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Explore the flavours of authentic Chettinad and South Indian cuisine.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Prices are confirmed in the restaurant
            </p>
          </div>
        </div>
      </section>

      <Section>
        <nav aria-label="Menu categories" className="flex flex-wrap gap-2">
          {menu.map((group) => (
            <a
              key={group.category}
              href={`#${slug(group.category)}`}
              className="surface-card rounded-full px-4 py-2 text-sm font-medium text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
            >
              {group.category}
            </a>
          ))}
        </nav>

        <div className="mt-14 space-y-16">
          {menu.map((group, gi) => (
            <Reveal key={group.category} as="section" delay={40}>
              <div id={slug(group.category)} className="scroll-mt-28">
                <div className="flex items-end justify-between gap-6">
                  <h2 className="font-display text-3xl text-secondary">{group.category}</h2>
                  <span className="mb-2 hidden h-px flex-1 rule-ornament sm:block" aria-hidden="true" />
                </div>
                <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_320px]">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="surface-card rounded-lg p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
                      >
                        <div className="flex items-baseline justify-between gap-4">
                          <h3 className="font-display text-lg text-secondary">{item.name}</h3>
                          <span className="shrink-0 text-sm font-semibold text-primary">₹ —</span>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                        <p className="mt-2 text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                          Price available at restaurant
                        </p>
                      </li>
                    ))}
                  </ul>
                  <ImagePlaceholder
                    label={`[${group.category.toUpperCase()} IMAGE]`}
                    aspect="aspect-[4/5] lg:aspect-auto lg:h-full"
                    steam={gi % 2 === 0}
                    className="hidden lg:block"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ivory">
        <Reveal>
          <SectionHeading
            eyebrow="Reservations"
            title="Book a Table at Manpaanai"
            description={`Reserve through your preferred platform, or simply call ${restaurant.phoneDisplay}.`}
          />
        </Reveal>
        <Reveal delay={100} className="mx-auto mt-10 max-w-2xl">
          <ReservationButtons />
          <div className="mt-8 text-center">
            <Link to="/contact" hash="reserve" className={btnClass("primary", "lg")}>
              Reserve a Table
            </Link>
          </div>
        </Reveal>
      </Section>

      <CTASection />
    </>
  );
}

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
