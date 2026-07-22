import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";
import { MdVerified, MdHandshake, MdSpeed } from "react-icons/md";
import { FaTruck, FaBoxOpen, FaStar } from "react-icons/fa";
import heroImg from "../assets/hero2.png";

const highlights = [
  "Wide range of construction materials always available",
  "Bulk and retail orders accepted",
  "Reliable delivery to your site or warehouse",
  "Transparent pricing — no hidden charges",
  "Serving individual buyers, contractors & developers",
];

const pillars = [
  {
    icon: FaBoxOpen,
    label: "Wide Product Range",
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
    label: "Quality Guaranteed",
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

const inView = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function About() {
  return (
    <section
      id="about"
      className="section-alt py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 64px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 64px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...inView} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">
            <span className="w-5 h-[2px] bg-yellow-400" /> About Us{" "}
            <span className="w-5 h-[2px] bg-yellow-400" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Your Trusted{" "}
            <span className="text-gradient">Materials Supplier</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            We make it easy to get the materials you need — in stock, at the
            right price, delivered on time.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <img
                src={heroImg}
                alt="Our warehouse"
                className="w-full h-[380px] lg:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-black px-6 py-4 rounded-2xl shadow-2xl shadow-yellow-500/30 font-black text-sm">
              <div className="text-3xl font-black">10+</div>
              <div className="text-[11px] font-bold uppercase tracking-wide">
                Years in Business
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              <strong className="text-white">H.Q Materials</strong> is a
              dedicated building materials supplier serving individual buyers,
              contractors, and developers. We stock a comprehensive range of
              reinforcing and construction materials so you never have to search
              elsewhere.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Whether you need a few bags of cement or a bulk order of steel
              rebar, we've got you covered with competitive prices and reliable,
              prompt delivery to your location.
            </p>

            {/* Highlights list */}
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
              className="px-7 py-3.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm rounded-xl hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300"
            >
              Get a Quote Today
            </button>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map(({ icon: Icon, label, color, bg }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#0d1117] border border-[#1e293b] text-center hover:border-yellow-400/25 transition-all duration-300"
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
