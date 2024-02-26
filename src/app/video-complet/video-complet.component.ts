import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';
import { Avis } from '../avis';

@Component({
  selector: 'app-video-complet',
  templateUrl: './video-complet.component.html',
  styleUrls: ['./video-complet.component.css']
})
export class VideoCompletComponent implements OnInit {
  video: Video = {
    id: 0,
    img_url: "",
    nom: "",
    description: "",
    categories: [],
    auteur: {
      nom: "",
      description: "",
      verifie: true,
    },
    datePublication: "",
    duree: 0,
    nombreVues: 0,
    score: 0,
    sousTitres: "",
    avis: []
  };
  avis: Avis[] = [];

  constructor (
    private videoService: VideoService,
    private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
      this.getVideo();
    }

    getVideo(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.videoService.getVideo(id)
          .subscribe(resultat => this.video = resultat);
          this.getAvis(id)
      }
    }

    getAvis(id: string): void {
      this.videoService.getAvis(id)
        .subscribe(avis => this.avis = avis)
    }

  getTooltipText(views: number): string {
    if (views === 0) {
      return `${views} visionnement`;
    }
    else if (views === 1) {
      return `${views} visionnement`;
    } else {
      return `${views.toLocaleString('fr-FR')} visionnements`;
    }
  }
}
