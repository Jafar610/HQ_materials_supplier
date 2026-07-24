import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import rbclogo from "../assets/RBC-logo.png";

const nav = ["Home", "About", "Products", "Why Us", "Contact"];
const sizes = [
  "6 mm",
  "8 mm",
  "10 mm",
  "12 mm",
  "14 mm",
  "16 mm",
  "20 mm",
  "24 mm",
  "32 mm",
];
const socials = [
  {
    icon: FaFacebook,
    href: "#",
    label: "Facebook",
    cls: "hover:text-blue-400 hover:border-blue-400/30",
  },
  {
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
    cls: "hover:text-pink-400 hover:border-pink-400/30",
  },
  {
    icon: FaTelegram,
    href: "#",
    label: "Telegram",
    cls: "hover:text-sky-400 hover:border-sky-400/30",
  },
  {
    icon: FaYoutube,
    href: "#",
    label: "YouTube",
    cls: "hover:text-red-400 hover:border-red-400/30",
  },
];

const scrollTo = (label) => {
  const m = {
    Home: "#home",
    About: "#about",
    Products: "#products",
    "Why Us": "#why-us",
    Contact: "#contact",
  };
  document
    .querySelector(m[label] || "#home")
    ?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#090d15] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <img
                src={rbclogo}
                alt="Rebar Building Center"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted supplier of premium reinforcing steel bars in Addis
              Ababa, Ethiopia. All sizes from 6 mm to 32 mm — always in stock at
              competitive prices.
            </p>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={s.label}
                  className={`w-9 h-9 rounded-lg bg-[#111827] border border-white/[0.07] flex items-center justify-center text-slate-400 ${s.cls} transition-all duration-250`}
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
              {nav.map((l) => (
                <li key={l}>
                  <button
                    onClick={() => scrollTo(l)}
                    className="flex items-center gap-2 text-slate-400 text-sm hover:text-yellow-400 transition-colors duration-200 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[2px] bg-yellow-400 transition-all duration-250 rounded-full" />
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Steel Bar Sizes
            </h4>
            <ul className="space-y-2.5">
              {sizes.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("Products")}
                    className="flex items-center gap-2 text-slate-400 text-sm hover:text-yellow-400 transition-colors duration-200 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[2px] bg-yellow-400 transition-all duration-250 rounded-full" />
                    {s} Rebar
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
                    <div>+251 92 363 4847</div>
                    <div className="text-xs text-slate-500">
                      Mon–Sat, 7am–6pm
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:orders@rebarbuildingcenter.com"
                  className="flex items-start gap-2.5 text-slate-400 text-sm hover:text-yellow-400 transition-colors duration-200"
                >
                  <MdEmail className="text-yellow-400 text-base mt-0.5 shrink-0" />
                  orders@rebarbuildingcenter.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-slate-400 text-sm">
                  <MdLocationOn className="text-yellow-400 text-base mt-0.5 shrink-0" />
                  Addis Ababa, Ethiopia
                </div>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-yellow-400/5 border border-yellow-400/15">
              <p className="text-slate-300 text-sm mb-3">
                Ready to order steel bars?
              </p>
              <button
                onClick={() => scrollTo("Contact")}
                className="w-full py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold text-sm rounded-lg hover:shadow-md hover:shadow-yellow-500/25 transition-all duration-300"
              >
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-slate-500">
            © {year}{" "}
            <span className="text-slate-400">Rebar Building Center</span>. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-500 text-xs">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy
            </a>
            <span>·</span>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
