import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { EstudianteDashboardComponent } from './estudiante-dashboard.component';
import { EstudianteDashboardRoutingModule } from './estudiante-dashboard-routing.module';


@NgModule({
  declarations: [
    EstudianteDashboardComponent
  ],
  imports: [
    CommonModule,
    EstudianteDashboardRoutingModule,
    SharedModule,
  ]
})
export class EstudianteDashboardModule { }
