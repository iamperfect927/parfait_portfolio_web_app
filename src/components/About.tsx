"use client";

import React from "react";
import Button from "./Button";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function About() {
  const { t } = useLanguage();

  return (
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
                    <span className="w-12 h-1 bg-primary rounded-full"></span>
                    {t("about.title")}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {t("about.desc1")}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {t("about.desc2")}
                </p>
                <Button>{t("about.cta")}</Button>
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
  );
}
