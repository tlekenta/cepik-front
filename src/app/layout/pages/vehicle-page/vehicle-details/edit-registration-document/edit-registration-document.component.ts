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
  private selectedDocument: RegistrationDocument;
  private registrationDocumentForm: RegistrationDocumentForm = new RegistrationDocumentForm();
  private error = false;
  private success = false;
  private errorMsg = "";
  private successMsg = "Przedłużono ważność";

  constructor(private service: RegistrationDocumentService) { }

  ngOnInit() {
    this.registrationDocumentForm.vehicleId = this.vehicleId;
    this.selectedDocument = this.actualDocuments[0];
  }

  save(){
    this.registrationDocumentForm.sequence = this.selectedDocument.sequence;
    this.service.update(this.selectedDocument.id, this.registrationDocumentForm)
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
