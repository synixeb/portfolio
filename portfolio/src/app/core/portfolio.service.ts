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
  xp?: number;
  nbProjects: number;
  socials: {
    github?: string;
    linkedin?: string;
  };
  personal: {
    photo?: string;
    hobbies?: string[];
    location?: string;
    interests?: string[];
    drivingLicense?: boolean;
  };
};

export type Alternance = {
  title: string;
  description: string;
  company: string;
  location: string;
  startDate: Date | string | null;
  endDate: Date | string | null;
  technologies: string[];
  link?: string;
  logo?: string;
  environment?: string;
  missions?: string[];
  rythme?: string;
  companySize?: string;
  supervisor?: string;
  accomplishments?: string[];
  contact?: {
    email?: string;
    phone?: string;
    website?: string;
  };
};



@Injectable({ providedIn: 'root' })
export class Portfolio {
  getProfile(): Profile {
    return {
      name: 'Evan Bertin',
      shortAbout: 'Développeur passionné.',
      about: 'Développeur passionné avec une solide formation en informatique et une expérience pratique en développement web et logiciel. Toujours curieux d\'apprendre de nouvelles technologies et de relever des défis techniques.',
      location: 'Sainte-Foy-lès-Lyon',
      email: 'evanbertin69110@gmail.com',
      phone: '0652802996',
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
        { name: 'TypeScript', category: ['Frontend', 'Language'], type: 'Langage', icon: 'typescript_logo.png' },
        { name: 'HTML/CSS', category: ['Frontend', 'Markup', 'Style', 'Language'], type: 'Langage', icon: 'html5_logo.png' },
        { name: 'SCSS', category: ['Frontend', 'Style', 'Language'], type: 'Langage', icon: 'scss_logo.png' },
        { name: 'JavaScript', category: ['Frontend', 'Language'], type: 'Langage', icon: 'javascript_logo.png' },
        { name: 'PHP', category: ['Backend', 'Language'], type: 'Langage', icon: 'php_logo.png' },
        { name: 'Python', category: ['Backend', 'Language'], type: 'Langage', icon: 'python_logo.png' },
        { name: 'C', category: ['Backend', 'Language'], type: 'Langage', icon: 'c_logo.png' },
        { name: 'C#', category: ['Backend', 'Language'], type: 'Langage', icon: 'c_sharp_logo.png' },
        { name: 'Java', category: ['Backend', 'Language'], type: 'Langage', icon: 'java_logo.png' },
        { name: 'SQL', category: ['Backend', 'Database', 'Language'], type: 'Langage', icon: 'sql_logo.png' },
        { name: 'Laravel', category: ['Backend', 'Framework'], type: 'Framework', icon: 'laravel_logo.png' },
        { name: 'Symfony', category: ['Backend', 'Framework'], type: 'Framework', icon: 'symfony_logo.png' },
        { name: 'Bootstrap', category: ['Frontend', 'Framework'], type: 'Framework', icon: 'bootstrap_logo.png' },
        { name: 'Tkinter', category: ['Frontend', 'Framework'], type: 'Framework' },
        { name: 'Angular', category: ['Frontend', 'Framework'], type: 'Framework', icon: 'angular_logo.png' },
        { name: 'Vue.js', category: ['Frontend', 'Framework'], type: 'Framework', icon: 'vue.js_logo.png' },
        { name: 'NestJS', category: ['Backend', 'Framework'], type: 'Framework', icon: 'nestjs_logo.png' },
        { name: 'Spring', category: ['Backend', 'Framework'], type: 'Framework', icon: 'spring_logo.png' },
        { name: 'SpringBoot', category: ['Backend', 'Framework'], type: 'Framework', icon: 'springboot_logo.png' },
        { name: 'Django', category: ['Backend', 'Framework'], type: 'Framework', icon: 'django_logo.png' },
        { name: 'React', category: ['Frontend', 'Library'], type: 'Framework', icon: 'react_logo.png' },
        { name: 'MySQL', category: ['Backend', 'Database'], type: 'Base de données', icon: 'mysql_logo.png' },
        { name: 'MongoDB', category: ['Backend', 'Database'], type: 'Base de données', icon: 'mongodb_logo.png' },
        { name: 'PostgreSQL', category: ['Backend', 'Database'], type: 'Base de données', icon: 'postgresql_logo.png' },
        { name: 'PHPMyAdmin', category: ['Backend', 'Database'], type: 'Base de données', icon: 'phpmyadmin_logo.png' },
        { name: 'Neo4J', category: ['Backend', 'Database'], type: 'Base de données', icon: 'neo4j_logo.png' },
        { name: 'Git', category: ['DevOps', 'Version Control'], type: 'DevOps', icon: 'git_logo.png' },
        { name: 'GitHub', category: ['DevOps', 'Version Control'], type: 'DevOps', icon: 'github_logo.png' },
        { name: 'GitLab', category: ['DevOps', 'Version Control'], type: 'DevOps', icon: 'gitlab_logo.png' },
        { name: 'Jest', category: ['DevOps', 'Testing'], type: 'DevOps', icon: 'jest_logo.png' },
        { name: 'Docker', category: ['DevOps', 'Containerization'], type: 'DevOps', icon: 'docker_logo.png' },
        { name: 'Postman', category: ['Logicielles', 'DevOps', 'API Testing'], type: 'DevOps', icon: 'postman_logo.png' },
        { name: 'Node.js', category: ['Backend', 'Runtime'], type: 'Autre', icon: 'nodejs_logo.png' },
      ];
  }

