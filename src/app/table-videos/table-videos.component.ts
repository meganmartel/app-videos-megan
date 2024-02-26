import { Component, OnInit, ViewChild } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormulaireVideoComponent } from '../formulaire-video/formulaire-video.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table-videos',
  templateUrl: './table-videos.component.html',
  styleUrls: ['./table-videos.component.css']
})
export class TableVideosComponent implements OnInit {
  dataSourceVideos: MatTableDataSource<Video> = new MatTableDataSource();
  columnsToDisplay = ['nom', 'description', 'datePublication', 'sousTitres', 'actions'];
  

  @ViewChild(MatTable) tableVideos!: MatTable<Video>;

  /* Pour la pagination et le tri */
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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
  
  constructor(private videoService: VideoService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getVideos()
  }

  openDialog(video?: Video) {
    console.log(video);
    const dialogRef = this.dialog.open(FormulaireVideoComponent, {
      height: '500px',
      width: '500px',
      data: video,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Le dialog du formulaire de vidéo a été fermé');
      this._snackBar.open(result, undefined, {
        duration: 2000
      });
      this.getVideos();
    })
  }

  getVideos() {
    this.videoService.getVideos().subscribe(
      resultat => {
        console.log(resultat);

        /* Associer les résultats reçus par l'API à la source de données du tableau */
        this.dataSourceVideos = new MatTableDataSource(resultat);

        /* Pour la pagination et le tri */
        this.dataSourceVideos.paginator = this.paginator;
        this.dataSourceVideos.sort = this.sort;

        /* Générer les résultats du tableau */
        this.tableVideos.renderRows();
      }
    )
  }


  deleteVideo(id: string) {
    this.videoService.deleteVideo(id).subscribe(_ => {
      this.getVideos();
      this._snackBar.open("Vidéo supprimé!", undefined, {
        duration: 2000
      })
    })
  }


}
