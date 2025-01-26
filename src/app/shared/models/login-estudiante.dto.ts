export class LoginEstudianteDto {

    nombreEstudiante:string;
    emailEstudiante:string;
    password: string;
  
    constructor(nombreEstudiante :string,emailEstudiante:string, password: string) {
      this.nombreEstudiante=nombreEstudiante;
      this.emailEstudiante=emailEstudiante;
      this.password = password;

    }
  }
  
  