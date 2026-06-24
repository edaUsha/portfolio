"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    type: "internship",
    icon: Briefcase,
    title: "Data Science Intern",
    organization: "Infosys Springboard",
    period: "2025",
    location: "Remote, India",
    description:
      "Built SecureView Pulse — an AI-powered cybersecurity threat intelligence dashboard. Led the ML pipeline development, combining real-time threat data with NLP-based classification to surface actionable security insights for SOC teams.",
    highlights: [
      "Developed AI-powered threat classification pipeline",
      "Integrated NLP for log pattern analysis",
      "Built interactive security dashboard for real-time monitoring",
      "Collaborated with a cross-functional team in agile sprints",
    ],
    color: "sky",
    badge: "Internship",
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "B.Sc Data Analytics",
    organization: "Guru Nanak College",
    period: "2022 – 2026",
    location: "Chennai, India",
    description:
      "Four-year undergraduate program with deep focus on statistics, machine learning, Python programming, and data-driven decision making. Maintained a strong academic record while building a substantial independent project portfolio.",
    highlights: [
      "CGPA: 8.9 / 10.0",
      "Specialized in ML, NLP, and Statistical Modeling",
      "Completed 9+ portfolio projects independently",
      "Dual SAS Certified Specialist",
    ],
    color: "blue",
    badge: "Education",
  },
  {
    type: "certification",
    icon: GraduationCap,
    title: "Data Science AI/ML Certification",
    organization: "TCS iON",
    period: "2024",
    location: "Online",
    description:
      "Intensive certification program covering the full ML lifecycle — from data preprocessing and feature engineering to model training, evaluation, and deployment. Strengthened applied ML skills with industry-relevant case studies.",
    highlights: [
      "Covered supervised and unsupervised learning",
      "Deep learning and neural network fundamentals",
      "Industry project simulations",
      "Issued by Tata Consultancy Services",
    ],
    color: "indigo",
    badge: "Certification",
  },
];

const badgeColors: Record<string, string> = {
  sky: "bg-sky-100 text-sky-700",
  blue: "bg-blue-100 text-blue-700",
  indigo: "bg-indigo-100 text-indigo-700",
};

const iconBg: Record<string, string> = {
  sky: "bg-sky-100 text-sky-600",
  blue: "bg-blue-100 text-blue-600",
  indigo: "bg-indigo-100 text-indigo-600",
};

const dotColor: Record<string, string> = {
  sky: "bg-sky-500",
  blue: "bg-blue-500",
  indigo: "bg-indigo-500",
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Background</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            The training ground: academic rigor, hands-on internship work, and industry certifications.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-300 via-blue-300 to-indigo-200 hidden sm:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative sm:pl-16"
              >
                {/* Dot on timeline */}
                <div
                  className={`absolute left-3.5 top-5 w-5 h-5 rounded-full ${dotColor[exp.color]} border-4 border-white shadow-sm hidden sm:block`}
                />

                <div className="glass-card p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-11 h-11 rounded-xl ${iconBg[exp.color]} flex items-center justify-center flex-shrink-0`}
                      >
                        <exp.icon size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-0.5">
                          <h3 className="font-display font-bold text-navy-900 text-base">
                            {exp.title}
                          </h3>
                          <span
                            className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${badgeColors[exp.color]}`}
                          >
                            {exp.badge}
                          </span>
                        </div>
                        <p className="text-sky-600 font-medium text-sm">{exp.organization}</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 text-right">
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs justify-end">
                        <Calendar size={12} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs justify-end">
                        <MapPin size={12} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {exp.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2 text-xs text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full ${dotColor[exp.color]} mt-1.5 flex-shrink-0`} />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
