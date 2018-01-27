import { Component, Input, OnInit } from '@angular/core';
import { RegistrationDocumentForm } from '../../../../../model/cep/form/registration-document-form';
import { RegistrationDocumentService } from '../../../../../services/cep/registration-document.service';
import { RegistrationDocument } from '../../../../../model/cep/registration-document';

@Component({
  selector: 'app-edit-registration-document',
  templateUrl: './edit-registration-document.component.html',
  styleUrls: ['./edit-registration-document.component.css']
})
export class EditRegistrationDocumentComponent implements OnInit {
  @Input() private vehicleId: number;
  @Input() private actualDocuments: RegistrationDocument[];
  private selectedDocumentId: number;
  private registrationDocumentForm: RegistrationDocumentForm = new RegistrationDocumentForm();
  private error = false;
  private success = false;
  private errorMsg = "";
  private successMsg = "Przedłużono ważność";

  constructor(private service: RegistrationDocumentService) { }

  ngOnInit() {
    this.registrationDocumentForm.vehicleId = this.vehicleId;
    this.registrationDocumentForm.sequence = this.actualDocuments[0].sequence;
    this.selectedDocumentId = this.actualDocuments[0].id;
  }

  sequenceChanged(o){
    this.selectedDocumentId = o;
    this.registrationDocumentForm.sequence = this.actualDocuments.filter(doc => doc.id == o)[0].sequence;
  }

  save(){
    this.service.update(this.selectedDocumentId, this.registrationDocumentForm)
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
