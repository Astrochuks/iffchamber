import type { Metadata } from "next";
import Link from "next/link";
import { LeafGlyph } from "@/components/LeafGlyph";
import { ClosingCTA } from "@/components/ClosingCTA";

export const metadata: Metadata = {
  title: "Newsroom — IFF CHAMBER",
  description:
    "News, announcements, and press from IFF CHAMBER — the Interconnected Food Futures Chamber.",
};

export default function NewsroomPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-16 md:pt-28 pb-20 md:pb-28">
        <div
          className="pointer-events-none select-none absolute -right-12 md:-right-20 -top-6 md:-top-12 font-display font-medium text-ink/[0.04] leading-none tracking-[-0.02em]"
          style={{ fontSize: "clamp(8rem, 26vw, 28rem)" }}
          aria-hidden
        >
          07
        </div>

        <div className="relative mx-auto max-w-[1480px]">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
            <LeafGlyph className="w-[20px] h-auto text-moss" />
            <span>Newsroom</span>
            <span className="text-amber">●</span>
            <span>From the chamber</span>
          </div>

          <h1
            className="mt-12 md:mt-16 font-display font-medium leading-[0.92] tracking-[-0.025em] text-balance text-ink max-w-5xl"
            style={{ fontSize: "clamp(2.75rem, 9.5vw, 8rem)" }}
          >
            News, announcements, and the{" "}
            <span className="italic text-moss">record.</span>
          </h1>

          <p
            className="mt-10 md:mt-14 max-w-3xl font-display leading-[1.22] text-ink-soft text-pretty"
            style={{ fontSize: "clamp(1.25rem, 2.1vw, 1.75rem)" }}
          >
            Press releases, media coverage, and official announcements from the chamber. For interview requests and commentary, reach our press team directly.
          </p>
        </div>
      </section>

      {/* PRESS RELEASES */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-20 md:py-28 bg-bone-soft">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
                <span className="text-amber">01</span>
                <span className="mx-2">—</span>
                Press releases
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2
                className="font-display font-medium leading-[1.06] tracking-[-0.015em] text-balance"
                style={{ fontSize: "clamp(1.85rem, 4vw, 2.75rem)" }}
              >
                Official statements — in{" "}
                <span className="italic text-moss">our words.</span>
              </h2>
            </div>
          </div>

          <div className="space-y-0">
            {PRESS_RELEASES.map((p, i) => (
              <article
                key={p.title}
                className={`grid grid-cols-12 gap-6 md:gap-12 py-8 md:py-10 items-start ${i === 0 ? "border-t border-ink/25" : ""} border-b border-ink/25 group`}
              >
                <div className="col-span-12 md:col-span-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-mute">
                  <span className="text-amber">{p.date}</span>
                  <span className="block mt-1 text-ink-mute/80">{p.type}</span>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <h3
                    className="font-display font-medium text-ink leading-[1.15] tracking-[-0.005em]"
                    style={{ fontSize: "clamp(1.35rem, 2.2vw, 1.7rem)" }}
                  >
                    <Link href="/newsroom" className="link-rule">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-3 font-body text-[15.5px] leading-[1.6] text-ink-soft text-pretty max-w-2xl">
                    {p.dek}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-2 md:text-right">
                  <Link
                    href="/newsroom"
                    className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-moss hover:text-amber transition-colors"
                  >
                    Read
                    <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IN THE PRESS */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-20 md:py-28">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-14">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
                <span className="text-amber">02</span>
                <span className="mx-2">—</span>
                In the press
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2
                className="font-display font-medium leading-[1.06] tracking-[-0.015em] text-balance"
                style={{ fontSize: "clamp(1.85rem, 4vw, 2.75rem)" }}
              >
                Coverage and commentary.
              </h2>
              <p className="mt-6 font-body text-[17px] leading-[1.6] text-ink-soft max-w-2xl text-pretty">
                Selected media coverage, interviews, and outside commentary on the chamber's work.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {MEDIA.map((m) => (
              <article key={m.title} className="border-t border-ink/25 pt-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber mb-2">
                  {m.outlet}
                </div>
                <h3
                  className="mt-3 font-display font-medium text-ink leading-[1.2] tracking-[-0.005em]"
                  style={{ fontSize: "clamp(1.2rem, 1.7vw, 1.4rem)" }}
                >
                  "{m.title}"
                </h3>
                <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                  {m.date}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA CONTACT */}
      <section className="border-t border-ink/15 px-6 md:px-12 py-20 md:py-28 bg-ink text-bone relative overflow-hidden">
        <div
          className="pointer-events-none select-none absolute -left-10 md:-left-16 -bottom-10 md:-bottom-20 font-display font-medium text-bone/[0.04] leading-none"
          style={{ fontSize: "clamp(10rem, 28vw, 32rem)" }}
          aria-hidden
        >
          03
        </div>

        <div className="relative mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-bone/60">
              <span className="text-amber">03</span>
              <span className="mx-2">—</span>
              Media inquiries
            </div>
            <h2
              className="mt-8 font-display font-medium leading-[0.98] tracking-[-0.025em] text-balance text-bone"
              style={{ fontSize: "clamp(2.5rem, 7.5vw, 5.5rem)" }}
            >
              Reach our press <span className="italic text-amber">team.</span>
            </h2>
            <p className="mt-8 font-body text-[17px] md:text-[19px] leading-[1.5] text-bone/80 max-w-xl text-pretty">
              For interview requests, background briefings, data use, speaker invitations, or commentary from our practice leads.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9 md:border-l border-bone/15 md:pl-10 self-end">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50 mb-4">
              Press desk
            </div>
            <a
              href="mailto:press@iffchamber.com"
              className="font-display text-[1.5rem] md:text-[1.75rem] text-bone hover:text-amber transition-colors break-words"
              style={{ fontVariationSettings: '"opsz" 60' }}
            >
              press@iffchamber.com
            </a>
            <div className="mt-10 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50 mb-3">
              Response time
            </div>
            <p className="font-body text-[14px] text-bone/75 leading-relaxed">
              Within 24 hours on weekdays. For deadline inquiries, note the deadline in your email subject line.
            </p>
          </div>
        </div>
      </section>

      <ClosingCTA number="04" />
    </>
  );
}

const PRESS_RELEASES = [
  {
    date: "Forthcoming",
    type: "Announcement",
    title: "IFF CHAMBER formally launches — the Interconnected Food Futures Chamber begins operations.",
    dek: "The chamber announces its formal launch as a non-profit advisory working at the intersection of food security, human capital, and climate.",
  },
  {
    date: "Forthcoming",
    type: "Announcement",
    title: "Founding research agenda: nine publications on the future of food.",
    dek: "The chamber's founding editorial program, spanning field notes, briefs, and position papers across the three practices.",
  },
  {
    date: "Forthcoming",
    type: "Engagement",
    title: "First national food-strategy engagement announced.",
    dek: "The chamber commences its first government engagement — a decade-long food-strategy partnership.",
  },
  {
    date: "Forthcoming",
    type: "Partnership",
    title: "Climate finance partnership with a leading development finance institution.",
    dek: "A joint facility for climate-smart agriculture, designed with the chamber's Climate practice and the partner's agri-finance team.",
  },
  {
    date: "Forthcoming",
    type: "Leadership",
    title: "Founding board of advisors announced.",
    dek: "The chamber unveils its founding board — practitioners drawn from government, multilaterals, academia, and industry.",
  },
];

const MEDIA = [
  {
    outlet: "Forthcoming outlet",
    title: "The case for food as the under-used lever of development.",
    date: "Forthcoming",
  },
  {
    outlet: "Forthcoming outlet",
    title: "Why food needs a non-profit advisory — a new institution weighs in.",
    date: "Forthcoming",
  },
  {
    outlet: "Forthcoming outlet",
    title: "Interview: The founder of IFF CHAMBER on treating food as infrastructure.",
    date: "Forthcoming",
  },
  {
    outlet: "Forthcoming outlet",
    title: "Climate and food: a single system, not two problems.",
    date: "Forthcoming",
  },
  {
    outlet: "Forthcoming outlet",
    title: "Commentary: The next decade of food-system strategy.",
    date: "Forthcoming",
  },
  {
    outlet: "Forthcoming outlet",
    title: "Op-ed: Leaving no industry behind — a cross-sector approach to food.",
    date: "Forthcoming",
  },
];
