import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsmByCursoAcademicoAndEvComponent } from './psm-by-curso-academico-and-ev.component';

describe('PsmByCursoAcademicoAndEvComponent', () => {
  let component: PsmByCursoAcademicoAndEvComponent;
  let fixture: ComponentFixture<PsmByCursoAcademicoAndEvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsmByCursoAcademicoAndEvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsmByCursoAcademicoAndEvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
