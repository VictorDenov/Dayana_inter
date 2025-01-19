import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardDocenteComponent } from './docente-dashboard.component';
import { EstudianteDashboardRoutingModule } from './docente-dashboard-routing.module';


@NgModule({
  declarations: 
  [
    DashboardDocenteComponent
  ],
  imports: [
    CommonModule,
    EstudianteDashboardRoutingModule,
    SharedModule
  ]
})
export class DoctorDashboardModule { }
