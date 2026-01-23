"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { BlogPost } from "@/types";

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  const { t } = useLanguage();

  return (
    <section id="blog" className="py-20 bg-white dark:bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
             <div>
                <h2 className="text-3xl md:text-4xl font-black mb-2">{t("blog.title")}</h2>
                <div className="h-1 w-20 bg-secondary rounded-full"></div>
             </div>
             <Link href="/blog" className="hidden md:block text-secondary font-bold hover:text-secondary-hover transition-colors">
                {t("blog.viewAll")} &rarr;
             </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="group">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all cursor-pointer h-full flex flex-col">
                    <div className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">{post.category}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed flex-1 line-clamp-3">
                        {post.excerpt}
                    </p>
                    <div className="text-xs text-gray-400 font-medium mt-auto">
                        {post.date}
                    </div>
                </div>
                </Link>
            ))}
        </div>
         
         <div className="mt-8 text-center md:hidden">
             <Link href="/blog" className="text-secondary font-bold hover:text-secondary-hover transition-colors">
                {t("blog.viewAll")} &rarr;
             </Link>
         </div>

      </div>
    </section>
  );
}
