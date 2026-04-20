import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { LanguageProvider } from "./i18n/LanguageProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Artist from "./components/Artist";
import Services from "./components/Services";
import Booking from "./components/Booking";
import TrustFAQ from "./components/TrustFAQ";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import TattooBackground from "./components/TattooBackground";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-surface border border-white/10 rounded-full flex items-center justify-center text-bone hover:text-blood hover:border-blood/30 transition-all duration-300 shadow-lg"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative bg-black min-h-screen">
        <TattooBackground />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Portfolio />
          <Artist />
          <Services />
          <Booking />
          <TrustFAQ />
          <Testimonials />
        </main>
        <WhatsAppFloat />
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}
