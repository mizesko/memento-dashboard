import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AudioProvider, T as ThemeProvider, M as MusicPlayer } from "./MusicPlayer-BoOPjEK8.mjs";
import { A as ArrowLeft, R as RotateCcw, M as Mail, P as Phone, G as Github, a as Globe } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/zustand.mjs";
function DevConnect() {
  const containerRef = reactExports.useRef(null);
  const canvasRef = reactExports.useRef(null);
  const [startTyping, setStartTyping] = reactExports.useState(true);
  const [typedText, setTypedText] = reactExports.useState("");
  const [index, setIndex] = reactExports.useState(0);
  const [canvasReady, setCanvasReady] = reactExports.useState(false);
  const codeText = `// Iniciando conexao...
import { Developer } from 'world-class-talent';

const dev = {
  name: "mizesko",
  role: "Fullstack Developer",
  skills: ["vibe-coder", "Supabase", "AI Engineering", "DevOps", "Cibersecurity"],
  status: "disponivel_para_projetos"
};

const contato = {
  email: "mizeskowork16@gmail.com",
  whatsapp: "11986671095",
  location: "Brasil"
};

function falarComMizesko() {
  return "Vamos transformar sua ideia em realidade!";
}

// Digitacao concluida.`;
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement.clientHeight || 650;
      setCanvasReady(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    const kanjis = "零壱弐参肆伍陸漆捌玖拾百千万億吉凶日月火水木金土天地風雷生老病死愛誠信義勇礼知忠孝和平吉慶福禄寿神竜鳳凰桜梅松竹亀鶴森川海山";
    const alphabet = kanjis.split("");
    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);
    const rainDrops = Array.from({ length: columns }, () => Math.random() * -100);
    const colorSchemes = [
      "rgba(57, 255, 20, ",
      "rgba(188, 19, 254, ",
      "rgba(255, 0, 127, ",
      "rgba(0, 240, 255, "
    ];
    const columnColors = Array.from({ length: columns }, () => {
      const r = Math.random();
      if (r < 0.5) return colorSchemes[0];
      if (r < 0.75) return Math.random() < 0.5 ? colorSchemes[1] : colorSchemes[2];
      return colorSchemes[3];
    });
    const columnSpeeds = Array.from({ length: columns }, () => 0.8 + Math.random() * 1.2);
    let animationFrameId;
    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        const alpha = 0.3 + Math.random() * 0.7;
        ctx.fillStyle = columnColors[i] + alpha + ")";
        ctx.fillText(text, i * fontSize, rainDrops[i]);
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
  reactExports.useEffect(() => {
    if (!startTyping) return;
    if (index < codeText.length) {
      const char = codeText[index];
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref: containerRef,
      className: "relative w-full overflow-hidden bg-black/95 text-zinc-300 py-12 sm:py-16 px-3 sm:px-8 border-t border-zinc-900",
      translate: "no",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "canvas",
          {
            ref: canvasRef,
            className: `absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ${canvasReady ? "opacity-20" : "opacity-0"}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6 sm:gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl sm:text-3xl font-extrabold tracking-[0.2em] text-[#39FF14] uppercase drop-shadow-[0_0_12px_rgba(57,255,20,0.3)]", children: "DEV CONNECT" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[10px] sm:text-sm text-zinc-400 font-sans uppercase tracking-[0.1em]", children: "Vamos transformar sua ideia em realidade." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full bg-[#0a0a0a]/90 backdrop-blur-md rounded-xl border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.06)] overflow-hidden font-mono text-[12px] sm:text-[14px] leading-relaxed text-[#39FF14]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-[#121212]/95 border-b border-zinc-900 select-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500 text-[10px] sm:text-xs tracking-wider font-sans", children: "mizesko – dev" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handleRestart,
                  className: "text-zinc-500 hover:text-[#39FF14] hover:scale-110 active:scale-95 transition-all duration-200",
                  title: "Reiniciar Conexão",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 sm:p-7 overflow-x-auto min-h-[280px] sm:min-h-[380px] max-h-[400px] sm:max-h-[500px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { className: "whitespace-pre-wrap font-mono break-all notranslate", translate: "no", children: [
              typedText,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-pulse bg-[#39FF14] text-[#39FF14] ml-0.5 inline-block w-2 h-3 sm:w-2.5 sm:h-4 align-middle", children: "█" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col md:flex-row items-center md:items-stretch gap-4 sm:gap-5 mt-2 sm:mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.25)] shrink-0 flex items-center justify-center bg-zinc-950", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/mizesko.gif",
                alt: "mizesko - dev animated profile",
                className: "w-full h-full object-cover",
                onError: (e) => {
                  e.currentTarget.src = "https://github.com/mizesko.png";
                }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 flex-1 w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "mailto:mizeskowork16@gmail.com",
                  className: "group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/80 hover:border-emerald-500/30 hover:bg-zinc-900/85 hover:shadow-[0_0_15px_rgba(16,185,129,0.08)] transition-all duration-300 hover:-translate-y-0.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 sm:p-2.5 rounded-lg bg-zinc-950 text-zinc-400 group-hover:text-[#39FF14] group-hover:bg-emerald-950/20 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 sm:w-5 sm:h-5" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] tracking-widest text-zinc-500 uppercase font-bold font-sans", children: "EMAIL ME" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] sm:text-[13px] text-zinc-300 group-hover:text-white transition-colors font-medium break-all truncate", children: "mizeskowork16@gmail.com" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "https://wa.me/5511986671095",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/80 hover:border-emerald-500/30 hover:bg-zinc-900/85 hover:shadow-[0_0_15px_rgba(16,185,129,0.08)] transition-all duration-300 hover:-translate-y-0.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 sm:p-2.5 rounded-lg bg-zinc-950 text-zinc-400 group-hover:text-[#39FF14] group-hover:bg-emerald-950/20 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 sm:w-5 sm:h-5" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] tracking-widest text-zinc-500 uppercase font-bold font-sans", children: "WHATSAPP" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] sm:text-[13px] text-zinc-300 group-hover:text-white transition-colors font-medium break-all truncate", children: "+55 11 98667-1095" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "https://github.com/mizesko",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/80 hover:border-emerald-500/30 hover:bg-zinc-900/85 hover:shadow-[0_0_15px_rgba(16,185,129,0.08)] transition-all duration-300 hover:-translate-y-0.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 sm:p-2.5 rounded-lg bg-zinc-950 text-zinc-400 group-hover:text-[#39FF14] group-hover:bg-emerald-950/20 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "w-4 h-4 sm:w-5 sm:h-5" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] tracking-widest text-zinc-500 uppercase font-bold font-sans", children: "GITHUB" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] sm:text-[13px] text-zinc-300 group-hover:text-white transition-colors font-medium break-all truncate", children: "github.com/mizesko" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "https://portfolio-mizesko.vercel.app",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/80 hover:border-emerald-500/30 hover:bg-zinc-900/85 hover:shadow-[0_0_15px_rgba(16,185,129,0.08)] transition-all duration-300 hover:-translate-y-0.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 sm:p-2.5 rounded-lg bg-zinc-950 text-zinc-400 group-hover:text-[#39FF14] group-hover:bg-emerald-950/20 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4 sm:w-5 sm:h-5" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] tracking-widest text-zinc-500 uppercase font-bold font-sans", children: "PORTFOLIO" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] sm:text-[13px] text-zinc-300 group-hover:text-white transition-colors font-medium break-all truncate", children: "portfolio-mizesko.vercel.app" })
                    ] })
                  ]
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}
function ContatoPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AudioProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-black text-zinc-300 flex flex-col justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 left-6 z-30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:border-[#39FF14]/30 text-zinc-400 hover:text-[#39FF14] transition-all duration-300 text-sm font-medium backdrop-blur-sm shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
      "Voltar ao Dashboard"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MusicPlayer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DevConnect, {}) })
  ] }) }) });
}
export {
  ContatoPage as component
};
