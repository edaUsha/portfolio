"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, Sparkles } from "lucide-react";

const quickFacts = [
  { icon: MapPin, label: "Location", value: "Chennai, India" },
  { icon: Calendar, label: "Availability", value: "Open to opportunities" },
  { icon: Sparkles, label: "Interests", value: "NLP · Computer Vision · GenAI" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" ref={ref} className="py-20 lg:py-28 section-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Who I Am</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Bio */}
            <div className="glass-card p-7">
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                I&apos;m a <span className="text-sky-600 font-semibold">Data Analytics graduate</span> with a strong foundation in statistics, programming, machine learning, and AI. I enjoy building end-to-end ML solutions that solve real problems.
              </p>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                My work spans <span className="text-sky-600 font-semibold">NLP and transformers</span>, <span className="text-sky-600 font-semibold">Computer Vision with YOLOv8</span>, and <span className="text-sky-600 font-semibold">Generative AI with RAG systems</span>.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                Beyond the code, I&apos;m drawn to the intersection of AI and real-world impact — from healthcare document intelligence to customer experience automation.
              </p>

              {/* Quick facts */}
              <div className="mt-6 flex flex-col gap-3 pt-6 border-t border-sky-100">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center flex-shrink-0">
                      <fact.icon size={15} className="text-sky-500" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 text-sm">{fact.label}:</span>
                      <span className="text-navy-900 text-sm font-medium">{fact.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values / personality */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)" }}
            >
              <p className="text-white/80 text-sm mb-2 font-medium">My Approach</p>
              <p className="text-white text-base leading-relaxed font-medium">
                &ldquo;I don&apos;t just build models. I build systems — with clean data pipelines, explainable results, and real deployment in mind.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right: Skills preview card + education highlight */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Education card */}
            <div className="glass-card p-7">
              <h3 className="font-display font-semibold text-lg text-navy-900 mb-5">Education</h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sky-600 font-bold font-display text-lg">GN</span>
                </div>
                <div>
                  <p className="font-semibold text-navy-900">B.Sc Data Analytics</p>
                  <p className="text-sky-600 text-sm font-medium">Guru Nanak College, Chennai</p>
                  <p className="text-gray-500 text-sm">2022 – 2026 &middot; CGPA 8.9</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Statistics", "Machine Learning", "Python", "R", "SQL"].map((t) => (
                      <span key={t} className="skill-tag text-xs py-0.5">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* What I build card */}
            <div className="glass-card p-7">
              <h3 className="font-display font-semibold text-lg text-navy-900 mb-5">What I Build</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { emoji: "🧠", title: "NLP Systems", desc: "Sentiment analysis, text classification, BERT fine-tuning" },
                  { emoji: "👁️", title: "Computer Vision", desc: "Object detection, pose estimation with YOLOv8" },
                  { emoji: "🤖", title: "GenAI & RAG", desc: "LLM-powered retrieval systems, LangChain pipelines" },
                  { emoji: "📊", title: "ML Engineering", desc: "End-to-end models with Streamlit deployment" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-sky-50 transition-colors cursor-default"
                  >
                    <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                    <div>
                      <p className="font-semibold text-navy-900 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}