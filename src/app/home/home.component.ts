import { Component } from '@angular/core';
import { routes } from '../shared/routes/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


    public routes = routes;

}
