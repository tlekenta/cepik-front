import { Component, Input, OnInit } from '@angular/core';
import { CarOwnerService } from '../../../../../services/cep/car-owner.service';
import { OcInsuranceService } from '../../../../../services/cep/oc-insurance.service';
import { OcInsuranceForm } from '../../../../../model/cep/form/oc-insurance-from';
import { parseDate } from 'ngx-bootstrap/chronos';
import { Vehicle } from '../../../../../model/cep/vehicle';
import { CarOwner } from '../../../../../model/cep/car-owner';

@Component({
  selector: 'app-add-existing-car-owner',
  templateUrl: './add-existing-car-owner.component.html',
  styleUrls: ['./add-existing-car-owner.component.css']
})
export class AddExistingCarOwnerComponent implements OnInit {
  private wlasciciele = [];
  @Input() vehicle: Vehicle;
  @Input() aktualni: CarOwner[];

  error = false;
  errorMsg = "Wybrana osoba już jest właścicelem tego pojazdu";

  constructor(private carOwnerServeice: CarOwnerService,
              private ocService: OcInsuranceService) { }

  ngOnInit() {
    this.carOwnerServeice.getAll()
      .toPromise()
      .then(resp => this.wlasciciele = resp);
  }

  ownerSelected(owner) {
    this.error = false;
    this.aktualni.forEach(ow => {
      if(ow.id == owner.id) {
        this.error = true;
        return;
      }
    });

    let form = new OcInsuranceForm();
    form.from = parseDate("2018-01-01", "rrrr-mm-dd");
    form.to = parseDate("2019-01-01", "rrrr-mm-dd");
    form.policyNumberWithPIN = Date.now().toString();
    form.carOwnerId = owner.id;
    form.vehicleId = this.vehicle.id;

    this.ocService.save(form)
      .toPromise()
      .then(resp => window.location.reload())
      .catch(error => console.log(error));
  }

}
