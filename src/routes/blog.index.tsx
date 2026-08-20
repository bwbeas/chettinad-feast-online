import { createFileRoute } from "@tanstack/react-router";
import { posts } from "@/data/restaurant";
import { BlogCard } from "@/components/site/cards";
import { Reveal } from "@/components/site/Reveal";
import { Section, SpiceParticles } from "@/components/site/ui-bits";
import { CTASection } from "@/components/site/blocks";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { Link } from "@tanstack/react-router";

const TITLE = "Food & Chettinad Cuisine Blog | Manpaanai Vandalur";
const DESCRIPTION =
  "Read about Chettinad cuisine, South Indian breakfasts, spices and dining in Vandalur from Manpaanai Chettinadu Virundhu, Chennai.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/blog" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ivory pt-32 pb-16 sm:pt-36">
        <SpiceParticles count={10} />
        <div className="absolute inset-0 kolam-dots opacity-35" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="animate-reveal max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.26em] text-primary uppercase">
              Journal
            </p>
            <h1 className="mt-4 text-balance-tight text-4xl leading-tight text-secondary sm:text-5xl">
              From the World of Chettinad Cuisine
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Notes on spices, South Indian food culture and eating well in Vandalur, Chennai.
            </p>
          </div>
        </div>
      </section>

      {featured ? (
        <Section>
          <Reveal>
            <article className="surface-card group grid overflow-hidden rounded-xl lg:grid-cols-2">
              <div className="overflow-hidden">
                <ImagePlaceholder
                  label={featured.placeholder}
                  aspect="aspect-[16/11] lg:h-full lg:aspect-auto"
                  className="h-full rounded-none border-0 transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <div className="flex flex-wrap gap-x-3 text-[10px] font-semibold tracking-[0.18em] uppercase">
                  <span className="text-primary">Featured · {featured.category}</span>
                  <span className="text-muted-foreground">{featured.date}</span>
                  <span className="text-muted-foreground">{featured.readingTime}</span>
                </div>
                <h2 className="mt-4 font-display text-3xl leading-snug text-secondary">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: featured.slug }}
                    className="transition-colors hover:text-primary"
                  >
                    {featured.title}
                  </Link>
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: featured.slug }}
                  className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
                >
                  Read Article →
                </Link>
              </div>
            </article>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 80}>
                <BlogCard {...post} showDate />
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      <CTASection />
    </>
  );
}
