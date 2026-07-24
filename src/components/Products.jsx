import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import rebarImg from "../assets/product_rebar.png";

const products = [
  {
    id: "r6",
    name: "6 mm Steel Bar",
    mm: "6",
    badge: "Available",
    badgeColor: "bg-emerald-500 text-white",
    image: rebarImg,
    desc: "Ideal for light slabs, ties, and stirrups. Flexible and easy to work with.",
    tags: ["Ø 6 mm", "In Stock", "Per Tonne/Bundle"],
  },
  {
    id: "r8",
    name: "8 mm Steel Bar",
    mm: "8",
    badge: "Best Seller",
    badgeColor: "bg-yellow-400 text-black",
    image: rebarImg,
    desc: "Widely used for stirrups, ties, and light reinforcement in slabs and walls.",
    tags: ["Ø 8 mm", "In Stock", "Per Tonne/Bundle"],
  },
  {
    id: "r10",
    name: "10 mm Steel Bar",
    mm: "10",
    badge: "Best Seller",
    badgeColor: "bg-yellow-400 text-black",
    image: rebarImg,
    desc: "Versatile bar for general reinforcement in beams, columns, and foundations.",
    tags: ["Ø 10 mm", "In Stock", "Per Tonne/Bundle"],
  },
  {
    id: "r12",
    name: "12 mm Steel Bar",
    mm: "12",
    badge: "High Demand",
    badgeColor: "bg-orange-500 text-white",
    image: rebarImg,
    desc: "One of the most commonly specified sizes for residential structural elements.",
    tags: ["Ø 12 mm", "In Stock", "Per Tonne/Bundle"],
  },
  {
    id: "r14",
    name: "14 mm Steel Bar",
    mm: "14",
    badge: "Available",
    badgeColor: "bg-emerald-500 text-white",
    image: rebarImg,
    desc: "Used for medium-load columns, beams, and retaining wall reinforcement.",
    tags: ["Ø 14 mm", "In Stock", "Per Tonne/Bundle"],
  },
  {
    id: "r16",
    name: "16 mm Steel Bar",
    mm: "16",
    badge: "High Demand",
    badgeColor: "bg-orange-500 text-white",
    image: rebarImg,
    desc: "Heavy-duty reinforcement for load-bearing columns and commercial foundations.",
    tags: ["Ø 16 mm", "In Stock", "Per Tonne/Bundle"],
  },
  {
    id: "r20",
    name: "20 mm Steel Bar",
    mm: "20",
    badge: "Available",
    badgeColor: "bg-emerald-500 text-white",
    image: rebarImg,
    desc: "Suitable for heavy structural elements, large columns, and deep foundations.",
    tags: ["Ø 20 mm", "In Stock", "Per Tonne/Bundle"],
  },
  {
    id: "r24",
    name: "24 mm Steel Bar",
    mm: "24",
    badge: "Available",
    badgeColor: "bg-emerald-500 text-white",
    image: rebarImg,
    desc: "Used in large-scale commercial and infrastructure projects requiring high loads.",
    tags: ["Ø 24 mm", "In Stock", "Per Tonne/Bundle"],
  },
  {
    id: "r32",
    name: "32 mm Steel Bar",
    mm: "32",
    badge: "Available",
    badgeColor: "bg-sky-500 text-white",
    image: rebarImg,
    desc: "Maximum-grade bar for bridges, high-rise structures, and industrial foundations.",
    tags: ["Ø 32 mm", "In Stock", "Per Tonne/Bundle"],
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-24 lg:py-32 bg-[#0f1117] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">
            <span className="w-5 h-[2px] bg-yellow-400" /> Our Products{" "}
            <span className="w-5 h-[2px] bg-yellow-400" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            All Sizes.{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Always Available.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We stock every standard rebar size from 6 mm to 32 mm. Ready to
            order — no waiting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="text-slate-400 mb-4 text-sm">
            Need a bulk order or a custom quantity?
          </p>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-8 py-4 border border-yellow-400/40 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 text-sm"
          >
            Contact Us for Bulk Pricing
          </button>
        </motion.div>
      </div>
    </section>
  );
}
