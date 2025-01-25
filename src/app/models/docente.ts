export class Docente {
  PrimerNombre: string;
  SegundoNombre: string;
  PrimerApellido: string;
  SegundoApellido: string;
  NumeroCedula: number;
  TitulosTercerNivel: string;
  TitulosPosgrados: string;
  carrera: string;  
  Campus: string;
  Periodo_Academico: string;
  Correo_Electronico: string;

  // Constructor para inicializar los valores
  constructor(
    primerNombre: string,
    SegundoNombre: string,
    PrimerApellido: string,
    SegundoApellido: string,
    NumeroCedula: number,
    TitulosTercerNivel: string,
    TitulosPosgrados: string,
    carrera: string,
    Campus: string,
    Periodo_Academico: string,
    Correo_Electronico: string
  ) {
    this.PrimerNombre = primerNombre;
    this.SegundoNombre = SegundoNombre;
    this.PrimerApellido = PrimerApellido;
    this.SegundoApellido = SegundoApellido;
    this.NumeroCedula = NumeroCedula;
    this.TitulosTercerNivel = TitulosTercerNivel;
    this.TitulosPosgrados = TitulosPosgrados;
    this.carrera = carrera;
    this.Campus = Campus;
    this.Periodo_Academico = Periodo_Academico;
    this.Correo_Electronico = Correo_Electronico;
  }
}

  export class AgregarDocente {

    nombre: string;
    nombreDocente :string;
    email :string;
    password:string;
  
    constructor(nombre: string,nombreDocente:string,email:string,password:string) {
      this.nombre = nombre;
      this.nombreDocente=nombreDocente;
      this.email=email;
      this.password=password;

    }
  }
  
  