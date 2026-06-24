"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

const posts = [
  {
    emoji: "🏥",
    tag: "Generative AI",
    title: "Building a Medical RAG System: Step-by-Step",
    excerpt:
      "How I designed a retrieval-augmented generation pipeline for medical documents — from chunking strategy to Pinecone indexing and GPT-4o answer synthesis.",
    date: "May 2026",
    readTime: "8 min read",
    color: "sky",
    href: "#",
  },
  {
    emoji: "👁️",
    tag: "Computer Vision",
    title: "Transfer Learning in Computer Vision: What Actually Works",
    excerpt:
      "A practical breakdown of fine-tuning pretrained models — when to freeze layers, when to unfreeze, and how YOLOv8 changed my perspective on domain adaptation.",
    date: "April 2026",
    readTime: "6 min read",
    color: "blue",
    href: "#",
  },
  {
    emoji: "🤖",
    tag: "LLMs",
    title: "How Large Language Models Actually Work",
    excerpt:
      "Demystifying transformers, attention mechanisms, and the RLHF pipeline — written for data scientists who want more than just API calls.",
    date: "March 2026",
    readTime: "10 min read",
    color: "indigo",
    href: "#",
  },
];

const colorMap: Record<string, { badge: string; border: string; accent: string }> = {
  sky: { badge: "bg-sky-100 text-sky-700", border: "border-sky-100", accent: "text-sky-500" },
  blue: { badge: "bg-blue-100 text-blue-700", border: "border-blue-100", accent: "text-blue-500" },
  indigo: { badge: "bg-indigo-100 text-indigo-700", border: "border-indigo-100", accent: "text-indigo-500" },
};

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="blog" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Technical Writing</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Blog & Insights
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Breaking down ML concepts, project walkthroughs, and lessons from building real AI systems.
          </p>
        </motion.div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => {
            const colors = colorMap[post.color];
            return (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <a
                  href={post.href}
                  className={`glass-card block h-full overflow-hidden border ${colors.border} hover:shadow-card-hover transition-all duration-300`}
                >
                  {/* Colored top area */}
                  <div className="relative h-28 bg-gradient-to-br from-sky-50 to-blue-50 flex items-center justify-center overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`dots-${i}`} width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1" fill="#0ea5e9" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#dots-${i})`} />
                    </svg>
                    <span className="relative text-4xl group-hover:scale-110 transition-transform duration-300">
                      {post.emoji}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col gap-3">
                    {/* Tag */}
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium self-start ${colors.badge}`}>
                      {post.tag}
                    </span>

                    {/* Title */}
                    <h3 className="font-display font-bold text-navy-900 text-base leading-snug group-hover:text-sky-700 transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400 text-xs">{post.date}</span>
                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                          <Clock size={11} />
                          {post.readTime}
                        </div>
                      </div>
                      <div className={`flex items-center gap-1 text-xs font-medium ${colors.accent} group-hover:gap-2 transition-all`}>
                        <BookOpen size={13} />
                        Read
                        <ArrowRight size={11} />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <a href="#" className="btn-secondary inline-flex">
            View All Articles
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
