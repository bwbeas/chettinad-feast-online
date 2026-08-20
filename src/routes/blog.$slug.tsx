import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/data/restaurant";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { BlogCard } from "@/components/site/cards";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/ui-bits";
import { CTASection } from "@/components/site/blocks";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article unavailable | Manpaanai Chettinadu Virundhu" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    const title = `${post.title} | Manpaanai Chettinadu Virundhu`;
    return {
      meta: [
        { title },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: post.excerpt },
        { property: "og:url", content: `/blog/${params.slug}` },
        { property: "og:type", content: "article" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: post.excerpt },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            articleSection: post.category,
            publisher: {
              "@type": "Restaurant",
              name: "Manpaanai Chettinadu Virundhu",
            },
          }),
        },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="relative isolate overflow-hidden bg-ivory pt-32 pb-14 sm:pt-36">
          <div className="absolute inset-0 kolam-dots opacity-35" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All articles
            </Link>
            <div className="mt-6 flex flex-wrap gap-x-3 text-[10px] font-semibold tracking-[0.18em] uppercase">
              <span className="text-primary">{post.category}</span>
              <span className="text-muted-foreground">{post.date}</span>
              <span className="text-muted-foreground">{post.readingTime}</span>
            </div>
            <h1 className="mt-4 text-balance-tight text-3xl leading-tight text-secondary sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-5 pb-4 sm:px-8">
          <ImagePlaceholder label={post.placeholder} aspect="aspect-[16/9]" className="shadow-warm" />
        </div>

        <Section className="py-14">
          <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            {post.body.map((paragraph, i) => (
              <Reveal key={i} as="p" delay={i * 40}>
                {paragraph}
              </Reveal>
            ))}
          </div>
        </Section>
      </article>

      <Section tone="muted">
        <h2 className="font-display text-3xl text-secondary">Keep Reading</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((item, i) => (
            <Reveal key={item.slug} delay={i * 80}>
              <BlogCard {...item} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
