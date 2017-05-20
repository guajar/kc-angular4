import { Injectable } from '@angular/core';
import { Contacto } from './contacto';

// Una clase decorada con 'Injectable' se comporta como un servicio. Este decorador
// hace posible que el servicio pueda inyectarse como dependencia en otras clases
@Injectable()
export class ContactoService {

  // Colección de contactos
  private _contactos: Contacto[] = [
      new Contacto('Tim Cook'),
      new Contacto('Elon Musk'),
      new Contacto('Bill Gates'),
      new Contacto('Chiquito de la Calzada')
  ];

  // Obtiene una colección de contactos
  obtenerContactos(): Contacto[] {
    return this._contactos;
  }

  // Añadir contacto
  crearContacto(contacto: Contacto): void {
    this._contactos.push(contacto);
  }

  // Elimina el contacto indicado
  eliminarContacto(contacto: Contacto): void {
    this._contactos = this._contactos.filter((c) => {
      return c.nombre !== contacto.nombre;
    });
    /* Lo mismo que arriba
    this._contactos = this._contactos.map((c: Contacto): boolean => {
      return c.nombre !== contacto.nombre;
    });
    */
  }

}
