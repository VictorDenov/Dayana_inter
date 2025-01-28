import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemestresComponent } from './semestres.component';

const routes: Routes = [
  { path: '', component: SemestresComponent,
  children: [
    {
      path: 'semestres-list',
      loadChildren: () =>
        import('./semestres-list/semestres-list.module').then(
          (m) => m.SemestresmentListModule
        ),
    },
    {
      path: 'add-semestres',
      loadChildren: () =>
        import('./add-semestres/add-semestres.module').then(
          (m) => m.AddSemestrestModule
        ),
    },
    {
      path: 'edit-semestres',
      loadChildren: () =>
        import('./edit-semestres/edit-semestres.module').then(
          (m) => m.EditSemestresModule
        ),
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemestresRoutingModule {}
