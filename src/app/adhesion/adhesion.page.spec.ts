import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdhesionPage } from './adhesion.page';

describe('AdhesionPage', () => {
  let component: AdhesionPage;
  let fixture: ComponentFixture<AdhesionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
