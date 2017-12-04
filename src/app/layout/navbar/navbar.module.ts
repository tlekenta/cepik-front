import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component'
import { UserPanelComponent } from './user-panel/user-panel.component'

const components = [NavbarComponent, UserPanelComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components
})
export class NavbarModule { }
