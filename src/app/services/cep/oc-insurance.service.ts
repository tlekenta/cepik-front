import { Injectable } from '@angular/core';
import { OcInsurance } from '../../model/cep/oc-insurance';
import { SERVER_URL } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpWrapperService } from '../http-wrapper.service';
import { OcInsuranceForm } from '../../model/cep/form/oc-insurance-from';

@Injectable()
export class OcInsuranceService {

  constructor(private http: HttpWrapperService) { }

  getAll(): Observable<OcInsurance[]>{
    return this.http.get<OcInsurance[]>(SERVER_URL + "/ocInsurance")
  }

  delete(oc: OcInsurance): Observable<OcInsurance> {
    return this.http.delete(SERVER_URL + "/ocInsurance/" + oc.id);
  }

  save(oc: OcInsuranceForm): Observable<OcInsurance> {
    let body = JSON.stringify(oc);
    return this.http.post(SERVER_URL + "/ocInsurance", body);
  }

}
