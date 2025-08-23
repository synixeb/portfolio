import { Routes } from '@angular/router';
import { Timeline } from './features/timeline/timeline';
import { Skills } from './features/skills/skills';
import { Projects } from './features/projects/projects';
import { Home } from './features/home/home';

export const routes: Routes = [
	{ path: '', component: Home, title: 'Accueil' },
	{ path: 'accueil', redirectTo: '', pathMatch: 'full' },
	{ path: 'frise', component: Timeline, title: 'Frise chronologique' },
	{ path: 'competences', component: Skills, title: 'Compétences' },
	{ path: 'projets', component: Projects, title: 'Projets' },
	{ path: '**', redirectTo: 'frise' }
];
