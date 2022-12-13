import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasBasicasComponent } from './listas-basicas/listas-basicas.component';



@NgModule({
  declarations: [
    ListasBasicasComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListasBasicasComponent,
  ]
})
export class ListasModule { }
