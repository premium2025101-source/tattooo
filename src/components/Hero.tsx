import { motion } from "framer-motion";
import { ArrowDown, MapPin, Shield } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Marc Blackwell tattoo artwork"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      </div>

      {/* Decorative Geometric Lines */}
      <svg
        className="absolute top-0 right-0 w-96 h-96 opacity-[0.04]"
        viewBox="0 0 400 400"
      >
        <line x1="0" y1="0" x2="400" y2="400" stroke="white" strokeWidth="1" />
        <line x1="400" y1="0" x2="0" y2="400" stroke="white" strokeWidth="1" />
        <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="0.5" fill="none" />
        <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="0.5" fill="none" />
        <circle cx="200" cy="200" r="50" stroke="white" strokeWidth="0.5" fill="none" />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm mb-8"
          >
            <Shield size={14} className="text-blood" />
            <span className="text-xs text-ash tracking-widest uppercase">
              {t("hero.badge")}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-wide text-white mb-6"
          >
            {t("hero.inkYour")}
            <br />
            <span className="text-blood">{t("hero.story")}</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-serif text-xl sm:text-2xl text-bone/80 italic mb-4 max-w-xl"
          >
            {t("hero.sub")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="text-ash text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
          >
            {t("hero.desc")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#booking"
              className="group px-8 py-4 bg-blood text-white font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-blood-light transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-blood/20 hover:shadow-blood/40"
            >
              {t("hero.bookCta")}
              <span className="w-0 group-hover:w-6 transition-all duration-300 overflow-hidden">
                &rarr;
              </span>
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 border border-white/20 text-bone font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-white/5 transition-all duration-300 flex items-center justify-center"
            >
              {t("hero.viewPortfolio")}
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex items-center gap-6 text-stone text-sm"
          >
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-blood" />
              Laval, QC
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span>{t("hero.happyClients")}</span>
            <span className="w-px h-4 bg-white/10" />
            <span>{t("hero.yearsExp")}</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone">
            {t("hero.scroll")}
          </span>
          <ArrowDown size={16} className="text-stone" />
        </motion.div>
      </motion.div>
    </section>
  );
}
