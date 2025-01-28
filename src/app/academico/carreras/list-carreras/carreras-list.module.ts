import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrerasListComponent } from './carreras-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditCarreraRoutingModule } from '../edit-carreras/edit-carreras-routing.module';
import { CarrerasListRoutingModule } from './carreras-list-routing.module';


@NgModule({
  declarations: [
    CarrerasListComponent
  ],
  imports: [
    CommonModule,
    CarrerasListRoutingModule,
    SharedModule
  ]
})
export class CarrerasListModule { }
