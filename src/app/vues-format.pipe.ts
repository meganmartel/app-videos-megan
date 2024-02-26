import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuesFormat'
})
export class VuesFormatPipe implements PipeTransform {

  transform(views: number): string {
    if (views === 0) {
      return 'Aucun visionnement';
    } else if (views === 1) {
      return '1 visionnement';
    } else if (views < 1000) {
      return `${views} visionnements`;
    } else if (views < 1000000) {
      const thousands = Math.floor(views / 1000);
      return `${thousands} k visionnements`;
    } else {
      const millions = Math.floor(views / 1000000);
      return `${millions} M visionnements`;
    }
  }

}
