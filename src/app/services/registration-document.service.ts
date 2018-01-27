import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';
import { Observable } from 'rxjs/Observable';
import { RegistrationDocument } from '../model/registration-document/registration-document';
import { SERVER_URL } from '../../environments/environment';

@Injectable()
export class RegistrationDocumentService {

  constructor(private http: HttpWrapperService) { }

  getAll(): Observable<RegistrationDocument[]>{
    return this.http.get<RegistrationDocument[]>(SERVER_URL + "/registrationDocument")
  }

}
