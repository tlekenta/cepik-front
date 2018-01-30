import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../http-wrapper.service';
import { CarOwner } from '../../model/cep/car-owner';
import { Observable } from 'rxjs/Observable';
import { SERVER_URL } from '../../../environments/environment';

@Injectable()
export class CarOwnerService {

  constructor(private http: HttpWrapperService) { }

  getAll(): Observable<CarOwner[]>{
    return this.http.get<CarOwner[]>(SERVER_URL + "/carOwner");
  }

}
