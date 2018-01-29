import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '../../model/cep/vehicle';

@Pipe({
  name: 'modelFilter'
})
export class ModelFilterPipe implements PipeTransform {

  transform(items: Vehicle[], filter: string): any {
    if(!items || !filter) {
      return items;
    }

    return items.filter(vehicle => vehicle.model.model.toLowerCase().includes(filter.toLowerCase()));
  }

}
