import { useStore } from "@/lib/store";

const WAVES = [
  { top: "10%", duration: 90, delay: 0, opacity: 0.35, amp: 6 },
  { top: "26%", duration: 130, delay: 12, opacity: 0.25, amp: 10 },
  { top: "42%", duration: 110, delay: 5, opacity: 0.3, amp: 4 },
  { top: "58%", duration: 150, delay: 20, opacity: 0.22, amp: 12 },
  { top: "74%", duration: 100, delay: 8, opacity: 0.28, amp: 7 },
  { top: "88%", duration: 140, delay: 2, opacity: 0.2, amp: 5 },
];

export function WindLines() {
  const theme = useStore((s) => s.theme);
  const color =
    theme === "dark"
      ? "rgba(255,255,255,0.7)"
      : theme === "sepia"
        ? "rgba(40,22,10,0.55)"
        : "rgba(50,50,50,0.5)";

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {WAVES.map((w, i) => (
        <svg
          key={i}
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          className="absolute left-0"
          style={{
            top: w.top,
            width: "200%",
            height: "40px",
            opacity: w.opacity,
            animation: `wind-drift ${w.duration}s linear ${w.delay}s infinite`,
          }}
        >
          <path
            d={`M0 20 Q 150 ${20 - w.amp} 300 20 T 600 20 T 900 20 T 1200 20`}
            fill="none"
            stroke={color}
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      ))}
    </div>
  );
}
