import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-docente-profile',
  templateUrl: './docente-profile.component.html',
  styleUrls: ['./docente-profile.component.scss']
})
export class DocenteProfileComponent {
  public routes = routes;
}
