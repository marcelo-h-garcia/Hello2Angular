import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente5SelectImagemComponent } from './componente5-select-imagem.component';

describe('Componente5SelectImagemComponent', () => {
  let component: Componente5SelectImagemComponent;
  let fixture: ComponentFixture<Componente5SelectImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente5SelectImagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente5SelectImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
