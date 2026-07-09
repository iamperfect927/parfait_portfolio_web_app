"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SiJavascript,
  SiPython,
  SiNextdotjs,
  SiAngular,
  SiPhp,
  SiTypescript,
  SiReact,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { projectsData } from "@/data/projects";

export default function Home() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");

  const categories = ["all", "personal", "client", "school"];
  const filtered = filter === "all" ? projectsData : projectsData.filter((p) => p.category === filter);

  const techStack = [
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Angular", Icon: SiAngular, color: "#DD0031" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
];

  // Button styles
  const baseBtn = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer";
  const primaryBtn = `${baseBtn} bg-secondary text-white shadow-lg hover:shadow-secondary/40 hover:bg-secondary-hover`;
  const outlineBtn = `${baseBtn} border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-primary`;

  function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-text-accent shrink-0 text-text-secondary">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 0 0 1.5-1.5v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5a2.25 2.25 0 0 0-2.25 2.25v1.25Z" />
    </svg>
  );
}

  return (
    <main className="w-full">
      
      {/* ─── Hero Section ─── */}
      <section id="home" className="relative xl:min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden">
        {/* Grid background */}
       <div
         className="absolute inset-0 z-0 opacity-[0.07]"
         style={{
          backgroundImage: `
           linear-gradient(to right, #ffffff 1px, transparent 1px),
           linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
         }}
       />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <span className="inline-block text-text-secondary font-medium mb-4">
                {t("hero.greeting")}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                {t("hero.title")}{" "}
                <span className="text-text-secondary">{t("hero.titleHighlight")}</span>
              </h1>

              <p className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0">
                {t("hero.description")}
              </p>

              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="/CV_DJIELA_FOMO_AYUK_PARFAIT.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className={`${primaryBtn} shadow-xl shadow-primary/20 inline-flex items-center justify-center`}
                >
                  {t("hero.resume")}
                  <DownloadIcon />
                </a>
                <a
                  href="#contact"
                  className={`${outlineBtn} inline-flex items-center justify-center cursor-pointer`}
                >
                  {t("hero.hireMe")}
                  <ArrowRightIcon />
                </a>
              </div> */}

              {/* experience mobile view */}
<div className="space-y-5 lg:hidden mb-8">
  {/* Years of experience */}
  <p className="text-sm text-foreground/50 text-center lg:text-left">
    {t("hero.experience")}
  </p>

  {/* Tech stack icons */}
  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
    {techStack.map(({ name, Icon, color }) => (
      <div
        key={name}
        title={name}
        className="w-11 h-11 flex items-center justify-center rounded-xl bg-background-accent hover:-translate-y-1 transition-transform"
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
    ))}
  </div>
</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ">
                <a
                  href="/CV_DJIELA_FOMO_AYUK_PARFAIT.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className={`${primaryBtn} shadow-xl shadow-primary/20 inline-flex items-center justify-center`}
                >
                  {t("hero.resume")}
                  <DownloadIcon />
                </a>
                <a
                  href="#contact"
                  className={`${outlineBtn} inline-flex items-center justify-center cursor-pointer`}
                >
                  {t("hero.hireMe")}
                  <ArrowRightIcon />
                </a>
              </div>
            </motion.div>

             {/* Image + Experience + Tech Stack */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center order-1 lg:order-2 relative gap-6"
            >
              {/* Avatar */}
<div className="relative w-72 h-72 md:w-96 md:h-96">
  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 blur-2xl animate-pulse [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]" />
  <div className="absolute inset-4 border-4 border-background-accent z-0 [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]">
    <Image
      src="/avatar.jpg"
      alt="Parfait Avatar"
      fill
      className="object-contain drop-shadow-2xl z-10 [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]"
      priority
    />
  </div>
</div>
              
              {/* experience tablet and desktop view */}
<div className="hidden lg:block space-y-5">
  {/* Years of experience */}
  <p className="text-sm text-foreground/50 text-center">
    {t("hero.experience")}
  </p>

  {/* Tech stack icons */}
  <div className="flex flex-wrap items-center justify-center gap-4">
    {techStack.map(({ name, Icon, color }) => (
      <div
        key={name}
        title={name}
        className="w-11 h-11 flex items-center justify-center rounded-xl bg-background-accent hover:-translate-y-1 transition-transform"
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
    ))}
  </div>
</div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Services Marquee ─── */}
      <section className="relative py-6 bg-background-accent border-y border-white/5 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap">
          {/* Render the list twice back-to-back so the loop is seamless */}
          {[0, 1].map((repeat) => (
            <div key={repeat} className="flex items-center shrink-0" aria-hidden={repeat === 1}>
              {[
                t("about.skill1"),
                t("about.skill2"),
                t("about.skill3"),
                t("about.skill4"),
              ].map((service, i) => (
                <span key={`${service}-${i}`} className="flex items-center text-xl font-bold mx-4">
                  <span className="text-text-accent mx-2">✦</span>
                  <span className="text-foreground">{service}</span>
                  <span className="text-text-accent mx-2">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>

        <style jsx>{`
          .marquee-track {
            width: max-content;
            animation: marquee 22s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      {/* ─── About Section ─── */}
      <section id="about" className="py-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-0 items-center"
          >
            <div className="order-1 md:order-1 space-y-8 mb-4 md:mb-0">
              <div className="">
                {/* Sub-title */}
              <span className="inline-block text-text-secondary font-medium mb-5 md:mb-3">
                {t("about.subtitle")}
              </span>
              </div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-primary to-secondary rounded-2xl rotate-3 opacity-90 shadow-2xl">
                <div className="absolute inset-0 bg-white rounded-2xl -rotate-6 transform translate-x-2 translate-y-2 border border-gray-100 flex items-center justify-center p-8 text-center shadow-inner">
                  <span className="text-6xl">🚀</span>
                </div>
              </div>
            </div>

            <div className="order-2 md:order-2">

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                {t("about.title")}{" "}
                <span className="text-text-secondary">{t("about.titleHighlight")}</span>{" "}
                {t("about.titleEnd")}
              </h2>

              {/* Description */}
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                {t("about.desc1")}
              </p>

              {/* Skills list, two columns */}
              <ul className="grid grid-cols-2 gap-y-3 gap-x-6 mb-10">
                {[
                  t("about.skill1"),
                  t("about.skill2"),
                  t("about.skill3"),
                  t("about.skill4"),
                ].map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-foreground">
                    <CheckIcon />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>

              <a
                  href="#"
                  className={`${primaryBtn} shadow-xl shadow-primary/20 inline-flex items-center justify-center`}
                >
                  {t("about.cta")}
                  <ArrowRightIcon />
                </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Services Section ─── */}
      <section id="services" className="py-24 bg-background-accent relative overflow-hidden">
        {/* Grid background */}
       <div
         className="absolute inset-0 z-0 opacity-[0.07]"
         style={{
          backgroundImage: `
           linear-gradient(to right, #ffffff 1px, transparent 1px),
           linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
         }}
       />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <span className="inline-block text-text-secondary font-medium mb-3">
              {t("services.subtitle")}
            </span>
            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              {t("services.title")}{" "}
              <span className="text-text-secondary">{t("services.titleHighlight")}</span>{" "}
              {t("services.titleEnd")}
            </h2>
          </motion.div>

          {/* Service items grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
            {[
              { number: "01.", title: t("services.item1Title"), desc: t("services.item1Desc") },
              { number: "02.", title: t("services.item2Title"), desc: t("services.item2Desc") },
              { number: "03.", title: t("services.item3Title"), desc: t("services.item3Desc") },
              { number: "04.", title: t("services.item4Title"), desc: t("services.item4Desc") },
            ].map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                className="group flex items-center gap-6 border-t border-white/10 py-8"
              >
                <span className="text-2xl font-black text-text-secondary shrink-0">
                  {service.number}
                </span>

                <div className="flex-1">
                  <h4 className="text-xl font-bold text-foreground mb-1">{service.title}</h4>
                  <p className="text-foreground/50 text-sm">{service.desc}</p>
                </div>

                <a
                  href="#contact"
                  aria-label={`Enquire about ${service.title}`}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-background-accent text-foreground shrink-0 group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  <ArrowRightIcon />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Works Section ─── */}
      <section id="works" className="py-20 bg-background">
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
