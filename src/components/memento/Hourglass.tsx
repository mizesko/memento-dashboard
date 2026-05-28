import { motion } from "framer-motion";

const DURATION = 20;

export function Hourglass() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-12">
      <svg
        viewBox="0 0 200 320"
        className="h-64 w-auto text-foreground"
        fill="none"
        aria-label="Ampulheta"
      >
        <defs>
          {/* Glass gradient — subtle monochrome shine */}
          <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.06" />
            <stop offset="45%" stopColor="currentColor" stopOpacity="0.14" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.04" />
          </linearGradient>
          {/* Frame cap gradient */}
          <linearGradient id="cap" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.7" />
          </linearGradient>
          {/* Clip for top bulb sand */}
          <clipPath id="topBulb">
            <path d="M40 40 C40 110 95 130 95 155 L105 155 C105 130 160 110 160 40 Z" />
          </clipPath>
          {/* Clip for bottom bulb sand */}
          <clipPath id="bottomBulb">
            <path d="M40 280 C40 210 95 190 95 165 L105 165 C105 190 160 210 160 280 Z" />
          </clipPath>
        </defs>

        {/* Top cap */}
        <ellipse cx="100" cy="20" rx="78" ry="10" fill="url(#cap)" />
        <rect x="22" y="20" width="156" height="14" rx="3" fill="url(#cap)" />
        <ellipse cx="100" cy="34" rx="78" ry="6" fill="currentColor" opacity="0.85" />

        {/* Side pillars */}
        <rect x="20" y="30" width="6" height="260" rx="3" fill="currentColor" opacity="0.9" />
        <rect x="174" y="30" width="6" height="260" rx="3" fill="currentColor" opacity="0.9" />

        {/* Bottom cap */}
        <ellipse cx="100" cy="286" rx="78" ry="6" fill="currentColor" opacity="0.85" />
        <rect x="22" y="286" width="156" height="14" rx="3" fill="url(#cap)" />
        <ellipse cx="100" cy="300" rx="78" ry="10" fill="url(#cap)" />

        {/* Glass bulbs (background) */}
        <path
          d="M40 40 C40 110 95 145 95 160 C95 175 40 210 40 280
             L160 280 C160 210 105 175 105 160 C105 145 160 110 160 40 Z"
          fill="url(#glass)"
          stroke="currentColor"
          strokeOpacity="0.45"
          strokeWidth="1.2"
        />

        {/* Top sand — drains over DURATION */}
        <g clipPath="url(#topBulb)">
          <motion.rect
            x="40"
            width="120"
            fill="currentColor"
            initial={{ y: 40, height: 115 }}
            animate={{ y: [40, 150], height: [115, 5] }}
            transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
          />
        </g>

        {/* Bottom sand — fills over DURATION (mound shape via path mask) */}
        <g clipPath="url(#bottomBulb)">
          <motion.rect
            x="40"
            width="120"
            fill="currentColor"
            initial={{ y: 275, height: 5 }}
            animate={{ y: [275, 175], height: [5, 105] }}
            transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
          />
          {/* Mound curve on top of bottom sand */}
          <motion.ellipse
            cx="100"
            rx="55"
            ry="10"
            fill="currentColor"
            initial={{ cy: 275 }}
            animate={{ cy: [275, 175] }}
            transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
          />
        </g>

        {/* Falling sand stream */}
        <motion.rect
          x="99"
          y="155"
          width="2"
          height="120"
          fill="currentColor"
          animate={{ opacity: [0.9, 0.5, 0.9] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Neck highlight */}
        <path
          d="M88 155 Q100 168 112 155"
          stroke="currentColor"
          strokeOpacity="0.6"
          strokeWidth="1"
          fill="none"
        />
      </svg>
      <p className="mt-6 font-serif text-sm italic tracking-wide text-muted-foreground">
        Tempus fugit.
      </p>
    </section>
  );
}
