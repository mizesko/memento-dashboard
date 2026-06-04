import {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

type AudioContextType = {
  playing: boolean;
  toggle: () => void;
  startAudio: () => void;
};

const AudioCtx = createContext<AudioContextType>({
  playing: false,
  toggle: () => {},
  startAudio: () => {},
});

export function AudioProvider({ children }: { children: ReactNode }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio("/music.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    // Auto-play after a short delay (browser policies often block immediate autoplay)
    const playTimer = setTimeout(() => {
      audio
        .play()
        .then(() => {
          setPlaying(true);
          startedRef.current = true;
        })
        .catch(() => {
          // Browser blocked autoplay — user will need to click the button
          startedRef.current = false;
        });
    }, 500);

    return () => {
      clearTimeout(playTimer);
      audio.pause();
      audio.src = "";
    };
  }, []);

  const startAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || playing) return;
    audio.play().catch(() => {});
    setPlaying(true);
    startedRef.current = true;
  }, [playing]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => {});
      setPlaying(true);
    }
  }, [playing]);

  return <AudioCtx.Provider value={{ playing, toggle, startAudio }}>{children}</AudioCtx.Provider>;
}

export function useAudio() {
  return useContext(AudioCtx);
}
