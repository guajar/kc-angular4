import { Component, OnInit } from '@angular/core';
import { Contacto } from './contacto';
import { ContactoService } from './contacto.service';

@Component({
  // Selector CSS del elemento donde se instanciará el componente
  selector: 'app-root',
  // Ruta al template correspondiente al componente
  templateUrl: './app.component.html',
  // Ruta al CSS correspondiente al componente
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  // Los atributos de clase no necesitan ser definidos con 'let.
  // Aunque los atributos se marquen como privados, siguen siendo
  // visibles para el template.
  private _title: string; 
  private _listaContactos: Contacto[];

  // Para hacer una inyección de dependencia debemos indicar en el 
  // constructor de una clase un parámetro tipado precisamente con 
  // el servicio que queremos usar. Además debemos añadir siempre el modificador
  // de acceso.
  constructor(private _contactoService: ContactoService) { }

  // Este método es de obligatoria implementación cuando usamos la inerfaz OnInit. 
  // Puesto que no retorna nada, podemos anotarlo como 'void'. 
  // Este método se ejecuta al instanciarse la clase 'AppComponent'.
  ngOnInit(): void {
    this._title = 'Super Agenda';
    this._listaContactos = this._contactoService.obtenerContactos();
  }

  avisarEliminacionContacto(contacto: Contacto): void {
   if (confirm(`¿Estás seguro de querer eliminar a ${contacto.nombre}?`)) {
      this._contactoService.eliminarContacto(contacto);
      this._listaContactos = this._contactoService.obtenerContactos();
    }
  }
}
