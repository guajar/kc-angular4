import { Observable } from 'rxjs/Rx';
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
    this._contactoService
        .crearContacto(contacto)
        .subscribe((nuevoContacto: Contacto) => {
          alert(`El contacto ${nuevoContacto.nombre} se ha creado correctamente`);
          // Podemos navegar desde un componente a través del 'Router',
          // necesitamos inyectarlos como dependecia para poder acceder al mismo
          this._router.navigate(['/mis-contactos']);
        });    
  }

}
