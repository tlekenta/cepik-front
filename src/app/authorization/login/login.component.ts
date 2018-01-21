import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {login: '', password: ''};
  error = false;
  errorDescription = '';

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.user.login, this.user.password)
        .then(resp => {
          if (resp.success) {
            this.router.navigate(['/']);
          } else {
            this.error = true;
            this.errorDescription = resp.desc;
          }
        });
  }

}
