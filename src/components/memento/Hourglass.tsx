import { motion } from "framer-motion";

export function Hourglass() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-10">
      <svg viewBox="0 0 120 200" className="h-48 w-auto text-foreground" fill="none">
        {/* Frame */}
        <line x1="10" y1="6" x2="110" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="194" x2="110" y2="194" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 6 C20 60 100 80 100 100 C100 120 20 140 20 194" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M100 6 C100 60 20 80 20 100 C20 120 100 140 100 194" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Top sand */}
        <motion.path
          d="M25 12 C25 55 95 70 95 95 L25 95 Z"
          fill="currentColor"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: [1, 0.55, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "60px 12px" }}
        />
        {/* Bottom sand */}
        <motion.path
          d="M25 188 C25 145 95 130 95 105 L25 105 Z"
          fill="currentColor"
          initial={{ scaleY: 0.2 }}
          animate={{ scaleY: [0.2, 1, 0.2] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "60px 188px" }}
        />
        {/* Falling sand stream */}
        <motion.line
          x1="60"
          y1="100"
          x2="60"
          y2="140"
          stroke="currentColor"
          strokeWidth="1"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      </svg>
      <p className="mt-4 font-serif text-sm italic text-muted-foreground">Tempus fugit.</p>
    </section>
  );
}
