import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { openingHours, reservationOptions, restaurant, links } from "@/data/restaurant";
import { ActionAnchor, btnClass, Section, SpiceParticles } from "./ui-bits";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Link } from "@tanstack/react-router";

export function OpeningHours() {
  return (
    <div className="surface-card rounded-xl p-6">
      <h3 className="flex items-center gap-2 font-display text-xl text-secondary">
        <Clock className="h-5 w-5 text-primary" aria-hidden="true" /> Opening Hours
      </h3>
      <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
        [ADD VERIFIED OPENING HOURS]
      </p>
      <dl className="mt-4 divide-y divide-border text-sm">
        {openingHours.map(({ day, time }) => (
          <div key={day} className="flex items-center justify-between py-2.5">
            <dt className="font-medium text-secondary">{day}</dt>
            <dd className="text-muted-foreground">{time}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function ContactCard() {
  return (
    <div className="surface-card rounded-xl p-6">
      <h3 className="font-display text-xl text-secondary">{restaurant.name}</h3>
      <address className="mt-3 text-sm leading-relaxed text-muted-foreground not-italic">
        {restaurant.addressLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <ActionAnchor href={restaurant.mapsDirectionsUrl} external variant="primary" size="sm">
          <MapPin className="h-4 w-4" aria-hidden="true" /> Get Directions
        </ActionAnchor>
        <ActionAnchor href={restaurant.phoneHref} variant="outline" size="sm">
          <Phone className="h-4 w-4" aria-hidden="true" /> Call the Restaurant
        </ActionAnchor>
      </div>
    </div>
  );
}

export function ReservationButtons() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {reservationOptions.map((option) => (
        <a
          key={option.label}
          href={option.url}
          className="group surface-card flex items-center justify-between rounded-lg px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
        >
          <span>
            <span className="block font-display text-lg text-secondary">{option.label}</span>
            <span className="block text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
              {option.note} · link to be added
            </span>
          </span>
          <ExternalLink
            className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      ))}
    </div>
  );
}

export function LocationSection() {
  return (
    <Section tone="ivory" id="visit">
      <Reveal>
        <SectionHeading
          eyebrow="Visit Us"
          title="Visit Manpaanai Chettinadu Virundhu in Vandalur"
          description="Find us on the Grand Southern Trunk Road at Otteri, directly opposite Vandalur Zoo — an easy stop for families, travellers and anyone craving Chettinad food in Chennai."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <Reveal className="surface-card overflow-hidden rounded-xl">
          <iframe
            title={`Map showing the location of ${restaurant.name} in Vandalur, Chennai`}
            src={restaurant.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[340px] w-full border-0"
          />
        </Reveal>
        <div className="space-y-6">
          <Reveal delay={80}>
            <ContactCard />
          </Reveal>
          <Reveal delay={160}>
            <OpeningHours />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function CTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-secondary py-20 text-secondary-foreground sm:py-24">
      <SpiceParticles />
      <div className="absolute inset-0 kolam-dots opacity-15" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span className="mx-auto block h-px w-14 rule-ornament" aria-hidden="true" />
        <h2 className="mt-6 text-balance-tight font-display text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
          Planning a Meal? Let's Make It Special.
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-secondary-foreground/75">
          Gather your family and friends and enjoy authentic South Indian and Chettinad flavours in
          Vandalur.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/contact" hash="reserve" className={btnClass("gold", "lg")}>
            Reserve a Table
          </Link>
          <ActionAnchor href={restaurant.phoneHref} variant="ghostLight" size="lg">
            <Phone className="h-4 w-4" aria-hidden="true" /> Call {restaurant.phoneDisplay}
          </ActionAnchor>
        </div>
        <p className="mt-5 text-xs tracking-[0.16em] text-secondary-foreground/50 uppercase">
          Reservation link placeholder: {links.RESERVATION_URL}
        </p>
      </div>
    </section>
  );
}

export function FindUsOnline() {
  const online = [
    { label: "Google Business Profile", href: links.GOOGLE_BUSINESS_URL },
    { label: "Instagram", href: links.INSTAGRAM_URL },
    { label: "Facebook", href: links.FACEBOOK_URL },
    { label: "Zomato", href: links.ZOMATO_URL },
    { label: "Swiggy", href: links.SWIGGY_URL },
    { label: "District", href: links.DISTRICT_URL },
    { label: "EazyDiner", href: links.EAZYDINER_URL },
  ];
  return (
    <Section tone="muted">
      <Reveal>
        <SectionHeading
          eyebrow="Find Us Online"
          title="Follow Manpaanai Chettinadu Virundhu"
          description="Our listings and social profiles will be linked here — replace each placeholder link once the profiles are confirmed."
        />
      </Reveal>
      <Reveal delay={80} className="mt-10 flex flex-wrap justify-center gap-3">
        {online.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="surface-card inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:text-primary hover:shadow-lift"
          >
            {item.label}
            <ExternalLink className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          </a>
        ))}
      </Reveal>
    </Section>
  );
}
