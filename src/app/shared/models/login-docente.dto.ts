
export class LoginDocenteDto {
    nombreDocente :string;
    emailDocente:string;
    password: string;
  
    constructor(nombreDocente :string,emailDocente:string, password: string) {
        this.nombreDocente =nombreDocente ;
      this.emailDocente=emailDocente;
      this.password = password;

    }
  }
  
