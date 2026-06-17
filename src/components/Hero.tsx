import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Phone, ArrowRight, ShieldCheck, Award, Star } from "lucide-react";

interface HeroProps {
  onQuoteClick: () => void;
  materialsImage: string;
}

export default function Hero({ onQuoteClick, materialsImage }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle class definition
    class Particle {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.5 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.3 ? "#0057B8" : "#FFC107";
      }

      update(mouseX: number, mouseY: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap boundaries
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Mouse interaction: attract particles gently
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          const force = (180 - dist) / 180;
          this.x -= (dx / dist) * force * 0.3;
          this.y -= (dy / dist) * force * 0.3;
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.globalAlpha = this.opacity;
        c.shadowBlur = 10;
        c.shadowColor = this.color;
        c.fill();
        c.globalAlpha = 1;
        c.shadowBlur = 0;
      }
    }

    const particles: Particle[] = Array.from({ length: 45 }, () => new Particle());
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      // Find coordinates relative to canvas
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.parentElement?.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update(mouseX, mouseY);
        p.draw(ctx);
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.parentElement?.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-[#F5F7FA] via-white to-white"
    >
      {/* Interactive Background Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Decorative Blur Glows */}
      <div className="absolute top-1/4 left-10 w-[35rem] h-[35rem] bg-[#0057B8]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[40rem] h-[40rem] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Background Dots Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Glowing Tag */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#0057B8]/10 border border-[#0057B8]/20 backdrop-blur-md mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#FFC107] animate-pulse" />
              <p className="font-sans text-[11px] font-bold text-[#0057B8] uppercase tracking-wider">
                Tradição & Qualidade • Itapetininga
              </p>
            </motion.div>

            {/* Main Premium Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6.5xl font-black text-neutral-900 tracking-tight leading-[1.05] mb-5">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700 font-extrabold"
              >
                Construindo Sonhos com
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] via-[#004BB3] to-[#003B7A] font-extrabold"
              >
                Qualidade e Confiança
                <span className="absolute -bottom-2 left-0 w-32 h-1.5 bg-gradient-to-r from-[#FFC107] to-amber-500 rounded-full" />
              </motion.span>
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sans text-base sm:text-lg text-neutral-600 font-medium max-w-xl leading-relaxed mb-9 mt-4"
            >
              Mais de uma referência em materiais para construção, reforma e acabamento em Itapetininga. O Alicerce forte para a obra das suas conquistas.
            </motion.p>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-10"
            >
              <button
                onClick={onQuoteClick}
                className="group relative flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0057B8] to-[#003B7A] text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 overflow-hidden cursor-pointer"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#004BB3] to-[#002B5C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar Orçamento
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                {/* Visual light highlight */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/10 opacity-40 group-hover:animate-shine" />
              </button>

              <a
                href="https://wa.me/5515998364546?text=Olá! Vim pelo site da Incomasa. Gostaria de solicitar um orçamento para materiais."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#F5F7FA] text-sm font-bold uppercase tracking-wider text-[#111111] hover:bg-neutral-100 active:bg-neutral-200 border border-neutral-200 transition-all duration-200"
              >
                <svg
                  className="h-5 w-5 fill-current text-green-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.661.988 3.298 1.488 4.814 1.489 5.518-.002 10.003-4.485 10.006-10.004.002-2.673-1.036-5.185-2.922-7.073-1.886-1.888-4.394-2.925-7.066-2.926-5.523 0-10.008 4.482-10.01 10.001-.001 1.748.462 3.456 1.341 4.965l-.973 3.551 3.64-.954zm10.941-6.84c-.267-.134-1.58-.78-1.822-.867-.243-.088-.419-.133-.596.133-.176.265-.682.866-.837 1.042-.154.177-.308.2-.575.066-.267-.134-1.13-.417-2.152-1.328-.793-.707-1.33-1.582-1.486-1.847-.156-.265-.017-.408.117-.541.12-.12.267-.31.4-.464.135-.155.18-.265.27-.442.09-.176.044-.332-.022-.464-.066-.134-.596-1.436-.816-1.966-.215-.518-.432-.447-.597-.456-.154-.008-.33-.01-.507-.01-.176 0-.464.066-.706.31-.242.243-.925.905-.925 2.21 0 1.305.949 2.564 1.08 2.741.133.177 1.868 2.853 4.525 4 .632.274 1.125.437 1.512.56.635.202 1.212.174 1.669.106.509-.076 1.58-.645 1.802-1.238.22-.593.22-1.102.154-1.208-.066-.106-.242-.176-.51-.31z" />
                </svg>
                <span>Falar no WhatsApp</span>
              </a>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center gap-7 border-t border-neutral-200/50 pt-8"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#0057B8]" />
                <span className="font-sans text-xs font-semibold text-neutral-700">Insumos Homologados</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-[#0057B8]" />
                <span className="font-sans text-xs font-semibold text-neutral-700">Satisfação 100% Google</span>
              </div>
            </motion.div>

          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Background Circles */}
            <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-[#0057B8]/20 to-amber-500/10 blur-3xl -z-10 animate-pulse" />
            
            {/* Interactive Frame wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,3,40,0.18)] border border-white/40 bg-white/20 backdrop-blur-md group"
            >
              {/* Glass subtle shines overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/10 z-10 pointer-events-none" />
              
              {/* Actual Generated Image with no-referrer policy */}
              <img
                src={materialsImage}
                alt="Materiais de Construção premium Incomasa"
                className="w-full h-full object-cover transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Floating Google Rating Sticker */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-[0_8px_16px_-2px_rgba(0,0,0,0.1)] border border-neutral-100"
              >
                <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                <span className="font-sans text-[11px] font-bold text-neutral-800">4,5 ★ Google</span>
              </motion.div>

              {/* Dark subtle shade info */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/30 to-transparent p-6 z-25 text-white flex justify-between items-end">
                <div>
                  <p className="font-display font-medium text-sm text-yellow-400">Qualidade Garantida</p>
                  <p className="font-sans text-[10px] opacity-75">Tijolos, areia, concreto e acabamentos finos</p>
                </div>
                <div className="bg-[#0057B8] px-3 py-1 rounded-lg text-[9px] font-bold tracking-widest uppercase">
                  Estoque Próprio
                </div>
              </div>

            </motion.div>

            {/* Glowing accents around the card */}
            <div className="absolute -inset-2 rounded-[36.5px] bg-[#0057B8]/5 blur-lg -z-20 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
