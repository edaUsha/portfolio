"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    emoji: "🏅",
    title: "SAS Certified Specialist: Base Programming",
    provider: "SAS Institute",
    year: "2024",
    description: "Validates expertise in SAS programming fundamentals, data manipulation, and report generation.",
    color: "sky",
    link: "#",
  },
  {
    emoji: "🏅",
    title: "SAS Certified Specialist: Advanced Programming",
    provider: "SAS Institute",
    year: "2024",
    description: "Validates advanced SAS skills including complex data manipulation, advanced SQL, and macro programming.",
    color: "blue",
    link: "#",
  },
  {
    emoji: "🎓",
    title: "Data Science AI/ML Professional",
    provider: "TCS iON",
    year: "2024",
    description: "Covers the complete ML lifecycle from data engineering through model deployment in industry settings.",
    color: "indigo",
    link: "#",
  },
  {
    emoji: "🐍",
    title: "Python for Data Science",
    provider: "IBM / Coursera",
    year: "2023",
    description: "Foundations in Python programming for data analysis, visualization, and basic ML workflows.",
    color: "cyan",
    link: "#",
  },
];

const colorMap: Record<string, { bg: string; badge: string; icon: string; border: string }> = {
  sky: {
    bg: "bg-sky-50",
    badge: "bg-sky-100 text-sky-700",
    icon: "text-sky-500",
    border: "border-sky-100",
  },
  blue: {
    bg: "bg-blue-50",
    badge: "bg-blue-100 text-blue-700",
    icon: "text-blue-500",
    border: "border-blue-100",
  },
  indigo: {
    bg: "bg-indigo-50",
    badge: "bg-indigo-100 text-indigo-700",
    icon: "text-indigo-500",
    border: "border-indigo-100",
  },
  cyan: {
    bg: "bg-cyan-50",
    badge: "bg-cyan-100 text-cyan-700",
    icon: "text-cyan-500",
    border: "border-cyan-100",
  },
};

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="certifications" ref={ref} className="py-20 lg:py-28 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Credentials</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Certifications
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Industry-recognized credentials that validate my technical skills.
          </p>
        </motion.div>

        {/* Cert grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => {
            const colors = colorMap[cert.color];
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className={`glass-card p-6 h-full border ${colors.border} hover:shadow-card-hover transition-all duration-300 flex flex-col gap-4`}>
                  {/* Icon + emoji */}
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      {cert.emoji}
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${colors.badge} flex items-center gap-1`}>
                      <Calendar size={10} />
                      {cert.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-navy-900 text-sm leading-tight mb-1.5">
                      {cert.title}
                    </h3>
                    <p className={`text-xs font-medium mb-2 ${colors.icon}`}>
                      {cert.provider}
                    </p>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <a
                    href={cert.link}
                    className={`flex items-center gap-1.5 text-xs font-semibold ${colors.icon} hover:opacity-70 transition-opacity mt-auto`}
                  >
                    <Award size={13} />
                    View Certificate
                    <ExternalLink size={11} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Verifiable credentials note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          All certifications are industry-issued and verifiable.{" "}
          <a href="mailto:usharao@example.com" className="text-sky-500 hover:underline">
            Request verification →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
