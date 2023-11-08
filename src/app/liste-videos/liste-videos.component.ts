import { Component, Input } from '@angular/core';
import { VIDEOS } from '../mock-videos';
import { Video } from '../video';

@Component({
  selector: 'app-liste-videos',
  templateUrl: './liste-videos.component.html',
  styleUrls: ['./liste-videos.component.css']
})
export class ListeVideosComponent {
  videos = VIDEOS
}
