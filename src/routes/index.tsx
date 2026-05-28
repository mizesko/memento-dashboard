import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/memento/ThemeProvider";
import { Header } from "@/components/memento/Header";
import { LifeCalendar } from "@/components/memento/LifeCalendar";
import { Hourglass } from "@/components/memento/Hourglass";
import { Kanban } from "@/components/memento/Kanban";
import { Notes } from "@/components/memento/Notes";

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
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <LifeCalendar />
          <Hourglass />
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            <Kanban />
            <Notes />
          </div>
          <footer className="mx-auto max-w-6xl border-t border-border px-4 py-8 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Memento Mori · Memento Vivere
          </footer>
        </main>
      </div>
    </ThemeProvider>
  );
}
