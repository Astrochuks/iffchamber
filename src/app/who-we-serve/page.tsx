import type { Metadata } from "next";
import Link from "next/link";
import { LeafGlyph } from "@/components/LeafGlyph";
import { ClosingCTA } from "@/components/ClosingCTA";

export const metadata: Metadata = {
  title: "Sectors — IFF CHAMBER",
  description:
    "IFF CHAMBER partners with the governments, multilaterals, development finance institutions, foundations, agri-corporates, and NGOs that move food systems at scale.",
};

export default function WhoWeServePage() {
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
            <span>Sectors</span>
            <span className="text-amber">●</span>
            <span>Cross-sector by design</span>
          </div>

          <h1
            className="mt-12 md:mt-16 font-display font-medium leading-[0.92] tracking-[-0.025em] text-balance text-ink max-w-5xl"
            style={{ fontSize: "clamp(2.75rem, 9vw, 7.5rem)" }}
          >
            We work with those who{" "}
            <span className="italic text-moss">move systems.</span>
          </h1>

          <p
            className="mt-10 md:mt-14 max-w-3xl font-display leading-[1.22] text-ink-soft text-pretty"
            style={{ fontSize: "clamp(1.25rem, 2.1vw, 1.75rem)" }}
          >
            Food systems are shaped by the institutions that finance, govern, supply, and serve them. IFF CHAMBER partners across the full spectrum of actors who can change food at scale — and we specifically work across them, because food does not respect the boundary between public and private.
          </p>
        </div>
      </section>

      {/* SECTORS */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32 bg-bone-soft">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
                <span className="text-amber">01</span>
                <span className="mx-2">—</span>
                Sectors
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2
                className="font-display font-medium leading-[1.06] tracking-[-0.02em] text-balance"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
              >
                Six types of partner — all of them moving the same{" "}
                <span className="italic text-moss">lever.</span>
              </h2>
            </div>
          </div>

          {SECTORS.map((s, i) => (
            <article
              key={s.number}
              className={`grid grid-cols-12 gap-8 md:gap-12 py-12 md:py-16 ${i > 0 ? "border-t border-ink/15" : ""}`}
            >
              <div className="col-span-12 md:col-span-4">
                <div
                  className="numeral text-amber leading-[0.85] font-medium"
                  style={{ fontSize: "clamp(4rem, 9vw, 8rem)" }}
                >
                  {s.number}
                </div>
                <div className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-mute">
                  Sector {s.number}
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 md:col-start-6">
                <h3
                  className="font-display font-medium text-ink leading-[1.1] tracking-[-0.005em]"
                  style={{ fontSize: "clamp(1.65rem, 3vw, 2.15rem)" }}
                >
                  {s.title}
                </h3>
                <p className="mt-6 font-body text-[17px] md:text-[18.5px] leading-[1.6] text-ink-soft text-pretty max-w-2xl">
                  {s.body}
                </p>

                <div className="mt-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber mb-3">
                    Typical engagements
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 max-w-xl">
                    {s.engagements.map((e) => (
                      <li
                        key={e}
                        className="font-body text-[14.5px] leading-snug text-ink/80 flex items-baseline gap-2"
                      >
                        <span className="text-amber font-mono text-[10px]">+</span>
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CROSS-SECTOR */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32">
        <div className="mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
              <span className="text-amber">02</span>
              <span className="mx-2">—</span>
              Cross-sector practice
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
              We don't choose sides.{" "}
              <span className="italic text-moss">We connect them.</span>
            </h2>
            <div className="mt-10 space-y-6 font-body text-[17px] md:text-[19px] leading-[1.65] text-ink-soft text-pretty max-w-3xl">
              <p>
                Many advisors specialize in one side of the food economy — public or private, industrial or smallholder, North or South. We specifically do not. The most durable food-system work happens where public policy, private supply chains, civil-society implementation, and development finance meet — and most institutions cannot see across all of those at once.
              </p>
              <p>
                That cross-sector fluency is our most useful asset. A ministry engagement benefits from our understanding of how agri-corporates actually buy. A foundation strategy benefits from our reading of where DFIs are moving. An agri-corporate transformation benefits from our relationships in the ministries that will govern its future license to operate.
              </p>
            </div>

            <Link
              href="/what-we-do"
              className="mt-12 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-moss hover:text-amber transition-colors group"
            >
              Explore the practice
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
        </div>
      </section>

      <ClosingCTA number="03" />
    </>
  );
}

const SECTORS = [
  {
    number: "01",
    title: "Governments & ministries",
    body: "National agriculture, food security, nutrition, trade, and rural-development ministries. We work on national food strategies, policy reform, subsidy redesign, and the institutional strengthening that makes a ministry effective across political cycles.",
    engagements: [
      "National food strategy",
      "Policy & regulatory reform",
      "Ministry capacity building",
      "Cross-ministry coordination",
    ],
  },
  {
    number: "02",
    title: "Multilateral organizations",
    body: "UN agencies (FAO, WFP, IFAD), regional blocs, and international food-system bodies. We support convening, shared research agendas, and multi-country programs where coordination across borders is the actual bottleneck.",
    engagements: [
      "Convening & secretariat work",
      "Multi-country program design",
      "Shared research agendas",
      "Inter-agency coordination",
    ],
  },
  {
    number: "03",
    title: "Development finance",
    body: "Development banks (World Bank, AfDB, ADB, IADB), bilateral DFIs, and climate finance institutions. We design food-system investment programs, impact frameworks, and the instrument architecture that lets capital move at the scale the system needs.",
    engagements: [
      "Investment program design",
      "Impact & M&E frameworks",
      "Instrument structuring",
      "Portfolio diagnostics",
    ],
  },
  {
    number: "04",
    title: "Foundations & philanthropy",
    body: "Mission-aligned foundations funding food security, nutrition, climate, and rural livelihoods. We support portfolio strategy, grantee due diligence, field-building initiatives, and the kind of long-horizon research that public markets will not fund.",
    engagements: [
      "Portfolio strategy",
      "Grantee & field diagnostics",
      "Initiative design",
      "Research commissions",
    ],
  },
  {
    number: "05",
    title: "Agri-corporates & food industry",
    body: "Agribusinesses, food manufacturers, retailers, and input companies committed to sustainable transformation. We advise on sustainability strategy, regenerative sourcing, smallholder inclusion, and the policy landscape that will shape their operating model for the next decade.",
    engagements: [
      "Sustainability strategy",
      "Regenerative sourcing",
      "Smallholder inclusion",
      "Policy & regulatory foresight",
    ],
  },
  {
    number: "06",
    title: "NGOs & civil society",
    body: "Implementation partners delivering food-system interventions at ground level. We support program design, scaling strategy, evidence generation, and the organizational capacity that lets a successful pilot actually become a national model.",
    engagements: [
      "Program design",
      "Scaling strategy",
      "Evidence & learning",
      "Organizational capacity",
    ],
  },
];
