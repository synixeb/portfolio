import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Portfolio, Skill, Project } from '../../core/portfolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class Skills {
  skills: Skill[] = [];
  grouped: { type: string; items: Skill[] }[] = [];
  searchTerm = '';
  selectedSkill: Skill | null = null;
  selectedProjects: Project[] = [];
  projectsBySkill: Record<string, Project[]> = {};
  skillIconMap: Record<string, string> = {};
  constructor(private portfolio: Portfolio) {
    this.skills = this.portfolio.getSkills();
    this.buildGroups();
    this.projectsBySkill = this.portfolio.getSkillProjectMap();
    // build skill name (lowercase) -> icon path map
    const skills = this.portfolio.getSkills() || [];
    for (const s of skills) {
      if (s && s.name) {
        const key = s.name.toLowerCase();
        if (s.icon) this.skillIconMap[key] = 'assets/icons/' + s.icon;
      }
    }
  }

  onSearch(value: string) {
    this.searchTerm = value || '';
    this.buildGroups();
  }

  private buildGroups() {
    const q = this.searchTerm.trim().toLowerCase();
    const source = q ? this.skills.filter(s => {
      if (s.name.toLowerCase().includes(q)) return true;
      if (s.type && s.type.toLowerCase().includes(q)) return true;
      if (s.category && s.category.join(' ').toLowerCase().includes(q)) return true;
      return false;
    }) : this.skills;

    const map = new Map<string, Skill[]>();
    for (const s of source) {
      const t = s.type || 'Autre';
      if (!map.has(t)) map.set(t, []);
      map.get(t)!.push(s);
    }
    this.grouped = Array.from(map.entries()).map(([type, items]) => ({ type, items }));
  }

  openSkill(s: Skill) {
    this.selectedSkill = s;
    this.selectedProjects = this.projectsBySkill[s.name] || [];
    setTimeout(() => {
      const el = document.querySelector('.modal-card') as HTMLElement | null;
      if (el) el.focus();
    }, 0);
  }

  closeSkill() {
    this.selectedSkill = null;
    this.selectedProjects = [];
  }
}
