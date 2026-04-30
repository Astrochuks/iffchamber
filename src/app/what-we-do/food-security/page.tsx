import type { Metadata } from "next";
import Link from "next/link";
import { LeafGlyph } from "@/components/LeafGlyph";
import { ClosingCTA } from "@/components/ClosingCTA";

export const metadata: Metadata = {
  title: "Food Security & Sustainability — IFF CHAMBER",
  description:
    "Building food systems that feed today without borrowing from tomorrow. IFF CHAMBER advises on supply resilience, smallholder productivity, post-harvest loss, and the policy architecture of durable food security.",
};

export default function FoodSecurityPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-16 md:pt-28 pb-20 md:pb-32">
        <div
          className="pointer-events-none select-none absolute -right-12 md:-right-20 -top-6 md:-top-12 font-display font-medium text-ink/[0.04] leading-none tracking-[-0.02em]"
          style={{ fontSize: "clamp(8rem, 26vw, 28rem)" }}
          aria-hidden
        >
          01
        </div>

        <div className="relative mx-auto max-w-[1480px]">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
            <LeafGlyph className="w-[20px] h-auto text-moss" />
            <span>
              <span className="text-amber">Practice 01</span>
              <span className="mx-2">—</span>
              Food Security &amp; Sustainability
            </span>
          </div>

          <h1
            className="mt-12 md:mt-16 font-display font-medium leading-[0.95] tracking-[-0.025em] text-balance text-ink max-w-5xl"
            style={{ fontSize: "clamp(2.75rem, 8vw, 6.5rem)" }}
          >
            Food systems that feed today without{" "}
            <span className="italic text-moss">borrowing from tomorrow.</span>
          </h1>

          <p
            className="mt-10 md:mt-14 max-w-3xl font-display leading-[1.22] text-ink-soft text-pretty"
            style={{ fontSize: "clamp(1.25rem, 2.1vw, 1.7rem)" }}
          >
            We advise on the architecture of food security — from the farm to the household — and the sustainability of the systems that deliver it. Our work spans national strategy, supply-chain resilience, and the long-run institutions that secure a nation's food future.
          </p>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
            <Link href="/what-we-do/human-capital" className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute hover:text-moss">
              ← Practice 02 / Human Capital
            </Link>
            <Link href="/what-we-do/climate" className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute hover:text-moss">
              Practice 03 / Climate →
            </Link>
          </div>
        </div>
      </section>

      {/* THE STAKES */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32 bg-ink text-bone">
        <div className="mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-bone/60">
              <span className="text-amber">01</span>
              <span className="mx-2">—</span>
              The stakes
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-display font-medium leading-[1.06] tracking-[-0.02em] text-balance text-bone"
              style={{ fontSize: "clamp(1.85rem, 4.2vw, 3rem)" }}
            >
              <span className="text-amber">2.4 billion people</span> live with food insecurity. A <span className="text-amber">third of all food produced</span> never reaches a table.
            </h2>
            <div className="mt-10 space-y-6 font-body text-[17px] md:text-[19px] leading-[1.65] text-bone/80 text-pretty max-w-3xl">
              <p>
                These are not two problems — they are the same problem. Food insecurity is what happens when systems fail to deliver. And food waste is the most visible signal that those systems are delivering the wrong things to the wrong places.
              </p>
              <p>
                Solving security without sustainability is a short horizon. Solving sustainability without security is moral cowardice. We work the two together — because that is the only scale of work that actually changes the future of how nations eat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32">
        <div className="mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
              <span className="text-amber">02</span>
              <span className="mx-2">—</span>
              Approach
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
              Durable security, measured by the systems that{" "}
              <span className="italic text-moss">deliver it.</span>
            </h2>
            <div className="mt-10 space-y-6 font-body text-[17px] md:text-[19px] leading-[1.65] text-ink-soft text-pretty max-w-3xl">
              <p>
                We measure food security not by short-term availability but by the resilience of the institutions, supply chains, markets, and reserves that guarantee it. Emergency response has its place — it is not what we do. Our engagements are built for a ten-year horizon and a national scale.
              </p>
              <p>
                The same logic applies to sustainability: we work on the system-level shifts that make food production regenerative by default, rather than bolting sustainability onto an extractive system as a premium add-on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32 bg-bone-soft">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-12 gap-8 md:gap-12 mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
                <span className="text-amber">03</span>
                <span className="mx-2">—</span>
                Capabilities
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2
                className="font-display font-medium leading-[1.06] tracking-[-0.02em] text-balance"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
              >
                Five capability areas — built to{" "}
                <span className="italic text-moss">intersect.</span>
              </h2>
            </div>
          </div>

          {CAPABILITIES.map((c, i) => (
            <article
              key={c.number}
              className={`grid grid-cols-12 gap-8 md:gap-12 py-10 md:py-14 ${i > 0 ? "border-t border-ink/15" : ""}`}
            >
              <div className="col-span-12 md:col-span-3">
                <div
                  className="numeral text-amber leading-[0.85] font-medium"
                  style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)" }}
                >
                  {c.number}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                  Capability
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3
                  className="font-display font-medium text-ink leading-[1.1] tracking-[-0.005em]"
                  style={{ fontSize: "clamp(1.5rem, 2.6vw, 1.85rem)" }}
                >
                  {c.title}
                </h3>
                <p className="mt-4 font-body text-[16px] md:text-[17.5px] leading-[1.65] text-ink-soft text-pretty max-w-3xl">
                  {c.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SELECTED ENGAGEMENTS */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32">
        <div className="mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
              <span className="text-amber">04</span>
              <span className="mx-2">—</span>
              Engagements
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-display font-medium leading-[1.06] tracking-[-0.02em] text-balance"
              style={{ fontSize: "clamp(1.75rem, 3.8vw, 2.5rem)" }}
            >
              Selected engagements —{" "}
              <span className="italic text-moss">forthcoming.</span>
            </h2>
            <p className="mt-8 font-body text-[17px] md:text-[19px] leading-[1.6] text-ink-soft text-pretty max-w-2xl">
              Our first published cohort of engagements in Food Security &amp; Sustainability is currently being prepared for release. For information about current opportunities or to discuss a brief, engage with us directly.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-moss hover:text-amber transition-colors group"
            >
              Discuss a brief
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
        </div>
      </section>

      <ClosingCTA number="05" />
    </>
  );
}

const CAPABILITIES = [
  {
    number: "01",
    title: "Supply resilience",
    body: "Diversifying, distributing, and stress-testing food supply against weather, geopolitical, and market shocks. Strategic reserves, import substitution, production geography, and cross-border supply agreements.",
  },
  {
    number: "02",
    title: "Smallholder productivity",
    body: "Raising yields, incomes, and resilience for the roughly 500 million smallholder farms that feed most of the developing world. Extension services, inputs, mechanization pathways, and cooperative-scale market access.",
  },
  {
    number: "03",
    title: "Post-harvest loss",
    body: "Reducing the third of food lost between field and plate. Storage, cold chain, logistics, grading, and the market infrastructure that ensures what is grown actually reaches a table.",
  },
  {
    number: "04",
    title: "Circular food economies",
    body: "Designing food systems where organic waste, energy, and nutrients cycle back into production. Composting at scale, biogas, by-product markets, and circular packaging — built into the system rather than bolted on.",
  },
  {
    number: "05",
    title: "Policy architecture",
    body: "The strategies, subsidies, tariffs, reserves, and research institutions that underwrite national food security. We advise on the instruments and on the institutions that implement them.",
  },
];
