import type { Metadata } from "next";
import Link from "next/link";
import { LeafGlyph } from "@/components/LeafGlyph";
import { ClosingCTA } from "@/components/ClosingCTA";

export const metadata: Metadata = {
  title: "Climate Mitigation & Adaptation — IFF CHAMBER",
  description:
    "Agriculture is both a driver of and a defense against climate change. IFF CHAMBER advises on regenerative practices, value-chain emissions, climate-resilient farming, and the finance and policy that make food systems a climate solution.",
};

export default function ClimatePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-16 md:pt-28 pb-20 md:pb-32">
        <div
          className="pointer-events-none select-none absolute -right-12 md:-right-20 -top-6 md:-top-12 font-display font-medium text-ink/[0.04] leading-none tracking-[-0.02em]"
          style={{ fontSize: "clamp(8rem, 26vw, 28rem)" }}
          aria-hidden
        >
          03
        </div>

        <div className="relative mx-auto max-w-[1480px]">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
            <LeafGlyph className="w-[20px] h-auto text-moss" />
            <span>
              <span className="text-amber">Practice 03</span>
              <span className="mx-2">—</span>
              Climate Mitigation &amp; Adaptation
            </span>
          </div>

          <h1
            className="mt-12 md:mt-16 font-display font-medium leading-[0.95] tracking-[-0.025em] text-balance text-ink max-w-5xl"
            style={{ fontSize: "clamp(2.75rem, 8vw, 6.5rem)" }}
          >
            Agriculture is the climate's oldest weapon — and its{" "}
            <span className="italic text-moss">greatest ally.</span>
          </h1>

          <p
            className="mt-10 md:mt-14 max-w-3xl font-display leading-[1.22] text-ink-soft text-pretty"
            style={{ fontSize: "clamp(1.25rem, 2.1vw, 1.7rem)" }}
          >
            We advise on how food systems become engines of climate mitigation and resilience — rather than drivers of environmental collapse. Our work spans regenerative practice, value-chain decarbonization, adaptation policy, and the finance instruments that make food a climate solution.
          </p>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
            <Link href="/what-we-do/food-security" className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute hover:text-moss">
              ← Practice 01 / Food Security
            </Link>
            <Link href="/what-we-do/human-capital" className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute hover:text-moss">
              Practice 02 / Human Capital →
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
              A <span className="text-amber">third of global emissions.</span>{" "}
              A <span className="text-amber">third of the solution.</span>
            </h2>
            <div className="mt-10 space-y-6 font-body text-[17px] md:text-[19px] leading-[1.65] text-bone/80 text-pretty max-w-3xl">
              <p>
                Food systems are responsible for roughly a third of global greenhouse-gas emissions — from land-use change, fertilizer, livestock, and the logistics of the modern food economy. That is the liability side of the ledger.
              </p>
              <p>
                The asset side is just as significant. Soil, pasture, and agro-ecological systems are among the largest potential carbon sinks on the planet. Regenerative agriculture, reforestation through food production, and well-designed value-chain interventions can take food from climate villain to climate infrastructure.
              </p>
              <p>
                We work on both sides at once.
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
              Agriculture as{" "}
              <span className="italic text-moss">climate infrastructure.</span>
            </h2>
            <div className="mt-10 space-y-6 font-body text-[17px] md:text-[19px] leading-[1.65] text-ink-soft text-pretty max-w-3xl">
              <p>
                We treat agricultural land as infrastructure — the same way a country treats its transmission grid or its coastline. That framing changes what gets built, what gets measured, and how long the horizon stretches. Climate work on food systems does not belong in a pilot; it belongs in a national adaptation plan.
              </p>
              <p>
                Our engagements blend mitigation and adaptation deliberately, because the farmer whose practices sequester carbon is the same farmer whose livelihood depends on her farm surviving the next heatwave. Separating the two is a luxury the field cannot afford.
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
                <span className="italic text-moss">bend the curve.</span>
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
              Our first published cohort of engagements in Climate Mitigation &amp; Adaptation is currently being prepared for release. For information about current opportunities or to discuss a brief, engage with us directly.
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
    title: "Regenerative practices",
    body: "Moving farms from extractive to regenerative at scale. Cover cropping, rotational grazing, agroforestry, no-till systems — with the economics and institutional support that lets farmers actually make the transition.",
  },
  {
    number: "02",
    title: "Value-chain emissions",
    body: "Decarbonizing the food economy from field to shelf. Scope 3 strategy for agri-corporates, low-emissions processing, logistics, and retail — with measurement systems that actually hold up to scrutiny.",
  },
  {
    number: "03",
    title: "Climate-resilient farming",
    body: "Drought-, heat-, and shock-resilient food production. Variety selection, water systems, soil health, and farm-level adaptation planning — with the financial products that make resilience affordable.",
  },
  {
    number: "04",
    title: "Climate finance",
    body: "Structuring capital — carbon markets, blended finance, concessional capital, insurance instruments — that delivers both climate outcomes and food-system strengthening. We work with DFIs, funds, and ministries on instrument design.",
  },
  {
    number: "05",
    title: "Adaptation policy",
    body: "National adaptation strategies with food at the center. NDCs, NAPs, and domestic adaptation instruments — with the institutional architecture to implement them across ministries, provinces, and seasons.",
  },
];
