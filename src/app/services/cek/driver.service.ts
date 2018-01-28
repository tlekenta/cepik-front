import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../http-wrapper.service';
import { Observable } from 'rxjs/Observable';
import { Driver } from '../../model/cek/driver';
import { SERVER_URL } from '../../../environments/environment';

@Injectable()
export class DriverService {

  constructor(private http: HttpWrapperService) { }

  getAll(): Observable<Driver[]> {
    return this.http.get(SERVER_URL + "/drivers")
  }

}
