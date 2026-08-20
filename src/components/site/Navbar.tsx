import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { restaurant } from "@/data/restaurant";
import { cn } from "@/lib/utils";
import { btnClass } from "./ui-bits";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About Us" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-ivory/95 backdrop-blur-md shadow-warm"
          : "bg-ivory/70 backdrop-blur-sm",
      )}
    >
      <nav
        aria-label="Main navigation"
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 transition-all duration-500 sm:px-8",
          scrolled ? "py-2.5" : "py-4",
        )}
      >
        <Link to="/" className="group flex items-center gap-3" aria-label={`${restaurant.name} — home`}>
          <span
            className={cn(
              "grid place-items-center rounded-full bg-ember font-display text-primary-foreground transition-all duration-500",
              scrolled ? "h-9 w-9 text-base" : "h-11 w-11 text-lg",
            )}
            aria-hidden="true"
          >
            M
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                "block font-display text-secondary transition-all duration-500",
                scrolled ? "text-base sm:text-lg" : "text-lg sm:text-xl",
              )}
            >
              Manpaanai
            </span>
            <span className="block text-[9px] font-semibold tracking-[0.22em] text-primary uppercase sm:text-[10px]">
              Chettinadu Virundhu
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary after:scale-x-100" }}
                className="relative px-3.5 py-2 text-sm font-medium text-secondary/85 transition-colors after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={restaurant.phoneHref}
            className="hidden items-center gap-2 text-sm font-medium text-secondary/85 transition-colors hover:text-primary md:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Call </span>
            {restaurant.phoneDisplay}
          </a>
          <Link to="/contact" hash="reserve" className={btnClass("primary", "sm", "hidden sm:inline-flex")}>
            Reserve a Table
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-secondary transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-secondary/50 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={cn(
            "absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-ivory shadow-lift transition-transform duration-400 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <span className="font-display text-lg text-secondary">Manpaanai</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-secondary hover:border-primary hover:text-primary"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <ul className="flex flex-1 flex-col gap-1 px-4 py-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "bg-accent/60 text-primary" }}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3.5 font-display text-xl text-secondary transition-colors hover:bg-accent/60 hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-3 border-t border-border px-5 py-6">
            <Link
              to="/contact"
              hash="reserve"
              onClick={() => setOpen(false)}
              className={btnClass("primary", "md", "w-full")}
            >
              Reserve a Table
            </Link>
            <a href={restaurant.phoneHref} className={btnClass("outline", "md", "w-full")}>
              <Phone className="h-4 w-4" aria-hidden="true" /> {restaurant.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
