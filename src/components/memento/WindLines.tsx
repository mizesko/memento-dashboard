import { useMemo } from "react";

type WindLine = {
  top: string;
  duration: number;
  delay: number;
  opacity: number;
  path: string;
  width: number;
  strokeWidth: number;
};

type Leaf = {
  top: string;
  duration: number;
  delay: number;
  opacity: number;
  xStart: number;
  xEnd: number;
  yOscillation: number;
  rotation: number;
  scale: number;
};

type FallingLeaf = {
  left: string;
  duration: number;
  delay: number;
  opacity: number;
  rotation: number;
  scale: number;
  drift: number;
};

type Dot = {
  top: string;
  duration: number;
  delay: number;
  opacity: number;
  xStart: number;
  xEnd: number;
  size: number;
};

function makeWindPath(seed: number): string {
  const points: string[] = [];
  let x = -50;
  let y = 60;
  points.push(`M ${x} ${y}`);

  const segs = 7 + (seed % 3);
  const segW = 1700 / segs;

  for (let i = 1; i <= segs; i++) {
    const midX = x + segW * 0.5;
    const midY = y + Math.sin(seed + i * 1.7) * 22;

    x = x + segW;
    y = 60 + Math.cos(seed * 0.6 + i * 1.4) * 18;

    if (i % 3 === 0) {
      const loopCx = x - segW * 0.4;
      const loopCy = y + Math.sin(seed + i) * 15;
      points.push(`C ${midX} ${midY}, ${loopCx} ${loopCy}, ${x - segW * 0.5} ${y}`);
      points.push(`C ${x - segW * 0.3} ${y - 8}, ${x - segW * 0.2} ${y + 8}, ${x} ${y}`);
    } else {
      points.push(`Q ${midX} ${midY} ${x} ${y}`);
    }
  }

  return points.join(" ");
}

function makeLeafPath(): string {
  return "M 0 0 C 4 -6, 8 -4, 10 0 C 8 4, 4 6, 0 0";
}

function makeSmallLeafPath(): string {
  return "M 0 0 C 3 -4, 6 -3, 7 0 C 6 3, 3 4, 0 0";
}

const LEAF_COUNT = 14;
const DOT_COUNT = 30;
const FALLING_LEAF_COUNT = 10;

