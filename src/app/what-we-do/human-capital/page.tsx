import type { Metadata } from "next";
import Link from "next/link";
import { LeafGlyph } from "@/components/LeafGlyph";
import { ClosingCTA } from "@/components/ClosingCTA";

export const metadata: Metadata = {
  title: "Human Capital Development — IFF CHAMBER",
  description:
    "Food is the first economic act. IFF CHAMBER translates food systems into pathways for nutrition, employment, skills, and livelihoods, so that food doesn't just sustain people, it lifts them.",
};

export default function HumanCapitalPage() {
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
            <span>
              <span className="text-amber">Practice 02</span>
              <span className="mx-2">—</span>
              Human Capital Development
            </span>
          </div>

          <h1
            className="mt-12 md:mt-16 font-display font-medium leading-[0.95] tracking-[-0.025em] text-balance text-ink max-w-5xl"
            style={{ fontSize: "clamp(2.75rem, 8vw, 6.5rem)" }}
          >
            Food is the <span className="italic text-moss">first economic act.</span>
          </h1>

          <p
            className="mt-10 md:mt-14 max-w-3xl font-display leading-[1.22] text-ink-soft text-pretty"
            style={{ fontSize: "clamp(1.25rem, 2.1vw, 1.7rem)" }}
          >
            We help governments, institutions, and industries translate food systems into pathways for nutrition, employment, skills, and livelihoods, so that food does not simply sustain people, but lifts them.
          </p>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
            <Link href="/what-we-do/food-security" className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute hover:text-moss">
              ← Practice 01 / Food Security
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
              Every food system is a{" "}
              <span className="text-amber">human-capital system.</span>
            </h2>
            <div className="mt-10 space-y-6 font-body text-[17px] md:text-[19px] leading-[1.65] text-bone/80 text-pretty max-w-3xl">
              <p>
                Nutrition shapes a child's cognitive development before they enter a classroom. Agriculture is the largest employer on earth: more than three billion livelihoods run through food systems. The skills a country builds around its food economy decide whether agriculture is an exit from poverty or a dead end.
              </p>
              <p>
                And yet food is still framed in many contexts as calorie delivery. We think of it as the most powerful human-development instrument available, and we design for it accordingly.
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
              Food as pathway, not{" "}
              <span className="italic text-moss">endpoint.</span>
            </h2>
            <div className="mt-10 space-y-6 font-body text-[17px] md:text-[19px] leading-[1.65] text-ink-soft text-pretty max-w-3xl">
              <p>
                We design food interventions as lifelong human-development tools, not one-time transfers. A nutrition program measured only by calories delivered is a transaction; measured by cognitive outcomes at age five and earning outcomes at age twenty-five, it is a strategy. We work to the second standard.
              </p>
              <p>
                The same applies to employment and skills. Agriculture is the largest available entry-point to formal, dignified work for young populations in much of the world, but only if the value chains are designed to graduate workers from subsistence to surplus, and only if training, credit, and market access are designed into the system.
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
                Five capability areas, built to{" "}
                <span className="italic text-moss">lift.</span>
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
              Selected engagements,{" "}
              <span className="italic text-moss">forthcoming.</span>
            </h2>
            <p className="mt-8 font-body text-[17px] md:text-[19px] leading-[1.6] text-ink-soft text-pretty max-w-2xl">
              Our first published cohort of engagements in Human Capital Development is currently being prepared for release. For information about current opportunities or to discuss a brief, engage with us directly.
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
    title: "Nutrition strategy",
    body: "Integrated nutrition policy from early childhood through working-age populations. School feeding, fortification, maternal nutrition, and the health-system linkages that turn nutrition programs into durable outcomes.",
  },
  {
    number: "02",
    title: "Agri-employment",
    body: "Designing food systems that create durable, dignified livelihoods. Value-chain job creation, rural-to-urban corridor planning, and the formalization of agricultural labor.",
  },
  {
    number: "03",
    title: "Skills & training",
    body: "Agricultural extension, agri-tech literacy, and the skills architecture that lets a workforce move from subsistence farming to modern agribusiness, without displacement.",
  },
  {
    number: "04",
    title: "Livelihoods design",
    body: "Programs that graduate smallholder households from subsistence to surplus. Blended credit, market access, aggregation models, and the household-level design choices that make them work.",
  },
  {
    number: "05",
    title: "Equity & inclusion",
    body: "Women, youth, and indigenous communities at the center of food-system change. Program design, procurement practices, and policy instruments that close (rather than widen) inclusion gaps.",
  },
];
