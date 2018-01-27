import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../http-wrapper.service';
import { SERVER_URL } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from '../../model/cep/vehicle';
import { VehicleModel } from '../../model/cep/vehicle-model';
import { VehicleForm } from '../../model/cep/form/vehicle-form';

@Injectable()
export class VehicleService {

  constructor(private http: HttpWrapperService) { }

  getAll(): Observable<Vehicle[]> {
     return this.http.get<Vehicle[]>(SERVER_URL + "/vehicle");
  }

  getById(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle[]>(SERVER_URL + "/vehicle/" + id);
  }

  getBrands(): Observable<{id: number, brand: string}[]> {
    return this.http.get<{id: number, brand: string}[]>(SERVER_URL + "/carBrand");

  }

  getModels(): Observable<VehicleModel[]> {
    return this.http.get<VehicleModel[]>(SERVER_URL + "/carModel");
  }

  getModelById(id: number): Observable<VehicleModel> {
    return this.http.get<VehicleModel>(SERVER_URL + "/carModel/" + id);
  }

  saveVehicle(vehicle: VehicleForm): Observable<Vehicle>{
    let body = JSON.stringify(vehicle);
    return this.http.post<Vehicle>(SERVER_URL + "/vehicle", body);
  }

  delete(id: number) {
    return this.http.delete(SERVER_URL + "/vehicle/" + id);
  }

}
