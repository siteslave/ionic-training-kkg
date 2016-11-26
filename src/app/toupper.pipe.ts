import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toupper'
})
export class ToupperPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toUpperCase();
  }

}
