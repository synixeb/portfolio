import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Portfolio, Skill } from '../../core/portfolio.service';

@Component({
  selector: 'app-skills',
  imports: [NgFor, NgIf],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  skills: Skill[] = [];
  constructor(private portfolio: Portfolio) {
    this.skills = this.portfolio.getSkills();
  }
}
