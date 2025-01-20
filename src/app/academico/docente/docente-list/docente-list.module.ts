import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsListComponent } from './docente-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DocenteListRoutingModule } from './docente-list-routing.module';


@NgModule({
  declarations: [
    DoctorsListComponent
  ],
  imports: [
    CommonModule,
    DocenteListRoutingModule,
    SharedModule
  ]
})
export class DocenteListModule { }
