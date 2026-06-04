import { useMemo } from "react";

type Wave = {
  top: string;
  duration: number;
  delay: number;
  opacity: number;
  path: string;
  width: number;
  strokeWidth: number;
};

function makePath(seed: number) {
  // Build a sinuous, irregular path across a 1200x60 viewBox
  const points: string[] = [];
  let x = 0;
  let y = 30;
  points.push(`M ${x} ${y}`);
  const segs = 6 + (seed % 3);
  for (let i = 1; i <= segs; i++) {
    const cx1 = x + (1200 / segs) * 0.5;
    const cy1 = y + (Math.sin(seed + i) * 18);
    x = (1200 / segs) * i;
    y = 30 + Math.cos(seed * 0.7 + i * 1.3) * 14;
    points.push(`Q ${cx1.toFixed(1)} ${cy1.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return points.join(" ");
}

export function WindLines() {
  const waves = useMemo<Wave[]>(
    () => [
      { top: "18%", duration: 14, delay: 0, opacity: 0.18, path: makePath(1.2), width: 220, strokeWidth: 1 },
      { top: "34%", duration: 11, delay: 3, opacity: 0.14, path: makePath(2.7), width: 260, strokeWidth: 1.2 },
      { top: "52%", duration: 15, delay: 1.5, opacity: 0.2, path: makePath(3.9), width: 200, strokeWidth: 1 },
      { top: "68%", duration: 12, delay: 5, opacity: 0.12, path: makePath(5.1), width: 240, strokeWidth: 1.4 },
      { top: "82%", duration: 13, delay: 2, opacity: 0.16, path: makePath(6.6), width: 210, strokeWidth: 1 },
    ],
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {waves.map((w, i) => (
        <svg
          key={i}
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="absolute text-foreground"
          style={{
            top: w.top,
            left: 0,
            width: `${w.width}%`,
            height: "60px",
            opacity: w.opacity,
            animation: `wind-drift ${w.duration}s ease-in-out ${w.delay}s infinite`,
            willChange: "transform",
          }}
        >
          <path
            d={w.path}
            fill="none"
            stroke="currentColor"
            strokeWidth={w.strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      ))}
    </div>
  );
}
