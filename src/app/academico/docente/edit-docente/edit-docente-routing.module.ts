import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDocenteComponent } from './edit-docente.component';

const routes: Routes = [{ path: '', component: EditDocenteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDocenteRoutingModule { }
