export class Docente {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    materias: Materia[];  // Relación muchos a muchos con Materia
    carrera: Carrera;     // Relación muchos a uno con Carrera
    semestres: Semestre[]; // Relación muchos a muchos con Semestre
    atencionesEstudiantes: AtencionEstudiante[]; // Relación uno a muchos con AtencionEstudiante
    roles: Role[];        // Relación muchos a muchos con Role
  
    constructor(
      id: number,
      nombre: string,
      apellido: string,
      email: string,
      password: string,
      materias: Materia[],
      carrera: Carrera,
      semestres: Semestre[],
      atencionesEstudiantes: AtencionEstudiante[],
      roles: Role[]
    ) {
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.password = password;
      this.materias = materias;
      this.carrera = carrera;
      this.semestres = semestres;
      this.atencionesEstudiantes = atencionesEstudiantes;
      this.roles = roles;
    }
  }
  
  // Modelos de las relaciones (puedes adaptarlos según las necesidades de tu aplicación)
  
  export class Materia {
    id: number;
    nombre: string;
  
    constructor(id: number, nombre: string) {
      this.id = id;
      this.nombre = nombre;
    }
  }
  
  export class Carrera {
    id: number;
    nombre: string;
  
    constructor(id: number, nombre: string) {
      this.id = id;
      this.nombre = nombre;
    }
  }
  
  export class Semestre {
    id: number;
    nombre: string;
  
    constructor(id: number, nombre: string) {
      this.id = id;
      this.nombre = nombre;
    }
  }
  
  export class AtencionEstudiante {
    id: number;
    estudianteId: number;
    fechaAtencion: Date;
  
    constructor(id: number, estudianteId: number, fechaAtencion: Date) {
      this.id = id;
      this.estudianteId = estudianteId;
      this.fechaAtencion = fechaAtencion;
    }
  }
  
  export class Role {
    id: number;
    nombre: string;
  
    constructor(id: number, nombre: string) {
      this.id = id;
      this.nombre = nombre;
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
  
  