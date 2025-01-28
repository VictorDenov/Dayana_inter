import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSemestresComponent } from './edit-semestres.component';

const routes: Routes = [{ path: '', component: EditSemestresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSemestresRoutingModule { }
