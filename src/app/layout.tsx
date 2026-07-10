"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import FAB from "@/components/FAB";
import "./globals.css";

/* ---------- Icons ---------- */

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

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

/* ---------- Scroll-spy hook (drives active link state) ---------- */

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the "active band" among those intersecting
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActive(top.target.id);
        }
      },
      {
        // Counts a section "active" once it crosses the middle band of the viewport
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/* ---------- Navbar ---------- */

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => setLanguage(language === "en" ? "fr" : "en");

  // Add these keys to your LanguageContext translations (en/fr) if they
  // aren't there yet: nav.home, nav.about, nav.services, nav.projects, nav.contact
  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.testimonials"), href: "#testimonials" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const linkClasses = (href: string) => {
    const isActive = activeSection === href.replace("#", "");
    return `font-medium transition-colors whitespace-nowrap ${isActive ? "text-foreground font-semibold" : "text-foreground/40 hover:text-primary"
      }`;
  };

  const mobileLinkClasses = (href: string) => {
    const isActive = activeSection === href.replace("#", "");
    return `text-2xl font-bold transition-colors ${isActive ? "text-foreground" : "text-foreground/40 hover:text-primary"
      }`;
  };

  return (
    <>
      <nav className="fixed w-full z-50 top-0 left-0 bg-background backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Left: Logo */}
            <div className="flex-1 flex justify-start">
              <Link href="/" className="text-2xl font-black text-foreground whitespace-nowrap">
                Parfait<span className="text-primary text-lg">.dev</span>
              </Link>
            </div>

            {/* Center: Nav links (desktop / tablet landscape only) */}
            <div className="hidden lg:flex flex-1 items-center justify-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className={linkClasses(link.href)}>
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right: Social + language (desktop / tablet landscape only) */}
            <div className="hidden lg:flex flex-1 items-center justify-end gap-5">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-foreground hover:text-primary transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-foreground hover:text-primary transition-colors"
              >
                <LinkedinIcon />
              </a>
              <div className="h-6 w-px bg-gray-200 dark:bg-gray-700" />
              <button onClick={toggleLanguage} className="text-sm font-bold uppercase hover:text-primary transition-colors">
                {language}
              </button>
            </div>

            {/* Mobile / tablet controls */}
            <div className="flex lg:hidden items-center gap-3">
              <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-1" aria-label="Toggle Menu">
                <MenuIcon open={isOpen} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile / tablet menu — rendered as a sibling of <nav>, not a child,
          so its `fixed` positioning is measured against the real viewport
          instead of being contained by nav's backdrop-blur filter box. */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blurred backdrop over the page content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />

            {/* Slide-in panel, 50% width, right to left */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              className="lg:hidden fixed top-0 right-0 h-screen w-1/2 min-w-[260px] bg-background z-50 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
                className="absolute top-6 right-6 text-foreground p-1 hover:text-primary transition-colors"
              >
                <MenuIcon open={true} />
              </button>

              <div className="flex flex-col items-start justify-start h-full gap-4 px-8 py-20">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={mobileLinkClasses(link.href)}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="flex items-center gap-8 py-4">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-foreground hover:text-primary transition-colors">
                    <GithubIcon />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-foreground hover:text-primary transition-colors">
                    <LinkedinIcon />
                  </a>
                </div>

                <button onClick={toggleLanguage} className="text-xl font-bold uppercase text-foreground hover:text-primary">
                  Language: {language}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------- Footer ---------- */

function BackToTopIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
    </svg>
  );
}

function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.testimonials"), href: "#testimonials" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-background-accent pt-20 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand + blurb */}
          <div className="lg:col-span-2 max-w-sm">
            <Link href="/" className="text-2xl font-black text-foreground whitespace-nowrap">
              Parfait<span className="text-primary text-lg">.dev</span>
            </Link>
            <p className="text-foreground/50 mt-4 leading-relaxed">
              {t("footer.blurb")}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://github.com/iamperfect927/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background text-foreground hover:bg-primary hover:text-white transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com/iamperfect927/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background text-foreground hover:bg-primary hover:text-white transition-colors"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h6 className="font-bold text-foreground mb-5">{t("footer.linksTitle")}</h6>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/50 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="font-bold text-foreground mb-5">{t("footer.contactTitle")}</h6>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:djielaparfait99@gmail.com"
                  className="text-foreground/50 hover:text-primary transition-colors"
                >
                  djielaparfait99@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+237652768274"
                  className="text-foreground/50 hover:text-primary transition-colors"
                >
                  +237 652 768 274
                </a>
              </li>
              <li className="text-foreground/50">{t("footer.location")}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex  items-center justify-center gap-4 pt-8">
          <p className="text-foreground/40 text-sm text-center sm:text-left">
            © {year} Parfait.dev — {t("footer.rights")}
          </p>

        </div>
      </div>
    </footer>
  );
}

/* ---------- Root Layout ---------- */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Parfait | Portfolio</title>
        <meta name="description" content="Web & Mobile App Frontend Developer Portfolio" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="transition-colors duration-300 antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
            <FAB />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}