import { Routes } from '@angular/router';
import { Timeline } from './features/timeline/timeline';
import { Skills } from './features/skills/skills';
import { Projects } from './features/projects/projects';
import { Home } from './features/home/home';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
	{ path: '', component: Home, title: 'Accueil' },
	{ path: 'accueil', redirectTo: '', pathMatch: 'full' },
	{ path: 'projets', component: Projects, title: 'Projets' },
	{ path: 'contact', component: Contact, title: 'Contact' },
	{ path: '**', redirectTo: '' }
];
