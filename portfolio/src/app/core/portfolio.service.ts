import { Injectable } from '@angular/core';

export type TimelineItem = {
  date: string; // ISO or label
  title: string;
  description?: string;
  location?: string;
  type?: 'formation' | 'experience' | 'projet' | 'certification' | 'autre';
};

export type Skill = {
  id: number;
  name: string;
  type?: 'Langage' | 'Framework' | 'Base de données' | 'DevOps' | 'Logicielles' | 'Autre';
  category?: string[];
  description?: string;
  icon?: string; // optional icon name/url
};

export type Project = {
  id: string;
  name: string;
  description?: string;
  tech: string[];
  type: 'Professionnels' | 'Personnels' | 'Scolaires';
  link?: string;
  repo?: string;
  image?: string;
};

export type Profile = {
  name: string;
  shortAbout: string;
  about: string;
  location: string;
  email: string;
  phone: string;
  xp: number;
  nbProjects: number;
  socials: {
    github?: string;
    linkedin?: string;
  };
  personal: {
    photo?: string;
    hobbies: string[];
    interests?: string[];
    drivingLicense?: boolean;
  };
};

@Injectable({ providedIn: 'root' })
export class Portfolio {
  getProfile(): Profile {
    return {
      name: 'Evan Bertin',
      shortAbout: 'Développeur passionné.',
      about: 'Développeur passionné avec ' + (new Date().getFullYear() - 2019) + ' ans d\'expérience dans le développement web.',
      location: 'Sainte-Foy-lès-Lyon',
      email: 'evanbertin69110@gmail.com',
      phone: '0652802996',
      xp: new Date().getFullYear() - 2019,
      nbProjects: this.getProjects().length,
      socials: {
        github: 'https://github.com/synixeb',
        linkedin: 'https://www.linkedin.com/in/evan-bertin',
      },
      personal: {
        hobbies: ['Programmation', 'Jeux vidéo', 'Lecture', 'Cinéma', 'Observation Spatiale'],
        drivingLicense: true
      }
    };
  }

  getTimeline(): TimelineItem[] {
    return [
      { date: '2024-2025', title: 'BUT 3° année - Alternance Développeur Full‑Stack', description: 'NestJS, React, TypeScript, tests E2E.', type: 'formation' },
      { date: 'été 2024', title: 'Stage Développeur HL7', description: 'Développement d\'interfaces pour la santé.', type: 'experience' },
      { date: '2023-2024', title: 'BUT année spéciale', description: 'Angular/TypeScript, contribution à un module UI.', type: 'formation' },
      { date: 'été 2023', title: 'Stage Développeur Laravel', description: 'Développement d\'applications web avec Laravel pour la gestion de ruches.', type: 'experience' },
      { date: '2021-2023', title: 'BTS SIO - Solutions Logicielles et Applications Métiers', description: 'Développement d\'applications web et mobile.', type: 'formation' },
      { date: '2020-2021', title: 'Baccalauréat Technologique', description: 'Découverte du code et premiers projets perso.', type: 'formation' }
    ];
  }

  getSkills(): Skill[] {
  return [
        { id: 1, name: 'TypeScript', category: ['Frontend', 'Language'], type: 'Langage', icon: 'typescript_logo.png' },
        { id: 2, name: 'HTML/CSS', category: ['Frontend', 'Markup', 'Style', 'Language'], type: 'Langage', icon: 'html5_logo.png' },
        { id: 3, name: 'SCSS', category: ['Frontend', 'Style', 'Language'], type: 'Langage', icon: 'scss_logo.png' },
        { id: 4, name: 'JavaScript', category: ['Frontend', 'Language'], type: 'Langage', icon: 'javascript_logo.png' },
        { id: 5, name: 'PHP', category: ['Backend', 'Language'], type: 'Langage', icon: 'php_logo.png' },
        { id: 6, name: 'Python', category: ['Backend', 'Language'], type: 'Langage', icon: 'python_logo.png' },
        { id: 7, name: 'C', category: ['Backend', 'Language'], type: 'Langage', icon: 'c_logo.png' },
        { id: 8, name: 'C#', category: ['Backend', 'Language'], type: 'Langage', icon: 'c_sharp_logo.png' },
        { id: 9, name: 'Java', category: ['Backend', 'Language'], type: 'Langage', icon: 'java_logo.png' },
        { id: 10, name: 'SQL', category: ['Backend', 'Database', 'Language'], type: 'Langage', icon: 'sql_logo.png' },
        { id: 11, name: 'Laravel', category: ['Backend', 'Framework'], type: 'Framework', icon: 'laravel_logo.png' },
        { id: 12, name: 'Symfony', category: ['Backend', 'Framework'], type: 'Framework', icon: 'symfony_logo.png' },
        { id: 13, name: 'Bootstrap', category: ['Frontend', 'Framework'], type: 'Framework', icon: 'bootstrap_logo.png' },
        { id: 14, name: 'Tkinter', category: ['Frontend', 'Framework'], type: 'Framework', icon: 'python_logo.png' },
        { id: 15, name: 'Angular', category: ['Frontend', 'Framework'], type: 'Framework', icon: 'angular_logo.png' },
        { id: 16, name: 'Vue.js', category: ['Frontend', 'Framework'], type: 'Framework', icon: 'vue.js_logo.png' },
        { id: 17, name: 'NestJS', category: ['Backend', 'Framework'], type: 'Framework', icon: 'nestjs_logo.png' },
        { id: 18, name: 'Spring', category: ['Backend', 'Framework'], type: 'Framework', icon: 'spring_logo.png' },
        { id: 19, name: 'SpringBoot', category: ['Backend', 'Framework'], type: 'Framework', icon: 'springboot_logo.png' },
        { id: 20, name: 'Django', category: ['Backend', 'Framework'], type: 'Framework', icon: 'django_logo.png' },
        { id: 21, name: 'React', category: ['Frontend', 'Library'], type: 'Framework', icon: 'react_logo.png' },
        { id: 22, name: 'MySQL', category: ['Backend', 'Database'], type: 'Base de données', icon: 'mysql_logo.png' },
        { id: 23, name: 'MongoDB', category: ['Backend', 'Database'], type: 'Base de données', icon: 'mongodb_logo.png' },
        { id: 24, name: 'PostgreSQL', category: ['Backend', 'Database'], type: 'Base de données', icon: 'postgresql_logo.png' },
        { id: 25, name: 'PHPMyAdmin', category: ['Backend', 'Database'], type: 'Base de données', icon: 'phpmyadmin_logo.png' },
        { id: 26, name: 'Neo4J', category: ['Backend', 'Database'], type: 'Base de données', icon: 'neo4j_logo.png' },
        { id: 27, name: 'Git', category: ['DevOps', 'Version Control'], type: 'DevOps', icon: 'git_logo.png' },
        { id: 28, name: 'GitHub', category: ['DevOps', 'Version Control'], type: 'DevOps', icon: 'github_logo.png' },
        { id: 29, name: 'GitLab', category: ['DevOps', 'Version Control'], type: 'DevOps', icon: 'gitlab_logo.png' },
        { id: 30, name: 'Jest', category: ['DevOps', 'Testing'], type: 'DevOps', icon: 'jest_logo.png' },
        { id: 31, name: 'Postman', category: ['Logicielles', 'DevOps', 'API Testing'], type: 'DevOps', icon: 'postman_logo.png' },
        { id: 32, name: 'Docker', category: ['DevOps', 'Containerization'], type: 'DevOps', icon: 'docker_logo.png' },
        { id: 33, name: 'Visual Studio Code', category: ['Logicielles', 'IDE'], type: 'Logicielles', icon: 'vscode_logo.png' },
        { id: 34, name: 'PhpStorm', category: ['Logicielles', 'IDE'], type: 'Logicielles', icon: 'phpstorm_logo.png' },
        { id: 35, name: 'Node.js', category: ['Backend', 'Runtime'], type: 'Autre', icon: 'nodejs_logo.png' },
      ];
  }

  getProjects(): Project[] {
    return [
      {id: 'portfolio', name: 'Portfolio', type: 'Personnels', description: 'Site personnel avec frise, compétences et projets.', tech: ['Angular', 'SCSS', 'Git', 'GitHub'], repo: 'https://github.com/synixeb/portfolio', link: '#' },
      {id: 'quiet', name: 'Quiet', type: 'Personnels', description: 'Application de lecture de livres, films et séries en local.', tech: ['Tkinter', 'Python', 'Git', 'GitHub'], repo: 'https://github.com/synixeb/Quiet' },
      {id: 'discord-bot-test', name: 'DiscordBotTest', type: 'Personnels', description: 'Bot Discord centralisant l\'utilisation de plusieurs API utiles pour mes études en BUT', tech: ['Python', 'discord.py', 'Git', 'GitHub'], repo: 'https://github.com/synixeb/DiscordBotTest' },
      {id: 'weirdle', name: 'Weirdle', type: 'Scolaires', description: 'Jeu de mots basé sur le principe de Wordle.', tech: ['JavaScript', 'HTML/CSS', 'PHP', 'Git', 'GitLab'], repo: 'https://github.com/synixeb/Weirdle'},
      {id: 'gsb-praticiens', name: 'GSB Praticiens', type: 'Scolaires', description: 'Application de gestion des praticiens pour le GSB.', tech: ['Laravel', 'PHP', 'MySQL'], repo: 'https://github.com/synixeb/GSBPraticiensEpreuve' }
    ];
  }

  getFeaturedProject(id: string): Project | null {
    return this.getProjects().find(project => project.id === id) || null;
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
