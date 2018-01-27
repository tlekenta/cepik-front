import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../../../services/vehicle.service';
import { Vehicle } from '../../../../model/cep/vehicle';
import { RegistrationDocument } from '../../../../model/cep/registration-document';
import { RegistrationDocumentService } from '../../../../services/registration-document.service';
import { RegistrationNumber } from '../../../../model/cep/registration-number';
import { RegistrationNumberService } from '../../../../services/registration-number.service';

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

  constructor(private route: ActivatedRoute,
              private service: VehicleService,
              private regService: RegistrationDocumentService,
              private numberService: RegistrationNumberService) { }

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
