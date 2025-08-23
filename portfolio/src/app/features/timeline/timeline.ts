import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Portfolio, TimelineItem } from '../../core/portfolio.service';

@Component({
  selector: 'app-timeline',
  imports: [NgFor, NgIf],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss'
})
export class Timeline {
  items: TimelineItem[] = [];
  constructor(private portfolio: Portfolio) {
    this.items = this.portfolio.getTimeline();
  }
}
