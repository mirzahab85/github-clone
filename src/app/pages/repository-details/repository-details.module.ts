
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryDetailsComponent } from './repository-details.component';
import { RepositoryDetailsRoutingModule } from './repository-details-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { AboutModule } from 'src/app/modules/about/about.module';


@NgModule({
  declarations: [
    RepositoryDetailsComponent,
  ],

    imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    MatTableModule,
    AboutModule,
    RepositoryDetailsRoutingModule,
  ]
})
export class RepositoryDetailsModule {

}
