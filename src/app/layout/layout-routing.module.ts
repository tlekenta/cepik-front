import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent} from './layout.component';
import { BlankPageComponent } from './pages/blank-page/blank-page.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
  children: [
      { path: '', component: BlankPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
