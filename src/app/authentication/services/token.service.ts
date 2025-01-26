import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
    constructor() {}
  
    isLogged(): boolean {
      return !!this.getToken();
    }
  
    setToken(token: string): void {
      localStorage.setItem('token', token);
    }
  
    getToken(): string | null {
      return localStorage.getItem('token');
    }
  
    public decodeToken(): any {
      if (!this.isLogged()) {
        return null;
      }
      const token = this.getToken();
      console.log('Token:', token); // Imprime el token en la consola
      const payload = token?.split('.')[1];
      if (payload) {
        try {
          const values = atob(payload);
          console.log('Payload:', values); // Imprime el payload en la consola
          return JSON.parse(values);
        } catch (e) {
          console.error('Error decoding token:', e);
          return null;
        }
      }
      return null;
    }
  
    getNombreUsuario(): string | null {
      const valuesJson = this.decodeToken();
      return valuesJson?.nombreUsuario || null;
    }

    getNombreDocente(): string | null {
        const valuesJson = this.decodeToken();
        return valuesJson?.nombreDocente || null;
     
      }
  
      
      getNombreEstudiante(): string | null {
        const valuesJson = this.decodeToken();
        return valuesJson?.nombreestudiante || null;
      }
    
  
    isAdmin(): boolean {
      const valuesJson = this.decodeToken();
      const roles = valuesJson?.roles;
      return roles ? roles.includes('admin') : false;
    }
  
    isDocente(): boolean {
      const valuesJson = this.decodeToken();
      const roles = valuesJson?.roles;
      return roles ? roles.includes('docente') : false;
    }
  
    isEstudiante(): boolean {
      const valuesJson = this.decodeToken();
      const roles = valuesJson?.roles;
      return roles ? roles.includes('estudiante') : false;
    }
  
    logOut(): void {
      localStorage.clear();
    }
  }