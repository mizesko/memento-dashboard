import { useEffect, useRef, useState } from "react";
import { RotateCcw, Mail, Phone, Github, Globe } from "lucide-react";

export function DevConnect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [startTyping, setStartTyping] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  const codeText = `// Iniciando conexão...
import { Developer } from 'world-class-talent';

const dev = {
  name: "mizesko",
  role: "Fullstack Developer",
  skills: ["vibe-coder", "Supabase", "AI Engineering", "DevOps", "Cibersecurity"],
  status: "disponível_para_projetos"
};

const contato = {
  email: "mizeskowork16@gmail.com",
  whatsapp: "11986671095",
  location: "Brasil"
};

function falarComMizesko() {
  return "Vamos transformar sua ideia em realidade!";
}

// Digitação concluída.`;

  // 1. Matrix Rain canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 650;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Kanjis and symbols
    const kanjis = "零壱弐参肆伍陸漆捌玖拾百千万億吉凶日月火水木金土天地風雷生老病死愛誠信義勇礼知忠孝和平吉慶福禄寿神竜鳳凰桜梅松竹亀鶴森川海山";
    const alphabet = kanjis.split("");

    const fontSize = 15;
    const columns = Math.ceil(canvas.width / fontSize);

    // Initial drops y coordinates
    const rainDrops = Array.from({ length: columns }, () => Math.random() * -100);

    // Color choices
    const colorSchemes = [
      "rgba(57, 255, 20, ",   // Neon Green
      "rgba(188, 19, 254, ",  // Neon Purple
      "rgba(255, 0, 127, ",   // Neon Pink
      "rgba(0, 240, 255, "    // Neon Cyan
    ];

    // Map each column to a specific color palette & speed
    const columnColors = Array.from({ length: columns }, () => {
      const r = Math.random();
      if (r < 0.5) return colorSchemes[0]; // 50% Green
      if (r < 0.75) return Math.random() < 0.5 ? colorSchemes[1] : colorSchemes[2]; // 25% Purple/Pink
      return colorSchemes[3]; // 25% Cyan
    });

    const columnSpeeds = Array.from({ length: columns }, () => 0.8 + Math.random() * 1.2);

    let animationFrameId: number;

    const draw = () => {
      // Clear with transparency to create trail
      ctx.fillStyle = "rgba(10, 10, 10, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        
        // Random transparency for extra depth
        const alpha = 0.3 + Math.random() * 0.7;
        ctx.fillStyle = columnColors[i] + alpha + ")";
        
        ctx.fillText(text, i * fontSize, rainDrops[i]);

        // Reset column to top once it hits bottom
        if (rainDrops[i] > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        } else {
          rainDrops[i] += fontSize * 0.5 * columnSpeeds[i];
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);


  // 3. Typewriter animation loop
  useEffect(() => {
    if (!startTyping) return;
    if (index < codeText.length) {
      const char = codeText[index];
      // Random delay to make typing look more natural (10ms - 25ms)
      const delay = char === "\n" ? 100 : 12 + Math.random() * 12;

      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + char);
        setIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [index, startTyping, codeText]);

  const handleRestart = () => {
    setTypedText("");
    setIndex(0);
    setStartTyping(true);
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-black/95 text-zinc-300 py-16 px-4 md:px-8 border-t border-zinc-900"
    >
      {/* Canvas background for Matrix rain */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Title & Subtitle */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-[0.2em] text-[#39FF14] uppercase drop-shadow-[0_0_12px_rgba(57,255,20,0.3)]">
            DEV CONNECT
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-sans uppercase tracking-[0.1em]">
            Vamos transformar sua ideia em realidade.
          </p>
        </div>

        {/* Terminal Box */}
        <div className="w-full bg-[#0a0a0a]/90 backdrop-blur-md rounded-xl border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.06)] overflow-hidden font-mono text-[13px] sm:text-[14px] leading-relaxed text-[#39FF14]">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#121212]/95 border-b border-zinc-900 select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-zinc-500 text-xs tracking-wider font-sans">mizesko – dev</span>
            <button
              onClick={handleRestart}
              className="text-zinc-500 hover:text-[#39FF14] hover:scale-110 active:scale-95 transition-all duration-200"
              title="Reiniciar Conexão"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
          
          {/* Content Code Area */}
          <div className="p-5 sm:p-7 overflow-x-auto min-h-[380px] max-h-[500px]">
            <pre className="whitespace-pre-wrap font-mono">
              {typedText}
              <span className="animate-pulse bg-[#39FF14] text-[#39FF14] ml-0.5 inline-block w-2.5 h-4 align-middle">█</span>
            </pre>
          </div>
        </div>

        {/* Contact Profiles Row */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-stretch gap-5 mt-4">
          
          {/* Profile GIF Container */}
          <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.25)] shrink-0 flex items-center justify-center bg-zinc-950">
            <img
              src="/mizesko.gif"
              alt="mizesko - dev animated profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback in case of asset path issues
                e.currentTarget.src = "https://github.com/mizesko.png";
              }}
            />
          </div>

          {/* Contact Redirect Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
            
            {/* Email card */}
            <a
              href="mailto:mizeskowork16@gmail.com"
              className="group flex items-center gap-4 p-4 rounded-xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/80 hover:border-emerald-500/30 hover:bg-zinc-900/85 hover:shadow-[0_0_15px_rgba(16,185,129,0.08)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="p-2.5 rounded-lg bg-zinc-950 text-zinc-400 group-hover:text-[#39FF14] group-hover:bg-emerald-950/20 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-bold font-sans">
                  EMAIL ME
                </span>
                <span className="text-xs sm:text-[13px] text-zinc-300 group-hover:text-white transition-colors font-medium break-all truncate">
                  mizeskowork16@gmail.com
                </span>
              </div>
            </a>

            {/* Whatsapp card */}
            <a
              href="https://wa.me/5511986671095"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/80 hover:border-emerald-500/30 hover:bg-zinc-900/85 hover:shadow-[0_0_15px_rgba(16,185,129,0.08)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="p-2.5 rounded-lg bg-zinc-950 text-zinc-400 group-hover:text-[#39FF14] group-hover:bg-emerald-950/20 transition-all duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-bold font-sans">
                  WHATSAPP
                </span>
                <span className="text-xs sm:text-[13px] text-zinc-300 group-hover:text-white transition-colors font-medium break-all truncate">
                  +55 11 98667-1095
                </span>
              </div>
            </a>

            {/* Github card */}
            <a
              href="https://github.com/mizesko"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/80 hover:border-emerald-500/30 hover:bg-zinc-900/85 hover:shadow-[0_0_15px_rgba(16,185,129,0.08)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="p-2.5 rounded-lg bg-zinc-950 text-zinc-400 group-hover:text-[#39FF14] group-hover:bg-emerald-950/20 transition-all duration-300">
                <Github className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-bold font-sans">
                  GITHUB
                </span>
                <span className="text-xs sm:text-[13px] text-zinc-300 group-hover:text-white transition-colors font-medium break-all truncate">
                  github.com/mizesko
                </span>
              </div>
            </a>

            {/* Portfolio card */}
            <a
              href="https://portfolio-mizesko.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/80 hover:border-emerald-500/30 hover:bg-zinc-900/85 hover:shadow-[0_0_15px_rgba(16,185,129,0.08)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="p-2.5 rounded-lg bg-zinc-950 text-zinc-400 group-hover:text-[#39FF14] group-hover:bg-emerald-950/20 transition-all duration-300">
                <Globe className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-bold font-sans">
                  PORTFÓLIO
                </span>
                <span className="text-xs sm:text-[13px] text-zinc-300 group-hover:text-white transition-colors font-medium break-all truncate">
                  portfolio-mizesko.vercel.app
                </span>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
