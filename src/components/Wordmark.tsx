type WordmarkProps = {
  size?: "sm" | "md" | "lg";
  withSubtitle?: boolean;
};

const SIZE_CLASS = {
  sm: "text-[15px]",
  md: "text-[17px]",
  lg: "text-2xl md:text-3xl",
};

export function Wordmark({ size = "md", withSubtitle = false }: WordmarkProps) {
  return (
    <span className="inline-flex flex-col items-start leading-none">
      <span
        className={`font-display font-medium tracking-[0.04em] text-ink ${SIZE_CLASS[size]}`}
        style={{ fontVariationSettings: '"opsz" 144' }}
      >
        IFF
        <span className="text-amber">·</span>
        CHAMBER
      </span>
      {withSubtitle ? (
        <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
          Interconnected Food Futures Chamber
        </span>
      ) : null}
    </span>
  );
}
