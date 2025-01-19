import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicoComponent } from './academico.component';

const routes: Routes = [
  {
    path: '',
    component: AcademicoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../academico/home/home.module').then((m) => m.HomeModule),
      },
     
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicoRoutingModule { }
