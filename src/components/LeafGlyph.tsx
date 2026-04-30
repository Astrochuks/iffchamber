type Props = { className?: string };

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
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M16 50 C 5 47, 3 33, 13 28 C 17 33, 19 44, 16 50 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        fill="none"
      />
      <path
        d="M16 38 C 27 35, 29 21, 19 16 C 15 21, 13 32, 16 38 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        fill="none"
      />
    </svg>
  );
}
