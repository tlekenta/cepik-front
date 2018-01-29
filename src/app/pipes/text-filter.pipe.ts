import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  transform(items: any[], which: string, filter: string): any[] {
    if(!items || !which || !filter) {
      return items;
    }

    return items.filter(veh => veh[which].toLowerCase().includes(filter.toLowerCase()));
  }

}
