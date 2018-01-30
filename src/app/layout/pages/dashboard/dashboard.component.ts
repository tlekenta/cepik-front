import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../../services/cek/driver.service';
import { VehicleService } from '../../../services/cep/vehicle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = "Dashboard";
  liczbaKierowcow = 0;
  liczbaPojazdow = 0;
  constructor(private driversService: DriverService,
              private vehiclesService: VehicleService) { }

  ngOnInit() {
    this.driversService.getAll()
      .toPromise()
      .then(resp => this.liczbaKierowcow = resp.length)
    this.vehiclesService.getAll()
      .toPromise()
      .then(resp => this.liczbaPojazdow = resp.length)
  }

}
