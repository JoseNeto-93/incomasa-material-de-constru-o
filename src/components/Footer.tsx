import { MouseEvent } from "react";
import { Hammer, MapPin, Phone, Clock, Instagram, Facebook, Share2 } from "lucide-react";

interface FooterProps {
  onQuoteClick: () => void;
}

export default function Footer({ onQuoteClick }: FooterProps) {
  
  const handleScrollToTop = (e: MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Destaques", href: "#destaques" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Avaliações", href: "#avaliacoes" },
    { name: "Entrega Regional", href: "#entrega" },
  ];

  return (
    <footer className="relative bg-[#111111] text-white pt-20 pb-10 overflow-hidden border-t border-neutral-800">
      
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#0057B8]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <a
              href="#home"
              onClick={handleScrollToTop}
              className="flex items-center gap-2.5 mb-6 group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0057B8] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-blue-500/15">
                <Hammer className="h-5 w-5 text-[#FFC107]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-black tracking-tight text-white">
                  INCOMASA
                </span>
                <span className="font-sans text-[9px] font-bold tracking-[0.25em] text-blue-400 uppercase">
                  Materiais de Construção
                </span>
              </div>
            </a>

            <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6 max-w-sm">
              Incomasa é a referência em materiais de construção e acabamento em Itapetininga/SP. Construindo parcerias sólidas há anos com qualidade estrutural garantida.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-blue-500 hover:text-blue-500 text-neutral-400 flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-4.5 w-4.5 fill-current" />
              </a>

              <a
                href="https://www.instagram.com/incomasamaterias/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-pink-500 hover:text-pink-500 text-neutral-400 flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Incomasa - Materiais de Construção',
                      text: 'Site institucional Incomasa - Materiais de construção em Itapetininga.',
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link do site copiado para a área de transferência!");
                  }
                }}
                className="h-10 w-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-amber-400 hover:text-amber-400 text-neutral-400 flex items-center justify-center transition-all duration-200 cursor-pointer"
                aria-label="Compartilhar"
              >
                <Share2 className="h-4.5 w-4.5" />
              </button>
            </div>

          </div>

          {/* Column 2: Anchor links */}
          <div className="lg:col-span-2 text-left">
            <h4 className="font-display text-sm font-bold tracking-wider text-white uppercase mb-6">
              Navegação
            </h4>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-xs text-neutral-400 hover:text-[#FFC107] transition-all duration-150"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Opening hours */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-display text-sm font-bold tracking-wider text-white uppercase mb-6">
              Incomasa Fatos
            </h4>

            <div className="space-y-4 text-xs font-sans text-neutral-300">
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white mb-0.5">Visite nossa loja</span>
                  Av. Padre Antônio Brunetti, 1135<br />
                  Jardim Shangri-La<br />
                  Itapetininga – SP
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="h-4.5 w-4.5 text-blue-500 shrink-0" />
                <div>
                  <span className="block font-bold text-white mb-0.5">Telefone Comercial</span>
                  (15) 99836-4546
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="h-4.5 w-4.5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white mb-0.5">Horário de Funcionamento</span>
                  Segunda a Sexta: <span className="text-[#FFC107]">07:30 às 18:00</span><br />
                  Sábado: <span className="text-[#FFC107]">07:30 às 12:30</span>
                </div>
              </div>

            </div>
          </div>

          {/* Column 4: Embedded Google Maps in Iframe */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-display text-sm font-bold tracking-wider text-white uppercase mb-6">
              Como Chegar
            </h4>
            
            <div className="w-full h-40 rounded-2xl overflow-hidden border border-neutral-800 p-0.5 bg-neutral-900/60 shadow-inner">
              <iframe
                title="Localização Física da Incomasa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4340798151246!2d-48.06556108502102!3d-23.62463328465053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5cc8b69324ebd%3A0xe54e1df3750529cc!2sAv.%20Padre%20Ant%C3%B4nio%20Brunetti%2C%201135%20-%20Vila%20Rio%20Branco%2C%20Itapetininga%20-%20SP%2C%2018208-110!5e0!3m2!1spt-BR!2sbr!4v1655160000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                className="rounded-xl border-0 grayscale invert opacity-75 hover:opacity-100 transition-opacity"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <button
              onClick={onQuoteClick}
              className="w-full mt-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0057B8] to-[#003B7A] hover:opacity-90 text-[10px] font-black uppercase tracking-widest text-[#FFC107] cursor-pointer"
            >
              Fazer Orçamento Online
            </button>
          </div>

        </div>

        {/* Brand Copyright and Legal Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-neutral-500">
          <p>© 2026 Incomasa - Materiais de Construção. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Termos de Uso</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Política de Privacidade</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
