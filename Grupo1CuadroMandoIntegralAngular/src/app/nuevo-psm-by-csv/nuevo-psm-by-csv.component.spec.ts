import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPsmByCsvComponent } from './nuevo-psm-by-csv.component';

describe('NuevoPsmByCsvComponent', () => {
  let component: NuevoPsmByCsvComponent;
  let fixture: ComponentFixture<NuevoPsmByCsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoPsmByCsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPsmByCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
