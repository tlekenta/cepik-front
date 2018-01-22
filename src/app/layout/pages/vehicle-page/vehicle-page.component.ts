import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../../model/vehicle';

@Component({
  selector: 'app-vehicle-page',
  templateUrl: './vehicle-page.component.html',
  styleUrls: ['./vehicle-page.component.scss']
})
export class VehiclePageComponent implements OnInit {
  title = "Vehicle";

  table: Array<Vehicle> = [];
  constructor() { }

  ngOnInit() {
      this.table.push({id: 1, numer_rejestracyjny: 'WPR 89TM', marka: 'Opel', model: 'Corsa', pojemnnosc_silnika: 1.2});
      this.table.push({id: 1, numer_rejestracyjny: 'WPR 89TM', marka: 'Opel', model: 'Corsa', pojemnnosc_silnika: 1.2});
      this.table.push({id: 1, numer_rejestracyjny: 'WPR 89TM', marka: 'Opel', model: 'Corsa', pojemnnosc_silnika: 1.2});
      this.table.push({id: 1, numer_rejestracyjny: 'WPR 89TM', marka: 'Opel', model: 'Corsa', pojemnnosc_silnika: 1.2});
      this.table.push({id: 1, numer_rejestracyjny: 'WPR 89TM', marka: 'Opel', model: 'Corsa', pojemnnosc_silnika: 1.2});
      this.table.push({id: 1, numer_rejestracyjny: 'WPR 89TM', marka: 'Opel', model: 'Corsa', pojemnnosc_silnika: 1.2});
      this.table.push({id: 1, numer_rejestracyjny: 'WPR 89TM', marka: 'Opel', model: 'Corsa', pojemnnosc_silnika: 1.2});
      this.table.push({id: 1, numer_rejestracyjny: 'WPR 89TM', marka: 'Opel', model: 'Corsa', pojemnnosc_silnika: 1.2});
  }

}
