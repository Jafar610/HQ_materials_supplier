import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdEmail, MdLocationOn, MdCheckCircle, MdSend } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const details = [
  {
    icon: FaPhoneAlt,
    label: "Call Us",
    value: "+251 923 634 847",
    sub: "Mon–Sat, 7am – 6pm",
    href: "tel:+251923634847",
    accent: "yellow",
  },
  {
    icon: MdEmail,
    label: "Email",
    value: "orders@hqmaterials.com",
    sub: "Reply within a few hours",
    href: "mailto:orders@hqmaterials.com",
    accent: "sky",
  },
  {
    icon: MdLocationOn,
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    sub: "Visit our store",
    href: "https://maps.google.com/?q=Addis+Ababa,Ethiopia",
    accent: "rose",
  },
];

const accentMap = {
  yellow: { text: "text-yellow-400", bg: "bg-yellow-400/10" },
  sky: { text: "text-sky-400", bg: "bg-sky-400/10" },
  rose: { text: "text-rose-400", bg: "bg-rose-400/10" },
};

const inputBase =
  "w-full px-4 py-3.5 bg-[#1a2540] border text-white placeholder-slate-500 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all duration-250";
const inputNormal = `${inputBase} border-[#2a3a56] focus:border-yellow-400/50 focus:ring-yellow-400/15`;
const inputError = `${inputBase} border-rose-500/60 focus:border-rose-400/50 focus:ring-rose-400/10`;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    material: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Please describe what you need";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", material: "", message: "" });
      setErrors({});
    }, 1400);
  };

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k])
      setErrors((er) => {
        const n = { ...er };
        delete n[k];
        return n;
      });
  };

  return (
    <section
      id="contact"
      className="section-base py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">
            <span className="w-5 h-[2px] bg-yellow-400" /> Order & Enquire{" "}
            <span className="w-5 h-[2px] bg-yellow-400" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Ready to Order? <span className="text-gradient">Let's Talk.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">
            Tell us what materials you need and we'll get back to you fast with
            availability and pricing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left — contact details + map */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="mb-1">
              <h3 className="text-white font-bold text-xl mb-2">
                Get In Touch Directly
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Call us or send an enquiry. We respond quickly and keep the
                process simple.
              </p>
            </div>

            {details.map(
              ({ icon: Icon, label, value, sub, href, accent }, i) => {
                const a = accentMap[accent];
                return (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.09, duration: 0.45 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#111827] border border-[#1e293b] hover:border-yellow-400/20 transition-all duration-250 group"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl ${a.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-250`}
                    >
                      <Icon className={`${a.text} text-lg`} />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-0.5">
                        {label}
                      </div>
                      <div className="text-white font-semibold text-sm">
                        {value}
                      </div>
                      <div className="text-slate-500 text-xs">{sub}</div>
                    </div>
                  </motion.a>
                );
              },
            )}

            {/* Map embed */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-1 rounded-2xl overflow-hidden border border-[#1e293b] shadow-xl shadow-black/40"
            >
              <div className="bg-[#111827] px-4 py-2.5 flex items-center gap-2 border-b border-[#1e293b]">
                <MdLocationOn className="text-yellow-400 text-base shrink-0" />
                <span className="text-slate-300 text-xs font-semibold">
                  Addis Ababa, Ethiopia
                </span>
                <a
                  href="https://maps.google.com/?q=Addis+Ababa,Ethiopia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-yellow-400 text-xs font-semibold hover:underline"
                >
                  Open in Maps ↗
                </a>
              </div>
              <iframe
                title="Addis Ababa Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126022.47388530478!2d38.6967!3d9.0107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="p-7 sm:p-9 rounded-2xl bg-[#111827] border border-[#1e293b]">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    className="flex flex-col items-center justify-center py-14 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 14,
                      }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-5 shadow-2xl shadow-yellow-500/30"
                    >
                      <MdCheckCircle className="text-black text-4xl" />
                    </motion.div>
                    <h3 className="text-white font-black text-2xl mb-2">
                      Enquiry Sent!
                    </h3>
                    <p className="text-slate-400 text-sm max-w-xs mb-7">
                      We'll review your request and get back to you within a few
                      hours with pricing and availability.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 border border-yellow-400/40 text-yellow-400 rounded-xl hover:bg-yellow-400/10 text-sm font-semibold transition-all duration-250"
                    >
                      Send Another Enquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-1.5">
                          Your Name <span className="text-yellow-400">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Jafar Mohamed"
                          value={form.name}
                          onChange={set("name")}
                          className={errors.name ? inputError : inputNormal}
                        />
                        {errors.name && (
                          <p className="text-rose-400 text-xs mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-1.5">
                          Email Address{" "}
                          <span className="text-yellow-400">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="jafar@email.com"
                          value={form.email}
                          onChange={set("email")}
                          className={errors.email ? inputError : inputNormal}
                        />
                        {errors.email && (
                          <p className="text-rose-400 text-xs mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+251 900 000 000"
                          value={form.phone}
                          onChange={set("phone")}
                          className={inputNormal}
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-1.5">
                          Material Needed
                        </label>
                        <select
                          value={form.material}
                          onChange={set("material")}
                          className={`${inputNormal} appearance-none cursor-pointer`}
                        >
                          <option value="" className="bg-[#111827]">
                            Select a material…
                          </option>
                          <option value="rebar" className="bg-[#111827]">
                            Steel Rebar
                          </option>
                          <option value="cement" className="bg-[#111827]">
                            Cement
                          </option>
                          <option value="wire" className="bg-[#111827]">
                            Binding Wire
                          </option>
                          <option value="mesh" className="bg-[#111827]">
                            Steel Mesh / BRC
                          </option>
                          <option value="pipes" className="bg-[#111827]">
                            Pipes
                          </option>
                          <option value="beams" className="bg-[#111827]">
                            Steel Beams
                          </option>
                          <option value="roofing" className="bg-[#111827]">
                            Roofing Sheets
                          </option>
                          <option value="other" className="bg-[#111827]">
                            Other
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-1.5">
                        Order Details / Message{" "}
                        <span className="text-yellow-400">*</span>
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us what you need — quantities, sizes, delivery location, etc."
                        value={form.message}
                        onChange={set("message")}
                        className={`${errors.message ? inputError : inputNormal} resize-none`}
                      />
                      {errors.message && (
                        <p className="text-rose-400 text-xs mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2.5 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm rounded-xl hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          <MdSend className="text-lg" />
                          Send Enquiry
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-slate-500 text-xs">
                      Or call us directly at +251 923 634 847 for instant
                      service
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
