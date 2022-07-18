export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    celular: string; 
    descripcion: string;
    ciudad: string;

    constructor(nombre: string, apellido: string, email: string, celular: string, descripcion: string, ciudad: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.celular = celular;
        this.descripcion = descripcion;
        this.ciudad = ciudad;
    }
}


