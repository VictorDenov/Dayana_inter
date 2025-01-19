import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [

  
  {
    
     path: '', component: DashboardComponent,

  children: [
    {
      path: '',
      redirectTo:'admin-dashboard',
      pathMatch:'full'
    },
    {
      path: 'admin-dashboard',
      loadChildren: () =>
        import('./admin-dashboard/admin-dashboard.module').then(
          (m) => m.AdminDashboardModule
        ),
    },
    {
      path: 'doctor-dashboard',
      loadChildren: () =>
        import('./docente-dashboard/docente-dashboard.module').then(
          (m) => m.DoctorDashboardModule
        ),
    },
    {
      path: 'patient-dashboard',
      loadChildren: () =>
        import('./Estudiante-dashboard/estudiante-dashboard.module').then(
          (m) => m.EstudianteDashboardModule
        ),
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
