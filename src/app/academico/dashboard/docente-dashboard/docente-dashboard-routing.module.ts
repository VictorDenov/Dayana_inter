import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardDocenteComponent } from './docente-dashboard.component';

const routes: Routes = [{ path: '', component: DashboardDocenteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteDashboardRoutingModule { }
