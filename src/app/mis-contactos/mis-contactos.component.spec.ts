import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/from';
import { ApiUrlProvider } from '../settings';
import { HttpModule } from '@angular/http';
import { ContactoService } from '../contacto.service';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MisContactosComponent } from './mis-contactos.component';
import { ListaContactosComponent } from '../lista-contactos/lista-contactos.component';
import { DetallesContactoComponent } from '../detalles-contacto/detalles-contacto.component';
import { OrdenacionContactosPipe } from '../ordenacion-contactos.pipe';
import { DatosContactoPipe } from '../datos-contacto.pipe';

describe('MisContactosComponent', () => {
  let component: MisContactosComponent;
  let fixture: ComponentFixture<MisContactosComponent>;

  beforeEach(async(() => {
    // Configuramos el módulo de testing necesario para probar las pruebas
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      declarations: [ 
        MisContactosComponent, 
        ListaContactosComponent, 
        DetallesContactoComponent, 
        OrdenacionContactosPipe, 
        DatosContactoPipe
      ], 
      providers: [
        ContactoService, 
        ApiUrlProvider
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Debería solicitar los contactos y almacenarlos en el componente', 
    inject([ContactoService], (ContactoService: ContactoService) => {

      // Definimos unos datos mockeados
      let contactosMockeados = [1,2,3];
      
      // Interceptamos todas las llamadas a 'obtenerContacto' del servicio y falseamos su resultado
      spyOn(ContactoService, 'obtenerContactos').and.callFake(() => {
        return Observable.from([contactosMockeados]);
      });

      // Forzamos el hook 'OnInit' para hacer la llamada al service
      component.ngOnInit();

      // Comprobamos que los datos que exponemos en el componente son los correctos 
      expect(component._listaContactos).toBe(contactosMockeados)

    }));
});
