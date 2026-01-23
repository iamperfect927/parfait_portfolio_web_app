import { useLanguage } from "@/context/LanguageContext";
import { projectsData } from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";


export default function Works() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");

  const filteredProjects =  filter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const categories = ["all", "personal", "client", "school"];

  return (
    <section id="works" className="py-20 bg-gray-50 dark:bg-black/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">{t("works.title")}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("works.subtitle")}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-bold capitalize transition-all ${
                        filter === cat 
                        ? "bg-primary text-white shadow-lg shadow-primary/30" 
                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                >
                    {t(`works.filter.${cat}`) || cat}
                </button>
            ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
                {filteredProjects.map((project) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        key={project.id}
                        className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group border border-gray-100 dark:border-gray-800 h-full flex flex-col"
                    >
                        <Link href={`/works/${project.id}`} className="block h-full"> 
                            <div className="relative h-48 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
                                <Image 
                                    src={project.image} 
                                    alt={project.title} 
                                    fill 
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                        project.status === 'completed' ? 'bg-green-100 text-green-700' :
                                        project.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                                        'bg-yellow-100 text-yellow-700'
                                    }`}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-600 dark:text-gray-300">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
