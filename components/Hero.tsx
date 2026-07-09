"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  { icon: Github, href: "https://github.com/edaUsha", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/usha-rao-patteti-521206281", label: "LinkedIn" },
  { icon: Mail, href: "mailto:work.pattetiusha@gmail.com", label: "Email" },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #f0f9ff 0%, #e0f2fe 40%, #f8fafc 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #bae6fd 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #7dd3fc 0%, transparent 70%)" }}
        />
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-sky-400 rounded-full animate-float opacity-60" style={{ animationDelay: "0s" }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-sky-300 rounded-full animate-float opacity-50" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-sky-500 rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-sky-400 rounded-full animate-float opacity-60" style={{ animationDelay: "3s" }} />

        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0ea5e9" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
          {/* Left: Profile + socials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start gap-6"
          >
            {/* Profile image */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Rotating ring */}
              <div
                className="absolute -inset-3 rounded-full animate-spin-slow opacity-40"
                style={{
                  background: "conic-gradient(from 0deg, #0ea5e9, #bae6fd, #0ea5e9, transparent)",
                }}
              />
              {/* Glow */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-sky-300 to-sky-500 blur-md opacity-30" />
              {/* Image frame */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                {/*
                  =====================================================
                  📸 PHOTO PLACEMENT INSTRUCTIONS:
                  =====================================================
                  To add your photo:
                  1. Save your photo as: public/profile.jpg
                     (in the /public folder at the root of the project)
                  2. The image will appear automatically here.
                  3. Recommended: square crop, face centered, 400x400px minimum
                  4. Supported formats: .jpg, .jpeg, .png, .webp
                  =====================================================
                */}
                <div
                  className="w-full h-full bg-gradient-to-br from-sky-100 to-sky-200 flex flex-col items-center justify-center"
                  style={{ display: "flex" }}
                >
                  {/* Replace this div with your actual image:
                      <Image src="/profile.jpg" alt="Usha Rao Patteti" fill className="object-cover" />
                  */}
                  <div className="text-sky-300 mb-2">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <p className="text-sky-400 text-xs font-medium text-center px-4 leading-tight">
                    Add profile.jpg<br />to /public folder
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-gray-600 hover:text-sky-600 hover:border-sky-300 transition-all duration-200"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col gap-5 text-center lg:text-left"
          >
            {/* Name */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-4xl sm:text-5xl lg:text-6xl text-navy-900 leading-tight"
                style={{ fontFamily: "'Times New Roman', serif" }}
              >
                Usha Rao Patteti
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <p className="font-display text-lg sm:text-xl font-semibold gradient-text">
                Data Analytics Graduate
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Building intelligent solutions using{" "}
              <span className="text-sky-600 font-medium">Machine Learning</span>,{" "}
              <span className="text-sky-600 font-medium">NLP</span>,{" "}
              <span className="text-sky-600 font-medium">Computer Vision</span> and{" "}
              <span className="text-sky-600 font-medium">Generative AI</span> — turning complex data into systems that actually work.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={scrollToProjects}
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Projects
                <ArrowRight size={16} />
              </motion.button>
              <motion.button
                onClick={scrollToContact}
                className="btn-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Tech stack chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mt-2"
            >
              {["Python", "PyTorch", "RAG", "Computer Vision", "SAS Certified"].map((tech) => (
                <span key={tech} className="skill-tag">
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
