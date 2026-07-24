import { motion } from "framer-motion";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { MdVerified, MdLocalShipping, MdPriceCheck } from "react-icons/md";
import heroImg from "../assets/hero1.png";

const pills = [
  { icon: MdVerified, label: "Certified Steel" },
  { icon: MdPriceCheck, label: "Best Prices" },
  { icon: MdLocalShipping, label: "Fast Delivery" },
];

const stats = [
  { value: "9+", label: "Bar Sizes" },
  { value: "500+", label: "Happy Clients" },
  { value: "5+", label: "Years Supplying" },
  { value: "100%", label: "Quality Assured" },
];

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

const scrollTo = (id) =>
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0f1117]"
    >
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          className="w-full h-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1117] via-[#0f1117]/90 to-[#0f1117]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1117] via-transparent to-transparent" />
      </div>
      <div className="absolute top-1/3 left-1/4 w-[480px] h-[480px] bg-yellow-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[320px] h-[320px] bg-yellow-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="max-w-3xl">
          <motion.div
            {...up(0.1)}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/[0.06] text-yellow-400 text-xs font-semibold tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            Addis Ababa, Ethiopia
          </motion.div>

          <motion.h1
            {...up(0.2)}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.04] tracking-tight mb-6"
          >
            Your Trusted
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Steel Bar Supplier.
            </span>
          </motion.h1>

          <motion.p
            {...up(0.3)}
            className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl mb-8"
          >
            Premium reinforcing steel bars in all sizes from 6 mm to 32 mm.
            Reliable stock, competitive prices, and fast delivery across
            Ethiopia.
          </motion.p>

          <motion.div {...up(0.35)} className="flex flex-wrap gap-2.5 mb-10">
            {pills.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-slate-200 text-sm font-medium"
              >
                <Icon className="text-yellow-400 text-base shrink-0" />
                {label}
              </span>
            ))}
          </motion.div>

          <motion.div {...up(0.4)} className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => scrollTo("#products")}
              className="group flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold text-sm rounded-xl hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300"
            >
              View Products
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <a
              href="tel:+251923634847"
              className="flex items-center gap-2 px-7 py-4 border border-white/20 text-white font-semibold text-sm rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              <FiPhone className="text-yellow-400" />
              Call Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.55 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.05]"
          >
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-[#0f1117]/80 px-5 py-5 text-center backdrop-blur-sm"
              >
                <div className="text-2xl font-black text-yellow-400">
                  {value}
                </div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5 font-medium">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] text-slate-500 uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-6 bg-gradient-to-b from-yellow-400/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
