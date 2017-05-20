
// Creamos una clase 'Contacto con los atributos propios de este tipo de entidad
export class Contacto {
    
    public id: number;
    
    // Usamos el modificador de acceso en los parámetros del constructor
    // para crear de manera automática los atributos en la clase.
    // Con '?' marcamos aquellos parámetros que sean opcionales.
    constructor(
        public nombre: string,
        public email?: string,
        public movil?: string,
        public facebook?: string,
        public twitter?: string) { }
}




