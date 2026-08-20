import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, Youtube, Globe } from "lucide-react";
import { links, restaurant } from "@/data/restaurant";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  { label: "Instagram", href: links.INSTAGRAM_URL, Icon: Instagram },
  { label: "Facebook", href: links.FACEBOOK_URL, Icon: Facebook },
  { label: "Google Business Profile", href: links.GOOGLE_BUSINESS_URL, Icon: Globe },
  { label: "YouTube", href: links.YOUTUBE_URL, Icon: Youtube },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-x-0 top-0 h-px rule-ornament" aria-hidden="true" />
      <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full border border-gold/20" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl">{restaurant.name}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary-foreground/70">
            Authentic Chettinad and South Indian cuisine in Vandalur, Chennai.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-ivory/25 text-secondary-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-semibold tracking-[0.24em] text-gold uppercase">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-secondary-foreground/75 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.24em] text-gold uppercase">Visit Us</h2>
          <address className="mt-5 text-sm leading-relaxed text-secondary-foreground/75 not-italic">
            {restaurant.footerAddressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a
            href={restaurant.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-gold transition-colors hover:text-gold/80"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" /> Get Directions
          </a>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.24em] text-gold uppercase">Contact</h2>
          <a
            href={restaurant.phoneHref}
            className="mt-5 inline-flex items-center gap-2 font-display text-xl transition-colors hover:text-gold"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> {restaurant.phoneDisplay}
          </a>
          <p className="mt-4 text-sm text-secondary-foreground/70">
            Chettinad restaurant in Vandalur, on GST Road opposite Vandalur Zoo.
          </p>
        </div>
      </div>

      <div className="relative border-t border-ivory/12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-secondary-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 {restaurant.name}. All Rights Reserved.</p>
          <p>Designed as an SEO-focused digital presence for {restaurant.name}.</p>
        </div>
      </div>
    </footer>
  );
}
