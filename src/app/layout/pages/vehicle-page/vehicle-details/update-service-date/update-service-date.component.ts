import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from '../../../../../model/cep/vehicle';
import { VehicleForm } from '../../../../../model/cep/form/vehicle-form';
import { VehicleService } from '../../../../../services/cep/vehicle.service';

@Component({
  selector: 'app-update-service-date',
  templateUrl: './update-service-date.component.html',
  styleUrls: ['./update-service-date.component.css']
})
export class UpdateServiceDateComponent implements OnInit {
  @Input() private vehicle: Vehicle;
  private vehicleForm: VehicleForm = new VehicleForm();
  private error = false;
  private success = false;
  private errorMsg = "";
  private successMsg = "Przedłużono ważność";

  constructor(private service: VehicleService) { }

  ngOnInit() {
    this.vehicleForm = new VehicleForm(this.vehicle);
  }

  save(){
    this.service.update(this.vehicle.id, this.vehicleForm)
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
