import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParalelosComponent } from './paralelos.component';

const routes: Routes = [
  { path: '', component: ParalelosComponent,
  children: [
    {
      path: 'paralelos-list',
      loadChildren: () =>
        import('./paralelos-list/paralelos-list.module').then(
          (m) => m.ParaelosListModule
        ),
    },
    {
      path: 'add-paralelos',
      loadChildren: () =>
        import('./add-paralelos/add-paralelos.module').then(
          (m) => m.AddParalelosModule
        ),
    },
    {
      path: 'edit-paralelos',
      loadChildren: () =>
        import('./edit-paralelos/edit-paralelos.module').then(
          (m) => m.EditParalelosModule
        ),
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParalelosRoutingModule {}
