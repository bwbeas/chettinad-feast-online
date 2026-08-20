import { useState } from "react";
import { Flame, Wind, Landmark, UtensilsCrossed } from "lucide-react";
import { flavourJourney } from "@/data/restaurant";
import { cn } from "@/lib/utils";
import { Section } from "./ui-bits";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = [Flame, Wind, Landmark, UtensilsCrossed];

export function FlavourJourney() {
  const [active, setActive] = useState(0);

  return (
    <Section tone="ivory">
      <Reveal>
        <SectionHeading
          eyebrow="Special"
          title="The Chettinad Flavour Journey"
          description="Four steps from raw spice to a shared table. Hover or select a step to follow the journey."
        />
      </Reveal>

      <Reveal delay={80} className="mt-12">
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {flavourJourney.map((item, i) => {
            const Icon = icons[i] ?? Flame;
            const isActive = active === i;
            return (
              <li key={item.step}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={cn(
                    "surface-card h-full w-full rounded-xl p-6 text-left transition-all duration-500",
                    isActive
                      ? "-translate-y-1.5 border-primary/60 shadow-lift"
                      : "hover:-translate-y-1 hover:shadow-lift",
                  )}
                >
                  <span
                    className={cn(
                      "grid h-11 w-11 place-items-center rounded-full transition-colors duration-500",
                      isActive ? "bg-ember text-primary-foreground" : "bg-accent text-primary",
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-[10px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-secondary">{item.title}</h3>
                  <p
                    className={cn(
                      "grid overflow-hidden text-sm leading-relaxed text-muted-foreground transition-all duration-500",
                      isActive ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <span className="min-h-0">{item.description}</span>
                  </p>
                </button>
              </li>
            );
          })}
        </ol>
      </Reveal>
    </Section>
  );
}
