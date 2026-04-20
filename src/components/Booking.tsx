import { useState, FormEvent, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2, Car, Check, CalendarDays, User, Mail, Phone, Clock,
  MapPin, ArrowRight, Send, Loader2, ImagePlus, Calendar, AlarmClock,
  ExternalLink, MessageCircle, Copy, CheckCircle, CreditCard, Wallet,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

const STUDIO_DEPOSIT = 75;
const MOBILE_DEPOSIT = 105;
const TRAVEL_FEE = 30;

const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
];

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const minDate = tomorrow.toISOString().split("T")[0];

interface FormData {
  fullName: string; mobile: string; email: string;
  date: string; time: string; sessionType: string;
  address: string; notes: string;
}

function GoogleCalendarLink({ formData, sessionType, t }: {
  formData: FormData; sessionType: string; t: (k: string) => string;
}) {
  const buildUrl = useCallback(() => {
    if (!formData.date || !formData.time || !formData.fullName) return "#";
    const start = formData.date.replace(/-/g, "");
    const timeStr = formData.time;
    const endTimeHour = parseInt(timeStr.split(":")[0]) + 3;
    const endDate = `${start}T${String(endTimeHour).padStart(2, "0")}0000`;
    const startDate = `${start}T${timeStr.split(":")[0].padStart(2, "0")}${timeStr.split(":")[1].split(" ")[0]}00`;
    const title = encodeURIComponent(
      `Tattoo Session with Marc Blackwell (${sessionType === "studio" ? "Studio" : "Mobile"})`
    );
    const location = encodeURIComponent(
      sessionType === "studio" ? "Laval, Quebec, Canada" : formData.address || "Client Location"
    );
    const details = encodeURIComponent(
      `Tattoo session booked with Marc Blackwell.\n\nClient: ${formData.fullName}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\n\n${sessionType === "mobile" && formData.address ? `Address: ${formData.address}\n` : ""}Notes: ${formData.notes || "None"}`
    );
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&location=${location}&details=${details}`;
  }, [formData, sessionType]);

  return (
    <a href={buildUrl()} target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-bone text-xs tracking-wider uppercase rounded-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
      <Calendar size={14} />{t("booking.googleCal")}<ExternalLink size={12} />
    </a>
  );
}

function WhatsAppButton({ formData, sessionType, t }: {
  formData: FormData; sessionType: string; t: (k: string) => string;
}) {
  const buildUrl = useCallback(() => {
    const deposit = sessionType === "studio" ? STUDIO_DEPOSIT : MOBILE_DEPOSIT;
    const sessionLabel = sessionType === "studio" ? "Studio Session" : "Mobile Session";
    let message = `🖤 *NEW TATTOO BOOKING REQUEST*\n\n`;
    message += `👤 *Name:* ${formData.fullName}\n`;
    message += `📱 *Mobile:* ${formData.mobile}\n`;
    message += `📧 *Email:* ${formData.email}\n`;
    message += `📅 *Date:* ${formData.date}\n`;
    message += `⏰ *Time:* ${formData.time}\n`;
    message += `🎨 *Session:* ${sessionLabel}\n`;
    message += `💰 *Deposit:* $${deposit} CAD\n`;
    if (sessionType === "studio") {
      message += `📍 *Location:* Laval, Quebec, Canada\n`;
    } else if (formData.address) {
      message += `🏠 *Address:* ${formData.address}\n`;
    }
    if (formData.notes) message += `\n📝 *Notes:* ${formData.notes}\n`;
    message += `\nSent from booking form`;
    return `https://wa.me/14387639904?text=${encodeURIComponent(message)}`;
  }, [formData, sessionType]);

  return (
    <a href={buildUrl()} target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-[#20bd5a] transition-all duration-300 shadow-lg shadow-[#25D366]/20">
      <MessageCircle size={18} />{t("booking.sendWhatsApp")}
    </a>
  );
}

export default function Booking() {
  const { t, ta } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("studio");
  const [formData, setFormData] = useState<FormData>({
    fullName: "", mobile: "", email: "", date: "", time: "",
    sessionType: "studio", address: "", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setSubmitted(true); }, 1800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ fullName: "", mobile: "", email: "", date: "", time: "", sessionType: "studio", address: "", notes: "" });
    setActiveTab("studio");
  };

  const formatDateDisplay = (dateStr: string) => {
    if (!dateStr) return "";
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-CA", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  };

  const deposit = activeTab === "studio" ? STUDIO_DEPOSIT : MOBILE_DEPOSIT;
  const features = ta(activeTab === "studio" ? "booking.studioFeatures" : "booking.mobileFeatures");

  // ─── Success State ───────────────────────────────────────
  if (submitted) {
    return (
      <section id="booking" className="relative py-24 lg:py-32 bg-charcoal">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="bg-surface border border-white/5 rounded-sm p-10 lg:p-14">
            <div className="w-20 h-20 rounded-full bg-blood/10 border border-blood/30 flex items-center justify-center mx-auto mb-6">
              <Check size={36} className="text-blood" />
            </div>
            <h3 className="font-display text-4xl text-white tracking-wide mb-4">{t("booking.successTitle")}</h3>
            <p className="text-ash leading-relaxed mb-2">
              {formData.fullName && <span className="text-bone font-medium">{formData.fullName}</span>}
            </p>
            <p className="text-stone text-sm mb-8">{t("booking.successThank")}</p>

            {/* Booking Summary */}
            <div className="bg-void-black rounded-sm p-6 border border-white/5 mb-8 text-left">
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-stone text-[10px] tracking-wider uppercase block">{t("booking.successName")}</span>
                  <span className="text-bone">{formData.fullName}</span>
                </div>
                <div>
                  <span className="text-stone text-[10px] tracking-wider uppercase block">{t("booking.successSession")}</span>
                  <span className="text-bone">{activeTab === "studio" ? t("booking.studioSession") : t("booking.mobileSession")}</span>
                </div>
                <div>
                  <span className="text-stone text-[10px] tracking-wider uppercase block">{t("booking.successDate")}</span>
                  <span className="text-bone">{formatDateDisplay(formData.date)}</span>
                </div>
                <div>
                  <span className="text-stone text-[10px] tracking-wider uppercase block">{t("booking.successTime")}</span>
                  <span className="text-bone">{formData.time}</span>
                </div>
                {activeTab === "mobile" && formData.address && (
                  <div className="sm:col-span-2">
                    <span className="text-stone text-[10px] tracking-wider uppercase block">{t("booking.successAddress")}</span>
                    <span className="text-bone">{formData.address}</span>
                  </div>
                )}
                <div className="sm:col-span-2 border-t border-white/5 pt-4">
                  <span className="text-stone text-[10px] tracking-wider uppercase block">{t("booking.successDeposit")}</span>
                  <span className="font-display text-3xl text-blood">${deposit} <span className="text-sm text-stone">CAD</span></span>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="mb-8">
              <p className="text-xs text-stone tracking-widest uppercase mb-4">{t("booking.payDeposit")}</p>
              <div className="space-y-3">
                <div className="bg-void-black border border-white/5 rounded-sm p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0066B2]/20 flex items-center justify-center">
                      <Wallet size={18} className="text-[#0066B2]" />
                    </div>
                    <div>
                      <p className="text-bone text-sm font-medium">{t("booking.interac")}</p>
                      <p className="text-stone text-xs">{t("booking.sendTo")}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-surface-light rounded-sm px-3 py-2">
                    <span className="text-bone text-sm font-mono">a.elkashishy@gmail.com</span>
                    <button onClick={() => handleCopy("a.elkashishy@gmail.com", "etransfer")} className="text-stone hover:text-blood transition-colors">
                      {copiedField === "etransfer" ? <CheckCircle size={16} className="text-green-500" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
                <a href="https://www.paypal.com/paypalme/a.elkashishy/75" target="_blank" rel="noopener noreferrer"
                  className="bg-void-black border border-white/5 rounded-sm p-4 flex items-center justify-between hover:border-[#003087]/30 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#003087]/20 flex items-center justify-center"><CreditCard size={18} className="text-[#003087]" /></div>
                    <div><p className="text-bone text-sm font-medium group-hover:text-[#0070BA] transition-colors">PayPal</p><p className="text-stone text-xs">{t("booking.payPalSecure")}</p></div>
                  </div>
                  <ExternalLink size={16} className="text-stone group-hover:text-white transition-colors" />
                </a>
                <a href="https://www.koho.ca/" target="_blank" rel="noopener noreferrer"
                  className="bg-void-black border border-white/5 rounded-sm p-4 flex items-center justify-between hover:border-[#5C2D91]/30 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#5C2D91]/20 flex items-center justify-center"><CreditCard size={18} className="text-[#5C2D91]" /></div>
                    <div><p className="text-bone text-sm font-medium group-hover:text-[#7B3FBF] transition-colors">KoHo</p><p className="text-stone text-xs">{t("booking.kohoCard")}</p></div>
                  </div>
                  <ExternalLink size={16} className="text-stone group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <WhatsAppButton formData={formData} sessionType={activeTab} t={t} />
              <GoogleCalendarLink formData={formData} sessionType={activeTab} t={t} />
            </div>

            <p className="text-stone text-xs mb-8">{t("booking.afterPay")}</p>

            <button onClick={handleReset} className="px-8 py-3 bg-surface-light border border-white/10 text-bone text-sm tracking-wider uppercase rounded-sm hover:border-blood/30 hover:text-blood transition-all duration-300">
              {t("booking.bookAnother")}
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  // ─── Booking Form ────────────────────────────────────────
  return (
    <section id="booking" className="relative py-24 lg:py-32 bg-charcoal">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="font-display text-blood text-lg tracking-[0.3em] block mb-3">{t("booking.tag")}</span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wide text-white mb-4">{t("booking.title")}</h2>
          <p className="text-ash max-w-2xl mx-auto text-base leading-relaxed">{t("booking.desc")}</p>
        </motion.div>

        <form onSubmit={handleSubmit}>
          {/* Session Type Tabs */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex justify-center mb-12">
            <div className="inline-flex bg-surface rounded-sm p-1">
              {(["studio", "mobile"] as const).map((id) => {
                const isStudio = id === "studio";
                const Icon = isStudio ? Building2 : Car;
                return (
                  <button key={id} type="button" onClick={() => { setActiveTab(id); setFormData((prev) => ({ ...prev, sessionType: id })); }}
                    className={`relative px-6 py-3 text-sm tracking-wider uppercase font-medium transition-all duration-300 rounded-sm ${activeTab === id ? "text-white" : "text-stone hover:text-bone"}`}>
                    {activeTab === id && (
                      <motion.div layoutId="bookingTab" className="absolute inset-0 bg-surface-light rounded-sm border border-white/10" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                    )}
                    <span className="relative z-10 flex items-center gap-2"><Icon size={16} />{isStudio ? t("booking.studioSession") : t("booking.mobileSession")}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Main Layout */}
          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* LEFT: Form */}
            <div className="lg:col-span-3">
              <motion.div key={`form-${activeTab}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="bg-surface border border-white/5 rounded-sm p-8 lg:p-10">
                <h3 className="font-display text-2xl text-white tracking-wide mb-2">{t("booking.yourDetails")}</h3>
                <p className="text-stone text-sm mb-8">{t("booking.yourDetailsDesc")}</p>

                {/* Full Name */}
                <div className="mb-6">
                  <label htmlFor="fullName" className="flex items-center gap-2 text-xs text-stone tracking-widest uppercase mb-3">
                    <User size={14} className="text-blood" />{t("booking.fullName")} <span className="text-blood">*</span>
                  </label>
                  <input type="text" id="fullName" name="fullName" required value={formData.fullName} onChange={handleInputChange}
                    placeholder={t("booking.fullNamePlaceholder")}
                    className="w-full bg-void-black border border-white/10 rounded-sm px-5 py-3.5 text-white placeholder:text-stone/40 text-sm focus:outline-none focus:border-blood/50 focus:ring-1 focus:ring-blood/20 transition-all duration-300" />
                </div>

                {/* Mobile + Email */}
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="mobile" className="flex items-center gap-2 text-xs text-stone tracking-widest uppercase mb-3">
                      <Phone size={14} className="text-blood" />{t("booking.mobile")} <span className="text-blood">*</span>
                    </label>
                    <input type="tel" id="mobile" name="mobile" required value={formData.mobile} onChange={handleInputChange}
                      placeholder={t("booking.mobilePlaceholder")}
                      className="w-full bg-void-black border border-white/10 rounded-sm px-5 py-3.5 text-white placeholder:text-stone/40 text-sm focus:outline-none focus:border-blood/50 focus:ring-1 focus:ring-blood/20 transition-all duration-300" />
                  </div>
                  <div>
                    <label htmlFor="email" className="flex items-center gap-2 text-xs text-stone tracking-widest uppercase mb-3">
                      <Mail size={14} className="text-blood" />{t("booking.email")} <span className="text-blood">*</span>
                    </label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange}
                      placeholder={t("booking.emailPlaceholder")}
                      className="w-full bg-void-black border border-white/10 rounded-sm px-5 py-3.5 text-white placeholder:text-stone/40 text-sm focus:outline-none focus:border-blood/50 focus:ring-1 focus:ring-blood/20 transition-all duration-300" />
                  </div>
                </div>

                <div className="h-px bg-white/5 my-8" />

                <h3 className="font-display text-2xl text-white tracking-wide mb-2">{t("booking.dateTime")}</h3>
                <p className="text-stone text-sm mb-8">{t("booking.dateTimeDesc")}</p>

                {/* Date */}
                <div className="mb-6">
                  <label htmlFor="date" className="flex items-center gap-2 text-xs text-stone tracking-widest uppercase mb-3">
                    <Calendar size={14} className="text-blood" />{t("booking.sessionDate")} <span className="text-blood">*</span>
                  </label>
                  <input type="date" id="date" name="date" required min={minDate} value={formData.date} onChange={handleInputChange}
                    className="w-full bg-void-black border border-white/10 rounded-sm px-5 py-3.5 text-white placeholder:text-stone/40 text-sm focus:outline-none focus:border-blood/50 focus:ring-1 focus:ring-blood/20 transition-all duration-300 [color-scheme:dark]" />
                  {formData.date && (
                    <p className="text-blood/70 text-xs mt-2 flex items-center gap-1"><CalendarDays size={12} />{formatDateDisplay(formData.date)}</p>
                  )}
                </div>

                {/* Time */}
                <div className="mb-6">
                  <label htmlFor="time" className="flex items-center gap-2 text-xs text-stone tracking-widest uppercase mb-3">
                    <AlarmClock size={14} className="text-blood" />{t("booking.preferredTime")} <span className="text-blood">*</span>
                  </label>
                  <div className="relative">
                    <select id="time" name="time" required value={formData.time} onChange={handleInputChange}
                      className="w-full bg-void-black border border-white/10 rounded-sm px-5 py-3.5 text-white text-sm focus:outline-none focus:border-blood/50 focus:ring-1 focus:ring-blood/20 transition-all duration-300 appearance-none cursor-pointer">
                      <option value="" className="bg-void-black text-stone">{t("booking.selectTime")}</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-void-black text-white">{slot}</option>
                      ))}
                    </select>
                    <Clock size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
                  </div>
                </div>

                <div className="h-px bg-white/5 my-8" />

                {/* Conditional: Studio Location OR Mobile Address */}
                <AnimatePresence mode="wait">
                  {activeTab === "studio" ? (
                    <motion.div key="studio-location" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="mb-8">
                      <label className="flex items-center gap-2 text-xs text-stone tracking-widest uppercase mb-3">
                        <MapPin size={14} className="text-blood" />{t("booking.studioLocation")}
                      </label>
                      <div className="bg-void-black border border-blood/20 rounded-sm p-5 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-blood/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Building2 size={18} className="text-blood" />
                        </div>
                        <div>
                          <p className="text-bone font-medium text-sm">{t("booking.studioName")}</p>
                          <p className="text-stone text-sm mt-1">Laval, Quebec, Canada</p>
                          <p className="text-blood/60 text-xs mt-1">{t("booking.studioAddress")}</p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div key="mobile-address" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="mb-6">
                      <label htmlFor="address" className="flex items-center gap-2 text-xs text-stone tracking-widest uppercase mb-3">
                        <MapPin size={14} className="text-blood" />{t("booking.yourAddress")} <span className="text-blood">*</span>
                      </label>
                      <input type="text" id="address" name="address" required={activeTab === "mobile"} value={formData.address} onChange={handleInputChange}
                        placeholder={t("booking.addressPlaceholder")}
                        className="w-full bg-void-black border border-white/10 rounded-sm px-5 py-3.5 text-white placeholder:text-stone/40 text-sm focus:outline-none focus:border-blood/50 focus:ring-1 focus:ring-blood/20 transition-all duration-300" />
                      <p className="text-stone text-xs mt-2 flex items-center gap-1">
                        <Car size={12} className="text-blood/60" />{t("booking.mobileNote")}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="h-px bg-white/5 my-8" />

                {/* Notes */}
                <div className="mb-8">
                  <label htmlFor="notes" className="flex items-center gap-2 text-xs text-stone tracking-widest uppercase mb-3">
                    <ImagePlus size={14} className="text-blood" />{t("booking.notes")}
                    <span className="text-stone/40 normal-case tracking-normal">({t("booking.notesOptional")})</span>
                  </label>
                  <textarea id="notes" name="notes" value={formData.notes} onChange={handleInputChange}
                    placeholder={t("booking.notesPlaceholder")} rows={3}
                    className="w-full bg-void-black border border-white/10 rounded-sm px-5 py-3.5 text-white placeholder:text-stone/40 text-sm focus:outline-none focus:border-blood/50 focus:ring-1 focus:ring-blood/20 transition-all duration-300 resize-none" />
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Summary */}
            <div className="lg:col-span-2">
              <div className="space-y-6 lg:sticky lg:top-28">
                <motion.div key={`${activeTab}-details`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="bg-surface border border-white/5 rounded-sm p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-stone text-xs tracking-widest uppercase">{activeTab === "studio" ? t("booking.lavalQuebec") : t("booking.comfortZone")}</span>
                      <h3 className="font-display text-3xl text-white tracking-wide mt-1">{activeTab === "studio" ? t("booking.studioSession") : t("booking.mobileSession")}</h3>
                    </div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${activeTab === "studio" ? "bg-blood/10 border border-blood/30" : "bg-surface-light border border-white/10"}`}>
                      {activeTab === "studio" ? <Building2 size={20} className="text-blood" /> : <Car size={20} className="text-ash" />}
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    {features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blood/15 flex items-center justify-center flex-shrink-0 mt-0.5"><Check size={12} className="text-blood" /></div>
                        <span className="text-ash text-xs leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-void-black rounded-sm px-4 py-3 border border-white/5 flex items-center gap-4">
                    <div>
                      <span className="text-stone text-[10px] tracking-wider uppercase">{t("booking.rate")}</span>
                      <p className="font-display text-xl text-white">$250/hr</p>
                    </div>
                    {activeTab === "mobile" && (<>
                      <div className="w-px h-8 bg-white/10" />
                      <div><span className="text-stone text-[10px] tracking-wider uppercase">{t("booking.travel")}</span><p className="text-blood text-xs font-medium">+ ${TRAVEL_FEE} {t("booking.travel")}</p></div>
                    </>)}
                  </div>
                </motion.div>

                {/* Deposit Card */}
                <div className="bg-gradient-to-b from-surface to-void-black border border-white/5 rounded-sm p-8">
                  <div className="mb-6">
                    <span className="text-stone text-xs tracking-widest uppercase block mb-2">{t("booking.depositSecure")}</span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-5xl text-white">${deposit}</span>
                      <span className="text-stone text-sm">CAD</span>
                    </div>
                    {activeTab === "mobile" && <p className="text-stone text-xs mt-1">{t("booking.includes")}</p>}
                    <p className="text-stone text-xs mt-2 leading-relaxed">{t("booking.depositNote")}</p>
                  </div>

                  {/* Booking Preview */}
                  <div className="border-t border-white/5 pt-5 mb-6 space-y-3">
                    <p className="text-xs text-stone tracking-widest uppercase mb-3">{t("booking.preview")}</p>
                    {formData.fullName && (<div className="flex items-center gap-2"><User size={13} className="text-stone" /><span className="text-sm text-bone truncate">{formData.fullName}</span></div>)}
                    {formData.date && (<div className="flex items-center gap-2"><CalendarDays size={13} className="text-stone" /><span className="text-sm text-bone">{formatDateDisplay(formData.date)}</span></div>)}
                    {formData.time && (<div className="flex items-center gap-2"><Clock size={13} className="text-stone" /><span className="text-sm text-bone">{formData.time}</span></div>)}
                    <div className="flex items-center gap-2">
                      {activeTab === "studio" ? <MapPin size={13} className="text-stone" /> : <Car size={13} className="text-stone" />}
                      <span className="text-sm text-bone">{activeTab === "studio" ? t("booking.lavalQuebec") : t("booking.mobileAddress")}</span>
                    </div>
                    {formData.address && activeTab === "mobile" && (<div className="flex items-center gap-2"><MapPin size={13} className="text-stone" /><span className="text-sm text-bone truncate">{formData.address}</span></div>)}
                  </div>

                  {/* Payment Methods */}
                  <div className="border-t border-white/5 pt-5 mb-6">
                    <p className="text-xs text-stone mb-3">{t("booking.payVia")}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-sm border border-white/5"><Wallet size={14} className="text-[#0066B2]" /><span className="text-bone text-xs">{t("booking.interac")}</span></div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-sm border border-white/5"><CreditCard size={14} className="text-[#003087]" /><span className="text-bone text-xs">PayPal</span></div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-sm border border-white/5"><CreditCard size={14} className="text-[#5C2D91]" /><span className="text-bone text-xs">KoHo</span></div>
                    </div>
                    <p className="text-stone text-[10px] mt-3">eTransfer: <span className="text-bone">a.elkashishy@gmail.com</span></p>
                  </div>

                  {/* Submit */}
                  <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-blood text-white font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-red-700 transition-all duration-300 shadow-lg shadow-blood/20 hover:shadow-blood/40 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? (<><Loader2 size={18} className="animate-spin" />{t("booking.submitting")}</>) : (<>{t("booking.submit")}<ArrowRight size={16} /></>)}
                  </button>
                  <p className="text-stone text-[10px] text-center mt-3 leading-relaxed">{t("booking.agree")}</p>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Steps */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-20 max-w-3xl mx-auto">
          <p className="text-center text-stone text-sm tracking-widest uppercase mb-8">{t("booking.stepsTitle")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
            {[
              { icon: Send, label: t("booking.step1") },
              { icon: CreditCard, label: t("booking.step2") },
              { icon: CalendarDays, label: t("booking.step3") },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-surface border border-white/10 flex items-center justify-center">
                    <step.icon size={20} className="text-blood" />
                  </div>
                  <span className="text-xs text-ash text-center w-28">{step.label}</span>
                </div>
                {i < 2 && (<div className="hidden sm:flex w-12 border-t-2 border-dashed border-white/10 mb-6" />)}
                {i < 2 && (<div className="sm:hidden flex h-8 border-l-2 border-dashed border-white/10" />)}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
