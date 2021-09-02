import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente7IfVideoComponent } from './componente7-if-video.component';

describe('Componente7IfVideoComponent', () => {
  let component: Componente7IfVideoComponent;
  let fixture: ComponentFixture<Componente7IfVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente7IfVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente7IfVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
