import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { VehiclePageComponent } from './vehicle-page/vehicle-page.component';
import { VehicleaddPageComponent } from './vehicle-page/vehicleadd-page/vehicleadd-page.component';
import { VehicleremovePageComponent } from './vehicle-page/vehicleremove-page/vehicleremove-page.component';
import { FormsModule } from '@angular/forms';

const components = [DashboardComponent, VehiclePageComponent, VehicleremovePageComponent, VehicleaddPageComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: components,
  exports: components
})
export class PagesModule { }
