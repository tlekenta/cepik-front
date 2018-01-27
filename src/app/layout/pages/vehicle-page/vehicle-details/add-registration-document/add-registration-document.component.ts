import { Component, Input, OnInit } from '@angular/core';
import { RegistrationDocumentForm } from '../../../../../model/cep/form/registration-document-form';
import { RegistrationDocumentService } from '../../../../../services/cep/registration-document.service';

@Component({
  selector: 'app-add-registration-document',
  templateUrl: './add-registration-document.component.html',
  styleUrls: ['./add-registration-document.component.css']
})
export class AddRegistrationDocumentComponent implements OnInit {
  @Input() private vehicleId: number;
  private registrationDocumentForm: RegistrationDocumentForm = new RegistrationDocumentForm();
  private error = false;
  private success = false;
  private errorMsg = "";
  private successMsg = "Dodano nowy dowód";

  constructor(private service: RegistrationDocumentService) { }

  ngOnInit() {
    this.registrationDocumentForm.vehicleId = this.vehicleId;
  }

  add(){
    this.service.save(this.registrationDocumentForm)
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