  getProjects(): Project[] {
    return [
      {id: 'portfolio', name: 'Portfolio', type: 'Personnels', description: 'Site personnel avec frise, compétences et projets.', tech: ['Angular', 'SCSS', 'Git', 'GitHub'], repo: 'https://github.com/synixeb/portfolio', link: '#' },
      {id: 'quiet', name: 'Quiet', type: 'Personnels', description: 'Application de lecture de livres, films et séries en local.', tech: ['Python', 'Tkinter', 'Git', 'GitHub'], repo: 'https://github.com/synixeb/Quiet' },
      {id: 'discord-bot-test', name: 'DiscordBotTest', type: 'Personnels', description: 'Bot Discord centralisant l\'utilisation de plusieurs API utiles pour mes études en BUT', tech: ['Python', 'discord.py', 'Git', 'GitHub'], repo: 'https://github.com/synixeb/DiscordBotTest' },
      {id: 'weirdle', name: 'Weirdle', type: 'Scolaires', description: 'Jeu de mots basé sur le principe de Wordle.', tech: ['JavaScript', 'HTML/CSS', 'PHP', 'Git', 'GitLab'], repo: 'https://github.com/synixeb/Weirdle'},
      {id: 'gsb-praticiens', name: 'GSB Praticiens', type: 'Scolaires', description: 'Application de gestion des praticiens pour le GSB.', tech: ['Laravel', 'PHP', 'MySQL'], repo: 'https://github.com/synixeb/GSBPraticiensEpreuve' }
    ];
  }

  getAlternances(): Alternance[] {
    return [
      {
        title: "Développeur Full-Stack",
        description: "Développement et maintenance d'applications médicales (Manager et Cockpit), gestion des flux patients et interopérabilité des systèmes hospitaliers",
        company: "Wiis - Workflow Innovations Imaging Solutions",
        location: "213 Rue de Gerland, 69007 Lyon",
        logo: 'assets/images/WiiS_logo.jpg',
        startDate: new Date("2024-09-06"),
        endDate: new Date("2025-08-29"),
        technologies: ["TypeScript", "NestJS", "React", "Jest", "MySQL"],
        environment: "Méthodologie Agile avec sprints de 2 semaines, Windows 11, GitHub, MySQL Workbench, Microsoft Teams, Confluence",
        missions: [
          "Optimisation de la gestion des statuts d'études médicales",
          "Sécurisation des sessions utilisateur",
          "Ajout de test E2E pour les anciennes et nouvelles fonctionnalités",
          "Mise à jour de la documentation technique et fonctionnelle",
          "Participation aux cycles de développement Agile (sprints de 2 semaines)"
        ],
        rythme: "Alternance",
        companySize: "28 employés",
        supervisor: 'Sjarlet Kroes',
        contact: { email: 'contact@wiis.com', website: 'https://wiis.fr' },
      }
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

