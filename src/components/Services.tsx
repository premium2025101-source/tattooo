import { motion } from "framer-motion";
import { Clock, DollarSign, ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

interface ServiceItem {
  id: number;
  titleKey: string;
  descKey: string;
  priceRange: string;
  estimatedTime: string;
  deposit: string;
  categoryKey: string;
  popular?: boolean;
}

const services: ServiceItem[] = [
  {
    id: 1,
    titleKey: "svc.fineline.title",
    descKey: "svc.fineline.desc",
    priceRange: "$150 – $300",
    estimatedTime: "1 – 2 hours",
    deposit: "$75",
    categoryKey: "Small",
  },
  {
    id: 2,
    titleKey: "svc.realism.title",
    descKey: "svc.realism.desc",
    priceRange: "$400 – $1,200",
    estimatedTime: "3 – 8 hours",
    deposit: "$75",
    categoryKey: "Medium – Large",
    popular: true,
  },
  {
    id: 3,
    titleKey: "svc.traditional.title",
    descKey: "svc.traditional.desc",
    priceRange: "$300 – $800",
    estimatedTime: "2 – 5 hours",
    deposit: "$75",
    categoryKey: "Medium",
  },
  {
    id: 4,
    titleKey: "svc.sleeve.title",
    descKey: "svc.sleeve.desc",
    priceRange: "$2,000 – $5,000+",
    estimatedTime: "15 – 30+ hours (multiple sessions)",
    deposit: "$75",
    categoryKey: "Extra Large",
  },
  {
    id: 5,
    titleKey: "svc.coverup.title",
    descKey: "svc.coverup.desc",
    priceRange: "$350 – $1,500",
    estimatedTime: "3 – 8 hours",
    deposit: "$75",
    categoryKey: "Medium – Large",
  },
  {
    id: 6,
    titleKey: "svc.flash.title",
    descKey: "svc.flash.desc",
    priceRange: "$150 – $400",
    estimatedTime: "1 – 3 hours",
    deposit: "$75",
    categoryKey: "Small – Medium",
  },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-void-black">
      {/* Subtle dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-display text-blood text-lg tracking-[0.3em] block mb-3">
            {t("services.tag")}
          </span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wide text-white mb-4">
            {t("services.title")}
          </h2>
          <p className="text-ash max-w-2xl mx-auto text-base leading-relaxed">
            {t("services.desc")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative bg-surface border rounded-sm p-7 transition-all duration-500 hover:border-blood/30 ${
                service.popular ? "border-blood/20" : "border-white/5"
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 right-4 bg-blood px-3 py-1 rounded-sm">
                  <span className="text-xs text-white font-semibold tracking-wider uppercase">
                    {t("services.mostPopular")}
                  </span>
                </div>
              )}

              {/* Category Tag */}
              <div className="inline-block px-3 py-1 bg-white/5 rounded-sm mb-4">
                <span className="text-[10px] text-stone tracking-widest uppercase">
                  {service.categoryKey}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl text-white tracking-wide mb-3 group-hover:text-blood transition-colors duration-300">
                {t(service.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-ash text-sm leading-relaxed mb-6">
                {t(service.descKey)}
              </p>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <DollarSign size={16} className="text-blood flex-shrink-0" />
                  <div>
                    <span className="text-stone text-[10px] tracking-wider uppercase block">
                      {t("services.estimatedPrice")}
                    </span>
                    <span className="text-bone text-sm font-medium">
                      {service.priceRange}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-blood flex-shrink-0" />
                  <div>
                    <span className="text-stone text-[10px] tracking-wider uppercase block">
                      {t("services.estimatedTime")}
                    </span>
                    <span className="text-bone text-sm font-medium">
                      {service.estimatedTime}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-blood/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-blood" />
                  </div>
                  <div>
                    <span className="text-stone text-[10px] tracking-wider uppercase block">
                      {t("services.deposit")}
                    </span>
                    <span className="text-blood text-sm font-semibold">
                      {service.deposit} CAD
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#booking"
                className="inline-flex items-center gap-2 text-blood text-sm font-medium tracking-wider uppercase group/link"
              >
                {t("services.bookThis")}
                <ArrowRight
                  size={14}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Hourly Rate Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 max-w-xl mx-auto bg-surface border border-white/5 rounded-sm p-8 text-center"
        >
          <span className="font-display text-blood text-lg tracking-[0.3em] block mb-2">
            {t("services.hourlyRate")}
          </span>
          <div className="font-display text-6xl text-white mb-2">
            $250<span className="text-2xl text-stone">/hr</span>
          </div>
          <p className="text-stone text-sm">{t("services.hourlyRateDesc")}</p>
        </motion.div>
      </div>
    </section>
  );
}
