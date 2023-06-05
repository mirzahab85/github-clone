import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormArrayRoutingModule } from './form-array-routing.module';
import { FormArrayComponent } from './form-array.component';


@NgModule({
  declarations: [
    FormArrayComponent
  ],
  imports: [
    CommonModule,
    FormArrayRoutingModule
  ]
})
export class FormArrayModule { }
