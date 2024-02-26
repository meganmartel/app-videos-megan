import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dureeVideoFormat'
})
export class DureeVideoFormatPipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 3600) {
      const hours = Math.floor(value / 3600);
      const remainingSeconds = value % 3600;
      const minutes = Math.floor(remainingSeconds / 60);
      const remainingSecondsFinal = remainingSeconds % 60;
      return `${hours}:${minutes}:${remainingSecondsFinal}`;
    } else if (value >= 60) {
      const minutes = Math.floor(value / 60);
      const remainingSeconds = value % 60;
      return `${minutes}:${remainingSeconds}`;
    } else {
      return `0:${value}`;
    }
  }
}
