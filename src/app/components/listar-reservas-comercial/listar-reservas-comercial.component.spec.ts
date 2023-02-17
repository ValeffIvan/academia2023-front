import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReservasComercialComponent } from './listar-reservas-comercial.component';

describe('ListarReservasComercialComponent', () => {
  let component: ListarReservasComercialComponent;
  let fixture: ComponentFixture<ListarReservasComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarReservasComercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarReservasComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
