import { MapPin, Mail, Phone, ArrowUp, Heart, MessageCircle, Camera, Globe } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socialLinks = [
    { icon: Camera, label: "Instagram", href: "https://instagram.com" },
    { icon: Globe, label: "Facebook", href: "https://facebook.com" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/14387639904" },
  ];

  const quickLinks = [
    { label: t("nav.portfolio"), href: "#portfolio" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.about"), href: "#artist" },
    { label: t("nav.booking"), href: "#booking" },
    { label: t("nav.faq"), href: "#faq" },
    { label: t("nav.reviews"), href: "#reviews" },
  ];

  return (
    <footer className="relative bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full border-2 border-blood flex items-center justify-center">
                <span className="font-display text-lg text-bone">MB</span>
              </div>
              <div>
                <span className="font-display text-xl tracking-wider text-bone block leading-tight">MARC BLACKWELL</span>
                <span className="text-[10px] text-stone tracking-[0.2em] uppercase">{t("nav.customTattoos")}</span>
              </div>
            </a>
            <p className="text-stone text-sm leading-relaxed mb-6">{t("footer.tagline")}</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-surface border border-white/5 flex items-center justify-center text-stone hover:text-blood hover:border-blood/30 transition-all duration-300">
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-white tracking-wider mb-5">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-stone text-sm hover:text-bone transition-colors duration-300">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-white tracking-wider mb-5">{t("footer.contact")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blood mt-0.5 flex-shrink-0" />
                <span className="text-stone text-sm">Laval, Quebec<br />Canada</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blood flex-shrink-0" />
                <a href="mailto:a.elkashishy@gmail.com" className="text-stone text-sm hover:text-bone transition-colors break-all">a.elkashishy@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blood flex-shrink-0" />
                <a href="tel:+14387639904" className="text-stone text-sm hover:text-bone transition-colors">+1 (438) 763-9904</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg text-white tracking-wider mb-5">{t("footer.hours")}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between"><span className="text-stone">{t("footer.monFri")}</span></li>
              <li className="flex justify-between"><span className="text-stone">{t("footer.sat")}</span></li>
              <li className="flex justify-between"><span className="text-stone">{t("footer.sun")}</span></li>
            </ul>
            <div className="mt-6 pt-5 border-t border-white/5">
              <p className="text-stone text-xs leading-relaxed">{t("footer.mobile")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone text-xs flex items-center gap-1">
            &copy; {new Date().getFullYear()} Marc Blackwell Ink. Made with <Heart size={12} className="text-blood fill-blood inline" /> {t("footer.rights")}
          </p>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-stone text-xs hover:text-bone transition-colors group">
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
