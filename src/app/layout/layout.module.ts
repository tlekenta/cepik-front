import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout.component';
import { PagesModule } from './pages/pages.module';
import { NavbarModule } from './navbar/navbar.module';

const components = [SidebarComponent, LayoutComponent];

@NgModule({
  imports: [
    CommonModule,
    PagesModule,
    LayoutRoutingModule,
    NavbarModule
  ],
  declarations: components,
  exports: components
})
export class LayoutModule { }
