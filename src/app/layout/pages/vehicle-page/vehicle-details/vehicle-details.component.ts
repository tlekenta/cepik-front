import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../../../services/cep/vehicle.service';
import { Vehicle } from '../../../../model/cep/vehicle';
import { RegistrationDocument } from '../../../../model/cep/registration-document';
import { RegistrationDocumentService } from '../../../../services/cep/registration-document.service';
import { RegistrationNumber } from '../../../../model/cep/registration-number';
import { RegistrationNumberService } from '../../../../services/cep/registration-number.service';
import { OcInsurance } from '../../../../model/cep/oc-insurance';
import { OcInsuranceService } from '../../../../services/cep/oc-insurance.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  private vehicleId;
  private vehicle: Vehicle;
  private model = "";
  private marka = "";
  private dowodyRejestracyjne: RegistrationDocument[] = [];
  private numeryRejestracyjne: RegistrationNumber[] = [];
  private ubezpieczeniaOc: OcInsurance[] = [];
  private showAddDocument: boolean = false;
  private showUpdateDocument: boolean = false;
  private showAddNumber: boolean = false;
  private updateServiceDate: boolean = false;

  constructor(private route: ActivatedRoute,
              private service: VehicleService,
              private regService: RegistrationDocumentService,
              private numberService: RegistrationNumberService,
              private ocService: OcInsuranceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vehicleId = params['id'];
      this.service.getById(this.vehicleId)
        .subscribe(data => {
          this.vehicle = data;
          this.regService.getAll()
            .subscribe(data => {
              this.dowodyRejestracyjne = data.filter(dowod => dowod.vehicle.id == this.vehicleId);
            });
          this.numberService.getAll()
            .subscribe(data => {
              this.numeryRejestracyjne = data.filter(numer => numer.vehicle.id == this.vehicleId);
            });
          this.ocService.getAll()
            .subscribe(data => {
              this.ubezpieczeniaOc = data.filter(oc => oc.vehicle.id == this.vehicleId);
            });
          this.service.getModelById(this.vehicle.model.id)
            .subscribe(data => {
              this.model = data.model;
              this.marka = data.brand.brand;
            });
        });
    });
  }

  delete(){
    console.log("delete()");
    this.service.delete(this.vehicleId)
      .toPromise()
      .then(resp => console.log(resp))
      .catch(resp => console.log(resp))

  }

}
