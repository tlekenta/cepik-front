import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { AuthGuardService } from './services/auth-guard.service';
import { AngularFontAwesomeModule} from 'angular-font-awesome/angular-font-awesome'
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelper } from 'angular2-jwt';
import { HttpWrapperService } from './services/http-wrapper.service';
import { VehicleService } from './services/cep/vehicle.service';
import { RegistrationDocumentService } from './services/cep/registration-document.service';
import { RegistrationNumberService } from './services/cep/registration-number.service';
import { OcInsuranceService } from './services/cep/oc-insurance.service';
import { DriverService } from './services/cek/driver.service';
import { DrivingLicenceService } from './services/cek/driving-licence.service';
import { DriverAuthorisationService } from './services/cek/driver-authorisation.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AuthorizationModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardService,
    UserService,
    JwtHelper,
    HttpWrapperService,
    VehicleService,
    RegistrationDocumentService,
    RegistrationNumberService,
    OcInsuranceService,
    DriverService,
    DrivingLicenceService,
    DriverAuthorisationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
