"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    emoji: "🏥",
    title: "Medical RAG Assistant",
    subtitle: "Medical Report Explainer",
    description:
      "An AI-powered question-answering system that retrieves precise information from medical documents using Retrieval Augmented Generation. Processes PDFs, chunks intelligently, and answers clinical queries with source citations.",
    tags: ["Python", "LangChain", "Pinecone", "OpenAI GPT-4o", "FastAPI", "FAISS"],
    github: "https://github.com/edaUsha/Medical-Report-Explainer",
    demo: null,
    gradient: "from-sky-400 to-sky-600",
    highlight: true,
  },
  {
    id: 2,
    emoji: "💬",
    title: "BERT Sentiment Analysis",
    subtitle: "NLP Project",
    description:
      "Fine-tuned BERT transformer model that classifies customer text into positive, neutral, and negative sentiment. Handles domain-specific language nuances with high precision-recall balance.",
    tags: ["Python", "Transformers", "BERT", "PyTorch", "Scikit-learn", "HuggingFace"],
    github: "https://github.com/edaUsha/Fine-Tuning-Bert-For-Sentiment-Analysis",
    demo: null,
    gradient: "from-blue-400 to-blue-600",
    highlight: false,
  },
  {
    id: 3,
    emoji: "🎫",
    title: "Interactive Cyber Threat Visualization Dashboard",
    subtitle: "ML Engineering Project",
    description:
      "Interactive dashboard that visualizes cyber threat intelligence from network and security event logs in real time. Security analysts can explore attack types, sources, timelines, and severity using rich visual filters, enabling faster detection, investigation, and response to suspicious activity.",
    tags: ["Cyber-security", "Threat-Tntelligence", "SOC-Operations", "Attack-Detection", "Cyber-Threat-Dashboard", "Vercel"],
    github: "https://github.com/edaUsha/Development-of-Interactive-Cyber-Threat-Visualization-Dashboard",
    demo: null,
    gradient: "from-indigo-400 to-indigo-600",
    highlight: false,
    
  },
  {
    id: 4,
    emoji: "🏊",
    title: "Swimming Stroke Detection",
    subtitle: "Computer Vision Project",
    description:
      "Real-time computer vision pipeline using YOLOv8 pose estimation to detect and classify swimming strokes from video footage. Identifies butterfly, freestyle, breaststroke, and backstroke from keypoint analysis.",
    tags: ["YOLOv8", "OpenCV", "PyTorch", "Pose Estimation", "CNN", "Python"],
    github: "https://github.com/edaUsha/Pose-Based-Swimming-Stroke-Detection",
    demo: null,
    gradient: "from-cyan-400 to-cyan-600",
    highlight: true,
    impact: "Novel application of pose estimation in sports analytics",
  },
  {
    id: 5,
    emoji: "📉",
    title: "Banking Churn Prediction",
    subtitle: "ML + Streamlit Deployment",
    description:
      "End-to-end churn prediction system for banking customers using XGBoost with class imbalance handling. Deployed as a live Streamlit app with explainability features via SHAP.",
    tags: ["XGBoost",  "Streamlit", "Scikit-learn", "Python", "Imbalanced-learn"],
    github: "https://github.com/edaUsha/Banking-Churn-Prediction",
    demo: null,
    gradient: "from-sky-500 to-blue-600",
    highlight: false,
  },
  {
    id: 6,
    emoji: "🛒",
    title: "Olist E-Commerce Analysis",
    subtitle: "Analytical Deep Dive",
    description:
      "Operational root cause analysis of Brazilian e-commerce platform data. Discovered that 97% of customers were one-time buyers — pivoting from RFM analysis to delivery performance investigation that surfaced actionable logistics insights.",
    tags: ["Python", "Pandas", "Data Visualization", "Statistical Analysis", "Business Intelligence"],
    github: "https://github.com/edaUsha/OList-Brazilian-E-Commerce-Dataset",
    demo: null,
    gradient: "from-violet-400 to-violet-600",
    highlight: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" ref={ref} className="py-20 lg:py-28 section-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Portfolio</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            End-to-end systems across NLP, computer vision, and generative AI — built to solve real problems.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group flex flex-col ${project.highlight ? "md:col-span-1" : ""}`}
            >
              <div className="h-full glass-card overflow-hidden flex flex-col hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

                {/* Project visual */}
                <div
                  className={`relative h-36 bg-gradient-to-br ${project.gradient} opacity-10 flex items-center justify-center`}
                  style={{ background: undefined }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, rgba(14, 165, 233, 0.05) 0%, rgba(3, 105, 161, 0.08) 100%)`,
                    }}
                  />
                  {/* Grid pattern on card */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`grid-${project.id}`} width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#0ea5e9" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
                  </svg>
                  <span className="relative text-5xl group-hover:scale-110 transition-transform duration-300">
                    {project.emoji}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 gap-3">
                  {/* Header */}
                  <div>
                    <p className="text-xs text-sky-500 font-medium mb-1">{project.subtitle}</p>
                    <h3 className="font-display font-bold text-navy-900 text-lg leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div className="rounded-lg px-3 py-2.5 bg-sky-50 border border-sky-100">
                    <p className="text-sky-700 text-xs font-medium">
                      ✦ {project.impact}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="skill-tag text-xs py-0.5 px-2.5">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="skill-tag text-xs py-0.5 px-2.5 bg-gray-50 text-gray-500 border-gray-200">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-1 mt-auto">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      <Github size={15} />
                      GitHub
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-sky-600 hover:text-sky-700 transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/edaUsha"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Github size={16} />
            View All on GitHub
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
