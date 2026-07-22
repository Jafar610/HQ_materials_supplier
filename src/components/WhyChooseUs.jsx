import { motion } from "framer-motion";
import {
  FaTruck,
  FaBoxOpen,
  FaHandshake,
  FaStar,
  FaPhoneAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const reasons = [
  {
    id: "stock",
    icon: FaBoxOpen,
    title: "Always In Stock",
    desc: "We maintain large inventory levels so your project never stalls waiting for materials.",
    accent: "yellow",
  },
  {
    id: "price",
    icon: FaMoneyBillWave,
    title: "Competitive Pricing",
    desc: "We offer some of the best market rates. No inflated margins — just fair, transparent pricing.",
    accent: "emerald",
  },
  {
    id: "delivery",
    icon: FaTruck,
    title: "Fast Site Delivery",
    desc: "We deliver directly to your construction site or warehouse, quickly and reliably.",
    accent: "orange",
  },
  {
    id: "range",
    icon: FaBoxOpen,
    title: "Wide Range of Materials",
    desc: "From rebar and cement to pipes and roofing sheets — everything under one roof.",
    accent: "sky",
  },
  {
    id: "trust",
    icon: FaHandshake,
    title: "Trusted Supplier",
    desc: "Hundreds of contractors and builders rely on us for consistent, quality materials every time.",
    accent: "violet",
  },
  {
    id: "support",
    icon: FaPhoneAlt,
    title: "Easy to Order",
    desc: "Call, WhatsApp, or fill our form. We make ordering simple — no complicated process.",
    accent: "rose",
  },
];

const accentMap = {
  yellow: {
    text: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
    glow: "hover:shadow-yellow-500/15",
  },
  emerald: {
    text: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    glow: "hover:shadow-emerald-500/15",
  },
  orange: {
    text: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    glow: "hover:shadow-orange-500/15",
  },
  sky: {
    text: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-400/20",
    glow: "hover:shadow-sky-500/15",
  },
  violet: {
    text: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
    glow: "hover:shadow-violet-500/15",
  },
  rose: {
    text: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20",
    glow: "hover:shadow-rose-500/15",
  },
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="section-alt py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] bg-yellow-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">
            <span className="w-5 h-[2px] bg-yellow-400" /> Why Choose Us{" "}
            <span className="w-5 h-[2px] bg-yellow-400" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            The <span className="text-gradient">H.Q Materials</span> Difference
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We built our business on making material supply simple, affordable,
            and dependable.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ id, icon: Icon, title, desc, accent }, i) => {
            const a = accentMap[accent];
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative p-7 rounded-2xl border ${a.border} bg-gradient-to-br from-white/[0.03] to-transparent hover:shadow-xl ${a.glow} transition-all duration-300 hover:-translate-y-1`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${a.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`${a.text} text-xl`} />
                </div>
                <div className="absolute top-5 right-6 text-6xl font-black text-white/[0.03] select-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-14 p-7 rounded-2xl bg-gradient-to-r from-yellow-500/10 via-orange-500/8 to-yellow-500/10 border border-yellow-400/20 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-yellow-400/15 flex items-center justify-center shrink-0">
              <MdVerified className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <div className="text-white font-bold text-base">
                Trusted by 500+ Builders & Contractors
              </div>
              <div className="text-slate-400 text-sm">
                Across residential, commercial, and infrastructure projects
              </div>
            </div>
          </div>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="shrink-0 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm rounded-xl hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300"
          >
            Get a Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
