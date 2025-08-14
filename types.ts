
import { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
}
