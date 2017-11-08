import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout.component';
import { PagesModule } from './pages/pages.module';

const components = [SidebarComponent, NavbarComponent, LayoutComponent];

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
