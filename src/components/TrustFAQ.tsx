import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Syringe, Leaf, HeartPulse, CreditCard, Shield, ChevronDown, Ban } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="bg-surface border border-white/5 rounded-sm overflow-hidden">
            <button onClick={() => setOpenIndex(isOpen ? null : i)} className="w-full flex items-center justify-between p-5 text-left group">
              <span className={`text-sm font-medium transition-colors duration-300 pr-4 ${isOpen ? "text-white" : "text-bone group-hover:text-white"}`}>
                {faq.question}
              </span>
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
                <ChevronDown size={18} className={isOpen ? "text-blood" : "text-stone"} />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                  <div className="px-5 pb-5 border-t border-white/5 pt-4">
                    <p className="text-ash text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function TrustFAQ() {
  const { t } = useLanguage();

  const trustSignals = [
    { icon: Syringe, title: t("trust.badge1"), description: t("trust.badge1desc") },
    { icon: Leaf, title: t("trust.badge2"), description: t("trust.badge2desc") },
    { icon: HeartPulse, title: t("trust.badge3"), description: t("trust.badge3desc") },
    { icon: CreditCard, title: t("trust.badge4"), description: t("trust.badge4desc") },
    { icon: Shield, title: t("trust.badge5"), description: t("trust.badge5desc") },
    { icon: Ban, title: t("trust.badge6"), description: t("trust.badge6desc") },
  ];

  const faqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
    { question: t("faq.q6"), answer: t("faq.a6") },
  ];

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-void-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Trust Signals */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="font-display text-blood text-lg tracking-[0.3em] block mb-3">{t("trust.tag")}</span>
          <h2 className="font-display text-5xl sm:text-6xl tracking-wide text-white">{t("trust.title")}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-28">
          {trustSignals.map((signal, i) => (
            <motion.div key={signal.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-surface border border-white/5 rounded-sm p-6 hover:border-blood/20 transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-surface-light border border-white/5 flex items-center justify-center mb-4 group-hover:border-blood/30 transition-colors duration-500">
                <signal.icon size={20} className="text-blood" />
              </div>
              <h3 className="font-display text-xl text-white tracking-wide mb-2">{signal.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{signal.description}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <span className="font-display text-blood text-lg tracking-[0.3em] block mb-3">{t("faq.tag")}</span>
            <h2 className="font-display text-5xl sm:text-6xl tracking-wide text-white">{t("faq.title")}</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <FaqAccordion items={faqs} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
