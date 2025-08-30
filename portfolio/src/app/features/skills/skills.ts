import { Component } from '@angular/core';
import { Portfolio, Skill } from '../../core/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class Skills {
  skills: Skill[] = [];
  grouped: { type: string; items: Skill[] }[] = [];
  constructor(private portfolio: Portfolio) {
    this.skills = this.portfolio.getSkills();
    this.buildGroups();
  }

  private buildGroups() {
    const map = new Map<string, Skill[]>();
    for (const s of this.skills) {
      const t = s.type || 'Autre';
      if (!map.has(t)) map.set(t, []);
      map.get(t)!.push(s);
    }
    this.grouped = Array.from(map.entries()).map(([type, items]) => ({ type, items }));
  }
}
