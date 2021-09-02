import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente6NgIfComponent } from './componente6-ng-if.component';

describe('Componente6NgIfComponent', () => {
  let component: Componente6NgIfComponent;
  let fixture: ComponentFixture<Componente6NgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente6NgIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente6NgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
