import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componete4Component } from './componete4.component';

describe('Componete4Component', () => {
  let component: Componete4Component;
  let fixture: ComponentFixture<Componete4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componete4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Componete4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
