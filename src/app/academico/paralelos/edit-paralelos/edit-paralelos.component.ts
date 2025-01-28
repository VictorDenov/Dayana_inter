import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-edit-paralelos',
  templateUrl: './edit-paralelos.component.html',
  styleUrls: ['./edit-paralelos.component.scss']
})
export class EditParalelosComponent {
  public routes = routes;
}
