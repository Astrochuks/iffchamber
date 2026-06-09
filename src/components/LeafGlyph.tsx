type Props = { className?: string };

/**
 * The IFF CHAMBER leaf mark. Two-tone: stem and lower leaf in moss
 * (rooted/established), upper leaf in moss-bright (emerging/future).
 *
 * Colors are baked into the component via Tailwind classes on individual
 * paths so the leaf reads as the brand mark wherever it appears — small
 * eyebrow accents, large standalone uses, or the logo lockup.
 */
export function LeafGlyph({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 32 96"
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
