import { useStore } from "@/lib/store";

const LINES = [
  { top: "12%", duration: 55, delay: 0, width: 220, opacity: 0.18 },
  { top: "28%", duration: 75, delay: 8, width: 320, opacity: 0.14 },
  { top: "44%", duration: 90, delay: 20, width: 180, opacity: 0.2 },
  { top: "62%", duration: 65, delay: 4, width: 260, opacity: 0.16 },
  { top: "80%", duration: 100, delay: 14, width: 300, opacity: 0.12 },
];

export function WindLines() {
  const theme = useStore((s) => s.theme);
  const color =
    theme === "dark"
      ? "rgba(255,255,255,0.6)"
      : theme === "sepia"
        ? "rgba(90,60,30,0.5)"
        : "rgba(40,40,40,0.4)";

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {LINES.map((l, i) => (
        <div
          key={i}
          className="absolute left-0"
          style={{
            top: l.top,
            width: `${l.width}px`,
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            animation: `wind-drift ${l.duration}s linear ${l.delay}s infinite`,
            ["--wind-opacity" as string]: l.opacity,
          }}
        />
      ))}
    </div>
  );
}
