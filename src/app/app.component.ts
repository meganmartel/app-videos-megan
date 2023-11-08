import { Component } from '@angular/core';
import { VIDEOS } from './mock-videos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MeTube';

  videos = VIDEOS
}
