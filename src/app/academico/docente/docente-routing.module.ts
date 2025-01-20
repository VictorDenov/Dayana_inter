import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocenteComponent } from './docente.component';


const routes: Routes = [
  { path: '', component: DocenteComponent,
  children: [
    {
      path: 'docente-list',
      loadChildren: () =>
        import('./docente-list/docente-list.module').then(
          (m) => m.DocenteListModule
        ),
    },
    {
      path: 'add-docente',
      loadChildren: () =>
        import('./add-docente/add-docente.module').then((m) => m.AddDocenteModule),
    },
    {
      path: 'edit-docente',
      loadChildren: () =>
        import('./edit-docente/edit-docente.module').then(
          (m) => m.EditDocenteModule
        ),
    },
    {
      path: 'docente-profile',
      loadChildren: () =>
        import('./docente-profile/docente-profile.module').then(
          (m) => m.DocenteProfileModule
        ),
    },
    {
      path: 'doctor-setting',
      loadChildren: () =>
        import('./docente-setting/docente-setting.module').then(
          (m) => m.DocenteSettingModule
        ),
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocenteRoutingModule {}
