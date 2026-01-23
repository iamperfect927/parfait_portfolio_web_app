"use client";

import React from "react";
import Button from "./Button";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
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
                        <input 
                            type="text" 
                            id="name"
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-primary outline-none transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-foreground">{t("contact.form.email")}</label>
                        <input 
                            type="email" 
                            id="email"
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-primary outline-none transition-colors"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-foreground">{t("contact.form.subject")}</label>
                     <select 
                        id="subject"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-primary outline-none transition-colors"
                     >
                        <option value="freelance">Freelance Project</option>
                        <option value="fulltime">Full-time Opportunity</option>
                        <option value="other">Other</option>
                     </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-foreground">{t("contact.form.message")}</label>
                    <textarea 
                        id="message" 
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-primary outline-none transition-colors resize-none"
                    ></textarea>
                </div>

                <Button type="submit" className="w-full py-4 text-lg">
                    {t("contact.form.send")}
                </Button>
            </form>
        </div>

      </div>
    </section>
  );
}
