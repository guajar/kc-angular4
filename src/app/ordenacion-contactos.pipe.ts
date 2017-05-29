import { Pipe, PipeTransform } from '@angular/core';
import { Contacto } from './contacto';

// Los Pipes son clases decoradas con 'Pipe'. Se necesitan indicar el metadato
// 'name', puesto que es el que se especifica en un template para usar el pipe.
// Además tenemos que implementar en el pipe la interfaz 'PipeTransform'.
@Pipe({
  name: 'OrdenacionContactos'
})
export class OrdenacionContactosPipe implements PipeTransform {

    // La función 'transform' es de obligada implementación. Siempre recibe
    // (al menos) un parámetro, que es precisamente el que sufre la transformación.
    transform(contactos: Contacto[], ascendente: boolean): Contacto[] {

    let ordenados: Contacto[];
    let polaridadContactoAContactoB: number = ascendente ? 1 : -1;
    let polaridadContactoBContactoA: number = ascendente ? -1 : 1;

    // Si contactos tiene valor, procedemos con la ordenación.
    if (contactos && contactos.length > 1) {

      ordenados = contactos.sort((a: Contacto, b: Contacto): number => {

        let orden: number;
        let nombreContactoA = a.nombre.toLowerCase();
        let nombreContactoB = b.nombre.toLowerCase();

        if (nombreContactoA > nombreContactoB) {
          orden = polaridadContactoAContactoB;
        }
        else if (nombreContactoA < nombreContactoB) {
          orden = polaridadContactoBContactoA;
        }
        else {
          orden = 0;
        }

        return orden;
      });
    }
    // Si contactos es nulo.
    else {
      ordenados = [];
    }

    return ordenados;
  }
}
