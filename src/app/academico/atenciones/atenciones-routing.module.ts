import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtencionesComponent } from './atenciones.component';
import { ListarAtencionesComponent } from './listar-atenciones/listar-atenciones.component';


const routes: Routes = [
  { path: '', component: AtencionesComponent,
  children: [
    {
      path: 'atenciones-list',
      loadChildren: () =>
        import('./atenciones-list/atenciones-list.module').then(
          (m) => m.AtencionesListModule
        ),
    },
    {
      path: 'add-atenciones',
      loadChildren: () =>
        import('./add-atenciones/add-atenciones.module').then(
          (m) => m.AddAtencionesModule
        ),
    },
    {
      path: 'edit-atenciones',
      loadChildren: () =>
        import('./edit-atenciones/edit-atenciones.module').then(
          (m) => m.EditAtencionestModule
        ),
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtencionesRoutingModule { }
