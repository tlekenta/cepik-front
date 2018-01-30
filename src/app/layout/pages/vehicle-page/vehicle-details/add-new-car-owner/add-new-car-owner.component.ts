import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from '../../../../../model/cep/vehicle';
import { CarOwnerForm } from '../../../../../model/cep/form/car-owner-form';
import { OcInsuranceService } from '../../../../../services/cep/oc-insurance.service';
import { CarOwnerService } from '../../../../../services/cep/car-owner.service';
import { RegistrationDocumentService } from '../../../../../services/cep/registration-document.service';
import { RegistrationDocumentForm } from '../../../../../model/cep/form/registration-document-form';
import { parseDate } from 'ngx-bootstrap/chronos';
import { OcInsuranceForm } from '../../../../../model/cep/form/oc-insurance-from';

@Component({
  selector: 'app-add-new-car-owner',
  templateUrl: './add-new-car-owner.component.html',
  styleUrls: ['./add-new-car-owner.component.css']
})
export class AddNewCarOwnerComponent implements OnInit {
  @Input() private vehicle: Vehicle;
  private carOwnerForm: CarOwnerForm = new CarOwnerForm();

  private error = false;
  private success = false;
  private errorMsg = "";
  private successMsg = "Poprawnie dodano właściciela";

  constructor(private ocService: OcInsuranceService,
              private ownerService: CarOwnerService) { }

  ngOnInit() {
  }

  add(){
    // console.log(this.carOwnerForm)
    this.ownerService.save(this.carOwnerForm)
      .toPromise()
      .then(resp => {
        this.error = false;
        this.success  = true;
        let form = new OcInsuranceForm();
        form.from = parseDate("2018-01-01", "rrrr-mm-dd");
        form.to = parseDate("2019-01-01", "rrrr-mm-dd");
        form.policyNumberWithPIN = Date.now().toString();
        form.carOwnerId = resp.id;
        form.vehicleId = this.vehicle.id;

        this.ocService.save(form)
          .toPromise()
          .then(resp => window.location.reload())
          .catch(error => console.log(error));

        window.location.reload();
      })
      .catch(error => {
        this.errorMsg = error.error;
        this.error = true;
        this.success = false;
      });
  }

}
