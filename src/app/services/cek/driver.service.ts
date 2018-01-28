import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../http-wrapper.service';
import { Observable } from 'rxjs/Observable';
import { Driver } from '../../model/cek/driver';
import { SERVER_URL } from '../../../environments/environment';
import { DriverForm } from '../../model/cek/form/driver-form';

@Injectable()
export class DriverService {

  constructor(private http: HttpWrapperService) { }

  getAll(): Observable<Driver[]> {
    return this.http.get(SERVER_URL + "/drivers")
  }

  getById(id: number): Observable<Driver> {
    return this.http.get<Driver>(SERVER_URL + "/drivers/" + id);
  }

  saveDriver(driver: DriverForm): Observable<Driver>{
    let body = JSON.stringify(driver);
    return this.http.post<Driver>(SERVER_URL + "/drivers", body);
  }

}
