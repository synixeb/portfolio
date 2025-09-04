import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, NgFor, NgIf, isPlatformBrowser } from '@angular/common';
import { Portfolio, Alternance as AlternanceType } from '../../core/portfolio.service';

@Component({
  selector: 'app-alternance',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './alternance.html',
  styleUrls: ['./alternance.scss']
})
export class Alternance {
  alternances: AlternanceType[] = [];
  skillIconMap: Record<string, string> = {};

  isMobile = false;
  expanded: boolean[] = [];

  constructor(private portfolio: Portfolio, @Inject(PLATFORM_ID) private platformId: Object) {
    this.alternances = this.portfolio.getAlternances();
    const browser = isPlatformBrowser(this.platformId);
    this.isMobile = browser ? window.innerWidth <= 880 : false;
    this.expanded = this.alternances.map(() => !this.isMobile);
    const skills = this.portfolio.getSkills() || [];
    for (const s of skills) {
      if (s && s.name) {
        const key = s.name.toLowerCase();
        if (s.icon) this.skillIconMap[key] = 'assets/icons/' + s.icon;
      }
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (!isPlatformBrowser(this.platformId)) return;
    const mobile = window.innerWidth <= 880;
    if (mobile !== this.isMobile) {
      this.isMobile = mobile;
      // collapse on switch to mobile
      this.expanded = this.alternances.map(() => !this.isMobile);
    }
  }

  toggle(i: number) {
    this.expanded[i] = !this.expanded[i];
  }
}
