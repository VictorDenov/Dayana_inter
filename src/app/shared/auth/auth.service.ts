import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';
import { routes } from '../routes/routes';
import { environment } from './../../../environments/environment.development';
import { LoginUsuarioDto } from '../models/login-usuario.dto';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginDocenteDto } from '../models/login-docente.dto';
import { LoginEstudianteDto } from '../models/login-estudiante.dto';
import { TokenService } from 'src/app/authentication/services/token.service';
import { TokenDto } from 'src/app/models/token.dto';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user:any;
  token:any;
  
  private apiUrl = environment.Servicios // Cambia la URL al endpoint correcto
  httpClient: any;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) {
  
  }


 

  // Login para Admin
  loginUsuario(loginDto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login/admin`, loginDto).pipe(
      catchError(error => this.handleError(error))
    );
  }

  // Login para Docente
  loginDocente(loginDto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login/docente`, loginDto).pipe(
      catchError(error => this.handleError(error))
    );
  }

  // Login para Estudiante
  loginEstudiante(loginDto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login/estudiante`, loginDto).pipe(
      catchError(error => this.handleError(error))
    );
  }

  // Manejo de errores (puedes personalizar el manejo de errores según tus necesidades)
  private handleError(error: any): Observable<any> {
    console.error('Error en la autenticación:', error);
    throw error; // Puedes ajustar este manejo de error según tus necesidades
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.tokenService.isLogged();
  }

  // Logout
  logout(): void {
    this.tokenService.logOut();
    this.router.navigate(['/login']); // Redirige al login
  }


  refresh(dto: TokenDto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/refresh`, dto).pipe(
      catchError(error => this.handleError(error))
    );
  }
}
