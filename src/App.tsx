import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SliderDestaques from "./components/SliderDestaques";
import About from "./components/About";
import Diferenciais from "./components/Diferenciais";
import Reviews from "./components/Reviews";
import StatsCounter from "./components/StatsCounter";
import DeliverySection from "./components/DeliverySection";
import CtaFinal from "./components/CtaFinal";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import BudgetModal from "./components/BudgetModal";

// Import generated premium assets directly through dynamic Vite asset URL references
// Use local image from `src/imagens/i1.png` as requested
const heroMaterials = new URL("./imagens/i1.png", import.meta.url).href;
// Use local truck image requested by user
const deliveryTruck = new URL("./imagens/i10.png", import.meta.url).href;

export default function App() {
  const [loading, setLoading] = useState(true);
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const handleAddProduct = (productName: string) => {
    setSelectedProducts((prev) => {
      if (prev.includes(productName)) {
        // Already selected, remove from cart
        return prev.filter((item) => item !== productName);
      } else {
        // Not selected, add to cart and prompt budget modal auto open
        setBudgetOpen(true);
        return [...prev, productName];
      }
    });
  };

  const handleRemoveProduct = (productName: string) => {
    setSelectedProducts((prev) => prev.filter((item) => item !== productName));
  };

  const handleClearProducts = () => {
    setSelectedProducts([]);
  };

  return (
    <div id="root-container" className="text-neutral-900 font-sans tracking-normal selection:bg-[#0057B8] selection:text-white">
      {/* Premium custom loading screen */}
      <LoadingScreen onComplete={() => setLoading(false)} />

      {!loading && (
        <div className="relative flex flex-col min-h-screen">
          
          {/* Main persistent header wrapper */}
          <Header onQuoteClick={() => setBudgetOpen(true)} />

          {/* Core Body Sections */}
          <main className="flex-1">
            
            {/* Hero area with canvas particles */}
            <Hero 
              onQuoteClick={() => setBudgetOpen(true)} 
              materialsImage={heroMaterials} 
            />

            {/* Structured Coverflow Slideshow highlights */}
            <SliderDestaques />

            {/* About us storytelling */}
            <About />

            {/* Futuristic Differentials grid */}
            <Diferenciais />

            {/* Numerical visual counter badges */}
            <StatsCounter />

            {/* Authentic google reviews carrousel */}
            <Reviews />

            {/* Regional Transport SVG route simulation */}
            <DeliverySection truckImage={deliveryTruck} />

            {/* Large bottom glowing CTA banner */}
            <CtaFinal onQuoteClick={() => setBudgetOpen(true)} />

          </main>

          {/* Sophisticated footer holding map */}
          <Footer onQuoteClick={() => setBudgetOpen(true)} />

          {/* Fast-access WhatsApp Badge */}
          <WhatsappButton />

          {/* Stateful material budget builder modal */}
          <BudgetModal
            isOpen={budgetOpen}
            onClose={() => setBudgetOpen(false)}
            selectedProducts={selectedProducts}
            onRemoveProduct={handleRemoveProduct}
            onAddProduct={handleAddProduct}
          />

        </div>
      )}
    </div>
  );
}
