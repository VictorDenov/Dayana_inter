import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAtencionesComponent } from './edit-atenciones.component';

const routes: Routes = [{ path: '', component: EditAtencionesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditAtencionesRoutingModule { }
