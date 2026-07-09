"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Send, CheckCircle, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "work.pattetiusha@gmail.com",
    href: "mailto:work.pattetiusha@gmail.com",
    color: "bg-sky-100 text-sky-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/usha-rao-patteti",
    href: "https://www.linkedin.com/in/usha-rao-patteti-521206281",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/edaUsha",
    href: "https://github.com/edaUsha",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, Tamil Nadu, India",
    href: null,
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    // Simulate submission — wire up EmailJS or Formspree in production
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-28 section-alt relative overflow-hidden">
      {/* Decorative bg blob */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #bae6fd 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto text-base">
            Open to discussing opportunities, collaborations, and interesting AI projects. I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left: Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="font-display font-semibold text-lg text-navy-900 mb-2">
                Open to opportunities
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Actively seeking <strong className="text-sky-600">Data Scientist</strong> and{" "}
                <strong className="text-sky-600">ML Engineer</strong> roles in India. Fresher-friendly startups, hybrid analytics/DS roles, and research-adjacent positions are a great fit.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <div key={link.label}>
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 glass-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 group"
                    >
                      <div className={`w-10 h-10 rounded-xl ${link.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <link.icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">{link.label}</p>
                        <p className="text-navy-900 text-sm font-medium">{link.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 glass-card">
                      <div className={`w-10 h-10 rounded-xl ${link.color} flex items-center justify-center flex-shrink-0`}>
                        <link.icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">{link.label}</p>
                        <p className="text-navy-900 text-sm font-medium">{link.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div
              className="rounded-xl p-4 flex items-center gap-3"
              style={{ background: "linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(3,105,161,0.05) 100%)", border: "1px solid rgba(14,165,233,0.2)" }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0 animate-pulse" />
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-navy-900">Available for work</span>{" "}
                — Actively applying for 2026 opportunities
              </p>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-7">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-display font-semibold text-navy-900 text-lg">Message Sent!</h3>
                  <p className="text-gray-600 text-sm">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                    className="btn-secondary text-sm py-2 px-5"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  <h3 className="font-display font-semibold text-navy-900 text-lg mb-1">
                    Send a Message
                  </h3>

                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-sky-100 bg-white/80 text-navy-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-sky-100 bg-white/80 text-navy-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Hi Usha, I'd like to discuss..."
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-sky-100 bg-white/80 text-navy-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition-all resize-none"
                      />
                    </div>
                  </div>

                  <motion.button
                    onClick={handleSubmit}
                    disabled={loading || !form.name || !form.email || !form.message}
                    className="btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    whileHover={!loading ? { scale: 1.02 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-gray-400 text-xs">
                    Or email directly at{" "}
                    <a href="mailto:work.pattetiusha@gmail.com" className="text-sky-500 hover:underline">
                      usharao@example.com
                    </a>
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
