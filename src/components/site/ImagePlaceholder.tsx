import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  /** Adds a gentle steam animation, for hot-food imagery slots. */
  steam?: boolean;
  aspect?: string;
}

/**
 * Elegant stand-in for a real photograph.
 * Replace with <img src=... alt=... loading="lazy" /> once photos are available.
 */
export function ImagePlaceholder({
  label,
  className,
  steam = false,
  aspect = "aspect-[4/3]",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}`}
      className={cn(
        "group relative isolate overflow-hidden rounded-lg border border-border bg-accent/60",
        aspect,
        className,
      )}
    >
      <div className="absolute inset-0 kolam-dots" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_120%,var(--color-gold)/25,transparent_60%)] opacity-40"
        aria-hidden="true"
      />
      <div className="absolute inset-3 rounded-md border border-gold/40" aria-hidden="true" />

      {steam ? (
        <div className="pointer-events-none absolute bottom-1/3 left-1/2 flex -translate-x-1/2 gap-3" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="animate-steam block h-10 w-1.5 rounded-full bg-ivory/70 blur-[3px]"
              style={{ animationDelay: `${i * 1.1}s` }}
            />
          ))}
        </div>
      ) : null}

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
        <span className="h-px w-10 rule-ornament" aria-hidden="true" />
        <span className="font-display text-xs tracking-[0.28em] text-secondary/80 uppercase sm:text-sm">
          {label}
        </span>
        <span className="text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
          Photograph to be added
        </span>
      </div>
    </div>
  );
}
