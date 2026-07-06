"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import "./globals.css";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => setLanguage(language === "en" ? "fr" : "en");

  const navLinks = [
    { name: t("nav.works"), href: "#works" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
  );
  const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
  );

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black text-foreground">
            Parfait<span className="text-primary">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-foreground font-medium hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700" />
            <button onClick={toggleLanguage} className="text-sm font-bold uppercase hover:text-primary transition-colors">
              {language}
            </button>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors" aria-label="Toggle Theme">
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
            <Link href="#contact" className="bg-primary text-white px-5 py-2 rounded-full font-bold text-sm shadow-md hover:bg-primary-hover transition-all">
              {t("nav.hireMe")}
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2">
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-dark absolute top-20 left-0 w-full overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 pb-32">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl font-bold text-foreground hover:text-primary">
                  {link.name}
                </Link>
              ))}
              <button onClick={toggleLanguage} className="text-xl font-bold uppercase text-foreground hover:text-primary">
                Language: {language}
              </button>
              <Link href="#contact" onClick={() => setIsOpen(false)} className="bg-primary text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg">
                {t("nav.hireMe")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-100 dark:border-gray-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-6">
        <div className="text-2xl font-black text-foreground">
          Parfait<span className="text-primary">.</span>
        </div>
        <div className="flex space-x-6">
          {["Facebook", "Twitter", "Instagram", "Linkedin"].map((social) => (
            <a key={social} href="#" className="text-gray-500 hover:text-primary transition-colors font-medium">
              {social}
            </a>
          ))}
        </div>
        <p className="text-gray-400 text-sm">Copyright © {year} All rights reserved</p>
      </div>
    </footer>
  );
}

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
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
