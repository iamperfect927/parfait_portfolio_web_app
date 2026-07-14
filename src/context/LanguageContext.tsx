"use client";

import React, { createContext, useContext, useState } from "react";
import { Language } from "@/types";
import { content } from "@/data/content";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: unknown = content[language];
    
    for (const key of keys) {
      if (!current || typeof current !== 'object' || (current as Record<string, unknown>)[key] === undefined) {
        console.warn(`Translation key not found: ${path}`);
        return path;
      }
      current = (current as Record<string, unknown>)[key];
    }
    
    return current as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
