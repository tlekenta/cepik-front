import { Injectable } from '@angular/core';
import { OcInsurance } from '../../model/cep/oc-insurance';
import { SERVER_URL } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpWrapperService } from '../http-wrapper.service';

@Injectable()
export class OcInsuranceService {

  constructor(private http: HttpWrapperService) { }

  getAll(): Observable<OcInsurance[]>{
    return this.http.get<OcInsurance[]>(SERVER_URL + "/ocInsurance")
  }

}
