import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  passwordRequirements = '\t- minimalna liczba znaków: 6\n\t- jedna wielka litera';
  user = {login: '', email: '', password: '', password_repeat: ''};
  error = false;
  success = false;
  errorDescription = '';
  successDescription = 'Poprawnie założono konto. Zaraz nastąpi przekierowanie do strony logowania.';

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  register(){
    if(this.user.password !== this.user.password_repeat){
      this.error = true;
      this.errorDescription = 'Hasła muszą być takie same';
    }

    if(!this.checkPasswordStrength(this.user.password)){
      this.error = true;
      if(this.errorDescription !== '') this.errorDescription += '\n';
      this.errorDescription += 'Hasło jest zbyt słabe. Wymagania do hasła:\n' + this.passwordRequirements;
    }

    if(!this.error) {
      this.userService.register(this.user.login, this.user.email, this.user.password)
          .then(resp => {
            if (resp.success) {
              this.success = true;
              setTimeout(() => {this.router.navigate(['/login'])}, 3*1000);
            } else {
              this.error = true;
              this.errorDescription = resp.desc;
            }
          })
    }
  }

  checkPasswordStrength(password: String): boolean{
    return true;
  }

}

//TODO: to jest tylko zarys komponentu, trzeba poprawić walidację błędów i dodać komunikat o sukcesie
