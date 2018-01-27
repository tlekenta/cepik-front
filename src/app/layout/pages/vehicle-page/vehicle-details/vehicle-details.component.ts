import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../../../services/vehicle.service';
import { Vehicle } from '../../../../model/vehicle/vehicle';

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

  constructor(private route: ActivatedRoute,
              private service: VehicleService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vehicleId = params['id'];
      this.service.getById(this.vehicleId)
        .subscribe(data => {
          this.vehicle = data;
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
