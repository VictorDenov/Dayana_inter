import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ParalelosListRoutingModule } from './paralelos-list-routing.module';
import { ParalelosListComponent } from './paralelos-list.component';


@NgModule({
  declarations: [
    ParalelosListComponent
  ],
  imports: [
    CommonModule,
    ParalelosListRoutingModule,
    SharedModule
  ]
})
export class ParaelosListModule { }
