import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { routes } from 'src/app/shared/routes/routes';
import { TokenService } from '../services/token.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginDocenteDto } from 'src/app/shared/models/login-docente.dto';
import { LoginUsuarioDto } from 'src/app/shared/models/login-usuario.dto';
import { LoginEstudianteDto } from 'src/app/shared/models/login-estudiante.dto';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public routes = routes;
  public passwordClass = false;
  public ERROR = false;
  public errorMessage = '';

  form = new FormGroup({
    email: new FormControl('admin1@gma', [Validators.required, Validators.email]),
    password: new FormControl('Diciembre06@', [Validators.required]),
  });

  selectedRole: 'admin' | 'docente' | 'estudiante' | null = null;

  get f() {
    return this.form.controls;
  }

  constructor(
    private auth: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('authenticated')) {
      this.router.navigate([routes.adminDashboard]);
    }
  }

  loginFormSubmit() {
    if (this.form.invalid || !this.selectedRole) {
      this.ERROR = true;
      this.errorMessage = 'Por favor, complete todos los campos y seleccione un rol.';
      return; // Si el formulario es inválido o el rol no está seleccionado, no hacemos nada
    }

    this.ERROR = false;
    this.errorMessage = ''; // Reseteamos el mensaje de error

    // Creamos el DTO correspondiente según el rol seleccionado
    const loginDto = this.createLoginDto();

    // Dependiendo del rol seleccionado, se hace la autenticación correspondiente
    this.authenticateByRole(loginDto);
  }

  private createLoginDto() {
    const email = this.form.value.email || '';
    const password = this.form.value.password || '';

    switch (this.selectedRole) {
      case 'admin':
        return { nombreUsuario: email, email, password };
      case 'docente':
        return { nombreDocente: email, emailDocente: email, password };
      case 'estudiante':
        return { nombreEstudiante: email, emailEstudiante: email, password };
      default:
        return {}; // Si no hay rol seleccionado, no retornamos nada
    }
  }

  private authenticateByRole(loginDto: any) {
    let loginObservable;

    switch (this.selectedRole) {
      case 'admin':
        loginObservable = this.auth.loginUsuario(loginDto);
        break;
      case 'docente':
        loginObservable = this.auth.loginDocente(loginDto);
        break;
      case 'estudiante':
        loginObservable = this.auth.loginEstudiante(loginDto);
        break;
      default:
        return; // Si no hay rol seleccionado, no hacemos nada
    }

    loginObservable.subscribe(
      (resp: any) => this.handleLoginResponse(resp),
      (error) => this.handleError(error)
    );
  }

  private handleLoginResponse(resp: any) {
    console.log(resp);
    if (resp && resp.token) {
      this.tokenService.setToken(resp.token);  // Guarda el token

      // Marca como autenticado
      localStorage.setItem('authenticated', 'true');

      // Redirige a la página correspondiente dependiendo del rol
      this.redirectUserBasedOnRole();
    } else {
      this.ERROR = true;
      this.errorMessage = 'Usuario o contraseña incorrectos'; // Muestra el mensaje de error desde el backend
    }
  }

  private redirectUserBasedOnRole() {
    setTimeout(() => {
      if (this.tokenService.isAdmin()) {
        this.router.navigate([routes.adminDashboard]);
      } else if (this.tokenService.isDocente()) {
        this.router.navigate([routes.doctorDashboard]);
      } else if (this.tokenService.isEstudiante()) {
        this.router.navigate([routes.estudianteDashboard]);
      }
    }, 50);
  }

  private handleError(error: any) {
    console.error(error);
    this.ERROR = true;
    this.errorMessage = error?.error?.message || 'Error desconocido'; // Maneja el mensaje de error del backend
  
  }
}