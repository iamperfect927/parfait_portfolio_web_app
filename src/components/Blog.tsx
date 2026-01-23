"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const blogPosts = [
    {
        id: "1",
        title: "Mastering React Hooks",
        excerpt: "A deep dive into useEffect, useState, and custom hooks for better state management.",
        date: "12 Feb 2024",
        category: "Development"
    },
     {
        id: "2",
        title: "Tailwind CSS v4: What's New?",
        excerpt: "Exploring the new features and performance improvements in the latest Tailwind release.",
        date: "05 Mar 2024",
        category: "Design"
    },
     {
        id: "3",
        title: "Building Accessible Web Apps",
        excerpt: "Why accessibility matters and how to implement ARIA roles correctly.",
        date: "20 Jan 2024",
        category: "Accessibility"
    }
]

export default function Blog() {
  const { t } = useLanguage();

  return (
    <section id="blog" className="py-20 bg-white dark:bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
             <div>
                <h2 className="text-3xl md:text-4xl font-black mb-2">{t("blog.title")}</h2>
                <div className="h-1 w-20 bg-secondary rounded-full"></div>
             </div>
             <Link href="#" className="hidden md:block text-secondary font-bold hover:text-secondary-hover transition-colors">
                {t("blog.viewAll")} &rarr;
             </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
                <div key={post.id} className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all group cursor-pointer">
                    <div className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">{post.category}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                        {post.excerpt}
                    </p>
                    <div className="text-xs text-gray-400 font-medium">
                        {post.date}
                    </div>
                </div>
            ))}
        </div>
         
         <div className="mt-8 text-center md:hidden">
             <Link href="#" className="text-secondary font-bold hover:text-secondary-hover transition-colors">
                {t("blog.viewAll")} &rarr;
             </Link>
         </div>

      </div>
    </section>
  );
}
