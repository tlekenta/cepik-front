import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../http-wrapper.service';
import { Observable } from 'rxjs/Observable';
import { PenaltyPoints } from '../../model/cek/penalty-points';
import { SERVER_URL } from '../../../environments/environment';

@Injectable()
export class PenaltyPointsService {

  constructor(private http: HttpWrapperService) { }

  getAll(): Observable<PenaltyPoints[]> {
    return this.http.get(SERVER_URL + "/penaltyPoints");
  }

}
