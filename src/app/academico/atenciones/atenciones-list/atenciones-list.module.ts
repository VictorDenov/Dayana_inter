import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AtencionesListComponent } from './atenciones-list.component';
import { AtencionesListRoutingModule } from './atenciones-list-routing.module';


@NgModule({
  declarations: [
    AtencionesListComponent
  ],
  imports: [
    CommonModule,
    AtencionesListRoutingModule,
    SharedModule
  ]
})
export class AtencionesListModule { }
