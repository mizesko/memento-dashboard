import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/memento/ThemeProvider";
import { Header } from "@/components/memento/Header";
import { LifeCalendar } from "@/components/memento/LifeCalendar";
import { Hourglass } from "@/components/memento/Hourglass";
import { Kanban } from "@/components/memento/Kanban";
import { Notes } from "@/components/memento/Notes";
import { WindLines } from "@/components/memento/WindLines";
import { PosterFrame } from "@/components/memento/PosterFrame";



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
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // Check if the prompt was already captured by the global head script
    if ((window as any).deferredPrompt) {
      setDeferredPrompt((window as any).deferredPrompt);
    }

    // Listen for the custom event dispatched by the head script
    const onPromptAvailable = () => {
      if ((window as any).deferredPrompt) {
        setDeferredPrompt((window as any).deferredPrompt);
      }
    };
    window.addEventListener("pwa-prompt-available", onPromptAvailable);

    // Also keep a direct listener as fallback
    const handler = (e: Event) => {
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
    const { outcome } = await deferredPrompt.userChoice;
    console.log("Install prompt outcome:", outcome);
    setDeferredPrompt(null);
  };

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <WindLines />
        <PosterFrame />
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
                <span className="font-medium text-foreground/80">Nota de Privacidade:</span> Este
                dashboard opera de forma 100% local e privada. Todas as suas tarefas do Kanban,
                anotações e marcações do calendário são salvas exclusivamente no LocalStorage do seu
                próprio navegador. Não possuímos servidores nem banco de dados conectado. Limpar os
                dados ou formatar o seu navegador apagará permanentemente os seus registros.
              </p>
            </footer>

            {/* Sobre o Memento Mori Dashboard */}
            <section className="mx-auto mt-16 max-w-4xl border-t border-border px-4 py-12">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-serif text-2xl italic tracking-wide">
                  Sobre o Memento Mori Dashboard
                </h2>
                <blockquote className="mt-6 font-serif text-lg italic text-muted-foreground/80">
                  &ldquo;Lembre-se de que você é mortal.&rdquo;
                </blockquote>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  Esta frase, que ecoava na Roma Antiga e moldou a filosofia estoica de pensadores
                  como Sêneca e Marco Aurélio, não é um chamado à melancolia, mas sim um convite
                  urgente à vida. O Memento Mori Dashboard é uma ferramenta digital projetada para
                  transformar esse conceito abstrato em uma experiência visual e prática diária.
                </p>
                <h3 className="mt-10 font-serif text-lg italic text-foreground/80">
                  Como funciona e para que serve?
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Nossa existência é preciosa, finita e medida pelo tempo. No coração deste site,
                  sua jornada é representada por um calendário de semanas: cada pequeno quadrado
                  equivale a uma semana da sua vida, distribuído ao longo de uma expectativa média
                  de 80 anos. Ao visualizar claramente o bloco de semanas que já se passou e o
                  espaço que ainda resta, você ganha um choque de realidade contra a procrastinação
                  e o piloto automático.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Para ajudar você a extrair o máximo do seu tempo presente (Carpe Diem), combinamos
                  a reflexão filosófica com ferramentas modernas de organização:
                </p>
                <ul className="mt-4 space-y-2 text-left text-sm leading-relaxed text-muted-foreground">
                  <li>
                    <strong className="text-foreground/80">Calendário Interativo:</strong> Um ritual
                    semanal para você marcar, de forma consciente, a semana que se encerrou.
                  </li>
                  <li>
                    <strong className="text-foreground/80">Quadro Kanban:</strong> Para direcionar
                    seu foco diário no que realmente importa, organizando suas ações entre o que
                    precisa ser feito, o que está em andamento e o que foi concluído.
                  </li>
                  <li>
                    <strong className="text-foreground/80">Espaço de Anotações:</strong> Um local
                    para registrar insights, pensamentos e exercícios de sabedoria.
                  </li>
                </ul>
                <h3 className="mt-10 font-serif text-lg italic text-foreground/80">
                  Privacidade e Filosofia Pura
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Em total alinhamento com a busca estoica pela autossuficiência e controle, este
                  site opera de forma 100% local e privada. Não possuímos servidores e nenhum dado
                  seu é enviado para a nuvem. Tudo o que você cria, anota ou gerencia fica salvo
                  exclusivamente no armazenamento interno do seu próprio navegador. Seu progresso e
                  suas reflexões pertencem estritamente a você.
                </p>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground/90">
                  Use este espaço não para se preocupar com o fim, mas para garantir que cada
                  quadradinho que você preencher tenha sido vivido com propósito, presença e
                  sabedoria. <em className="italic">Tempus fugit.</em>
                </p>
              </div>
            </section>
            {/* DEV CONNECT Redirect Section */}
            <section className="mx-auto mt-8 max-w-4xl border-t border-border px-4 py-12 text-center">
              <h2 className="font-serif text-2xl italic tracking-wide text-foreground">
                DEV CONNECT
              </h2>
              <p className="mt-4 max-w-lg mx-auto text-sm leading-relaxed text-muted-foreground">
                Quer transformar sua ideia em realidade ou entrar em contato? Inicie uma conexão segura com o desenvolvedor.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-6 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-foreground/90 hover:scale-105 shadow-md border border-transparent hover:border-[#39FF14]/25 active:scale-95 cursor-pointer"
                >
                  Iniciar Conexão
                </Link>
              </div>
            </section>

            {/* PWA Promo & Install Section */}
            <section className="mx-auto mt-2 max-w-4xl border-t border-border px-4 py-12 text-center">
              <h2 className="font-serif text-2xl italic tracking-wide text-foreground">
                APLICATIVO INTEGRADO (PWA)
              </h2>
              <p className="mt-4 max-w-lg mx-auto text-sm leading-relaxed text-muted-foreground">
                Este site funciona 100% offline, salvando seus dados localmente no navegador, e pode ser instalado como um aplicativo no seu celular ou computador para acesso rápido.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3">
                {deferredPrompt ? (
                  <button
                    onClick={handleInstallClick}
                    className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-6 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-foreground/90 hover:scale-105 shadow-md border border-transparent hover:border-[#39FF14]/25 active:scale-95 cursor-pointer"
                  >
                    Instalar Aplicativo
                  </button>
                ) : (
                  <p className="text-xs text-muted-foreground/80 italic max-w-md">
                    Para instalar, abra o menu do seu navegador (como Chrome ou Safari) e selecione &quot;Instalar&quot; ou &quot;Adicionar à tela de início&quot;.
                  </p>
                )}
              </div>
            </section>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
