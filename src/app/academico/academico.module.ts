import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from '../common-component/header/header.component';
import { SidebarComponent } from '../common-component/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { AcademicoRoutingModule } from './academico-routing.module';
import { AcademicoComponent } from './academico.component';
import { ModalComponent } from './modal/modal.component';
import { AtencionesComponent } from './atenciones/atenciones.component';


@NgModule({
  declarations: [
    AcademicoComponent,
    HeaderComponent,
    SidebarComponent,
    ModalComponent,
    AtencionesComponent
  ],
  imports: [
    CommonModule,
    AcademicoRoutingModule,
    SharedModule,
  ]
})
export class AcademicoModule { }
