import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarGastoComponent } from './ingresar-gasto.component';

describe('IngresarGastoComponent', () => {
  let component: IngresarGastoComponent;
  let fixture: ComponentFixture<IngresarGastoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresarGastoComponent]
    });
    fixture = TestBed.createComponent(IngresarGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
