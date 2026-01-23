import React, { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostData, getSortedPostsData } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";

// Static params for SSG
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  if (!postData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-dark transition-colors duration-300">
      <Navbar />

      <article className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        
        {/* Header */}
        <header className="mb-12 text-center">
            <div className="flex justify-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary">
                    {postData.category}
                </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                {postData.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
                <span>{postData.date}</span>
                <span>•</span>
                <span>{postData.readTime}</span>
            </div>
        </header>

        {/* Featured Image */}
        {postData.image && (
            <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl">
                <img src={postData.image} alt={postData.title} className="w-full h-auto" />
            </div>
        )}

        {/* Content */}
        <div 
            className="prose prose-lg dark:prose-invert max-w-none 
            prose-headings:font-bold prose-headings:text-foreground 
            prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed
            prose-a:text-primary hover:prose-a:text-primary-hover
            prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:text-primary prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:rounded-xl prose-pre:p-6"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 flex justify-center">
            <Link href="/blog">
                 <Button variant="outline">
                    &larr; Back to Blog
                 </Button>
            </Link>
        </div>

      </article>

      <Footer />
    </main>
  );
}
