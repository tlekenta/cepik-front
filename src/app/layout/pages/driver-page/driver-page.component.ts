import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../../services/cek/driver.service';
import { Driver } from '../../../model/cek/driver';

@Component({
  selector: 'app-driver-page',
  templateUrl: './driver-page.component.html',
  styleUrls: ['./driver-page.component.css']
})
export class DriverPageComponent implements OnInit {
  title = "Kierowcy";
  table: Driver[];

  constructor(private service: DriverService) { }

  ngOnInit() {
    this.service.getAll()
      .toPromise()
      .then(resp => {
        this.table = resp;
      })
      .catch(error => console.log(error));
  }

}
