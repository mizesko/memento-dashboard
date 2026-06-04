import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AudioProvider, T as ThemeProvider, M as MusicPlayer, u as useStore } from "./MusicPlayer-w_bD5b3N.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { u as useSensors, a as useSensor, D as DndContext, b as DragOverlay, P as PointerSensor, c as useDroppable, d as useDraggable } from "../_libs/dnd-kit__core.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { S as Sun, C as Coffee, b as Moon, c as Plus, T as Trash2, X } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/zustand.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/dnd-kit__utilities.mjs";
import "../_libs/dnd-kit__accessibility.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const QUOTES = [
  { text: "Não é que tenhamos pouco tempo, mas que perdemos muito dele.", author: "Sêneca" },
  { text: "Você poderia deixar a vida agora mesmo. Que isso determine o que você faz, diz e pensa.", author: "Marco Aurélio" },
  { text: "Lembre-se: você é mortal. Memento mori.", author: "Marco Aurélio" },
  { text: "Enquanto adiamos a vida, ela passa.", author: "Sêneca" },
  { text: "Não são as coisas que perturbam os homens, mas a opinião que têm delas.", author: "Epicteto" },
  { text: "Toda noite, antes de dormir, lembre-se: amanhã pode não chegar.", author: "Marco Aurélio" },
  { text: "Comece já a viver, e conte cada dia como uma vida separada.", author: "Sêneca" },
  { text: "A felicidade da sua vida depende da qualidade dos seus pensamentos.", author: "Marco Aurélio" },
  { text: "Não exija que os acontecimentos sigam seus desejos. Aceite-os como acontecem.", author: "Epicteto" },
  { text: "A vida é longa o bastante, se soubermos usá-la.", author: "Sêneca" },
  { text: "O tempo é o bem mais precioso que possuímos, pois é o único que não se recupera.", author: "Sêneca" },
  { text: "Confine-se ao presente.", author: "Marco Aurélio" }
];
function getDailyQuote() {
  const day = Math.floor(Date.now() / (1e3 * 60 * 60 * 24));
  const idx = (day + Math.floor(Math.random() * QUOTES.length)) % QUOTES.length;
  return QUOTES[idx];
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
function Header() {
  const { theme, toggleTheme } = useStore();
  const [quote, setQuote] = reactExports.useState(QUOTES[0]);
  reactExports.useEffect(() => {
    setQuote(getDailyQuote());
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "border-b border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-6 sm:py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Memento Mori" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-2xl italic sm:text-3xl", children: "Dashboard" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: toggleTheme, "aria-label": "Alternar tema", children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : theme === "light" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Coffee, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "mx-auto max-w-3xl px-4 pb-8 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-serif text-lg italic leading-relaxed sm:text-2xl", children: [
            '"',
            quote.text,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground", children: [
            "— ",
            quote.author
          ] })
        ]
      },
      quote.text
    )
  ] });
}
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const YEARS = 80;
const WEEKS_PER_YEAR = 52;
const BLOCK_YEARS = 5;
const TOTAL = YEARS * WEEKS_PER_YEAR;
const BLOCKS = YEARS / BLOCK_YEARS;
function LifeCalendar() {
  const { birthDate, setBirthDate, paintedWeeks, togglePaintedWeek } = useStore();
  const weeksLived = reactExports.useMemo(() => {
    if (!birthDate) return 0;
    const b = new Date(birthDate).getTime();
    if (isNaN(b)) return 0;
    const diff = Date.now() - b;
    return Math.max(0, Math.min(TOTAL, Math.floor(diff / (1e3 * 60 * 60 * 24 * 7))));
  }, [birthDate]);
  const painted = reactExports.useMemo(() => new Set(paintedWeeks), [paintedWeeks]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl italic", children: "Sua vida em semanas" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
          "80 anos · 4.160 semanas · ",
          weeksLived.toLocaleString(),
          " vividas ·",
          " ",
          (TOTAL - weeksLived).toLocaleString(),
          " restantes"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "bd", className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Data de nascimento" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "bd",
            type: "date",
            value: birthDate ?? "",
            onChange: (e) => setBirthDate(e.target.value),
            className: "w-full sm:w-52"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3 sm:gap-4", children: Array.from({ length: BLOCKS }).map((_, blockIdx) => {
      const startYear = blockIdx * BLOCK_YEARS;
      const cellsInBlock = BLOCK_YEARS * WEEKS_PER_YEAR;
      const startWeek = startYear * WEEKS_PER_YEAR;
      const ageLabel = (blockIdx + 1) * BLOCK_YEARS;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid flex-1 gap-[3px] sm:gap-[3px]",
            style: {
              gridTemplateColumns: `repeat(${WEEKS_PER_YEAR}, minmax(4px, 1fr))`
            },
            role: "grid",
            "aria-label": `Anos ${startYear + 1} a ${startYear + BLOCK_YEARS}`,
            children: Array.from({ length: cellsInBlock }).map((_2, i) => {
              const globalIdx = startWeek + i;
              const lived = globalIdx < weeksLived || painted.has(globalIdx);
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => togglePaintedWeek(globalIdx),
                  "aria-label": `Semana ${globalIdx + 1}`,
                  className: `aspect-square rounded-[1px] border transition-colors ${lived ? "border-cell-lived bg-cell-lived" : "border-cell-empty bg-transparent hover:bg-cell-empty/40"}`,
                  style: { minWidth: "4px", minHeight: "4px" }
                },
                globalIdx
              );
            })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 shrink-0 text-right font-serif text-[10px] italic text-muted-foreground sm:w-8 sm:text-xs", children: ageLabel })
      ] }, blockIdx);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: "Clique em qualquer quadrado vazio para marcá-lo manualmente." })
  ] });
}
const DURATION = 20;
function Hourglass() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto flex max-w-6xl flex-col items-center px-4 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        viewBox: "0 0 200 320",
        className: "h-64 w-auto text-foreground",
        fill: "none",
        "aria-label": "Ampulheta",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "glass", x1: "0", y1: "0", x2: "1", y2: "1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "currentColor", stopOpacity: "0.06" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "45%", stopColor: "currentColor", stopOpacity: "0.14" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "currentColor", stopOpacity: "0.04" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "cap", x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "currentColor", stopOpacity: "0.95" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "currentColor", stopOpacity: "0.7" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { id: "topBulb", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M40 40 C40 110 95 130 95 155 L105 155 C105 130 160 110 160 40 Z" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { id: "bottomBulb", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M40 280 C40 210 95 190 95 165 L105 165 C105 190 160 210 160 280 Z" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "100", cy: "20", rx: "78", ry: "10", fill: "url(#cap)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "22", y: "20", width: "156", height: "14", rx: "3", fill: "url(#cap)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "100", cy: "34", rx: "78", ry: "6", fill: "currentColor", opacity: "0.85" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "20", y: "30", width: "6", height: "260", rx: "3", fill: "currentColor", opacity: "0.9" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "174", y: "30", width: "6", height: "260", rx: "3", fill: "currentColor", opacity: "0.9" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "100", cy: "286", rx: "78", ry: "6", fill: "currentColor", opacity: "0.85" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "22", y: "286", width: "156", height: "14", rx: "3", fill: "url(#cap)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "100", cy: "300", rx: "78", ry: "10", fill: "url(#cap)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M40 40 C40 110 95 145 95 160 C95 175 40 210 40 280\r\n             L160 280 C160 210 105 175 105 160 C105 145 160 110 160 40 Z",
              fill: "url(#glass)",
              stroke: "currentColor",
              strokeOpacity: "0.45",
              strokeWidth: "1.2"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("g", { clipPath: "url(#topBulb)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.rect,
            {
              x: "40",
              width: "120",
              fill: "currentColor",
              initial: { y: 40, height: 115 },
              animate: { y: [40, 150], height: [115, 5] },
              transition: { duration: DURATION, repeat: Infinity, ease: "linear" }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { clipPath: "url(#bottomBulb)", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.rect,
              {
                x: "40",
                width: "120",
                fill: "currentColor",
                initial: { y: 275, height: 5 },
                animate: { y: [275, 175], height: [5, 105] },
                transition: { duration: DURATION, repeat: Infinity, ease: "linear" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.ellipse,
              {
                cx: "100",
                rx: "55",
                ry: "10",
                fill: "currentColor",
                initial: { cy: 275 },
                animate: { cy: [275, 175] },
                transition: { duration: DURATION, repeat: Infinity, ease: "linear" }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.rect,
            {
              x: "99",
              y: "155",
              width: "2",
              height: "120",
              fill: "currentColor",
              animate: { opacity: [0.9, 0.5, 0.9] },
              transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M88 155 Q100 168 112 155",
              stroke: "currentColor",
              strokeOpacity: "0.6",
              strokeWidth: "1",
              fill: "none"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-serif text-sm italic tracking-wide text-muted-foreground", children: "Tempus fugit." })
  ] });
}
const COLUMNS = [
  { id: "todo", label: "A Fazer" },
  { id: "doing", label: "Fazendo" },
  { id: "done", label: "Feito" }
];
function TaskCard({ task }) {
  const { deleteTask } = useStore();
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: task.id });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: setNodeRef,
      ...attributes,
      ...listeners,
      className: `group flex w-full max-w-full items-start justify-between gap-2 overflow-hidden rounded-md border border-border bg-card p-3 text-sm shadow-sm transition ${isDragging ? "opacity-30" : "hover:border-foreground/40"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "min-w-0 flex-1 cursor-grab whitespace-normal break-words",
            style: { overflowWrap: "anywhere", wordBreak: "break-word" },
            children: task.title
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: (e) => {
              e.stopPropagation();
              deleteTask(task.id);
            },
            className: "opacity-0 transition group-hover:opacity-60 hover:!opacity-100",
            "aria-label": "Excluir tarefa",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" })
          }
        )
      ]
    }
  );
}
function Column({ id, label, tasks }) {
  const { setNodeRef, isOver } = useDroppable({ id });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: setNodeRef,
      className: `flex min-h-[200px] flex-col gap-3 rounded-lg border border-border p-3 transition ${isOver ? "bg-accent" : "bg-muted/30"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: tasks.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: tasks.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(TaskCard, { task: t }, t.id)) })
      ]
    }
  );
}
function Kanban() {
  const { tasks, addTask, moveTask } = useStore();
  const [title, setTitle] = reactExports.useState("");
  const [activeId, setActiveId] = reactExports.useState(null);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }));
  const onDragStart = (e) => setActiveId(String(e.active.id));
  const onDragEnd = (e) => {
    setActiveId(null);
    if (e.over) moveTask(String(e.active.id), e.over.id);
  };
  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title.trim());
    setTitle("");
  };
  const active = tasks.find((t) => t.id === activeId);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-serif text-2xl italic", children: "Kanban" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "mb-4 flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: title,
          onChange: (e) => setTitle(e.target.value),
          placeholder: "Nova tarefa…"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "icon", "aria-label": "Adicionar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DndContext, { sensors, onDragStart, onDragEnd, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-3", children: COLUMNS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Column,
        {
          id: c.id,
          label: c.label,
          tasks: tasks.filter((t) => t.column === c.id)
        },
        c.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DragOverlay, { children: active ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-foreground/40 bg-card p-3 text-sm shadow-lg", children: active.title }) : null })
    ] })
  ] });
}
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
function Notes() {
  const { notes, addNote, updateNote, deleteNote } = useStore();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl italic", children: "Anotações" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "outline", onClick: () => addNote(), "aria-label": "Nova nota", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
      notes.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Nenhuma anotação ainda." }),
      notes.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: n.content,
            onChange: (e) => updateNote(n.id, e.target.value),
            placeholder: "Escreva algo…",
            className: "min-h-[100px] resize-y border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between border-t border-border pt-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(n.updatedAt).toLocaleString() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => deleteNote(n.id),
              className: "opacity-60 transition hover:opacity-100",
              "aria-label": "Excluir nota",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" })
            }
          )
        ] })
      ] }, n.id))
    ] })
  ] });
}
function makeWindPath(seed) {
  const points = [];
  let x = -50;
  let y = 60;
  points.push(`M ${x} ${y}`);
  const segs = 7 + seed % 3;
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
function makeSnowflakePath$1(variant) {
  switch (variant % 3) {
    case 0:
      return "M 0 -20 L 0 20 M -17.3 -10 L 17.3 10 M -17.3 10 L 17.3 -10 M 0 -14 L 3 -17 M 0 -14 L -3 -17 M 0 -8 L 3 -11 M 0 -8 L -3 -11 M 0 14 L 3 17 M 0 14 L -3 17 M 0 8 L 3 11 M 0 8 L -3 11 M 14 7 L 17 4 M 14 7 L 17 10 M 8 4 L 11 1 M 8 4 L 11 7 M 14 -7 L 17 -4 M 14 -7 L 11 -10 M 8 -4 L 11 -1 M 8 -4 L 5 -7 M -14 7 L -17 4 M -14 7 L -17 10 M -8 4 L -11 1 M -8 4 L -11 7 M -14 -7 L -17 -4 M -14 -7 L -11 -10 M -8 -4 L -11 -1 M -8 -4 L -5 -7";
    case 1:
      return "M 0 -18 L 0 18 M -15.6 -9 L 15.6 9 M -15.6 9 L 15.6 -9 M 0 -12 L 4 -14 M 0 -12 L -4 -14 M 0 -6 L 3 -8 M 0 -6 L -3 -8 M 0 12 L 4 14 M 0 12 L -4 14 M 0 6 L 3 8 M 0 6 L -3 8 M 12 6 L 14 4 M 12 6 L 14 8 M 6 3 L 8 1 M 6 3 L 8 5 M 12 -6 L 14 -4 M 12 -6 L 10 -8 M 6 -3 L 8 -1 M 6 -3 L 4 -5 M -12 6 L -14 4 M -12 6 L -14 8 M -6 3 L -8 1 M -6 3 L -8 5 M -12 -6 L -14 -4 M -12 -6 L -10 -8 M -6 -3 L -8 -1 M -6 -3 L -4 -5";
    case 2:
    default:
      return "M 0 -20 L 0 20 M -17.3 -10 L 17.3 10 M -17.3 10 L 17.3 -10 M 0 -15 L 3 -16 M 0 -15 L -3 -16 M 0 -10 L 4 -11 M 0 -10 L -4 -11 M 0 -5 L 3 -6 M 0 -5 L -3 -6 M 0 15 L 3 16 M 0 15 L -3 16 M 0 10 L 4 11 M 0 10 L -4 11 M 0 5 L 3 6 M 0 5 L -3 6 M 13 7 L 15 5 M 13 7 L 15 9 M 8 4 L 10 2 M 8 4 L 10 6 M 13 -7 L 15 -5 M 13 -7 L 11 -9 M 8 -4 L 10 -2 M 8 -4 L 6 -6 M -13 7 L -15 5 M -13 7 L -15 9 M -8 4 L -10 2 M -8 4 L -10 6 M -13 -7 L -15 -5 M -13 -7 L -11 -9 M -8 -4 L -10 -2 M -8 -4 L -6 -6";
  }
}
function makeSmallSnowflakePath() {
  return "M 0 -12 L 0 12 M -10.4 -6 L 10.4 6 M -10.4 6 L 10.4 -6 M 0 -8 L 3 -9 M 0 -8 L -3 -9 M 0 -4 L 2 -5 M 0 -4 L -2 -5 M 0 8 L 3 9 M 0 8 L -3 9 M 0 4 L 2 5 M 0 4 L -2 5 M 8 4 L 9 2 M 8 4 L 9 6 M 4 2 L 5 1 M 4 2 L 5 3 M 8 -4 L 9 -2 M 8 -4 L 7 -6 M 4 -2 L 5 -1 M 4 -2 L 3 -3 M -8 4 L -9 2 M -8 4 L -9 6 M -4 2 L -5 1 M -4 2 L -5 3 M -8 -4 L -9 -2 M -8 -4 L -7 -6 M -4 -2 L -5 -1 M -4 -2 L -3 -3";
}
const SNOWFLAKE_COUNT = 14;
const DOT_COUNT = 30;
const FALLING_SNOWFLAKE_COUNT = 10;
function WindLines() {
  const lines = reactExports.useMemo(
    () => [
      {
        top: "12%",
        duration: 18,
        delay: 0,
        opacity: 0.25,
        path: makeWindPath(1.2),
        width: 240,
        strokeWidth: 1
      },
      {
        top: "28%",
        duration: 14,
        delay: 4,
        opacity: 0.2,
        path: makeWindPath(2.7),
        width: 260,
        strokeWidth: 1.2
      },
      {
        top: "45%",
        duration: 20,
        delay: 2,
        opacity: 0.3,
        path: makeWindPath(3.9),
        width: 220,
        strokeWidth: 1
      },
      {
        top: "60%",
        duration: 16,
        delay: 6,
        opacity: 0.18,
        path: makeWindPath(5.1),
        width: 250,
        strokeWidth: 1.4
      },
      {
        top: "76%",
        duration: 17,
        delay: 1.5,
        opacity: 0.22,
        path: makeWindPath(6.6),
        width: 230,
        strokeWidth: 1
      },
      {
        top: "90%",
        duration: 19,
        delay: 5,
        opacity: 0.18,
        path: makeWindPath(4.2),
        width: 210,
        strokeWidth: 1.2
      }
    ],
    []
  );
  const snowflakes = reactExports.useMemo(() => {
    const result = [];
    for (let i = 0; i < SNOWFLAKE_COUNT; i++) {
      const seed = i * 1.3;
      result.push({
        top: `${8 + seed * 7 % 84}%`,
        duration: 15 + seed * 3 % 8,
        delay: seed * 2.5 % 10,
        opacity: 0.28 + seed % 5 * 0.05,
        rotation: 30 + seed * 40 % 300,
        scale: 0.5 + seed % 4 * 0.2,
        variant: i % 3
      });
    }
    return result;
  }, []);
  const fallingSnowflakes = reactExports.useMemo(() => {
    const result = [];
    for (let i = 0; i < FALLING_SNOWFLAKE_COUNT; i++) {
      const seed = i * 2.1 + 7;
      result.push({
        left: `${5 + seed * 13 % 90}%`,
        duration: 10 + seed * 2 % 10,
        delay: seed * 1.4 % 12,
        opacity: 0.25 + seed % 4 * 0.05,
        rotation: 20 + seed * 35 % 340,
        scale: 0.4 + seed % 3 * 0.25,
        variant: (i + 1) % 3
      });
    }
    return result;
  }, []);
  const dots = reactExports.useMemo(() => {
    const result = [];
    for (let i = 0; i < DOT_COUNT; i++) {
      const seed = i * 0.7 + 5;
      result.push({
        top: `${5 + seed * 11 % 90}%`,
        duration: 12 + seed * 2 % 10,
        delay: seed * 1.8 % 12,
        opacity: 0.18 + seed % 6 * 0.03,
        size: 1.2 + seed % 3 * 0.6
      });
    }
    return result;
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 z-0 overflow-hidden", children: [
    lines.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        viewBox: "0 0 1600 120",
        preserveAspectRatio: "none",
        className: "absolute text-foreground",
        style: {
          top: w.top,
          left: 0,
          width: `${w.width}%`,
          height: "60px",
          opacity: w.opacity,
          animation: `wind-drift ${w.duration}s ease-in-out ${w.delay}s infinite`,
          willChange: "transform"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: w.path,
            fill: "none",
            stroke: "currentColor",
            strokeWidth: w.strokeWidth,
            strokeLinecap: "round"
          }
        )
      },
      `line-${i}`
    )),
    snowflakes.map((sf, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        viewBox: "-24 -24 48 48",
        className: "absolute text-foreground",
        style: {
          top: sf.top,
          left: 0,
          width: `${sf.scale * 1.8}%`,
          height: `${sf.scale * 2.5}vh`,
          opacity: sf.opacity,
          animation: `leaf-float ${sf.duration}s ease-in-out ${sf.delay}s infinite`,
          willChange: "transform",
          rotate: `${sf.rotation}deg`
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: makeSnowflakePath$1(sf.variant),
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      },
      `sf-${i}`
    )),
    snowflakes.slice(0, 8).map((sf, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        viewBox: "-16 -16 32 32",
        className: "absolute text-foreground",
        style: {
          top: `${parseFloat(sf.top) + 5 + i * 3}%`,
          left: 0,
          width: `${sf.scale * 1.2}%`,
          height: `${sf.scale * 1.7}vh`,
          opacity: sf.opacity * 0.9,
          animation: `leaf-float ${sf.duration + 3}s ease-in-out ${sf.delay + 2}s infinite`,
          willChange: "transform",
          rotate: `${sf.rotation + 90}deg`
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: makeSmallSnowflakePath(),
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "0.8",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      },
      `ssf-${i}`
    )),
    fallingSnowflakes.map((fs, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        viewBox: "-24 -24 48 48",
        className: "absolute text-foreground",
        style: {
          left: fs.left,
          top: "-5%",
          width: `${fs.scale * 1.8}%`,
          height: `${fs.scale * 2.5}vh`,
          opacity: fs.opacity,
          animation: `leaf-fall ${fs.duration}s ease-in-out ${fs.delay}s infinite`,
          willChange: "transform",
          rotate: `${fs.rotation}deg`
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: makeSnowflakePath$1(fs.variant),
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      },
      `fs-${i}`
    )),
    fallingSnowflakes.slice(0, 6).map((fs, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        viewBox: "-16 -16 32 32",
        className: "absolute text-foreground",
        style: {
          left: `${parseFloat(fs.left) + 12 + i * 5}%`,
          top: "-5%",
          width: `${fs.scale * 1.2}%`,
          height: `${fs.scale * 1.7}vh`,
          opacity: fs.opacity * 0.85,
          animation: `leaf-fall ${fs.duration + 3}s ease-in-out ${fs.delay + 1.5}s infinite`,
          willChange: "transform",
          rotate: `${fs.rotation + 120}deg`
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: makeSmallSnowflakePath(),
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "0.8",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      },
      `sfs-${i}`
    )),
    dots.map((dot, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute rounded-full bg-foreground",
        style: {
          top: dot.top,
          left: 0,
          width: `${dot.size}px`,
          height: `${dot.size}px`,
          opacity: dot.opacity,
          animation: `dot-drift ${dot.duration}s ease-in-out ${dot.delay}s infinite`,
          willChange: "transform"
        }
      },
      `dot-${i}`
    ))
  ] });
}
function OliveBranch({ position }) {
  const isBr = position === "br";
  const isExtra = position === "extra";
  const rotation = isBr ? "rotate(180 100 150)" : isExtra ? "rotate(160 100 150)" : "";
  const viewBox = isExtra ? "200 300" : "200 300";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      viewBox: `0 0 ${viewBox}`,
      className: "h-full w-auto text-foreground/80",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": true,
      preserveAspectRatio: "xMidYMid meet",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: rotation, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 0 Q 28 60 35 110 T 50 220 Q 55 260 62 295" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M28 50 Q 55 75 85 95 Q 110 110 130 130", opacity: "0.85" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 20 Q 45 30 70 35", opacity: "0.7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M48 200 Q 80 215 110 225", opacity: "0.8" }),
        Array.from({ length: 22 }).map((_, i) => {
          const t = i / 21;
          const x = 20 + 8 * Math.sin(t * Math.PI) + t * 42;
          const y = t * 295;
          const side = i % 2 === 0 ? -1 : 1;
          const angle = side === -1 ? -55 + t * 20 : 55 - t * 20;
          const rx = 2.2;
          const ry = 9 + Math.sin(t * Math.PI) * 2;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(${x} ${y}) rotate(${angle})`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: side * 6, cy: "0", rx, ry, fill: "currentColor", opacity: "0.75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "line",
              {
                x1: "0",
                y1: "0",
                x2: side * 6,
                y2: "0",
                stroke: "currentColor",
                strokeWidth: "0.6",
                opacity: "0.6"
              }
            )
          ] }, `m-${i}`);
        }),
        Array.from({ length: 10 }).map((_, i) => {
          const t = (i + 1) / 11;
          const x = 28 + t * 102;
          const y = 50 + t * 80 - Math.sin(t * Math.PI) * 8;
          const side = i % 2 === 0 ? -1 : 1;
          const angle = side === -1 ? -30 : 30;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: `translate(${x} ${y}) rotate(${angle})`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: side * 5, cy: "0", rx: "2", ry: "7", fill: "currentColor", opacity: "0.7" }) }, `s-${i}`);
        }),
        Array.from({ length: 6 }).map((_, i) => {
          const t = (i + 1) / 7;
          const x = 22 + t * 48;
          const y = 20 + t * 15 - Math.sin(t * Math.PI) * 4;
          const side = i % 2 === 0 ? -1 : 1;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: `translate(${x} ${y}) rotate(${side * 35})`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: side * 4, cy: "0", rx: "1.7", ry: "5.5", fill: "currentColor", opacity: "0.65" }) }, `t-${i}`);
        }),
        Array.from({ length: 8 }).map((_, i) => {
          const t = (i + 1) / 9;
          const x = 48 + t * 62;
          const y = 200 + t * 25 - Math.sin(t * Math.PI) * 6;
          const side = i % 2 === 0 ? -1 : 1;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: `translate(${x} ${y}) rotate(${side * 40})`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: side * 5, cy: "0", rx: "2", ry: "6.5", fill: "currentColor", opacity: "0.7" }) }, `l-${i}`);
        }),
        [40, 130, 240].map((y, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: 30 + i * 4, cy: y, r: "1.4", fill: "currentColor", opacity: "0.5" }, `b-${i}`))
      ] })
    }
  );
}
function PosterFrame() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 z-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-6 left-3 border-l border-dashed border-foreground/25 sm:left-6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-6 right-3 border-r border-dashed border-foreground/25 sm:right-6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-6 top-3 border-t border-dashed border-foreground/15 sm:top-6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-6 bottom-3 border-b border-dashed border-foreground/15 sm:bottom-6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-3 top-6 h-[42vh] max-h-[520px] min-h-[260px] sm:left-6 sm:top-8 hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OliveBranch, { position: "tl" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 right-3 h-[42vh] max-h-[520px] min-h-[260px] sm:bottom-8 sm:right-6 hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OliveBranch, { position: "br" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 right-3 h-[28vh] max-h-[360px] min-h-[200px] sm:bottom-8 sm:right-6 hidden md:block translate-x-[55%] translate-y-[30%] opacity-70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OliveBranch, { position: "extra" }) })
  ] });
}
const SAND_DURATION = 7;
function LoadingScreen({ onComplete }) {
  const [started, setStarted] = reactExports.useState(false);
  const [finished, setFinished] = reactExports.useState(false);
  const handleClick = reactExports.useCallback(() => {
    if (started) return;
    setStarted(true);
    setTimeout(() => {
      setFinished(true);
      setTimeout(() => onComplete(), 600);
    }, SAND_DURATION * 1e3);
  }, [started, onComplete]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !finished && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background",
      exit: { opacity: 0 },
      transition: { duration: 0.6, ease: "easeInOut" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl italic tracking-[0.15em] text-foreground/90 sm:text-5xl", children: "Memento Mori" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground/60", children: "Clique na ampulheta para começar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleClick,
            disabled: started,
            className: "mt-10 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 disabled:cursor-default disabled:hover:scale-100",
            "aria-label": started ? "Areia escorrendo..." : "Clique para iniciar",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                viewBox: "0 0 200 320",
                className: "h-64 w-auto text-foreground/80 sm:h-72",
                fill: "none",
                "aria-hidden": true,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "glassL", x1: "0", y1: "0", x2: "1", y2: "1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "currentColor", stopOpacity: "0.06" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "45%", stopColor: "currentColor", stopOpacity: "0.14" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "currentColor", stopOpacity: "0.04" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "capL", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "currentColor", stopOpacity: "0.95" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "currentColor", stopOpacity: "0.7" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { id: "topBulbL", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M40 40 C40 110 95 130 95 155 L105 155 C105 130 160 110 160 40 Z" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { id: "bottomBulbL", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M40 280 C40 210 95 190 95 165 L105 165 C105 190 160 210 160 280 Z" }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "100", cy: "20", rx: "78", ry: "10", fill: "url(#capL)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "22", y: "20", width: "156", height: "14", rx: "3", fill: "url(#capL)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "100", cy: "34", rx: "78", ry: "6", fill: "currentColor", opacity: "0.85" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "20", y: "30", width: "6", height: "260", rx: "3", fill: "currentColor", opacity: "0.9" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "rect",
                    {
                      x: "174",
                      y: "30",
                      width: "6",
                      height: "260",
                      rx: "3",
                      fill: "currentColor",
                      opacity: "0.9"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "100", cy: "286", rx: "78", ry: "6", fill: "currentColor", opacity: "0.85" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "22", y: "286", width: "156", height: "14", rx: "3", fill: "url(#capL)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "100", cy: "300", rx: "78", ry: "10", fill: "url(#capL)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      d: "M40 40 C40 110 95 145 95 160 C95 175 40 210 40 280\n                   L160 280 C160 210 105 175 105 160 C105 145 160 110 160 40 Z",
                      fill: "url(#glassL)",
                      stroke: "currentColor",
                      strokeOpacity: "0.45",
                      strokeWidth: "1.2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("g", { clipPath: "url(#topBulbL)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.rect,
                    {
                      x: "40",
                      width: "120",
                      fill: "currentColor",
                      initial: false,
                      animate: started ? { y: 150, height: 5 } : { y: 40, height: 115 },
                      transition: started ? { duration: SAND_DURATION, ease: "linear" } : { duration: 0.3 }
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { clipPath: "url(#bottomBulbL)", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.rect,
                      {
                        x: "40",
                        width: "120",
                        fill: "currentColor",
                        initial: false,
                        animate: started ? { y: 175, height: 105 } : { y: 275, height: 5 },
                        transition: started ? { duration: SAND_DURATION, ease: "linear" } : { duration: 0.3 }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.ellipse,
                      {
                        cx: "100",
                        rx: "55",
                        ry: "10",
                        fill: "currentColor",
                        initial: false,
                        animate: started ? { cy: 175 } : { cy: 275 },
                        transition: started ? { duration: SAND_DURATION, ease: "linear" } : { duration: 0.3 }
                      }
                    )
                  ] }),
                  started && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.rect,
                    {
                      x: "99",
                      y: "155",
                      width: "2",
                      height: "120",
                      fill: "currentColor",
                      animate: { opacity: [0.9, 0.5, 0.9] },
                      transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      d: "M88 155 Q100 168 112 155",
                      stroke: "currentColor",
                      strokeOpacity: "0.6",
                      strokeWidth: "1",
                      fill: "none"
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-serif text-sm italic tracking-wide text-muted-foreground/60", children: started ? "Tempus fugit..." : "Toque para virar a ampulheta" })
      ]
    }
  ) });
}
const MAX_PARTICLES = 40;
const FADE_DURATION = 1400;
const SPAWN_INTERVAL = 30;
function makeSnowflakePath(variant) {
  switch (variant % 3) {
    case 0:
      return "M 0 -8 L 0 8 M -6.9 -4 L 6.9 4 M -6.9 4 L 6.9 -4 M 0 -5 L 2 -6 M 0 -5 L -2 -6 M 0 5 L 2 6 M 0 5 L -2 6 M 5 2 L 6 1 M 5 2 L 6 3 M -5 2 L -6 1 M -5 2 L -6 3 M 5 -2 L 6 -1 M 5 -2 L 6 -3 M -5 -2 L -6 -1 M -5 -2 L -6 -3";
    case 1:
      return "M 0 -7 L 0 7 M -6.1 -3.5 L 6.1 3.5 M -6.1 3.5 L 6.1 -3.5 M 0 -4 L 2 -5 M 0 -4 L -2 -5 M 0 4 L 2 5 M 0 4 L -2 5 M 4 2 L 5 1 M 4 2 L 5 3 M -4 2 L -5 1 M -4 2 L -5 3 M 4 -2 L 5 -1 M 4 -2 L 5 -3 M -4 -2 L -5 -1 M -4 -2 L -5 -3";
    case 2:
    default:
      return "M 0 -8 L 0 8 M -6.9 -4 L 6.9 4 M -6.9 4 L 6.9 -4 M 0 -5 L 2 -6 M 0 -5 L -2 -6 M 0 -3 L 2 -4 M 0 -3 L -2 -4 M 0 5 L 2 6 M 0 5 L -2 6 M 0 3 L 2 4 M 0 3 L -2 4 M 4 2 L 5 1 M 4 2 L 5 3 M -4 2 L -5 1 M -4 2 L -5 3 M 4 -2 L 5 -1 M 4 -2 L 5 -3 M -4 -2 L -5 -1 M -4 -2 L -5 -3";
  }
}
function CursorTrail() {
  const containerRef = reactExports.useRef(null);
  const particlesRef = reactExports.useRef([]);
  const lastSpawnRef = reactExports.useRef(0);
  const idCounterRef = reactExports.useRef(0);
  const mouseRef = reactExports.useRef({ x: -100, y: -100 });
  const rafRef = reactExports.useRef(0);
  const spawnExplosion = reactExports.useCallback((x, y, count) => {
    const now = Date.now();
    for (let i = 0; i < count; i++) {
      const angle = Math.PI * 2 * i / count + (Math.random() - 0.5) * 0.5;
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
        velY: Math.sin(angle) * speed
      });
    }
    if (particlesRef.current.length > MAX_PARTICLES * 2) {
      particlesRef.current = particlesRef.current.slice(-MAX_PARTICLES * 2);
    }
  }, []);
  const update = reactExports.useCallback(() => {
    const now = Date.now();
    const isMobile = window.innerWidth < 768;
    particlesRef.current = particlesRef.current.filter((p) => now - p.createdAt < FADE_DURATION);
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
        variant: id % 3
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
      if (p.velX !== void 0 && p.velY !== void 0) {
        x += p.velX * (elapsed / 16);
        y += p.velY * (elapsed / 16);
        currentOpacity = p.opacity * (1 - progress * 1.2);
      } else {
        y += progress * 6;
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
  reactExports.useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -100, y: -100 };
    };
    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        spawnExplosion(touch.clientX, touch.clientY, 10);
      }
    };
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
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
            variant: id % 3
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: containerRef,
      className: "pointer-events-none fixed inset-0 z-[60] text-foreground",
      "aria-hidden": true
    }
  );
}
function Index() {
  const [loaded, setLoaded] = reactExports.useState(false);
  const [deferredPrompt, setDeferredPrompt] = reactExports.useState(null);
  const handleLoadComplete = reactExports.useCallback(() => {
    setLoaded(true);
  }, []);
  reactExports.useEffect(() => {
    if (window.deferredPrompt) {
      setDeferredPrompt(window.deferredPrompt);
    }
    const onPromptAvailable = () => {
      if (window.deferredPrompt) {
        setDeferredPrompt(window.deferredPrompt);
      }
    };
    window.addEventListener("pwa-prompt-available", onPromptAvailable);
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => {
      window.removeEventListener("pwa-prompt-available", onPromptAvailable);
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);
  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const {
      outcome
    } = await deferredPrompt.userChoice;
    console.log("Install prompt outcome:", outcome);
    setDeferredPrompt(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AudioProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ThemeProvider, { children: [
    !loaded && /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, { onComplete: handleLoadComplete }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-background text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CursorTrail, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WindLines, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PosterFrame, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MusicPlayer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LifeCalendar, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Hourglass, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Kanban, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Notes, {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mx-auto mt-12 max-w-6xl border-t border-border px-4 py-8 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Memento Mori · Memento Vivere" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-6 max-w-2xl text-[11px] leading-relaxed text-muted-foreground sm:text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground/80", children: "Nota de Privacidade:" }),
              " Este dashboard opera de forma 100% local e privada. Todas as suas tarefas do Kanban, anotações e marcações do calendário são salvas exclusivamente no LocalStorage do seu próprio navegador. Não possuímos servidores nem banco de dados conectado. Limpar os dados ou formatar o seu navegador apagará permanentemente os seus registros."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto mt-16 max-w-4xl border-t border-border px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl italic tracking-wide", children: "Sobre o Memento Mori Dashboard" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "mt-6 font-serif text-lg italic text-muted-foreground/80", children: "“Lembre-se de que você é mortal.”" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm leading-relaxed text-muted-foreground", children: "Esta frase, que ecoava na Roma Antiga e moldou a filosofia estoica de pensadores como Sêneca e Marco Aurélio, não é um chamado à melancolia, mas sim um convite urgente à vida. O Memento Mori Dashboard é uma ferramenta digital projetada para transformar esse conceito abstrato em uma experiência visual e prática diária." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-10 font-serif text-lg italic text-foreground/80", children: "Como funciona e para que serve?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: "Nossa existência é preciosa, finita e medida pelo tempo. No coração deste site, sua jornada é representada por um calendário de semanas: cada pequeno quadrado equivale a uma semana da sua vida, distribuído ao longo de uma expectativa média de 80 anos. Ao visualizar claramente o bloco de semanas que já se passou e o espaço que ainda resta, você ganha um choque de realidade contra a procrastinação e o piloto automático." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: "Para ajudar você a extrair o máximo do seu tempo presente (Carpe Diem), combinamos a reflexão filosófica com ferramentas modernas de organização:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-left text-sm leading-relaxed text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground/80", children: "Calendário Interativo:" }),
                " Um ritual semanal para você marcar, de forma consciente, a semana que se encerrou."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground/80", children: "Quadro Kanban:" }),
                " Para direcionar seu foco diário no que realmente importa, organizando suas ações entre o que precisa ser feito, o que está em andamento e o que foi concluído."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground/80", children: "Espaço de Anotações:" }),
                " Um local para registrar insights, pensamentos e exercícios de sabedoria."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-10 font-serif text-lg italic text-foreground/80", children: "Privacidade e Filosofia Pura" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: "Em total alinhamento com a busca estoica pela autossuficiência e controle, este site opera de forma 100% local e privada. Não possuímos servidores e nenhum dado seu é enviado para a nuvem. Tudo o que você cria, anota ou gerencia fica salvo exclusivamente no armazenamento interno do seu próprio navegador. Seu progresso e suas reflexões pertencem estritamente a você." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-sm leading-relaxed text-muted-foreground/90", children: [
              "Use este espaço não para se preocupar com o fim, mas para garantir que cada quadradinho que você preencher tenha sido vivido com propósito, presença e sabedoria. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Tempus fugit." })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto mt-8 max-w-4xl border-t border-border px-4 py-12 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl italic tracking-wide text-foreground", children: "DEV CONNECT" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-lg mx-auto text-sm leading-relaxed text-muted-foreground", children: "Quer transformar sua ideia em realidade ou entrar em contato? Inicie uma conexão segura com o desenvolvedor." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contato", className: "inline-flex items-center justify-center rounded-lg bg-foreground text-background px-6 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-foreground/90 hover:scale-105 shadow-md border border-transparent hover:border-[#39FF14]/25 active:scale-95 cursor-pointer", children: "Iniciar Conexão" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto mt-2 max-w-4xl border-t border-border px-4 py-12 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl italic tracking-wide text-foreground", children: "APLICATIVO INTEGRADO (PWA)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-lg mx-auto text-sm leading-relaxed text-muted-foreground", children: "Este site funciona 100% offline, salvando seus dados localmente no navegador, e pode ser instalado como um aplicativo no seu celular ou computador para acesso rápido." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-col items-center justify-center gap-3", children: deferredPrompt ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleInstallClick, className: "inline-flex items-center justify-center rounded-lg bg-foreground text-background px-6 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-foreground/90 hover:scale-105 shadow-md border border-transparent hover:border-[#39FF14]/25 active:scale-95 cursor-pointer", children: "Instalar Aplicativo" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/80 italic max-w-md", children: 'Para instalar, abra o menu do seu navegador (como Chrome ou Safari) e selecione "Instalar" ou "Adicionar à tela de início".' }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto mt-8 max-w-4xl border-t border-border px-4 py-10 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-lg italic tracking-wide text-foreground/70", children: "Música de Fundo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs leading-relaxed text-muted-foreground", children: [
              "“you’re not the same, on a wintry day” por",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground/60", children: "tilekid" }),
              " · Adaptação:",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground/60", children: "Moliv" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.youtube.com/watch?v=Did7HDlezO0", target: "_blank", rel: "noopener noreferrer", className: "mt-2 inline-block text-[11px] text-muted-foreground/60 hover:text-foreground/80 underline underline-offset-2 transition-colors", children: "Ouvir original no YouTube →" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs italic text-muted-foreground/50", children: "Para uma experiência mais completa, acesse este site pelo computador." })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Index as component
};
