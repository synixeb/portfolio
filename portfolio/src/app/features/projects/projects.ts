import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Portfolio, Project } from '../../core/portfolio.service';

@Component({
  selector: 'app-projects',
  imports: [NgFor, NgIf],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects {
  projects: Project[] = [];
  searchTerm = '';
  constructor(private portfolio: Portfolio) {
    this.projects = this.portfolio.getProjects();
  }

  onSearch(value: string) {
    this.searchTerm = value || '';
  }

  get filteredProjects(): Project[] {
    const q = this.searchTerm.trim().toLowerCase();
    if (!q) return this.projects;
    return this.projects.filter(p => {
      if (p.name.toLowerCase().includes(q)) return true;
      for (const t of p.tech) {
        if (t.toLowerCase().includes(q)) return true;
      }
      return false;
    });
  }
}
