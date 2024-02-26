import { Component } from '@angular/core';
import { VIDEOS } from '../mock-videos';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css']
})
export class EnteteComponent {
  videos = VIDEOS
}
