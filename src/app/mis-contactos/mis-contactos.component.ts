import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-mis-contactos',
  templateUrl: './mis-contactos.component.html',
  styleUrls: ['./mis-contactos.component.css']
})
export class MisContactosComponent implements OnInit {

  private _listaContactos: Contacto[];

  // Para hacer una inyección de dependencia debemos indicar en el 
  // constructor de una clase un parámetro tipado precisamente con 
  // el servicio que queremos usar. Además debemos añadir siempre el modificador
  // de acceso.
  constructor(private _contactoService: ContactoService) { }

  // Este método es de obligatoria implementación cuando usamos la inerfaz OnInit. 
  // Puesto que no retorna nada, podemos anotarlo como 'void'. 
  // Este método se ejecuta al instanciarse la clase 'AppComponent'.
  ngOnInit() {
    this._listaContactos = this._contactoService.obtenerContactos();
  }

  avisarEliminacionContacto(contacto: Contacto): void {
    if (confirm(`¿Estás seguro de querer eliminar a ${contacto.nombre}?`)) {
      this._contactoService.eliminarContacto(contacto);
      this._listaContactos = this._contactoService.obtenerContactos();
    }
  }

}
