import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReservasAdministradorComponent } from './listar-reservas-administrador.component';

describe('ListarReservasAdministradorComponent', () => {
  let component: ListarReservasAdministradorComponent;
  let fixture: ComponentFixture<ListarReservasAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarReservasAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarReservasAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
