import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesContactoComponent } from './detalles-contacto.component';

xdescribe('DetallesContactoComponent', () => {
  let component: DetallesContactoComponent;
  let fixture: ComponentFixture<DetallesContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
