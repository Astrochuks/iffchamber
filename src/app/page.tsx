import Link from "next/link";
import { LeafGlyph } from "@/components/LeafGlyph";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-16 md:pt-28 pb-24 md:pb-40">
        {/* Faint year sigil in background */}
        <div
          className="pointer-events-none select-none absolute -right-12 md:-right-20 -top-6 md:-top-12 font-display font-medium text-ink/[0.04] leading-none tracking-[-0.02em]"
          style={{ fontSize: "clamp(8rem, 26vw, 28rem)" }}
          aria-hidden
        >
          26
        </div>

        <div className="relative mx-auto max-w-[1480px]">
          {/* Eyebrow */}
          <div className="rise delay-1 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
            <LeafGlyph className="w-[20px] h-auto text-moss" />
            <span>Interconnected Food Futures Chamber</span>
            <span className="text-amber">●</span>
            <span>Est. 2019</span>
          </div>

          {/* Headline */}
          <h1
            className="rise delay-2 mt-12 md:mt-16 font-display font-medium leading-[0.92] tracking-[-0.025em] text-balance text-ink"
            style={{ fontSize: "clamp(3.25rem, 11.5vw, 10rem)" }}
          >
            Food is{" "}
            <span className="italic text-moss" style={{ fontVariationSettings: '"opsz" 144' }}>
              the lever.
            </span>
          </h1>

          {/* Subhead */}
          <p
            className="rise delay-3 mt-10 md:mt-14 max-w-3xl font-display leading-[1.22] text-ink-soft text-pretty"
            style={{ fontSize: "clamp(1.35rem, 2.4vw, 1.95rem)" }}
          >
            IFF CHAMBER is a food system consulting that works with
            governments, institutions, and industries to advance human
            development, economic growth, and environmental resilience through
            the systems that feed us.
          </p>

          {/* Meta row */}
          <div className="rise delay-4 mt-16 md:mt-28 grid grid-cols-12 gap-6 md:gap-8 items-end">
            <div className="col-span-12 md:col-span-5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute leading-relaxed">
              <span className="text-amber">A food system advisory</span>
              <br />
              for nations, institutions, and industries
            </div>

            <div className="hidden md:block col-span-3 self-end">
              <div className="rule"></div>
            </div>

            <div className="col-span-12 md:col-span-4 md:text-right">
              <Link
                href="/what-we-do"
                className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink hover:text-moss transition-colors"
              >
                Explore the practice
                <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-40">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
                <span className="text-amber">01</span>
                <span className="mx-2">—</span>
                Our Philosophy
              </div>
              <div className="mt-8 hidden md:block">
                <LeafGlyph className="w-7 h-auto text-moss" />
              </div>
            </div>

            <div className="col-span-12 md:col-span-9">
              <p
                className="dropcap font-display text-ink text-pretty"
                style={{
                  fontSize: "clamp(1.5rem, 2.4vw, 2.05rem)",
                  lineHeight: "1.42",
                  fontVariationSettings: '"opsz" 60',
                }}
              >
                Every economy, every community, every climate is shaped by how
                food is grown, moved, and shared. Food sits at the intersection
                of human survival and human possibility: the only sector that
                simultaneously feeds people, employs them, defines their land,
                and determines their future. IFF CHAMBER was built on this
                conviction. We work alongside governments, institutions, and
                industries to redesign food systems as engines of development,
                equity, and ecological repair, leaving no one, and no industry,
                behind.
              </p>

              <div className="mt-12 flex items-center gap-4 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-mute">
                <span className="h-px w-12 bg-ink/40"></span>
                <span>From the founding manifest</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS — What We Do */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
                <span className="text-amber">02</span>
                <span className="mx-2">—</span>
                What We Do
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2
                className="font-display font-medium leading-[1.05] tracking-[-0.02em] text-balance"
                style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
              >
                Three practices, one conviction:{" "}
                <span className="italic text-moss">food is how we change</span>{" "}
                the world's most important systems.
              </h2>
            </div>
          </div>

          {PILLARS.map((p, i) => (
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

      {/* INSIGHTS TEASER */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32 bg-bone-soft">
        <div className="mx-auto max-w-[1480px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
            <div className="max-w-2xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
                <span className="text-amber">03</span>
                <span className="mx-2">—</span>
                Insights
              </div>
              <h2
                className="mt-6 font-display font-medium leading-[1.05] tracking-[-0.015em] text-balance"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
              >
                Field notes from the{" "}
                <span className="italic text-moss">future of food.</span>
              </h2>
            </div>
            <Link
              href="/insights"
              className="font-mono text-[11px] uppercase tracking-[0.22em] hover:text-moss transition-colors group inline-flex items-center gap-3 self-start md:self-end"
            >
              View all insights
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {INSIGHTS.map((insight) => (
              <article key={insight.title} className="border-t border-ink/30 pt-6 group">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                  <span className="text-amber">{insight.category}</span>
                  <span>{insight.date}</span>
                </div>
                <h3
                  className="mt-6 font-display font-medium text-ink leading-[1.18] tracking-[-0.005em]"
                  style={{ fontSize: "clamp(1.35rem, 1.8vw, 1.6rem)" }}
                >
                  <Link href={insight.href} className="link-rule">
                    {insight.title}
                  </Link>
                </h3>
                <p className="mt-4 font-body text-[15px] leading-[1.55] text-ink-soft text-pretty">
                  {insight.dek}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGE CTA — inverted dark section */}
      <section className="border-t border-ink/30 px-6 md:px-12 py-24 md:py-40 bg-ink text-bone relative overflow-hidden">
        <div
          className="pointer-events-none select-none absolute -left-10 md:-left-16 -bottom-10 md:-bottom-20 font-display font-medium text-bone/[0.04] leading-none"
          style={{ fontSize: "clamp(10rem, 28vw, 32rem)" }}
          aria-hidden
        >
          04
        </div>

        <div className="relative mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-bone/60">
              <span className="text-amber">04</span>
              <span className="mx-2">—</span>
              Engage
            </div>
            <h2
              className="mt-8 font-display font-medium leading-[0.96] tracking-[-0.025em] text-balance text-bone"
              style={{ fontSize: "clamp(2.75rem, 8.5vw, 7rem)" }}
            >
              Begin a{" "}
              <span className="italic text-amber">conversation.</span>
            </h2>
            <p className="mt-10 font-body text-[18px] md:text-[21px] leading-[1.5] text-bone/80 max-w-xl text-pretty">
              We partner with governments, foundations, multilaterals,
              agri-corporates, and development institutions on engagements that
              matter, at the scale of nations and the depth of communities.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9 md:border-l border-bone/15 md:pl-10 self-end">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50 mb-4">
              Direct line
            </div>
            <a
              href="mailto:engage@iffchamber.com"
              className="font-display text-[1.5rem] md:text-[1.75rem] text-bone hover:text-amber transition-colors break-words"
              style={{ fontVariationSettings: '"opsz" 60' }}
            >
              engage@iffchamber.com
            </a>

            <div className="mt-12 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50 mb-4">
              Submit a brief
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-bone hover:text-amber transition-colors group"
            >
              Open a request
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const PILLARS = [
  {
    number: "01",
    title: "Food Security & Sustainability",
    body: "Building food systems that feed today without borrowing from tomorrow. We advise on supply resilience, smallholder productivity, post-harvest loss, circular food economies, and the policy architecture that makes food systems durable, from farm to market to table.",
    href: "/what-we-do/food-security",
    tags: [
      "Supply resilience",
      "Smallholder productivity",
      "Post-harvest loss",
      "Circular food economies",
      "Policy architecture",
    ],
  },
  {
    number: "02",
    title: "Human Capital Development",
    body: "Food is the first economic act. We help governments, institutions, and industries translate food systems into pathways for nutrition, employment, skills, and livelihoods, so that food doesn't just sustain people, it lifts them.",
    href: "/what-we-do/human-capital",
    tags: [
      "Nutrition strategy",
      "Agri-employment",
      "Skills & training",
      "Livelihoods design",
      "Equity & inclusion",
    ],
  },
  {
    number: "03",
    title: "Climate Mitigation & Adaptation",
    body: "Agriculture is both a driver of and a defense against climate change. We advise on regenerative practices, emissions reduction across food value chains, climate-resilient farming, and the financing and policy instruments that let food systems thrive in a warming world.",
    href: "/what-we-do/climate",
    tags: [
      "Regenerative practices",
      "Value-chain emissions",
      "Climate-resilient farming",
      "Climate finance",
      "Adaptation policy",
    ],
  },
];

const INSIGHTS = [
  {
    category: "Field Note",
    date: "Forthcoming",
    title:
      "The lever in plain sight: why food is the most under-used development tool of the century.",
    dek: "A founding essay on why nations that build durable food systems unlock everything else: health, employment, climate, security.",
    href: "/insights",
  },
  {
    category: "Brief",
    date: "Forthcoming",
    title:
      "Smallholders, supply chains, and the economics of resilience.",
    dek: "How distributed food production becomes the backbone of national food security, and what advisors get wrong about it.",
    href: "/insights",
  },
  {
    category: "Position",
    date: "Forthcoming",
    title:
      "Beyond regenerative: a framework for measuring food's climate dividend.",
    dek: "Carbon, water, biodiversity, soil: a unified accounting for the climate value of well-designed food systems.",
    href: "/insights",
  },
];
