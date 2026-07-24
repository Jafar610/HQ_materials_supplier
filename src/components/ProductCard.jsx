import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { MdOutlineRequestQuote } from "react-icons/md";

export default function ProductCard({ product, index }) {
  const scroll = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.07, 0.42) }}
      className="group relative flex flex-col bg-[#111827] rounded-2xl overflow-hidden border border-white/[0.07] hover:border-yellow-400/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/60"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden shrink-0 bg-[#0f1117]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/30 to-transparent" />
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold ${product.badgeColor}`}
        >
          {product.badge}
        </span>
        <span className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center text-yellow-400 text-xl font-black border border-white/10">
          {product.mm}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <div className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest mb-1">
          Reinforcing Steel
        </div>
        <h3 className="text-white font-bold text-base mb-1.5 group-hover:text-yellow-400 transition-colors duration-300 leading-snug">
          {product.name}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {product.desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 bg-white/[0.05] border border-white/[0.08] text-slate-300 text-[11px] rounded-md font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={scroll}
          className="group/btn w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-yellow-400/30 text-yellow-400 text-sm font-semibold hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-250"
        >
          <MdOutlineRequestQuote className="text-base" />
          Request a Quote
          <FiArrowRight className="ml-auto group-hover/btn:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </motion.article>
  );
}
