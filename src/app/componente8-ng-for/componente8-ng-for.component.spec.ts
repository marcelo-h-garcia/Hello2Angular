import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente8NgForComponent } from './componente8-ng-for.component';

describe('Componente8NgForComponent', () => {
  let component: Componente8NgForComponent;
  let fixture: ComponentFixture<Componente8NgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente8NgForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente8NgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
