import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../http-wrapper.service';
import { Observable } from 'rxjs/Observable';
import { PenaltyPoints } from '../../model/cek/penalty-points';
import { SERVER_URL } from '../../../environments/environment';
import { PenaltyPointsForm } from '../../model/cek/form/penalty-points-form';

@Injectable()
export class PenaltyPointsService {

  constructor(private http: HttpWrapperService) { }

  getAll(): Observable<PenaltyPoints[]> {
    return this.http.get(SERVER_URL + "/penaltyPoints");
  }

  save(form: PenaltyPointsForm): Observable<PenaltyPoints> {
    let body = JSON.stringify(form);
    return this.http.post(SERVER_URL + "/penaltyPoints", body);
  }

}
