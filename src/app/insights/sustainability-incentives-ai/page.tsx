import type { Metadata } from "next";
import Link from "next/link";
import { LeafGlyph } from "@/components/LeafGlyph";
import { ClosingCTA } from "@/components/ClosingCTA";

export const metadata: Metadata = {
  title:
    "Sustainability Incentives in the Age of AI — IFF CHAMBER",
  description:
    "AI accelerates whatever incentives surround it. An essay on the work of aligning innovation with long-term responsibility across environmental, economic, and social dimensions.",
};

export default function SustainabilityIncentivesAIPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-16 md:pt-24 pb-16 md:pb-24">
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
            <Link href="/insights" className="hover:text-moss transition-colors">
              Insights
            </Link>
            <span className="text-amber">●</span>
            <span className="text-amber">Essay</span>
            <span className="text-amber">·</span>
            <span>Published May 2026</span>
          </div>

          <h1
            className="mt-10 md:mt-14 font-display font-medium leading-[0.94] tracking-[-0.025em] text-balance text-ink max-w-6xl"
            style={{ fontSize: "clamp(2.5rem, 7.5vw, 6.25rem)" }}
          >
            Sustainability incentives in the{" "}
            <span className="italic text-moss">age of AI.</span>
          </h1>

          <p
            className="mt-8 md:mt-10 max-w-3xl font-display leading-[1.22] text-ink-soft text-pretty"
            style={{ fontSize: "clamp(1.2rem, 2vw, 1.65rem)" }}
          >
            On aligning innovation with long-term responsibility. AI will not solve sustainability on its own. It accelerates whatever the surrounding incentives already reward. The work is institutional before it is technical.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-mute">
            <span>Founding editorial</span>
            <span className="text-amber">·</span>
            <span>8 min read</span>
            <span className="text-amber">·</span>
            <span>Field: Climate &amp; Systems</span>
          </div>
        </div>
      </section>

      {/* EXECUTIVE SUMMARY */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-20 md:py-24 bg-bone-soft">
        <div className="mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
              <span className="text-amber">00</span>
              <span className="mx-2">—</span>
              Executive summary
            </div>
            <div className="mt-8 hidden md:block">
              <LeafGlyph className="w-7 h-auto text-moss" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p
              className="font-display font-medium leading-[1.18] tracking-[-0.015em] text-balance text-ink"
              style={{ fontSize: "clamp(1.45rem, 2.6vw, 2rem)" }}
            >
              Sustainability fails because our systems reward the short term while the costs of unsustainable choices land later, spread thin, on someone else. AI does not repair that. It accelerates both sides of it.
            </p>

            <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 max-w-3xl">
              {SUMMARY_STATS.map((s) => (
                <div key={s.label} className="border-t border-ink/25 pt-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mb-2">
                    {s.label}
                  </dt>
                  <dd className="font-display text-[1.2rem] md:text-[1.35rem] leading-[1.35] text-ink">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-mute mb-4">
              Five recommendations
            </div>
            <ol className="space-y-3 font-body text-[16.5px] md:text-[17.5px] leading-[1.6] text-ink-soft max-w-2xl">
              {RECOMMENDATIONS.map((r, i) => (
                <li key={r} className="flex gap-4">
                  <span className="font-mono text-[11px] text-amber pt-1 shrink-0 w-6">
                    0{i + 1}
                  </span>
                  <span className="text-pretty">{r}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 01 — THE INCENTIVE PROBLEM */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32">
        <div className="mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
              <span className="text-amber">01</span>
              <span className="mx-2">—</span>
              The incentive problem
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-display font-medium leading-[1.06] tracking-[-0.015em] text-balance"
              style={{ fontSize: "clamp(1.85rem, 4vw, 3rem)" }}
            >
              An asymmetry that{" "}
              <span className="italic text-moss">predates AI by centuries.</span>
            </h2>
            <div className="mt-10 space-y-6 font-body text-[17px] md:text-[19px] leading-[1.65] text-ink-soft text-pretty max-w-3xl">
              <p className="dropcap">
                Sustainability is a long commitment inside a system built to reward the short term. Quarterly earnings, election cycles, and funding rounds compress the window for any decision. The costs of unsustainable choices (depleted aquifers, a destabilized climate, hollowed-out communities) arrive later, spread thin, and usually on someone else. The benefits of cutting corners arrive now, concentrated. That asymmetry sits underneath everything, and it long predates AI.
              </p>
              <p>
                Most commentary asks whether AI is &ldquo;good&rdquo; or &ldquo;bad&rdquo; for sustainability. The more useful question is what it accelerates. The answer, generally, is whatever the surrounding incentives already reward.
              </p>
            </div>

            <figure className="mt-16 border border-ink/15 bg-bone p-6 md:p-10">
              <AsymmetryDiagram />
              <figcaption className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                <span className="text-amber">Figure 01</span>
                <span className="mx-2">—</span>
                The shape of the misalignment. Benefits arrive concentrated and now; costs land diffuse and later, on others.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 02 — AI IN BOTH DIRECTIONS */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32 bg-bone-soft">
        <div className="mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
              <span className="text-amber">02</span>
              <span className="mx-2">—</span>
              AI as amplifier
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-display font-medium leading-[1.06] tracking-[-0.015em] text-balance"
              style={{ fontSize: "clamp(1.85rem, 4vw, 3rem)" }}
            >
              The same technology pulls{" "}
              <span className="italic text-moss">both ways at once.</span>
            </h2>
            <div className="mt-10 space-y-6 font-body text-[17px] md:text-[19px] leading-[1.65] text-ink-soft text-pretty max-w-3xl">
              <p>
                The upside is concrete. The IEA estimates that AI applications already in use across energy, transport, and industry could cut roughly 1,400 megatonnes of CO₂ a year by 2035, over three times AI&rsquo;s own projected emissions. The LSE Grantham Research Institute puts the ceiling higher, at 3.2 to 5.4 billion tonnes annually. AI forecasts renewable supply and demand, integrates storage into grids, finds methane leaks from satellites, and shortens cycles in materials discovery. DeepMind&rsquo;s wind-energy work alone raised the economic value of those assets by about 20%.
              </p>
              <p>
                The cost is just as concrete, and growing faster. Global data-centre electricity demand is projected to roughly double to 945 TWh by 2030, more than Japan consumes today, with AI as the main driver. Data centres already use around 560 billion litres of water a year, potentially over 1,200 billion by 2030. Nearly two-thirds of new US facilities sit in water-stressed regions like Arizona, Texas, and California.
              </p>
              <p>
                Underneath both columns sits the rebound effect, or Jevons&rsquo; paradox. Efficiency does not automatically reduce consumption; it often increases it by making the activity cheaper. When DeepSeek showed that a frontier model could be trained for a fraction of the expected cost, Microsoft&rsquo;s CEO predicted demand would &ldquo;skyrocket.&rdquo; An AI logistics system cuts fuel per delivery while making one-click ordering frictionless enough to multiply deliveries. Left alone, efficiency gains get swallowed by the demand they unlock. The outcome depends on the incentives around the technology, not the technology itself.
              </p>
            </div>

            <figure className="mt-16 border border-ink/15 bg-bone p-6 md:p-10">
              <AmplifierDiagram />
              <figcaption className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                <span className="text-amber">Figure 02</span>
                <span className="mx-2">—</span>
                AI&rsquo;s two ledgers, by 2030 to 2035. Both are real. Which one dominates is decided by incentives, not by chips.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 03 — THREE DIMENSIONS */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32">
        <div className="mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
              <span className="text-amber">03</span>
              <span className="mx-2">—</span>
              Three dimensions
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-display font-medium leading-[1.06] tracking-[-0.015em] text-balance"
              style={{ fontSize: "clamp(1.85rem, 4vw, 3rem)" }}
            >
              Sustainability is more than{" "}
              <span className="italic text-moss">carbon arithmetic.</span>
            </h2>
            <p className="mt-10 font-body text-[17px] md:text-[19px] leading-[1.65] text-ink-soft text-pretty max-w-3xl">
              Treating sustainability as broader than carbon sharpens the analysis, because AI presses on each dimension differently.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
              {DIMENSIONS.map((d) => (
                <div key={d.label} className="border-t border-ink/25 pt-6">
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-amber mb-4">
                    {d.label}
                  </div>
                  <h3
                    className="font-display font-medium text-ink leading-[1.15] tracking-[-0.005em]"
                    style={{ fontSize: "clamp(1.35rem, 1.9vw, 1.55rem)" }}
                  >
                    {d.title}
                  </h3>
                  <p className="mt-4 font-body text-[15.5px] leading-[1.6] text-ink-soft text-pretty">
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04 — WHO HOLDS THE LEVERS */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32 bg-ink text-bone">
        <div className="mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-bone/60">
              <span className="text-amber">04</span>
              <span className="mx-2">—</span>
              Who holds the levers
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-display font-medium leading-[1.06] tracking-[-0.02em] text-balance text-bone"
              style={{ fontSize: "clamp(1.85rem, 4.2vw, 3rem)" }}
            >
              Four actors with{" "}
              <span className="text-amber">conflicting briefs.</span>
            </h2>
            <div className="mt-10 space-y-6 font-body text-[17px] md:text-[19px] leading-[1.65] text-bone/80 text-pretty max-w-3xl">
              <p>
                Four groups can shift the incentives around AI. It is worth being honest about what each is paid to do today.
              </p>
              <p>
                <strong className="text-bone">Firms</strong> respond to cost and competition. Most face no price on their carbon, no charge for water at anything close to its real scarcity, and little penalty for greenwashing. Voluntary commitments exist. They compete against the next quarter and usually lose.
              </p>
              <p>
                <strong className="text-bone">Investors</strong> increasingly say they price climate risk, but the signal is noisy and reversible, as the partial retreat from ESG positions through 2025 made clear.
              </p>
              <p>
                <strong className="text-bone">Regulators</strong> set the rules and are pulling them in opposite directions. The EU&rsquo;s Corporate Sustainability Reporting Directive, built on double materiality (a company must report both how sustainability risks affect it and how it affects society), continues to push disclosure forward, though an Omnibus simplification package is softening its edges. The US SEC adopted a climate-disclosure rule in 2024 and by May 2026 had moved to rescind it. The lever exists. It is being pulled both ways at once.
              </p>
              <p>
                <strong className="text-bone">Consumers</strong> exert real but weak pressure, limited by information asymmetry. That is the very gap AI can either close or widen.
              </p>
            </div>

            <figure className="mt-16 border border-bone/15 p-6 md:p-10">
              <CoverageDiagram />
              <figcaption className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">
                <span className="text-amber">Figure 03</span>
                <span className="mx-2">—</span>
                Share of sectoral emissions covered by a carbon price. The lever is uneven. Source: World Bank, State and Trends of Carbon Pricing 2025.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 05 — DESIGNING BETTER INCENTIVES */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32 bg-bone-soft">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
                <span className="text-amber">05</span>
                <span className="mx-2">—</span>
                Designing better incentives
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2
                className="font-display font-medium leading-[1.06] tracking-[-0.02em] text-balance"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
              >
                Five moves that make AI{" "}
                <span className="italic text-moss">point the right way.</span>
              </h2>
            </div>
          </div>

          {LEVERS.map((l, i) => (
            <article
              key={l.number}
              className={`grid grid-cols-12 gap-8 md:gap-12 py-10 md:py-14 ${i > 0 ? "border-t border-ink/15" : ""}`}
            >
              <div className="col-span-12 md:col-span-3">
                <div
                  className="numeral text-amber leading-[0.85] font-medium"
                  style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)" }}
                >
                  {l.number}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                  Lever
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3
                  className="font-display font-medium text-ink leading-[1.1] tracking-[-0.005em]"
                  style={{ fontSize: "clamp(1.5rem, 2.6vw, 1.85rem)" }}
                >
                  {l.title}
                </h3>
                <p className="mt-4 font-body text-[16px] md:text-[17.5px] leading-[1.65] text-ink-soft text-pretty max-w-3xl">
                  {l.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32">
        <div className="mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
              <span className="text-amber">06</span>
              <span className="mx-2">—</span>
              In closing
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p
              className="font-display font-medium leading-[1.12] tracking-[-0.015em] text-balance text-ink"
              style={{ fontSize: "clamp(1.65rem, 3vw, 2.35rem)" }}
            >
              AI does not have a sustainability disposition of its own. Inside a system that rewards long-term responsibility, it becomes the strongest alignment tool we have ever built. Inside one that rewards short-term extraction, it will optimize the extraction instead.
            </p>
            <p className="mt-8 font-body text-[17px] md:text-[19px] leading-[1.65] text-ink-soft text-pretty max-w-3xl">
              The fundamental task is unchanged. The stakes are higher and the clock is shorter. Alignment was always a design problem. Now it is an urgent one.
            </p>
          </div>
        </div>
      </section>

      {/* SOURCES */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-20 md:py-24 bg-bone-soft">
        <div className="mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
              <span className="text-amber">07</span>
              <span className="mx-2">—</span>
              Sources
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              {SOURCES.map((s) => (
                <li key={s.href} className="border-t border-ink/20 pt-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mb-1.5">
                    {s.publisher}
                  </div>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-[16.5px] md:text-[17.5px] leading-[1.35] text-ink hover:text-amber transition-colors link-rule"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* NEXT READING */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-16 md:py-20">
        <div className="mx-auto max-w-[1480px] flex flex-wrap items-center justify-between gap-6">
          <Link
            href="/insights"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute hover:text-moss transition-colors group inline-flex items-center gap-3"
          >
            <span aria-hidden className="inline-block transition-transform duration-300 group-hover:-translate-x-1.5">
              ←
            </span>
            All insights
          </Link>
          <Link
            href="/what-we-do/climate"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-moss hover:text-amber transition-colors group inline-flex items-center gap-3"
          >
            Practice 03 / Climate Mitigation &amp; Adaptation
            <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </div>
      </section>

      <ClosingCTA
        number="08"
        eyebrow="Engage"
        headline={
          <>
            Design the <span className="italic text-amber">incentives.</span>
          </>
        }
        body="We work with governments, institutions, and industries on the architecture that makes sustainability a default rather than a choice. If your brief sits at the intersection of climate, AI, and systems strategy, begin a conversation."
      />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  FIGURES — inline SVG, editorial style, matched to The Almanac palette.    */
/* -------------------------------------------------------------------------- */

function AsymmetryDiagram() {
  // Two horizontal rows, sharing a single time axis.
  // Top: benefits — tall amber rectangle clustered at "now", fading to a thin tail.
  // Bottom: costs — long diffuse moss band, thickening as it travels right.
  return (
    <svg
      viewBox="0 0 800 360"
      role="img"
      aria-labelledby="fig1-title fig1-desc"
      className="w-full h-auto"
    >
      <title id="fig1-title">The shape of the misalignment</title>
      <desc id="fig1-desc">
        A horizontal time axis. Above it, benefits of unsustainable choices
        appear as a tall amber block clustered at &quot;now,&quot; fading right.
        Below it, costs appear as a low moss band that thickens as time extends.
      </desc>

      {/* row labels */}
      <text x="0" y="60" className="fill-ink" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2.2">
        BENEFITS / NOW / CONCENTRATED
      </text>
      <text x="0" y="310" className="fill-ink" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2.2">
        COSTS / LATER / DIFFUSE
      </text>

      {/* benefits shape — tall block now, sharp fade right */}
      <g transform="translate(0,80)">
        <path
          d="M 0 80 L 0 8 L 180 8 L 240 40 L 380 64 L 800 78 L 800 80 Z"
          fill="var(--color-amber)"
          fillOpacity="0.85"
        />
        <line x1="0" y1="80" x2="800" y2="80" stroke="var(--color-ink)" strokeWidth="0.8" />
      </g>

      {/* costs shape — low diffuse band, thickening right */}
      <g transform="translate(0,210)">
        <path
          d="M 0 78 L 0 70 L 200 64 L 420 50 L 620 28 L 800 4 L 800 78 Z"
          fill="var(--color-moss)"
          fillOpacity="0.85"
        />
        <line x1="0" y1="78" x2="800" y2="78" stroke="var(--color-ink)" strokeWidth="0.8" />
      </g>

      {/* time axis */}
      <line x1="0" y1="350" x2="800" y2="350" stroke="var(--color-ink)" strokeWidth="0.8" />
      <text x="0" y="340" className="fill-ink-mute" fontFamily="var(--font-mono)" fontSize="9.5" letterSpacing="2">
        TODAY
      </text>
      <text x="785" y="340" textAnchor="end" className="fill-ink-mute" fontFamily="var(--font-mono)" fontSize="9.5" letterSpacing="2">
        DECADES OUT
      </text>

      {/* tick marks */}
      {[200, 400, 600].map((x) => (
        <line key={x} x1={x} y1="350" x2={x} y2="356" stroke="var(--color-ink)" strokeWidth="0.6" />
      ))}
    </svg>
  );
}

function AmplifierDiagram() {
  // Two opposing columns: AI as accelerant (down arrow, CO2 reduction)
  // vs AI as cost (up arrow, electricity demand). Numerals dominate.
  return (
    <svg
      viewBox="0 0 800 360"
      role="img"
      aria-labelledby="fig2-title fig2-desc"
      className="w-full h-auto"
    >
      <title id="fig2-title">AI&apos;s two ledgers</title>
      <desc id="fig2-desc">
        Two opposing columns. On the left, AI as accelerant: a downward moss
        arrow next to a stat of 3.2 to 5.4 gigatonnes of CO2 reduction
        potential per year by 2035. On the right, AI as cost: an upward amber
        arrow next to a stat of data-centre demand doubling to 945 TWh by 2030.
      </desc>

      {/* center axis */}
      <line x1="400" y1="20" x2="400" y2="340" stroke="var(--color-ink)" strokeWidth="0.6" strokeDasharray="2 4" />

      {/* LEFT — Accelerant */}
      <g transform="translate(40,40)">
        <text x="0" y="0" className="fill-ink" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2.2">
          ACCELERANT
        </text>
        <text x="0" y="18" className="fill-ink-mute" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1.6">
          AI APPLIED TO CLIMATE
        </text>

        {/* big numeral */}
        <text
          x="0" y="120"
          className="fill-moss"
          fontFamily="var(--font-display)"
          fontSize="92"
          fontWeight="500"
          letterSpacing="-2"
        >
          3.2 to 5.4
        </text>
        <text x="0" y="148" className="fill-ink" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2">
          GT CO₂e / YEAR BY 2035
        </text>
        <text x="0" y="166" className="fill-ink-mute" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1.6">
          REDUCTION POTENTIAL (LSE GRANTHAM)
        </text>

        {/* down arrow */}
        <g transform="translate(0,200)">
          <line x1="20" y1="0" x2="20" y2="90" stroke="var(--color-moss)" strokeWidth="1.5" />
          <path d="M 8 78 L 20 96 L 32 78" stroke="var(--color-moss)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="48" y="62" className="fill-moss" fontFamily="var(--font-mono)" fontSize="9.5" letterSpacing="1.8">
            EMISSIONS DOWN
          </text>
        </g>
      </g>

      {/* RIGHT — Cost */}
      <g transform="translate(440,40)">
        <text x="0" y="0" className="fill-ink" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2.2">
          COST
        </text>
        <text x="0" y="18" className="fill-ink-mute" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1.6">
          AI&apos;S OWN DEMAND
        </text>

        <text
          x="0" y="120"
          className="fill-amber"
          fontFamily="var(--font-display)"
          fontSize="92"
          fontWeight="500"
          letterSpacing="-2"
        >
          ×2
        </text>
        <text x="0" y="148" className="fill-ink" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2">
          DATA-CENTRE DEMAND BY 2030
        </text>
        <text x="0" y="166" className="fill-ink-mute" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1.6">
          TO ~945 TWh / YEAR (IEA)
        </text>

        {/* up arrow */}
        <g transform="translate(0,200)">
          <line x1="20" y1="96" x2="20" y2="6" stroke="var(--color-amber)" strokeWidth="1.5" />
          <path d="M 8 18 L 20 0 L 32 18" stroke="var(--color-amber)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="48" y="62" className="fill-amber" fontFamily="var(--font-mono)" fontSize="9.5" letterSpacing="1.8">
            ENERGY UP
          </text>
        </g>
      </g>

      {/* bottom caption strip */}
      <line x1="0" y1="340" x2="800" y2="340" stroke="var(--color-ink)" strokeWidth="0.6" />
      <text x="400" y="356" textAnchor="middle" className="fill-ink-mute" fontFamily="var(--font-mono)" fontSize="9.5" letterSpacing="2.2">
        WHICH LEDGER WINS IS DECIDED BY INCENTIVES, NOT BY CHIPS
      </text>
    </svg>
  );
}

function CoverageDiagram() {
  // Horizontal bars per sector. Drawn on dark-ink background, so use
  // bone for axis ink and amber for the active fill.
  const sectors = [
    { name: "Power", value: 52 },
    { name: "Industry", value: 35 },
    { name: "Buildings", value: 22 },
    { name: "Transport", value: 17 },
    { name: "Waste", value: 2 },
    { name: "Agriculture", value: 0 },
  ];
  const maxValue = 60; // axis ceiling
  const barTop = 60;
  const barH = 16;
  const barGap = 22;
  const labelW = 130;
  const chartW = 560;

  return (
    <svg
      viewBox="0 0 800 360"
      role="img"
      aria-labelledby="fig3-title fig3-desc"
      className="w-full h-auto"
    >
      <title id="fig3-title">Share of sectoral emissions covered by a carbon price</title>
      <desc id="fig3-desc">
        Horizontal bar chart. Power emissions are about 52% covered by a carbon
        price, industry 35%, buildings 22%, transport 17%, waste 2%, and
        agriculture 0%. Source: World Bank, 2025.
      </desc>

      {/* header */}
      <text x="0" y="28" className="fill-bone" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2.2">
        % OF SECTOR EMISSIONS PRICED
      </text>
      <text x="800" y="28" textAnchor="end" className="fill-bone/60" fontFamily="var(--font-mono)" fontSize="9.5" letterSpacing="1.8">
        GLOBAL · 2025
      </text>

      {/* gridlines */}
      {[0, 15, 30, 45, 60].map((g) => {
        const x = labelW + (g / maxValue) * chartW;
        return (
          <g key={g}>
            <line x1={x} y1={barTop - 18} x2={x} y2={barTop + sectors.length * barGap - 4} stroke="#f4efe6" strokeOpacity="0.12" strokeWidth="0.6" />
            <text x={x} y={barTop - 24} textAnchor="middle" className="fill-bone/55" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1.5">
              {g}%
            </text>
          </g>
        );
      })}

      {/* bars */}
      {sectors.map((s, i) => {
        const y = barTop + i * barGap;
        const w = (s.value / maxValue) * chartW;
        return (
          <g key={s.name}>
            <text
              x={labelW - 12}
              y={y + barH * 0.72}
              textAnchor="end"
              className="fill-bone"
              fontFamily="var(--font-mono)"
              fontSize="10"
              letterSpacing="1.8"
            >
              {s.name.toUpperCase()}
            </text>
            {/* baseline track */}
            <line
              x1={labelW}
              y1={y + barH / 2}
              x2={labelW + chartW}
              y2={y + barH / 2}
              stroke="#f4efe6"
              strokeOpacity="0.18"
              strokeWidth="0.6"
            />
            {/* the bar */}
            <rect
              x={labelW}
              y={y}
              width={Math.max(w, 1)}
              height={barH}
              fill="var(--color-amber)"
              fillOpacity={s.value === 0 ? 0 : 0.92}
            />
            {/* zero marker for agriculture */}
            {s.value === 0 && (
              <line
                x1={labelW}
                y1={y}
                x2={labelW}
                y2={y + barH}
                stroke="var(--color-amber)"
                strokeWidth="2"
              />
            )}
            {/* value label */}
            <text
              x={labelW + Math.max(w, 1) + 10}
              y={y + barH * 0.72}
              className="fill-bone"
              fontFamily="var(--font-mono)"
              fontSize="10"
              letterSpacing="1.5"
            >
              {s.value}%
            </text>
          </g>
        );
      })}

      {/* axis baseline */}
      <line
        x1={labelW}
        y1={barTop + sectors.length * barGap - 4}
        x2={labelW + chartW}
        y2={barTop + sectors.length * barGap - 4}
        stroke="#f4efe6"
        strokeOpacity="0.4"
        strokeWidth="0.7"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  CONTENT                                                                   */
/* -------------------------------------------------------------------------- */

const SUMMARY_STATS: { label: string; value: string }[] = [
  {
    label: "AI as accelerant",
    value: "Up to 5.4 Gt CO₂e / year of reduction potential by 2035",
  },
  {
    label: "AI as cost",
    value: "Data-centre demand doubles to ~945 TWh by 2030",
  },
  {
    label: "Carbon pricing reach",
    value: "Covers 28% of global emissions. 0% of agriculture.",
  },
  {
    label: "Disclosure divergence",
    value: "EU advances the CSRD; the US SEC moves to rescind",
  },
];

const RECOMMENDATIONS: string[] = [
  "Price the externality: extend and deepen carbon, and price water for scarcity.",
  "Mandate comparable disclosure: consistent, audited, double-materiality reporting.",
  "Use procurement: make sustainability a contract condition, including for AI services.",
  "Turn AI’s measurement power inward: fund verification, monitoring, anti-greenwashing.",
  "Govern the rebound: pair efficiency standards with absolute caps in stressed systems.",
];

const DIMENSIONS = [
  {
    label: "Environmental",
    title: "The footprint is real. The mitigation is optional.",
    body:
      "AI’s emissions and water draw are measurable and rising. Its mitigating tools are powerful, but they only run where someone is paid to run them. The grid-optimization model and the wasteful workload share the same hardware.",
  },
  {
    label: "Economic",
    title: "AI rewards whoever optimizes fastest.",
    body:
      "That favours incumbents with the most data and capital. It favours business models that push costs onto someone else. Long-term economic sustainability (durable firms, resilient supply chains) is not what a quarterly optimizer is built to maximize.",
  },
  {
    label: "Social",
    title: "Gains concentrate. Costs travel.",
    body:
      "AI concentrates value with model owners and pushes costs outward: strained water tables, higher local electricity prices, displaced labour. The town hosting a data centre often pays in resources and rates without seeing the returns.",
  },
];

const LEVERS = [
  {
    number: "01",
    title: "Price the externality.",
    body:
      "Carbon pricing now covers about 28% of global emissions, up from 12% a decade ago. That is real progress, but agriculture sits at 0% coverage and water is barely priced for scarcity anywhere. Extending and deepening these prices is the most direct fix on the board. It makes every optimization automatically point toward lower emissions.",
  },
  {
    number: "02",
    title: "Mandate comparable disclosure.",
    body:
      "Incentives only bite when outcomes are visible. Consistent, audited, double-materiality reporting turns vague claims into priced facts. The current obstacle is fragmentation across jurisdictions, and the political reversibility of even the rules that exist.",
  },
  {
    number: "03",
    title: "Use procurement as a lever.",
    body:
      "Governments and large corporate buyers can write sustainability performance into their contracts, including for the data centres and AI services they themselves purchase. That directly addresses AI’s own footprint, and it builds demand for the verification infrastructure the rest of the system needs.",
  },
  {
    number: "04",
    title: "Turn AI’s measurement power inward.",
    body:
      "AI’s most durable contribution may be verification: monitoring emissions, catching greenwashing, tracing supply chains. It makes every other incentive enforceable. None of it happens unless someone is rewarded to build it. Public funding, mandates, and procurement can all play that role.",
  },
  {
    number: "05",
    title: "Govern the rebound.",
    body:
      "Efficiency standards need to come paired with absolute caps. Caps on emissions, on water withdrawal in stressed basins, on land-use change. Without them, Jevons’ paradox quietly eats the gains. The history of energy efficiency is the history of total consumption rising anyway. AI accelerates the pattern. The corrective has to be absolute, not relative.",
  },
];

const SOURCES = [
  {
    publisher: "IEA",
    title: "Energy demand from AI",
    href: "https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai",
  },
  {
    publisher: "IEA",
    title: "AI and climate change",
    href: "https://www.iea.org/reports/energy-and-ai/ai-and-climate-change",
  },
  {
    publisher: "LSE Grantham Institute",
    title: "AI could reduce global emissions by 3.2 to 5.4 Gt CO₂e annually by 2035",
    href: "https://www.lse.ac.uk/granthaminstitute/news/new-study-finds-ai-could-reduce-global-emissions-annually-by-3-2-to-5-4-billion-tonnes-of-carbon-dioxide-equivalent-by-2035/",
  },
  {
    publisher: "Brookings",
    title: "AI, data centers, and water",
    href: "https://www.brookings.edu/articles/ai-data-centers-and-water/",
  },
  {
    publisher: "EESI",
    title: "Data Centers and Water Consumption",
    href: "https://www.eesi.org/articles/view/data-centers-and-water-consumption",
  },
  {
    publisher: "World Bank",
    title: "State and Trends of Carbon Pricing 2025",
    href: "https://www.worldbank.org/en/publication/state-and-trends-of-carbon-pricing",
  },
  {
    publisher: "Harvard CorpGov",
    title: "Regulatory Climate Shift: Updates on the SEC Climate-Related Disclosure Rules",
    href: "https://corpgov.law.harvard.edu/2025/09/30/regulatory-climate-shift-updates-on-the-sec-climate-related-disclosure-rules/",
  },
  {
    publisher: "arXiv (FAccT 2025)",
    title: "From Efficiency Gains to Rebound Effects: Jevons’ Paradox in AI’s Environmental Debate",
    href: "https://arxiv.org/abs/2501.16548",
  },
];
