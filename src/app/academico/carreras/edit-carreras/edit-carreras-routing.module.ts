import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCarreraComponent } from './edit-carreras.component';

const routes: Routes = [{ path: '', component: EditCarreraComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCarreraRoutingModule { }
