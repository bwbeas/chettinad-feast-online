import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 disabled:opacity-60 disabled:pointer-events-none";

const variants = {
  primary: "bg-ember text-primary-foreground shadow-warm hover:shadow-lift hover:-translate-y-0.5",
  outline:
    "border border-secondary/30 text-secondary hover:border-primary hover:text-primary hover:-translate-y-0.5",
  gold: "bg-gold text-gold-foreground shadow-warm hover:shadow-lift hover:-translate-y-0.5",
  ghostLight:
    "border border-ivory/40 text-primary-foreground hover:bg-ivory/12 hover:-translate-y-0.5",
} as const;

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3",
  lg: "px-7 py-3.5 text-base",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

export function btnClass(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

export function ActionButton({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return (
    <button className={btnClass(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

export function ActionLink({
  to,
  children,
  variant = "primary",
  size = "md",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <Link to={to} className={btnClass(variant, size, className)}>
      {children}
    </Link>
  );
}

export function ActionAnchor({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={btnClass(variant, size, className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

/** Floating spice-particle field — decorative only. */
export function SpiceParticles({ count = 14 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="animate-spice absolute block rounded-full bg-gold/60"
          style={{
            left: `${(i * 97) % 100}%`,
            bottom: `-${(i % 5) * 6 + 4}%`,
            width: `${3 + (i % 3)}px`,
            height: `${3 + (i % 3)}px`,
            animationDuration: `${14 + (i % 7) * 3}s`,
            animationDelay: `${(i % 9) * 1.7}s`,
          }}
        />
      ))}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "ivory" | "dark" | "muted";
}) {
  const tones = {
    default: "",
    ivory: "bg-ivory",
    muted: "bg-accent/40",
    dark: "bg-secondary text-secondary-foreground",
  } as const;
  return (
    <section id={id} className={cn("relative py-20 sm:py-24", tones[tone], className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
