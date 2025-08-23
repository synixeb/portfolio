import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  // Remplacez ces valeurs par vos informations réelles
  email = 'evanbertin69110@gmail.com';
  phone = '+33 6 52 80 29 96';
  telHref = 'tel:+33652802996';
  location = 'Sainte-Foy-lès-Lyon, France';

  linkedin = 'https://www.linkedin.com/in/evan-bertin';
  github = 'https://github.com/synixeb';
  // Les assets sont servis depuis "public" à la racine de l'app -> utiliser un chemin relatif à la base
  cvUrl = 'assets/documents/cv.pdf';
  sanitizedCvUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.sanitizedCvUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.cvUrl);
  }
}
