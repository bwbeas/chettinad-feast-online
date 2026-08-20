import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={cn(centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      {eyebrow ? (
        <div
          className={cn("flex items-center gap-3", centered && "justify-center")}
        >
          <span className="h-px w-8 rule-ornament" aria-hidden="true" />
          <p className="text-[11px] font-semibold tracking-[0.26em] text-primary uppercase">
            {eyebrow}
          </p>
          <span className="h-px w-8 rule-ornament" aria-hidden="true" />
        </div>
      ) : null}
      <Tag className="mt-4 text-balance-tight text-3xl leading-tight text-secondary sm:text-4xl md:text-[2.75rem]">
        {title}
      </Tag>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
