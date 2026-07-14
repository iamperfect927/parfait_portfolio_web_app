"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { projectsData } from "@/data/projects";

// Navigation helper icons
function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
  );
}

// All Projects Index page displaying a full grid filterable by personal, client, or school categories.
export default function WorksPage() {
  const { t } = useLanguage();
  
  // Client filter state to isolate project records
  const [filter, setFilter] = useState("all");

  const categories = ["all", "personal", "client", "school"];
  
  // Computes filtered list from global projects data
  const filtered = filter === "all" ? projectsData : projectsData.filter((p) => p.category === filter);

  // Common interactive button styling
  const baseBtn = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer";
  const primaryBtn = `${baseBtn} bg-primary text-white shadow-lg hover:shadow-primary/40 hover:bg-primary-hover`;

  return (
    <main className="w-full bg-background min-h-screen pt-32 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header block */}
        <div className="max-w-3xl mb-12">
          <span className="inline-block text-text-secondary font-medium mb-3">
            {t("works.filter.all")}
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            {t("works.title")}
          </h1>
          <p className="text-foreground/60 text-lg leading-relaxed">
            {t("works.subtitle")}
          </p>
        </div>

        {/* Filter Navigation categories */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-background-accent text-foreground/50 hover:text-foreground"
              }`}
            >
              {t(`works.filter.${cat}`) || cat}
            </button>
          ))}
        </div>

        {/* Filtered project items grid block */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-background-accent rounded-2xl overflow-hidden p-3 border border-white/5 flex flex-col justify-between"
              >
                <Link href={`/works/${project.id}`} className="block h-full">
                  
                  {/* Thumbnail Image display */}
                  <div className="relative h-56 w-full overflow-hidden rounded-xl bg-background">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Descriptions block */}
                  <div className="mt-4 flex flex-col justify-between">
                    <div>
                      <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-primary mb-2">
                        {project.category}
                      </span>
                      <h3 className="font-bold text-foreground text-xl leading-snug group-hover:text-primary transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-foreground/60 mt-2 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] font-bold px-2.5 py-1 bg-background rounded-full text-foreground/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Back Navigation Button */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-start">
          <Link href="/#projects" className="text-primary font-bold hover:underline flex items-center gap-2">
            &larr; {t("nav.home")}
          </Link>
        </div>

      </div>
    </main>
  );
}
