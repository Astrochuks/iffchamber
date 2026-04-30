import type { Metadata } from "next";
import Link from "next/link";
import { LeafGlyph } from "@/components/LeafGlyph";
import { ClosingCTA } from "@/components/ClosingCTA";

export const metadata: Metadata = {
  title: "About — IFF CHAMBER",
  description:
    "IFF CHAMBER is a non-profit advisory founded on a simple conviction — food is the most under-used lever for advancing human development, economic growth, and environmental resilience.",
};

export default function AboutPage() {
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
            <span>About the Chamber</span>
            <span className="text-amber">●</span>
            <span>Est. 2019</span>
          </div>

          <h1
            className="mt-12 md:mt-16 font-display font-medium leading-[0.95] tracking-[-0.025em] text-balance text-ink max-w-5xl"
            style={{ fontSize: "clamp(2.75rem, 8.5vw, 7rem)" }}
          >
            An institution built for the systems that{" "}
            <span className="italic text-moss">feed the world.</span>
          </h1>

          <p
            className="mt-10 md:mt-14 max-w-3xl font-display leading-[1.22] text-ink-soft text-pretty"
            style={{ fontSize: "clamp(1.25rem, 2.1vw, 1.75rem)" }}
          >
            IFF CHAMBER is a non-profit advisory founded on a simple conviction — food is the most under-used lever for advancing human development, economic growth, and environmental resilience. We work with the governments, institutions, and industries that can move food systems at scale.
          </p>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32">
        <div className="mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
              <span className="text-amber">01</span>
              <span className="mx-2">—</span>
              Why we exist
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
              Food is the pillar beneath every modern goal — and it's{" "}
              <span className="italic text-moss">under-served by serious strategy.</span>
            </h2>
            <div className="mt-10 space-y-6 font-body text-[17px] md:text-[19px] leading-[1.65] text-ink-soft text-pretty max-w-3xl">
              <p>
                Climate, public health, employment, trade, migration, national security — each of these rests on food, and each is advised on as if food were someone else's problem. Agriculture here. Nutrition there. Supply chain somewhere else. The result is a world that spends billions on fragments and wonders why the system does not change.
              </p>
              <p>
                IFF CHAMBER exists to treat food as what it is: a single integrated lever that moves human development, economic vitality, and environmental resilience in one motion. We advise the people who can pull that lever at scale.
              </p>
              <p>
                We are structured as a non-profit because our research, our recommendations, and our long-run relationships must answer to the mission and to the communities we serve — not to markets, not to shareholders, not to the quarter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32 bg-bone-soft">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
                <span className="text-amber">02</span>
                <span className="mx-2">—</span>
                Principles
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2
                className="font-display font-medium leading-[1.06] tracking-[-0.015em] text-balance"
                style={{ fontSize: "clamp(1.85rem, 4vw, 3rem)" }}
              >
                Four convictions — held long before we{" "}
                <span className="italic text-moss">write anything down.</span>
              </h2>
            </div>
          </div>

          {PRINCIPLES.map((p, i) => (
            <article
              key={p.number}
              className={`grid grid-cols-12 gap-8 md:gap-12 py-10 md:py-14 ${i > 0 ? "border-t border-ink/15" : ""}`}
            >
              <div className="col-span-12 md:col-span-3">
                <div
                  className="numeral text-amber leading-[0.85] font-medium"
                  style={{ fontSize: "clamp(3.5rem, 7.5vw, 6.5rem)" }}
                >
                  {p.number}
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3
                  className="font-display font-medium text-ink leading-[1.1] tracking-[-0.01em]"
                  style={{ fontSize: "clamp(1.5rem, 2.8vw, 2rem)" }}
                >
                  {p.title}
                </h3>
                <p className="mt-4 font-body text-[16px] md:text-[18px] leading-[1.6] text-ink-soft text-pretty max-w-2xl">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-12 gap-8 md:gap-12 mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
                <span className="text-amber">03</span>
                <span className="mx-2">—</span>
                Practice
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2
                className="font-display font-medium leading-[1.06] tracking-[-0.015em] text-balance"
                style={{ fontSize: "clamp(1.85rem, 4vw, 3rem)" }}
              >
                How we work.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {BEHAVIORS.map((b) => (
              <div key={b.title} className="border-t border-ink/20 pt-6">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-amber mb-3">
                  {b.label}
                </div>
                <h3
                  className="font-display font-medium text-ink leading-[1.15] tracking-[-0.005em]"
                  style={{ fontSize: "clamp(1.35rem, 1.9vw, 1.6rem)" }}
                >
                  {b.title}
                </h3>
                <p className="mt-4 font-body text-[16px] leading-[1.6] text-ink-soft text-pretty">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32 bg-bone-soft">
        <div className="mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
              <span className="text-amber">04</span>
              <span className="mx-2">—</span>
              Governance
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-display font-medium leading-[1.06] tracking-[-0.015em] text-balance"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              A non-profit, by design — so the work answers to the{" "}
              <span className="italic text-moss">mission.</span>
            </h2>
            <p className="mt-8 font-body text-[17px] md:text-[19px] leading-[1.65] text-ink-soft text-pretty max-w-3xl">
              IFF CHAMBER is incorporated as a non-profit advisory. We earn revenue from engagements with governments, institutions, and industries able to commission serious work. All surplus is reinvested into public-good research, field programs, and pro-bono support for smaller organizations advancing the mission.
            </p>

            <dl className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl">
              {GOVERNANCE_FACTS.map((f) => (
                <div key={f.label} className="border-t border-ink/25 pt-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mb-2">
                    {f.label}
                  </dt>
                  <dd className="font-display text-lg md:text-[1.35rem] leading-[1.3] text-ink">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32">
        <div className="mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
              <span className="text-amber">05</span>
              <span className="mx-2">—</span>
              Leadership
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-display font-medium leading-[1.06] tracking-[-0.02em] text-balance"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              Partners who've built what they{" "}
              <span className="italic text-moss">advise on.</span>
            </h2>
            <p className="mt-8 font-body text-[17px] md:text-[19px] leading-[1.6] text-ink-soft text-pretty max-w-2xl">
              Our founding team and board of advisors will be published shortly. IFF CHAMBER's leadership combines practitioners drawn from government, multilaterals, agribusiness, and academia — people who have built or reformed food-system institutions at national scale.
            </p>
            <Link
              href="/contact"
              className="mt-12 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-moss hover:text-amber transition-colors group"
            >
              Inquire about leadership
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
        </div>
      </section>

      <ClosingCTA number="06" />
    </>
  );
}

const PRINCIPLES = [
  {
    number: "01",
    title: "Food is infrastructure.",
    body: "We treat food with the seriousness a nation treats its power grid or its roads. Food systems are long-lived public goods that need designed resilience, deliberate investment, and institutional memory — not charity, campaigns, or quarterly attention.",
  },
  {
    number: "02",
    title: "Systems change, not relief.",
    body: "We work on the institutional and structural layer. The question we ask is not 'what can we distribute this year' but 'what system will be stronger a decade from now.' Durable change is our unit of account.",
  },
  {
    number: "03",
    title: "Partner, don't prescribe.",
    body: "Strategy belongs to the people who will carry it. We co-design with partners, embed alongside their teams, and resist the temptation to write reports from a distance. Our job is to make local institutions stronger, not more dependent.",
  },
  {
    number: "04",
    title: "Leave no one, and no industry, behind.",
    body: "Food binds everyone — smallholder and agri-corp, minister and villager, investor and eater. Our work has to. We refuse to choose a side of a system that, done right, lifts every side at once.",
  },
];

const BEHAVIORS = [
  {
    label: "A",
    title: "Diagnose at the scale of the system.",
    body: "We begin by understanding the whole — the supply chain, the ministry, the market, the climate context — before we zoom into the piece we were asked about. A narrow brief is often a wrongly scoped problem.",
  },
  {
    label: "B",
    title: "Co-design with partners.",
    body: "Our best work is built alongside the teams that will carry it. Embedded advisors. Joint working groups. Strategy sessions that look more like workshops than presentations. Ownership is the point.",
  },
  {
    label: "C",
    title: "Execute through institutions.",
    body: "We strengthen the ministries, the DFIs, the co-operatives, the universities — and leave. We don't build parallel institutions that would outlast the engagement and compete with the ones already doing the work.",
  },
  {
    label: "D",
    title: "Learn and publish in public.",
    body: "What we learn on engagements — frameworks, data, lessons — becomes a public good. Our insights, briefs, and positions are freely available. The field advances when knowledge is shared, not hoarded.",
  },
];

const GOVERNANCE_FACTS = [
  { label: "Legal form", value: "Non-profit advisory" },
  { label: "Surplus", value: "Reinvested in public-good research" },
  { label: "Fees", value: "Underwrite pro-bono programs" },
];
