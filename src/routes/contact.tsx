import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, MapPin, Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ActionButton, Section, SpiceParticles } from "@/components/site/ui-bits";
import { ContactCard, OpeningHours, ReservationButtons, FindUsOnline } from "@/components/site/blocks";
import { cn } from "@/lib/utils";

const TITLE = "Contact & Location | Manpaanai Chettinadu Virundhu";
const DESCRIPTION =
  "Contact Manpaanai Chettinadu Virundhu, a Chettinad restaurant in Vandalur, Chennai. Call 070949 88889, find directions on GST Road or send an enquiry.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

type Errors = Partial<Record<"name" | "email" | "phone" | "subject" | "message", string>>;

function ContactPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const next: Errors = {};
    if (get("name").length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(get("email"))) next.email = "Please enter a valid email address.";
    if (!/^[\d+\s()-]{8,15}$/.test(get("phone"))) next.phone = "Please enter a valid phone number.";
    if (get("subject").length < 3) next.subject = "Please add a subject.";
    if (get("message").length < 10) next.message = "Please tell us a little more (10+ characters).";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      form.reset();
    } else {
      setSent(false);
    }
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ivory pt-32 pb-16 sm:pt-36">
        <SpiceParticles count={10} />
        <div className="absolute inset-0 kolam-dots opacity-35" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="animate-reveal max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.26em] text-primary uppercase">
              Contact
            </p>
            <h1 className="mt-4 text-balance-tight text-4xl leading-tight text-secondary sm:text-5xl">
              Come Visit Us
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {restaurant.name} — Chettinad and South Indian cuisine on GST Road, opposite Vandalur
              Zoo, Chennai.
            </p>
            <div className="mt-7 flex flex-wrap gap-4 text-sm">
              <a
                href={restaurant.phoneHref}
                className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> {restaurant.phoneDisplay}
              </a>
              <a
                href={restaurant.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="surface-card rounded-xl p-6 sm:p-8">
              <h2 className="font-display text-2xl text-secondary">Send an Enquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                For reservations, group bookings or questions about our menu.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
                <Field label="Name" name="name" error={errors.name} />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" error={errors.email} />
                  <Field label="Phone" name="phone" type="tel" error={errors.phone} />
                </div>
                <Field label="Subject" name="subject" error={errors.subject} />
                <Field label="Message" name="message" textarea error={errors.message} />

                <ActionButton type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                  Send Enquiry
                </ActionButton>

                <div aria-live="polite">
                  {sent ? (
                    <p className="flex items-center gap-2 rounded-lg bg-leaf/10 px-4 py-3 text-sm font-medium text-leaf">
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                      Thank you — your enquiry has been noted. We will get back to you shortly.
                    </p>
                  ) : Object.keys(errors).length > 0 ? (
                    <p className="rounded-lg bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
                      Please correct the highlighted fields and try again.
                    </p>
                  ) : null}
                </div>
              </form>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={80}>
              <ContactCard />
            </Reveal>
            <Reveal delay={140}>
              <OpeningHours />
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="ivory" id="reserve">
        <Reveal>
          <SectionHeading
            eyebrow="Reservations"
            title="Reserve a Table in Vandalur"
            description="Choose a booking platform below, or call us directly. These links are placeholders to be replaced with the live reservation URLs."
          />
        </Reveal>
        <Reveal delay={100} className="mx-auto mt-10 max-w-2xl">
          <ReservationButtons />
        </Reveal>
      </Section>

      <Section tone="muted" className="pt-0">
        <Reveal className="surface-card overflow-hidden rounded-xl">
          <iframe
            title={`Map showing the location of ${restaurant.name}`}
            src={restaurant.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[420px] w-full border-0"
          />
        </Reveal>
      </Section>

      <FindUsOnline />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  error?: string;
}) {
  const id = `field-${name}`;
  const shared = cn(
    "mt-2 w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-primary",
    error ? "border-destructive" : "border-input",
  );
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-secondary">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={shared}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={shared}
        />
      )}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
