import { Component } from '@angular/core';
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
  constructor(private portfolio: Portfolio) {
    this.skills = this.portfolio.getSkills();
    this.projectsBySkill = this.portfolio.getSkillProjectMap();
  }
}
