import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Portfolio, Project } from '../../core/portfolio.service';

@Component({
  selector: 'app-projects',
  imports: [NgFor, NgIf],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects: Project[] = [];
  constructor(private portfolio: Portfolio) {
    this.projects = this.portfolio.getProjects();
  }
}
