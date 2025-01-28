import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-add-semestres',
  templateUrl: './add-semestres.component.html',
  styleUrls: ['./add-semestres.component.scss']
})
export class AddSemestresComponent {
  public routes = routes;
}
