import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { EditAtencionesComponent } from './edit-atenciones.component';
import { EditAtencionesRoutingModule } from './edit-atenciones-routing.module';


@NgModule({
  declarations: [
    EditAtencionesComponent
  ],
  imports: [
    CommonModule,
    EditAtencionesRoutingModule,
    SharedModule
  ]
})
export class EditAtencionestModule { }
