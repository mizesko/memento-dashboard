import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/memento/ThemeProvider";
import { Header } from "@/components/memento/Header";
import { LifeCalendar } from "@/components/memento/LifeCalendar";
import { Hourglass } from "@/components/memento/Hourglass";
import { Kanban } from "@/components/memento/Kanban";
import { Notes } from "@/components/memento/Notes";
import { WindLines } from "@/components/memento/WindLines";
import { OliveBranches } from "@/components/memento/OliveBranches";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Memento Mori Dashboard" },
      {
        name: "description",
        content:
          "Visualize sua vida em semanas, organize tarefas e anotações. Um dashboard estoico minimalista.",
      },
      { property: "og:title", content: "Memento Mori Dashboard" },
      {
        property: "og:description",
        content: "Visualize sua vida em semanas e foque no que importa.",
      },
    ],
    links: [
      { rel: "manifest", href: "/manifest.json" },
      { rel: "icon", href: "/icon-192.svg", type: "image/svg+xml" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <WindLines />
        <OliveBranches />
        <div className="relative z-20">
          <Header />
          <main>
            <LifeCalendar />
            <Hourglass />
            <div className="mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-2">
              <Kanban />
              <Notes />
            </div>
            <footer className="mx-auto mt-12 max-w-6xl border-t border-border px-4 py-8 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Memento Mori · Memento Vivere
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                <span className="font-medium text-foreground/80">Nota de Privacidade:</span>{" "}
                Este dashboard opera de forma 100% local e privada. Todas as suas tarefas
                do Kanban, anotações e marcações do calendário são salvas exclusivamente
                no LocalStorage do seu próprio navegador. Não possuímos servidores nem
                banco de dados conectado. Limpar os dados ou formatar o seu navegador
                apagará permanentemente os seus registros.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
