import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '../model/cep/vehicle';

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  transform(items: Vehicle[], which: string, filter: string): Vehicle[] {
    if(!items || !which || !filter) {
      return items;
    }
    return items.filter(veh => veh[which].includes(filter));
  }

}
