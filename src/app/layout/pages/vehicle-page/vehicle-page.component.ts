import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../../model/vehicle';
import { VehicleService } from '../../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-page',
  templateUrl: './vehicle-page.component.html',
  styleUrls: ['./vehicle-page.component.scss']
})
export class VehiclePageComponent implements OnInit {
  title = "Vehicle";

  table: Array<Vehicle> = [];
  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.getAll().subscribe(data => {
      this.table = data;
    })
  }

}
