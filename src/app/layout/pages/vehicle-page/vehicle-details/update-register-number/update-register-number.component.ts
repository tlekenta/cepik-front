import { Component, Input, OnInit } from '@angular/core';
import { RegistrationNumber } from '../../../../../model/cep/registration-number';
import { RegistrationNumberService } from '../../../../../services/cep/registration-number.service';
import { RegistrationNumberForm } from '../../../../../model/cep/form/registration-number-form';

@Component({
  selector: 'app-update-register-number',
  templateUrl: './update-register-number.component.html',
  styleUrls: ['./update-register-number.component.css']
})
export class UpdateRegisterNumberComponent implements OnInit {
  @Input() private vehicleId: number;
  @Input() private actualNumbers: RegistrationNumber[];
  private regForm: RegistrationNumberForm = new RegistrationNumberForm();
  private error = false;
  private success = false;
  private errorMsg = "";
  private successMsg = "Dodano nowy numer";


  constructor(private service: RegistrationNumberService) { }

  ngOnInit() {
    this.regForm.actual = true;
    this.regForm.vehicleId = this.vehicleId;
    console.log(this.actualNumbers);
  }

  save(){
    this.actualNumbers.forEach(number => {
      if(number.actual) {
        number.actual = false;
        this.service.update(number.id, new RegistrationNumberForm(number))
          .subscribe();
      }
    });
    this.service.add(this.regForm)
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
