import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout.component';
import { PagesModule } from './pages/pages.module';
import { NavbarComponent } from './navbar/navbar.component';
import { UserPanelComponent } from './navbar/user-panel/user-panel.component';

const components = [SidebarComponent, LayoutComponent, NavbarComponent, UserPanelComponent];

@NgModule({
  imports: [
    CommonModule,
    PagesModule,
    LayoutRoutingModule,
  ],
  declarations: components,
  exports: components
})
export class LayoutModule { }
