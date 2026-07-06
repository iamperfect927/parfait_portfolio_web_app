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
  // Detailed fields
  longDescription?: string;
  gallery?: string[];
  video?: string;
  features?: string[];
  challenges?: string;
}
