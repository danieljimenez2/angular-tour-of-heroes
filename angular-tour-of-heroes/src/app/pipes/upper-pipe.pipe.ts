import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperPipe',
  standalone: true
})
export class UpperPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    
    
    return value.toUpperCase();
  }

}
