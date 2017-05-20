import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  @Input() contactos: string[];
  @Output() contactoSeleccionado: EventEmitter<string>;

  constructor() {
     this.contactoSeleccionado = new EventEmitter<string>();
   }

  ngOnInit() {
  }

  notificarEliminacionContacto(contacto: string): void {
    this.contactoSeleccionado.emit(contacto);
  }

}
