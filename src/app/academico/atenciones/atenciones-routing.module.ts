import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtencionesComponent } from './atenciones.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtencionesRoutingModule { }
