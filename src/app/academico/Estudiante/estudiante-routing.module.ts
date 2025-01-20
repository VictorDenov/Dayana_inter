import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './estudiante.component';

const routes: Routes = [
  { path: '', component: EstudiantesComponent,
  children: [
    {
      path: 'patients-list',
      loadChildren: () =>
        import('./estudiante-list/estudiante-list.module').then(
          (m) => m.PatientsListModule
        ),
    },
    {
      path: 'add-patient',
      loadChildren: () =>
        import('./add-estudiante/add-estudiante.module').then(
          (m) => m.AddEstudiantetModule
        ),
    },
    {
      path: 'edit-patient',
      loadChildren: () =>
        import('./edit-estudiante/edit-patient.module').then(
          (m) => m.EditEstudiantetModule
        ),
    },
    {
      path: 'patient-profile',
      loadChildren: () =>
        import('./estudiante-profile/estudiante-profile.module').then(
          (m) => m.EstudianteProfileModule
        ),
    },
    {
      path: 'patient-setting',
      loadChildren: () =>
        import('./estudiante-setting/estudiante-setting.module').then(
          (m) => m.EstudianteSettingModule
        ),
    },
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudianteRoutingModule {}
