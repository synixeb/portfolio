import { Component, HostListener } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Portfolio, Skill, Project } from '../../core/portfolio.service';

@Component({
  selector: 'app-skills',
  imports: [NgFor, NgIf],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  skills: Skill[] = [];
  projectsBySkill: Record<string, Project[]> = {} as any;
  selectedSkill: Skill | null = null;
  selectedProjects: Project[] = [];
  constructor(private portfolio: Portfolio) {
    this.skills = this.portfolio.getSkills();
    this.projectsBySkill = this.portfolio.getSkillProjectMap();
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

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedSkill) this.closeSkill();
  }
}
