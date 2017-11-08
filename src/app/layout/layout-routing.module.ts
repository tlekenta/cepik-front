import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent} from './layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VehiclePageComponent} from './pages/vehicle-page/vehicle-page.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'vehicle', component: VehiclePageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
