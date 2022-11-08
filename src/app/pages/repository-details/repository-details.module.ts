
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryDetailsRoutingModule } from './repository-details-routing.module';
import { RepositoryDetailsComponent } from './repository-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    RepositoryDetailsComponent,
  ],

    imports: [
    CommonModule,
    RepositoryDetailsRoutingModule,
    MatIconModule,
    FlexLayoutModule,
    MatTableModule,
    MatDividerModule,
  ]
})
export class RepositoryDetailsModule {

}
