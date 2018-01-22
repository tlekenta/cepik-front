import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { TOKEN_HEADER, SERVER_URL } from '../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: HttpClient,
              private router: Router) { }

  login(login: String, password: String): Promise<{success: boolean, desc: string}> {
      return this.http.post(SERVER_URL + '/login', JSON.stringify({name: login, password: password}))
          .toPromise()
          .then(resp => {
              if (resp.hasOwnProperty(TOKEN_HEADER)) {
                  sessionStorage.setItem(TOKEN_HEADER, (resp as any)[TOKEN_HEADER]);
                  return {success: true, desc: ''};
              } else {
                  return {success: false, desc: 'Błąd serwera.'};
              }
          })
          .catch(error => {
              let description: string;
              description = (error.status === 401) ?
                  'Niepoprawny login lub hasło.' : 'Nieznany błąd podczas logowania (serwer nieosiągalny).';
              return {success: false, desc: description};
          });
  }

  register(login: String, email: String, password: String): Promise<{success: boolean, desc: string}> {
    let h = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(SERVER_URL + '/users/registration', JSON.stringify({name: login, password: password, email: email}), {headers: h})
    .toPromise()
    .then(resp => {
        if (resp.hasOwnProperty('name')) {
            sessionStorage.setItem(TOKEN_HEADER, (resp as any)[TOKEN_HEADER]);
            return {success: true, desc: (resp as any)['name']};
        } else {
            return {success: false, desc: 'Błąd serwera.'};
        }
    })
    .catch(error => {
        console.log(error);
        let description: string;
        description = 'Nieznany błąd podczas rejestracji (serwer nieosiągalny).';
        return {success: false, desc: description};
    });
  }

  logout() {
        sessionStorage.removeItem(TOKEN_HEADER);
        this.router.navigate(['/login']);
  }

}
