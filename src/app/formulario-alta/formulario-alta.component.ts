import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../contacto';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'formulario-alta',
  templateUrl: './formulario-alta.component.html',
  styleUrls: ['./formulario-alta.component.css']
})
export class FormularioAltaComponent implements OnInit {

  @Output() alCrearContacto: EventEmitter<Contacto>;
  
  constructor() {
    this.alCrearContacto = new EventEmitter<Contacto>();
  }

  ngOnInit() {
  }

  notificarCreacionContacto(formulario: FormGroup): void {
    // Creamos un nuevo contacto a partir de los datos del formulario
    // introducido en la caja de texto
    let contacto: Contacto = formulario.value as Contacto;
    
    // Notificamos el objeto contacto creado
    this.alCrearContacto.emit(contacto);
  }

}
