import { createFileRoute, Link } from "@tanstack/react-router";
import { AudioProvider } from "@/lib/AudioContext";
import { ThemeProvider } from "@/components/memento/ThemeProvider";
import { DevConnect } from "@/components/memento/DevConnect";
import { MusicPlayer } from "@/components/memento/MusicPlayer";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Dev Connect - mizesko" },
      {
        name: "description",
        content: "Entre em contato com mizesko, Fullstack Developer.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <AudioProvider>
      <ThemeProvider>
        <div className="relative min-h-screen bg-black text-zinc-300 flex flex-col justify-center">
          {/* Floating Back Button */}
          <div className="absolute top-6 left-6 z-30">
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:border-[#39FF14]/30 text-zinc-400 hover:text-[#39FF14] transition-all duration-300 text-sm font-medium backdrop-blur-sm shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Dashboard
            </Link>
          </div>

          {/* Music Player */}
          <MusicPlayer />

          {/* Content Container */}
          <div className="w-full min-h-screen flex items-center justify-center">
            <DevConnect />
          </div>
        </div>
      </ThemeProvider>
    </AudioProvider>
  );
}
