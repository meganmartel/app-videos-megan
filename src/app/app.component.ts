import { Component, Input } from '@angular/core';
import { VIDEOS } from './mock-videos';
import { Video } from './video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() video: Video = {
    img_url: "",
    nom: "",
    description: "",
    categories: [],
    auteur: {
      nom: "",
      description: "",
    },
    datePublication: "",
    duree: 0,
    nombreVues: 0,
    avis: []
  }
  videos = VIDEOS;
  utilisateurConnecte = VIDEOS[0];
  title = 'MeTube';
}
