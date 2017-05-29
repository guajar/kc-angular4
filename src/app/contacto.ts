
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


    // Instanciamos una clase 'Contacto' partiendo del objeto JSON dado.
    static nuevoDesdeJson(datos: any): Contacto {
        return new Contacto(
            datos.nombre,
            datos.email,
            datos.movil,
            datos.facebook,
            datos.twitter
        )
    }   


    // Construimos la ruta del perfil del contacto en 'Facebook'.
    obtenerRutaFacebook(): string {
        return this.facebook ? `https://www.facebook.com/${this.facebook}` : null;
    }

    // Construimos la ruta del perfil del contacto en 'Twitter'.
    obtenerRutaTwitter(): string {
        return this.twitter ? `https://twitter.com/${this.twitter}` : null;
    }
}




