import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAtencionesComponent } from './listar-atenciones.component';

describe('ListarAtencionesComponent', () => {
  let component: ListarAtencionesComponent;
  let fixture: ComponentFixture<ListarAtencionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAtencionesComponent]
    });
    fixture = TestBed.createComponent(ListarAtencionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
