import { Component, OnInit } from '@angular/core';
import { DriverForm } from '../../../../model/cek/form/driver-form';

@Component({
  selector: 'app-driver-add',
  templateUrl: './driver-add.component.html',
  styleUrls: ['./driver-add.component.css']
})
export class DriverAddComponent implements OnInit {
  private driver: DriverForm = new DriverForm();
  private error = false;
  private success = false;
  private errorMsg = "";
  private successMsg = "Poprawnie dodano kierowcę";

  constructor() { }

  ngOnInit() {
  }

  add(){
    console.log(this.driver);
  }

}
