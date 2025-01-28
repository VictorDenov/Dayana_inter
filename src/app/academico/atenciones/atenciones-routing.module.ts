import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtencionesComponent } from './atenciones.component';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { AddAtencionesComponent } from './add-atenciones/add-atenciones.component';
import { ListarAtencionesComponent } from './listar-atenciones/listar-atenciones.component';

const routes: Routes = [

    {
      path:'',
      component: AtencionesComponent,
      children: [
        {
          path: 'agregar',
          component: AddAtencionesComponent
        },
        {
          path: 'listar',
          component: ListarAtencionesComponent
        },
      ]
    }
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  exports: [RouterModule]
})
export class AtencionesRoutingModule { }
=======
  exports: [RouterModule],
})
export class AtencionesRoutingModule {}
>>>>>>> Stashed changes
=======
  exports: [RouterModule],
})
export class AtencionesRoutingModule {}
>>>>>>> Stashed changes
=======
  exports: [RouterModule],
})
export class AtencionesRoutingModule {}
>>>>>>> Stashed changes
