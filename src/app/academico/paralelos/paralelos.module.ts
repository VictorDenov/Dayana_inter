import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParalelosListRoutingModule } from './paralelos-list/paralelos-list-routing.module';
import { ParalelosComponent } from './paralelos.component';


@NgModule({
  declarations: [
    ParalelosComponent
  ],
  imports: [
    CommonModule,
    ParalelosListRoutingModule
  ]
})
export class ParalelosModule { }
