import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { Portfolio, TimelineItem, Skill, Project } from '../../core/portfolio.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgFor],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  name = signal('Jeune Développeur');
  about = signal(`Développeur passionné par le web (Angular/Node.js). J’aime créer des interfaces soignées et des apps utiles.`);

  timelinePreview: TimelineItem[] = [];
  skillsPreview: Skill[] = [];
  projectsPreview: Project[] = [];

  constructor(private portfolio: Portfolio) {
    this.timelinePreview = this.portfolio.getTimeline().slice(0, 3);
    this.skillsPreview = this.portfolio.getSkills().slice(0, 6);
    this.projectsPreview = this.portfolio.getProjects().slice(0, 3);
  }
}
