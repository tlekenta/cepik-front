import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageComponent } from './blank-page/blank-page.component';

const components = [BlankPageComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components
})
export class PagesModule { }
