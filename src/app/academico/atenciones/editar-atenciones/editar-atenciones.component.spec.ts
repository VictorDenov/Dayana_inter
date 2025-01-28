import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAtencionesComponent } from './editar-atenciones.component';

describe('EditarAtencionesComponent', () => {
  let component: EditarAtencionesComponent;
  let fixture: ComponentFixture<EditarAtencionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAtencionesComponent]
    });
    fixture = TestBed.createComponent(EditarAtencionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
