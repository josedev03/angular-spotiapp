import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): unknown {
    return images.length > 0 ? images[0].url : 'assets/img/no-image.png';
  }
}
