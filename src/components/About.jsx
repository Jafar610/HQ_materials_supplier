import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";
import { FaTruck, FaBoxOpen, FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import heroImg from "../assets/product_rebar.png";

const highlights = [
  "All standard sizes in stock — 6 mm to 32 mm",
  "Bulk and retail orders accepted",
  "Reliable delivery directly to your site",
  "Transparent, competitive pricing",
  "Serving contractors, builders, developers, and individuals",
];

const pillars = [
  {
    icon: FaBoxOpen,
    label: "Always In Stock",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: FaTruck,
    label: "Fast Delivery",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    icon: MdVerified,
    label: "Certified Products",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    icon: FaStar,
    label: "Best Market Prices",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
];

const iv = (extra = {}) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut", ...extra },
});

export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-[#111827] relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 64px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 64px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...iv()} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">
            <span className="w-5 h-[2px] bg-yellow-400" /> About Us{" "}
            <span className="w-5 h-[2px] bg-yellow-400" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Ethiopia's Trusted{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Steel Bar Supplier
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Dedicated exclusively to reinforcing steel bars — quality stock,
            fair prices, reliable supply.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <img
                src={heroImg}
                alt="Rebar Building Center warehouse"
                className="w-full h-[380px] lg:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-4 bg-gradient-to-br from-yellow-500 to-yellow-400 text-black px-6 py-4 rounded-2xl shadow-2xl shadow-yellow-500/30 font-black">
              <div className="text-3xl font-black">5+</div>
              <div className="text-[11px] font-bold uppercase tracking-wide">
                Years Supplying
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              <strong className="text-white">Rebar Building Center</strong> is a
              dedicated supplier of reinforcing steel bars based in Addis Ababa,
              Ethiopia. We serve contractors, builders, developers, hardware
              stores, and individual buyers with a comprehensive range of rebar
              sizes.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Whether you need a small quantity or a full bulk order, we keep
              sufficient stock at all times and offer dependable delivery so
              your project never has to wait.
            </p>
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <HiCheckCircle className="text-yellow-400 text-lg mt-0.5 shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3.5 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold text-sm rounded-xl hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300"
            >
              Request a Quote
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map(({ icon: Icon, label, color, bg }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#0f1117] border border-white/[0.06] text-center hover:border-yellow-400/25 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center`}
              >
                <Icon className={`${color} text-xl`} />
              </div>
              <span className="text-white font-semibold text-sm">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
