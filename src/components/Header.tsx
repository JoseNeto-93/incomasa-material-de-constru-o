import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hammer, Menu, X, Phone } from "lucide-react";

interface HeaderProps {
  onQuoteClick: () => void;
}

export default function Header({ onQuoteClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Destaques", href: "#destaques" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Avaliações", href: "#avaliacoes" },
    { name: "Entrega", href: "#entrega" },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-neutral-200/50 py-3 shadow-[0_10px_30px_rgb(0,0,0,0.03)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-2.5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#0057B8] to-[#003B7A] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-md shadow-blue-500/10">
              <Hammer className="h-5 w-5 text-[#FFC107]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-black tracking-tight text-[#111111]">
                INCOMASA
              </span>
              <span className="font-sans text-[9px] font-bold tracking-[0.25em] text-[#0057B8] uppercase">
                Materiais de Construção
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="relative font-sans text-xs font-semibold uppercase tracking-wider text-neutral-600 hover:text-[#0057B8] transition-colors duration-200 py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#0057B8] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Call to Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5515998364546?text=Olá! Gostaria de consultar preços de materiais para minha obra."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-emerald-600 hover:bg-emerald-50 transition-colors duration-200 border border-emerald-200/50"
            >
              <Phone className="h-3.5 w-3.5 fill-current" />
              <span>(15) 99836-4546</span>
            </a>
            
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 10px 20px -5px rgba(0,87,184,0.3)" }}
              whileTap={{ scale: 0.98 }}
              onClick={onQuoteClick}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0057B8] to-[#003B7A] text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/10 cursor-pointer"
            >
              Solicitar Orçamento
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center p-2 rounded-xl text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors md:hidden"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-neutral-200"
          >
            <div className="px-5 py-6 space-y-4">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="block font-sans text-sm font-semibold uppercase tracking-wider text-neutral-700 hover:text-[#0057B8] py-2"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <div className="h-[1px] bg-neutral-200/50 my-4" />

              <div className="flex flex-col gap-3.5">
                <a
                  href="https://wa.me/5515998364546?text=Olá! Gostaria de consultar preços de materiais para minha obra."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-bold text-center text-white bg-emerald-500 hover:bg-emerald-600 transition-colors"
                >
                  <Phone className="h-4 w-4 fill-current" />
                  <span>Chamar no WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onQuoteClick();
                  }}
                  className="w-full py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider text-center text-white bg-[#0057B8] hover:bg-[#003B7A] transition-colors"
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
