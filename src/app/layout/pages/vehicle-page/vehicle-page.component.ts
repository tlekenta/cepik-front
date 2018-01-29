import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../../model/cep/vehicle';
import { VehicleService } from '../../../services/cep/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-page',
  templateUrl: './vehicle-page.component.html',
  styleUrls: ['./vehicle-page.component.scss']
})
export class VehiclePageComponent implements OnInit {
  title = "Vehicle";
  showFilters = false;

  table: Array<Vehicle> = [];
  constructor(private vehicleService: VehicleService,
              private router: Router) { }

  ngOnInit() {
    this.vehicleService.getAll().subscribe(data => {
      this.table = data;
    })
  }

  carSelected(id: number) {
    this.router.navigate(['vehicle/', id]);
  }

}
