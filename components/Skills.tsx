"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming",
    icon: "💻",
    color: "from-sky-400 to-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
    skills: ["Python", "SQL", "R", "Bash"],
  },
  {
    title: "Data Analytics",
    icon: "📊",
    color: "from-blue-400 to-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    skills: ["Pandas", "NumPy", "Statistics", "Data Visualization", "Matplotlib", "Seaborn"],
  },
  {
    title: "Machine Learning",
    icon: "⚙️",
    color: "from-indigo-400 to-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    skills: ["Scikit-learn", "XGBoost", "Feature Engineering", "Model Evaluation", "SMOTE", "Cross-validation"],
  },
  {
    title: "Deep Learning",
    icon: "🧠",
    color: "from-violet-400 to-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    skills: ["TensorFlow", "PyTorch", "CNN", "Transfer Learning", "YOLOv8", "Pose Estimation"],
  },
  {
    title: "NLP & Generative AI",
    icon: "🤖",
    color: "from-cyan-400 to-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    skills: ["Transformers", "BERT", "LangChain", "RAG", "LLM Applications", "Pinecone", "FAISS", "OpenAI API"],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    color: "from-sky-500 to-blue-600",
    bg: "bg-slate-50",
    border: "border-slate-100",
    skills: ["Git", "Docker", "Streamlit", "FastAPI", "GitHub Actions", "Hugging Face", "SAS Viya"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" ref={ref} className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Technical Proficiency</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            From raw data to deployed models — the full stack of tools I use to build intelligent systems.
          </p>
        </motion.div>

        {/* Skill grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className={`h-full glass-card p-6 border ${category.border} hover:shadow-card-hover transition-all duration-300`}>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${category.bg} flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="font-display font-semibold text-navy-900 text-base">
                    {category.title}
                  </h3>
                </div>

                {/* Divider */}
                <div className={`h-0.5 rounded-full mb-4 bg-gradient-to-r ${category.color}`} />

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SAS certification callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 glass-card p-6 flex flex-col sm:flex-row items-center gap-4 justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-2xl flex-shrink-0">
              🏆
            </div>
            <div>
              <p className="font-display font-semibold text-navy-900">SAS Certified Specialist</p>
              <p className="text-gray-600 text-sm">Dual SAS certifications — a genuine differentiator in analytics roles</p>
            </div>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <span className="skill-tag">SAS Base</span>
            <span className="skill-tag">SAS Advanced</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
