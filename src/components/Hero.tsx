"use client";

import React from "react";
import Button from "./Button";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-gradient-to-bl from-secondary/10 to-transparent rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl opacity-50 dark:opacity-20"></div>


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
            {/* <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {t("hero.subtitle")}
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               <Button href="#contact" variant="primary" className="shadow-xl shadow-primary/20">
                  {t("nav.hireMe")}
               </Button>
               <Button href="./DjielaFomoAyukParfait_RESUME.pdf" variant="outline">
                  {t("hero.resume")}
               </Button>
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-2xl animate-pulse"></div>
                 <Image
                    src="/avatar.svg"
                    alt="Parfait Avatar"
                    fill
                    className="object-contain drop-shadow-2xl z-10"
                    priority
                 />
                 {/* Decorative Circle Behind */}
                 <div className="absolute inset-4 border-4 border-white dark:border-gray-700 rounded-full z-0"></div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
