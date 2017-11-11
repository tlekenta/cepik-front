import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent} from './layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VehiclePageComponent} from './pages/vehicle-page/vehicle-page.component';
<<<<<<< HEAD
import {AuthGuardService} from '../services/auth-guard.service';
=======
import { VehicleaddPageComponent } from './pages/vehicle-page/vehicleadd-page/vehicleadd-page.component';
import { VehicleremovePageComponent } from './pages/vehicle-page/vehicleremove-page/vehicleremove-page.component';

>>>>>>> DodaniePodKategorii

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'vehicle', component: VehiclePageComponent },
<<<<<<< HEAD
      { path: '', component: DashboardComponent }
    ],
    canActivate: [AuthGuardService]
=======
      { path: 'vehicleadd', component: VehicleaddPageComponent },
      { path: 'vehicleremove', component: VehicleremovePageComponent }
    ]
>>>>>>> DodaniePodKategorii
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
