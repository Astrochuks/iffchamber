import Link from "next/link";
import { LeafGlyph } from "@/components/LeafGlyph";

export default function NotFound() {
  return (
    <section className="min-h-[78vh] px-6 md:px-12 py-24 md:py-40 flex items-center">
      <div className="mx-auto max-w-[1480px] w-full">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
              <span className="text-amber">404</span>
              <span className="mx-2">—</span>
              Not yet sown
            </div>
            <div className="mt-8 hidden md:block">
              <LeafGlyph className="w-7 h-auto text-moss" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-9">
            <h1
              className="font-display font-medium leading-[0.95] tracking-[-0.025em] text-balance"
              style={{ fontSize: "clamp(2.75rem, 9vw, 7.5rem)" }}
            >
              This page is{" "}
              <span className="italic text-moss">still in the field.</span>
            </h1>
            <p
              className="mt-10 max-w-2xl font-display text-ink-soft text-pretty"
              style={{ fontSize: "clamp(1.25rem, 1.9vw, 1.65rem)", lineHeight: 1.4 }}
            >
              The chamber is being built section by section. This page hasn't yet been written, but the rest of the site is open.
            </p>
            <Link
              href="/"
              className="mt-12 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-moss hover:text-amber transition-colors group"
            >
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:-translate-x-1">←</span>
              Return to the homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
