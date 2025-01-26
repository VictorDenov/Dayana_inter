export class LoginUsuarioDto {

    nombreUsuario:string;
    email: string;
    password: string;
  
    constructor(nombreUsuario :string,email: string, password: string) {
      this.email = email;
      this.password = password;
      this.nombreUsuario=nombreUsuario;

    }
  }
