import { useMemo } from "react";
import { useStore } from "@/lib/store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const YEARS = 80;
const WEEKS_PER_YEAR = 52;
const BLOCK_YEARS = 5;
const TOTAL = YEARS * WEEKS_PER_YEAR;
const BLOCKS = YEARS / BLOCK_YEARS;

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

      <div className="flex flex-col gap-3 sm:gap-4">
        {Array.from({ length: BLOCKS }).map((_, blockIdx) => {
          const startYear = blockIdx * BLOCK_YEARS;
          const cellsInBlock = BLOCK_YEARS * WEEKS_PER_YEAR;
          const startWeek = startYear * WEEKS_PER_YEAR;
          const ageLabel = (blockIdx + 1) * BLOCK_YEARS;
          return (
            <div key={blockIdx} className="flex items-end gap-2 sm:gap-3">
              <div
                className="grid flex-1 gap-[2px] sm:gap-[3px]"
                style={{ gridTemplateColumns: `repeat(${WEEKS_PER_YEAR}, minmax(0, 1fr))` }}
                role="grid"
                aria-label={`Anos ${startYear + 1} a ${startYear + BLOCK_YEARS}`}
              >
                {Array.from({ length: cellsInBlock }).map((_, i) => {
                  const globalIdx = startWeek + i;
                  const lived = globalIdx < weeksLived || painted.has(globalIdx);
                  return (
                    <button
                      key={globalIdx}
                      type="button"
                      onClick={() => togglePaintedWeek(globalIdx)}
                      aria-label={`Semana ${globalIdx + 1}`}
                      className={`aspect-square rounded-[1px] border transition-colors ${
                        lived
                          ? "border-cell-lived bg-cell-lived"
                          : "border-cell-empty bg-transparent hover:bg-cell-empty/40"
                      }`}
                    />
                  );
                })}
              </div>
              <div className="w-6 shrink-0 text-right font-serif text-[10px] italic text-muted-foreground sm:w-8 sm:text-xs">
                {ageLabel}
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Clique em qualquer quadrado vazio para marcá-lo manualmente.
      </p>
    </section>
  );
}
