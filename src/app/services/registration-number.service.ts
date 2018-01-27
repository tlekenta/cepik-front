import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';
import { RegistrationNumber } from '../model/cep/registration-number';
import { Observable } from 'rxjs/Observable';
import { SERVER_URL } from '../../environments/environment';

@Injectable()
export class RegistrationNumberService {

  constructor(private http: HttpWrapperService) { }

  getAll(): Observable<RegistrationNumber[]>{
    return this.http.get<RegistrationNumber[]>(SERVER_URL + "/registrationNumber")
  }

}
