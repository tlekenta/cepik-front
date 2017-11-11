import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { VehiclePageComponent } from './vehicle-page/vehicle-page.component';

const components = [DashboardComponent, VehiclePageComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components
})
export class PagesModule { }
