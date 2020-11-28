import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileName'
})
export class FileNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return decodeURI(value.replace('https://194.59.159.71/media/', ''));
  }

}
