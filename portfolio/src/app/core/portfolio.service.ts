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
  category?: string[];
  icon?: string; // optional icon name/url
};

export type Project = {
  name: string;
  description?: string;
  tech: string[];
  type: 'Professionnels' | 'Personnels' | 'Scolaires';
  link?: string;
  repo?: string;
  image?: string;

};

@Injectable({ providedIn: 'root' })
export class Portfolio {
  getTimeline(): TimelineItem[] {
    return [
      { date: '2024-2025', title: 'BUT 3° année - Alternance Développeur Full‑Stack', description: 'NestJS, React, TypeScript, tests E2E.', type: 'formation' },
      { date: '2023-2024', title: 'BUT année spéciale', description: 'Angular/TypeScript, contribution à un module UI.', type: 'formation' },
      { date: '2021-2023', title: 'BTS SIO - Solutions Logicielles et Applications Métiers', description: 'Développement d\'applications web et mobile.', type: 'formation' },
      { date: '2020-2021', title: 'Baccalauréat Technologique', description: 'Découverte du code et premiers projets perso.', type: 'formation' }
    ];
  }

  getSkills(): Skill[] {
    return [
      { name: 'Angular', level: 75, category: ['Frontend', 'Framework'] },
      { name: 'TypeScript', level: 80, category: ['Frontend', 'Language'] },
      { name: 'HTML/CSS/SCSS', level: 85, category: ['Frontend', 'Markup', 'Style', 'Language'] },
      { name: 'Tkinter', level: 80, category: ['Frontend', 'Framework'] },
      { name: 'Vue.js', level: 70, category: ['Frontend', 'Framework'] },
      { name: 'JavaScript', level: 80, category: ['Frontend', 'Language'] },
      { name: 'PHP', level: 90, category: ['Backend', 'Language'] },
      { name: 'Python', level: 75, category: ['Backend', 'Language'] },
      { name: 'C#', level: 60, category: ['Backend', 'Language'] },
      { name: 'C', level: 50, category: ['Backend', 'Language'] },
      { name: 'Laravel', level: 70, category: ['Backend', 'Framework'] },
      { name: 'Java', level: 60, category: ['Backend', 'Language'] },
      { name: 'Node.js', level: 70, category: ['Backend', 'Runtime'] },
      { name: 'NestJS', level: 60, category: ['Backend', 'Framework'] },
      { name: 'MySQL', level: 70, category: ['Backend', 'Database'] },
      { name: 'Git', level: 80, category: ['DevOps', 'Version Control'] },
      { name: 'GitHub', level: 80, category: ['DevOps', 'Version Control'] },
      { name: 'GitLab', level: 70, category: ['DevOps', 'Version Control'] },
      { name: 'Jest', level: 70, category: ['DevOps', 'Testing'] },
      { name: 'Postman', level: 70, category: ['DevOps', 'API Testing'] },
      { name: 'Docker', level: 50, category: ['DevOps', 'Containerization'] }
    ];
  }

  getProjects(): Project[] {
    return [
  { name: 'Portfolio', type: 'Personnels', description: 'Site personnel avec frise, compétences et projets.', tech: ['Angular', 'SCSS', 'Git', 'GitHub'], repo: 'https://github.com/synixeb/synix', link: '#' },
  { name: 'Quiet', type: 'Personnels', description: 'Application de lecture de livres, films et séries en local.', tech: ['Tkinter', 'Python', 'Git', 'GitHub'], repo: 'https://github.com/synixeb/Quiet' },
  { name: 'DiscordBotTest', type: 'Personnels', description: 'Bot Discord centralisant l\'utilisation de plusieurs API utiles pour mes études en BUT', tech: ['Python', 'discord.py', 'Git', 'GitHub'], repo: 'https://github.com/synixeb/DiscordBotTest' },
  { name: 'Weirdle', type: 'Scolaires', description: 'Jeu de mots basé sur le principe de Wordle.', tech: ['JavaScript', 'HTML', 'CSS', 'PHP', 'Git', 'GitLab'], repo: 'https://github.com/synixeb/Weirdle'},
  { name: 'GSB Praticiens', type: 'Scolaires', description: 'Application de gestion des praticiens pour le GSB.', tech: ['Laravel', 'PHP', 'MySQL'], repo: 'https://github.com/synixeb/GSBPraticiensEpreuve' }
    ];
  }

  // Retourne les projets liés à une compétence (par correspondance alias ↔ tech)
  getProjectsBySkill(skillName: string): Project[] {
    let Projects: Project[] = [];
    for (const project of this.getProjects()) {
      if (project.tech.includes(skillName)) {
        Projects.push(project);
      }
    }
    return Projects;
  }

  // Map de toutes les compétences vers leurs projets
  getSkillProjectMap(): Record<string, Project[]> {
    const map: Record<string, Project[]> = {};
    for (const skill of this.getSkills()) {
      map[skill.name] = this.getProjectsBySkill(skill.name);
    }
    return map;
  }
}
