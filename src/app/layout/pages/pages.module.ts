import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { VehiclePageComponent } from './vehicle-page/vehicle-page.component';
import { VehicleaddPageComponent } from './vehicle-page/vehicleadd-page/vehicleadd-page.component';
import { VehicleremovePageComponent } from './vehicle-page/vehicleremove-page/vehicleremove-page.component';
import { FormsModule } from '@angular/forms';
import { VehicleDetailsComponent } from './vehicle-page/vehicle-details/vehicle-details.component';
import { AddRegistrationDocumentComponent } from './vehicle-page/vehicle-details/add-registration-document/add-registration-document.component';
import { EditRegistrationDocumentComponent } from './vehicle-page/vehicle-details/edit-registration-document/edit-registration-document.component';
import { UpdateServiceDateComponent } from './vehicle-page/vehicle-details/update-service-date/update-service-date.component';
import { UpdateRegisterNumberComponent } from './vehicle-page/vehicle-details/update-register-number/update-register-number.component';
import { AddOcInsuranceComponent } from './vehicle-page/vehicle-details/add-oc-insurance/add-oc-insurance.component';
import { DriverPageComponent } from './driver-page/driver-page.component';
import { DriverAddComponent } from './driver-page/driver-add/driver-add.component';
import { DriverDetailsComponent } from './driver-page/driver-details/driver-details.component';

const components = [
  DashboardComponent,
  VehiclePageComponent,
  VehicleremovePageComponent,
  VehicleaddPageComponent,
  VehicleDetailsComponent,
  AddRegistrationDocumentComponent,
  EditRegistrationDocumentComponent,
  UpdateServiceDateComponent,
  UpdateRegisterNumberComponent,
  AddOcInsuranceComponent,
  DriverPageComponent,
  DriverAddComponent,
  DriverDetailsComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: components,
  exports: components
})
export class PagesModule { }
