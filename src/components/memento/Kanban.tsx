import { useState } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  useDraggable,
  useDroppable,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { Plus, X } from "lucide-react";
import { useStore, type ColumnId, type Task } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const COLUMNS: { id: ColumnId; label: string }[] = [
  { id: "todo", label: "A Fazer" },
  { id: "doing", label: "Fazendo" },
  { id: "done", label: "Feito" },
];

function TaskCard({ task }: { task: Task }) {
  const { deleteTask } = useStore();
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: task.id });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={`group flex items-start justify-between gap-2 rounded-md border border-border bg-card p-3 text-sm shadow-sm transition ${
        isDragging ? "opacity-30" : "hover:border-foreground/40"
      }`}
    >
      <span className="flex-1 cursor-grab break-words">{task.title}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(task.id);
        }}
        className="opacity-0 transition group-hover:opacity-60 hover:!opacity-100"
        aria-label="Excluir tarefa"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

function Column({ id, label, tasks }: { id: ColumnId; label: string; tasks: Task[] }) {
  const { setNodeRef, isOver } = useDroppable({ id });
  return (
    <div
      ref={setNodeRef}
      className={`flex min-h-[200px] flex-col gap-3 rounded-lg border border-border p-3 transition ${
        isOver ? "bg-accent" : "bg-muted/30"
      }`}
    >
      <div className="flex items-center justify-between px-1">
        <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</h3>
        <span className="text-xs text-muted-foreground">{tasks.length}</span>
      </div>
      <div className="flex flex-col gap-2">
        {tasks.map((t) => (
          <TaskCard key={t.id} task={t} />
        ))}
      </div>
    </div>
  );
}

export function Kanban() {
  const { tasks, addTask, moveTask } = useStore();
  const [title, setTitle] = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }));

  const onDragStart = (e: DragStartEvent) => setActiveId(String(e.active.id));
  const onDragEnd = (e: DragEndEvent) => {
    setActiveId(null);
    if (e.over) moveTask(String(e.active.id), e.over.id as ColumnId);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title.trim());
    setTitle("");
  };

  const active = tasks.find((t) => t.id === activeId);

  return (
    <section className="px-4 py-6">
      <h2 className="mb-4 font-serif text-2xl italic">Kanban</h2>
      <form onSubmit={submit} className="mb-4 flex gap-2">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nova tarefa…"
        />
        <Button type="submit" size="icon" aria-label="Adicionar">
          <Plus className="h-4 w-4" />
        </Button>
      </form>
      <DndContext sensors={sensors} onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <div className="grid gap-3 md:grid-cols-3">
          {COLUMNS.map((c) => (
            <Column
              key={c.id}
              id={c.id}
              label={c.label}
              tasks={tasks.filter((t) => t.column === c.id)}
            />
          ))}
        </div>
        <DragOverlay>
          {active ? (
            <div className="rounded-md border border-foreground/40 bg-card p-3 text-sm shadow-lg">
              {active.title}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </section>
  );
}
