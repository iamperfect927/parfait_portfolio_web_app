"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";

// Dynamic details page showing descriptive data, tag categories, and custom mockups for a specific project.
export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    // Unwraps dynamic route parameter Promise via React 'use()' hook
    const { id } = use(params);
    const project = projectsData.find((p) => p.id === id);

    // Redirects to standard 404 page if no matching ID is found in projects database
    if (!project) {
        notFound();
    }

    // Interactive button class systems
    const baseBtn = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer";
    const primaryBtn = `${baseBtn} bg-primary text-white shadow-lg hover:shadow-primary/40 hover:bg-primary-hover`;
    const outlineBtn = `${baseBtn} border-2 border-primary text-primary hover:bg-primary hover:text-white`;

    return (
        <main className="bg-background min-h-screen transition-colors duration-300">
            {/* Hero Header */}
            <div className="relative h-[60vh] w-full pt-20">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-4 max-w-4xl mx-auto">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 bg-primary text-white">
                            {project.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-lg">{project.title}</h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                            {project.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* Overview Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                    {/* Left Panel: Overview texts, challenges resolved, and feature listings */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
                                Project Overview
                            </h2>
                            <p className="text-lg text-foreground/70 leading-relaxed">
                                {project.longDescription || project.description}
                            </p>
                        </section>

                        {project.challenges && (
                            <section>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
                                    Challenges & Solutions
                                </h2>
                                <div className="bg-background-accent border-l-4 border-primary p-6 rounded-r-xl">
                                    <p className="text-lg text-foreground/70 leading-relaxed italic">
                                        "{project.challenges}"
                                    </p>
                                </div>
                            </section>
                        )}

                        {project.features && (
                            <section>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
                                    Key Features
                                </h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="mt-1 text-primary">✓</span>
                                            <span className="text-foreground/80 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>

                    {/* Right Panel: Metadata widgets (Status, tech tags, action links) */}
                    <div className="space-y-8">
                        <div className="bg-background-accent p-8 rounded-2xl border border-white/10 sticky top-24">
                            <h3 className="text-lg font-bold mb-6 text-foreground uppercase tracking-widest border-b border-white/10 pb-2">Project Info</h3>

                            <div className="space-y-6">
                                <div>
                                    <span className="block text-sm text-foreground/45 mb-1">Status</span>
                                    <span className="text-lg font-bold text-foreground capitalize">{project.status}</span>
                                </div>
                                <div>
                                    <span className="block text-sm text-foreground/45 mb-1">Technologies</span>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-bold px-3 py-1 bg-background border border-white/10 rounded-full text-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <span className="block text-sm text-foreground/45 mb-1">Links</span>
                                    <div className="flex flex-col gap-3 mt-2">
                                        <Link href="#" className={`${primaryBtn} w-full justify-center`}>Visit Live Site</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                    <section className="mb-20">
                        <h2 className="text-3xl font-black mb-12 text-center text-foreground">Project Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {project.gallery.map((img, idx) => (
                                <div key={idx} className={`relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${idx === 0 ? 'md:col-span-2 md:h-96' : ''}`}>
                                    <Image
                                        src={img}
                                        alt={`Gallery image ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                )}


                {/* Back navigation footer link */}
                <div className="flex justify-between border-t border-white/10 pt-12">
                    <Link href="/#works" className="text-primary font-bold hover:underline flex items-center gap-2">
                        &larr; Back to Works
                    </Link>
                </div>

            </div>
        </main>
    );
}
