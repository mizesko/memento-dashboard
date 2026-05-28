import { useMemo } from "react";
import { useStore } from "@/lib/store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const YEARS = 80;
const WEEKS_PER_YEAR = 52;
const TOTAL = YEARS * WEEKS_PER_YEAR;

export function LifeCalendar() {
  const { birthDate, setBirthDate, paintedWeeks, togglePaintedWeek } = useStore();


  const weeksLived = useMemo(() => {
    if (!birthDate) return 0;
    const b = new Date(birthDate).getTime();
    if (isNaN(b)) return 0;
    const diff = Date.now() - b;
    return Math.max(0, Math.min(TOTAL, Math.floor(diff / (1000 * 60 * 60 * 24 * 7))));
  }, [birthDate]);

  const painted = useMemo(() => new Set(paintedWeeks), [paintedWeeks]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-serif text-2xl italic">Sua vida em semanas</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            80 anos · 4.160 semanas · {weeksLived.toLocaleString()} vividas ·{" "}
            {(TOTAL - weeksLived).toLocaleString()} restantes
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="bd" className="text-xs uppercase tracking-widest text-muted-foreground">
            Data de nascimento
          </Label>
          <Input
            id="bd"
            type="date"
            value={birthDate ?? ""}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full sm:w-52"
          />
        </div>
      </div>

      <div
        className="grid gap-[2px] sm:gap-[3px]"
        style={{ gridTemplateColumns: `repeat(${WEEKS_PER_YEAR}, minmax(0, 1fr))` }}
        role="grid"
        aria-label="Calendário Memento Mori"
      >
        {Array.from({ length: TOTAL }).map((_, i) => {
          const lived = i < weeksLived || painted.has(i);
          return (
            <button
              key={i}
              type="button"
              onClick={() => togglePaintedWeek(i)}
              aria-label={`Semana ${i + 1}`}
              className={`aspect-square rounded-[1px] border transition-colors ${
                lived
                  ? "border-cell-lived bg-cell-lived"
                  : "border-cell-empty bg-transparent hover:bg-cell-empty/40"
              }`}
            />
          );
        })}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Clique em qualquer quadrado vazio para marcá-lo manualmente.
      </p>
    </section>
  );
}
