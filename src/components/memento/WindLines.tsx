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

type Snowflake = {
  top: string;
  duration: number;
  delay: number;
  opacity: number;
  rotation: number;
  scale: number;
  variant: number;
};

type FallingSnowflake = {
  left: string;
  duration: number;
  delay: number;
  opacity: number;
  rotation: number;
  scale: number;
  variant: number;
};

type Dot = {
  top: string;
  duration: number;
  delay: number;
  opacity: number;
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

function makeSnowflakePath(variant: number): string {
  switch (variant % 3) {
    case 0:
      return (
        "M 0 -20 L 0 20 " +
        "M -17.3 -10 L 17.3 10 " +
        "M -17.3 10 L 17.3 -10 " +
        "M 0 -14 L 3 -17 M 0 -14 L -3 -17 " +
        "M 0 -8 L 3 -11 M 0 -8 L -3 -11 " +
        "M 0 14 L 3 17 M 0 14 L -3 17 " +
        "M 0 8 L 3 11 M 0 8 L -3 11 " +
        "M 14 7 L 17 4 M 14 7 L 17 10 " +
        "M 8 4 L 11 1 M 8 4 L 11 7 " +
        "M 14 -7 L 17 -4 M 14 -7 L 11 -10 " +
        "M 8 -4 L 11 -1 M 8 -4 L 5 -7 " +
        "M -14 7 L -17 4 M -14 7 L -17 10 " +
        "M -8 4 L -11 1 M -8 4 L -11 7 " +
        "M -14 -7 L -17 -4 M -14 -7 L -11 -10 " +
        "M -8 -4 L -11 -1 M -8 -4 L -5 -7"
      );
    case 1:
      return (
        "M 0 -18 L 0 18 " +
        "M -15.6 -9 L 15.6 9 " +
        "M -15.6 9 L 15.6 -9 " +
        "M 0 -12 L 4 -14 M 0 -12 L -4 -14 " +
        "M 0 -6 L 3 -8 M 0 -6 L -3 -8 " +
        "M 0 12 L 4 14 M 0 12 L -4 14 " +
        "M 0 6 L 3 8 M 0 6 L -3 8 " +
        "M 12 6 L 14 4 M 12 6 L 14 8 " +
        "M 6 3 L 8 1 M 6 3 L 8 5 " +
        "M 12 -6 L 14 -4 M 12 -6 L 10 -8 " +
        "M 6 -3 L 8 -1 M 6 -3 L 4 -5 " +
        "M -12 6 L -14 4 M -12 6 L -14 8 " +
        "M -6 3 L -8 1 M -6 3 L -8 5 " +
        "M -12 -6 L -14 -4 M -12 -6 L -10 -8 " +
        "M -6 -3 L -8 -1 M -6 -3 L -4 -5"
      );
    case 2:
    default:
      return (
        "M 0 -20 L 0 20 " +
        "M -17.3 -10 L 17.3 10 " +
        "M -17.3 10 L 17.3 -10 " +
        "M 0 -15 L 3 -16 M 0 -15 L -3 -16 " +
        "M 0 -10 L 4 -11 M 0 -10 L -4 -11 " +
        "M 0 -5 L 3 -6 M 0 -5 L -3 -6 " +
        "M 0 15 L 3 16 M 0 15 L -3 16 " +
        "M 0 10 L 4 11 M 0 10 L -4 11 " +
        "M 0 5 L 3 6 M 0 5 L -3 6 " +
        "M 13 7 L 15 5 M 13 7 L 15 9 " +
        "M 8 4 L 10 2 M 8 4 L 10 6 " +
        "M 13 -7 L 15 -5 M 13 -7 L 11 -9 " +
        "M 8 -4 L 10 -2 M 8 -4 L 6 -6 " +
        "M -13 7 L -15 5 M -13 7 L -15 9 " +
        "M -8 4 L -10 2 M -8 4 L -10 6 " +
        "M -13 -7 L -15 -5 M -13 -7 L -11 -9 " +
        "M -8 -4 L -10 -2 M -8 -4 L -6 -6"
      );
  }
}

function makeSmallSnowflakePath(): string {
  return (
    "M 0 -12 L 0 12 " +
    "M -10.4 -6 L 10.4 6 " +
    "M -10.4 6 L 10.4 -6 " +
    "M 0 -8 L 3 -9 M 0 -8 L -3 -9 " +
    "M 0 -4 L 2 -5 M 0 -4 L -2 -5 " +
    "M 0 8 L 3 9 M 0 8 L -3 9 " +
    "M 0 4 L 2 5 M 0 4 L -2 5 " +
    "M 8 4 L 9 2 M 8 4 L 9 6 " +
    "M 4 2 L 5 1 M 4 2 L 5 3 " +
    "M 8 -4 L 9 -2 M 8 -4 L 7 -6 " +
    "M 4 -2 L 5 -1 M 4 -2 L 3 -3 " +
    "M -8 4 L -9 2 M -8 4 L -9 6 " +
    "M -4 2 L -5 1 M -4 2 L -5 3 " +
    "M -8 -4 L -9 -2 M -8 -4 L -7 -6 " +
    "M -4 -2 L -5 -1 M -4 -2 L -3 -3"
  );
}

const SNOWFLAKE_COUNT = 14;
const DOT_COUNT = 30;
const FALLING_SNOWFLAKE_COUNT = 10;

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

  const snowflakes = useMemo<Snowflake[]>(() => {
    const result: Snowflake[] = [];
    for (let i = 0; i < SNOWFLAKE_COUNT; i++) {
      const seed = i * 1.3;
      result.push({
        top: `${8 + ((seed * 7) % 84)}%`,
        duration: 15 + ((seed * 3) % 8),
        delay: (seed * 2.5) % 10,
        opacity: 0.28 + (seed % 5) * 0.05,
        rotation: 30 + ((seed * 40) % 300),
        scale: 0.5 + (seed % 4) * 0.2,
        variant: i % 3,
      });
    }
    return result;
  }, []);

  const fallingSnowflakes = useMemo<FallingSnowflake[]>(() => {
    const result: FallingSnowflake[] = [];
    for (let i = 0; i < FALLING_SNOWFLAKE_COUNT; i++) {
      const seed = i * 2.1 + 7;
      result.push({
        left: `${5 + ((seed * 13) % 90)}%`,
        duration: 10 + ((seed * 2) % 10),
        delay: (seed * 1.4) % 12,
        opacity: 0.25 + (seed % 4) * 0.05,
        rotation: 20 + ((seed * 35) % 340),
        scale: 0.4 + (seed % 3) * 0.25,
        variant: (i + 1) % 3,
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
        opacity: 0.18 + (seed % 6) * 0.03,
        size: 1.2 + (seed % 3) * 0.6,
      });
    }
    return result;
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
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

      {snowflakes.map((sf, i) => (
        <svg
          key={`sf-${i}`}
          viewBox="-24 -24 48 48"
          className="absolute text-foreground"
          style={{
            top: sf.top,
            left: 0,
            width: `${sf.scale * 1.8}%`,
            height: `${sf.scale * 2.5}vh`,
            opacity: sf.opacity,
            animation: `leaf-float ${sf.duration}s ease-in-out ${sf.delay}s infinite`,
            willChange: "transform",
            rotate: `${sf.rotation}deg`,
          }}
        >
          <path
            d={makeSnowflakePath(sf.variant)}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}

      {snowflakes.slice(0, 8).map((sf, i) => (
        <svg
          key={`ssf-${i}`}
          viewBox="-16 -16 32 32"
          className="absolute text-foreground"
          style={{
            top: `${parseFloat(sf.top) + 5 + i * 3}%`,
            left: 0,
            width: `${sf.scale * 1.2}%`,
            height: `${sf.scale * 1.7}vh`,
            opacity: sf.opacity * 0.9,
            animation: `leaf-float ${sf.duration + 3}s ease-in-out ${sf.delay + 2}s infinite`,
            willChange: "transform",
            rotate: `${sf.rotation + 90}deg`,
          }}
        >
          <path
            d={makeSmallSnowflakePath()}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}

      {fallingSnowflakes.map((fs, i) => (
        <svg
          key={`fs-${i}`}
          viewBox="-24 -24 48 48"
          className="absolute text-foreground"
          style={{
            left: fs.left,
            top: "-5%",
            width: `${fs.scale * 1.8}%`,
            height: `${fs.scale * 2.5}vh`,
            opacity: fs.opacity,
            animation: `leaf-fall ${fs.duration}s ease-in-out ${fs.delay}s infinite`,
            willChange: "transform",
            rotate: `${fs.rotation}deg`,
          }}
        >
          <path
            d={makeSnowflakePath(fs.variant)}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}

      {fallingSnowflakes.slice(0, 6).map((fs, i) => (
        <svg
          key={`sfs-${i}`}
          viewBox="-16 -16 32 32"
          className="absolute text-foreground"
          style={{
            left: `${parseFloat(fs.left) + 12 + i * 5}%`,
            top: "-5%",
            width: `${fs.scale * 1.2}%`,
            height: `${fs.scale * 1.7}vh`,
            opacity: fs.opacity * 0.85,
            animation: `leaf-fall ${fs.duration + 3}s ease-in-out ${fs.delay + 1.5}s infinite`,
            willChange: "transform",
            rotate: `${fs.rotation + 120}deg`,
          }}
        >
          <path
            d={makeSmallSnowflakePath()}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}

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
