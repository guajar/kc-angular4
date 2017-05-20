import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../contacto';

@Component({
  selector: 'formulario-alta',
  templateUrl: './formulario-alta.component.html',
  styleUrls: ['./formulario-alta.component.css']
})
export class FormularioAltaComponent implements OnInit {

  nombre: string;
  @Output() alCrearContacto: EventEmitter<Contacto>;
  
  constructor() {
    this.alCrearContacto = new EventEmitter<Contacto>();
  }

  ngOnInit() {
  }

  notificarCreacionContacto(): void {
    // Creamos un nuevo objeto de tipo contacto a partir del nombre 
    // introducido en la caja de texto
    let contacto: Contacto = new Contacto(this.nombre);
    
    // Notificamos el objeto contacto creado
    this.alCrearContacto.emit(contacto);
  }

}
