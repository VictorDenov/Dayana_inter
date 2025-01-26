import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { TokenService } from 'src/app/authentication/services/token.service';
import { routes } from 'src/app/shared/routes/routes';
import { SideBarService } from 'src/app/shared/side-bar/side-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})


export class HeaderComponent implements OnInit {
  public routes = routes;
  public openBox = false;
  public miniSidebar = false;
  public addClass = false;
  userName: string | null = '';
  userRole: string | null = '';

  constructor(
    public router: Router,
    private sideBar: SideBarService,
    public tokenService: TokenService
  ) {
    this.sideBar.toggleSideBar.subscribe((res: string) => {
      this.miniSidebar = res === 'true';
    });
  }

  ngOnInit(): void {
    this.getUserInfo(); // Obtener la información del usuario desde el token
  }

  // Obtener el nombre y rol del usuario desde el token
  private getUserInfo(): void {
    const token = this.tokenService.getToken(); // Obtenemos el token almacenado
    if (token) {
      const decodedToken: any = this.tokenService.decodeToken(); // Decodificamos el token
      
      // Asignamos el nombre según el rol del usuario
      if (decodedToken?.roles && decodedToken?.roles.length > 0) {
        const role = decodedToken.roles[0]; // Tomamos el primer rol

        // Asignamos el nombre según el rol
        if (role === 'admin') {
          this.userName = decodedToken?.nombreUsuario || 'Administrador';
        } else if (role === 'docente') {
          this.userName = decodedToken?.nombreDocente || 'Docente';
        } else if (role === 'estudiante') {
          this.userName = decodedToken?.nombreestudiante || 'Estudiante';
        }

        // Asignamos el rol
        this.userRole = role;
      } else {
        this.userName = 'Usuario';
        this.userRole = 'Desconocido';
      }
    }
  }

  openBoxFunc() {
    this.openBox = !this.openBox;
    const mainWrapper = document.getElementsByClassName('main-wrapper')[0];
    if (this.openBox) {
      mainWrapper.classList.add('open-msg-box');
    } else {
      mainWrapper.classList.remove('open-msg-box');
    }
  }

  public toggleSideBar(): void {
    this.sideBar.switchSideMenuPosition();
  }

  public toggleMobileSideBar(): void {
    this.sideBar.switchMobileSideBarPosition();

    this.addClass = !this.addClass;
    const root = document.getElementsByTagName('html')[0];
    const sidebar: any = document.getElementById('sidebar');

    if (this.addClass) {
      root.classList.add('menu-opened');
      sidebar.classList.add('opened');
    } else {
      root.classList.remove('menu-opened');
      sidebar.classList.remove('opened');
    }
  }
}
