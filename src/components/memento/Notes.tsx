import { Plus, Trash2 } from "lucide-react";
import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function Notes() {
  const { notes, addNote, updateNote, deleteNote } = useStore();
  return (
    <section className="px-4 py-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-serif text-2xl italic">Anotações</h2>
        <Button size="icon" variant="outline" onClick={() => addNote()} aria-label="Nova nota">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-col gap-3">
        {notes.length === 0 && (
          <p className="text-sm text-muted-foreground">Nenhuma anotação ainda.</p>
        )}
        {notes.map((n) => (
          <div key={n.id} className="rounded-lg border border-border bg-card p-3">
            <Textarea
              value={n.content}
              onChange={(e) => updateNote(n.id, e.target.value)}
              placeholder="Escreva algo…"
              className="min-h-[100px] resize-y border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
            />
            <div className="mt-2 flex items-center justify-between border-t border-border pt-2 text-xs text-muted-foreground">
              <span>{new Date(n.updatedAt).toLocaleString()}</span>
              <button
                onClick={() => deleteNote(n.id)}
                className="opacity-60 transition hover:opacity-100"
                aria-label="Excluir nota"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
