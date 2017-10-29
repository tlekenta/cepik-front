import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './authorization/login/login.component';

const routes: Routes = [
  { path: 'home', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuardService] },
  { path: 'auth', loadChildren: './authorization/authorization.module#AuthorizationModule' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
