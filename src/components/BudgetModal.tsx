import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Plus, Minus, Trash2, Send, ShoppingCart, User, Phone, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { REGIONAL_ROUTES } from "../data";

interface BudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProducts: string[];
  onRemoveProduct: (productName: string) => void;
  onAddProduct: (productName: string) => void;
}

interface CartItem {
  name: string;
  quantity: number;
}

export default function BudgetModal({
  isOpen,
  onClose,
  selectedProducts,
  onRemoveProduct,
  onAddProduct
}: BudgetModalProps) {
  const [step, setStep] = useState(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // Buyer Details State
  const [buyerName, setBuyerName] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [deliveryCity, setDeliveryCity] = useState("Itapetininga (Centro/Sede)");
  
  // Synchronize cart state with selectedProducts array from index state
  useEffect(() => {
    setCart((prevCart) => {
      // 1. Keep values for existing ones
      const updatedCart = selectedProducts.map((p) => {
        const existing = prevCart.find((c) => c.name === p);
        return {
          name: p,
          quantity: existing ? existing.quantity : 10 // Default structural quantity
        };
      });
      return updatedCart;
    });

    if (selectedProducts.length > 0 && step === 1 && cart.length === 0) {
      // Stay on step 1 but sync
    }
  }, [selectedProducts]);

  const handleUpdateQty = (name: string, amt: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.name === name) {
          const newQty = Math.max(1, item.quantity + amt);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const handleRemoveItemFromModal = (name: string) => {
    onRemoveProduct(name);
  };

  const handleSubmitBudget = (e: FormEvent) => {
    e.preventDefault();
    if (!buyerName || !buyerPhone) return;

    // Compile WhatsApp Template
    let message = `Olá, Comercial Incomasa! Solicitou uma COTAÇÃO DE MATERIAIS pelo site:\n\n`;
    message += `👤 *Nome:* ${buyerName}\n`;
    message += `📞 *Telefone:* ${buyerPhone}\n`;
    message += `📍 *Entrega:* ${deliveryCity}\n\n`;
    message += `🧱 *PRODUTOS SELECIONADOS:*\n`;

    cart.forEach((item) => {
      message += `• ${item.quantity} un x _${item.name}_\n`;
    });

    message += `\n*Aguardando agendamento comercial de carregamento e orçamento de frete.*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5515998364546?text=${encodedMessage}`;
    
    // Jump to success step, then open WhatsApp in a new tab
    setStep(3);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1200);
  };

  // Pre-load common items so customers can quickly build a cart if empty
  const defaultSugestions = [
    "Cimento CP-II (Saco 50kg)",
    "Tijolo Baiano 9 Furos",
    "Areia Lavada Média",
    "Pedra Brita Nº 1 e Nº 0"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Blur filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/60 backdrop-blur-md"
          />

          {/* Modal Card content */}
          <motion.div
            initial={{ scale: 0.93, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.93, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.25)] border border-neutral-100 z-10 flex flex-col max-h-[85vh]"
          >
            
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-[#003B7A] to-[#0057B8] text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-[#FFC107]">
                  <ShoppingCart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight">Simulador de Orçamentos</h3>
                  <p className="font-sans text-[11px] text-neutral-200">Adicione materiais e peça preços via WhatsApp</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Stepper Progress bar indicators */}
            <div className="px-6 py-3 bg-slate-50 border-b border-neutral-100 flex items-center gap-1.5 text-xs text-neutral-400 font-semibold shrink-0">
              <span className={step === 1 ? "text-[#0057B8] font-bold" : "opacity-60"}>1. Listagem</span>
              <span className="opacity-30">/</span>
              <span className={step === 2 ? "text-[#0057B8] font-bold" : "opacity-60"}>2. Informações de Entrega</span>
              <span className="opacity-30">/</span>
              <span className={step === 3 ? "text-emerald-600 font-bold" : "opacity-60"}>3. Sucesso</span>
            </div>

            {/* Step 1: List selection */}
            {step === 1 && (
              <div className="p-6 overflow-y-auto flex-1 flex flex-col min-h-0">
                {cart.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center py-8 text-center">
                    <span className="text-3xl mb-4">🛒</span>
                    <h4 className="font-display font-bold text-neutral-800">Sua lista está vazia</h4>
                    <p className="font-sans text-xs text-neutral-500 max-w-xs mt-1">
                      Adicione itens navegando em nossas seções de categorias ou clique nos botões rápidos abaixo:
                    </p>

                    <div className="w-full space-y-2 mt-6">
                      {defaultSugestions.map((sug) => (
                        <button
                          key={sug}
                          onClick={() => onAddProduct(sug)}
                          className="flex items-center justify-between w-full p-2.5 rounded-xl border border-neutral-200 hover:border-[#0057B8] text-xs font-bold text-neutral-700 bg-slate-50 hover:bg-blue-50/20 text-left transition-colors cursor-pointer"
                        >
                          <span>{sug}</span>
                          <span className="text-[#0057B8] hover:underline">+ Adicionar</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col min-h-0">
                    <h4 className="font-sans text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-3 shrink-0">
                      Itens para Orçar:
                    </h4>

                    {/* Scrollable list content */}
                    <div className="space-y-2.5 overflow-y-auto flex-1 pr-1">
                      {cart.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center justify-between p-3 rounded-xl border border-neutral-100 bg-white shadow-sm"
                        >
                          <div className="flex-1 text-left pr-3">
                            <span className="font-sans text-sm font-bold text-neutral-800 block truncate">
                              {item.name}
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            {/* Quantity buttons */}
                            <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden bg-slate-50">
                              <button
                                onClick={() => handleUpdateQty(item.name, -5)}
                                className="px-2 py-1.5 hover:bg-neutral-200 text-neutral-500 transition-colors"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="px-3 py-1 font-mono text-xs font-bold text-neutral-800">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleUpdateQty(item.name, 5)}
                                className="px-2 py-1.5 hover:bg-neutral-200 text-neutral-500 transition-colors"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>

                            {/* Trash button */}
                            <button
                              onClick={() => handleRemoveItemFromModal(item.name)}
                              className="p-2 text-neutral-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                              aria-label="Deletar"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-neutral-100 bg-white flex items-center justify-between shrink-0">
                      <div>
                        <span className="block text-[11px] text-neutral-500">Tipos de Materiais</span>
                        <span className="font-display font-bold text-neutral-800">{cart.length} selecionados</span>
                      </div>
                      
                      <button
                        onClick={() => setStep(2)}
                        className="px-6 py-2.5 rounded-xl bg-[#0057B8] hover:bg-[#003B7A] text-xs font-bold uppercase tracking-wider text-white shadow-md transition-colors cursor-pointer"
                      >
                        Avançar etapa
                      </button>
                    </div>

                  </div>
                )}
              </div>
            )}

            {/* Step 2: Information form layout */}
            {step === 2 && (
              <form onSubmit={handleSubmitBudget} className="p-6 flex flex-col flex-1 min-h-0">
                <h4 className="font-sans text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">Informações de Contato & Frete</h4>
                
                <div className="space-y-4 flex-1">
                  
                  {/* Name field */}
                  <div className="text-left">
                    <label className="block text-xs font-bold text-neutral-700 uppercase mb-1.5" htmlFor="buyer-name">
                      Seu Nome Completo *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="buyer-name"
                        required
                        value={buyerName}
                        onChange={(e) => setBuyerName(e.target.value)}
                        placeholder="Ex: João Dias Neto"
                        className="w-full px-4 py-3 pl-10 rounded-xl border border-neutral-200 focus:border-[#0057B8] focus:ring-1 focus:ring-[#0057B8] outline-none text-sm transition-shadow font-sans"
                      />
                      <User className="absolute left-3.5 top-3.5 h-4 w-4 text-neutral-400" />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div className="text-left">
                    <label className="block text-xs font-bold text-neutral-700 uppercase mb-1.5" htmlFor="buyer-phone">
                      WhatsApp para Orcamento *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="buyer-phone"
                        required
                        value={buyerPhone}
                        onChange={(e) => setBuyerPhone(e.target.value)}
                        placeholder="Ex: (15) 99836-4546"
                        className="w-full px-4 py-3 pl-10 rounded-xl border border-neutral-200 focus:border-[#0057B8] focus:ring-1 focus:ring-[#0057B8] outline-none text-sm transition-shadow font-sans"
                      />
                      <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-neutral-400" />
                    </div>
                  </div>

                  {/* Regional Rate dropdown selector */}
                  <div className="text-left">
                    <label className="block text-xs font-bold text-neutral-700 uppercase mb-1.5" htmlFor="delivery-city">
                      Cidade de Entrega / Descarregamento
                    </label>
                    <div className="relative">
                      <select
                        id="delivery-city"
                        value={deliveryCity}
                        onChange={(e) => setDeliveryCity(e.target.value)}
                        className="w-full px-4 py-3 pl-10 rounded-xl border border-neutral-200 bg-white focus:border-[#0057B8] outline-none text-sm font-sans cursor-pointer"
                      >
                        {REGIONAL_ROUTES.map((route) => (
                          <option key={route.cityName} value={route.cityName}>
                            {route.cityName} ({route.distance})
                          </option>
                        ))}
                      </select>
                      <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-neutral-400" />
                    </div>
                  </div>

                </div>

                <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-xs font-bold uppercase text-neutral-600 transition-colors"
                  >
                    Voltar
                  </button>

                  <button
                    type="submit"
                    className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-xs font-bold uppercase tracking-wider text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-shadow"
                  >
                    <Send className="h-4 w-4 fill-current" />
                    <span>Conectar e Enviar WhatsApp</span>
                  </button>
                </div>

              </form>
            )}

            {/* Step 3: Success Screen layout */}
            {step === 3 && (
              <div className="p-8 text-center flex-1 flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: [0.8, 1.15, 1], opacity: 1 }}
                  className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-5"
                >
                  <CheckCircle2 className="h-10 w-10" />
                </motion.div>

                <h4 className="font-display text-xl font-bold text-neutral-800">Orçamento Compilado!</h4>
                
                <p className="font-sans text-xs sm:text-sm text-neutral-500 max-w-xs mt-2 leading-relaxed">
                  Estamos direcionando sua solicitação com segurança diretamente para o balcão comercial de Itapetininga/SP via WhatsApp.
                </p>

                <div className="mt-8 flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-800 text-[10px] font-bold font-sans uppercase tracking-widest animate-pulse">
                  <Sparkles className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Redirecionando... Por favor, aguarde</span>
                </div>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
