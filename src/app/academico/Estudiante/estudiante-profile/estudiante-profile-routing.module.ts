import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteProfileComponent } from './estudiante-profile.component';

const routes: Routes = [
  { path: '', component: EstudianteProfileComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudianteProfileRoutingModule {}
