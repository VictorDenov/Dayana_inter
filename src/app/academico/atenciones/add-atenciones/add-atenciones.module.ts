import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { AddAtencionesRoutingModule } from './add-atenciones-routing.module';
import { AddAtencionesmentComponent } from './add-atenciones.component';


@NgModule({
  declarations: [
    AddAtencionesmentComponent
  ],
  imports: [
    CommonModule,
    AddAtencionesRoutingModule,
    SharedModule
  ]
})
export class AddAtencionesModule { }
