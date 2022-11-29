import { MatIconRegistry } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AboutModule } from "../about/about.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


@NgModule({
    declarations: [
        TableComponent
    ],
    exports: [
        TableComponent
    ],
    imports: [
        CommonModule,
        TableRoutingModule,
        MatIconModule,
        MatTableModule,
        AboutModule,
        FontAwesomeModule,

    ]
})
export class TableModule {
  constructor(matIconRegistry: MatIconRegistry)
  {matIconRegistry.registerFontClassAlias('fontawesome', 'fa');}
}
