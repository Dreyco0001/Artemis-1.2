import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebaBotonesPage } from './prueba-botones.page';

describe('PruebaBotonesPage', () => {
  let component: PruebaBotonesPage;
  let fixture: ComponentFixture<PruebaBotonesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaBotonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
