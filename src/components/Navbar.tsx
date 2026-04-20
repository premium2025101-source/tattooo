import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: t("nav.portfolio"), href: "#portfolio" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.about"), href: "#artist" },
    { label: t("nav.booking"), href: "#booking" },
    { label: t("nav.faq"), href: "#faq" },
    { label: t("nav.reviews"), href: "#reviews" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border-2 border-blood flex items-center justify-center group-hover:bg-blood transition-colors duration-300">
                <span className="font-display text-lg text-bone group-hover:text-white transition-colors">
                  MB
                </span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-2xl tracking-wider text-bone">
                  MARC BLACKWELL
                </span>
                <p className="text-xs text-stone tracking-widest uppercase -mt-1">
                  {t("nav.customTattoos")}
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-ash hover:text-bone transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-blood group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <LanguageSwitcher />
              <a
                href="#booking"
                className="ml-2 px-6 py-2.5 bg-blood text-white text-sm font-medium rounded-sm hover:bg-blood-light transition-colors duration-300 tracking-wide"
              >
                {t("nav.bookNow")}
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <LanguageSwitcher />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-bone p-2"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-3xl text-white tracking-wider hover:text-blood transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="px-8 py-3 bg-blood text-white font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-blood-light transition-colors duration-300"
              >
                {t("nav.bookNow")}
              </a>
              <div className="mt-4">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
