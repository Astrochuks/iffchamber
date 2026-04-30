import type { Metadata } from "next";
import { LeafGlyph } from "@/components/LeafGlyph";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Engage — IFF CHAMBER",
  description:
    "Reach IFF CHAMBER directly, submit a brief, or open a general inquiry. We partner with governments, institutions, and industries advancing food systems at scale.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-16 md:pt-28 pb-16 md:pb-24">
        <div
          className="pointer-events-none select-none absolute -right-12 md:-right-20 -top-6 md:-top-12 font-display font-medium text-ink/[0.04] leading-none tracking-[-0.02em]"
          style={{ fontSize: "clamp(8rem, 26vw, 28rem)" }}
          aria-hidden
        >
          04
        </div>

        <div className="relative mx-auto max-w-[1480px]">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
            <LeafGlyph className="w-[20px] h-auto text-moss" />
            <span>Engage</span>
            <span className="text-amber">●</span>
            <span>Open a channel</span>
          </div>

          <h1
            className="mt-12 md:mt-16 font-display font-medium leading-[0.92] tracking-[-0.025em] text-balance text-ink"
            style={{ fontSize: "clamp(3rem, 10.5vw, 8.5rem)" }}
          >
            Begin a{" "}
            <span className="italic text-moss">conversation.</span>
          </h1>

          <p
            className="mt-10 md:mt-14 max-w-3xl font-display leading-[1.22] text-ink-soft text-pretty"
            style={{ fontSize: "clamp(1.25rem, 2.1vw, 1.75rem)" }}
          >
            Reach us directly, submit a brief, or open a general inquiry. We read every message that comes through, and we respond within two working days.
          </p>
        </div>
      </section>

      {/* DIRECT CHANNELS */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-20 md:py-28 bg-bone-soft">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
                <span className="text-amber">01</span>
                <span className="mx-2">—</span>
                Direct channels
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2
                className="font-display font-medium leading-[1.06] tracking-[-0.015em] text-balance"
                style={{ fontSize: "clamp(1.85rem, 4vw, 2.75rem)" }}
              >
                Who you should reach,{" "}
                <span className="italic text-moss">and for what.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {CHANNELS.map((c) => (
              <div key={c.email} className="border-t border-ink/25 pt-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber mb-3">
                  {c.label}
                </div>
                <a
                  href={`mailto:${c.email}`}
                  className="font-display text-[1.1rem] md:text-[1.2rem] text-ink hover:text-moss transition-colors leading-snug break-words"
                  style={{ fontVariationSettings: '"opsz" 60' }}
                >
                  {c.email}
                </a>
                <p className="mt-4 font-body text-[14px] leading-[1.6] text-ink-soft text-pretty">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRIEF FORM */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
                <span className="text-amber">02</span>
                <span className="mx-2">—</span>
                Submit a brief
              </div>
              <div className="mt-8 hidden md:block">
                <LeafGlyph className="w-7 h-auto text-moss" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2
                className="font-display font-medium leading-[1.06] tracking-[-0.015em] text-balance"
                style={{ fontSize: "clamp(1.85rem, 4vw, 2.75rem)" }}
              >
                Tell us what you're working on.
              </h2>
              <p className="mt-6 font-body text-[17px] md:text-[18.5px] leading-[1.65] text-ink-soft max-w-2xl text-pretty">
                A brief is a starting point, not a commitment. Share as much or as little as you want; a senior partner will read your message personally.
              </p>

              <div className="mt-12 max-w-2xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-20 md:py-28 bg-ink text-bone relative overflow-hidden">
        <div
          className="pointer-events-none select-none absolute -left-10 md:-left-16 -bottom-10 md:-bottom-20 font-display font-medium text-bone/[0.04] leading-none"
          style={{ fontSize: "clamp(10rem, 28vw, 32rem)" }}
          aria-hidden
        >
          03
        </div>

        <div className="relative mx-auto max-w-[1480px]">
          <div className="grid grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-14">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-bone/60">
                <span className="text-amber">03</span>
                <span className="mx-2">—</span>
                Presence
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2
                className="font-display font-medium leading-[1.06] tracking-[-0.02em] text-balance text-bone"
                style={{ fontSize: "clamp(1.85rem, 4vw, 2.75rem)" }}
              >
                Where we work.
              </h2>
              <p className="mt-6 font-body text-[17px] leading-[1.6] text-bone/75 max-w-2xl text-pretty">
                IFF CHAMBER works globally. Our base of operations and regional presence are being formalised.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 md:col-start-4 md:col-span-9">
            {OFFICES.map((o) => (
              <div key={o.region} className="border-t border-bone/20 pt-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber mb-2">
                  {o.region}
                </div>
                <div className="font-display text-[1.15rem] text-bone leading-snug">
                  {o.city}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-bone/50">
                  {o.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const CHANNELS = [
  {
    label: "General engagement",
    email: "engage@iffchamber.com",
    body: "Partnerships, engagements, general inquiries, and anything not covered below.",
  },
  {
    label: "Media & press",
    email: "press@iffchamber.com",
    body: "Interview requests, commentary, speaker invitations, and press inquiries.",
  },
  {
    label: "Careers",
    email: "careers@iffchamber.com",
    body: "Open roles, fellowships, and expressions of interest in joining the chamber.",
  },
  {
    label: "Research & insights",
    email: "insights@iffchamber.com",
    body: "Research collaborations, citations, data requests, and publication questions.",
  },
];

const OFFICES = [
  { region: "Global HQ", city: "Forthcoming", status: "Planned" },
  { region: "West Africa", city: "Forthcoming", status: "Planned" },
  { region: "East Africa", city: "Forthcoming", status: "Planned" },
  { region: "Europe", city: "Forthcoming", status: "Planned" },
];
