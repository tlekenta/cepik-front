import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LayoutComponent } from './layout.component';
import { PagesModule } from './pages/pages.module';

const components = [SideMenuComponent, LayoutComponent];

@NgModule({
  imports: [
    CommonModule,
    PagesModule,
    LayoutRoutingModule
  ],
  declarations: components,
  exports: components
})
export class LayoutModule { }
