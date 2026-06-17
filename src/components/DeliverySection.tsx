import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Truck, Navigation, CheckCircle2, ShieldCheck, Clock, MapPin } from "lucide-react";
import { REGIONAL_ROUTES } from "../data";

interface DeliverySectionProps {
  truckImage: string;
}

export default function DeliverySection({ truckImage }: DeliverySectionProps) {
  const [hoveredCity, setHoveredCity] = useState<typeof REGIONAL_ROUTES[0] | null>(null);
  const [activePulse, setActivePulse] = useState(0);

  // Cycle a route highlight in background for premium life feeling
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePulse((prev) => (prev + 1) % REGIONAL_ROUTES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="entrega" className="relative py-24 bg-gradient-to-b from-[#F5F7FA] via-white to-white overflow-hidden">
      
      {/* Decorative gradient glowing spheres */}
      <div className="absolute top-1/4 left-5 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0057B8]/10 text-[#0057B8] mb-4">
            <Truck className="h-3.5 w-3.5 animate-bounce" />
            <span className="font-sans text-[10px] font-extrabold uppercase tracking-widest">Serviço de Logística</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4.5xl font-extrabold text-neutral-900 tracking-tight leading-none mb-4">
            Entregamos em Toda a Região
          </h2>
          <p className="font-sans text-sm sm:text-base text-neutral-600 max-w-lg mx-auto">
            Dispomos de frota dedicada com rastreamento integrado e operadores capacitados para depositar os fardos direto na sua calçada de forma segura.
          </p>
        </div>

        {/* Master Row Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Logistical Trust & Generated Image */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            
            <h3 className="font-display text-2xl font-black text-neutral-900 leading-snug mb-5">
              Sua Obra no Ritmo Certo, Sem Atrasos de Carga
            </h3>

            <p className="font-sans text-sm text-neutral-600 leading-relaxed mb-6">
              Entendemos que material de construção parado significa prejuízo e diárias de pedreiro desperdiçadas. Na Incomasa, planejamos rotas programadas diárias saindo do Jardim Shangri-La em Itapetininga para fornecer suporte a todo o círculo metropolitano.
            </p>

            {/* Quick check bullets */}
            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0057B8] shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-neutral-700 font-semibold">Carga Munck: Descarregamento mecânico suave para vigas pesadas.</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#0057B8] shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-neutral-700 font-semibold">Entrega Agendada: EscolhaTurno da manhã ou da tarde.</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-[#0057B8] shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-neutral-700 font-semibold">Segurança Integral: Peças finas cobertas e amarradas de fábrica.</span>
              </div>
            </div>

            {/* Premium Generated Truck Image with nice outline frame */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-neutral-200/50 aspect-[16/9] group"
            >
              <div className="absolute inset-0 bg-neutral-900/10 z-10 pointer-events-none group-hover:bg-transparent transition-colors" />
              <img
                src={truckImage}
                alt="Caminhão moderno de entrega Incomasa"
                className="w-full h-full object-cover object-[12%_50%] transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-4 z-20 bg-white/95 px-3 py-1.5 rounded-lg text-[10px] font-bold text-neutral-900 flex items-center gap-1.5 shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-[#0057B8]" />
                <span>Base Central: Itapetininga – SP</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Illustrated Regional Map */}
          <div className="lg:col-span-7">
            
            <div className="relative bg-neutral-950 p-6 sm:p-10 rounded-3.5xl border border-neutral-800 shadow-[0_20px_40px_-5px_rgba(0,3,30,0.15)] flex flex-col">
              
              {/* Map Title Tag */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">Simulador de Rotas Incomasa</h4>
                  <p className="font-sans text-[11px] text-neutral-400 mt-0.5">Passe o mouse nos marcadores para simular distâncias de entrega</p>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#0057B8]/20 text-[#0057B8] border border-blue-500/30 text-[9px] font-mono tracking-widest uppercase">
                  Logística Inteligente
                </span>
              </div>

              {/* Graphic Vector Canvas Area */}
              <div className="relative w-full aspect-[4/3] bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden select-none">
                
                {/* Tech coordinates grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:25px_25px]" />
                
                {/* Simulated Region Outline Graphic using SVG */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Decorative glowing background map elements */}
                  <path 
                    d="M 50,40 Q 75,30 85,55 T 50,75 T 25,60 Z" 
                    fill="none" 
                    stroke="rgba(0,87,184,0.12)" 
                    strokeWidth="4" 
                    strokeDasharray="4 6"
                  />

                  {/* Animated pulsate vectors from Central Hub to other cities */}
                  {REGIONAL_ROUTES.map((route, rIdx) => {
                    if (rIdx === 0) return null; // Skip central hub self-mapping
                    
                    const hubX = 50; // percentage
                    const hubY = 50; // percentage
                    const destX = route.coords.x;
                    const destY = route.coords.y;

                    // Compute pulse state matching
                    const isFocus = hoveredCity?.cityName === route.cityName || activePulse === rIdx;

                    return (
                      <g key={route.cityName}>
                        {/* Static connecting route trace */}
                        <line
                          x1={`${hubX}%`}
                          y1={`${hubY}%`}
                          x2={`${destX}%`}
                          y2={`${destY}%`}
                          stroke={isFocus ? "#0057B8" : "#ffffff10"}
                          strokeWidth={isFocus ? "2.5" : "1.5"}
                          className="transition-colors duration-300"
                        />

                        {/* Pulsing light comet node shot along the line path */}
                        {isFocus && (
                          <line
                            x1={`${hubX}%`}
                            y1={`${hubY}%`}
                            x2={`${destX}%`}
                            y2={`${destY}%`}
                            stroke="#FFC107"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            className="animate-[dash_2.8s_linear_infinite]"
                            style={{
                              strokeDasharray: "25 150",
                              animation: "dash 1.8s linear infinite"
                            }}
                          />
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* City Marker Pins as buttons */}
                {REGIONAL_ROUTES.map((route, rIdx) => {
                  const isHub = rIdx === 0;
                  const isHovered = hoveredCity?.cityName === route.cityName;
                  const isPulseFocused = activePulse === rIdx && !hoveredCity;

                  return (
                    <div
                      key={route.cityName}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-25 group"
                      style={{ left: `${route.coords.x}%`, top: `${route.coords.y}%` }}
                      onMouseEnter={() => setHoveredCity(route)}
                      onMouseLeave={() => setHoveredCity(null)}
                    >
                      {/* Outer pulsing ring */}
                      <div className={`absolute -inset-2.5 rounded-full transition-all duration-300 ${
                        isHub 
                          ? "bg-blue-500/20 animate-ping"
                          : isHovered || isPulseFocused 
                            ? "bg-amber-400/20 scale-125" 
                            : "bg-white/5 opacity-0"
                      }`} />

                      {/* Dot Anchor */}
                      <div className={`h-4.5 w-4.5 rounded-full border-2 flex items-center justify-center shadow-lg transition-all duration-300 ${
                        isHub 
                          ? "bg-[#0057B8] border-white scale-125" 
                          : isHovered || isPulseFocused 
                            ? "bg-[#FFC107] border-[#FFC107] scale-110" 
                            : "bg-neutral-800 border-neutral-600"
                      }`}>
                        {isHub && <Navigation className="h-2 w-2 text-white fill-current" />}
                      </div>

                      {/* Micro Float label tag */}
                      <p className={`absolute top-5 left-1/2 transform -translate-x-1/2 px-2 py-0.5 rounded text-[9px] font-bold whitespace-nowrap tracking-wide border transition-all duration-300 ${
                        isHub 
                          ? "bg-[#0057B8] text-white border-blue-400/30"
                          : isHovered || isPulseFocused
                            ? "bg-neutral-950 text-[#FFC107] border-[#FFC107]"
                            : "bg-neutral-900/80 text-neutral-400 border-neutral-800 hidden sm:block"
                      }`}>
                        {isHub ? "Sede Incomasa" : route.cityName}
                      </p>

                    </div>
                  );
                })}

              </div>

              {/* Dynamic Information Display Box */}
              <div className="mt-6 p-4 rounded-xl bg-neutral-900 border border-neutral-800 min-h-[95px] flex items-center justify-between text-left">
                {hoveredCity ? (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex-1 flex flex-col"
                  >
                    <p className="font-display text-sm font-bold text-amber-400 uppercase tracking-widest">
                      {hoveredCity.cityName === "Itapetininga (Centro/Sede)" ? "Sede Central (Itapetininga)" : `Destino: ${hoveredCity.cityName}`}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div>
                        <span className="block text-[10px] text-neutral-500 uppercase font-semibold">Distância de Trânsito</span>
                        <span className="text-sm font-sans font-bold text-white">{hoveredCity.distance}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-neutral-500 uppercase font-semibold">Previsão Logística</span>
                        <span className="text-sm font-sans font-bold text-[#0057B8]">{hoveredCity.time}</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex items-center gap-3 text-neutral-400 py-2">
                    <MapPin className="h-5 w-5 text-[#0057B8] animate-pulse" />
                    <p className="font-sans text-xs">Passe o mouse por cima de qualquer cidade do mapa para ver as vantagens de prazo imediato da nossa regional.</p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Inject custom CSS keyframes for line comet dashes animation inside React wrapper safely */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -150;
          }
        }
      `}</style>
    </section>
  );
}
