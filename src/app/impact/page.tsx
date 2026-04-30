import type { Metadata } from "next";
import Link from "next/link";
import { LeafGlyph } from "@/components/LeafGlyph";
import { ClosingCTA } from "@/components/ClosingCTA";

export const metadata: Metadata = {
  title: "Impact — IFF CHAMBER",
  description:
    "Selected engagements, outcomes, and the measurements that matter. IFF CHAMBER measures impact at the scale of systems, over a ten-year horizon.",
};

export default function ImpactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-16 md:pt-28 pb-20 md:pb-28">
        <div
          className="pointer-events-none select-none absolute -right-12 md:-right-20 -top-6 md:-top-12 font-display font-medium text-ink/[0.04] leading-none tracking-[-0.02em]"
          style={{ fontSize: "clamp(8rem, 26vw, 28rem)" }}
          aria-hidden
        >
          05
        </div>

        <div className="relative mx-auto max-w-[1480px]">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
            <LeafGlyph className="w-[20px] h-auto text-moss" />
            <span>Impact</span>
            <span className="text-amber">●</span>
            <span>The engagements that matter</span>
          </div>

          <h1
            className="mt-12 md:mt-16 font-display font-medium leading-[0.92] tracking-[-0.025em] text-balance text-ink max-w-5xl"
            style={{ fontSize: "clamp(2.75rem, 9.5vw, 8rem)" }}
          >
            Work built to{" "}
            <span className="italic text-moss">change systems.</span>
          </h1>

          <p
            className="mt-10 md:mt-14 max-w-3xl font-display leading-[1.22] text-ink-soft text-pretty"
            style={{ fontSize: "clamp(1.25rem, 2.1vw, 1.75rem)" }}
          >
            IFF CHAMBER measures impact at the scale of systems, over a ten-year horizon. Selected engagements, outcomes, and the measurements that matter, published transparently.
          </p>
        </div>
      </section>

      {/* MEASUREMENT PHILOSOPHY */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32 bg-ink text-bone">
        <div className="mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-bone/60">
              <span className="text-amber">01</span>
              <span className="mx-2">—</span>
              How we measure
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-display font-medium leading-[1.06] tracking-[-0.02em] text-balance text-bone"
              style={{ fontSize: "clamp(1.85rem, 4.2vw, 3rem)" }}
            >
              Count what matters,{" "}
              <span className="italic text-amber">not what's easy.</span>
            </h2>
            <div className="mt-10 space-y-6 font-body text-[17px] md:text-[19px] leading-[1.65] text-bone/80 text-pretty max-w-3xl">
              <p>
                Every consultancy can report activities. Hours logged, reports delivered, workshops run. Those are inputs, not impact. We report the system-level outcomes our engagements were actually commissioned to move, and we report them honestly, including the ones that did not work.
              </p>
              <p>
                Our standard horizon is ten years. Food-system change does not happen in quarters; the institutions we build take seasons, not sprints, to prove their value. We measure accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-28">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
                <span className="text-amber">02</span>
                <span className="mx-2">—</span>
                By the numbers
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2
                className="font-display font-medium leading-[1.06] tracking-[-0.015em] text-balance"
                style={{ fontSize: "clamp(1.75rem, 3.8vw, 2.5rem)" }}
              >
                The chamber, at a{" "}
                <span className="italic text-moss">glance.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {METRICS.map((m) => (
              <div key={m.label} className="border-t border-ink/25 pt-4">
                <div
                  className="font-display font-medium text-amber leading-[0.85]"
                  style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
                >
                  {m.value}
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                  {m.label}
                </div>
                <p className="mt-2 font-body text-[14px] leading-[1.55] text-ink-soft text-pretty">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32 bg-bone-soft">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
                <span className="text-amber">03</span>
                <span className="mx-2">—</span>
                Engagements
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2
                className="font-display font-medium leading-[1.06] tracking-[-0.02em] text-balance"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
              >
                Selected engagements,{" "}
                <span className="italic text-moss">first published cohort.</span>
              </h2>
              <p className="mt-6 font-body text-[17px] leading-[1.6] text-ink-soft max-w-2xl text-pretty">
                Our first published cohort of engagements is being delivered and prepared for release. The work below is illustrative of the formats, partners, and outcomes we design for.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {CASE_STUDIES.map((c) => (
              <article key={c.title} className="border-t border-ink/30 pt-6 group">
                <div className="flex flex-wrap items-center justify-between gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                  <span className="text-amber">{c.practice}</span>
                  <span>{c.date}</span>
                </div>
                <h3
                  className="mt-6 font-display font-medium text-ink leading-[1.15] tracking-[-0.005em]"
                  style={{ fontSize: "clamp(1.45rem, 2.4vw, 1.85rem)" }}
                >
                  {c.title}
                </h3>
                <p className="mt-4 font-body text-[15.5px] leading-[1.6] text-ink-soft text-pretty">
                  {c.dek}
                </p>
                <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                  <div>
                    <dt className="text-amber">Partner</dt>
                    <dd className="mt-1 text-ink/80">{c.partner}</dd>
                  </div>
                  <div>
                    <dt className="text-amber">Format</dt>
                    <dd className="mt-1 text-ink/80">{c.format}</dd>
                  </div>
                  <div>
                    <dt className="text-amber">Geography</dt>
                    <dd className="mt-1 text-ink/80">{c.geography}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-20 md:py-28">
        <div className="mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
              <span className="text-amber">04</span>
              <span className="mx-2">—</span>
              Partners
            </div>
            <div className="mt-8 hidden md:block">
              <LeafGlyph className="w-7 h-auto text-moss" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-display font-medium leading-[1.06] tracking-[-0.02em] text-balance"
              style={{ fontSize: "clamp(1.75rem, 3.8vw, 2.5rem)" }}
            >
              Who we've worked alongside.
            </h2>
            <p className="mt-8 font-body text-[17px] leading-[1.6] text-ink-soft max-w-2xl text-pretty">
              Our partner list is being formalised alongside the first cohort of engagements. For a current list of collaborators and references, engage with us directly.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-moss hover:text-amber transition-colors group"
            >
              Request references
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
        </div>
      </section>

      <ClosingCTA number="05" />
    </>
  );
}

const METRICS = [
  { value: "03", label: "Practices", body: "Food security, human capital, climate: one integrated lens." },
  { value: "06", label: "Sectors served", body: "Governments, multilaterals, DFIs, foundations, corporates, civil society." },
  { value: "10yr", label: "Measurement horizon", body: "The minimum time scale at which food-system change becomes legible." },
  { value: "100%", label: "Research published", body: "Every paper, brief, and framework we produce is released publicly." },
];

const CASE_STUDIES = [
  {
    practice: "Food Security",
    date: "Forthcoming",
    title: "National food strategy and post-harvest architecture",
    dek: "A six-month engagement with a ministry of agriculture on a decade-long national food strategy, centered on post-harvest loss reduction and strategic reserves.",
    partner: "Ministry of Agriculture",
    format: "Strategy engagement",
    geography: "West Africa",
  },
  {
    practice: "Climate & Finance",
    date: "Forthcoming",
    title: "Instrument design for climate-smart agriculture at DFI scale",
    dek: "Design of a blended-finance facility for climate-smart agriculture, covering instrument structure, eligibility, impact framework, and pipeline.",
    partner: "Development finance institution",
    format: "Advisory engagement",
    geography: "Multi-country",
  },
  {
    practice: "Human Capital",
    date: "Forthcoming",
    title: "School feeding as a national human-capital lever",
    dek: "A program diagnostic and redesign for a national school feeding program, re-scoping from nutrition delivery to a vehicle for early-childhood development and agricultural demand creation.",
    partner: "Foundation + government",
    format: "Field program",
    geography: "East Africa",
  },
  {
    practice: "Cross-practice",
    date: "Forthcoming",
    title: "Corporate transition strategy for a global agribusiness",
    dek: "Two-year strategy partnership on regenerative sourcing, smallholder inclusion, and a Scope 3 emissions trajectory across three continents.",
    partner: "Agri-corporate",
    format: "Strategy engagement",
    geography: "Global",
  },
];
