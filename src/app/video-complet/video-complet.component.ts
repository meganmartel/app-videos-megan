import { Component, Input } from '@angular/core';
import { VIDEOS } from '../mock-videos';
import { Video } from '../video';

@Component({
  selector: 'app-video-complet',
  templateUrl: './video-complet.component.html',
  styleUrls: ['./video-complet.component.css']
})
export class VideoCompletComponent {
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
  videos = VIDEOS
}
