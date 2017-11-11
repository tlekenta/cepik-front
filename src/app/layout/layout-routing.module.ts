import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent} from './layout.component';
import { BlankPageComponent } from './pages/blank-page/blank-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VehiclePageComponent} from './pages/vehicle-page/vehicle-page.component';
import { VehicleaddPageComponent } from './pages/vehicle-page/vehicleadd-page/vehicleadd-page.component';
import { VehicleremovePageComponent } from './pages/vehicle-page/vehicleremove-page/vehicleremove-page.component';


const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: '', component: BlankPageComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'vehicle', component: VehiclePageComponent },
      { path: 'vehicleadd', component: VehicleaddPageComponent },
      { path: 'vehicleremove', component: VehicleremovePageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
