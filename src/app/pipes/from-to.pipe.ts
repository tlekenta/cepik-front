import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '../model/cep/vehicle';

@Pipe({
  name: 'fromToPipe'
})
export class FromToPipe implements PipeTransform {

  transform(items: Vehicle[], which: string, filterFrom: number, filterTo: number, maxLength: number): any {
    if(!items) {
      return items;
    }

    return this.filterTo(this.filterFrom(items, which, filterFrom, maxLength), which, filterTo, maxLength);
  }

  private filterTo(items: Vehicle[], which: string, filter: number, maxLength: number): Vehicle[] {
    if(!filter || filter < Math.pow(10, maxLength - 1)) return items;
    return items.filter(veh => parseFloat(veh[which]) <= filter);
  }

  private filterFrom(items: Vehicle[], which: string, filter: number, maxLength: number): Vehicle[] {
    if(!filter || filter < Math.pow(10, maxLength - 2)) return items;
    return items.filter(veh => parseFloat(veh[which]) >= filter);
  }

}
