import { Component, Input, OnInit } from '@angular/core';
import { AuthorisationForm } from '../../../../../model/cek/form/authorisation-form';
import { DriverAuthorisationService } from '../../../../../services/cek/driver-authorisation.service';
import { CATEGORIES } from '../../../../../model/cek/authorisation';
import { Driver } from '../../../../../model/cek/driver';

@Component({
  selector: 'app-add-authorisation',
  templateUrl: './add-authorisation.component.html',
  styleUrls: ['./add-authorisation.component.css']
})
export class AddAuthorisationComponent implements OnInit {
  @Input() private driver: Driver;
  private authForm: AuthorisationForm = new AuthorisationForm();
  private categories = CATEGORIES;

  private error = false;
  private success = false;
  private errorMsg = "";
  private successMsg = "Dodano nową kategorię";

  constructor(private service: DriverAuthorisationService) { }

  ngOnInit() {
    this.authForm.driverId = this.driver.id;
  }

  add(){
    this.service.save(this.authForm)
      .toPromise()
      .then(resp => {
        this.error = false;
        this.success = true;
        window.location.reload();
      })
      .catch(error => {
        this.errorMsg = error.error;
        this.error = true;
        this.success = false;
      })
  }

}
