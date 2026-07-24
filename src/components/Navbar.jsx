import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import rbclogo from "../assets/RBC-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href) => {
    setOpen(false);
    scrollTo(href);
  };

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1117]/95 backdrop-blur-lg border-b border-white/[0.06] shadow-2xl shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-[68px]">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("#home");
          }}
          className="flex items-center shrink-0"
        >
          <img
            src={rbclogo}
            alt="RBC Logo"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                go(l.href);
              }}
              className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 group"
            >
              {l.label}
              <span className="absolute inset-x-4 bottom-[3px] h-[2px] bg-gradient-to-r from-yellow-400 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
            </a>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+251923634847"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-yellow-400 transition-colors duration-200"
          >
            <FaPhoneAlt className="text-yellow-400 text-[11px]" />
            +251 923 634 847
          </a>
          <button
            onClick={() => go("#contact")}
            className="px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm rounded-lg hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300"
          >
            Order Now
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <HiX className="text-2xl" />
          ) : (
            <HiMenuAlt3 className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#0d1117]/98 backdrop-blur-xl border-t border-white/[0.06]"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    go(l.href);
                  }}
                  className="py-3 px-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="mt-2 pt-3 border-t border-white/[0.06] flex flex-col gap-2">
                <a
                  href="tel:+251923634847"
                  className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-yellow-400"
                >
                  <FaPhoneAlt className="text-xs" /> Call Us: +251 923 634 847
                </a>
                <button
                  onClick={() => go("#contact")}
                  className="py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm rounded-lg"
                >
                  Order Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
