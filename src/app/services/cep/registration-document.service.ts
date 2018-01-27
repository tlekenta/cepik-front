import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../http-wrapper.service';
import { Observable } from 'rxjs/Observable';
import { RegistrationDocument } from '../../model/cep/registration-document';
import { SERVER_URL } from '../../../environments/environment';
import { RegistrationDocumentForm } from '../../model/cep/form/registration-document-form';

@Injectable()
export class RegistrationDocumentService {

  constructor(private http: HttpWrapperService) { }

  getAll(): Observable<RegistrationDocument[]> {
    return this.http.get<RegistrationDocument[]>(SERVER_URL + "/registrationDocument")
  }

  getById(id: number): Observable<RegistrationDocument> {
    return this.http.get<RegistrationDocument>(SERVER_URL + "/registrationDocument/" + id);
  }

  save(document: RegistrationDocumentForm): Observable<RegistrationDocument> {
    let body = JSON.stringify(document);
    return this.http.post<RegistrationDocument>(SERVER_URL + "/registrationDocument", body);
  }

  update(id: number, document: RegistrationDocumentForm): Observable<RegistrationDocument> {
    let body = JSON.stringify(document);
    return this.http.put<RegistrationDocument>(SERVER_URL + "/registrationDocument/" + id, body);
  }

}
