import { useEffect, useRef, useCallback } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
  createdAt: number;
  variant: number;
  velX?: number;
  velY?: number;
};

const MAX_PARTICLES = 40;
const FADE_DURATION = 1400;
const SPAWN_INTERVAL = 30;

function makeSnowflakePath(variant: number): string {
  switch (variant % 3) {
    case 0:
      return (
        "M 0 -8 L 0 8 " +
        "M -6.9 -4 L 6.9 4 " +
        "M -6.9 4 L 6.9 -4 " +
        "M 0 -5 L 2 -6 M 0 -5 L -2 -6 " +
        "M 0 5 L 2 6 M 0 5 L -2 6 " +
        "M 5 2 L 6 1 M 5 2 L 6 3 " +
        "M -5 2 L -6 1 M -5 2 L -6 3 " +
        "M 5 -2 L 6 -1 M 5 -2 L 6 -3 " +
        "M -5 -2 L -6 -1 M -5 -2 L -6 -3"
      );
    case 1:
      return (
        "M 0 -7 L 0 7 " +
        "M -6.1 -3.5 L 6.1 3.5 " +
        "M -6.1 3.5 L 6.1 -3.5 " +
        "M 0 -4 L 2 -5 M 0 -4 L -2 -5 " +
        "M 0 4 L 2 5 M 0 4 L -2 5 " +
        "M 4 2 L 5 1 M 4 2 L 5 3 " +
        "M -4 2 L -5 1 M -4 2 L -5 3 " +
        "M 4 -2 L 5 -1 M 4 -2 L 5 -3 " +
        "M -4 -2 L -5 -1 M -4 -2 L -5 -3"
      );
    case 2:
    default:
      return (
        "M 0 -8 L 0 8 " +
        "M -6.9 -4 L 6.9 4 " +
        "M -6.9 4 L 6.9 -4 " +
        "M 0 -5 L 2 -6 M 0 -5 L -2 -6 " +
        "M 0 -3 L 2 -4 M 0 -3 L -2 -4 " +
        "M 0 5 L 2 6 M 0 5 L -2 6 " +
        "M 0 3 L 2 4 M 0 3 L -2 4 " +
        "M 4 2 L 5 1 M 4 2 L 5 3 " +
        "M -4 2 L -5 1 M -4 2 L -5 3 " +
        "M 4 -2 L 5 -1 M 4 -2 L 5 -3 " +
        "M -4 -2 L -5 -1 M -4 -2 L -5 -3"
      );
  }
}

export function CursorTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const lastSpawnRef = useRef(0);
  const idCounterRef = useRef(0);
  const mouseRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  const spawnExplosion = useCallback((x: number, y: number, count: number) => {
    const now = Date.now();
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 1.5 + Math.random() * 3;
      const id = idCounterRef.current++;
      particlesRef.current.push({
        id,
        x,
        y,
        size: 5 + Math.random() * 9,
        opacity: 0.6 + Math.random() * 0.4,
        rotation: Math.random() * 360,
        createdAt: now,
        variant: id % 3,
        velX: Math.cos(angle) * speed,
        velY: Math.sin(angle) * speed,
      });
    }
    // Cap
    if (particlesRef.current.length > MAX_PARTICLES * 2) {
      particlesRef.current = particlesRef.current.slice(-MAX_PARTICLES * 2);
    }
  }, []);

  const update = useCallback(() => {
    const now = Date.now();
    const isMobile = window.innerWidth < 768;

    particlesRef.current = particlesRef.current.filter((p) => now - p.createdAt < FADE_DURATION);

    // Desktop: spawn on mouse move
    if (!isMobile && now - lastSpawnRef.current > SPAWN_INTERVAL && mouseRef.current.x >= 0) {
      lastSpawnRef.current = now;
      const id = idCounterRef.current++;
      particlesRef.current.push({
        id,
        x: mouseRef.current.x,
        y: mouseRef.current.y,
        size: 7 + Math.random() * 9,
        opacity: 0.6 + Math.random() * 0.35,
        rotation: Math.random() * 360,
        createdAt: now,
        variant: id % 3,
      });
      if (particlesRef.current.length > MAX_PARTICLES) {
        particlesRef.current = particlesRef.current.slice(-MAX_PARTICLES);
      }
    }

    const container = containerRef.current;
    if (!container) {
      rafRef.current = requestAnimationFrame(update);
      return;
    }

    container.innerHTML = "";
    for (const p of particlesRef.current) {
      const elapsed = now - p.createdAt;
      const progress = elapsed / FADE_DURATION;
      let currentOpacity = p.opacity * (1 - progress);
      let x = p.x;
      let y = p.y;

      // Explosion particles: apply velocity
      if (p.velX !== undefined && p.velY !== undefined) {
        x += p.velX * (elapsed / 16);
        y += p.velY * (elapsed / 16);
        // Fade faster for explosion particles
        currentOpacity = p.opacity * (1 - progress * 1.2);
      } else {
        y += progress * 6; // slight downward drift
      }

      if (currentOpacity <= 0.01) continue;

      const svgNs = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNs, "svg");
      svg.setAttribute("viewBox", "-10 -10 20 20");
      svg.style.position = "absolute";
      svg.style.left = `${x - p.size / 2}px`;
      svg.style.top = `${y - p.size / 2}px`;
      svg.style.width = `${p.size}px`;
      svg.style.height = `${p.size}px`;
      svg.style.opacity = String(currentOpacity);
      svg.style.pointerEvents = "none";
      svg.style.transition = "none";
      svg.style.rotate = `${p.rotation + progress * 80}deg`;

      const path = document.createElementNS(svgNs, "path");
      path.setAttribute("d", makeSnowflakePath(p.variant));
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "currentColor");
      path.setAttribute("stroke-width", "0.8");
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("stroke-linejoin", "round");

      svg.appendChild(path);
      container.appendChild(svg);
    }

    rafRef.current = requestAnimationFrame(update);
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -100, y: -100 };
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        spawnExplosion(touch.clientX, touch.clientY, 10);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        // Spawn trail on mobile too
        const now = Date.now();
        if (now - lastSpawnRef.current > SPAWN_INTERVAL * 2) {
          lastSpawnRef.current = now;
          const id = idCounterRef.current++;
          particlesRef.current.push({
            id,
            x: touch.clientX,
            y: touch.clientY,
            size: 5 + Math.random() * 7,
            opacity: 0.5 + Math.random() * 0.3,
            rotation: Math.random() * 360,
            createdAt: now,
            variant: id % 3,
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    rafRef.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [update, spawnExplosion]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[60] text-foreground"
      aria-hidden
    />
  );
}
