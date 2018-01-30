import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../http-wrapper.service';
import { Observable } from 'rxjs/Observable';
import { Authorisation } from '../../model/cek/authorisation';
import { SERVER_URL } from '../../../environments/environment';
import { AuthorisationForm } from '../../model/cek/form/authorisation-form';

@Injectable()
export class DriverAuthorisationService {

  constructor(private http: HttpWrapperService) { }

  getAll(): Observable<Authorisation[]> {
    return this.http.get(SERVER_URL + "/authorisation");
  }

  delete(id: number): Observable<string> {
    return this.http.delete(SERVER_URL + "/authorisation/" + id);
  }

  save(form: AuthorisationForm): Observable<Authorisation> {
    let body = JSON.stringify(form);
    return this.http.post(SERVER_URL + "/authorisation", body);
  }

}
