import type { Metadata } from "next";
import Link from "next/link";
import { LeafGlyph } from "@/components/LeafGlyph";
import { ClosingCTA } from "@/components/ClosingCTA";

export const metadata: Metadata = {
  title: "Careers — IFF CHAMBER",
  description:
    "IFF CHAMBER hires practitioners: people who have built or run food systems, not just studied them. Open roles, fellowships, and expressions of interest.",
};

export default function CareersPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-16 md:pt-28 pb-20 md:pb-28">
        <div
          className="pointer-events-none select-none absolute -right-12 md:-right-20 -top-6 md:-top-12 font-display font-medium text-ink/[0.04] leading-none tracking-[-0.02em]"
          style={{ fontSize: "clamp(8rem, 26vw, 28rem)" }}
          aria-hidden
        >
          06
        </div>

        <div className="relative mx-auto max-w-[1480px]">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
            <LeafGlyph className="w-[20px] h-auto text-moss" />
            <span>Careers</span>
            <span className="text-amber">●</span>
            <span>Join the chamber</span>
          </div>

          <h1
            className="mt-12 md:mt-16 font-display font-medium leading-[0.92] tracking-[-0.025em] text-balance text-ink max-w-5xl"
            style={{ fontSize: "clamp(2.75rem, 9vw, 7.5rem)" }}
          >
            Hire the food{" "}
            <span className="italic text-moss">lever builders.</span>
          </h1>

          <p
            className="mt-10 md:mt-14 max-w-3xl font-display leading-[1.22] text-ink-soft text-pretty"
            style={{ fontSize: "clamp(1.25rem, 2.1vw, 1.75rem)" }}
          >
            IFF CHAMBER hires practitioners: people who have built or run food systems, not just studied them. If you are among them, this chamber was built for you.
          </p>
        </div>
      </section>

      {/* WHO WE HIRE */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32">
        <div className="mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
              <span className="text-amber">01</span>
              <span className="mx-2">—</span>
              Who we hire
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
              We hire for{" "}
              <span className="italic text-moss">depth, not pedigree.</span>
            </h2>
            <div className="mt-10 space-y-6 font-body text-[17px] md:text-[19px] leading-[1.65] text-ink-soft text-pretty max-w-3xl">
              <p>
                Our bar is simple: we hire the people our partners would hire if they could. Practitioners who have spent their careers inside food systems, in a ministry, at a development bank, inside an agri-corporate, on a cooperative board, in a research institution, or on a farm. We are interested in what you have built, reformed, or run.
              </p>
              <p>
                The chamber runs thin. Senior partners do the work themselves, leverage is not our model. If that sounds appealing, this is a place for you. If you are looking for a pyramid of analysts to manage, we are not.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32 bg-bone-soft">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
                <span className="text-amber">02</span>
                <span className="mx-2">—</span>
                What we offer
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2
                className="font-display font-medium leading-[1.06] tracking-[-0.02em] text-balance"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
              >
                Four promises.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {OFFERINGS.map((o) => (
              <article key={o.title} className="border-t border-ink/25 pt-5">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-amber mb-3">
                  {o.label}
                </div>
                <h3
                  className="font-display font-medium text-ink leading-[1.15] tracking-[-0.005em]"
                  style={{ fontSize: "clamp(1.35rem, 1.9vw, 1.6rem)" }}
                >
                  {o.title}
                </h3>
                <p className="mt-4 font-body text-[16px] leading-[1.6] text-ink-soft text-pretty">
                  {o.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
                <span className="text-amber">03</span>
                <span className="mx-2">—</span>
                Open roles
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2
                className="font-display font-medium leading-[1.06] tracking-[-0.02em] text-balance"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
              >
                The founding cohort,{" "}
                <span className="italic text-moss">hiring now.</span>
              </h2>
              <p className="mt-6 font-body text-[17px] leading-[1.6] text-ink-soft max-w-2xl text-pretty">
                These are the first roles in the chamber. We hire slowly and with conviction. If your profile resonates with any of these, or none of these, write to us.
              </p>
            </div>
          </div>

          <div className="space-y-0">
            {ROLES.map((r, i) => (
              <article
                key={r.title}
                className={`grid grid-cols-12 gap-6 md:gap-12 py-8 md:py-10 items-start ${i === 0 ? "border-t border-ink/25" : ""} border-b border-ink/25 group`}
              >
                <div className="col-span-12 md:col-span-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-mute">
                  <span className="text-amber">{r.practice}</span>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <h3
                    className="font-display font-medium text-ink leading-[1.15] tracking-[-0.005em]"
                    style={{ fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)" }}
                  >
                    {r.title}
                  </h3>
                  <p className="mt-3 font-body text-[15.5px] leading-[1.6] text-ink-soft text-pretty max-w-xl">
                    {r.location}
                    <span className="text-amber mx-2">·</span>
                    {r.type}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-3 md:text-right">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-moss hover:text-amber transition-colors"
                  >
                    Apply
                    <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber mb-3">
              Don't see your role?
            </div>
            <p className="font-body text-[17px] leading-[1.6] text-ink-soft text-pretty">
              We often create roles around the right people. If your work sits near our mission and your profile is unusual, write to us with a short note on what you have built, and what you want to build next.
            </p>
            <Link
              href="mailto:careers@iffchamber.com"
              className="mt-6 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink hover:text-moss transition-colors group"
            >
              careers@iffchamber.com
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* HOW WE HIRE */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-24 md:py-32 bg-bone-soft">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
                <span className="text-amber">04</span>
                <span className="mx-2">—</span>
                How we hire
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2
                className="font-display font-medium leading-[1.06] tracking-[-0.02em] text-balance"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
              >
                The process: fewer stages, more substance.
              </h2>
            </div>
          </div>

          {PROCESS.map((p, i) => (
            <article
              key={p.number}
              className={`grid grid-cols-12 gap-8 md:gap-12 py-8 md:py-10 ${i > 0 ? "border-t border-ink/15" : "border-t border-ink/25"}`}
            >
              <div className="col-span-12 md:col-span-3">
                <div
                  className="numeral text-amber leading-[0.85] font-medium"
                  style={{ fontSize: "clamp(2.75rem, 5vw, 4rem)" }}
                >
                  {p.number}
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3
                  className="font-display font-medium text-ink leading-[1.15]"
                  style={{ fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)" }}
                >
                  {p.title}
                </h3>
                <p className="mt-3 font-body text-[16px] leading-[1.6] text-ink-soft text-pretty max-w-2xl">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ClosingCTA
        number="05"
        eyebrow="Careers"
        headline={
          <>
            Write to <span className="italic text-amber">us.</span>
          </>
        }
        body="A cover note and a record of what you have built is enough. We read every message carefully, and we respond personally."
      />
    </>
  );
}

const OFFERINGS = [
  {
    label: "01",
    title: "Mission you can point to.",
    body: "Work that moves real systems (governments, food economies, climate trajectories), not work that moves clients a slide deck. The chamber exists to do the former.",
  },
  {
    label: "02",
    title: "Senior leverage, not pyramid leverage.",
    body: "The most senior person on the project does the work. No teams of analysts built for margin. Flat organization, thick substance.",
  },
  {
    label: "03",
    title: "Published work, always.",
    body: "What you learn here becomes a public good under our chamber's name. Your body of work is yours, and the field's.",
  },
  {
    label: "04",
    title: "Compensation that reflects the work.",
    body: "Competitive with peer institutions at the senior level. Transparent bands across the chamber. Bonuses tied to mission delivery, not utilization.",
  },
];

const ROLES = [
  {
    practice: "Food Security",
    title: "Senior Advisor, Food Security & Sustainability",
    location: "Remote / hybrid",
    type: "Full-time · Senior",
  },
  {
    practice: "Climate",
    title: "Senior Advisor, Climate & Food Systems",
    location: "Remote / hybrid",
    type: "Full-time · Senior",
  },
  {
    practice: "Human Capital",
    title: "Advisor, Human Capital & Livelihoods",
    location: "Remote / hybrid",
    type: "Full-time · Mid-senior",
  },
  {
    practice: "Research",
    title: "Head of Research",
    location: "Remote / hybrid",
    type: "Full-time · Leadership",
  },
  {
    practice: "Chamber",
    title: "Chief of Staff",
    location: "Remote / hybrid",
    type: "Full-time · Leadership",
  },
  {
    practice: "Fellowship",
    title: "IFF CHAMBER Fellowship",
    location: "Global cohort",
    type: "12-month fellowship",
  },
];

const PROCESS = [
  {
    number: "01",
    title: "A written conversation.",
    body: "A cover note and record of what you have built. No generic cover letters. We want to understand you as a practitioner, in your own words.",
  },
  {
    number: "02",
    title: "A working session.",
    body: "A real problem from a real engagement, worked through together. No case interviews, no brainteasers. We are trying to see how you think. You are trying to see how we work.",
  },
  {
    number: "03",
    title: "Partner conversations.",
    body: "One or two conversations with senior partners, centered on the work. We will also offer to connect you with someone who has left, a reference from the other direction.",
  },
  {
    number: "04",
    title: "An offer, or honest closure.",
    body: "We either extend a clear offer, or we close the conversation honestly with the reasons. No silent pipelines.",
  },
];
