function CornerBranch({ position }: { position: "tl" | "br" }) {
  // Top-left orientation by default; bottom-right is rotated 180deg.
  const rotation = position === "br" ? "rotate(180 60 60)" : "";
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-24 w-24 text-foreground/70 sm:h-32 sm:w-32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      aria-hidden
    >
      <g transform={rotation}>
        {/* Main stem flowing from the corner */}
        <path d="M6 6 Q 30 30, 55 45 T 110 70" />
        {/* Secondary smaller branch */}
        <path d="M6 6 Q 22 22, 40 28" opacity="0.7" />

        {/* Leaves along main stem */}
        {Array.from({ length: 9 }).map((_, i) => {
          const t = (i + 1) / 10;
          const x = 6 + t * 104;
          const y = 6 + t * 64 + Math.sin(t * Math.PI) * 4;
          const rot = -30 + t * 15;
          return (
            <g key={`a-${i}`} transform={`translate(${x} ${y}) rotate(${rot})`}>
              <ellipse cx="0" cy="-5" rx="2" ry="5.5" fill="currentColor" opacity="0.6" />
            </g>
          );
        })}
        {Array.from({ length: 9 }).map((_, i) => {
          const t = (i + 1) / 10;
          const x = 6 + t * 104;
          const y = 6 + t * 64 + Math.sin(t * Math.PI) * 4;
          const rot = 30 - t * 15;
          return (
            <g key={`b-${i}`} transform={`translate(${x} ${y}) rotate(${rot})`}>
              <ellipse cx="0" cy="5" rx="2" ry="5.5" fill="currentColor" opacity="0.6" />
            </g>
          );
        })}

        {/* Small leaves on secondary branch */}
        {Array.from({ length: 4 }).map((_, i) => {
          const t = (i + 1) / 5;
          const x = 6 + t * 34;
          const y = 6 + t * 22;
          return (
            <g key={`c-${i}`} transform={`translate(${x} ${y}) rotate(${-20})`}>
              <ellipse cx="0" cy="-3.5" rx="1.5" ry="4" fill="currentColor" opacity="0.5" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export function PosterFrame() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-10"
    >
      {/* Dashed vertical side lines */}
      <div
        className="absolute inset-y-6 left-3 border-l border-dashed border-foreground/25 sm:left-6"
      />
      <div
        className="absolute inset-y-6 right-3 border-r border-dashed border-foreground/25 sm:right-6"
      />

      {/* Subtle dashed top/bottom hairlines to complete the frame */}
      <div className="absolute inset-x-6 top-3 border-t border-dashed border-foreground/15 sm:top-6" />
      <div className="absolute inset-x-6 bottom-3 border-b border-dashed border-foreground/15 sm:bottom-6" />

      {/* Corner ornaments */}
      <div className="absolute left-2 top-2 sm:left-4 sm:top-4">
        <CornerBranch position="tl" />
      </div>
      <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
        <CornerBranch position="br" />
      </div>
    </div>
  );
}
