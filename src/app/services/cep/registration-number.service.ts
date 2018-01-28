import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../http-wrapper.service';
import { RegistrationNumber } from '../../model/cep/registration-number';
import { Observable } from 'rxjs/Observable';
import { SERVER_URL } from '../../../environments/environment';
import { RegistrationNumberForm } from '../../model/cep/form/registration-number-form';

@Injectable()
export class RegistrationNumberService {

  constructor(private http: HttpWrapperService) { }

  getAll(): Observable<RegistrationNumber[]>{
    return this.http.get<RegistrationNumber[]>(SERVER_URL + "/registrationNumber")
  }

  update(id: number, number: RegistrationNumberForm): Observable<RegistrationNumber> {
    let body = JSON.stringify(number);
    return this.http.put<RegistrationNumber>(SERVER_URL + "/registrationNumber/" + id, body);
  }

  add(number: RegistrationNumberForm): Observable<RegistrationNumber> {
    let body = JSON.stringify(number);
    return this.http.post<RegistrationNumber>(SERVER_URL + "/registrationNumber", body);
  }

}
