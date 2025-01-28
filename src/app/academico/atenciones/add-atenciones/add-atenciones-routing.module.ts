import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAtencionesmentComponent } from './add-atenciones.component';

const routes: Routes = [{ path: '', component: AddAtencionesmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddAtencionesRoutingModule { }
