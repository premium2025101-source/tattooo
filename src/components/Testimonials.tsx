import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Testimonials() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const testimonials = [
    {
      id: 1,
      name: t("test.1name"),
      image: "/images/avatar1.jpg",
      location: t("test.1location"),
      stars: 5,
      quote: t("test.1quote"),
      tattoo: t("test.1tattoo"),
      platform: "Google" as const,
    },
    {
      id: 2,
      name: t("test.2name"),
      image: "/images/avatar2.jpg",
      location: t("test.2location"),
      stars: 5,
      quote: t("test.2quote"),
      tattoo: t("test.2tattoo"),
      platform: "Google" as const,
    },
    {
      id: 3,
      name: t("test.3name"),
      image: "/images/avatar3.jpg",
      location: t("test.3location"),
      stars: 5,
      quote: t("test.3quote"),
      tattoo: t("test.3tattoo"),
      platform: "Facebook" as const,
    },
  ];

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const active = testimonials[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
  };

  return (
    <section id="reviews" className="relative py-24 lg:py-32 bg-charcoal overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="font-display text-blood text-lg tracking-[0.3em] block mb-3">{t("reviews.tag")}</span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wide text-white">{t("reviews.title")}</h2>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-center"
              >
                {/* Quote Icon */}
                <Quote size={48} className="text-blood/20 mx-auto mb-6" />

                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: active.stars }).map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-bone/90 italic leading-relaxed mb-8 max-w-3xl mx-auto">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blood/30">
                      <img src={active.image} alt={active.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left">
                      <p className="text-white font-semibold">{active.name}</p>
                      <p className="text-stone text-sm">{active.location} &bull; {active.tattoo}</p>
                    </div>
                  </div>

                  {/* Platform */}
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="text-stone text-xs">{t("reviews.readMore")}</span>
                    <span className="text-blood text-xs font-semibold">{active.platform}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-bone hover:text-white hover:border-blood/50 transition-all duration-300">
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`transition-all duration-300 rounded-full ${i === current ? "w-8 h-2 bg-blood" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
                  aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>

            <button onClick={next} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-bone hover:text-white hover:border-blood/50 transition-all duration-300">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
