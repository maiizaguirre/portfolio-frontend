export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    celular: string; 
    fotoPerfil?: string;
    fotoPortada?: string;
    descripcion: string;
    ciudad?: string;
    pais?: string;

    constructor( nombre: string, apellido: string, celular: string, descripcion: string, email: string) {
        
        this.nombre = nombre;

        this.apellido = apellido;
        
        this.celular = celular;
       
        this.descripcion = descripcion;

        this.email = email;
       
    }
}


