import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type ColumnId = "todo" | "doing" | "done";
export interface Task { id: string; title: string; column: ColumnId }
export interface Note { id: string; content: string; updatedAt: number }

interface State {
  theme: "dark" | "light";
  birthDate: string | null;
  paintedWeeks: number[]; // extra weeks user manually painted
  tasks: Task[];
  notes: Note[];
  toggleTheme: () => void;
  setBirthDate: (d: string) => void;
  togglePaintedWeek: (idx: number) => void;
  addTask: (title: string) => void;
  moveTask: (id: string, column: ColumnId) => void;
  deleteTask: (id: string) => void;
  addNote: () => string;
  updateNote: (id: string, content: string) => void;
  deleteNote: (id: string) => void;
}

const uid = () => Math.random().toString(36).slice(2, 10);

export const useStore = create<State>()(
  persist(
    (set) => ({
      theme: "dark",
      birthDate: null,
      paintedWeeks: [],
      tasks: [],
      notes: [],
      toggleTheme: () => set((s) => ({ theme: s.theme === "dark" ? "light" : "dark" })),
      setBirthDate: (d) => set({ birthDate: d }),
      togglePaintedWeek: (idx) =>
        set((s) => ({
          paintedWeeks: s.paintedWeeks.includes(idx)
            ? s.paintedWeeks.filter((i) => i !== idx)
            : [...s.paintedWeeks, idx],
        })),
      addTask: (title) =>
        set((s) => ({ tasks: [...s.tasks, { id: uid(), title, column: "todo" }] })),
      moveTask: (id, column) =>
        set((s) => ({ tasks: s.tasks.map((t) => (t.id === id ? { ...t, column } : t)) })),
      deleteTask: (id) => set((s) => ({ tasks: s.tasks.filter((t) => t.id !== id) })),
      addNote: () => {
        const id = uid();
        set((s) => ({ notes: [{ id, content: "", updatedAt: Date.now() }, ...s.notes] }));
        return id;
      },
      updateNote: (id, content) =>
        set((s) => ({
          notes: s.notes.map((n) => (n.id === id ? { ...n, content, updatedAt: Date.now() } : n)),
        })),
      deleteNote: (id) => set((s) => ({ notes: s.notes.filter((n) => n.id !== id) })),
    }),
    {
      name: "memento-mori-store",
      storage: createJSONStorage(() =>
        typeof window !== "undefined"
          ? window.localStorage
          : ({ getItem: () => null, setItem: () => {}, removeItem: () => {} } as Storage),
      ),
    },
  ),
);
