import type { Metadata } from "next";
import Link from "next/link";
import { LeafGlyph } from "@/components/LeafGlyph";
import { ClosingCTA } from "@/components/ClosingCTA";

export const metadata: Metadata = {
  title: "The Practice — IFF CHAMBER",
  description:
    "IFF CHAMBER organizes its work around three interwoven practices: Food Security & Sustainability, Human Capital Development, and Climate Mitigation & Adaptation.",
};

export default function WhatWeDoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-16 md:pt-28 pb-20 md:pb-32">
        <div
          className="pointer-events-none select-none absolute -right-12 md:-right-20 -top-6 md:-top-12 font-display font-medium text-ink/[0.04] leading-none tracking-[-0.02em]"
          style={{ fontSize: "clamp(8rem, 26vw, 28rem)" }}
          aria-hidden
        >
          02
        </div>

        <div className="relative mx-auto max-w-[1480px]">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
            <LeafGlyph className="w-[20px] h-auto text-moss" />
            <span>The Practice</span>
            <span className="text-amber">●</span>
            <span>Three practices, one lever</span>
          </div>

          <h1
            className="mt-12 md:mt-16 font-display font-medium leading-[0.92] tracking-[-0.025em] text-balance text-ink"
            style={{ fontSize: "clamp(3rem, 11vw, 9.5rem)" }}
          >
            Three practices.{" "}
            <span className="italic text-moss">One lever.</span>
          </h1>

          <p
            className="mt-10 md:mt-14 max-w-3xl font-display leading-[1.22] text-ink-soft text-pretty"
            style={{ fontSize: "clamp(1.25rem, 2.1vw, 1.75rem)" }}
          >
            IFF CHAMBER organizes its work around three interwoven practices. Together, they form an integrated lens on the systems that feed us, from the soil a farmer works, to the policy that shapes a nation's nutrition, to the climate trajectory of a continent.
          </p>
        </div>
      </section>

      {/* INTEGRATED THESIS */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32">
        <div className="mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
              <span className="text-amber">01</span>
              <span className="mx-2">—</span>
              The thesis
            </div>
            <div className="mt-8 hidden md:block">
              <LeafGlyph className="w-7 h-auto text-moss" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-display font-medium leading-[1.06] tracking-[-0.015em] text-balance"
              style={{ fontSize: "clamp(1.85rem, 4vw, 3rem)" }}
            >
              Food systems are{" "}
              <span className="italic text-moss">one system.</span> They break, thrive, or transform as one.
            </h2>
            <div className="mt-10 space-y-6 font-body text-[17px] md:text-[19px] leading-[1.65] text-ink-soft text-pretty max-w-3xl">
              <p>
                Most food advisory sits in silos. A nutrition firm. A supply-chain consultancy. A climate-finance team. Each is competent in its own lane, but the system does not live in lanes. A policy decision that lifts a smallholder's yield is the same decision that shapes her nutrition, her income, her emissions footprint, and her community's resilience to drought.
              </p>
              <p>
                Our three practices are an answer to that fragmentation. They are separate disciplines with deep expertise, and they are run as a single, integrated lens. A government partner can engage us on a food-security strategy and inherit the human-capital and climate implications for free. A foundation can fund a climate adaptation program and have the livelihoods outcomes designed into it from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PRACTICES */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32 bg-bone-soft">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
                <span className="text-amber">02</span>
                <span className="mx-2">—</span>
                Practices
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2
                className="font-display font-medium leading-[1.06] tracking-[-0.02em] text-balance"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
              >
                Three disciplines, built to{" "}
                <span className="italic text-moss">work together.</span>
              </h2>
            </div>
          </div>

          {PRACTICES.map((p, i) => (
            <article
              key={p.number}
              className={`grid grid-cols-12 gap-8 md:gap-12 py-12 md:py-16 ${i > 0 ? "border-t border-ink/15" : ""}`}
            >
              <div className="col-span-12 md:col-span-4">
                <div
                  className="numeral text-amber leading-[0.85] font-medium"
                  style={{ fontSize: "clamp(5.5rem, 13vw, 12rem)" }}
                >
                  {p.number}
                </div>
                <div className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-mute">
                  Practice {p.number}
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 md:col-start-6">
                <h3
                  className="font-display font-medium text-ink leading-[1.1] tracking-[-0.01em]"
                  style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)" }}
                >
                  {p.title}
                </h3>
                <p className="mt-6 font-body text-[17px] md:text-[19px] leading-[1.55] text-ink-soft text-pretty max-w-2xl">
                  {p.body}
                </p>

                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-xl">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/70 leading-snug flex items-baseline gap-2"
                    >
                      <span className="text-amber">+</span>
                      {t}
                    </li>
                  ))}
                </ul>

                <Link
                  href={p.href}
                  className="mt-10 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-moss hover:text-amber transition-colors group"
                >
                  Inside the practice
                  <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ENGAGEMENT FORMATS */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-12 gap-8 md:gap-12 mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
                <span className="text-amber">03</span>
                <span className="mx-2">—</span>
                Formats
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2
                className="font-display font-medium leading-[1.06] tracking-[-0.02em] text-balance"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
              >
                Five ways to{" "}
                <span className="italic text-moss">work with us.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {FORMATS.map((f) => (
              <article key={f.number} className="border-t border-ink/20 pt-6">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-amber mb-3">
                  Format {f.number}
                </div>
                <h3
                  className="font-display font-medium text-ink leading-[1.15] tracking-[-0.005em]"
                  style={{ fontSize: "clamp(1.35rem, 1.9vw, 1.6rem)" }}
                >
                  {f.title}
                </h3>
                <p className="mt-4 font-body text-[16px] leading-[1.6] text-ink-soft text-pretty">
                  {f.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA number="04" />
    </>
  );
}

const PRACTICES = [
  {
    number: "01",
    title: "Food Security & Sustainability",
    body: "Building food systems that feed today without borrowing from tomorrow. We advise on supply resilience, smallholder productivity, post-harvest loss, circular food economies, and the policy architecture that makes food systems durable, from farm to market to table.",
    href: "/what-we-do/food-security",
    tags: ["Supply resilience", "Smallholder productivity", "Post-harvest loss", "Circular food economies", "Policy architecture"],
  },
  {
    number: "02",
    title: "Human Capital Development",
    body: "Food is the first economic act. We help governments, institutions, and industries translate food systems into pathways for nutrition, employment, skills, and livelihoods, so that food doesn't just sustain people, it lifts them.",
    href: "/what-we-do/human-capital",
    tags: ["Nutrition strategy", "Agri-employment", "Skills & training", "Livelihoods design", "Equity & inclusion"],
  },
  {
    number: "03",
    title: "Climate Mitigation & Adaptation",
    body: "Agriculture is both a driver of and a defense against climate change. We advise on regenerative practices, emissions reduction across food value chains, climate-resilient farming, and the financing and policy instruments that let food systems thrive in a warming world.",
    href: "/what-we-do/climate",
    tags: ["Regenerative practices", "Value-chain emissions", "Climate-resilient farming", "Climate finance", "Adaptation policy"],
  },
];

const FORMATS = [
  {
    number: "01",
    title: "Strategy engagements",
    body: "Six- to eighteen-month partnerships on national food strategy, corporate sustainability transformation, or institutional reform. Embedded teams, senior leadership, full diagnostic through implementation plan.",
  },
  {
    number: "02",
    title: "Policy advisory",
    body: "Targeted advisory on specific legislation, regulatory frameworks, subsidy reform, or trade policy. Often commissioned by ministries or multilateral bodies; outputs include position papers, draft instruments, and stakeholder-facing briefings.",
  },
  {
    number: "03",
    title: "Research partnerships",
    body: "Long-horizon research with universities, foundations, or government think tanks. Original field studies, data infrastructure, and public research outputs that advance the field.",
  },
  {
    number: "04",
    title: "Field programs",
    body: "Implementation-side engagements with ministries, development finance institutions, or NGOs executing food-system interventions. Program design, theory of change, M&E, and scale-up advisory.",
  },
  {
    number: "05",
    title: "Capacity building",
    body: "Training, workshops, fellowship programs, and embedded advisory for institutions growing their food-system competence. Particularly suited to ministries, DFIs, and foundations standing up new food portfolios.",
  },
];
