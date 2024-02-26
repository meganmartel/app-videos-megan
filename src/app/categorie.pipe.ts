import { Pipe, PipeTransform } from '@angular/core';
import { Video } from './video';

@Pipe({
  name: 'categorie'
})
export class CategoriePipe implements PipeTransform {

  transform(videos : Video[], categorie: string): Video[] {
    if (!videos || !categorie) {
      return videos;
    }
    return videos.filter(video => video.categories.includes(categorie));
  }

}
