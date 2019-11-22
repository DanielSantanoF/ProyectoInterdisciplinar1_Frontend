import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAnyadirProcesoComponent } from './modal-anyadir-proceso.component';

describe('ModalAnyadirProcesoComponent', () => {
  let component: ModalAnyadirProcesoComponent;
  let fixture: ComponentFixture<ModalAnyadirProcesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAnyadirProcesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAnyadirProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
