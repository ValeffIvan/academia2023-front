import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProductosVendedorComponent } from './listar-productos-vendedor.component';

describe('ListarProductosVendedorComponent', () => {
  let component: ListarProductosVendedorComponent;
  let fixture: ComponentFixture<ListarProductosVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProductosVendedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarProductosVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
