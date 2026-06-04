type Side = "left" | "right";

function Branch({ side }: { side: Side }) {
  const transform = side === "right" ? "scale(-1,1) translate(-120,0)" : "";
  return (
    <svg
      viewBox="0 0 120 80"
      className="h-16 w-24 text-foreground/40 sm:h-20 sm:w-32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      aria-hidden
    >
      <g transform={transform}>
        <path d="M5 70 Q 40 55, 80 25 T 115 5" />
        {Array.from({ length: 7 }).map((_, i) => {
          const t = (i + 1) / 8;
          const x = 5 + t * 110;
          const y = 70 - t * 55 - Math.sin(t * Math.PI) * 6;
          return (
            <g key={`u-${i}`} transform={`translate(${x} ${y}) rotate(${-35 + t * 10})`}>
              <ellipse cx="0" cy="-6" rx="2.4" ry="6" fill="currentColor" opacity="0.55" />
            </g>
          );
        })}
        {Array.from({ length: 7 }).map((_, i) => {
          const t = (i + 1) / 8;
          const x = 5 + t * 110;
          const y = 70 - t * 55 - Math.sin(t * Math.PI) * 6;
          return (
            <g key={`d-${i}`} transform={`translate(${x} ${y}) rotate(${35 - t * 10})`}>
              <ellipse cx="0" cy="6" rx="2.4" ry="6" fill="currentColor" opacity="0.55" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export function OliveBranches() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-10">
      <div className="mx-auto flex max-w-7xl items-start justify-between px-2 sm:px-4">
        <div
          style={{
            transformOrigin: "top left",
            animation: "leaf-sway 7s ease-in-out infinite",
          }}
        >
          <Branch side="left" />
        </div>
        <div
          style={{
            transformOrigin: "top right",
            animation: "leaf-sway 8s ease-in-out infinite reverse",
          }}
        >
          <Branch side="right" />
        </div>
      </div>
    </div>
  );
}
