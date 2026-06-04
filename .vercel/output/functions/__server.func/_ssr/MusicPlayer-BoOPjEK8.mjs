import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as create, p as persist, a as createJSONStorage } from "../_libs/zustand.mjs";
import { d as Pause, e as Play } from "../_libs/lucide-react.mjs";
const AudioCtx = reactExports.createContext({
  playing: false,
  toggle: () => {
  },
  startAudio: () => {
  }
});
function AudioProvider({ children }) {
  const [playing, setPlaying] = reactExports.useState(false);
  const audioRef = reactExports.useRef(null);
  const startedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const audio = new Audio("/music.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;
    const playTimer = setTimeout(() => {
      audio.play().then(() => {
        setPlaying(true);
        startedRef.current = true;
      }).catch(() => {
        startedRef.current = false;
      });
    }, 500);
    return () => {
      clearTimeout(playTimer);
      audio.pause();
      audio.src = "";
    };
  }, []);
  const startAudio = reactExports.useCallback(() => {
    const audio = audioRef.current;
    if (!audio || playing) return;
    audio.play().catch(() => {
    });
    setPlaying(true);
    startedRef.current = true;
  }, [playing]);
  const toggle = reactExports.useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => {
      });
      setPlaying(true);
    }
  }, [playing]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AudioCtx.Provider, { value: { playing, toggle, startAudio }, children });
}
function useAudio() {
  return reactExports.useContext(AudioCtx);
}
const uid = () => Math.random().toString(36).slice(2, 10);
const useStore = create()(
  persist(
    (set) => ({
      theme: "dark",
      birthDate: null,
      paintedWeeks: [],
      tasks: [],
      notes: [],
      toggleTheme: () => set((s) => ({
        theme: s.theme === "dark" ? "light" : s.theme === "light" ? "sepia" : "dark"
      })),
      setBirthDate: (d) => set({ birthDate: d }),
      togglePaintedWeek: (idx) => set((s) => ({
        paintedWeeks: s.paintedWeeks.includes(idx) ? s.paintedWeeks.filter((i) => i !== idx) : [...s.paintedWeeks, idx]
      })),
      addTask: (title) => set((s) => ({ tasks: [...s.tasks, { id: uid(), title, column: "todo" }] })),
      moveTask: (id, column) => set((s) => ({ tasks: s.tasks.map((t) => t.id === id ? { ...t, column } : t) })),
      deleteTask: (id) => set((s) => ({ tasks: s.tasks.filter((t) => t.id !== id) })),
      addNote: () => {
        const id = uid();
        set((s) => ({ notes: [{ id, content: "", updatedAt: Date.now() }, ...s.notes] }));
        return id;
      },
      updateNote: (id, content) => set((s) => ({
        notes: s.notes.map((n) => n.id === id ? { ...n, content, updatedAt: Date.now() } : n)
      })),
      deleteNote: (id) => set((s) => ({ notes: s.notes.filter((n) => n.id !== id) }))
    }),
    {
      name: "memento-mori-store",
      storage: createJSONStorage(
        () => typeof window !== "undefined" ? window.localStorage : void 0
      )
    }
  )
);
function ThemeProvider({ children }) {
  const theme = useStore((s) => s.theme);
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => setMounted(true), []);
  reactExports.useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.remove("dark", "sepia");
    if (theme === "dark") root.classList.add("dark");
    else if (theme === "sepia") root.classList.add("sepia");
  }, [theme, mounted]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
}
function MusicPlayer() {
  const { playing, toggle } = useAudio();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-4 left-4 sm:left-6 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick: toggle,
      className: "flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2.5 text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-all duration-300 text-xs uppercase tracking-widest",
      "aria-label": playing ? "Pausar música" : "Tocar música",
      children: [
        playing ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: playing ? "Pausar" : "Play" })
      ]
    }
  ) });
}
export {
  AudioProvider as A,
  MusicPlayer as M,
  ThemeProvider as T,
  useStore as a,
  useAudio as u
};
