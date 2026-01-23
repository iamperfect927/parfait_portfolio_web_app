export type Theme = 'light' | 'dark';
export type Language = 'en' | 'fr';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'personal' | 'client' | 'school';
  status: 'pending' | 'in-progress' | 'completed';
  link?: string;
  github?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
  link: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}
