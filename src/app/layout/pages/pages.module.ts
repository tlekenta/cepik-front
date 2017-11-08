import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageComponent } from './blank-page/blank-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehiclePageComponent } from './vehicle-page/vehicle-page.component';

const components = [BlankPageComponent, DashboardComponent, VehiclePageComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components
})
export class PagesModule { }
