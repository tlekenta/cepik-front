import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authorization/login/login.component';

const routes: Routes = [
  { path: 'auth', loadChildren: './authorization/authorization.module#AuthorizationModule' },
  { path: '**', component: LoginComponent },
  { path: '', loadChildren: './layout/layout.module#LayoutModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
