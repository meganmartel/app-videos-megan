import { Component, Inject, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-formulaire-video',
  templateUrl: './formulaire-video.component.html',
  styleUrls: ['./formulaire-video.component.css'],
})
export class FormulaireVideoComponent implements OnInit {
  

  video: Video = {
    img_url: "https://picsum.photos/id/152/400/250",
    nom: "",
    description: "",
    categories: [],
    auteur: {
      nom: 'Megan Martel',
      description: 'Étudiante en Développement Web',
      verifie: true,
    },
    datePublication: "",
    duree: 0,
    sousTitres: "",
    nombreVues: 0,
    score: 0,
    avis: [],  
  };

  selectedvalue=0;
  
  constructor(private videoService: VideoService, public dialogRef: MatDialogRef<FormulaireVideoComponent>, @Inject(MAT_DIALOG_DATA) public data: Video) {
    if (data) {
      this.video = data;
    }
  }

  ngOnInit(): void {

  }

  addVideo(videoForm: NgForm) {
    if (videoForm.valid) {
      this.videoService.addVideo(this.video).subscribe(_ => {
        videoForm.resetForm();
        this.dialogRef.close("Vidéo ajouté!");
        })
      };
  }
  
    updateVideo(videoForm: NgForm) {
      if (videoForm.valid) {
        this.videoService.updateVideo(this.video).subscribe(_ => {
          videoForm.resetForm();
          this.dialogRef.close("Vidéo modifié!");
        })
      };
    }

    annuler() {
      this.dialogRef.close();
    }
}


 
