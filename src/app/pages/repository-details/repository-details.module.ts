import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryDetailsRoutingModule } from './repository-details-routing.module';
import { RepositoryDetailsComponent } from './repository-details.component';


@NgModule({
  declarations: [
    RepositoryDetailsComponent
  ],
  imports: [
    CommonModule,
    RepositoryDetailsRoutingModule
  ]
})
export class RepositoryDetailsModule { }
