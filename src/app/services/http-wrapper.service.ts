import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TOKEN_HEADER } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpWrapperService {

  constructor(private httpClient: HttpClient) { }

  public get<T>(URL: string):  Observable<Object> {
    let h = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': sessionStorage.getItem(TOKEN_HEADER)});
    return this.httpClient.get<T>(URL, {headers: h});
  }

  post<T>(URL: string, body: string):  Observable<Object> {
    let h = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': sessionStorage.getItem(TOKEN_HEADER)});
    return this.httpClient.post<T>(URL, body,{headers: h});
  }

  public delete(URL: string):  Observable<Object> {
    let h = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': sessionStorage.getItem(TOKEN_HEADER)});
    return this.httpClient.delete(URL, {headers: h});
  }

}
