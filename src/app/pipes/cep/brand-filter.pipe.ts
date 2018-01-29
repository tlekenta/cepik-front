import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '../../model/cep/vehicle';

@Pipe({
  name: 'brandFilter'
})
export class BrandFilterPipe implements PipeTransform {

  transform(items: Vehicle[], filter: string): any {
    if(!items || !filter) {
      return items;
    }

    return items.filter(vehicle => vehicle.model.brand.brand.toLowerCase().includes(filter.toLowerCase()));
  }

}
