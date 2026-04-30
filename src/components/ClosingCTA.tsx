import Link from "next/link";

type Props = {
  number?: string;
  eyebrow?: string;
  headline?: React.ReactNode;
  body?: string;
};

export function ClosingCTA({
  number = "04",
  eyebrow = "Engage",
  headline,
  body = "We partner with governments, foundations, multilaterals, agri-corporates, and development institutions on engagements that matter, at the scale of nations and the depth of communities.",
}: Props) {
  return (
    <section className="border-t border-ink/30 px-6 md:px-12 py-24 md:py-40 bg-ink text-bone relative overflow-hidden">
      <div
        className="pointer-events-none select-none absolute -left-10 md:-left-16 -bottom-10 md:-bottom-20 font-display font-medium text-bone/[0.04] leading-none"
        style={{ fontSize: "clamp(10rem, 28vw, 32rem)" }}
        aria-hidden
      >
        {number}
      </div>

      <div className="relative mx-auto max-w-[1480px] grid grid-cols-12 gap-8 md:gap-12">
        <div className="col-span-12 md:col-span-7">
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-bone/60">
            <span className="text-amber">{number}</span>
            <span className="mx-2">—</span>
            {eyebrow}
          </div>
          <h2
            className="mt-8 font-display font-medium leading-[0.96] tracking-[-0.025em] text-balance text-bone"
            style={{ fontSize: "clamp(2.75rem, 8.5vw, 7rem)" }}
          >
            {headline ?? (
              <>
                Begin a <span className="italic text-amber">conversation.</span>
              </>
            )}
          </h2>
          <p className="mt-10 font-body text-[18px] md:text-[21px] leading-[1.5] text-bone/80 max-w-xl text-pretty">
            {body}
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
  );
}
