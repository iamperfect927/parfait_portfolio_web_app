"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { projectsData } from "@/data/projects";

export default function Home() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");

  const categories = ["all", "personal", "client", "school"];
  const filtered = filter === "all" ? projectsData : projectsData.filter((p) => p.category === filter);

  // Button styles
  const baseBtn = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer";
  const primaryBtn = `${baseBtn} bg-primary text-white shadow-lg hover:shadow-primary/40 hover:bg-primary-hover`;
  const outlineBtn = `${baseBtn} border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-primary`;

  return (
    <main className="w-full">
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-gradient-to-bl from-secondary/10 to-transparent rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl opacity-50 dark:opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                {t("hero.title")}
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#contact" className={`${primaryBtn} shadow-xl shadow-primary/20`}>
                  {t("nav.hireMe")}
                </Link>
                <Link href="./DjielaFomoAyukParfait_RESUME.pdf" className={outlineBtn}>
                  {t("hero.resume")}
                </Link>
              </div>
            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center order-1 lg:order-2 relative"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-2xl animate-pulse" />
                <div className="absolute inset-4 border-4 border-white dark:border-gray-700 rounded-full z-0">
                  <Image
                    src="/avatar.jpg"
                    alt="Parfait Avatar"
                    fill
                    className="object-contain rounded-full drop-shadow-2xl z-10"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── About Section ─── */}
      <section id="about" className="py-20 bg-white dark:bg-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-black mb-6 flex items-center gap-3">
                <span className="w-12 h-1 bg-primary rounded-full" />
                {t("about.title")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t("about.desc1")}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t("about.desc2")}
              </p>
              <button className={primaryBtn}>{t("about.cta")}</button>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-secondary to-primary rounded-2xl rotate-3 opacity-90 shadow-2xl">
                <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl -rotate-6 transform translate-x-2 translate-y-2 border border-gray-100 dark:border-gray-700 flex items-center justify-center p-8 text-center shadow-inner">
                  <span className="text-6xl">🚀</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Works Section ─── */}
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
              {filtered.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group border border-gray-100 dark:border-gray-800 h-full flex flex-col"
                >
                  <Link href={`/works/${project.id}`} className="block h-full">
                    <div className="relative h-48 w-full overflow-hidden">
                      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
                      <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          project.status === "completed" ? "bg-green-100 text-green-700" :
                          project.status === "in-progress" ? "bg-blue-100 text-blue-700" :
                          "bg-yellow-100 text-yellow-700"
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-600 dark:text-gray-300">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ─── Contact Section ─── */}
      <section id="contact" className="py-24 bg-gray-50 dark:bg-black/20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">{t("contact.title")}</h2>
            <p className="text-gray-600 dark:text-gray-400">{t("contact.subtitle")}</p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-800">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-foreground">{t("contact.form.name")}</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-primary outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-foreground">{t("contact.form.email")}</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-primary outline-none transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-foreground">{t("contact.form.subject")}</label>
                <select id="subject" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-primary outline-none transition-colors">
                  <option value="freelance">Freelance Project</option>
                  <option value="fulltime">Full-time Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-foreground">{t("contact.form.message")}</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-primary outline-none transition-colors resize-none" />
              </div>

              <button type="submit" className={`${primaryBtn} w-full py-4 text-lg`}>
                {t("contact.form.send")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