export function WindLines() {
  const lines = useMemo<WindLine[]>(
    () => [
      {
        top: "12%",
        duration: 18,
        delay: 0,
        opacity: 0.25,
        path: makeWindPath(1.2),
        width: 240,
        strokeWidth: 1,
      },
      {
        top: "28%",
        duration: 14,
        delay: 4,
        opacity: 0.2,
        path: makeWindPath(2.7),
        width: 260,
        strokeWidth: 1.2,
      },
      {
        top: "45%",
        duration: 20,
        delay: 2,
        opacity: 0.3,
        path: makeWindPath(3.9),
        width: 220,
        strokeWidth: 1,
      },
      {
        top: "60%",
        duration: 16,
        delay: 6,
        opacity: 0.18,
        path: makeWindPath(5.1),
        width: 250,
        strokeWidth: 1.4,
      },
      {
        top: "76%",
        duration: 17,
        delay: 1.5,
        opacity: 0.22,
        path: makeWindPath(6.6),
        width: 230,
        strokeWidth: 1,
      },
      {
        top: "90%",
        duration: 19,
        delay: 5,
        opacity: 0.18,
        path: makeWindPath(4.2),
        width: 210,
        strokeWidth: 1.2,
      },
    ],
    [],
  );

  const leaves = useMemo<Leaf[]>(() => {
    const result: Leaf[] = [];
    for (let i = 0; i < LEAF_COUNT; i++) {
      const seed = i * 1.3;
      result.push({
        top: `${8 + ((seed * 7) % 84)}%`,
        duration: 15 + ((seed * 3) % 8),
        delay: (seed * 2.5) % 10,
        opacity: 0.18 + (seed % 5) * 0.04,
        xStart: -10,
        xEnd: 110,
        yOscillation: 20 + ((seed * 5) % 30),
        rotation: 30 + ((seed * 40) % 300),
        scale: 0.6 + (seed % 4) * 0.15,
      });
    }
    return result;
  }, []);

  const fallingLeaves = useMemo<FallingLeaf[]>(() => {
    const result: FallingLeaf[] = [];
    for (let i = 0; i < FALLING_LEAF_COUNT; i++) {
      const seed = i * 2.1 + 7;
      result.push({
        left: `${5 + ((seed * 13) % 90)}%`,
        duration: 10 + ((seed * 2) % 10),
        delay: (seed * 1.4) % 12,
        opacity: 0.15 + (seed % 4) * 0.04,
        rotation: 20 + ((seed * 35) % 340),
        scale: 0.5 + (seed % 3) * 0.2,
        drift: -30 + ((seed * 7) % 60),
      });
    }
    return result;
  }, []);

  const dots = useMemo<Dot[]>(() => {
    const result: Dot[] = [];
    for (let i = 0; i < DOT_COUNT; i++) {
      const seed = i * 0.7 + 5;
      result.push({
        top: `${5 + ((seed * 11) % 90)}%`,
        duration: 12 + ((seed * 2) % 10),
        delay: (seed * 1.8) % 12,
        opacity: 0.12 + (seed % 6) * 0.025,
        xStart: -5,
        xEnd: 105,
        size: 1 + (seed % 3) * 0.5,
      });
    }
    return result;
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Wind lines */}
      {lines.map((w, i) => (
        <svg
          key={`line-${i}`}
          viewBox="0 0 1600 120"
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

      {/* Floating leaves (horizontal wind) */}
      {leaves.map((leaf, i) => (
        <svg
          key={`leaf-${i}`}
          viewBox="0 0 10 6"
          className="absolute text-foreground"
          style={{
            top: leaf.top,
            left: 0,
            width: `${leaf.scale * 1.2}%`,
            height: `${leaf.scale * 1.8}vh`,
            opacity: leaf.opacity,
            animation: `leaf-float ${leaf.duration}s ease-in-out ${leaf.delay}s infinite`,
            willChange: "transform",
            rotate: `${leaf.rotation}deg`,
          }}
        >
          <path
            d={makeLeafPath()}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}

      {/* Small decorative leaves */}
      {leaves.slice(0, 8).map((leaf, i) => (
        <svg
          key={`sleaf-${i}`}
          viewBox="0 0 7 4"
          className="absolute text-foreground"
          style={{
            top: `${parseFloat(leaf.top) + 5 + i * 3}%`,
            left: 0,
            width: `${leaf.scale * 0.8}%`,
            height: `${leaf.scale * 1.2}vh`,
            opacity: leaf.opacity * 0.9,
            animation: `leaf-float ${leaf.duration + 3}s ease-in-out ${leaf.delay + 2}s infinite`,
            willChange: "transform",
            rotate: `${leaf.rotation + 90}deg`,
          }}
        >
          <path
            d={makeSmallLeafPath()}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}

      {/* Falling leaves (vertical/diagonal, from top to bottom) */}
      {fallingLeaves.map((fl, i) => (
        <svg
          key={`fleaf-${i}`}
          viewBox="0 0 10 6"
          className="absolute text-foreground"
          style={{
            left: fl.left,
            top: "-5%",
            width: `${fl.scale * 1.2}%`,
            height: `${fl.scale * 1.8}vh`,
            opacity: fl.opacity,
            animation: `leaf-fall ${fl.duration}s ease-in-out ${fl.delay}s infinite`,
            willChange: "transform",
            rotate: `${fl.rotation}deg`,
          }}
        >
          <path
            d={makeLeafPath()}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}

      {/* Small falling leaves */}
      {fallingLeaves.slice(0, 6).map((fl, i) => (
        <svg
          key={`sfleaf-${i}`}
          viewBox="0 0 7 4"
          className="absolute text-foreground"
          style={{
            left: `${parseFloat(fl.left) + 12 + i * 5}%`,
            top: "-5%",
            width: `${fl.scale * 0.8}%`,
            height: `${fl.scale * 1.2}vh`,
            opacity: fl.opacity * 0.85,
            animation: `leaf-fall ${fl.duration + 3}s ease-in-out ${fl.delay + 1.5}s infinite`,
            willChange: "transform",
            rotate: `${fl.rotation + 120}deg`,
          }}
        >
          <path
            d={makeSmallLeafPath()}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}

      {/* Dust/particle dots */}
      {dots.map((dot, i) => (
        <div
          key={`dot-${i}`}
          className="absolute rounded-full bg-foreground"
          style={{
            top: dot.top,
            left: 0,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            opacity: dot.opacity,
            animation: `dot-drift ${dot.duration}s ease-in-out ${dot.delay}s infinite`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
