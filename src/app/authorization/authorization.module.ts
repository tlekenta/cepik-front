import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

const components = [LoginComponent, RegisterComponent];

@NgModule({
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    FormsModule
  ],
  declarations: components,
  exports: components
})
export class AuthorizationModule { }
