import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-page',
  templateUrl: './vehicle-page.component.html',
  styleUrls: ['./vehicle-page.component.css']
})
export class VehiclePageComponent implements OnInit {
  title = "Vehicle";
  constructor() { }

  ngOnInit() {
  }

}
