import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";
import { Locale } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageProvider";

const locales: { code: Locale; flag: string }[] = [
  { code: "en", flag: "🇬🇧" },
  { code: "fr", flag: "🇫🇷" },
  { code: "es", flag: "🇪🇸" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale, localeNames } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = locales.find((l) => l.code === locale)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
      >
        <Globe size={14} className="text-ash" />
        <span className="text-sm text-bone">{current.flag}</span>
        <ChevronDown
          size={12}
          className={`text-stone transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 bg-void-black border border-white/10 rounded-sm shadow-2xl shadow-black/50 overflow-hidden min-w-[180px] z-[100]"
          >
            {locales.map((l, i) => (
              <motion.button
                key={l.code}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => {
                  setLocale(l.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 ${
                  l.code === locale
                    ? "bg-blood/20 text-white"
                    : "text-ash hover:bg-white/5 hover:text-bone"
                }`}
              >
                <span className="text-lg">{l.flag}</span>
                <span className="font-medium">{localeNames[l.code]}</span>
                {l.code === locale && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blood" />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
