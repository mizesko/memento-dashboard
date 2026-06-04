import { useEffect, useState } from "react";
import { Moon, Sun, Coffee } from "lucide-react";
import { motion } from "framer-motion";
import { useStore } from "@/lib/store";
import { getDailyQuote, QUOTES } from "@/lib/quotes";
import { Button } from "@/components/ui/button";

export function Header() {
  const { theme, toggleTheme } = useStore();
  const [quote, setQuote] = useState(QUOTES[0]);
  useEffect(() => {
    setQuote(getDailyQuote());
  }, []);
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-6 sm:py-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Memento Mori
          </p>
          <h1 className="font-serif text-2xl italic sm:text-3xl">Dashboard</h1>
        </div>
        <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Alternar tema">
          {theme === "dark" ? <Sun className="h-4 w-4" /> : theme === "light" ? <Coffee className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>
      <motion.div
        key={quote.text}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl px-4 pb-8 text-center"
      >
        <p className="font-serif text-lg italic leading-relaxed sm:text-2xl">
          "{quote.text}"
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          — {quote.author}
        </p>
      </motion.div>
    </header>
  );
}
