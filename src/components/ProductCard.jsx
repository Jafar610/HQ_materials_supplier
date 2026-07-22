import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { MdInventory2 } from "react-icons/md";

export default function ProductCard({ product, index }) {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
      className="group relative flex flex-col bg-[#111827] rounded-2xl overflow-hidden border border-[#1e293b] hover:border-yellow-400/35 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/20 to-transparent" />

        {/* Badge */}
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold ${product.badgeColor}`}
        >
          {product.badge}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <div className="text-[11px] font-semibold text-yellow-400 uppercase tracking-widest mb-1.5">
          {product.category}
        </div>
        <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors duration-300 leading-snug">
          {product.name}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {product.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-[#1e2940] text-slate-300 text-[11px] rounded-md font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={scrollToContact}
          className="group/btn w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-yellow-400/30 text-yellow-400 text-sm font-semibold hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-250"
        >
          <MdInventory2 className="text-base" />
          Order / Enquire
          <FiArrowRight className="ml-auto group-hover/btn:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </motion.article>
  );
}
