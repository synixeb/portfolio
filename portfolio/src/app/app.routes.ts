import { Routes } from '@angular/router';
import { Timeline } from './features/timeline/timeline';
import { Skills } from './features/skills/skills';
import { Projects } from './features/projects/projects';
import { Home } from './features/home/home';
import { Contact } from './features/contact/contact';
import { QRComponent } from './features/qr/qr';
import { Alternance } from './features/alternance/alternance';

export const routes: Routes = [
	{ path: '', component: Home, title: 'Accueil' },
	{ path: 'accueil', redirectTo: '', pathMatch: 'full' },
	{ path: 'projets', component: Projects, title: 'Projets' },
	{ path: 'competences', component: Skills, title: 'Compétences' },
	{ path: 'alternance', component: Alternance, title: 'Alternance' },
	{ path: 'contact', component: Contact, title: 'Contact' },
	{ path: 'qr', component: QRComponent, title: 'QR Code' },
	{ path: '**', redirectTo: '' }
];
