import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter1',
  pure: false
})
export class Filter1Pipe implements PipeTransform {

  transform(value: string[], query: string): any {
    return value.filter(v => v.includes(query));
  }

}
