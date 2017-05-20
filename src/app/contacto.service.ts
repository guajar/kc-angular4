import { Injectable } from '@angular/core';

// Una clase decorada con 'Injectable' se comporta como un servicio. Este decorador
// hace posible que el servicio pueda inyectarse como dependencia en otras clases
@Injectable()
export class ContactoService {

  // Obtiene una colección de contactos
  obtenerContactos(): string[] {
    return [
     'Tim Cook', 
     'Elon Musk', 
     'Bill Gates', 
     'Chiquito de la Calzada'
    ];
  }

}
