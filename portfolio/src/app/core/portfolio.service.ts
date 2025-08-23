import { Injectable } from '@angular/core';

export type TimelineItem = {
  date: string; // ISO or label
  title: string;
  description?: string;
  location?: string;
  type?: 'formation' | 'experience' | 'projet' | 'certification' | 'autre';
};

export type Skill = {
  name: string;
  level?: number; // 0-100
  category?: 'Frontend' | 'Backend' | 'DevOps' | 'Mobile' | 'Data' | 'Soft';
  icon?: string; // optional icon name/url
};

export type Project = {
  name: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
  image?: string;
};

@Injectable({ providedIn: 'root' })
export class Portfolio {
  getTimeline(): TimelineItem[] {
    return [
      { date: '2024-2025', title: 'BUT 3° année - Alternance Développeur Full‑Stack', description: 'NestJS, React, TypeScript, tests E2E.', type: 'experience' },
      { date: '2024', title: 'Stage Développeur Frontend', description: 'Angular/TypeScript, contribution à un module UI.', type: 'experience' },
      { date: '2023', title: 'Baccalauréat Scientifique / Tech', description: 'Découverte du code et premiers projets perso.', type: 'formation' },
    ];
  }

  getSkills(): Skill[] {
    return [
      { name: 'Angular', level: 75, category: 'Frontend' },
      { name: 'TypeScript', level: 80, category: 'Frontend' },
      { name: 'HTML/CSS/SCSS', level: 85, category: 'Frontend' },
      { name: 'Node.js', level: 70, category: 'Backend' },
      { name: 'Express', level: 65, category: 'Backend' },
      { name: 'Git/GitHub', level: 80, category: 'DevOps' },
      { name: 'Docker', level: 50, category: 'DevOps' }
    ];
  }

  getProjects(): Project[] {
    return [
      { name: 'Portfolio Web', description: 'Site personnel avec frise, compétences et projets.', tech: ['Angular', 'SCSS'], repo: 'https://github.com/username/portfolio', link: '#' },
      { name: 'API Films', description: 'API REST pour cataloguer des films et critiques.', tech: ['Node.js', 'Express', 'MongoDB'], repo: 'https://github.com/username/api-films' },
      { name: 'App Mobile Todo', description: 'Gestionnaire de tâches cross‑platform.', tech: ['Ionic', 'Angular'], link: '#' }
    ];
  }
}
