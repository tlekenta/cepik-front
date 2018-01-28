import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../http-wrapper.service';
import { Observable } from 'rxjs/Observable';
import { DrivingLicence } from '../../model/cek/driving-licence';
import { SERVER_URL } from '../../../environments/environment';

@Injectable()
export class DrivingLicenceService {

  constructor(private http: HttpWrapperService) { }

  getAll(): Observable<DrivingLicence[]> {
    return this.http.get(SERVER_URL + "/drivingLicence");
  }

}
