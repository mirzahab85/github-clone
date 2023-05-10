import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListRoutingModule,
    DragDropModule
  ]
})
export class ListModule { }
