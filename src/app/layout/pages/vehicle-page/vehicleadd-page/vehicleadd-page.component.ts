import { Component, OnInit } from '@angular/core';
import { VehicleForm } from '../../../../model/cep/form/vehicle-form';
import { VehicleService } from '../../../../services/cep/vehicle.service';
import { VehicleModel } from '../../../../model/cep/vehicle-model';

@Component({
  selector: 'app-vehicleadd-page',
  templateUrl: './vehicleadd-page.component.html',
  styleUrls: ['./vehicleadd-page.component.css']
})
export class VehicleaddPageComponent implements OnInit {
  private vehicle: VehicleForm = new VehicleForm();
  private brands: {id: number, brand: string}[];
  private models: VehicleModel[];
  private errorMsg = "";
  private successMsg = "Poprawnie dodano pojazd";
  private submited = false;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.getBrands().subscribe(data => {
      this.brands = data;
    });
    this.vehicleService.getModels().subscribe(data => {
      this.models = data.filter(model => model.brand.id === 1);
      this.vehicle.carModelId = 1;
    });

  }

  brandChanged(newBrandId: number){
    this.vehicleService.getModels().subscribe(data => {
      this.models = data.filter(model => model.brand.id == newBrandId);
      this.vehicle.carModelId = this.models[0].id;
    });
  }

  add(){
    this.vehicleService.saveVehicle(this.vehicle)
      .toPromise()
      .then(resp => {
        this.submited = true;
        this.errorMsg = '';
      })
      .catch(error => {
        this.errorMsg = error.error;
        this.submited = true;
      })
  }

}
