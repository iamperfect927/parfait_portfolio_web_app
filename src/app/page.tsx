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

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // TODO: replace with real testimonials before publishing
  const testimonials = [
    {
      name: "Amara Nwosu",
      role: "Founder, Lumen Retail",
      avatar: "/testimonials/placeholder-1.jpg",
      text: "Parfait built our mobile app from scratch and it's been rock solid since launch. Clear communication throughout and he actually pushed back on features that would've slowed the app down — that kind of judgment is rare.",
    },
    {
      name: "David Okonkwo",
      role: "CTO, Fintrack Solutions",
      avatar: "/testimonials/placeholder-2.jpg",
      text: "We brought Parfait in to rebuild our web dashboard and automate a chunk of our manual reporting with AI. Both shipped on time, and the automation alone saved our team several hours a week.",
    },
    {
      name: "Sofia Marchetti",
      role: "Product Lead, Nimbus Health",
      avatar: "/testimonials/placeholder-3.jpg",
      text: "Great eye for product design, not just execution. Parfait asked the right questions early on and the final product needed far fewer revisions than I expected going in.",
    },
    {
      name: "Jean-Baptiste Kamga",
      role: "Founder, Marché Digital",
      avatar: "/testimonials/placeholder-4.jpg",
      text: "Our e-commerce site needed to work well on low-end phones across shaky connections, which is a hard constraint. Parfait understood that from the first call and delivered exactly what we needed.",
    },
    {
      name: "Hannah Reyes",
      role: "Operations Manager, Clearpath Logistics",
      avatar: "/testimonials/placeholder-5.jpg",
      text: "The AI automation Parfait set up for our scheduling workflow replaced a process that used to take one of our staff half a day every week. Straightforward to work with and genuinely solved a real problem for us.",
    },
  ];

  const nextTestimonial = () =>
    setActiveTestimonial((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () =>
    setActiveTestimonial((i) => (i - 1 + testimonials.length) % testimonials.length);

  //contact form
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // TODO: wire this to your actual email service (Formspree, Resend, an API route, etc.)
      // const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });
      // if (!res.ok) throw new Error();
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const contactInfo = [
    { label: "Email", value: "contact@parfait.dev", href: "mailto:contact@parfait.dev", Icon: MailIcon },
    { label: "Phone", value: "+237 XXX XXX XXX", href: "tel:+237XXXXXXXXX", Icon: PhoneIcon },
    { label: "GitHub", value: "@parfait", href: "https://github.com/", external: true, Icon: GithubIcon },
    { label: "LinkedIn", value: "Parfait Djiela", href: "https://linkedin.com/", external: true, Icon: LinkedinIcon },
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

  function GithubIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.556-1.113-4.556-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
      </svg>
    );
  }

  function LinkedinIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.339 18.337V9.75H5.667v8.587h2.672ZM7.005 8.634c.93 0 1.512-.615 1.512-1.386-.017-.788-.58-1.387-1.494-1.387-.914 0-1.513.6-1.513 1.387 0 .77.582 1.386 1.478 1.386h.017ZM18.336 18.337h-2.671v-4.797c0-1.2-.43-2.02-1.502-2.02-.82 0-1.307.552-1.522 1.085-.078.19-.098.456-.098.722v5.01h-2.672s.035-8.13 0-8.587h2.672v1.217c.355-.548 1-1.33 2.427-1.33 1.771 0 3.099 1.158 3.099 3.646l-.001 5.054Z" />
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

  function ArrowLeftIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
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

      {/* ─── Projects Section ─── */}
      <section id="projects" className="pt-24 pb-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-text-secondary">{t("works.title")}</h2>
              <p className="text-foreground/60 text-lg">{t("works.subtitle")}</p>
            </div>

            <Link
              href="/works"
              className={`${primaryBtn} hidden lg:inline-flex items-center justify-center shrink-0`}
            >
              {t("works.viewAll")}
              <ArrowRightIcon />
            </Link>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${filter === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-background-accent text-foreground/50 hover:text-foreground"
                  }`}
              >
                {t(`works.filter.${cat}`) || cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filtered.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-2xl overflow-hidden p-3 md:p-4"
                >
                  <Link href={`/works/${project.id}`} className="block">
                    <div className="relative h-64 w-full overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate">{project.title}</h3>
                        <p className="text-sm text-gray-500 truncate">{project.description}</p>
                      </div>
                      <span className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 text-gray-900 shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <ArrowRightIcon />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ─── Tools & Technologies Marquee ─── */}
      <section className="py-24 bg-background-accent relative overflow-hidden">
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black mb-4">{t("tools.title")}</h2>
          <p className="text-foreground/60 text-lg">{t("tools.subtitle")}</p>
        </div>

        <div className="tools-marquee-container relative">
          <div className="tools-marquee-track flex items-center whitespace-nowrap">
            {/* Render the list twice back-to-back so the loop is seamless */}
            {[0, 1].map((repeat) => (
              <div key={repeat} className="flex items-center shrink-0" aria-hidden={repeat === 1}>
                {techStack.map(({ name, Icon, color }) => (
                  <div
                    key={name}
                    title={name}
                    className="flex flex-col items-center justify-center gap-3 mx-8 md:mx-10"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-background">
                      <Icon className="w-7 h-7 md:w-8 md:h-8" style={{ color }} />
                    </div>
                    <span className="text-xs text-foreground/40 font-medium">{name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Fade edges so logos don't clip abruptly at the container edge */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>

        <style jsx>{`
          .tools-marquee-track {
            width: max-content;
            animation: tools-marquee 28s linear infinite;
          }
          .tools-marquee-track:hover {
            animation-play-state: paused;
          }
          @keyframes tools-marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      {/* ─── Testimonials Section ─── */}
      {/*
        NOTE: The testimonials below are PLACEHOLDERS. Replace `testimonials`
        with real feedback from actual clients/collaborators before shipping —
        don't publish fabricated reviews on a professional portfolio.
      */}
      <section id="testimonials" className="py-24 bg-background-accent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,340px)_1fr] gap-16 items-start">
            {/* Left: title + nav */}
            <div>
              <span className="inline-block text-text-secondary font-medium mb-3">
                {t("testimonials.subtitle")}
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                {t("testimonials.title")}{" "}
                <span className="text-text-accent">{t("testimonials.titleHighlight")}</span>
              </h2>
              <p className="text-foreground/60 mb-10">{t("testimonials.desc")}</p>

              <div className="hidden lg:flex gap-3">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-background text-foreground hover:bg-primary hover:text-white transition-colors"
                >
                  <ArrowLeftIcon />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-background text-foreground hover:bg-primary hover:text-white transition-colors"
                >
                  <ArrowRightIcon />
                </button>
              </div>
            </div>

            {/* Right: testimonial slider */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: `-${activeTestimonial * 100}%` }}
                transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
              >
                {testimonials.map((item) => (
                  <div
                    key={item.name}
                    className="w-full shrink-0 bg-background rounded-2xl p-8 md:p-10"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-background-accent">
                        <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h5 className="font-bold text-foreground">{item.name}</h5>
                        <span className="text-sm text-foreground/50">{item.role}</span>
                      </div>
                    </div>
                    <p className="text-foreground/70 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </motion.div>

              {/* Mobile nav (arrows sit below the card on small screens) */}
              <div className="flex lg:hidden gap-3 mt-6">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-background text-foreground hover:bg-primary hover:text-white transition-colors"
                >
                  <ArrowLeftIcon />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-background text-foreground hover:bg-primary hover:text-white transition-colors"
                >
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact Section ─── */}
      <section id="contact" className="relative pt-24 pb-32 md:pb-48 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-text-accent">
              {t("contact.title")}
            </h2>
            <p className="text-foreground/60 text-lg">{t("contact.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: contact info */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group relative flex items-center gap-4 bg-background rounded-2xl p-5 hover:bg-primary/10 transition-colors"
                >
                  <span className="w-14 h-14 flex items-center justify-center rounded-xl bg-background-accent text-text-accent shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.Icon />
                  </span>
                  <div>
                    <span className="block text-sm text-foreground/50">{item.label}</span>
                    <h6 className="font-bold text-foreground">{item.value}</h6>
                  </div>
                </a>
              ))}
            </div>

            {/* Right: contact form */}
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="bg-background rounded-3xl p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6">{t("contact.formTitle")}</h3>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-foreground/60 mb-2">
                      {t("contact.form.name")} <span className="text-text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full rounded-xl bg-background-accent border border-white/10 px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-foreground/60 mb-2">
                      {t("contact.form.email")} <span className="text-text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full rounded-xl bg-background-accent border border-white/10 px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="subject" className="block text-sm text-foreground/60 mb-2">
                      {t("contact.form.subject")} <span className="text-text-accent">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t("contact.form.subjectPlaceholder")}
                      className="w-full rounded-xl bg-background-accent border border-white/10 px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm text-foreground/60 mb-2">
                      {t("contact.form.message")} <span className="text-text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("contact.form.messagePlaceholder")}
                      className="w-full rounded-xl bg-background-accent border border-white/10 px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className={`${primaryBtn} inline-flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed`}
                    >
                      {status === "sending" ? t("contact.form.sending") : t("contact.form.submit")}
                      <ArrowRightIcon />
                    </button>

                    {status === "success" && (
                      <p className="mt-4 text-sm text-emerald-400">{t("contact.form.success")}</p>
                    )}
                    {status === "error" && (
                      <p className="mt-4 text-sm text-red-400">{t("contact.form.error")}</p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
