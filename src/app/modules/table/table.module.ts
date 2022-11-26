import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { MatIconModule } from '@angular/material/icon';
import { AboutModule } from "../about/about.module";


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
        AboutModule
    ]
})
export class TableModule { }
