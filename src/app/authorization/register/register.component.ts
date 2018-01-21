import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passwordRequiments = '- minimalna liczba znaków: 6\n- jedna wielka litera';
  user = {login: '', email: '', password: '', password_repeat: ''};
  error = false;
  errorDescription = '';

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  register(){
    if(this.user.password !== this.user.password_repeat){
      this.error = true;
      this.errorDescription = 'Hasła muszą być takie same';
      return;
    }

    if(!this.checkPasswordStrength(this.user.password)){
      this.error = true;
      this.errorDescription = 'Hasło jest zbyt słabe. Wymagania do hasła:\n' + this.passwordRequiments;
      return;
    }

    this.userService.register(this.user.login, this.user.email, this.user.password)
      .then(resp => {
        if(resp.success){
          this.router.navigate(['/login']);
        } else {
          this.error = true;
          this.errorDescription = resp.desc;
        }
      })
  }

  checkPasswordStrength(password: String): boolean{
    return true;
  }

}

//TODO: to jest tylko zarys komponentu, trzeba poprawić walidację błędów i dodać komunikat o sukcesie
