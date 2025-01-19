import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteDashboardComponent } from './estudiante-dashboard.component';

const routes: Routes = [{ path: '', component: EstudianteDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteDashboardRoutingModule { }
