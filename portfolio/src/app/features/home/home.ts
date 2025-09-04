import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Portfolio, TimelineItem, Skill, Project, Profile, Alternance } from '../../core/portfolio.service';
import { Timeline } from '../timeline/timeline';
import { Projects } from '../projects/projects';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink, Timeline, Projects, NgIf, CommonModule, DatePipe],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  timelinePreview: TimelineItem[] = [];
  projectsPreview: Project[] = [];
  featuredProject: Project | null = null;
  profile: Profile | null = null;
  alternance: Alternance[] = [];

  constructor(private portfolio: Portfolio) {
    this.timelinePreview = this.portfolio.getTimeline().slice(0, 3);
    this.projectsPreview = this.portfolio.getProjects().slice(0, 3);
    this.featuredProject = this.portfolio.getFeaturedProject('quiet');
    this.profile = this.portfolio.getProfile();
    this.alternance = this.portfolio.getAlternances();
  }
}
