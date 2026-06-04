import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SAND_DURATION = 7; // segundos para a areia descer

type LoadingScreenProps = {
  onComplete: () => void;
};

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleClick = useCallback(() => {
    if (started) return;
    setStarted(true);
    // Aguarda a animação da areia terminar + um pequeno delay
    setTimeout(() => {
      setFinished(true);
      setTimeout(() => onComplete(), 600);
    }, SAND_DURATION * 1000);
  }, [started, onComplete]);

  return (
    <AnimatePresence>
      {!finished && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Título */}
          <h1 className="font-serif text-4xl italic tracking-[0.15em] text-foreground/90 sm:text-5xl">
            Memento Mori
          </h1>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground/60">
            Clique na ampulheta para começar
          </p>

          {/* Ampulheta - clicável */}
          <button
            onClick={handleClick}
            disabled={started}
            className="mt-10 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 disabled:cursor-default disabled:hover:scale-100"
            aria-label={started ? "Areia escorrendo..." : "Clique para iniciar"}
          >
            <svg
              viewBox="0 0 200 320"
              className="h-64 w-auto text-foreground/80 sm:h-72"
              fill="none"
              aria-hidden
            >
              <defs>
                <linearGradient id="glassL" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.06" />
                  <stop offset="45%" stopColor="currentColor" stopOpacity="0.14" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.04" />
                </linearGradient>
                <linearGradient id="capL" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.7" />
                </linearGradient>
                <clipPath id="topBulbL">
                  <path d="M40 40 C40 110 95 130 95 155 L105 155 C105 130 160 110 160 40 Z" />
                </clipPath>
                <clipPath id="bottomBulbL">
                  <path d="M40 280 C40 210 95 190 95 165 L105 165 C105 190 160 210 160 280 Z" />
                </clipPath>
              </defs>

              {/* Top cap */}
              <ellipse cx="100" cy="20" rx="78" ry="10" fill="url(#capL)" />
              <rect x="22" y="20" width="156" height="14" rx="3" fill="url(#capL)" />
              <ellipse cx="100" cy="34" rx="78" ry="6" fill="currentColor" opacity="0.85" />

              {/* Side pillars */}
              <rect x="20" y="30" width="6" height="260" rx="3" fill="currentColor" opacity="0.9" />
              <rect
                x="174"
                y="30"
                width="6"
                height="260"
                rx="3"
                fill="currentColor"
                opacity="0.9"
              />

              {/* Bottom cap */}
              <ellipse cx="100" cy="286" rx="78" ry="6" fill="currentColor" opacity="0.85" />
              <rect x="22" y="286" width="156" height="14" rx="3" fill="url(#capL)" />
              <ellipse cx="100" cy="300" rx="78" ry="10" fill="url(#capL)" />

              {/* Glass bulbs (background) */}
              <path
                d="M40 40 C40 110 95 145 95 160 C95 175 40 210 40 280
                   L160 280 C160 210 105 175 105 160 C105 145 160 110 160 40 Z"
                fill="url(#glassL)"
                stroke="currentColor"
                strokeOpacity="0.45"
                strokeWidth="1.2"
              />

              {/* Top sand - animado quando started */}
              <g clipPath="url(#topBulbL)">
                <motion.rect
                  x="40"
                  width="120"
                  fill="currentColor"
                  initial={false}
                  animate={started ? { y: 150, height: 5 } : { y: 40, height: 115 }}
                  transition={
                    started ? { duration: SAND_DURATION, ease: "linear" } : { duration: 0.3 }
                  }
                />
              </g>

              {/* Bottom sand - animado quando started */}
              <g clipPath="url(#bottomBulbL)">
                <motion.rect
                  x="40"
                  width="120"
                  fill="currentColor"
                  initial={false}
                  animate={started ? { y: 175, height: 105 } : { y: 275, height: 5 }}
                  transition={
                    started ? { duration: SAND_DURATION, ease: "linear" } : { duration: 0.3 }
                  }
                />
                <motion.ellipse
                  cx="100"
                  rx="55"
                  ry="10"
                  fill="currentColor"
                  initial={false}
                  animate={started ? { cy: 175 } : { cy: 275 }}
                  transition={
                    started ? { duration: SAND_DURATION, ease: "linear" } : { duration: 0.3 }
                  }
                />
              </g>

              {/* Falling sand stream */}
              {started && (
                <motion.rect
                  x="99"
                  y="155"
                  width="2"
                  height="120"
                  fill="currentColor"
                  animate={{ opacity: [0.9, 0.5, 0.9] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                />
              )}

              {/* Neck highlight */}
              <path
                d="M88 155 Q100 168 112 155"
                stroke="currentColor"
                strokeOpacity="0.6"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </button>

          {/* Instrução / progresso */}
          <p className="mt-6 font-serif text-sm italic tracking-wide text-muted-foreground/60">
            {started ? "Tempus fugit..." : "Toque para virar a ampulheta"}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
