"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Project } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Mock Data (Ideally moved to content.ts or fetched)
const projectsData: Project[] = [
  {
    id: "1",
    title: "EcoTrack Mobile App",
    description: "A sustainable living tracking app designed for iOS and Android.",
    image: "/image_1.jpeg", // Ensure these exist or use placeholders
    tags: ["React Native", "Firebase", "UI/UX"],
    category: "personal",
    status: "completed",
  },
  {
    id: "2",
    title: "Finance Dashboard",
    description: "Real-time crypto and stock market visualization dashboard.",
    image: "/image_2.jpeg",
    tags: ["Next.js", "Tailwind", "D3.js"],
    category: "client",
    status: "in-progress",
  },
  {
    id: "3",
    title: "University Portal",
    description: "Student management system for a local university.",
    image: "/image_3.jpeg",
    tags: ["React", "Node.js", "PostgreSQL"],
    category: "school",
    status: "completed",
  },
   {
    id: "4",
    title: "AI Content Generator",
    description: "SaaS platform for generating marketing copy using LLMs.",
    image: "/image_1.jpeg", 
    tags: ["OpenAI API", "Next.js", "Stripe"],
    category: "personal",
    status: "pending",
  },
];

export default function Works() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");

  const filteredProjects =  filter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const categories = ["all", "personal", "client", "school"];

  return (
    <section id="works" className="py-20 bg-gray-50 dark:bg-black/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">{t("works.title")}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("works.subtitle")}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-bold capitalize transition-all ${
                        filter === cat 
                        ? "bg-primary text-white shadow-lg shadow-primary/30" 
                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                >
                    {t(`works.filter.${cat}`) || cat}
                </button>
            ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
                {filteredProjects.map((project) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        key={project.id}
                        className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group border border-gray-100 dark:border-gray-800"
                    >
                        <div className="relative h-48 w-full overflow-hidden">
                             <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
                             {/* Ideally use next/image with actual paths, using placeholder for now if images missing */}
                             <Image 
                                src={project.image} 
                                alt={project.title} 
                                fill 
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                             />
                             <div className="absolute top-4 right-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                    project.status === 'completed' ? 'bg-green-100 text-green-700' :
                                    project.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                                    'bg-yellow-100 text-yellow-700'
                                }`}>
                                    {project.status}
                                </span>
                             </div>
                        </div>
                        
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-600 dark:text-gray-300">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
