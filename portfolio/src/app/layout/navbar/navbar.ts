import { Component, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar implements OnDestroy {
  isDark = false;
  private readonly isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
  private mql: MediaQueryList | null = null;
  private userPreferred = false;
  private transitionTimer: any = null;

  constructor() {
    if (this.isBrowser) {
      const stored = localStorage.getItem('theme');
      this.userPreferred = stored === 'light' || stored === 'dark';

      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = (stored as 'light' | 'dark') || (prefersDark ? 'dark' : 'light');

      // Ne pas persister si l'utilisateur n'a pas encore choisi
      this.applyTheme(theme, this.userPreferred);

      if (window.matchMedia) {
        this.mql = window.matchMedia('(prefers-color-scheme: dark)');
        // Écoute les changements système tant qu'il n'y a pas de préférence utilisateur
        const mql = this.mql;
        (mql.addEventListener
          ? mql.addEventListener('change', this.onSystemThemeChange)
          : mql.addListener(this.onSystemThemeChange as any));
      }
    }
  }

  toggleTheme() {
    const next: 'light' | 'dark' = this.isDark ? 'light' : 'dark';
    this.userPreferred = true;
    this.startThemeTransition();
    this.applyTheme(next, true);
  }

  private applyTheme(theme: 'light' | 'dark', persist = true) {
    if (!this.isBrowser) return;
    document.documentElement.setAttribute('data-theme', theme);
    this.isDark = theme === 'dark';
    if (persist) {
      try { localStorage.setItem('theme', theme); } catch {}
    }
  }

  private startThemeTransition() {
    if (!this.isBrowser) return;
    document.documentElement.classList.add('theme-transition');
    clearTimeout(this.transitionTimer);
    this.transitionTimer = setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 300);
  }

  private onSystemThemeChange = (e: MediaQueryListEvent) => {
    if (!this.userPreferred) {
      this.startThemeTransition();
      this.applyTheme(e.matches ? 'dark' : 'light', false);
    }
  };

  ngOnDestroy() {
    if (this.mql) {
      (this.mql.removeEventListener
        ? this.mql.removeEventListener('change', this.onSystemThemeChange)
        : this.mql.removeListener(this.onSystemThemeChange as any));
    }
  }
}
