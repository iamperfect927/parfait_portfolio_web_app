"use client";

import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-100 dark:border-gray-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-6">
        
        <div className="text-2xl font-black text-foreground">
            Parfait<span className="text-primary">.</span>
        </div>

        <div className="flex space-x-6">
            {["Facebook", "Twitter", "Instagram", "Linkedin"].map((social) => (
                <a 
                    key={social} 
                    href="#" 
                    className="text-gray-500 hover:text-primary transition-colors font-medium"
                >
                    {social}
                </a>
            ))}
        </div>

        <p className="text-gray-400 text-sm">
            Copyright © {year} All rights reserved
        </p>
      </div>
    </footer>
  );
}
