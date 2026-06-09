type LogoProps = {
  /**
   * `horizontal` — leaf + wordmark on a single line (header, footer, signature)
   * `stacked` — leaf above wordmark, centered (social profile, business card)
   * `mark` — leaf only (favicon, OG image, tight spaces)
   */
  variant?: "horizontal" | "stacked" | "mark";
  size?: "sm" | "md" | "lg";
  /** Show the long-form descriptor beneath the wordmark. Defaults true. */
  withSubtitle?: boolean;
  className?: string;
};

const SIZE = {
  sm: { mark: "h-9", word: "text-[18px]", sub: "text-[8px]", subTrack: "tracking-[0.18em]", gap: "gap-4" },
  md: { mark: "h-10", word: "text-[22px]", sub: "text-[9px]", subTrack: "tracking-[0.03em]", gap: "gap-5" },
  lg: { mark: "h-12", word: "text-[30px]", sub: "text-[11px]", subTrack: "tracking-[0.22em]", gap: "gap-6" },
} as const;

const WORDMARK_LETTERS: { c: string; tone: string }[] = [
  { c: "I", tone: "text-ink" },
  { c: "F", tone: "text-ink" },
  { c: "F", tone: "text-ink" },
  { c: "·", tone: "text-amber" },
  { c: "C", tone: "text-moss-bright" },
  { c: "H", tone: "text-moss-bright" },
  { c: "A", tone: "text-moss-bright" },
  { c: "M", tone: "text-moss-bright" },
  { c: "B", tone: "text-moss-bright" },
  { c: "E", tone: "text-moss-bright" },
  { c: "R", tone: "text-moss-bright" },
];

/**
 * Two-tone version of the leaf for the logo lockup. ViewBox is cropped at
 * y=14 (just above where the leaves begin) so the top of the leaves aligns
 * with the top of the wordmark.
 *
 * Color story: stem and lower leaf in moss (the rooted, established work),
 * upper leaf in moss-bright (the emerging, future-facing growth). The eye
 * reads a gradient up the leaf — from grounded to vibrant.
 *
 * The shared LeafGlyph in components/LeafGlyph.tsx stays single-tone for
 * accent uses elsewhere on the site.
 */
function LogoLeaf({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 14 32 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <line
        x1="16"
        y1="22"
        x2="16"
        y2="92"
        className="text-moss"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M16 50 C 1 47, 0 32, 12 24 C 13 32, 16 42, 16 50 Z"
        className="text-moss"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M16 38 C 31 35, 32 22, 20 14 C 18 22, 16 30, 16 38 Z"
        className="text-moss-bright"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Logo({
  variant = "horizontal",
  size = "md",
  withSubtitle = true,
  className = "",
}: LogoProps) {
  const s = SIZE[size];

  if (variant === "mark") {
    return (
      <span className={`inline-block ${s.mark} text-moss ${className}`}>
        <LogoLeaf className="h-full w-auto" />
      </span>
    );
  }

  const wordmark = (
    <span className="inline-flex flex-col items-stretch leading-none">
      <span
        className={`flex justify-between font-display font-medium ${s.word}`}
        style={{ fontVariationSettings: '"opsz" 144' }}
      >
        {WORDMARK_LETTERS.map((l, i) => (
          <span key={i} className={l.tone}>
            {l.c}
          </span>
        ))}
      </span>
      {withSubtitle ? (
        <span
          className={`mt-2 font-mono uppercase ${s.subTrack} text-ink-mute whitespace-nowrap ${s.sub}`}
        >
          Interconnected Food Futures Chamber
        </span>
      ) : null}
    </span>
  );

  if (variant === "stacked") {
    return (
      <span className={`inline-flex flex-col items-center gap-3 ${className}`}>
        <LogoLeaf className="h-12 w-auto text-moss" />
        {wordmark}
      </span>
    );
  }

  return (
    <span className={`inline-flex items-start ${s.gap} ${className}`}>
      <span className={`${s.mark} text-moss shrink-0 inline-block`}>
        <LogoLeaf className="h-full w-auto" />
      </span>
      {wordmark}
    </span>
  );
}
