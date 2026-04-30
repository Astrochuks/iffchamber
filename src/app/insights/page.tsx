import type { Metadata } from "next";
import Link from "next/link";
import { LeafGlyph } from "@/components/LeafGlyph";
import { ClosingCTA } from "@/components/ClosingCTA";

export const metadata: Metadata = {
  title: "Insights — IFF CHAMBER",
  description:
    "Research, briefs, field notes, and positions from IFF CHAMBER. Our publications are a public good, freely available to the field.",
};

export default function InsightsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-16 md:pt-28 pb-20 md:pb-28">
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
            <span>Insights</span>
            <span className="text-amber">●</span>
            <span>Published freely</span>
          </div>

          <h1
            className="mt-12 md:mt-16 font-display font-medium leading-[0.92] tracking-[-0.025em] text-balance text-ink"
            style={{ fontSize: "clamp(3rem, 10.5vw, 8.5rem)" }}
          >
            Field notes from the{" "}
            <span className="italic text-moss">future of food.</span>
          </h1>

          <p
            className="mt-10 md:mt-14 max-w-3xl font-display leading-[1.22] text-ink-soft text-pretty"
            style={{ fontSize: "clamp(1.25rem, 2.1vw, 1.75rem)" }}
          >
            Research, briefs, positions, and essays on the systems that feed us. Published freely, because the field advances when knowledge is shared, not hoarded.
          </p>
        </div>
      </section>

      {/* FILTER NAV */}
      <section className="border-t border-ink/15 bg-bone-soft">
        <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-6 md:py-7 flex flex-wrap gap-x-6 gap-y-3 items-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
            <span className="text-amber">●</span> Filter
          </span>
          {CATEGORIES.map((c, i) => (
            <button
              key={c}
              type="button"
              className={`font-mono text-[10.5px] uppercase tracking-[0.22em] transition-colors ${i === 0 ? "text-amber" : "text-ink hover:text-moss"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* INSIGHTS GRID */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-20 md:py-28 bg-bone-soft">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-10 gap-y-14">
            {INSIGHTS.map((i) => (
              <article key={i.title} className="border-t border-ink/30 pt-6 group">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                  <span className="text-amber">{i.category}</span>
                  <span>{i.date}</span>
                </div>
                <h2
                  className="mt-6 font-display font-medium text-ink leading-[1.15] tracking-[-0.005em]"
                  style={{ fontSize: "clamp(1.35rem, 1.9vw, 1.65rem)" }}
                >
                  <Link href="/insights" className="link-rule">
                    {i.title}
                  </Link>
                </h2>
                <p className="mt-4 font-body text-[15px] leading-[1.6] text-ink-soft text-pretty">
                  {i.dek}
                </p>
                <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                  {i.author}
                  <span className="text-amber mx-2">·</span>
                  {i.readTime}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-20 md:py-28">
        <div className="mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
              <span className="text-amber">02</span>
              <span className="mx-2">—</span>
              Subscribe
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-display font-medium leading-[1.06] tracking-[-0.015em] text-balance"
              style={{ fontSize: "clamp(1.85rem, 4vw, 3rem)" }}
            >
              Get new publications by{" "}
              <span className="italic text-moss">email.</span>
            </h2>
            <p className="mt-6 font-body text-[17px] md:text-[18.5px] leading-[1.65] text-ink-soft max-w-2xl text-pretty">
              A monthly digest of what we've published, what we're working on, and the questions we're chasing. No promotions, no forwarded emails. Just research.
            </p>

            <form className="mt-10 max-w-xl">
              <label className="block font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mb-3">
                Email address
              </label>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  required
                  placeholder="you@organization.org"
                  className="flex-1 bg-transparent border-b border-ink/30 focus:border-ink py-3 font-body text-[16px] text-ink placeholder:text-ink-mute/60 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-bone bg-ink hover:bg-moss transition-colors px-6 py-3.5 rounded-full self-start sm:self-auto"
                >
                  Subscribe
                  <span aria-hidden>→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <ClosingCTA number="03" />
    </>
  );
}

const CATEGORIES = ["All", "Field Note", "Brief", "Position", "Essay", "Research"];

const INSIGHTS = [
  {
    category: "Field Note",
    date: "Forthcoming",
    title: "The lever in plain sight: why food is the most under-used development tool of the century.",
    dek: "A founding essay on why nations that build durable food systems unlock everything else: health, employment, climate, security.",
    author: "Founding editorial",
    readTime: "12 min read",
  },
  {
    category: "Brief",
    date: "Forthcoming",
    title: "Smallholders, supply chains, and the economics of resilience.",
    dek: "How distributed food production becomes the backbone of national food security, and what advisors get wrong about it.",
    author: "Food Security practice",
    readTime: "8 min read",
  },
  {
    category: "Position",
    date: "Forthcoming",
    title: "Beyond regenerative: a framework for measuring food's climate dividend.",
    dek: "Carbon, water, biodiversity, soil: a unified accounting for the climate value of well-designed food systems.",
    author: "Climate practice",
    readTime: "14 min read",
  },
  {
    category: "Essay",
    date: "Forthcoming",
    title: "The first economic act: nutrition, employment, and the long arc of food as human development.",
    dek: "Why we argue food is the most under-served human-capital investment on earth, and what that implies for ministries, foundations, and DFIs.",
    author: "Human Capital practice",
    readTime: "16 min read",
  },
  {
    category: "Research",
    date: "Forthcoming",
    title: "Five myths about agricultural subsidies, and what the next generation of food policy actually needs.",
    dek: "A working paper on subsidy reform for food security and sustainability, drawn from a review of two decades of national policy experiments.",
    author: "Research partnerships",
    readTime: "22 min read",
  },
  {
    category: "Brief",
    date: "Forthcoming",
    title: "What a post-harvest strategy actually costs, and what it buys.",
    dek: "An instrument-level brief for ministries and DFIs weighing investments in storage, logistics, and cold chain as national food-security infrastructure.",
    author: "Food Security practice",
    readTime: "9 min read",
  },
  {
    category: "Field Note",
    date: "Forthcoming",
    title: "Women, land, and the design of food-system inclusion.",
    dek: "Observations from the field on why land tenure, credit, and extension remain the three gates keeping women out of the modern food economy.",
    author: "Human Capital practice",
    readTime: "10 min read",
  },
  {
    category: "Position",
    date: "Forthcoming",
    title: "Food reserves in a warming world: reviving an old instrument for a new era.",
    dek: "The case for strategic national food reserves as a climate-adaptation and food-security instrument, and how to design them well.",
    author: "Food Security & Climate",
    readTime: "13 min read",
  },
  {
    category: "Essay",
    date: "Forthcoming",
    title: "Leaving no industry behind: a case for cross-sector food system advisory.",
    dek: "Why the most durable food-system work happens at the intersection of public, private, and civil-society institutions, and what it takes to work across them.",
    author: "Founding editorial",
    readTime: "11 min read",
  },
];
