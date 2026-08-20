import { Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { cn } from "@/lib/utils";

export function FoodCard({
  name,
  category,
  description,
  placeholder,
  className,
}: {
  name: string;
  category: string;
  description: string;
  placeholder: string;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group surface-card flex flex-col overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift",
        className,
      )}
    >
      <div className="overflow-hidden">
        <ImagePlaceholder
          label={placeholder}
          steam
          aspect="aspect-[5/4]"
          className="rounded-none border-0 transition-transform duration-700 group-hover:scale-[1.05]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-primary uppercase">
          {category}
        </p>
        <h3 className="mt-2 font-display text-xl text-secondary">{name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <Link
          to="/menu"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
        >
          View Menu <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function ReviewCard({
  name,
  quote,
  meta,
}: {
  name: string;
  quote: string;
  meta: string;
}) {
  return (
    <article className="surface-card flex h-full flex-col rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
      <div className="flex gap-0.5 text-gold" aria-label="Five star rating placeholder">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 font-display text-lg leading-relaxed text-secondary italic">
        “{quote}”
      </blockquote>
      <footer className="mt-5 border-t border-border pt-4 text-sm">
        <p className="font-semibold text-secondary">— {name}</p>
        <p className="text-xs tracking-wide text-muted-foreground uppercase">{meta}</p>
      </footer>
    </article>
  );
}

export function BlogCard({
  slug,
  title,
  category,
  excerpt,
  readingTime,
  date,
  placeholder,
  showDate = false,
}: {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readingTime: string;
  date?: string;
  placeholder: string;
  showDate?: boolean;
}) {
  return (
    <article className="group surface-card flex flex-col overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="overflow-hidden">
        <ImagePlaceholder
          label={placeholder}
          aspect="aspect-[16/10]"
          className="rounded-none border-0 transition-transform duration-700 group-hover:scale-[1.05]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-semibold tracking-[0.18em] uppercase">
          <span className="text-primary">{category}</span>
          {showDate && date ? <span className="text-muted-foreground">{date}</span> : null}
          <span className="text-muted-foreground">{readingTime}</span>
        </div>
        <h3 className="mt-3 font-display text-xl leading-snug text-secondary">
          <Link to="/blog/$slug" params={{ slug }} className="transition-colors hover:text-primary">
            {title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{excerpt}</p>
        <Link
          to="/blog/$slug"
          params={{ slug }}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
        >
          Read Article <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
