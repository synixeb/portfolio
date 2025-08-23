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
  name = signal('Evan Bertin');
  about = signal(`Développeur passionné.`);

  timelinePreview: TimelineItem[] = [];
  skillsPreview: Skill[] = [];
  projectsPreview: Project[] = [];

  constructor(private portfolio: Portfolio) {
    this.timelinePreview = this.portfolio.getTimeline().slice(0, 3);
    this.skillsPreview = this.portfolio.getSkills().slice(0, 6);
    this.projectsPreview = this.portfolio.getProjects().slice(0, 3);
  }
}
