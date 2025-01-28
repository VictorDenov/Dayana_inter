import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-edit-semestres',
  templateUrl: './edit-semestres.component.html',
  styleUrls: ['./edit-semestres.component.scss']
})
export class EditSemestresComponent {
  public routes = routes;
}
