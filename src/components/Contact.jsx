import { useState, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdEmail,
  MdLocationOn,
  MdCheckCircle,
  MdSend,
  MdAccessTime,
  MdError,
} from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


const WEB3FORMS_KEY = "fba2d708-3585-4626-b4b3-7c770542289a";

const Map = lazy(() => import("./Map"));

const details = [
  {
    icon: FaPhoneAlt,
    label: "Call Us",
    value: "+251 92 363 4847",
    sub: "Mon–Sat, 7am – 6pm",
    href: "tel:+251923634847",
    accent: "yellow",
  },
  {
    icon: MdEmail,
    label: "Email",
    value: "jafarmohamed501@gmail.com",
    sub: "Reply within hours",
    href: "mailto:jafarmohamed501@gmail.com",
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

const hours = [
  { day: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
  { day: "Saturday", time: "8:00 AM – 4:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const amap = {
  yellow: { text: "text-yellow-400", bg: "bg-yellow-400/10" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-400/10" },
  sky: { text: "text-sky-400", bg: "bg-sky-400/10" },
  rose: { text: "text-rose-400", bg: "bg-rose-400/10" },
};

const base =
  "w-full px-4 py-3.5 bg-[#1a2235] border text-white placeholder-slate-500 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all duration-250";
const normal = `${base} border-white/[0.08] focus:border-yellow-400/50 focus:ring-yellow-400/15`;
const error = `${base} border-rose-500/60 focus:border-rose-400/50 focus:ring-rose-400/10`;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    size: "",
    message: "",
  });
  const [errs, setErrs] = useState({});
  const [loading, setL] = useState(false);
  const [done, setDone] = useState(false);
  const [sendErr, setSendErr] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Please tell us what you need";
    return e;
  };

  const submit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrs(v);
      return;
    }
    setL(true);
    setSendErr("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Quote Request from ${form.name}`,
          from_name: form.name,
          email: form.email,
          phone: form.phone || "Not provided",
          bar_size: form.size || "Not specified",
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setDone(true);
        setForm({ name: "", email: "", phone: "", size: "", message: "" });
        setErrs({});
      } else {
        setSendErr(
          "Message failed to send. Please call us at +251 92 363 4847.",
        );
      }
    } catch {
      setSendErr("Network error. Please call us at +251 92 363 4847.");
    } finally {
      setL(false);
    }
  };

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errs[k])
      setErrs((er) => {
        const n = { ...er };
        delete n[k];
        return n;
      });
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-[#0f1117] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">
            <span className="w-5 h-[2px] bg-yellow-400" /> Get In Touch{" "}
            <span className="w-5 h-[2px] bg-yellow-400" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Ready to Order?{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Let's Talk.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">
            Tell us what size and quantity you need — we'll get back to you
            quickly with availability and pricing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="mb-1">
              <h3 className="text-white font-bold text-xl mb-2">
                Contact Us Directly
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Call or WhatsApp for the fastest response. We're always ready to
                help.
              </p>
            </div>

            {details.map(
              ({ icon: Icon, label, value, sub, href, accent }, i) => {
                const a = amap[accent];
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
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#111827] border border-white/[0.07] hover:border-yellow-400/25 transition-all duration-250 group"
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

            {/* Hours */}
            <div className="p-4 rounded-2xl bg-[#111827] border border-white/[0.07]">
              <div className="flex items-center gap-2 mb-3">
                <MdAccessTime className="text-yellow-400 text-lg" />
                <span className="text-white font-semibold text-sm">
                  Business Hours
                </span>
              </div>
              {hours.map(({ day, time }) => (
                <div
                  key={day}
                  className="flex justify-between text-sm py-1 border-b border-white/[0.04] last:border-0"
                >
                  <span className="text-slate-400">{day}</span>
                  <span
                    className={
                      time === "Closed"
                        ? "text-slate-500"
                        : "text-yellow-400 font-medium"
                    }
                  >
                    {time}
                  </span>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-white/[0.07] shadow-xl shadow-black/40">
              <div className="bg-[#111827] px-4 py-2.5 flex items-center gap-2 border-b border-white/[0.06]">
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
                  Open ↗
                </a>
              </div>
              <Suspense
                fallback={
                  <div className="h-[200px] bg-[#0f1117] flex items-center justify-center text-slate-500 text-sm">
                    Loading map…
                  </div>
                }
              >
                <Map />
              </Suspense>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="p-7 sm:p-9 rounded-2xl bg-[#111827] border border-white/[0.07]">
              <AnimatePresence mode="wait">
                {done ? (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
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
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-400 flex items-center justify-center mb-5 shadow-2xl shadow-yellow-500/30"
                    >
                      <MdCheckCircle className="text-black text-4xl" />
                    </motion.div>
                    <h3 className="text-white font-black text-2xl mb-2">
                      Quote Request Sent!
                    </h3>
                    <p className="text-slate-400 text-sm max-w-xs mb-7">
                      We'll review your request and get back to you within a few
                      hours with pricing and availability.
                    </p>
                    <button
                      onClick={() => setDone(false)}
                      className="px-6 py-3 border border-yellow-400/40 text-yellow-400 rounded-xl hover:bg-yellow-400/10 text-sm font-semibold transition-all duration-250"
                    >
                      Send Another Request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={submit}
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
                          name="from_name"
                          placeholder="Jafar Mohamed"
                          value={form.name}
                          onChange={set("name")}
                          className={errs.name ? error : normal}
                        />
                        {errs.name && (
                          <p className="text-rose-400 text-xs mt-1">
                            {errs.name}
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
                          name="from_email"
                          placeholder="jafar@gmail.com"
                          value={form.email}
                          onChange={set("email")}
                          className={errs.email ? error : normal}
                        />
                        {errs.email && (
                          <p className="text-rose-400 text-xs mt-1">
                            {errs.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-1.5">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+251 91 000 0000"
                          value={form.phone}
                          onChange={set("phone")}
                          className={normal}
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-1.5">
                          Bar Size Needed
                        </label>
                        <select
                          name="bar_size"
                          value={form.size}
                          onChange={set("size")}
                          className={`${normal} appearance-none cursor-pointer`}
                        >
                          <option value="" className="bg-[#111827]">
                            Select a size…
                          </option>
                          {[
                            "6 mm",
                            "8 mm",
                            "10 mm",
                            "12 mm",
                            "14 mm",
                            "16 mm",
                            "20 mm",
                            "24 mm",
                            "32 mm",
                            "Multiple Sizes",
                          ].map((s) => (
                            <option key={s} value={s} className="bg-[#111827]">
                              {s} Steel Bar
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-1.5">
                        Order Details <span className="text-yellow-400">*</span>
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        placeholder="Tell us the quantity, delivery location, and any other requirements…"
                        value={form.message}
                        onChange={set("message")}
                        className={`${errs.message ? error : normal} resize-none`}
                      />
                      {errs.message && (
                        <p className="text-rose-400 text-xs mt-1">
                          {errs.message}
                        </p>
                      )}
                    </div>
                    {sendErr && (
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm">
                        <MdError className="text-base shrink-0" />
                        {sendErr}
                      </div>
                    )}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2.5 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold text-sm rounded-xl hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 disabled:opacity-70"
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
                          Send Quote Request
                        </>
                      )}
                    </motion.button>
                    <p className="text-center text-slate-500 text-xs">
                      Or call us directly at{" "}
                      <a
                        href="tel:+251923634847"
                        className="text-yellow-400 font-semibold"
                      >
                        +251 92 363 4847
                      </a>{" "}
                      for instant service
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
