import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDocenteComponent } from './add-docente.component';

const routes: Routes = [{ path: '', component:  AddDocenteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDocenteRoutingModule { }
