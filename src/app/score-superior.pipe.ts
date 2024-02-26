import { Pipe, PipeTransform } from '@angular/core';
import { Video } from './video';

@Pipe({
  name: 'scoreSuperior'
})
export class ScoreSuperiorPipe implements PipeTransform {

  transform(videos: Video[]): Video[] {
    if (!videos) {
      return [];
    }
    return videos.filter(video => video.score > 5000);
  }

}
