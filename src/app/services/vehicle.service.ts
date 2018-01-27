import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';
import { SERVER_URL } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from '../model/vehicle';

@Injectable()
export class VehicleService {

  constructor(private http: HttpWrapperService) { }

  getAll(): Observable<Vehicle[]> {
     return this.http.get<Vehicle[]>(SERVER_URL + "/vehicle");
  }

}
