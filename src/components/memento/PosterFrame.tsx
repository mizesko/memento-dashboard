function OliveBranch({ position }: { position: "tl" | "br" }) {
  // Designed for top-left; rotate 180 for bottom-right.
  const rotation = position === "br" ? "rotate(180 200 300)" : "";
  return (
    <svg
      viewBox="0 0 200 300"
      className="h-full w-auto text-foreground/80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform={rotation}>
        {/* Main long stem flowing down along the side */}
        <path d="M20 0 Q 28 60 35 110 T 50 220 Q 55 260 62 295" />
        {/* Secondary branch curving inward */}
        <path d="M28 50 Q 55 75 85 95 Q 110 110 130 130" opacity="0.85" />
        {/* Small branch near top */}
        <path d="M22 20 Q 45 30 70 35" opacity="0.7" />
        {/* Lower secondary */}
        <path d="M48 200 Q 80 215 110 225" opacity="0.8" />

        {/* Leaves along main stem — alternating sides */}
        {Array.from({ length: 22 }).map((_, i) => {
          const t = i / 21;
          // approximate point on main stem
          const x = 20 + 8 * Math.sin(t * Math.PI) + t * 42;
          const y = t * 295;
          const side = i % 2 === 0 ? -1 : 1;
          const angle = side === -1 ? -55 + t * 20 : 55 - t * 20;
          const rx = 2.2;
          const ry = 9 + Math.sin(t * Math.PI) * 2;
          return (
            <g key={`m-${i}`} transform={`translate(${x} ${y}) rotate(${angle})`}>
              <ellipse cx={side * 6} cy="0" rx={rx} ry={ry} fill="currentColor" opacity="0.75" />
              <line x1="0" y1="0" x2={side * 6} y2="0" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
            </g>
          );
        })}

        {/* Leaves on secondary inward branch */}
        {Array.from({ length: 10 }).map((_, i) => {
          const t = (i + 1) / 11;
          const x = 28 + t * 102;
          const y = 50 + t * 80 - Math.sin(t * Math.PI) * 8;
          const side = i % 2 === 0 ? -1 : 1;
          const angle = side === -1 ? -30 : 30;
          return (
            <g key={`s-${i}`} transform={`translate(${x} ${y}) rotate(${angle})`}>
              <ellipse cx={side * 5} cy="0" rx="2" ry="7" fill="currentColor" opacity="0.7" />
            </g>
          );
        })}

        {/* Top small branch leaves */}
        {Array.from({ length: 6 }).map((_, i) => {
          const t = (i + 1) / 7;
          const x = 22 + t * 48;
          const y = 20 + t * 15 - Math.sin(t * Math.PI) * 4;
          const side = i % 2 === 0 ? -1 : 1;
          return (
            <g key={`t-${i}`} transform={`translate(${x} ${y}) rotate(${side * 35})`}>
              <ellipse cx={side * 4} cy="0" rx="1.7" ry="5.5" fill="currentColor" opacity="0.65" />
            </g>
          );
        })}

        {/* Lower secondary leaves */}
        {Array.from({ length: 8 }).map((_, i) => {
          const t = (i + 1) / 9;
          const x = 48 + t * 62;
          const y = 200 + t * 25 - Math.sin(t * Math.PI) * 6;
          const side = i % 2 === 0 ? -1 : 1;
          return (
            <g key={`l-${i}`} transform={`translate(${x} ${y}) rotate(${side * 40})`}>
              <ellipse cx={side * 5} cy="0" rx="2" ry="6.5" fill="currentColor" opacity="0.7" />
            </g>
          );
        })}

        {/* A few small berries/buds for elegance */}
        {[40, 130, 240].map((y, i) => (
          <circle key={`b-${i}`} cx={30 + i * 4} cy={y} r="1.4" fill="currentColor" opacity="0.5" />
        ))}
      </g>
    </svg>
  );
}

export function PosterFrame() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-10">
      {/* Dashed vertical side lines */}
      <div className="absolute inset-y-6 left-3 border-l border-dashed border-foreground/25 sm:left-6" />
      <div className="absolute inset-y-6 right-3 border-r border-dashed border-foreground/25 sm:right-6" />

      {/* Subtle dashed top/bottom hairlines */}
      <div className="absolute inset-x-6 top-3 border-t border-dashed border-foreground/15 sm:top-6" />
      <div className="absolute inset-x-6 bottom-3 border-b border-dashed border-foreground/15 sm:bottom-6" />

      {/* Top-left olive branch — large, vertical, hugging the side */}
      <div className="absolute left-3 top-6 h-[42vh] max-h-[520px] min-h-[260px] sm:left-6 sm:top-8">
        <OliveBranch position="tl" />
      </div>

      {/* Bottom-right olive branch — mirrored */}
      <div className="absolute bottom-6 right-3 h-[42vh] max-h-[520px] min-h-[260px] sm:bottom-8 sm:right-6">
        <OliveBranch position="br" />
      </div>
    </div>
  );
}
