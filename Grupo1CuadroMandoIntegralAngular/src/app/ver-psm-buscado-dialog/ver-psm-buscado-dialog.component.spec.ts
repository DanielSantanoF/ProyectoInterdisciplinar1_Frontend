import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPsmBuscadoDialogComponent } from './ver-psm-buscado-dialog.component';

describe('VerPsmBuscadoDialogComponent', () => {
  let component: VerPsmBuscadoDialogComponent;
  let fixture: ComponentFixture<VerPsmBuscadoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPsmBuscadoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPsmBuscadoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
