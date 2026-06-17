import { motion } from "motion/react";
import { HardHat, Truck, BadgePercent, HeartHandshake, Sparkles, Files } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "Produtos de Qualidade",
      icon: HardHat,
      color: "from-blue-500 to-indigo-600",
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
      description: "Marcas certificadas nacionais e internacionais garantindo a máxima resistência mecânica e estrutural do seu imóvel."
    },
    {
      title: "Entrega Rápida",
      icon: Truck,
      color: "from-amber-500 to-orange-600",
      bg: "bg-amber-50",
      iconColor: "text-amber-600",
      description: "Logística integrada e frota própria equipada para descarregar areia, pedra e cargas pesadas exatamente onde você planejou."
    },
    {
      title: "Preços Competitivos",
      icon: BadgePercent,
      color: "from-emerald-500 to-teal-600",
      bg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      description: "Negociação direta com usinas de cimento e siderúrgicas para repassar as melhores tarifas e possibilidades de parcelamento."
    },
    {
      title: "Atendimento Especializado",
      icon: HeartHandshake,
      color: "from-purple-500 to-pink-600",
      bg: "bg-purple-50",
      iconColor: "text-purple-600",
      description: "Consultores engenhosos prontos para analisar seu projeto ou lista de corte de ferragens com total atenção e exatidão."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="sobre" className="relative py-24 bg-white overflow-hidden">
      
      {/* Visual background accents */}
      <div className="absolute top-1/4 right-[5%] w-72 h-72 bg-gradient-to-tr from-neutral-100 to-neutral-200/40 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-[#0057B8]/5 rounded-full blur-[110px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Brand Story Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-neutral-200 text-neutral-800 mb-6 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-[#0057B8]" />
              <span className="font-sans text-[10px] font-bold tracking-widest uppercase">Quem Somos</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4.5xl font-extrabold text-neutral-900 tracking-tight leading-[1.1] mb-6">
              Tradição e Qualidade que Constroem Histórias
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-[#0057B8] to-[#FFC107] rounded-full mb-8" />

            <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
              A <strong className="text-neutral-900 font-semibold">Incomasa</strong> é referência máxima em materiais de construção na região de Itapetininga. Há anos, nossa premissa é oferecer muito mais do que insumos: entregamos a segurança, o respeito e a credibilidade fundamentais para erguer sonhos.
            </p>

            <p className="font-sans text-sm text-neutral-500 leading-relaxed mb-8">
              Atendemos de projetos residenciais particulares a empreiteiras corporativas, aliando parcerias de grandes marcas industriais brasileiros a uma logística impecável, assegurando que seu cronograma de concretagem transcorra sem qualquer imprevisto.
            </p>

            {/* Quick interactive stamp */}
            <div className="flex gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-100">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0057B8]/10 text-[#0057B8]">
                <Files className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-neutral-900">Calculadoras de Materiais</h4>
                <p className="font-sans text-xs text-neutral-500 mt-0.5">
                  Nossos profissionais analisam seu projeto para orçar a quantidade ideal de tijolos e sacos, evitando sobras inúteis.
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Grid of Cards (Scroll Reveal) */}
          <div className="lg:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {cards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -8, 
                      boxShadow: "0 22px 35px -10px rgba(0,0,0,0.06)", 
                      borderColor: "#0057B8" 
                    }}
                    className="group border border-neutral-100 bg-gradient-to-b from-white to-slate-50/50 p-6 sm:p-8 rounded-2.5xl transition-all duration-300 flex flex-col hover:border-blue-200"
                  >
                    
                    {/* Rounded Icon Box with glowing effect */}
                    <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0057B8]/10 text-[#0057B8] transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-7 w-7 text-[#0057B8]" />
                      <div className="absolute inset-0 rounded-2xl bg-[#0057B8]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <h3 className="font-display text-lg font-bold text-neutral-900 group-hover:text-[#0057B8] transition-colors duration-200 mb-2">
                      {card.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed mt-1">
                      {card.description}
                    </p>

                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
