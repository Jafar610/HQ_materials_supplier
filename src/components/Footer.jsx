import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import hqLogo from "../assets/HQ-logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const quickLinks = ["Home", "About", "Products", "Why Us", "Contact"];

const products = [
  "Steel Rebar",
  "Cement",
  "Binding Wire",
  "Steel Mesh",
  "Pipes",
  "Roofing Sheets",
];

const socials = [
  {
    icon: FaFacebook,
    href: "#",
    label: "Facebook",
    color: "hover:text-blue-400 hover:border-blue-400/30",
  },
  {
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
    color: "hover:text-pink-400 hover:border-pink-400/30",
  },
  {
    icon: FaTwitter,
    href: "#",
    label: "Twitter",
    color: "hover:text-sky-400 hover:border-sky-400/30",
  },
  {
    icon: FaLinkedin,
    href: "#",
    label: "LinkedIn",
    color: "hover:text-blue-500 hover:border-blue-500/30",
  },
];

const scrollTo = (label) => {
  const map = {
    Home: "#home",
    About: "#about",
    Products: "#products",
    "Why Us": "#why-us",
    Contact: "#contact",
  };
  const id = map[label] || `#${label.toLowerCase().replace(/\s+/g, "-")}`;
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0e16] border-t border-white/[0.04]">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <img
                src={hqLogo}
                alt="HQ Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your reliable supplier of quality building materials. Steel rebar,
              cement, binding wire, pipes, and more — always in stock at
              competitive prices.
            </p>

            {/* Socials */}
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={s.label}
                  className={`w-9 h-9 rounded-lg bg-[#111827] border border-[#1e293b] flex items-center justify-center text-slate-400 ${s.color} transition-all duration-250`}
                >
                  <s.icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((lnk) => (
                <li key={lnk}>
                  <button
                    onClick={() => scrollTo(lnk)}
                    className="flex items-center gap-2 text-slate-400 text-sm hover:text-yellow-400 transition-colors duration-200 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[2px] bg-yellow-400 transition-all duration-250 rounded-full" />
                    {lnk}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Products
            </h4>
            <ul className="space-y-2.5">
              {products.map((prod) => (
                <li key={prod}>
                  <button
                    onClick={() => scrollTo("Products")}
                    className="flex items-center gap-2 text-slate-400 text-sm hover:text-yellow-400 transition-colors duration-200 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[2px] bg-yellow-400 transition-all duration-250 rounded-full" />
                    {prod}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+251923634847"
                  className="flex items-start gap-2.5 text-slate-400 text-sm hover:text-yellow-400 transition-colors duration-200"
                >
                  <MdPhone className="text-yellow-400 text-base mt-0.5 shrink-0" />
                  <div>
                    <div>+251 923 634 847</div>
                    <div className="text-xs text-slate-500">
                      Mon–Sat, 7am–6pm
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:orders@hqmaterials.com"
                  className="flex items-start gap-2.5 text-slate-400 text-sm hover:text-yellow-400 transition-colors duration-200"
                >
                  <MdEmail className="text-yellow-400 text-base mt-0.5 shrink-0" />
                  orders@hqmaterials.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-slate-400 text-sm">
                  <MdLocationOn className="text-yellow-400 text-base mt-0.5 shrink-0" />
                  <div>Addis Ababa, Ethiopia</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-slate-500">
            © {year} <span className="text-slate-400">H.Q Materials</span>. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-500 text-xs">
            <a
              href="#"
              className="hover:text-slate-300 transition-colors duration-200"
            >
              Privacy
            </a>
            <span>·</span>
            <a
              href="#"
              className="hover:text-slate-300 transition-colors duration-200"
            >
              Terms
            </a>
            <span>·</span>
            <a
              href="#"
              className="hover:text-slate-300 transition-colors duration-200"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
