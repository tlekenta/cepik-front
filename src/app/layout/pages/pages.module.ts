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
import { BrandFilterPipe } from '../../pipes/cep/brand-filter.pipe';
import { ModelFilterPipe } from '../../pipes/cep/model-filter.pipe';
import { FromToPipe } from '../../pipes/from-to.pipe';
import { TextFilterPipe } from '../../pipes/text-filter.pipe';
import { DeleteAuthorisationComponent } from './driver-page/driver-details/delete-authorisation/delete-authorisation.component';
import { AddAuthorisationComponent } from './driver-page/driver-details/add-authorisation/add-authorisation.component';
import { AddPenaltyPointsComponent } from './driver-page/driver-details/add-penalty-points/add-penalty-points.component';

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
  DriverDetailsComponent,
  BrandFilterPipe,
  ModelFilterPipe,
  FromToPipe,
  TextFilterPipe,
  DeleteAuthorisationComponent,
  AddAuthorisationComponent,
  AddPenaltyPointsComponent
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
