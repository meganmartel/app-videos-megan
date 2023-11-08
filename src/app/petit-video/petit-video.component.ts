import { Component, Input } from '@angular/core';
import { VIDEOS } from '../mock-videos';
import { Video } from '../video';

@Component({
  selector: 'app-petit-video',
  templateUrl: './petit-video.component.html',
  styleUrls: ['./petit-video.component.css']
})
export class PetitVideoComponent {
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
    score: 0,
    sousTitres: "",
    avis: []
  }

}
