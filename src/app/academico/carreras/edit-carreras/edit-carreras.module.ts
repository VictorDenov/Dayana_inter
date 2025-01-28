import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { EditCarreraComponent } from './edit-carreras.component';
import { EditCarreraRoutingModule } from './edit-carreras-routing.module';


@NgModule({
  declarations: [
    EditCarreraComponent
  ],
  imports: [
    CommonModule,
    EditCarreraRoutingModule,
    SharedModule
  ]
})
export class EditCarrerasModule { }
