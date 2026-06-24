"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/edaUsha", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/usha-rao-patteti", label: "LinkedIn" },
  { icon: Mail, href: "mailto:work.pattetiusha@gmail.com", label: "Email" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-900 relative overflow-hidden">
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1200 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: "60px" }}
        >
          <path
            d="M0 80L50 70C100 60 200 40 300 35C400 30 500 40 600 45C700 50 800 50 900 45C1000 40 1100 30 1150 25L1200 20V0H0V80Z"
            fill="#f0f9ff"
          />
        </svg>
      </div>

      {/* Sky gradient overlay at top */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(14,165,233,0.05) 0%, transparent 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm font-display">U</span>
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">
                Usha Rao Patteti
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Data Analytics graduate building intelligent systems at the intersection of ML, NLP, and Generative AI.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-sky-400 hover:border-sky-400/30 hover:bg-sky-400/10 transition-all duration-200"
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 text-sm hover:text-sky-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Status card */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-4">Current Status</h4>
            <div
              className="rounded-xl p-4 flex flex-col gap-3"
              style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.2)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-sm font-medium">Open to opportunities</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Seeking Data Scientist / ML Engineer roles. Available immediately.
              </p>
              <a
                href="mailto:work.pattetiusha@gmail.com"
                className="text-sky-400 text-xs font-medium hover:text-sky-300 transition-colors"
              >
                Get in touch →
              </a>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["Python", "PyTorch", "LangChain", "RAG"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-full text-gray-400 border border-white/10 bg-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1.5">
            © {currentYear} Usha Rao Patteti. Built with
            <Heart size={13} className="text-sky-400 fill-sky-400" />
            using Next.js & Tailwind
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400">
              ✦ Open to work
            </span>
            <a
              href="/resume.pdf"
              download
              className="text-gray-500 text-xs hover:text-sky-400 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
