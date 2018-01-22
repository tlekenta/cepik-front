import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { VehiclePageComponent } from './vehicle-page/vehicle-page.component';
import { VehicleaddPageComponent } from './vehicle-page/vehicleadd-page/vehicleadd-page.component';
import { VehicleremovePageComponent } from './vehicle-page/vehicleremove-page/vehicleremove-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from '../dynamic-form/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';

const components = [
  DashboardComponent,
  VehiclePageComponent,
  VehicleremovePageComponent,
  VehicleaddPageComponent,
  DynamicFormComponent,
  DynamicFormQuestionComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: components,
  exports: components
})
export class PagesModule { }
