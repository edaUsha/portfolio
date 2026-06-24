"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, GraduationCap, Brain, Award } from "lucide-react";

const stats = [
  {
    icon: Code2,
    number: "5+",
    label: "ML Projects Completed",
    description: "End-to-end deployable systems",
    color: "from-sky-400 to-sky-600",
    bg: "bg-sky-50",
    iconColor: "text-sky-500",
  },
  {
    icon: GraduationCap,
    number: "B.Sc",
    label: "Data Analytics Graduate",
    description: "Guru Nanak College, Chennai — CGPA 8.9",
    color: "from-blue-400 to-blue-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: Brain,
    number: "NLP | CV | GenAI",
    label: "Areas of Expertise",
    description: "From transformers to RAG pipelines",
    color: "from-indigo-400 to-indigo-600",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
  {
    icon: Award,
    number: "SAS",
    label: "Certified Specialist",
    description: "Dual SAS certifications",
    color: "from-cyan-400 to-cyan-600",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-500",
  },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 bg-white relative overflow-hidden">
      {/* Subtle top border gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #bae6fd, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="glass-card p-6 h-full group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-default">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon size={22} className={stat.iconColor} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className={`font-display font-bold text-2xl gradient-text leading-tight mb-0.5`}>
                      {stat.number}
                    </p>
                    <p className="font-semibold text-navy-900 text-sm leading-snug mb-1">
                      {stat.label}
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #bae6fd, transparent)" }}
      />
    </section>
  );
}
