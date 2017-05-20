import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../contacto';

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  @Input() contactos: Contacto[];
  @Output() alEliminarContacto: EventEmitter<Contacto>;

  constructor() {
     this.alEliminarContacto = new EventEmitter<Contacto>();
   }

  ngOnInit() {
  }

  notificarEliminacionContacto(contacto: Contacto): void {
    // Para notificar, basta con ejecutar la función 'emit'
    this.alEliminarContacto.emit(contacto);
  }

}
