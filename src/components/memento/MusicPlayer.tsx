import { Play, Pause } from "lucide-react";
import { useAudio } from "@/lib/AudioContext";

export function MusicPlayer() {
  const { playing, toggle } = useAudio();

  return (
    <div className="fixed bottom-4 left-4 sm:left-6 z-50">
      <button
        onClick={toggle}
        className="flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2.5 text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-all duration-300 text-xs uppercase tracking-widest"
        aria-label={playing ? "Pausar música" : "Tocar música"}
      >
        {playing ? (
          <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        ) : (
          <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        )}
        <span className="hidden sm:inline">{playing ? "Pausar" : "Play"}</span>
      </button>
    </div>
  );
}
