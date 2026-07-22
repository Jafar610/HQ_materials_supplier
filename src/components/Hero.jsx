import { motion } from "framer-motion";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { HiCheckCircle } from "react-icons/hi";
import { MdLocalShipping, MdPriceCheck, MdInventory2 } from "react-icons/md";
import heroImg from "../assets/hero1.png";

const badges = [
  { icon: MdInventory2, text: "Always In Stock" },
  { icon: MdPriceCheck, text: "Best Market Price" },
  { icon: MdLocalShipping, text: "Fast Delivery" },
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "50+", label: "Products" },
  { value: "10+", label: "Years Supplying" },
  { value: "99%", label: "On-Time Delivery" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1117]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/85 to-[#0d1117]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/5 text-yellow-400 text-xs font-semibold tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            Your Local Building Materials Supplier
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
          >
            Quality Materials,{" "}
            <span className="text-gradient">Delivered Fast.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-lg text-slate-300 leading-relaxed max-w-xl mb-8"
          >
            Steel rebar, cement, binding wire, mesh, pipes and more — available
            in stock at competitive prices. Trusted by builders, contractors,
            and developers.
          </motion.p>

          {/* Badges */}
          <motion.div {...fadeUp(0.35)} className="flex flex-wrap gap-3 mb-10">
            {badges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-sm font-medium"
              >
                <Icon className="text-yellow-400 text-base shrink-0" />
                {text}
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => scrollTo("#products")}
              className="group flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm rounded-xl hover:shadow-2xl hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300 glow-yellow"
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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]"
          >
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-[#0d1117]/80 px-5 py-5 text-center backdrop-blur-sm"
              >
                <div className="text-2xl font-black text-yellow-400">
                  {value}
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5 font-medium">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] text-slate-500 uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="w-[1px] h-6 bg-gradient-to-b from-yellow-400/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
