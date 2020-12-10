import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTimeTrimmer'
})
export class DateTimeTrimmerPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split('T')[0];
  }

}
