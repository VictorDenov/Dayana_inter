import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAtencionesComponent } from './add-atenciones.component';

describe('AddAtencionesComponent', () => {
  let component: AddAtencionesComponent;
  let fixture: ComponentFixture<AddAtencionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAtencionesComponent]
    });
    fixture = TestBed.createComponent(AddAtencionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
