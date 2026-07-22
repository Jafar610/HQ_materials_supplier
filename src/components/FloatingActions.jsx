import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

export default function FloatingActions() {
  return (
    <motion.a
      href="tel:+251923634847"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.93 }}
      className="fixed bottom-6 right-5 z-50 flex items-center gap-2.5 px-5 py-3.5 bg-yellow-400 text-black font-bold text-sm rounded-full shadow-2xl shadow-yellow-500/40 hover:bg-yellow-300 transition-colors duration-200"
      aria-label="Call us"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-25 pointer-events-none" />
      <FaPhoneAlt className="text-base shrink-0" />
      Call Now
    </motion.a>
  );
}
