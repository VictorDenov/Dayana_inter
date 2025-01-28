import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< Updated upstream

import { AtencionesRoutingModule } from './atenciones-routing.module';




@NgModule({
  declarations: [

=======
import { AtencionesComponent } from './atenciones.component';
import { AtencionesRoutingModule } from './atenciones-routing.module';


@NgModule({
  declarations: [
    AtencionesComponent
>>>>>>> Stashed changes
  ],
  imports: [
    CommonModule,
    AtencionesRoutingModule
  ]
})
export class AtencionesModule { }
