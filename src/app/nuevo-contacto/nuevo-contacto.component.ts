import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactoService } from '../contacto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.css']
})
export class NuevoContactoComponent implements OnInit {

  // Para hacer una inyección de dependencia debemos indicar en el 
  // constructor de una clase un parámetro tipado precisamente con 
  // el servicio que queremos usar. Además debemos añadir siempre el modificador
  // de acceso.
  constructor(
    private _contactoService: ContactoService,
    private _router: Router) { }

  ngOnInit() {
  }

  // Este manejador se encarga de crear nuevos contactos en la app
  darAltaContacto(contacto: Contacto): void {
    this._contactoService.crearContacto(contacto);
    alert('El contacto se ha creado correctamente');
    this._router.navigate(['/mis-contactos']);
  }

}
