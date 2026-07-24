import { motion } from "framer-motion";
import {
  FaTruck,
  FaBoxOpen,
  FaHandshake,
  FaPhoneAlt,
  FaMoneyBillWave,
  FaMedal,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const reasons = [
  {
    id: "quality",
    icon: FaMedal,
    title: "Premium Quality Steel",
    desc: "All our steel bars meet standard specifications. We only stock certified, high-grade reinforcing bars.",
    accent: "yellow",
  },
  {
    id: "stock",
    icon: FaBoxOpen,
    title: "All Sizes Always In Stock",
    desc: "From 6 mm to 32 mm — we maintain large inventory levels so your project never stalls.",
    accent: "orange",
  },
  {
    id: "price",
    icon: FaMoneyBillWave,
    title: "Competitive Pricing",
    desc: "We offer transparent, market-competitive prices. No hidden fees — just honest value on every order.",
    accent: "emerald",
  },
  {
    id: "delivery",
    icon: FaTruck,
    title: "Fast Site Delivery",
    desc: "We deliver directly to your construction site or yard, quickly and reliably anywhere in Ethiopia.",
    accent: "sky",
  },
  {
    id: "range",
    icon: MdVerified,
    title: "Wide Range of Sizes",
    desc: "Nine standard diameters under one roof. No need to source from multiple suppliers.",
    accent: "violet",
  },
  {
    id: "service",
    icon: FaPhoneAlt,
    title: "Excellent Customer Service",
    desc: "Our team responds fast and makes ordering simple — by phone, in person, or online.",
    accent: "rose",
  },
];

const map = {
  yellow: {
    text: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
    glow: "hover:shadow-yellow-500/10",
  },
  orange: {
    text: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    glow: "hover:shadow-orange-500/10",
  },
  emerald: {
    text: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    glow: "hover:shadow-emerald-500/10",
  },
  sky: {
    text: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-400/20",
    glow: "hover:shadow-sky-500/10",
  },
  violet: {
    text: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
    glow: "hover:shadow-violet-500/10",
  },
  rose: {
    text: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20",
    glow: "hover:shadow-rose-500/10",
  },
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-24 lg:py-32 bg-[#111827] relative overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] bg-yellow-500/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            The{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Rebar Building Center
            </span>{" "}
            Advantage
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We built our business on one thing — being the most reliable steel
            bar supplier our customers can count on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ id, icon: Icon, title, desc, accent }, i) => {
            const a = map[accent];
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-14 p-7 rounded-2xl bg-gradient-to-r from-yellow-500/10 via-yellow-400/5 to-yellow-500/10 border border-yellow-400/20 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-yellow-400/15 flex items-center justify-center shrink-0">
              <FaHandshake className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <div className="text-white font-bold text-base">
                Trusted by 500+ Contractors & Builders
              </div>
              <div className="text-slate-400 text-sm">
                Across residential, commercial, and infrastructure projects in
                Ethiopia
              </div>
            </div>
          </div>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="shrink-0 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold text-sm rounded-xl hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300"
          >
            Request a Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
