import { useEffect, useState } from "react";
import { useStore } from "@/lib/store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useStore((s) => s.theme);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.remove("dark", "sepia");
    if (theme === "dark") root.classList.add("dark");
    else if (theme === "sepia") root.classList.add("sepia");
  }, [theme, mounted]);
  return <>{children}</>;
}
