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

const components = [
  DashboardComponent,
  VehiclePageComponent,
  VehicleremovePageComponent,
  VehicleaddPageComponent,
  VehicleDetailsComponent,
  AddRegistrationDocumentComponent,
  EditRegistrationDocumentComponent,
  UpdateServiceDateComponent,
  UpdateRegisterNumberComponent
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
