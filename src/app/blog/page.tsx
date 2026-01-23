import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSortedPostsData } from "@/lib/blog";

export default function BlogList() {
  const allPosts = getSortedPostsData();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black/20 transition-colors duration-300">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-foreground">Our Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Insights, tutorials, and updates from the world of web development.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="group">
                    <article className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 h-full flex flex-col hover:shadow-2xl transition-all hover:-translate-y-1 duration-300">
                        <div className="relative h-48 bg-gray-200 dark:bg-gray-800">
                             {/* Use Image component in real scenario */}
                             {post.image && <img src={post.image} alt={post.title} className="w-full h-full object-cover" />}
                             <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">
                                {post.category}
                             </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <div className="text-sm text-gray-400 mb-2">{post.date} • {post.readTime}</div>
                            <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">{post.title}</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                            <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                Read Article &rarr;
                            </span>
                        </div>
                    </article>
                </Link>
            ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
