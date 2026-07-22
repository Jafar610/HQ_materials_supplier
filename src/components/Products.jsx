import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import rebarImg from "../assets/product_rebar.png";
import cementImg from "../assets/product_cement.png";
import beamsImg from "../assets/product_beams.png";

const ALL = "All";

const products = [
  {
    id: "rebar",
    name: "Steel Rebar (Y-Bar)",
    category: "Steel",
    image: rebarImg,
    badge: "Best Seller",
    badgeColor: "bg-yellow-400 text-black",
    desc: "High-tensile steel reinforcement bars for foundations, slabs, and columns. Available in various sizes.",
    tags: ["Y8 – Y32", "In Stock", "Bulk Available"],
  },
  {
    id: "binding-wire",
    name: "Binding Wire",
    category: "Steel",
    image: rebarImg,
    badge: "In Stock",
    badgeColor: "bg-emerald-500 text-white",
    desc: "Soft annealed binding wire used for tying rebar together. Strong, flexible, and rust-resistant.",
    tags: ["Annealed", "Per Roll", "In Stock"],
  },
  {
    id: "mesh",
    name: "Steel Mesh / BRC",
    category: "Steel",
    image: beamsImg,
    badge: "In Stock",
    badgeColor: "bg-emerald-500 text-white",
    desc: "Welded steel mesh for floor slabs, roads, and walls. Saves labor and speeds up construction.",
    tags: ["BRC Sheets", "Various Sizes", "In Stock"],
  },
  {
    id: "cement",
    name: "Cement (OPC / PPC)",
    category: "Cement",
    image: cementImg,
    badge: "Best Price",
    badgeColor: "bg-orange-500 text-white",
    desc: "Ordinary and Pozzolana Portland Cement from trusted brands. Perfect for all types of construction work.",
    tags: ["42.5N", "32.5R", "Per Bag / Bulk"],
  },
  {
    id: "pipes",
    name: "GI & uPVC Pipes",
    category: "Pipes",
    image: beamsImg,
    badge: "In Stock",
    badgeColor: "bg-emerald-500 text-white",
    desc: "Galvanized iron and uPVC pipes for plumbing, water lines, and structural applications. Multiple diameters available.",
    tags: ['½" – 4"', "GI & uPVC", "In Stock"],
  },
  {
    id: "beams",
    name: "Steel Beams & Columns",
    category: "Steel",
    image: beamsImg,
    badge: "Available",
    badgeColor: "bg-sky-500 text-white",
    desc: "Structural steel sections including I-beams, H-columns, and angles for heavy-duty projects.",
    tags: ["I-Beam", "H-Column", "Angle Iron"],
  },
  {
    id: "roofing",
    name: "Roofing Sheets",
    category: "Roofing",
    image: cementImg,
    badge: "New Stock",
    badgeColor: "bg-violet-500 text-white",
    desc: "Corrugated and box-profile iron roofing sheets in various gauges and lengths. Rust-coated for durability.",
    tags: ["Corrugated", "Box Profile", "Gauge 28–30"],
  },
  {
    id: "nails",
    name: "Nails & Fasteners",
    category: "Hardware",
    image: rebarImg,
    badge: "In Stock",
    badgeColor: "bg-emerald-500 text-white",
    desc: "Wire nails, masonry nails, and other fasteners for all general construction and carpentry needs.",
    tags: ["Wire Nails", "Masonry", "Per Box / Kg"],
  },
  {
    id: "aggregate",
    name: "Coarse Aggregate / Sand",
    category: "Aggregates",
    image: cementImg,
    badge: "Bulk Only",
    badgeColor: "bg-amber-700 text-white",
    desc: "Crushed stone aggregate and sharp sand for concrete mixing. Delivered in bulk to your site.",
    tags: ["10mm", "20mm", "Bulk Delivery"],
  },
];

const categories = [
  ALL,
  ...Array.from(new Set(products.map((p) => p.category))),
];

export default function Products() {
  const [active, setActive] = useState(ALL);

  const filtered =
    active === ALL ? products : products.filter((p) => p.category === active);

  return (
    <section
      id="products"
      className="section-base py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">
            <span className="w-5 h-[2px] bg-yellow-400" /> Our Products{" "}
            <span className="w-5 h-[2px] bg-yellow-400" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Everything You Need,{" "}
            <span className="text-gradient">In One Place</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            All materials are in stock and ready to order. Competitive prices,
            fast dispatch.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-250 ${
                active === cat
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg shadow-yellow-500/25"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:border-yellow-400/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="text-slate-400 mb-4 text-sm">
            Need a specific material or a bulk quote?
          </p>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-8 py-4 border border-yellow-400/40 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 text-sm"
          >
            Request a Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
