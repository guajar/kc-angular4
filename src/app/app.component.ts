import { Component, OnInit } from '@angular/core';

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
  private title: string; 

  // Este método es de obligatoria implementación cuando usamos la inerfaz OnInit. 
  // Puesto que no retorna nada, podemos anotarlo como 'void'. 
  // Este método se ejecuta al instanciarse la clase 'AppComponent'.
  ngOnInit(): void {
    this.title = 'Buenas noches Keepcoders!!';
  }

  mostrarContactoSeleccionado(contacto: string): void {
    alert(`Contacto seleccionado: ${contacto}`);
  }
}
