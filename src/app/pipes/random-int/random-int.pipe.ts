import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomInt'
})
export class RandomIntPipe implements PipeTransform {

  transform(value: unknown, min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
