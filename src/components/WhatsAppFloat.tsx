import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Calendar, Send } from "lucide-react";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleBookingWhatsApp = () => {
    const message = `Hi Marc! 👋 I'd like to book a tattoo session. Could you share your availability?`;
    window.open(`https://wa.me/14387639904?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleGoogleCal = () => {
    const now = new Date();
    const later = new Date(now.getTime() + 60 * 60 * 1000);
    const formatDate = (d: Date) =>
      d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Tattoo Session — Marc Blackwell")}&dates=${formatDate(now)}/${formatDate(later)}&location=${encodeURIComponent("Laval, Quebec, Canada")}&details=${encodeURIComponent("Booked via marcbblackwell.com\n\nPay deposit via:\n• Interac e-Transfer: a.elkashishy@gmail.com\n• PayPal\n• KoHo")}`;
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3"
        >
          {/* Expanded Menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="mb-2 bg-surface border border-white/10 rounded-sm shadow-2xl shadow-black/50 overflow-hidden w-72"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blood to-red-800 px-4 py-3">
                  <h4 className="text-white font-display text-sm tracking-wider">
                    QUICK ACTIONS
                  </h4>
                  <p className="text-white/60 text-[10px] mt-0.5">
                    Choose how you'd like to connect
                  </p>
                </div>

                {/* Options */}
                <div className="p-3 space-y-2">
                  {/* WhatsApp - Book */}
                  <button
                    onClick={handleBookingWhatsApp}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-[#25D366]/10 border border-[#25D366]/20 rounded-sm hover:bg-[#25D366]/20 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={16} className="text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-bone text-sm font-medium group-hover:text-[#25D366] transition-colors">
                        Book on WhatsApp
                      </p>
                      <p className="text-stone text-[10px]">
                        Send a message to get started
                      </p>
                    </div>
                  </button>

                  {/* Google Calendar */}
                  <button
                    onClick={handleGoogleCal}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/5 rounded-sm hover:bg-white/10 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Calendar size={16} className="text-bone" />
                    </div>
                    <div className="text-left">
                      <p className="text-bone text-sm font-medium group-hover:text-white transition-colors">
                        Google Calendar
                      </p>
                      <p className="text-stone text-[10px]">
                        Save session reminder
                      </p>
                    </div>
                  </button>

                  {/* Booking Form */}
                  <a
                    href="#booking"
                    onClick={() => setOpen(false)}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/5 rounded-sm hover:bg-white/10 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-full bg-blood/20 flex items-center justify-center flex-shrink-0">
                      <Send size={16} className="text-blood" />
                    </div>
                    <div className="text-left">
                      <p className="text-bone text-sm font-medium group-hover:text-blood transition-colors">
                        Fill Booking Form
                      </p>
                      <p className="text-stone text-[10px]">
                        $75 deposit to secure
                      </p>
                    </div>
                  </a>

                  {/* eTransfer Quick Info */}
                  <div className="px-4 py-3 bg-void-black/50 rounded-sm border border-white/5">
                    <p className="text-stone text-[10px] mb-1">
                      💳 Quick Deposit — eTransfer to:
                    </p>
                    <p className="text-bone text-xs font-mono">
                      a.elkashishy@gmail.com
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <motion.button
            onClick={() => setOpen(!open)}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
              open
                ? "bg-surface border border-white/10 text-bone"
                : "bg-[#25D366] text-white hover:bg-[#20bd5a] hover:shadow-[#25D366]/30"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {open ? <X size={24} /> : <MessageCircle size={26} />}
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
