import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../../services/cek/driver.service';
import { Driver } from '../../../model/cek/driver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-page',
  templateUrl: './driver-page.component.html',
  styleUrls: ['./driver-page.component.css']
})
export class DriverPageComponent implements OnInit {
  title = "Kierowcy";
  table: Driver[];
  showFilters = false;

  constructor(private service: DriverService,
              private router: Router) { }

  ngOnInit() {
    this.service.getAll()
      .toPromise()
      .then(resp => {
        this.table = resp;
      })
      .catch(error => console.log(error));
  }

  driverSelected(id: number) {
    this.router.navigate(['driver/', id]);
  }

}
