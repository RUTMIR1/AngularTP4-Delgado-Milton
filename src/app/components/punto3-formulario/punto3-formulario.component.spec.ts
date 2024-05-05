import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto3FormularioComponent } from './punto3-formulario.component';

describe('Punto3FormularioComponent', () => {
  let component: Punto3FormularioComponent;
  let fixture: ComponentFixture<Punto3FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Punto3FormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Punto3FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
