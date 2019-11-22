import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsmDePuntoControlComponent } from './psm-de-punto-control.component';

describe('PsmDePuntoControlComponent', () => {
  let component: PsmDePuntoControlComponent;
  let fixture: ComponentFixture<PsmDePuntoControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsmDePuntoControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsmDePuntoControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
