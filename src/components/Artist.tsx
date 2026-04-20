import { motion } from "framer-motion";
import { Check, MessageCircle, PenTool, Zap, Shield } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Artist() {
  const { t } = useLanguage();

  const processSteps = [
    {
      icon: MessageCircle,
      step: "01",
      title: t("artist.step1Title"),
      description: t("artist.step1Desc"),
    },
    {
      icon: PenTool,
      step: "02",
      title: t("artist.step2Title"),
      description: t("artist.step2Desc"),
    },
    {
      icon: Zap,
      step: "03",
      title: t("artist.step3Title"),
      description: t("artist.step3Desc"),
    },
  ];

  const certifications = [
    t("artist.cert1"),
    t("artist.cert2"),
    t("artist.cert3"),
    t("artist.cert4"),
  ];

  return (
    <section id="artist" className="relative py-24 lg:py-32 bg-void-black">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Artist Bio */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/images/artist.jpg"
                alt="Marc Blackwell - Tattoo Artist"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-sm"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-blood/30 rounded-sm -z-10" />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 left-6 bg-blood px-6 py-4 rounded-sm">
              <span className="font-display text-4xl text-white block leading-none">5+</span>
              <span className="text-white/80 text-xs tracking-widest uppercase">
                {t("artist.yearsExp")}
              </span>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-blood text-lg tracking-[0.3em] block mb-3">
              {t("artist.tag")}
            </span>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wide text-white mb-8">
              MARC
              <br />
              <span className="text-stone">BLACKWELL</span>
            </h2>

            <p className="text-ash leading-relaxed mb-6">
              {t("artist.bio1")}
            </p>
            <p className="text-ash leading-relaxed mb-8">
              {t("artist.bio2")}
            </p>

            {/* Certifications */}
            <div className="space-y-3 mb-8">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blood/20 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-blood" />
                  </div>
                  <span className="text-sm text-bone">{cert}</span>
                </div>
              ))}
            </div>

            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 text-bone text-sm tracking-wider uppercase rounded-sm hover:bg-white/10 transition-all duration-300"
            >
              {t("artist.workWithMe")}
            </a>
          </motion.div>
        </div>

        {/* Process Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="font-display text-blood text-lg tracking-[0.3em] block mb-3">
              {t("artist.processTag")}
            </span>
            <h2 className="font-display text-5xl sm:text-6xl tracking-wide text-white">
              {t("artist.processTitle")}
            </h2>
          </motion.div>

          {/* Process Image + Steps */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Process Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <img
                src="/images/process.jpg"
                alt="Tattooing process"
                className="w-full h-[400px] object-cover rounded-sm"
              />
            </motion.div>

            {/* Steps */}
            <div className="order-1 lg:order-2 space-y-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative pl-20 group"
                >
                  {/* Step Number */}
                  <div className="absolute left-0 top-0">
                    <span className="font-display text-5xl text-surface-light group-hover:text-blood/20 transition-colors duration-500">
                      {step.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute left-14 top-2 w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center group-hover:border-blood/50 transition-colors duration-300">
                    <step.icon size={16} className="text-blood" />
                  </div>

                  <div className="pt-2">
                    <h3 className="font-display text-2xl text-white tracking-wide mb-2">
                      {step.title}
                    </h3>
                    <p className="text-ash text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {i < processSteps.length - 1 && (
                    <div className="absolute left-[66px] top-[70px] w-px h-8 bg-white/5" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Safety Promise banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 bg-surface border border-white/5 rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blood/10 flex items-center justify-center">
              <Shield size={22} className="text-blood" />
            </div>
            <div>
              <h3 className="font-display text-xl text-white tracking-wide">
                {t("artist.safetyTitle")}
              </h3>
              <p className="text-stone text-sm">
                {t("artist.safetyDesc")}
              </p>
            </div>
          </div>
          <a
            href="#faq"
            className="px-6 py-2.5 border border-white/10 text-bone text-sm tracking-wider rounded-sm hover:bg-white/5 transition-colors whitespace-nowrap"
          >
            {t("artist.learnMore")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
