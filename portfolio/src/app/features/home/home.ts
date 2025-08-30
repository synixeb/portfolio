import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Portfolio, TimelineItem, Skill, Project, Profile } from '../../core/portfolio.service';
import { Timeline } from '../timeline/timeline';
import { Projects } from '../projects/projects';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Timeline, Projects],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  timelinePreview: TimelineItem[] = [];
  projectsPreview: Project[] = [];
  featuredProject: Project | null = null;
  profile: Profile | null = null;

  constructor(private portfolio: Portfolio) {
  this.timelinePreview = this.portfolio.getTimeline().slice(0, 3);
    this.projectsPreview = this.portfolio.getProjects().slice(0, 3);
  this.featuredProject = this.portfolio.getFeaturedProject('quiet');
    this.profile = this.portfolio.getProfile();
  }
}
