import { Component, OnInit } from '@angular/core';
import { DriverForm } from '../../../../model/cek/form/driver-form';
import { DriverService } from '../../../../services/cek/driver.service';
import { Router } from '@angular/router';

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

  constructor(private service: DriverService,
              private router: Router) { }

  ngOnInit() {
  }

  add(){
    console.log(this.driver);
    this.service.saveDriver(this.driver)
      .toPromise()
      .then(resp => {
        this.error = false;
        this.success  = true;
        this.router.navigate(["/driver/" + resp.id]);
      })
      .catch(error => {
        this.errorMsg = error.error;
        this.error = true;
        this.success = false;
      });
  }

}
