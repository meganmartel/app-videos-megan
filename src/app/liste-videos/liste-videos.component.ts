import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-liste-videos',
  templateUrl: './liste-videos.component.html',
  styleUrls: ['./liste-videos.component.css'],
})
export class ListeVideosComponent implements OnInit {
  selectedCategory: string = '';
  videos: Video[] = [];

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos(): void {
    this.videoService.getVideos()
        .subscribe(resultat => this.videos = resultat);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    console.log('Selected category:', this.selectedCategory);
    if (category === 'Tout') {
      this.getVideos();
    } else {
      this.videoService.getVideosByCategory(category)
        .subscribe(resultat => this.videos = resultat);
    }
  }
}
